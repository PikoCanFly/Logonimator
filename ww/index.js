// Function to animate the SVG paths
function animateSVGPaths() {
    const pathElements = document.querySelectorAll("path");

    pathElements.forEach((path, index) => {
        const pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength; // Match the path length
        path.style.strokeDashoffset = pathLength; // Match the path length
        path.style.fill = "none";
        path.style.stroke = "none"; // Initially, set to "none" to make the path invisible
        path.style.strokeLinecap = "round";
        const drawingTime = 0.01 * pathLength

        
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