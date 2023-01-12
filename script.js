let progress = document.getElementById('data');
let data = document.getElementById('data');



let timer = setInterval(function () {
    let percentage = parseInt(progress.getAttribute('data-progress').replace('%', ''));
    percentage += 1;
    progress.setAttribute('data-progress', percentage + "  %");
    document.documentElement.style.setProperty('--progress', percentage + "%");
    console.log(percentage);
    if (percentage >= 100) {
        progress.setAttribute('data-progress', "100%");
        clearInterval(timer);
    }
}, 30);