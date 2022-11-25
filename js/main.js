const canvas = document.getElementById('myCanvas')
var object = document.getElementById('object')

const ctx = canvas.getContext('2d')
const car = new Car(400,400,30,50)

var object = new Object(10,10,200,200)

animate()

function animate() {
    car.update()
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    car.draw(ctx)
    requestAnimationFrame(animate)
}
