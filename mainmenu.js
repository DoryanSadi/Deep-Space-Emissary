var Button; 

//Loading up menu before starting game

var startMenu = new Phaser.class({
    //Creating scene
    Extends: Phaser.Scene,
    initialize: function mainmenu(){
        Phaser.Scene.call(this, {
            key: 'mainmenu'
        });
}, 
    
function preload () 
    {
    //Preloading Google WebFont Loader
    game.load.script('webfont', '//ajax.google.com/ajax/libs/webfont/1.4.7/webfont.js')
}, 
        
function create() {
    
    var optionSelection = game.add.text(80, 200, 'Deep Space Emmissary \n' +
    ' Start \n' +
    ' Options \n' +
    ' Quit ', {
        font: '25px Allerta Stencil',
        fill: '#FFFFFF'
    })
    
    Button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);
    
    var select = this.game.input.mousePointer.leftButton; 
    
    game.scene.start('game'); 
}, 
    
function update(){
    //updating objects and variables
}
