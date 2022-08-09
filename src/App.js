import { useEffect } from 'react';
import { useState } from 'react';
import { compareAges, compareNames, getAge } from './Utils';

const people = require('./data.json');

function App() {
	const [sortedPeople, setSortedPeople] = useState(people);
	const [sortBy, setSortBy] = useState(undefined);

	const handleSortByChange = (value) => {
		setSortBy(value);
		if (value === 'name') {
			const sorted = people.sort(compareNames);
			setSortedPeople(sorted);
		} else {
			const sorted = people.sort(compareAges);
			setSortedPeople(sorted);
		}
	};

	return (
		<div className="mx-auto max-w-xl">
			<header>
				<h1 className="text-3xl font-bold mt-16">Birthdays</h1>
			</header>
			<main>
				<form onChange={(event) => handleSortByChange(event.target.value)}>
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
