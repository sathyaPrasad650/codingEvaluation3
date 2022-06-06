let data = JSON.parse(localStorage.getItem('user'))
// console.log(data[0].wallet)

let voucherData = JSON.parse(localStorage.getItem('purchase')) || []

function displayAmount(data) {
    let amount = data[0].wallet
    let wallet = document.querySelector('#wallet_balance')
    wallet.innerText = amount
}

displayAmount(data)

const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

fetch(url).then(function (result1) {
    return result1.json()
}).then(function (result2) {
    let data = result2[0].vouchers
    // console.log(data)
    // append1(data)
    append2(data)
})

let voucherList = document.querySelector('#voucher_list')


function append1(data) {
    data.forEach(function (el) {
        let d = document.createElement('div')
        d.innerHTML = `<div class="voucher">
        <img src="${el.image}" alt="" />
        <p class="name">${el.name}</p>
        <p class="price">${el.price}</p>
        <button class="buy_voucher" onclick="button(${el})">BUY</button>
      </div>`

        voucherList.append(d)
    })
}

function append2(data) {
    data.forEach(function (el) {
        let box = document.createElement('div')
        box.setAttribute('class', 'voucher')

        let img = document.createElement('img')
        img.src = el.image

        let p1 = document.createElement('p')
        p1.innerText = el.name

        let p2 = document.createElement('p')
        p2.innerText = el.price

        let btn = document.createElement('button')
        btn.setAttribute('class', 'buy_voucher')
        btn.innerText = 'BUY'
        btn.addEventListener('click', function () {
            button(el)
        })

        box.append(img, p1, p2, btn)

        voucherList.append(box)
    })
}

function button(el) {
    let cost = el.price

    let walletAmount = data[0].wallet

    if (walletAmount > cost) {
        // console.log("Hurray! purchase successful")
        alert("Hurray! purchase successful")

        walletAmount -= cost

        data[0].wallet = walletAmount
        displayAmount(data)

        localStorage.setItem('user', JSON.stringify(data))

        voucherData.push(el)

        localStorage.setItem('purchase', JSON.stringify(voucherData))
    }
    else {
        // console.log("Sorry! insufficient balance")
        alert("Sorry! insufficient balance")
    }
}