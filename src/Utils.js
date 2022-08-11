import differenceInYears from 'date-fns/differenceInYears';

export const getAge = (birthday) => {
	const birthdayFormatted = new Date(birthday);
	const today = new Date();
	const yearsSinceBirth = differenceInYears(today, birthdayFormatted);
	return yearsSinceBirth;
};

export const compareNames = (a, b) => {
	const personA = a.firstName.concat(a.lastName).toUpperCase();
	const personB = b.firstName.concat(b.lastName).toUpperCase();

	if (personA < personB) return -1;
	if (personA > personB) return 1;
	return 0;
};

export const compareAges = (a, b) => {
	const personA = getAge(a.birthday);
	const personB = getAge(b.birthday);

	return personA - personB;
};
