import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["source"]

  copy() {
    event.preventDefault()
    this.sourceTarget.select()
    document.execCommand("copy")

    // navigator.clipboard.readText().then(
  // clipText => document.querySelector(".editor").innerText += clipText);
  }
}
