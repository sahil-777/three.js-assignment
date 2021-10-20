// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00
// });

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// const animate = function () {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// };

//animate();

let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth; //1536
canvas.height = window.innerHeight; //726

let verticesX = [];
let verticesY = [];

$("#canvas").click(function (e) {
    getPosition(e);
});

var pointSize = 3;

function getPosition(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    //console.log(x,y);
    verticesX.push(x);
    verticesY.push(y);
    drawCoordinates(x, y);
}

function drawCoordinates(x, y) {
    var ctx = document.getElementById("canvas").getContext("2d");


    ctx.fillStyle = "#cb202D"; // Red color

    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
}

function drawLine(X1, Y1, X2, Y2) {
    //   console.log(X1,Y1,X2,Y2);
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(X1, Y1);
    ctx.lineTo(X2, Y2);
    ctx.stroke();
}

function create() {
    let totalVertices = verticesX.length;
    for (let i = 0; i < totalVertices - 1; i++) {
        drawLine(verticesX[i], verticesY[i], verticesX[i + 1], verticesY[i + 1]);
    }
    drawLine(verticesX[0], verticesY[0], verticesX[totalVertices - 1], verticesY[totalVertices - 1]);
}
