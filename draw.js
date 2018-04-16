function drawNotes(t){
    var colors = ["rgb(143,135,191)","rgb(169,175,181)","rgb(169,163,166)","rgb(132,121,171)","rgb(255,196,84)"];
    ctx.strokeStyle = "rgb(255,255,255)";
    ctx.lineWidth = 3;
    lines.forEach(
        function(e,i){
            ctx.fillStyle = colors[i];
            ctx.fillRect(e*W-largeur,0,largeur*2,horizon);
            ctx.strokeRect(e*W-largeur,-50,largeur*2,horizon+50);
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect(e*W-1,0,2,horizon);
        }
    );
    currentNotes.forEach(
        function(e,i){
            var x = lines[e[0]]*W;
            var y = horizon - (e[1] - t)/vision*horizon;
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.beginPath();
            ctx.moveTo(x,y - largeur/2);
            ctx.lineTo(x + largeur/2,y);
            ctx.lineTo(x,y + largeur/2);
            ctx.lineTo(x - largeur/2,y);
            ctx.fill();
            ctx.fillStyle = "rgb(100,30,0)";
            ctx.beginPath();
            ctx.moveTo(x,y - largeur/4);
            ctx.lineTo(x + largeur/4,y);
            ctx.lineTo(x,y + largeur/4);
            ctx.lineTo(x - largeur/4,y);
            ctx.fill();
        }
    );
}

function drawParticles(p){
    var liste = [];
    p.forEach(
        function(e,i){
            if (e.type == 0){
                ctx.globalAlpha = e.trans;
                ctx.strokeStyle = "rgb(255,255,255)";
                ctx.beginPath();
                ctx.moveTo(e.x,e.y - e.s);
                ctx.lineTo(e.x + e.s,e.y);
                ctx.lineTo(e.x,e.y + e.s);
                ctx.lineTo(e.x - e.s,e.y);
                ctx.closePath();
                ctx.stroke();
                e.s += e.n;
                if (e.s > e.limite){
                    e.trans -= 0.02;
                    if (e.trans <= 0){
                        liste.unshift(i);
                    }
                }
            }
        }
    );
    ctx.globalAlpha = 1;
    liste.forEach(
        function(n){
            particles.splice(n,1);
        }
    );
}
