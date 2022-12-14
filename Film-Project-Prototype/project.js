//domlari tanimlama
const form =document.getElementById("film-form")
const titleElement=document.getElementById("title")
const directorElement=document.getElementById("director")
const urlElement=document.getElementById("url")
const cardbody=document.querySelectorAll(".card-body")[1]
const clear=document.getElementById("clear-films")
//Start ui
 const ui=new UI()
 const storage=new Storage()
 //All events
eventListeners()
function eventListeners () {
    form.addEventListener("submit" ,addFilm)
    cardbody.addEventListener("click", deleteFilm)
    clear.addEventListener("click",clearallFilms)
    document.addEventListener("DOMContentLoaded",function(){
        const films=storage.getfilmstoStorage()
        films.forEach(film => {
            ui.addFilmToUI(film)
        });
    })
}
function addFilm(e) {
    const title=titleElement.value
    const director=directorElement.value
    const url=urlElement.value
    const newFilm=new Film(title,director,url)
   if (title===''||director===''||url==='') {
    ui.displayMessage("Hatali yada eksik giris yaptiniz!...","danger")
   } else {
    ui.addFilmToUI(newFilm)
    storage.addFilmtoStorage(newFilm)
    //buraya storage eklenecek
    ui.displayMessage("Yeni film listeye eklendi!...","success")
   }
   ui.clearInputs(titleElement,directorElement,urlElement)
    e.preventDefault()
}
function deleteFilm(e) {
    
    if (e.target.id==="delete-film") {
        ui.deleteFilmFromUI(e.target)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessage("Film basariyla silindi...!","success")
    }
} 
function clearallFilms() {
    if (confirm("Tum filmleri silmek istediginize Emin misiniz...?")===true) {
        ui.clearAllFilmsFromUI()
        storage.clearAllFilmsFromStorage()
    }
   
}