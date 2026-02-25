document.getElementById('principal').focus();

function simple() {
    let principal = document.getElementById('principal').value;
    let rate = document.getElementById('rate').value;
    let time = document.getElementById('time').value;
    principal=parseFloat(principal);
    rate=parseFloat(rate);
    time=parseFloat(time);
    
    let result = document.getElementById('result');

    let interest = principal * rate/100 * time;
    interest = interest.toFixed(2);
    result = parseFloat(result);
    let total = interest+ principal;
    total = total.toFixed(2);
    result.innerHTML = `The Simple Interest is: $${interest}
    The total amount is $${total}`;
    
}

document.getElementById('time').addEventListener('change', simple);