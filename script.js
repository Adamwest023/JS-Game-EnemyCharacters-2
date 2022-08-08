//elements needed to create canvas and get it its built in functions 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
//create an array of enemies for the class to run through
const numberOfEnemies = 10;
const enemiesArray = [];
let gameFrame = 0;

class Enemy {
    constructor() {
        //pulls the image and sets it to the class
        this.image = new Image();
        this.image.src = 'assets/enemies/enemy1.png';
        // this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 5 + 2);
    };
    update() {
        this.x += Math.random() * 15 - 7.5;
        this.y += Math.random() * 10 - 5;
        if (gameFrame % this.flapSpeed == 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    };
    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0,
            this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width,
            this.height, this.height)
    };
};

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
};

//animation function
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
};

animate(); 


