document.addEventListener("DOMContentLoaded", function() {
    let aa1 = document.querySelector("#aa1");
    let aa2 = document.querySelector("#aa2");
    let s = document.querySelector("#s");
    let ac = document.querySelector("#ac");

    let boletim = document.querySelector("#nota-boletim");

    let button = document.querySelector(".calcular");

    button.onclick = () => {
        let nota = (
            0.25*parseFloat(aa1.value) +
            0.25*parseFloat(aa2.value) +
            0.3*parseFloat(s.value) +
            0.2*parseFloat(ac.value)
        );

        boletim.innerText = nota;
    }
});