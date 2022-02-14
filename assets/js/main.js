function createCalculator() {
  return {
    display: document.querySelector('.display'),

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calculate() {
      
    },
    
    start() {
      this.clickButtons();
    },

    clickButtons() {
      document.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contais('btn-num')) {
          this.btnForDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.deleteOne();
        }

        if(el.classList.contains('btn-eq')) {
          this.calculate();
        }

      }.bind(this));
    },

    btnForDisplay(value) {
      this.display.value += value;
    }

  };
}

const calculator = createCalculator();
calculator.start();
