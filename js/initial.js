
var _cs_const = {
    MOBILE: "mobile_state",
    DESKTOP: "desktop_state",
    LG_DESKTOP: "lg_desktop_state",
};
var _cs = function() {};

_cs.prototype.startEngine = function() {
    this.initialize();
}

_cs.prototype.initialSize = function() {
    this.canvasWrapper = document.getElementById("canvasWrapper");
    this.widthState = null;
    this.currentContainerWidth = 0;
    this.resizeListeners = [];

    function updateSize() {

        if(this.currentContainerWidth === this.canvasWrapper.clientWidth) {
            return;
        }

        this.currentContainerWidth = this.canvasWrapper.clientWidth;

        console.log(this.currentContainerWidth);

        if(window.innerWidth < 480) {
            this.widthState = _cs_const.MOBILE;
        }else if(window.innerWidth < 897) {
            this.widthState = _cs_const.DESKTOP;
        }else {
            this.widthState = _cs_const.LG_DESKTOP;
        }

        if(!this.initialFlag) {
            this.canvas.width = this.currentContainerWidth;   
        }

        for(var i = 0; i < this.resizeListeners.length; i++) {
            this.resizeListeners[i].bind(this)();
        }
    }

    updateSize.bind(this)();
    window.addEventListener("resize", updateSize.bind(this));

}

_cs.prototype.addResizeListener = function(cb) {
    this.resizeListeners.push(cb);
};

_cs.prototype.initialPixijs = function() {
    this.renderer = PIXI.autoDetectRenderer(this.currentContainerWidth, 900);
    this.canvas = this.renderer.view;
    this.canvasWrapper.appendChild(this.canvas);
};


_cs.prototype.initialize = function() {

    this.initialFlag = true;

    this.initialSize();
    this.initialPixijs();
    this.initialStage();

    this.initialFlag = false;

};

