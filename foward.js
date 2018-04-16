function foward(){
    var trucMuche = actions[0];
    if (touche >= 1){
        action(actions[0]);
        if (touche == 0) select = 0;
    }
    actions.forEach(
        function (e,i){
            if (i == actions.length -1) actions[i] = heros.chooseNext(trucMuche);
            else actions[i] = actions[i+1];
        }
    );
    scrollAct = 1;

    initLevel(level,heros.getX());
}

function calculs(){
    if (scrollAct > 0){
        scrollAct -= 0.2;
        if (scrollAct < 0) scrollAct = 0;
    }
    heros.act();
}

function action(tt){
    if (tt == "p0"){
        if (heros.getX() < niveaux[level].length){
            heros.moveRight();
	    particles[heros.getXscrolled()] = ["dash",0.8];
            scrollPart(1);
        }
    }
    else if (tt == "p1"){
        if (heros.getX() > 0){
            heros.moveLeft();
	    particles[heros.getXscrolled()] = ["invertDash",0.8];
            scrollPart(-1);
        }
    }
}

function scrollPart(n){
    if (n == 1 || n == undefined){
        particles.splice(0,1);
        particles.push([""]);
    }
    else if (n == -1){
        particles.splice(particles.length-1,1);
        particles.splice(0,0,[""]);
    }
}

