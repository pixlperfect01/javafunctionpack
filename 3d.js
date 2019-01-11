function easy3D(canvas){
  this.c=canvas;
  this.ctx=c.getContext("2d");
  //this.centerRect=function(w,h,x,y,z)
  this.cube=function(s,x,y,z){
    //(x-(s/2))*(z*0.1)
