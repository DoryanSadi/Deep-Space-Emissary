var Preloading = new Phaser.Class({
    Extends: Phaser.Scene, 
    initialize: 
    function Preload(){
        Phaser.Scene.call(this, {key: 'Preload'}); 
    }, 
    
    preload: function() {
        /* Preload assests for this state */ 
    }, 
    
    create: function(){
        console.log("Preload"); 
        game.scene.start('mainmenu'); 
    }, 
    
    update: function() {
    /* Objects and variables will be updated here */ 
    }

}); 

/* Adding scene to scene list */ 
deepSpace.scenes.push(Preloading); 