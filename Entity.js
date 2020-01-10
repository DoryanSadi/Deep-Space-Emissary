
var EntityScene = new Phaser.Class({
    //Creating scene
    Extends: Phaser.Scene,
    initialize: function entities(){
        Phaser.Scene.call(this, {key: 'entities'});
    },
    
    preload : function()
    {
        
    },
    
    create: function()
    {
        
    },
    
    update: function()
    {
        /* Calling movement functions */ 
        this.body.setVelocity(0, 0); 
        
        this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width); 
        this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height); 
        
    }
    
});
    
class Entity extends Phaser.GameObjects.Sprite {
    super(scene, x, y, key, type){
        
        this.scene = scene; 
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
        this.setData("isKilled", false);      
    }
}
    
class Player extends Entity {
    constructor(scene, x, y, key){
        super(scene, x, y, key, "Player"); 
        
        this.setData("Speed", 200); 
        
        this.setData("whenShooting", false);
        this.setData("shootingDelay", 10);
        this.setData("shootTimerTick", this.getData("shootingDelay") - 1); 
    }
    
     moveUp(){
            this.body.velocity.y = -this.getData("Speed");
        }
        
        moveDown(){
            this.body.velocity.y = this.getData("Speed"); 
        }
        
        moveLeft(){
            this.body.velocity.x = -this.getData("Speed");
        }
        
        moveRight(){
            this.body.velocity.x = this.getData("Speed"); 
        }
}
    
    


deepSpace.scenes.push(EntityScene); 
                              