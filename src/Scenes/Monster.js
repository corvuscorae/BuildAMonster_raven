class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        /*
        new sprite -> x = (sprite.width / 2) + this. bodyX // how to access sprite's data? (width, height, etc)
        console.log(monsterParts["arm_blueA.png"].width); <- nope
        console.log(my.atlasXML["arm_blueA.png"].width); <- nope
        */
       

        // body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        // eye
        /*my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_human.png");
        my.sprite.eye.scaleX = 1.5; my.sprite.eye.scaleY = 1.5;*/
        // arms
        let arm = "arm_greenB.png";
        my.sprite.rightArm = this.add.sprite(this.bodyX + 90, this.bodyY + 40, "monsterParts", arm); 
        my.sprite.leftArm = this.add.sprite(this.bodyX - 90, this.bodyY + 40, "monsterParts", arm);
        my.sprite.leftArm.flipX = true;
        // legs
        let leg = "leg_greenC.png";
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 70, this.bodyY + 90, "monsterParts", leg); 
        my.sprite.rightLeg.scaleX = 0.75; my.sprite.rightLeg.scaleY = 0.75;
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 70, this.bodyY + 90, "monsterParts", leg);
        my.sprite.leftLeg.scaleX = 0.75; my.sprite.leftLeg.scaleY = 0.75;
        my.sprite.leftLeg.flipX = true;
        // mouth

        // smile
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouth_closed_happy.png");
        my.sprite.smile.setVisible(false);
        // fangs
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthJ.png");

        // S - smile 
        // F - show fangs
        // A - move left 
        // D - move right
        // move monster with this fcn
        this.input.keyboard.on("keydown", function(event) {

        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}
