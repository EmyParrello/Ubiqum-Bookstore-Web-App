var app = new Vue({
    el: "#app",

    data: {
        url: "https://api.myjson.com/bins/zyv02",
        books: [],
        searchBooks: "",
        noBookFound: false,
    },

    methods: {
        getData: function (url) {
            fetch(url)
                .then(function (data) {
                    return data.json();
                })
                .then(function (myData) {
                    console.log(myData);
                    app.books = myData.books;
                })
        },
        
        searchData: function (book) {
            return this.searchBooks == "" || book.title.toLowerCase().includes(this.searchBooks.trim().toLowerCase()) || book.description.toLowerCase().includes(this.searchBooks.trim().toLowerCase()) || book.language.toLowerCase().includes(this.searchBooks.trim().toLowerCase());
        }
    },

    created() {
        this.getData(this.url);
    },
    
    updated() {
        var booksFound = document.getElementById("book-list").children.length;
        if (booksFound == 0) {
            this.noBookFound = true;
        } else {
            this.noBookFound = false;
        }
    }
})
