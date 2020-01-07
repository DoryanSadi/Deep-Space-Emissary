var optionsMenu = new Phaser.Class({
    /* Creating Scene */ 
    Extends: Phaser.Scene, 
    initialize: function optionsScene(){
        Phaser.Scene.call(this, {key: 'optionsScene'}); 
    },
    
    preload: function(){ 
     
    this.load.image('MUSIC', 'assets/Pictures/Art/MUSIC.png');    
    this.load.image('BGM', 'assets/Pictures/Art/BGM.png'); 
    this.load.image('SFX', 'assets/Pictures/Art/SFX.png'); 
    this.load.image('DIFFICULTY', 'assets/Pictures/Art/DIFFICULTY.png'); 
    this.load.image('EASY', 'assets/Pictures/Art/EASY.png');
    this.load.image('MODERATE', 'assets/Pictures/Art/MODERATE.png'); 
    this.load.image('EXPERT', 'assets/Pictures/Art/EXPERT.png'); 
    this.load.image('CONTROLSCHEME', 'assets/Pictures/Art/CONTROLSCHEME.png');
    this.load.image('KEYBOARD', 'assets/Pictures/Art/KEYBOARD.png'); 
    this.load.image('TOUCHPAD', 'assets/Pictures/Art/TOUCHPAD.png'); 
    this.load.image('BACK', 'assets/Pictures/Art/BACK.png');
    this.load.image('OPTIONS', 'assets/Pictures/Art/OPTIONS.png'); 
        
    this.load.audio('OptionsMusic', 'assets/Music/Open-Surge-options.mp3');  
    this.load.image('Background3', 'assets/Pictures/Art/Background-3.png'); 
    this.load.image('TextWindow', 'assets/Pictures/Art/Window-Resized .png'); 
    
    },
    
    create: function(){
        
        console.log('optionsScene'); 
        
        this.add.image(640, 360, 'Background3').setDepth(1);
        
        let textWindow = this.add.image(625, 360, 'TextWindow').setDepth(2).setScale(1.35); 
        
        let MUSIC = this.add.image(365, 115, 'MUSIC').setDepth(3).setScale(.4); 
        
        let DIFFICULTY = this.add.image(405, 280, 'DIFFICULTY').setDepth(3).setScale(.5);
        
        let EASY = this.add.image(400, 350, 'EASY').setDepth(3).setScale(.4);
        
        let MODERATE = this.add.image(600, 350, 'MODERATE').setDepth(3).setScale(.4); 
        
        let EXPERT = this.add.image(800, 350, 'EXPERT').setDepth(3).setScale(.4); 
        
        let CONTROLSCHEME = this.add.image(455, 420, 'CONTROLSCHEME').setDepth(3).setScale(.4); 
        
        let KEYBORAD = this.add.image(455, 500, 'KEYBOARD').setDepth(3).setScale(.4); 
        
        let TOUCHPAD = this.add.image(755, 500, 'TOUCHPAD').setDepth(3).setScale(.4); 
        
        let BGM = this.add.image(450, 165, 'BGM').setDepth(3).setScale(.4);
        
        let SFX = this.add.image(450, 215, 'SFX').setDepth(3).setScale(.4); 
        
        let OPTIONS = this.add.image(629, 45, 'OPTIONS').setDepth(3); 
        
        let BACK = this.add.image(60, 20, 'BACK').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'});
        
        this.sound.pauseOnBlur = false; 
        
        this.OptionsMusic = this.sound.add('OptionsMusic'); 
        
        this.OptionsMusic.loop = true; 
        
        this.OptionsMusic.play();  
        
        BACK.setInteractive();
        BACK.once('pointerdown', function() {
        console.log('Back to Main Menu');
        this.scene.start('mainmenu'); 
        this.OptionsMusic.stop(); 
        
    }, this);  
        
        
    }, 
    
    update: function(){
        
    }
    
}); 

deepSpace.scenes.push(optionsMenu); 