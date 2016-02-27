_cs.prototype.initialStage = function() {

    // create the root of the scene graph
    var stage = new PIXI.Container();
    var renderer = this.renderer;

    PIXI.loader
        .add("mypic","imgs/standard.jpeg")
        .load(function(loader,resources){
        

        var bunny = new PIXI.Sprite(resources.mypic.texture);

        // move the sprite to the center of the screen
        bunny.position.x = 0;
        bunny.position.y = 0;

        stage.scale.x = stage.scale.y = this.currentContainerWidth / bunny.texture.width ;
        stage.addChild(bunny);
        

        var currentContainerWidth = this.currentContainerWidth;
        this.addResizeListener(function() {
            stage.scale.x = stage.scale.y = this.currentContainerWidth / bunny.texture.width ;
        });

        animate();
    }.bind(this));

    function animate() {
        // render the container
        renderer.render(stage);
        requestAnimationFrame(animate);
    }

};