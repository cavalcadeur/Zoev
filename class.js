var Perso = function(){
    var y = 100;
    var x = 8;
    var g = 0;
    var acts = ["p0"];
    var favor = "";

    function getXS(){
        return 7;
    }


    return{
        getY(){
            return y;
        },
        getX(){
            return x;
        },
        getXscrolled(){
            return getXS();
        },
        moveRight(){
            x += 1;
            if (niveaux[level][x] == "coffre"){
                if (niveaux[level][x] == "coffre"){
                    niveaux[level][x] = "openchest";
                    x -= 1;
                    particles[getXS()+1] = ["chestContent",0,-20,getChestContent(level,x),0];
                }
            }
        },
        moveLeft(){
            x -= 1;
            if (niveaux[level][x] == "coffre"){
                if (niveaux[level][x] == "coffre"){
                    niveaux[level][x] = "openchest";
                    x += 1;
                    particles[getXS()-3] = ["chestContent",0,-20,getChestContent(level,x),0];
                }
            }
        },
        draw(){
            ctx.fillStyle = "rgb(0,0,0)";
            //if (x < 7){
            ctx.fillRect(getXS()*W/15,y-W/30,W/15,W/15);
            /*
             }
             else if (x > niveaux[level].length-7){
             ctx.fillRect((-niveaux[level].length+14 + x)*W/15,y-W/30,W/15,W/15);
             }
             else {
             ctx.fillRect(W/2-W/30,y-W/30,W/15,W/15);
             }
             */
        },
        act(){
            var sol = H/5*4;
            if (niveaux[level][x] == "trou") sol = H*2;
            if (y + W/30-1 < sol){
                if (g < 20) g += 0.5;
                y += g/4;
            }
            else {
                y = sol - W/30 + 1;
                g = 0;
            }
            if (y > H+W/30){
                mort();
            }
        },
        chooseNext(bb){
            if (acts.length == 1) {return acts[0];}
            else {
                var chances = [];
                for (var i = 0;i<acts.length;i++){
                    chances[i] = 1;
                }
                if (touche >= 1){
                    if (bb == "p0"){
                        chances[0] += 4;
                        favor = "p0";
                    }
                    else if (bb == "p1"){
                        chances[1] += 4;
                        favor = "p1";
                    }
                }
                if (acts[2] == "p2"){
                    if (niveaux[level][x] == "porte"){
                        chances[2] = 4;
                    }
                    else{
                        chances[2] = 0;
                    }
                }
                if (favor == "p0"){
                    chances[0] += 2;
                    favor = "";
                }
                else if (favor == "p1"){
                    chances[1] += 2;
                    favor = "";
                }

                var n = 0;
                for (var i = 0;i<acts.length;i++){
                    n += chances[i];
                }
                n = rnd(n);
                var nn = 0;
                for (var i = 0;i<acts.length;i++){
                    nn += chances[i];
                    if (n < nn){
                        return acts[i];
                    }
                }
            }
        },
        add(nn){
            acts.push(nn);
        }


    };
};
