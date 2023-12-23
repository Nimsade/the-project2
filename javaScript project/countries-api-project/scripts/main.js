import { createCardsList } from "./services/dom.service.js";
import * as SortService from "./services/sort.service.js";

createCardsList();


window.sortAZ = SortService.sortByNameAsc;
window.sortZA = SortService.sortByNameDesc;
window.sortPopulationDesc = SortService.sortByPopulationDesc;
window.sortPopulationLow = SortService.sortByPopulationLow;
