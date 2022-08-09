import { useEffect, useState } from 'react';
import { compareAges, compareNames, getAge } from './Utils';

const people = require('./data.json');

const SortIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="ml-1 w-3 h-3 mt-0.5"
		aria-hidden="true"
		fill="currentColor"
		viewBox="0 0 320 512"
	>
		<path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
	</svg>
);

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
		<div className="dark:bg-slate-100">
			<div className="mx-auto max-w-xl">
				<header>
					<h1 className="text-3xl font-bold pt-16">Birthdays</h1>
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

					<div className="py-16">
						<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
							<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
								<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									{displayFirst === 'name-first' ? (
										<tr>
											<th
												scope="col"
												className="py-3 px-6"
												onClick={() => handleSortByChange('name')}
											>
												<div className="flex">
													<p>Name</p>
													<SortIcon />
												</div>
											</th>
											<th
												scope="col"
												className="py-3 px-6"
												onClick={() => handleSortByChange('age')}
											>
												<div className="flex">
													<p>Age</p>
													<SortIcon />
												</div>
											</th>
										</tr>
									) : (
										<tr>
											<th
												scope="col"
												className="py-3 px-6"
												onClick={() => handleSortByChange('age')}
											>
												<div className="flex">
													<p>Age</p>
													<SortIcon />
												</div>
											</th>
											<th
												scope="col"
												className="py-3 px-6"
												onClick={() => handleSortByChange('name')}
											>
												<div className="flex">
													<p>Name</p>
													<SortIcon />
												</div>
											</th>
										</tr>
									)}
								</thead>
								<tbody>
									{sortedPeople &&
										sortedPeople.map((person) => {
											return displayFirst === 'name-first' ? (
												<tr
													className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
													key={person.birthday}
												>
													<td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
														{person.firstName} {person.lastName}
													</td>
													<td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
														{getAge(person.birthday)}
													</td>
												</tr>
											) : (
												<tr
													className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
													key={person.birthday}
												>
													<td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
														{getAge(person.birthday)}
													</td>
													<td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
														{person.firstName} {person.lastName}
													</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
