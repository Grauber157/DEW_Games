const canvas = document.getElementById('myCanvas')


const ctx = canvas.getContext('2d')
const car = new Car(400,400,30,50)

animate()

function animate() {
    car.update()
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    car.draw(ctx)
    requestAnimationFrame(animate)
}
