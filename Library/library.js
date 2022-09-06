console.log("js file kam kar raha hai");

//constructor
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constrctor

function Display() {
}

//write method to disply prototype
Display.prototype.add = function (books) {
   tableBody = document.getElementById('tableBody')
    let uiString = `<tr>
                        <td>${books.name}</td>
                        <td>${books.author}</td>
                        <td>${books.type}</td>
                   </tr>`;
    tableBody.innerHTML += uiString; 
    localStorage.getItem(books);


}



Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();

}


let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryformsubmit);


function libraryformsubmit(e) {
    console.log("form submitted");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;

    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let books = new book(name, author, type)
    console.log(books)
    let display = new Display()
    display.add(books);

    display.clear();
    e.preventDefault();

}