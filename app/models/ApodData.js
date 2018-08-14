export default class ApodData {
  constructor(reqData) {
    this.name = reqData.copyright
    this.date = reqData.date
    this.explanation = reqData.explanation
    this.hdImg = reqData.hdurl
    this.title = reqData.title
  }
}