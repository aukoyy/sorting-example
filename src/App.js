import { useState } from 'react';
import { compareAges, compareNames, getAge } from './Utils';

const people = require('./data.json');

function App() {
	const [sortedPeople, setSortedPeople] = useState(people);
	const [sortBy, setSortBy] = useState(undefined);
	const [displayFirst, setDisplayFirst] = useState('name-first');

	const handleSortByChange = (value) => {
		console.log(value);
		setSortBy(value);
		if (value === 'name') {
			const sorted = people.sort(compareNames);
			setSortedPeople(sorted);
		} else {
			const sorted = people.sort(compareAges);
			setSortedPeople(sorted);
		}
	};

	const handleDisplayFirstChange = (value) => {
		console.log(value);
		setDisplayFirst(value);
		if (value === 'name-first') {
			setDisplayFirst(value);
		} else {
			setDisplayFirst(value);
		}
	};

	return (
		<div className="mx-auto max-w-xl">
			<header>
				<h1 className="text-3xl font-bold mt-16">Birthdays</h1>
			</header>
			<main>
				<form onChange={(event) => handleSortByChange(event.target.value)}>
					<h3 className="text-xl font-bold mt-8">
						Select whether to sort on name or age
					</h3>
					<ul className="grid gap-6 w-full md:grid-cols-2 mt-4">
						<li>
							<input
								type="radio"
								id="name"
								name="hosting"
								value="name"
								className="hidden peer"
								checked={sortBy === 'name'}
							/>
							<label
								htmlFor="name"
								className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div className="block">
									<div className="w-full text-lg font-semibold">Name</div>
									<div className="w-full">
										Sort the list by names alphabetically
									</div>
								</div>
							</label>
						</li>
						<li>
							<input
								type="radio"
								id="age"
								name="hosting"
								value="age"
								className="hidden peer"
								checked={sortBy === 'age'}
							/>
							<label
								htmlFor="age"
								className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div className="block">
									<div className="w-full text-lg font-semibold">Age</div>
									<div className="w-full">
										Sort the list from youngest to oldest
									</div>
								</div>
							</label>
						</li>
					</ul>
				</form>

				<form
					onChange={(event) => handleDisplayFirstChange(event.target.value)}
				>
					<h3 className="text-xl font-bold mt-8">
						Select what order you want the list to be displayed in
					</h3>
					<ul className="grid gap-6 w-full md:grid-cols-2 mt-4">
						<li>
							<input
								type="radio"
								id="name-first"
								name="hosting"
								value="name-first"
								className="hidden peer"
								checked={displayFirst === 'name-first'}
							/>
							<label
								htmlFor="name-first"
								className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div className="block">
									<div className="w-full font-semibold">Name first</div>
								</div>
							</label>
						</li>
						<li>
							<input
								type="radio"
								id="age-first"
								name="hosting"
								value="age-first"
								className="hidden peer"
								checked={displayFirst === 'age-first'}
							/>
							<label
								htmlFor="age-first"
								className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div className="block">
									<div className="w-full font-semibold">Age first</div>
								</div>
							</label>
						</li>
					</ul>
				</form>

				<table className="w-full mt-24">
					<thead>
						{displayFirst === 'name-first' ? (
							<tr>
								<th>Name</th>
								<th>Age</th>
							</tr>
						) : (
							<tr>
								<th>Age</th>
								<th>Name</th>
							</tr>
						)}
					</thead>
					<tbody>
						{sortedPeople &&
							sortedPeople.map((person) => {
								return displayFirst === 'name-first' ? (
									<tr key={person.birthday} className="text-center">
										<td>
											{person.firstName} {person.lastName}
										</td>
										<td>{getAge(person.birthday)}</td>
									</tr>
								) : (
									<tr key={person.birthday} className="text-center">
										<td>{getAge(person.birthday)}</td>
										<td>
											{person.firstName} {person.lastName}
										</td>
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
