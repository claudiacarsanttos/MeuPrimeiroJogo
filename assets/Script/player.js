// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        velocidade:  0,
        jumpHeight: 0,
        jumpDuration: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.opacity = 300;
        this.node.color = cc.Color.GREEN;

        this.node.runAction(this.setJumpAction());

        var actionZoom = cc.scaleBy (3,3,2);
        this.node.runAction(actionZoom);

        var actionRotate = cc.rotateBy (2,61.0);
        this.node.runAction(actionRotate);

        var actionTint = cc.tintTo(2, 255, 0, 255);
        this.node.runAction(actionTint);
    },

    start () {

    },

    setJumpAction () {

        var jumpUp = cc.moveBy(this.jumpDuration, 0, this.jumpHeight).easing(cc.easeCubicActionOut());
        var jumpDown = cc.moveBy(this.jumpDuration, 0, -this.jumpHeight).easing(cc.easeCubicActionIn());

        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    update (dt) {
        this.node.setPosition(this.node.position.x, this.node.position.y);
        this.node.setPosition(this.node.position.x + 10 * dt, this.node.position.y);
        this.node.setPosition(this.node.position.x + this.velocidade * dt, this.node.position.y);
    },
});
