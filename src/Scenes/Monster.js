class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        // A - move left // D - move right  
        this.aKey = null;
        this.dKey = null;

        this.horizontalSpeed = 7;
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
       
        // legs
        let leg = "leg_greenC.png";
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 70, this.bodyY + 90, "monsterParts", leg); 
        my.sprite.rightLeg.scaleX = 0.75; my.sprite.rightLeg.scaleY = 0.75;

        my.sprite.leftLeg = this.add.sprite(this.bodyX - 70, this.bodyY + 90, "monsterParts", leg);
        my.sprite.leftLeg.scaleX = 0.75; my.sprite.leftLeg.scaleY = 0.75;
        my.sprite.leftLeg.flipX = true;

        // arms
        let arm = "arm_greenB.png";
        my.sprite.rightArm = this.add.sprite(this.bodyX + 90, this.bodyY + 40, "monsterParts", arm);
        my.sprite.rightArm.angle = -20;

        my.sprite.leftArm = this.add.sprite(this.bodyX - 90, this.bodyY + 40, "monsterParts", arm);
        my.sprite.leftArm.angle = 20;
        my.sprite.leftArm.flipX = true;

        // horns
        let horn = "detail_green_horn_small.png";
        my.sprite.rightHorn = this.add.sprite(this.bodyX + 60, this.bodyY - 60, "monsterParts", horn);
        my.sprite.rightHorn.angle = -20;

        my.sprite.leftHorn = this.add.sprite(this.bodyX - 60, this.bodyY - 60, "monsterParts", horn);
        my.sprite.leftHorn.angle = 20;
        my.sprite.leftHorn.flipX = true;

        // body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        // eye
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 10, "monsterParts", "eye_human.png");
        my.sprite.eye.scaleX = 1.5; my.sprite.eye.scaleY = 1.5;
        my.sprite.eyeMad = this.add.sprite(this.bodyX, this.bodyY - 10, "monsterParts", "eye_human_red.png");
        my.sprite.eyeMad.scaleX = 1.5; my.sprite.eyeMad.scaleY = 1.5;
        my.sprite.eyeMad.setVisible(false);

        // smile
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouth_closed_happy.png");

        // fangs
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouthF.png");
        my.sprite.fangs.setVisible(false);

        // S - smile 
        // F - show fangs
        this.input.keyboard.on("keydown", (event) => {
            if(event.keyCode === Phaser.Input.Keyboard.KeyCodes.S){
                my.sprite.fangs.setVisible(false);
                my.sprite.smile.setVisible(true);
                my.sprite.eye.setVisible(true);
                my.sprite.eyeMad.setVisible(false);
            }
            if(event.keyCode === Phaser.Input.Keyboard.KeyCodes.F){
                my.sprite.fangs.setVisible(true);
                my.sprite.smile.setVisible(false);
                my.sprite.eye.setVisible(false);
                my.sprite.eyeMad.setVisible(true);
            }
        });

        // A - move left // D - move right         
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // A - move left 
        if(this.aKey.isDown && my.sprite.body.x > 0){
            for(const part in my.sprite){
               // console.log(my.sprite[part].x);
               my.sprite[part].x -= this.horizontalSpeed;
            }
        }
        
        // D - move right
        if(this.dKey.isDown && my.sprite.body.x < config.width){
            for(const part in my.sprite){
                // console.log(my.sprite[part].x);
                my.sprite[part].x += this.horizontalSpeed;
             }
        }
    }

}
