const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, name){
    return drivers.filter(drivers => drivers.toLowerCase().includes(name.toLowerCase()))
};

function fuzzyMatch(drivers, driverString){
    return drivers.filter(driver => driver.toLowerCase().substring(0, driverString.length) === driverString.toLowerCase())
};

function matchName(drivers, driverName){
    return drivers.filter(data => data.name === driverName);
};