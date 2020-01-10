var background;

var player;
       
var bullets; 

var bulletTime = 0; 
var fireButton; 

var gamePlay = new Phaser.Class({
    //Creating Scene
    Extends: Phaser.Scene,
    initialize: function gameplay(){
        Phaser.Scene.call(this, {key: 'gameplay'});
    },
       
    preload: function (){
        
        /* Loading images. */ 
        this.load.image('starfield', 'assets/Pictures/Art/starfield.png'); /* Loading background - Will loop during game. */
        
        /* Loading audio files */ 
        this.load.audio('GameMusic', 'assets/Music/ObservingTheStar.ogg'); /* Loading background music */ 
        this.load.audio('PlayerShooting', 'assets/Music/pistol.wav'); /* Loading sound when Player is shooting */ 
        this.load.audio('EnemyShoting', 'assets/Music/shotgun.wav'); /* Loading sound when enemy shoots */ 
        this.load.audio('Destroyed', 'assets/Music/DeathFlash.flac'); /* Loading sound when enemy or player is destroyed /* 
        
        /* Loading spritesheets */ 
        this.load.spritesheet('red_ship', 'assets/Pictures/Player/ships_human_red.png', { frameWidth: 30, frameHeight : 32});
        this.load.spritesheet('Explosion', 'assets/Pictures/Enemies/explosion.png', { frameWidth: 90.54, frameHeight: 92 }); 
        this.load.spritesheet('Biomech_Black_Alpha', 'assets/Pictures/Enemies/ships_biomech_black.png', { frameWidth: 46, frameHeight : 32 });
        this.load.spritesheet('Biomech_Blue_Alpha', 'assets/Pictures/Enemies/ships_biomech_blue.png', { frameWidth: 46, frameHeight : 32}); 
        this.load.spritesheet('player_bullet', 'assets/Pictures/Projectiles/PlayerProjectile.png', { frameWidth: 14.75, frameHeight: 8});
        
        
    }, 
    
    create: function(){
        
        console.log('gameplay'); 
        
        background = this.add.tileSprite(640, 360, 1280, 720, 'starfield', 'starfield.png').setDepth(1);
        
        this.sound.pauseOnBlur = false; 
        
        this.GameMusic = this.sound.add('GameMusic');
        
        this.GameMusic.loop = true; 
        
        this.GameMusic.play(); 
       
        this.red_ship = this.add.sprite(557, 663, 'red_ship').setDepth(2);
        
        this.anims.create({ /* Creating animation function granting me access to various parameters */
        
        key: 'red_animation', /* Giving animation a name */
        frames: this.anims.generateFrameNumbers('red_ship', { frames: [0,1 ] }), /* Using frames directly from spritesheet */ 
        frameRate: 3, /* Setting animation speed */ 
        repeat: -1 /* Setting animation to infinite loops */ 
        
        });
        
        
        this.red_ship.play('red_animation'); 
        
        this.biomech_black = this.add.sprite(317, 85, 'Biomech_Black_Alpha').setDepth(2); 
        
        this.anims.create({ /* Creating animation for Biomech Black (Alpha) */ 
        
        key: 'biomech_black_animation',
        frames: this.anims.generateFrameNumbers('Biomech_Black_Alpha', { frames: [0, 1, 2, 3]}), 
        frameRate: 5, 
        repeat: -1
                
        });
        
        this.biomech_black.play('biomech_black_animation'); 
        
        this.biomech_blue = this.add.sprite(1055, 108, 'Biomech_Blue_Alpha').setDepth(2); 
        
        this.anims.create({ /* Creating animation for Biomech Blue (Alpha) */ 
        
        key: 'biomech_blue_animation',
        frames: this.anims.generateFrameNumbers('Biomech_Blue_Alpha', { frames: [0, 1, 2, 3] }), 
        frameRate: 5, 
        repeat: -1
        
        }); 
        
        this.biomech_blue.play('biomech_blue_animation'); 
        
        this.player_bullet = this.add.sprite(557, 663, 'Explosion').setDepth(2); 
        
        this.anims.create({ /* Creating bullet animation */ 
        
        key: 'Killed',
        frames: this.anims.generateFrameNumbers('Explosion', { frames: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10] }), 
        frameRate: 12,
        repeat: -1 
            
        }); 
        
        this.sfx = {
            
            Gunshots: [
                this.sound.add("PlayerShooting"),
                this.sound.add("EnemyShooting")
            ],
            
            Explosion: this.sound.add("Destroyed")
        }; 
        
        this.red_ship = new Player(
        this,
        this.game.config.width * 0.5,
        this.game.config.height * 0.5,
        "red_animation"
        );
        
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W); 
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        this.biomech_blue = this.add.group();
        this.biomech_black = this.add.group(); 
    },
    
    update: function(){
        
        this.red_ship.update();
        
        if(this.keyW.isDown){
            this.red_ship.moveUp(); 
        }
        
        else if (this.keyS.isDown) {
            this.red_ship.moveDown(); 
        }
        
        if (this.keyA.isDown) {
            this.red_ship.moveLeft(); 
        }
        
        else if (this.keyD.isDown){
            this.red_ship.moveRight(); 
        }
        
        
     background.tilePositionY -= 5;  
        
    },
    
});

/* Adding scene to scene list */ 
deepSpace.scenes.push(gamePlay); 
