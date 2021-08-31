import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["slide"]
  // Similar to targets, you define values in a Stimulus controller by describing them in a static object property called values.
  // Declaring a static value will cause Stimulus to create a this.indexValue controller property associated with a data-slideshow-index-value attribute.
  static values = { index: Number }

  next() {
    this.indexValue == this.lastSlideTargetIndex() ? this.indexValue = 0 : this.indexValue++
    this.showCurrentSlide()
  }

  previous() {
    this.indexValue == 0 ? this.indexValue = this.lastSlideTargetIndex() : this.indexValue--
    this.showCurrentSlide()
  }

  lastSlideTargetIndex() {
    return this.slideTargets.length - 1
  }

  // Stimulus calls the indexValueChanged() method at initialization and in response to any change to the data-slideshow-index-value attribute.
  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}
