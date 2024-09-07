const button = document.querySelector('#calculate');
button.addEventListener('click', amount)

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip)

function amount(e) {
    e.preventDefault(); //чтобы страница не перезагружалась
    const bill = document.querySelector('#bill').value;
    const number = document.querySelector('#number').value;
    const tip = document.querySelector('#tip').value;

    if (bill === '' || number === '' || number < 1) {
        Swal.fire({
            icon: "error",
            title: "Error !",
            text: "Please enter your information !",
          });
    }

    let billPP = bill/number;

    let tipPP = (bill * tip) / number;

    let totalPP = billPP + tipPP;

    document.querySelector('#billR').textContent = billPP.toFixed(2);
    document.querySelector('#tipR').textContent = tipPP.toFixed(2);
    document.querySelector('#totalR').textContent = totalPP.toFixed(2);
}

function showTip(e) {
    e.preventDefault();
    tip.style.display = 'block';
}

