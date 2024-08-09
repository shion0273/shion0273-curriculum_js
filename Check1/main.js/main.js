//js 初級テスト
//問１
let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven(num) {
    return num %2 ===0;
}
let num = numbers.filter(isEven);
console.log(num + 'は偶数です');
   
//問２
class Car{

    constructor(gasoline, number){
        this.gasoline = gasoline;
        this.number = number;
    }

    getNumGas(){
        console.log(`ガソリンは${this.gasoline}です。ナンバーは${this.number}です`);
    }
}
let car = new Car('レギュラー',1234);
car.getNumGas();