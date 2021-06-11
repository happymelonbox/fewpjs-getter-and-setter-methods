// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
        this.pi = Math.PI
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return this.pi * (this.radius * 2)
    }
    get area(){
        return this.pi *(this.radius * this.radius)
    }

    set diameter(value){
        this.radius = value/2
    }

    set circumference(value){
       this.radius = (value / this.pi)/2
    }
}