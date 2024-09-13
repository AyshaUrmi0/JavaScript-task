function calculateFinalScore(obj) {
    
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }
    
    const name = obj.name;
    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    const isFFamily = obj.isFFamily;
    
    
    if (typeof name !== 'string' || 
        typeof testScore !== 'number' || testScore > 50 || 
        typeof schoolGrade !== 'number' || schoolGrade > 30 || 
        typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    
    let finalScore = testScore + schoolGrade;
    
    
    if (isFFamily) {
        finalScore += 20;
    }
    
    
    return finalScore >= 80;
}

console.log(calculateFinalScore({ name: "John", testScore: 40, schoolGrade: 20, isFFamily: true })); // true


