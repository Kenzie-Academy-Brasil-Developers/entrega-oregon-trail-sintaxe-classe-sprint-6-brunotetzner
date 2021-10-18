class Traveler {
    constructor(nome) {
        this._nome = nome,
            this._food = 1,
            this._health = true
    }
    hunt() {
        return this._food += 2
    }
    eat() {
        if (this._food > 0) {
            return this._food = this._food - 1
        }
        else if (this._food === 0) {
            return this._health = false
        }

    }
}
class Wagon {
    constructor(capacity, passageiros) {

        this._capacity = capacity
        this._passageiros = []

    }

    getAvailableSeatCount() {
        return this._capacity - this._passageiros.length

    }

    join(name) {
        if (this.getAvailableSeatCount() > 0) {
            return this._passageiros.push(name)
        }
        else {
            return `Não há espaço na carroça:(`
        }
    }

    shouldQuarantine() {
        let arrayOfHealth = []
        for (let i = 0; i < this._passageiros.length; i++) {
            arrayOfHealth.push(this._passageiros[i]._health)
        }
        if (arrayOfHealth.includes(false)) {
         return true
        }
           else{return false
            //console.log(arrayOfHealth)
          }
    }

    totalFood() {
        let comidaTotal = 0
        for (let i = 0; i < this._passageiros.length; i++) {
            comidaTotal += this._passageiros[i]._food
        }
        return comidaTotal
    }
}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);