var canvas;
var ctx;

window.addEventListener("resize", (_=>resizeCanvas()));

function retrieveCanvasData() {
	let treeCanv = document.getElementById("treeCanvas")
	let treeTab = document.getElementById("treeTab")
	if (treeCanv===undefined||treeCanv===null) return false;
	if (treeTab===undefined||treeTab===null) return false;
	canvas = treeCanv;
	ctx = canvas.getContext("2d");
	return true;
}

function resizeCanvas() {
	if (!retrieveCanvasData()) return
	canvas.width = 0;
    canvas.height = 0;
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
		drawTree();
}

var colors = {
	default: {
    background: "#0f0f0f",
    tooltip: "rgba(0, 0, 0, 0.75)",
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		4: "#7f7f7f",
	},
	aqua: {
    background: "#001f3f",
    tooltip: "rgba(0, 15, 31, 0.75)",
		1: "#bfdfff",
		2: "#8fa7bf",
		3: "#6387ad",
		4: "#5f6f7f",
	},
	gameboy: {
    background: "#010f00",
    tooltip: "rgba(0, 33, 0, 0.75)",
		1: "#73a671",
		2: "#458542",
		3: "#216e1e",
		4: "#094a07",
	},
	ruby: {
    background: "#170000",
    tooltip: "rgba(45, 0, 0, 0.75)",
		1: "#bb9999",
		2: "#a98787",
		3: "#996565",
		4: "#763434",
	},
	brighter: {
    background: "#4f4f4f",
    tooltip: "rgba(115, 115, 115, 0.75)",
		1: "#ffffff",
		2: "#dfdfdf",
		3: "#bfbfbf",
		4: "#bfbfbf",
	},
}
var colors_theme

function drawTree() {
	if (!retrieveCanvasData()) return;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (layer in layers){
		if (tmp[layer].layerShown == true && tmp[layer].branches){
			for (branch in tmp[layer].branches)
				{
					drawTreeBranch(layer, tmp[layer].branches[branch])
				}
		}
	}
}

function drawTreeBranch(num1, data) { // taken from Antimatter Dimensions & adjusted slightly
	let num2 = data
	let color_id = 1

	if (Array.isArray(data)){
		num2 = data[0]
		color_id = data[1]
	}

	if(typeof(color_id) == "number")
		color_id = colors_theme[color_id]

	if (document.getElementById(num1) == null || document.getElementById(num2) == null)
		return

	let start = document.getElementById(num1).getBoundingClientRect();
    let end = document.getElementById(num2).getBoundingClientRect();
    let x1 = start.left + (start.width / 2) + document.body.scrollLeft;
    let y1 = start.top + (start.height / 2) + document.body.scrollTop;
    let x2 = end.left + (end.width / 2) + document.body.scrollLeft;
    let y2 = end.top + (end.height / 2) + document.body.scrollTop;
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.strokeStyle = color_id
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}