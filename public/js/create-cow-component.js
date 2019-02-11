AFRAME.registerComponent('create-cow-component', {
    schema: {},
    init : function() {
        console.log("9!");
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createCow();

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();

          //  Context_AF.createAPlane();
            

            console.log("again");
        });
    },
    createCow : function() {
        const Context_AF = this;

        //create element, than add attributes you want. If you are creating many =you want to 
        //consider "pooling" elements (i.e. not creating/deleting a bunch but just hiding/showing a certain MAX amount with visibility="true" or "false" )
        //see here: https://www.html5rocks.com/en/tutorials/speed/static-mem-pools/ 
        //see here: https://aframe.io/docs/0.8.0/components/pool.html
        //models found on https://www.turbosquid.com
        
        console.log("r!");

        //red face
        let redFace = document.createElement('a-entity');
        redFace.setAttribute('obj-model', {obj:'/assets/models/bigJaw.obj'});
        redFace.setAttribute('material', {src:'/assets/textures/red.png'});
        redFace.setAttribute('remove-component', {}); 
        redFace.setAttribute('position', {x:2, y:2, z:-4});
        
        
        //the mask
        let Mask = document.createElement('a-entity');
        Mask.setAttribute('obj-model', {obj:'/assets/models/bigJaw.obj'});
        Mask.setAttribute('material', {src:'/assets/textures/blue.png'});
        Mask.setAttribute('remove-component', {}); 
        Mask.setAttribute('position', {x:0, y:-180, z:-20});

        //old man
        let Man = document.createElement('a-entity');
        Man.setAttribute('obj-model', {obj:'/assets/models/bigJaw.obj'});
        Man.setAttribute('material', {src:'/assets/textures/green.png'});
        Man.setAttribute('remove-component', {}); 
        Man.setAttribute('position', {x:-2, y:2, z:-4});
         
        let scene = document.querySelector('a-scene');
        scene.appendChild(redFace);
        scene.appendChild(Mask);
        scene.appendChild(Man);
    },
});