function drawSVG() {
	const pathElements = document.querySelectorAll("path");


	const rectangles = document.querySelectorAll("rect");

	rectangles.forEach((rectangle)=>{
		rectangle.setAttribute("fill-opacity", "0");

		setTimeout(()=>{
			rectangle.style.stroke = "black";
			rectangle.style.strokeWidth = "3";
		},1000)
	});

	pathElements.forEach((path, index) => {
		const pathLength = path.getTotalLength();
		path.style.strokeDasharray = pathLength;
		path.style.strokeDashoffset = pathLength;
		path.style.fill = "none";
		path.style.stroke = "none";
		const drawingTime = pathLength * 0.0005;


		setTimeout(() => {
			path.style.animation = `draw ${drawingTime}s ease-in forwards`;
			path.style.stroke = "black";
			path.style.strokeWidth ="3";
	
		}, drawingTime * index);

		const style = document.createElement("style");
		style.innerHTML = `
        @keyframes draw {
            from {
                stroke-dashoffset: ${pathLength}/2;
                }
            to
            {
                stroke-dashoffset:0;
            }
        }`;
        document.head.appendChild(style);

	});
}

drawSVG();

