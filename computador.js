function Computadora(marca, modelo, preco) {
    this.marca = marca;
    this.modelo = modelo;
    let _preco = preco; 

    this.dizMarcaModelo = function() {
        console.log(this.marca + ' ' + this.modelo);
    }

    // Getters e setters para o preço
    this.getPreco = function() {
        return _preco;
    }
    this.setPreco = function(valor) {
        if (typeof valor === 'number') {
            _preco = valor;
        } else {
            console.log("Preço deve ser um número");
        }
    }
}

function Laptop(marca, modelo, bateria, preco) {
    this.bateria = bateria; // em horas

    this.dizBateria = function() {
        console.log('Bateria dura ' + this.bateria + ' horas');
    }

    Computadora.call(this, marca, modelo, preco); 
}

function Desktop(marca, modelo, monitor, preco) {
    this.monitor = monitor; //  em polegadas

    this.dizMonitor = function() {
        console.log('Monitor de ' + this.monitor + ' polegadas');
    }

    Computadora.call(this, marca, modelo, preco); 
}

const laptop1 = new Laptop('Dell', 'XPS 13', 10, 1200);
const desktop1 = new Desktop('HP', 'Pavilion', 27, 800);

laptop1.dizMarcaModelo();
laptop1.dizBateria();
console.log('Preço inicial do laptop:', laptop1.getPreco());
laptop1.setPreco(1300);
console.log('Preço atualizado do laptop:', laptop1.getPreco());

desktop1.dizMarcaModelo();
desktop1.dizMonitor();
console.log('Preço inicial do desktop:', desktop1.getPreco());
desktop1.setPreco(850);
console.log('Preço atualizado do desktop:', desktop1.getPreco());