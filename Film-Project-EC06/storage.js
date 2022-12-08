class Storage {
    static addFilmtoStorage(newFilm){
        let films=this.getfilmstoStorage()
        films.push(newFilm)
        localStorage.setItem("films",JSON.stringify(films))
    }
    static getfilmstoStorage(){
       let films;
       if (localStorage.getItem("films")=== null) {
        films=[]
       } else {
        films=JSON.parse(localStorage.getItem("films"))
       }
       return films
    }
    static deleteFilmFromStorage(filmTitle){
        let films=this.getfilmstoStorage()
        films.forEach(function(film,index){
            if (film.title===filmTitle) {
                films.splice(index,1)
            }
        });
        localStorage.setItem("films",JSON.stringify(films))
    }
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films")
    }
    
}
