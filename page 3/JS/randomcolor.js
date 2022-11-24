const boxes = document.querySelectorAll(".image-text");

boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        let colors = [];
        for (let index = 0; index < 3; index++) {
            let randomColor = Math.floor(Math.random() * 255);
            if(colors.length >= 3) colors = [];
            colors.push(randomColor)
        }

        box.style.background = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.5)`;
    })
})
