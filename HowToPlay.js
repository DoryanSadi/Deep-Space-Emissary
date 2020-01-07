const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

var helpMenu = new Phaser.Class({
    /* Creating scene */ 
    Extends: Phaser.Scene, 
    initialize: function howToPlay(){ 
        Phaser.Scene.call(this, {key: 'howToPlay' }); 
    }, 
                          
preload: function (){
    
     this.load.scenePlugin({
        key: 'rexuiplugin', 
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/plugins/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI'
    }); 
    
    this.load.image('howToPlayBackground', 'assets/Pictures/Art/helpMenu.png'); 
    this.load.image('back', 'assets/Pictures/Art/BACK.png'); 
    this.load.image('story', 'assets/Pictures/Art/STORY.png')
    this.load.image('controls', 'assets/Pictures/Art/CONTROLS.png'); 
    this.load.image('enemies', 'assets/Pictures/Art/ENEMIES.png'); 
    this.load.image('howToPlay', 'assets/Pictures/Art/HOWTOPLAY.png'); 
    
    this.load.audio('InfoMusic', 'assets/Music/low-fi.mp3'); 
   

}, 
       
create: function (){
    
    
    console.log('howToPlay'); 
    
    this.add.image(640, 360, 'howToPlayBackground').setDepth(1); 
    
    var EnemyList = [
    {
      name: 'Biomech: Alpha Series.',
      children: [
        { name: 'Alpha: Blue.' },
        { name: 'Alpha: Black.' },
        { name: 'Alpha: Brown.' },
        { name: 'Alpha: Yellow.'}] },
          
    {
      name: 'Biomech: Beta Series.',
      children: [
        { name: 'Beta: Blue.' },
        { name: 'Beta: Black.' },
        { name: 'Beta: Brown.' },
        { name: 'Beta: Yellow.'}] },
    {
      name: 'Biomech: Gamma Series.',
      children: [
        { name: 'Gamma: Blue.' },
        { name: 'Gamma: Black.' },
        { name: 'Gamma: Brown.' },
        { name: 'Gamma: Yellow.'}] }, 
    {
      name: 'Biomech: Delta Series.',
      children: [
        { name: 'Delta: Blue.'},
        { name: 'Delta: Black.'},
        { name: 'Delta: Brown.'},
        { name: 'Delta: Yellow.'}]
    }];
    
    let back = this.add.image(60, 20, 'back').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'}); 
    
    let story = this.add.image(80, 350, 'story').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'}); 
    
    this.InfoMusic = this.sound.add('InfoMusic'); 
    
    this.sound.pauseOnBlur = false; 
    
    this.InfoMusic.loop = true; 
    
    this.InfoMusic.play(); 
    
        story.setInteractive();
        story.once('pointerdown', function() {
        console.log('Opening story window.');
         
        
    }, this);    
    
    let controls = this.add.image(123, 450, 'controls').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'});
    
    let enemies = this.add.image(110, 550, 'enemies').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'});
    
     var scene = this,
          menu = undefined; 
        this.input.on('pointerdown', function (pointer) {
                     if(menu === undefined) {
                         menu = createEnemyList(scene, pointer.x, pointer.y, EnemyList, function(button) {
                             scene.print.text += 'Click ' + button.text + '\n'; 
                         }); 
                     } else if (!menu.isInTouching(pointer)) {
                         menu.collapse(); 
                         menu = undefined; 
                     }
        }, this);
    
    let howToPlay = this.add.image(155, 650, 'howToPlay').setDepth(2).setInteractive({ cursor: 'url(assets/Pictures/Art/pointerClick.cur), pointer'}); 
    
        back.setInteractive();
        back.once('pointerdown', function() {
        console.log('Back to Main Menu');
        this.scene.start('mainmenu'); 
        this.InfoMusic.stop(); 
        
    }, this);    
    
}, 
       
update: function(){
    /* Updating object and variables */    
}, 
   
                                                 
}); 

var createEnemyList = function (scene, x, y, EnemyList, onClick) {
var menu = scene.rexUI.add.menu({
        x: x,
        y: y,

        EnemyList: EnemyList,
        createButtonCallback: function (enemy, e) {
            return scene.rexUI.add.label({
                background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 0, COLOR_PRIMARY),
                text: scene.add.text(0, 0, enemy.name, {
                    fontSize: '20px'
                }),
                icon: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
                space: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20,
                    icon: 20
                }
            })
        },

        easeIn: {
            duration: 500,
            orientation: 'y'
        },

        easeOut: {
            duration: 100,
            orientation: 'y'
        },

        // expandEvent: 'button.over'
    });

    menu
        .on('button.over', function (button) {
            button.getElement('background').setStrokeStyle(1, 0xffffff);
        })
        .on('button.out', function (button) {
            button.getElement('background').setStrokeStyle();
        })
        .on('button.click', function (button) {
            onClick(button);
        })

    return menu;
};

deepSpace.scenes.push(helpMenu); 