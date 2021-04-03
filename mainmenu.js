//Loading up menu before starting game


var startMenu = new Phaser.Class({
    //Creating scene
    Extends: Phaser.Scene,
    initialize: function mainmenu(){
        Phaser.Scene.call(this, {key: 'mainmenu'});
    }, 
    
preload: function () {
    
    this.load.image('MainScreen', 'assets/Pictures/Art/DeepSpaceEmissary .png'); //Loading background. /* Adding background for main menu */ 
    this.load.image('playButton', 'assets/Pictures/Art/PLAY.png');
    this.load.image('optionsButton', 'assets/Pictures/Art/OPTIONS.png'); 
    this.load.image('characterselect', 'assets/Pictures/Art/CHARACTERSELECT.png'); 
    this.load.image('quitButton', 'assets/Pictures/Art/QUIT.png');
    this.load.image('howToPlay', 'assets/Pictures/Art/HOWTOPLAY.png'); 
    
    this.load.audio('MenuMusic', 'assets/Music/prologue.ogg'); 
    
    this.load.image('pointer', 'assets/Pictures/Art/pointer.cur');   

},
 
        
create: function() {
    
    console.log("mainmenu");
    
    /*  Changing Cursor Sprite */ 
    this.input.setDefaultCursor('url(assets/Pictures/Art/pointer.cur), pointer')
        
    /* Adding images, sarting with background, then "play" and "quit" button */ 
    
    let background = this.add.image(640, 360, 'MainScreen').setDepth(1);
    
    this.sound.pauseOnBlur = false; 
    
    this.mainMenuMusic = this.sound.add('MenuMusic');
    
    this.mainMenuMusic.loop = true; 
    
    this.mainMenuMusic.play(); 
    
    /* Adding buttons and creating Main Menu scenes */     
    
    let play = this.add.image(795, 300, 'playButton').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'});
    play.setInteractive();
    play.once('pointerdown', function() {
        
                    console.log('From MainMenu to Gameplay');
                    this.scene.start('gameplay'); 
                    this.mainMenuMusic.stop(); /* Music stops as soon as   gameplay starts */ 
                    
                    }, this); 
     
    let characterselect = this.add.image(795, 400, 'characterselect').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'}); 
    characterselect.setInteractive();     
    characterselect.once('pointerdown', function() {
               
                    console.log('From MainMenu to Character Select menu'); 
                    this.scene.start('Selectcharacter');
                    this.mainMenuMusic.stop();
        
                        }, this);
    
    let options = this.add.image(90, 20, 'optionsButton').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'});
    options.setInteractive(); 
    options.once('pointerdown', function() {
                        console.log("From Main Menu to Options Menu"); 
                        this.scene.start('optionsScene'); 
                        this.mainMenuMusic.stop();
        
                        }, this); 
    
    let quit = this.add.image(795, 500, 'quitButton').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'}); 
    quit.setInteractive(); 
    quit.once('pointerdown', function() {
        
                    this.sys.game.destroy(true); /*destroying game and music when quitting */ 
                    this.mainMenuMusic.stop();
                    window.close(); 
        
                        }, this); 
    
    let howToPlay = this.add.image(795, 600, 'howToPlay').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'}); 
    howToPlay.setInteractive(); 
    howToPlay.on('pointerdown', function() {
        
                    console.log('From Main Menu to How To Play scene');
                    this.scene.start('howToPlay');
                    this.mainMenuMusic.stop();
        
                        }, this); 
           
        
    }, 
    
update: function()
{
    //updating objects and variables

}
    
});


/* Adding scene to scene list */ 
deepSpace.scenes.push(startMenu); 