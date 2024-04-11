document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('paragraph');
    const button = document.getElementById('changeButton');
    const body = document.body;

    let originalState = true;
/*
    button.addEventListener('click', () => {
        paragraph.textContent = 'I know you are working really hard right now. You are doing the right thing, it will all be worth it at the end';
        // Change the background image when the button is clicked
        if (body.style.backgroundImage === 'url("cloud.avif")') {
            body.style.backgroundImage = 'url("sun.jpg")';
        
        } else {
            body.style.backgroundImage = 'url("cloud.avif")';
        }
    });
});



    <p id="paragraph">Click on the button once and be ready to recieve some possitveness</p>

*/

button.addEventListener('click', () => {
    if (originalState) {
        // Change the paragraph text
        paragraph.textContent = 'I know you are working really hard right now. You are doing the right thing, it will all be worth it at the end!';
        paragraph.style.color = 'pink';
        // Change the background image
        body.style.backgroundImage = 'url("rainbow.jpeg")';
    } else {
        body.style.backgroundImage = 'url("cloud.avif")';
    }

    // Toggle the state
    originalState = !originalState;
});
});