var math = require('mathjs')

module.exports = function (point, angle, line) {
    // deterimine interesction point of ray with line based on
    // http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect/565282#565282

    function cross(x,y) {
        return x[0]*y[1] - x[1]*y[0]
    }

    var r = [Math.cos(Math.PI/180*angle), Math.sin(Math.PI/180*angle)]
    var q = [line[0][0] - point[0], line[0][1] - point[1]]
    var s = [line[1][0] - line[0][0], line[1][1] - line[0][1]]
    
    var a = cross(r,s)
    var b = cross(q,s)


    if (a === 0 & b === 0){
      // lines colinear
      var t0 = math.dot(r,q)
      var t1 = math.dot(r,s) + t0
      if (t0 <=0 & t1 <=0){
        // lines colinear and non intersecting
        return false   
      } else if (t0 <=0 & t1 >0){
        // lines colinear and intersecting at origin
        return {startPoint: point, distance:0, angle:0, intersection:point}
      } else if (t0 > 0 & t1<=0){
        // lines colinear and intersecting at origin
        return {startPoint: point, distance:0, angle:0, intersection:point}        
      } else{
        // lines colinear and intersecting
        t = math.min(t0,t1)
        return {startPoint: point, distance:t, angle:0, intersection:[t*r[0]+point[0], t*r[1]+point[1]]}
      }
    } else if (a === 0){
      // lines parallel and non intersecting  
        return false
    } else {
      var t = b/a 
      var u = cross(q,r)/a
      if (0<=t & 0<=u & u<=1){
        // lines non-parallel and intersecting
        return {startPoint: point, distance:t, angle:-180/math.PI*math.asin(a/math.norm(s)), intersection:[t*r[0]+ point[0], t*r[1]+point[1]]}
      } else {
        // lines non-parallel and non-intersecting
        return false;
      }
    } 
}



