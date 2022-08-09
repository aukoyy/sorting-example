import { useEffect } from 'react';
import { useState } from 'react';
import { compareAges, compareNames, getAge } from './Utils';

const people = require('./data.json');

function App() {
	const [sortedPeople, setSortedPeople] = useState(undefined);
	const [sortBy, setSortBy] = useState(undefined);

	/* const getAge = (birthday) => {
		const birthdayFormatted = new Date(birthday);
		const today = new Date();
		const yearsSinceBirth = differenceInYears(today, birthdayFormatted);
		return yearsSinceBirth;
	}; */

	/* 	function compareNames(a, b) {
		const personA = a.firstName.toUpperCase().concat(a.lastName.toUpperCase());
		const personB = b.firstName.toUpperCase().concat(b.lastName.toUpperCase());

		if (personA < personB) return -1;
		if (personA > personB) return 1;
		return 0;
	}

	function compareAges(a, b) {
		const personA = getAge(a.birthday);
		const personB = getAge(b.birthday);

		return personA - personB;
	} */

	useEffect(() => {
		if (sortBy === undefined) setSortedPeople(people);

		if (sortBy === 'name') {
			console.log(`Sort by: name!`);
			const sorted = people.sort(compareNames);
			setSortedPeople(sorted);
		}

		if (sortBy === 'age') {
			console.log(`Sort by: age!`);
			const sorted = people.sort(compareAges);
			setSortedPeople(sorted);
		}
	}, [sortBy, sortedPeople]);

	return (
		<div className="mx-auto max-w-xl">
			<header>
				<h1 className="text-3xl font-bold mt-16">Birthdays</h1>
			</header>
			<main>
				<form onChange={(event) => setSortBy(event.target.value)}>
					<legend>Select wether to sort on name or age</legend>
					<div>
						<input
							type="radio"
							id="name"
							value="name"
							checked={sortBy === 'name'}
						/>
						<label className="ml-4" htmlFor="name">
							Name
						</label>
					</div>

					<div>
						<input
							type="radio"
							id="age"
							value="age"
							checked={sortBy === 'age'}
						/>
						<label className="ml-4" htmlFor="age">
							Age
						</label>
					</div>
				</form>

				<table className="w-full mt-24">
					<thead>
						<tr>
							<th>Name</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{sortedPeople &&
							sortedPeople.map((person) => {
								return (
									<tr key={person.birthday} className="text-center">
										<td>
											{person.firstName} {person.lastName}
										</td>
										<td>{getAge(person.birthday)}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</main>
		</div>
	);
}

export default App;
