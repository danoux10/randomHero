class WheelGenerator {
  constructor(contentId, data) {
    this.container = document.getElementById(contentId);
    this.data = data;
    this.elements = data.length;
  }

  drawWheel() {
    const rotate = 360/this.elements;
    const polygonValue = rotate + 10 + '%';
    const polygon = 'polygon(0 0,' + polygonValue + ' 0,100% 100%, 0 ' + polygonValue + ')';
    for (let i = 0; i < this.elements; i++) {
      const name = this.data[i].name;
      const color = '#'+this.data[i].color;
      const number = document.createElement('div');

      const view = document.createElement('p');
      number.classList.add('number');

      number.style.background = color;
      number.style.transform = 'rotate(' + rotate*i + 'deg)';
      number.style.clipPath = polygon;
      view.textContent = name;

      number.appendChild(view);
      this.container.appendChild(number);
    }
  }
}

const tankSpin = new WheelGenerator('tankWheel', tank);
const dpsSpin = new WheelGenerator('dpsWheel', dps);
const supportSpin = new WheelGenerator('supportWheel', support);

tankSpin.drawWheel();
dpsSpin.drawWheel();
supportSpin.drawWheel();