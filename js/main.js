const canvas = document.getElementById('myCanvas')
let el = document.getElementById('coin')

el.style.left = 10

var score = 0

const ctx = canvas.getContext('2d')
const car = new Car(200,200,30,50)


animate()

function animate() {
    car.update()
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    car.draw(ctx)
    requestAnimationFrame(animate)
}

    if(Coin.x == Car.x){
        collected()
    }   