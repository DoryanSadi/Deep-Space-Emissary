var s_width = 800; 
var s_height = 600;
    
var config = { 
type: Phaser.AUTO, 
    width: s_width, //establishes width of game screen. 
    height: s_height, //establishes height of game screen.
    scene: {            //passing in functions this scene uses.
        preload: preload,
        create: create,
        update: update,
        
        extend: {
          createShip: createShip 
        }
    }
}; 

var game = new Phaser.Game(config); //Creating game object.

var ship;
var moveLeft;
var moveRight; 

function preload ()
{
    this.load.spritesheet('ship', 'assets/ships_human_neutral.png', 28, 32) //loading player asset
    
}

function create()
{
    ship = this.createShip(this.sys.canvas.width / 2,this.sys.canvas.height);
    
    var flying = ship.animations.add('flying');
    
    ship.animations.play('flying', 30, true); 
    
    moveLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT); 
    
    moveRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT); 

    
}

function update()
{
    if(moveRight.isDown && ship.x < this.sys.canvas.width - ship.displayWidth * ship.originX){
        ship.x += ship.props.speed;
    } else if(moveLeft.isDown && ship.x > 0 + ship.displayWidth * ship.originX){
        ship.x -= ship.props.speed; 
    } 
}

function createShip(x,y){
    var ship = this.add.image(x,y, 'ship').setOrigin(0.5,1); //setting parameters for player. 
    ship.props = {};
    ship.props.speed = 5;
    return ship;
}



