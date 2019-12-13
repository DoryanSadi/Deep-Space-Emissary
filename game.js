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



function preload ()
{
    this.load.image('Space', 'assets/Pictures/space.png'); //Loading background.
    
    this.load.spritesheet('ship', 'assets/Pictures/ships_human_neutral.xcf', { framewidth: 60, frameHeight: 32} ); //loading player asset //Loading in spritesheet to create player animation. 
    
}

function create()
{
    
    this.player = this.add.sprite(config.width / 2 - 50, config.height / 2, 'ship'); 
    moveLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT); 
    moveRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    
    this.anims.create({ //Creating an animation function giving me access to various parameters. 
        key: 'player_animation', //Giving animation a name.
        frames: this.anims.generateFrameNumbers('ship'), //Using frames directly from spritesheet.
        frameRate: 20, //Defining the speed of the animation. 
        repeat: -1  //Defining the amount of loops. -1 for infinite loops. 
    });

    
}

function update()
{
   
}

function createShip(x,y){
    var ship = this.add.image(x,y, 'ship').setOrigin(0.5,1); //setting parameters for player. 
    ship.props = {};
    ship.props.speed = 5;
    return ship;
}



