import NasaController from "./components/NasaController.js";

class App {
  constructor() {
    this.controllers = {
      apod: new NasaController()
    }
  }
}

const app = new App()
window.app = app