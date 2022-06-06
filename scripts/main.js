let userArr = JSON.parse(localStorage.getItem('user')) || [];

function getData(event) {
    event.preventDefault()
    let obj = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        address: document.querySelector('#address').value,
        wallet: document.querySelector('#amount').value,
    }
    let name = document.querySelector('#name')
    name.value = ""
    let email = document.querySelector('#email')
    email.value = ""
    let address = document.querySelector('#address')
    address.value = ""
    let wallet = document.querySelector('#amount')
    wallet.value = ""
    // console.log(obj)
    userArr.push(obj)
    // console.log(userArr)
    localStorage.setItem('user', JSON.stringify(userArr))
}

// console.log(userArr)