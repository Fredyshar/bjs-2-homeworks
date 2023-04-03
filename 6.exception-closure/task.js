function parseCount(number) {
    const parse = Number.parseFloat(number);
    if (isNaN(parse)) {
        const error =  new Error("Невалидное значение");
        throw error;
    } else {
        return parse;
    }
    
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(error) {
        return error;
    } finally {}
}

class Triangle {
    constructor(side1, side2, side3) {
        if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        } else {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        }
    }
    
    get perimeter() {
        let result = (this.side1 + this.side2 + this.side3);
        return parseCount(result);
    }
    get area () {
        const p = this.perimeter / 2; // p = semiPerimeter
         let res = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)).toFixed(3);
         return parseCount(res);
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch(error) {
        return {
            get area() { return "Ошибка! Треугольник не существует"},
            get perimeter() { return "Ошибка! Треугольник не существует"}
        }
    } finally {}
}