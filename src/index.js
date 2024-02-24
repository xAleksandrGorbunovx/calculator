import readlineSync from 'readline-sync';

const calculator = {
  read() {
    this.a = Number(readlineSync.question('Num A: '));
    this.b = Number(readlineSync.question('Num B: '));
  },

  sum() {
    console.log(this.a + this.b);
  },

  mul() {
    console.log(this.a * this.b);
  },
};

export default calculator;
