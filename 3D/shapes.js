function easy3D(canvas){
  this.canvas=canvas;
  this.ctx=canvas.getContext("2d");
  this.graph=array3D(canvas.width, canvas.height, 1000);
  this.cube=function(x, y, z, size){
    
  }
}
function array3D(a, b, c){
  var out=new Array(a);
  for(var i=0;i<out.length;i++){
    out[i]=new Array(b);
    for(var j=0;j<out[i].length;j++){
      out[i][j]=new Array(c);
    }
  }
  return out;
}
