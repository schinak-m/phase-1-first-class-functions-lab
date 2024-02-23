// Code your solution in this file!


const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (a) => {
    return function (fare){
        return fare*a
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, drivers) => {
    return drivers(arrayOfDrivers)
}

