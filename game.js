/* Copyright © 2020 Richard Davey, Photon Storm Ltd. */
/* This code was adapted from Phaser libraries, distribued uder MIT license */

var background      
this.bullets;
this.bullet;
var speed; 
var previousShot = 0;
var red_ship; 
var lives; 
var enemyShot;
var death;
this.enemies;
this.score = 0;
var enemyBullets;

var gamePlay = new Phaser.Class({
    //Creating Scene
    Extends: Phaser.Scene,
    initialize: function gameplay(){
        Phaser.Scene.call(this, {key: 'gameplay'});
    },
       
    preload: function (){
        
     
        
        /* Loading images. */ 
        this.load.image('starfield', 'assets/Pictures/Art/starfield.png'); /* Loading background - Will loop during game. */
        this.load.image('player_shot', 'assets/Pictures/Projectiles/PlayerBullet.png'); 
        
        /* Loading audio files */ 
        this.load.audio('GameMusic', 'assets/Music/ObservingTheStar.ogg'); /* Loading background music */ 
        this.load.audio('PlayerShooting', 'assets/Music/pistol.wav'); /* Loading sound when Player is shooting */ 
   
        
        /* Loading spritesheets */ 
        this.load.spritesheet('red_ship', 'assets/Pictures/Player/ships_human_red.png', { frameWidth: 30, frameHeight : 32});
        this.load.spritesheet('Explosion', 'assets/Pictures/Enemies/explosion.png', { frameWidth: 90.54, frameHeight: 92 }); 
        this.load.spritesheet('Biomech_Black_Alpha', 'assets/Pictures/Enemies/ships_biomech_black.png', { frameWidth: 46, frameHeight : 32 });
        this.load.spritesheet('Biomech_Blue_Alpha', 'assets/Pictures/Enemies/ships_biomech_blue.png', { frameWidth: 46, frameHeight : 32}); 
        this.load.spritesheet('Biomech_Black2_Alpha', 'assets/Pictures/Enemies/ships_biomech_black2.png', {frameWidth: 44.5, frameHeight : 48});
        this.load.spritesheet('Biomech_Blue2_Alpha', 'assets/Pictures/Enemies/ships_biomech_blue2.png', { frameWidth: 44.5, frameHeight : 48});
        this.load.spritesheet('Biomech_Yellow_Alpha', 'assets/Pictures/Enemies/ships_biomech_yellow.png', { frameWidth: 46, frameHeight : 32});
        this.load.spritesheet('Biomech_Yellow2_Alpha', 'assets/Pictures/Enemies/ships_biomech_yellow2.png', { frameWidth: 44.5, frameHeight : 48});
        this.load.spritesheet('Biomech_Brown_Alpha', 'assets/Pictures/Enemies/ships_biomech_brown.png', { frameWidth: 46, frameHeight : 32});
        this.load.spritesheet('Biomech_Brown2_Alpha', 'assets/Pictures/Enemies/ships_biomech_brown2.png', { frameWidth: 44.5, frameHeight : 48});
 
        
    },
    
     
    
    create: function(){
         console.log('gameplay'); 
        
        background = this.add.tileSprite(640, 360, 1280, 720, 'starfield', 'starfield.png').setDepth(1);
        
        this.sound.pauseOnBlur = false; 
        
        this.music = {
            
            GameMusic: this.sound.add('GameMusic')
        }; 
        
        this.music.GameMusic.loop = true; 
        
        this.music.GameMusic.play();
        
        this.sfx = {
            Player_Bullet: this.sound.add("PlayerShooting"),
            Explosion: this.sound.add("Destroyed")
    }; 
          
        var Bullets = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize:

        function Bullets (scene)
        {
           this.bullet = Phaser.GameObjects.Image.call(this, scene, 0, 0, 'player_shot');

            this.speed = Phaser.Math.GetSpeed(400, 1);
        },

        fire: function (x, y)
        {
            this.setPosition(x, y, 50).setDepth(2);
            

            this.setActive(true);
            this.setVisible(true);
        },

        update: function (time, delta)
        {
            this.y -= this.speed * delta;

            if (this.y < -50)
            {
                this.setActive(false);
                this.setVisible(false);
            }
        }

    });

    this.bullets = this.physics.add.group({
        classType: Bullets,
        maxSize: 10,
        runChildUpdate: true
    }); 
        
    W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);  
    A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    D =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);  
        
    speed = Phaser.Math.GetSpeed(300, 1); 
        
        /* Creating Death Animation */ 
         this.anims.create({
        key: 'death', /* Giving animation a name */
        frames: this.anims.generateFrameNumbers('Explosion', { frames: [0,1 ] }), /* Using      frames directly from spritesheet */ 
        frameRate: 3, /* Setting animation speed */ 
        repeat: -1 /* Setting animation to infinite loops */ 
        
        });
        
        /* Creating enemies */ 
        this.createBiomechs();
        
        /* Creating enemy animations */
        this.createBiomechAnimations(); 
        
        /* Creating player */ 
        this.createPlayer();
        
        /* Creating Lives */
        this.Lives();
        
        /* Creating Biomech Tweens */
        this.createBiomechTweens();
        
        /* Creating score text */
        scoreText = this.add.text(40, 20, 'score: 0', { fontFamily: 'Arial', fontSize: '32px', fill: '#FFFFFF'}).setDepth(2);
        
        /* Creating Collisions */
        this.physics.add.collider(this.bullets, biomech,  function(bullets, biomech) {
        biomech.destroy();
            score += 10;
            scoreText.setText('score: ' + score);
                                                                   });
        this.physics.add.collider(this.bullets, biomech2, function(bullets, biomech2) {
        biomech2.destroy();
            score += 10;
            scoreText.setText('score: ' + score);
                                                                   });
        this.physics.add.collider(this.bullets, biomech3, function(bullets, biomech3) {
        biomech3.destroy();
            score += 10;
            scoreText.setText('score: ' + score);
                                                                   });
        this.physics.add.collider(this.bullets, biomech4, function(bullets, biomech4) {
        biomech4.destroy();
            score += 10;
            scoreText.setText('score: ' + score);
                                                                   });
        this.physics.add.collider(this.bullets, biomech5, function(bullets, biomech5) {
        biomech5.destroy();
            score += 10;
            scoreText.setText('score: ' + score);
                                                                   });
        this.physics.add.collider(this.bullets, biomech6, function(bullets, biomech6) {
        biomech6.destroy();
            score += 10;
            scoreText.setText('score: ' + score);
                                                                   });
        this.physics.add.collider(this.bullets, biomech7, function(bullets, biomech7) {
        biomech7.destroy();
            score += 10;
            scoreText.setText('score: ' + score);
                                                                   });
        this.physics.add.collider(this.bullets, biomech8, function(bullets, biomech8) {
        biomech8.destroy();
            score += 10;
            scoreText.setText('score: ' + score);
                                                                   });

    },
    
    
    Lives ()
{
        /* Creating Lives */ 
        livesString = 'Lives: 4'
        this.add.text(1140, 20, livesString, { fontFamily: 'Arial', fontSize: 30,}).setDepth(2);     
        
},
    
    
    createPlayer ()
{
    red_ship = this.add.sprite(557, 663, 'ship').setDepth(2);
    
    this.anims.create({ /* Creating animation function granting me access to various parameters */
        
    key: 'red_animation', /* Giving animation a name */
    frames: this.anims.generateFrameNumbers('red_ship', { frames: [0,1 ] }), /* Using frames directly from spritesheet */ 
    frameRate: 3, /* Setting animation speed */ 
    repeat: -1 /* Setting animation to infinite loops */ 
        
        });
        
    red_ship.play('red_animation');
},
    
    
    createBiomechAnimations ()
{
    
    
    /* Creating Biomech animations */
        this.anims.create({ 
        
        key: 'biomech1',
        frames: this.anims.generateFrameNumbers('Biomech_Black_Alpha', { frames: [0, 1, 3] }), 
        frameRate: 5,
        repeat: -1 
            
        }); 
           
        biomech.playAnimation('biomech1');
    
        this.anims.create({ 
        
        key: 'biomech2',
        frames: this.anims.generateFrameNumbers('Biomech_Blue_Alpha', { frames: [0, 1, 3] }), 
        frameRate: 5,
        repeat: -1 
            
        }); 
           
        biomech2.playAnimation('biomech2');
        
        this.anims.create({ /* Creating death animation */ 
        
        key: 'biomech3',
        frames: this.anims.generateFrameNumbers('Biomech_Black2_Alpha', { frames: [0, 1, 3] }), 
        frameRate: 5,
        repeat: -1 
            
        }); 
           
        biomech3.playAnimation('biomech3');
    
        this.anims.create({ /* Creating death animation */ 
        
        key: 'biomech4',
        frames: this.anims.generateFrameNumbers('Biomech_Blue2_Alpha', { frames: [0, 1, 3] }), 
        frameRate: 5,
        repeat: -1 
            
        }); 
           
        biomech4.playAnimation('biomech4');
    
        this.anims.create({ /* Creating death animation */ 
        
        key: 'biomech5',
        frames: this.anims.generateFrameNumbers('Biomech_Brown_Alpha', { frames: [0, 1, 3] }), 
        frameRate: 5,
        repeat: -1 
            
        }); 
           
        biomech5.playAnimation('biomech5');
    
        this.anims.create({ /* Creating death animation */ 
        
        key: 'biomech6',
        frames: this.anims.generateFrameNumbers('Biomech_Yellow_Alpha', { frames: [0, 1, 3] }), 
        frameRate: 5,
        repeat: -1 
            
        }); 
           
        biomech6.playAnimation('biomech6');
    
        this.anims.create({ /* Creating death animation */ 
        
        key: 'biomech7',
        frames: this.anims.generateFrameNumbers('Biomech_Brown2_Alpha', { frames: [0, 1, 3] }), 
        frameRate: 5,
        repeat: -1 
            
        }); 
           
        biomech7.playAnimation('biomech7');
    
        this.anims.create({ /* Creating death animation */ 
        
        key: 'biomech8',
        frames: this.anims.generateFrameNumbers('Biomech_Yellow2_Alpha', { frames: [0, 1, 3] }), 
        frameRate: 5,
        repeat: -1 
            
        }); 
           
        biomech8.playAnimation('biomech8');  


    
},
    
    createBiomechTweens ()
{
     var shiftTime = this.tweens.createTimeline();

    shiftTime.add({
        targets: biomech.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });

    shiftTime.add({
        targets: biomech.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    });

    shiftTime.add({
        targets: biomech.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    });
    

    shiftTime.add({
        targets: biomech.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });
    
    var shiftTime2 = this.tweens.createTimeline();
    
    shiftTime2.add({
        targets: biomech2.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });

    shiftTime2.add({
        targets: biomech2.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),

    shiftTime2.add({
        targets: biomech2.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),
    
    shiftTime2.add({
        targets: biomech2.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });
    
    var shiftTime3 = this.tweens.createTimeline();
    
    shiftTime3.add({
        targets: biomech3.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });

    shiftTime3.add({
        targets: biomech3.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),

    shiftTime3.add({
        targets: biomech3.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),
    
    shiftTime3.add({
        targets: biomech3.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });
    
    var shiftTime4 = this.tweens.createTimeline();
    
    shiftTime4.add({
        targets: biomech4.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });

    shiftTime4.add({
        targets: biomech4.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),

    shiftTime4.add({
        targets: biomech4.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),
    
    shiftTime4.add({
        targets: biomech4.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });
    
    var shiftTime5 = this.tweens.createTimeline();
    
    shiftTime5.add({
        targets: biomech5.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });

    shiftTime5.add({
        targets: biomech5.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),

    shiftTime5.add({
        targets: biomech5.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),
    
    shiftTime5.add({
        targets: biomech5.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });
    
    var shiftTime6 = this.tweens.createTimeline();
    
    shiftTime6.add({
        targets: biomech6.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });

    shiftTime6.add({
        targets: biomech6.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),

    shiftTime6.add({
        targets: biomech6.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),
    
    shiftTime6.add({
        targets: biomech6.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });
    
    var shiftTime7 = this.tweens.createTimeline();
    
    shiftTime7.add({
        targets: biomech7.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });

    shiftTime7.add({
        targets: biomech7.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),

    shiftTime7.add({
        targets: biomech7.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),
    
    shiftTime7.add({
        targets: biomech7.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });
    
    var shiftTime8 = this.tweens.createTimeline();
    
    shiftTime8.add({
        targets: biomech8.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });

    shiftTime8.add({
        targets: biomech8.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),

    shiftTime8.add({
        targets: biomech8.getChildren(),
        x: "-=200",
        ease: 'linear',
        duration: 1000
    }),
    
    shiftTime8.add({
        targets: biomech8.getChildren(),
        x: "+=200",
        ease: 'linear',
        duration: 1000
    });
    
    
        shiftTime.play();
        shiftTime2.play();
        shiftTime3.play();
        shiftTime4.play();
        shiftTime5.play(); 
        shiftTime6.play(); 
        shiftTime7.play();
        shiftTime8.play(); 
    
},
    
    
    createBiomechs ()
{
   
        biomech = this.physics.add.group({ key: 'Biomech_Black_Alpha', frame: 0, repeat: 13, setXY: {x: 286, y: 440, stepX: 40}}).setDepth(2);
        
        biomech2 = this.physics.add.group({ key: 'Biomech_Blue_Alpha', frame: 0, repeat: 13, setXY: {x: 286, y: 400, stepX: 40}}).setDepth(2);
        
        biomech3 = this.physics.add.group({ key: 'Biomech_Black2_Alpha', frame: 0, repeat: 13, setXY: {x: 286, y: 360, stepX: 40}}).setDepth(2);
        
        biomech4 = this.physics.add.group({ key: 'Biomech_Blue2_Alpha', frame: 0, repeat: 13, setXY: {x: 286, y: 320, stepX: 40}}).setDepth(2);
    
        biomech5 = this.physics.add.group({ key: 'Biomech_Brown_Alpha', frame: 0, repeat: 13, setXY: {x: 286, y: 280, stepX: 40}}).setDepth(2);
         
        biomech6 = this.physics.add.group({ key: 'Biomech_Yellow_Alpha', frame: 0, repeat: 13, setXY: {x: 286, y: 240, stepX: 40}}).setDepth(2);
        
        biomech7 = this.physics.add.group({ key: 'Biomech_Brown2_Alpha', frame: 0, repeat: 13, setXY: {x: 286, y: 200, stepX: 40}}).setDepth(2);
        
        biomech8 = this.physics.add.group({ key: 'Biomech_Yellow2_Alpha', frame: 0, repeat: 13, setXY: {x: 286, y: 160, stepX: 40}}).setDepth(2);
        
    
},
  

    update: function(time){
        
        if (D.isDown && red_ship.x < this.sys.canvas.width - red_ship.displayWidth * red_ship.originX) {
           red_ship.x += 5;
        }
        
        else if (A.isDown && red_ship.x > 0 + red_ship.displayWidth * red_ship.originX){
            red_ship.x -= 5; 
        }
        
        if (W.isDown && time > previousShot)
            {
                this.shot = this.bullets.get();
                
                if (this.shot)
                    {
                        this.shot.fire(red_ship.x, red_ship.y); 
                        previousShot = time + 50;  
                        this.sfx.Player_Bullet.play(); 
                        console.log(this.shot.fire); 
                    }
                
        }
       
     background.tilePositionY -= 5;  
        
    },
    
});

/* Adding scene to scene list */ 
deepSpace.scenes.push(gamePlay); 
