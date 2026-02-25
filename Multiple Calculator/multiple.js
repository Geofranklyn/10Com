
function multiple() {
    let mult = document.getElementById('multiple').value;
    mult = parseFloat(mult);
    let check = document.getElementById('checking').value;
    check = parseFloat(check);
    console.log(`Checking if ${check} is a multiple of ${mult}`);
    let result = document.getElementById('result');
    if (check % mult === 0) {
        result.innerHTML = `Yes, ${check} is a multiple of ${mult}`;
        console.log('A multiple')
    } else {
        result.innerHTML = `No, ${check} is not a multiple of ${mult},
        as the remainder of ${check} divided by ${mult} is ${check % mult}`;
        console.log('Not a multiple')
    }
}

document.getElementById('checking').addEventListener('change', multiple);