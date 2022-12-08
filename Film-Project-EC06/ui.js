class UI{
  static addFilmToUI(newFilm) {

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
  static clearInputs(element1,element2,element3) {
      element1.value=''
      element2.value=''
      element3.value=''
  }
  static displayMessage(message,type) {
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
  static deleteFilmFromUI(element){
      element.parentElement.parentElement.remove()
  }
  static clearAllFilmsFromUI(){
      const filmList=document.getElementById("films")
     filmList.remove()
  }
}
