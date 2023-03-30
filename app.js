const searchBar = document.getElementById("searchbar");
const searchBtn = document.getElementById("searchbtn");
// Notes there are
const searchRslts = document.getElementById("searchresults");
const item = document.getElementById("item");

const dividedSearchRslts = searchRslts.querySelectorAll("li");

const deleteButton = document.getElementById("searchbtn");




searchBar.addEventListener('input', () => {
    const searched = searchBar.value.toLowerCase();

     dividedSearchRslts.forEach((item) => {
        let text = item.textContent

        if(text.toLowerCase().includes(searched.toLowerCase())) {
            item.style.display = '';
        }
        else {
            item.style.display = 'none';
        }
     });
})

deleteButton.addEventListener('click', () => {
    searchBar.value = "";
})



    
