var CharacterSelect = new Phaser.Class({ 

    /* Defining game scene */ 
    Extends: Phaser.Scene, 
    initialize: function Selectcharacter(){
        Phaser.Scene.call(this, {key: 'Selectcharacter'});
    }, 

    
    preload: function()
    {
        this.load.image('CharacterSelectBackground', 'assets/Pictures/Art/Background-1.png'); 
        
        this.load.image('BACK', 'assets/Pictures/Art/BACK.png'); 
        
        this.load.spritesheet('blue_ship', 'assets/Pictures/Player/ships_human_blue.png', { frameWidth: 30, frameHeight: 32}); 
        
        this.load.spritesheet('green_ship', 'assets/Pictures/Player/ships_human_green.png', { frameWidth: 30, frameHeight: 32}); 
        
        this.load.spritesheet('red_ship', 'assets/Pictures/Player/ships_human_red.png', { frameWidth: 30, frameHeight: 32}); 
        
        this.load.spritesheet('yellow_ship', 'assets/Pictures/Player/ships_human_yellow.png', { frameWidth: 30, frameHeight: 32}); 
        
        
        
    }, 
    
    create: function()
    {
        
    console.log('Selectcharacter'); 
        
    this.add.image(640, 360, 'CharacterSelectBackground').setDepth(1); 
        
    let back = this.add.image(60, 20, 'BACK').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'});
    back.setInteractive();
    back.once('pointerdown', function() {
        console.log('Back to Main Menu');
        this.scene.start('mainmenu'); 
        
    }, this); 
        
    this.blue_ship = this.add.sprite(230, 400, 'blue_ship').setDepth(2).setScale(5).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'});
        
    this.anims.create({ /* Creating animation function granting me access to various parameters */ 
    
        key: 'blue_animation', /* Giving animation a name */
        frames: this.anims.generateFrameNumbers('blue_ship', { frames: [0,1] }), /* Using frames directly from spritesheet */
        frameRate: 3, /* Setting speed for animation */ 
        repeat: -1 /* Setting animation to infinite loops */ 
    
    }); 
        
        this.blue_ship.play('blue_animation'); 
        
    this.green_ship = this.add.sprite(460, 400, 'green_ship').setDepth(2).setScale(5).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'});
        
        this.anims.create({ /* Creating animation function granting me access to various parameters */ 
    
        key: 'green_animation', /* Giving animation a name */
        frames: this.anims.generateFrameNumbers('green_ship', { frames: [0,1] }), /* Using frames directly from spritesheet */
        frameRate: 3, /* Setting speed for animation */ 
        repeat: -1 /* Setting animation to infinite loops */ 
    
    }); 
        
         this.green_ship.play('green_animation'); 
        
    this.red_ship = this.add.sprite(690, 400, 'red_ship').setDepth(2).setScale(5).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'});
        
        this.anims.create({ /* Creating animation function granting me access to various parameters */ 
    
        key: 'red_animation', /* Giving animation a name */
        frames: this.anims.generateFrameNumbers('red_ship', { frames: [0,1] }), /* Using frames directly from spritesheet */
        frameRate: 3, /* Setting speed for animation */ 
        repeat: -1 /* Setting animation to infinite loops */ 
    
    }); 
        
         this.red_ship.play('red_animation'); 
        
    this.yellow_ship = this.add.sprite(920, 400, 'yellow_ship').setDepth(2).setScale(5).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'}); 
        
        this.anims.create({ /* Creating animation function granting me access to various parameters */ 
    
        key: 'yellow_animation', /* Giving animation a name */
        frames: this.anims.generateFrameNumbers('yellow_ship', { frames: [0,1] }), /* Using frames directly from spritesheet */
        frameRate: 3, /* Setting speed for animation */ 
        repeat: -1 /* Setting animation to infinite loops */ 
    
    }); 
        
         this.yellow_ship.play('yellow_animation'); 
    
        
    },
    
    update: function()
    
    {
        
        
    }

});

deepSpace.scenes.push(CharacterSelect); 