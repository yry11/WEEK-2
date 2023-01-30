var DotsX;
var DotsY;
var DotsStroke;
var N = 20;
var way;
let feeding = false;
colors=[ "#ebc560","#1a3fb0","#decec3","#a9c2e6","#5b95dd","#88addc", "#06b4b0",]
function setup() {
   addGUI();
  createCanvas(500, 500);
  
  
  DotsX = [ ];
  DotsY = [ ];
  DotsStroke = [ ];
  way = [];
  
  for(let k=0 ;k<N ; k++ ){
    DotsX.push( width/2 + random(30)-30 );
    DotsY.push( height/2 + random(30)-30 );
    if( k<N/2 ) DotsStroke.push( random(10)+1 );
    else DotsStroke.push( random(6)+1 );    
    way.push( [ WayRand() , WayRand() ] );
  }
   filler= color(random(colors))
   for(let i = 0;i < width;i++){
        for(let j = 0;j < height;j++){
            if (dist(i,j,width/2,height/2)>140) {
                var ra = map(j,0,height,-50,250)+randomGaussian(0,10);
                 filler.setAlpha(ra);
                fill( filler);
                noStroke();
                ellipse(i,j,1,1);
            }else {
          var ra = map(j,0,height,200,-50)+randomGaussian(0,10);
                 filler.setAlpha(ra);
                fill( filler);
                noStroke();
                ellipse(i,j,1,1);
            }
pop
        }
    }

}

function WayRand(){
  let r=random(1);
  if( abs(r-0.5) < 0.1) return r+(r<0 ? -0.1:0.1);
  return r;
}

function Vx(i){
  return ( noise(frameCount/10,i*100)-way[i][0] ) *2;
}

function Vy(i){
  return ( noise(i*100,frameCount/10,500)-way[i][1])*2;
}

function mouseClicked() {
  for(let k=0;k<N;k++){
    DotsX[k] = width/2 + random(30)-30;
    DotsY[k] = height/2 + random(30)-30;
    way[k] = [ WayRand() , WayRand() ];
  }
}

function draw() {
   filler= color(random(colors))
 stroke(filler);
  for(let k=0 ;k<N ; k++ ){
    if( DotsX[k]<0 || DotsY[k]<0 || DotsX[k]>width || DotsY[k]>height ) continue;
    
    strokeWeight( DotsStroke[k] ); 
    point( DotsX[k] += Vx(k)  , DotsY[k] += Vy(k) );
  }
}
function addGUI(){

  //add a button
  
button=createButton("liquid")
 // button.parent('gui-container")
  button.addClass("button")
button.style("color","red")
//  button.mousePressed(handleButtonPress)
}