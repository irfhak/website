let isopen = false;
const dropdownel = document.querySelector(".dropdown");
function togglenav(){
    console.log(dropdownel)
    if (isopen == false){
        isopen = true
        dropdownel.classList.remove("hiddendropbar")
        return
    }
    isopen = false
    dropdownel.classList.add("hiddendropbar")
}
