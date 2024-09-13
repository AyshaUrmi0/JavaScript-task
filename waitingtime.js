function waitingTime(waitingTimes, serialNumber) {
    
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }
    const averageTime = Math.round(sum / waitingTimes.length);  
    
    const peopleLeft = serialNumber - 1 - waitingTimes.length;
    
    const waitingTimeForIsrat = peopleLeft > 0 ? peopleLeft * averageTime : 0;
    
    return waitingTimeForIsrat;
}

console.log(object.waitingTime([2, 3, 4, 5], 10)); // 6