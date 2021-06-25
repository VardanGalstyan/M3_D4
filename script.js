window.onload = () => {
    myFetch()
   

}

let myBooksArray = []
let myTotalPriceSum = []
let myTotalBasketSum = []
let totalSum = ''

const myFetch = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then(resp => resp.json())
        .then(data => {
            myBooksArray = data
            console.log(data);
        })
}

const mainColumn = document.querySelector('.container .myCol')

const theBrowseButton = () => {

    console.log(myBooksArray);
    myBooksArray.forEach(book => {
        mainColumn.innerHTML += `<div class="card my-3 mx-2" >
        <img src="${book.img}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
        <p class="card-text">
          ${book.title}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="addtoCard(event)">
              Add to Card
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deleteCard(event)">
              Skip
            </button>
          </div>
          <small class="text-muted">${book.price}$</small>
        </div>
      </div>
      </div>`
    })
}

const addtoCard = (e) => {
    const listGroup = document.querySelector('.list-group')

    const myCard = e.currentTarget.closest('.card').querySelector('.card-text')
    const myImg = e.currentTarget.closest('.card').querySelector('.card-img-top')
    const myPrice = e.currentTarget.closest('.card').querySelector('.text-muted')

    listGroup.innerHTML += ` <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${myImg.src}" alt="..." style="width: 100%; height=80%" class='img-fluid'>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${myCard.innerText}</h5>
          <span class="badge badge-success">${myPrice.innerText}</span>
        </div>
      </div>
    </div>
  </div>`


    myTotalPriceSum.push(myPrice.innerText)
    baketTotalSum()
    const myBadgeSum = document.querySelector('.main .listBasket .badge').innerText
    console.log(myBadgeSum);
    // myBadgeSum = totalSum
    // console.log(myBadgeSum);


}

const deleteList = (e) => {
    const theList = e.currentTarget.closest('.list-group-item').remove()
    console.log(theList);
}


const deleteCard = (e) => {
    const theList = e.currentTarget.closest('.card').remove()
    console.log(theList);
}

// SEARCH BUTTON
const searchTheBooks = (e) => {
    const searchInput = e.currentTarget.value
    if (searchInput.length >= 2) {
        // console.log('here');
        mainColumn.innerHTML = ''
        myBooksArray.filter(book => {
            if (book.title.toLowerCase().includes(searchInput)) {
                // console.log('includes');
                mainColumn.innerHTML += `<div class="card my-3 mx-2" >
                <img src="${book.img}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                <p class="card-text">
                  ${book.title}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="addtoCard(event)">
                      Add to Card
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deleteCard(event)">
                      Skip
                    </button>
                  </div>
                  <small class="text-muted">${book.price}$</small>
                </div>
              </div>
              </div>`

            }

        })
    } else {
        mainColumn.innerHTML = ''
        console.log('not enought letters');
    }
}

const baketTotalSum = () => {

    if (myTotalPriceSum.length > 0) {
        myTotalPriceSum.map(item => {
            const sliced = [...item].slice(0, -1).join('').push(parseInt(sliced))
              console.log(sliced);
            // myTotalBasketSum
            // const sum = myTotalBasketSum.reduce((acc, curr) => acc + curr, 0)
            // // totalSum = sum
            // console.log(sum);
            
        })
    } else {

    }
    
}

