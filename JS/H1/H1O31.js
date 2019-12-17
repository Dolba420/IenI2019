kleur='black';

function setup() {
  canvas = createCanvas(501,501);
  canvas.parent('processing');
  background('coral');
}

function draw() {
  for (var rij = 0;rij < 500;rij += 50) {
    for (var kolom = 0;kolom < 500;kolom += 50) {
        if(kleur == 'white'){
                kleur = "black";
        }
        else if(kleur == 'black'){
                kleur = "white";
        }
        fill(kleur);
      rect(kolom,rij,50,50);
    }
            if(kleur == 'white'){
                kleur = "black";
        }
        else if(kleur == 'black'){
                kleur = "white";
        }
  }
}