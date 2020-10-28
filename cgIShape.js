//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube (subdivisions)  {

    var scalingFactor = 0.5
    //The cube face
    vertexOne = [-1.0, -1.0,  0.5]
    vertexTwo =  [1.0, -1.0,  0.5]
    vertexThree = [1.0,  1.0,  0.5]

    for(var row = -subdivisions; row < subdivisions; row+=2){
        for(var col = -subdivisions; col < subdivisions; col+=2){
                    //Point a in the triangle
                    vertexOne[0] = scalingFactor * (row/subdivisions)
                    vertexOne[1] = scalingFactor * (col/subdivisions)
                    vertexOne[2] = scalingFactor

                    //Point b in the triangle
                    vertexTwo[0] = scalingFactor * ((row + 2)/subdivisions)
                    vertexTwo[1] = scalingFactor * (col/subdivisions)
                    vertexTwo[2] = scalingFactor

                    //Point c in the triangle
                    vertexThree[0] = scalingFactor * (row/subdivisions)
                    vertexThree[1] = scalingFactor * ((col + 2)/subdivisions) 
                    vertexThree[2] = scalingFactor
          
                    addTriangle(vertexOne[0],vertexOne[1],vertexOne[2],
                        vertexTwo[0],vertexTwo[1],vertexTwo[2],
                        vertexThree[0],vertexThree[1], vertexThree[2])

                    addTriangle(vertexThree[0],vertexThree[1], -vertexThree[2],
                        vertexTwo[0],vertexTwo[1], -vertexTwo[2],
                        vertexOne[0],vertexOne[1], -vertexOne[2])
                    
                    
                    vertexOne[0] = vertexTwo[0]
                    vertexOne[1] = vertexThree[1]
                    vertexOne[2] = scalingFactor
    

                    addTriangle(vertexOne[0],vertexOne[1],vertexOne[2],
                        vertexThree[0],vertexThree[1],vertexThree[2],
                        vertexTwo[0],vertexTwo[1], vertexTwo[2])
                    
                    addTriangle(vertexOne[0],vertexOne[1], -vertexOne[2],
                        vertexTwo[0],vertexTwo[1], -vertexTwo[2],
                        vertexThree[0],vertexThree[1], -vertexThree[2])
       }
    }


    for(var row = -subdivisions; row < subdivisions; row+=2){
        for(var col = -subdivisions; col < subdivisions; col+=2){
                    //Point a in the triangle
                    vertexOne[0] = scalingFactor * (col/subdivisions)
                    vertexOne[1] = scalingFactor 
                    vertexOne[2] = scalingFactor * (row/subdivisions)

                    //Point b in the triangle
                    vertexTwo[0] = scalingFactor * ((col)/subdivisions)
                    vertexTwo[1] = scalingFactor 
                    vertexTwo[2] = scalingFactor * ((row  + 2)/subdivisions)

                    //Point c in the triangle
                    vertexThree[0] = scalingFactor * ((col + 2)/subdivisions)
                    vertexThree[1] = scalingFactor 
                    vertexThree[2] = scalingFactor * (row/subdivisions) 
          
                    addTriangle(vertexOne[0],vertexOne[1],vertexOne[2],
                        vertexTwo[0],vertexTwo[1],vertexTwo[2],
                        vertexThree[0],vertexThree[1], vertexThree[2])

                    addTriangle(vertexThree[0], -vertexThree[1], vertexThree[2],
                        vertexTwo[0], -vertexTwo[1], vertexTwo[2],
                        vertexOne[0], -vertexOne[1], vertexOne[2])
                    
                    vertexOne[0] = vertexThree[0]
                    vertexOne[1] = scalingFactor
                    vertexOne[2] = vertexTwo[2]
    

                    addTriangle(vertexOne[0],vertexOne[1],vertexOne[2],
                        vertexThree[0],vertexThree[1],vertexThree[2],
                        vertexTwo[0],vertexTwo[1], vertexTwo[2])
                    
                    addTriangle(vertexOne[0], -vertexOne[1], vertexOne[2],
                        vertexTwo[0], -vertexTwo[1], vertexTwo[2],
                        vertexThree[0], -vertexThree[1], vertexThree[2])
       
       }
    }

    for(var row = -subdivisions; row < subdivisions; row+=2){
        for(var col = -subdivisions; col < subdivisions; col+=2){
                    //Point a in the triangle
                    vertexOne[0] = scalingFactor 
                    vertexOne[1] = scalingFactor * ((col) /subdivisions)
                    vertexOne[2] = scalingFactor * ((row + 2)/subdivisions)

                    //Point b in the triangle
                    vertexTwo[0] = scalingFactor
                    vertexTwo[1] = scalingFactor  * ((col)/subdivisions)
                    vertexTwo[2] = scalingFactor * ((row)/subdivisions)

                    //Point c in the triangle
                    vertexThree[0] = scalingFactor 
                    vertexThree[1] = scalingFactor * ((col + 2)/subdivisions)
                    vertexThree[2] = scalingFactor * ((row + 2)/subdivisions) 
          
                    addTriangle(vertexOne[0],vertexOne[1],vertexOne[2],
                        vertexTwo[0],vertexTwo[1],vertexTwo[2],
                        vertexThree[0],vertexThree[1], vertexThree[2])

                    addTriangle(-vertexThree[0], vertexThree[1], vertexThree[2],
                        -vertexTwo[0], vertexTwo[1], vertexTwo[2],
                        -vertexOne[0], vertexOne[1], vertexOne[2])
                    
                    vertexOne[0] = scalingFactor
                    vertexOne[1] = vertexThree[1]
                    vertexOne[2] = vertexTwo[2]

                    addTriangle(vertexOne[0],vertexOne[1],vertexOne[2],
                        vertexThree[0],vertexThree[1],vertexThree[2],
                        vertexTwo[0],vertexTwo[1], vertexTwo[2])
                    
                    addTriangle(-vertexOne[0], vertexOne[1], vertexOne[2],
                        -vertexTwo[0], vertexTwo[1], vertexTwo[2],
                        -vertexThree[0], vertexThree[1], vertexThree[2])
       }
    }
}


//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialdivision,heightdivision){

    // this will be used to calculate the normal
    radiusTop = 1;
    radiusBottom = 1;
    height = 1;

    radialSegments = Math.floor( radialdivision );
    heightSegments = Math.floor( heightdivision );

    openEnded = false;
    thetaStart = 0.0;
    thetaLength = Math.PI * 2;

    //arrays
    const indices = [];
    const vertices = [];
    const normals = [];
    const cross = [];


    function generateTopCylinder(top){
            const centerIndexStart = index;

			const uv = new Vector2();
			const vertex = new Vector3();
			let groupCount = 0;
			const radius = radiusTop;
            const sign = 1;

             // we must generate a center vertex per face/segment

                for ( let x = 1; x <= radialSegments; x ++ ) {

                    // vertex
                    vertices.push( 0, halfHeight * sign, 0 );
                    // normal
                    normals.push( 0, sign, 0 );
                    // uv
                    uvs.push( 0.5, 0.5 );
                    // increase index
                    index ++;
                }

    }

    function generateTorso(){
        const normal = new Vector3();
        const vertex = new Vector3();
        let count = 0;
        const slope = ( radiusTop - radiusBottom ) + radiusTop;
        for(var i = 0; i < heightSegments; i++){
            const row = [];
            const v = i/heightSegments;
            const radius = v * (radiusBottom - radiusTop) + radiusTop;
            for ( var j = 0; j < radialSegments; j++){
                const u = j/radialSegments;
                const theta = u *thetaLength + thetaStart;
                const sinTheta = Math.sin(theta);
                const cosTheta = Math.cos(theta);

                vertex.x = radius * sinTheta;
                vertex.y = v * height + halfheight;
            }
        }


    }

}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
    // fill in your code here.
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.
}


////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

