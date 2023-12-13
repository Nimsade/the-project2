import { countries } from "./countries.service.js";
import { createCardsList } from "./dom.service.js";

function sortByNameAsc() {
	const sortedCountries = countries
		.slice()
		.sort((a, b) => a.name.common.localeCompare(b.name.common));
	createCardsList(sortedCountries);
}

function sortByNameDesc() {
	const sortedCountries = countries
		.slice()
		.sort((a, b) => b.name.common.localeCompare(a.name.common));
	createCardsList(sortedCountries);
}

function sortByPopulationDesc() {
	const sortedCountries = countries
		.slice()
		.sort((a, b) => b.population - a.population);
	createCardsList(sortedCountries);
}

function sortByPopulationLow() {
	const sortedCountries = countries
		.slice()
		.sort((a, b) => a.population - b.population);
	createCardsList(sortedCountries);
}

export {
	sortByNameAsc,
	sortByNameDesc,
	sortByPopulationDesc,
	sortByPopulationLow,
};
