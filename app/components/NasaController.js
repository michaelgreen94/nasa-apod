import NasaService from "./NasaService.js";

const nasaService = new NasaService()
let app = document.getElementById('photo')

function drawApod(photo) {
  app.innerHTML = `
  <h1>${photo.name}</h1>
  <h3>${photo.date}</h3>
  <img src="${photo.hdImg}"></img>
  <p>${photo.explanation}</p>`
}

export default class NasaController {
  constructor() {
    this.getApod()
  }

  getApod(event) {
    let date = ''
    if (event) {
      event.preventDefault();
      console.log(event)
      date = event.target.date.value
    }
    nasaService.getApod(date, drawApod)
  }

}