AFRAME.registerComponent('create-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createFaces();

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
    createFaces : function() {
        const Context_AF = this;
        //models found on https://www.turbosquid.com

        //red face
        let red = document.createElement('a-entity');
        red.setAttribute('obj-model', {obj:'/assets/models/bigJaw.obj'});
        red.setAttribute('material', {src:'/assets/textures/red.png'});
        red.setAttribute('remove-component', {}); 
        red.setAttribute('position', {x:2, y:2, z:-4});
        
        //blue
        let blue = document.createElement('a-entity');
        blue.setAttribute('obj-model', {obj:'/assets/models/bigJaw.obj'});
        blue.setAttribute('material', {src:'/assets/textures/blue.png'});
        blue.setAttribute('remove-component', {}); 
        blue.setAttribute('position', {x:0, y:4, z:-4});

        //green
        let green = document.createElement('a-entity');
        green.setAttribute('obj-model', {obj:'/assets/models/bigJaw.obj'});
        green.setAttribute('material', {src:'/assets/textures/green.png'});
        green.setAttribute('remove-component', {}); 
        green.setAttribute('position', {x:-2, y:2, z:-4});
         
        let scene = document.querySelector('a-scene');
        scene.appendChild(red);
        scene.appendChild(green);
        scene.appendChild(blue);
    },
});