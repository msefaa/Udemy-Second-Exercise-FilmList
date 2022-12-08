function UI() {
    
}
UI.prototype.addFilmToUI=function (newFilm) {

  const filmList=document.getElementById("films")
  filmList.innerHTML+=`
  <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> 
  `
}
UI.prototype.clearInputs=function (element1,element2,element3) {
    element1.value=''
    element2.value=''
    element3.value=''
}
UI.prototype.displayMessage=function (message,type) {
const cardBody=document.querySelector(".card-body")
const alert=document.createElement("div")
alert.className=`alert alert-${type}`
alert.role="alert"
alert.textContent=message
cardBody.appendChild(alert)
setTimeout(() => {
    alert.remove()
}, 1500);
}
UI.prototype.deleteFilmFromUI=function (element){
    element.parentElement.parentElement.remove()
}
UI.prototype.clearAllFilmsFromUI=function (){
    const filmList=document.getElementById("films")
   filmList.remove()

}
