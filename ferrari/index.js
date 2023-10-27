// Function to animate the SVG paths

function animateSVGPaths() {
	// const ferrariLogo = document.getElementById("ferrari-logo");
	// ferrariLogo.style.fillOpacity = "0";
	const pathElements = document.querySelectorAll("path");

	const rectangles = document.querySelectorAll("rect");
	rectangles.forEach(function (rectangle) {
		rectangle.setAttribute("fill-opacity", "0"); // Replace with the desired color

		setTimeout(() => {
			rectangle.style.stroke = "black";
		}, 1000);
	});

	pathElements.forEach((path, index) => {
		const pathLength = path.getTotalLength();

		path.style.strokeDasharray = pathLength; // Match the path length
		path.style.strokeDashoffset = pathLength; // Match the path length
		path.style.fillOpacity = "0";
		path.style.stroke = "none"; // Initially, set to "none" to make the path invisible
		path.style.strokeLinecap = "round";
		const drawingTime =
			pathLength > 300
				? (0.01 * pathLength) / 10
				: pathLength < 100
				? (0.01 * pathLength) / 5
				: (0.01 * pathLength);

		// Start the animation after a brief delay
		setTimeout(() => {
			path.style.animation = `draw ${drawingTime}s normal forwards`;
			path.style.stroke = "black"; // Set the stroke color
			path.style.strokeWidth = "1";
		}, drawingTime * index);

		const style = document.createElement("style");
		style.innerHTML = `
            @keyframes draw {
                from {
                    stroke-dashoffset: ${pathLength}/2;
                }
                to {
                    stroke-dashoffset: 0;
               
                }
            }


    
        `;
		document.head.appendChild(style);
	});
}

// Call the animation function
animateSVGPaths();
