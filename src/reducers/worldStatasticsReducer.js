import { worldStats } from '../constants';
import randomId from '../common-components/random-number';
import compareValues from '../common-components/compare-values';
import convertNumberToINRFormat from '../common-components/currency-converter';

const initialState = {
    isLoading: false,
    worldStats: [],
    worldStateForSearch: [],
    error: ''
}

const transformStats = (stats) => {
    // console.log(stats);
    let transformedWorldData = [];
    transformedWorldData = stats.response.map(data => {
        return {
            country: data.country,
            total: convertNumberToINRFormat(data.cases.total),
            active: convertNumberToINRFormat(data.cases.active),
            recovered: convertNumberToINRFormat(data.cases.recovered),
            death: convertNumberToINRFormat(data.deaths.total),
            tests: convertNumberToINRFormat(data.tests.total),
            population: convertNumberToINRFormat(data.population),
            lastUpdated: data.time,
            deltaactive: convertNumberToINRFormat(data.cases.new),
            deltadeath: convertNumberToINRFormat(data.deaths.new),
            '1mactive': convertNumberToINRFormat(data.cases['1M_pop']),
            '1mdeath': convertNumberToINRFormat(data.deaths['1M_pop']),
            '1mtests': convertNumberToINRFormat(data.tests['1M_pop']),
            key: randomId(2000, 3000)
        }
    })
    return transformedWorldData;
}

const sortWorldStats = (worldData, payload) => {
    const { data, sortOrder } = payload;
    const sortedWorldStats = JSON.parse(JSON.stringify(worldData));
    return sortedWorldStats.sort(compareValues(data, sortOrder));
}

const searchWorldStats = (worldData, searchText) => {
    console.log('asdasdadadsa');
    const searchWorldStatss = JSON.parse(JSON.stringify(worldData));
    const newWorldStats = searchWorldStatss.filter(stats => {
        if (stats.country.toUpperCase().indexOf(searchText.toUpperCase()) >= 0) {
            return true;
        }
        return false;
    })
    console.log(newWorldStats);
    return newWorldStats;
}

const worldStatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case worldStats.request: {
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        }
        case worldStats.success: {
            const tempWorldState = transformStats(action.payload);
            return {
                ...state,
                isLoading: false,
                worldStats: [...tempWorldState],
                worldStateForSearch: [...tempWorldState]
            }
        }
        case worldStats.failure: {
            return {
                ...state,
                isLoading: false,
                worldStats: [],
                worldStateForSearch: [],
                error: action.payload
            }
        }
        case worldStats.sortSuccess: {
            const tempSortWorldStats = sortWorldStats(state.worldStats, action.payload);
            return {
                ...state,
                isLoading: false,
                worldStats: [...tempSortWorldStats],
                error: ''
            }
        }
        case worldStats.searchSuccess: {
            const tempSearchWorldStats = searchWorldStats(state.worldStateForSearch, action.payload);
            return {
                ...state,
                isLoading: false,
                worldStats: [...tempSearchWorldStats],
                error: ''
            }
        }
        default: {
            return state;
        }
    }
}

export default worldStatsReducer;