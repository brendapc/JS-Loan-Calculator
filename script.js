function calculate(){
    var amount = document.getElementById("amount")
    var apr = document.getElementById("apr")
    var years = document.getElementById("years")
    var payment = document.getElementById("payment")
    var total = document.getElementById("total")
    var toalInterest = document.getElementById("totalInterest")

    var principal = parseFloat(amount.value)
    var interest = parseFloat(apr.value)/100/12
    var payments = parseFloat(years.value)*12

    var x = Math.pow(1+ interest, payments) 
    var monthly = (principal*x*interest)/(x-1)

    if(isFinite(monthly)){
        payment.innerHTML = monthly.toFixed(2)
        total.innerHTML = (monthly*payments).toFixed(2)
        toalInterest.innerHTML = ((monthly*payments)-principal).toFixed(2)
        
        save(amount, apr, years)

        chart(principal, interest, monthly, payments)
    }else{
        payment.innerHTML = ''
        total.innerHTML = ''
        toalInterest.innerHTML = ''
        chart()
    }
    function save(amount, apr, years){
        if(window.localStorage){
            localStorage.loan_amount = amount,
            localStorage.loan_apr = apr,
            localStorage.loan_years = years
        }
        
        window.onload = function(){
            if(window.localStorage && localStorage.loan_amount){
                document.getElementById("amount").value = localStorage.loan_amount;
                document.getElementById("apr").value = localStorage.loan_apr
                document.getElementById("years").value = localStorage.loan_years
            }
        }
    }

}

