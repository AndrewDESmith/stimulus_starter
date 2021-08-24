import { Controller } from "stimulus"

export default class extends Controller {
  // create a property for the target by adding name to our controller’s list of target definitions.
  static targets = ["name"]

  greet() {
    const element = this.nameTarget
    const name = element.value
    console.log(`Hello, ${this.name}`)
  }

  // name getter
  get name() {
    return this.nameTarget.value
  }
}
