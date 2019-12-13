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
    this.load.image('Space', 'assets/Pictures/space.png'); //Loading background.
    
    this.load.spritesheet('ship', 'assets/Pictures/ships_human_neutral.png', { frameWidth: 30, frameHeight: 32} ); //loading player asset //Loading in spritesheet to create player animation. 
    
}

function create()
{
    
    ship = this.add.sprite(config.width / 2 - 50, config.height / 2, 'ship').setOrigin(0.5, -8.3).setDepth(2); 
    var background = this.add.image(400, 300, 'Space').setDepth(1); 
    this.anims.create({ //Creating an animation function giving me access to various parameters. 
        key: 'player_animation', //Giving animation a name.
        frames: this.anims.generateFrameNumbers('ship'), //Using frames directly from spritesheet.
        frameRate: 8, //Defining the speed of the animation. 
        repeat: -1  //Defining the amount of loops. -1 for infinite loops. 
    });
    

    
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
    ship.props = {};
    ship.props.speed = 5;
    return ship;
}



