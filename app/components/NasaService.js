import ApodData from "../models/ApodData.js";

const apiKey = 'api_key=EOj6EuqIQEpOgtsL2lBRtzTJrbx1vQj8tvOFLrgU'
const apodUrl = 'https://api.nasa.gov/planetary/apod?'

export default class NasaService {

  getApod(date, draw) {
    fetch(apodUrl + apiKey + '&date=' + date)
      .then(res => res.json())
      .then(data => {
        draw(new ApodData(data))
      })
  }

}

