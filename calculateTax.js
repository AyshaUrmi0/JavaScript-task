
function calculateTax(income, expenses) {
    if(income<0 || expenses<0 || expenses>income)
    {
        return "Invalid Input"
    }

    const difference= income-expenses;
    return difference* 0.20;
   
}



console.log(calculateTax(1000, 200)); // 160