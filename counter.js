

    let myButton = document.getElementById('increment-btn');
    let myIncrement = document.getElementById('count-el');
    let saveEl = document.getElementById('save-el')
    let count = 0

    myButton.addEventListener('click', function (e) {
        e.preventDefault();
        count = count + 1
        myIncrement.innerText = count
    });

    function save() {
        let myCount = count + " - ";
        saveEl.textContent += myCount;
        myIncrement.innerText = 0;
        count = 0;
    }
