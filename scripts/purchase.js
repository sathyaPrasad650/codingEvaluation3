let data = JSON.parse(localStorage.getItem('user'))

let purchaseData = JSON.parse(localStorage.getItem('purchase'))

// console.log('pppp', purchaseData)


function displayAmount(data) {
    let amount = data[0].wallet
    let wallet = document.querySelector('#balance')
    wallet.innerText = amount
}

displayAmount(data)

let voucherList = document.querySelector('#purchased_list')

function append2(purchaseData) {
    purchaseData.forEach(function (el) {
        let box = document.createElement('div')
        box.setAttribute('class', 'voucher')

        let img = document.createElement('img')
        img.src = el.image

        let p1 = document.createElement('p')
        p1.innerText = el.name

        let p2 = document.createElement('p')
        p2.innerText = el.price

        box.append(img, p1, p2)

        voucherList.append(box)
    })
}

append2(purchaseData)