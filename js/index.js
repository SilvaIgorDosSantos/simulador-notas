const saves = ["save1", "save2", "save3"];

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
        nota = nota.toFixed(2);
        boletim.innerText = nota;

        saveToLocalStorage(aa1.value, aa2.value, s.value, ac.value, nota);
        updateTable();
    }

    updateTable();
});

function updateTable() {
    let salvos = [];
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    salvos.push(getSavedData(saves[0]));
    salvos.push(getSavedData(saves[1]));
    salvos.push(getSavedData(saves[2]));
    
    salvos.filter(element => element !== null).forEach((element) => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <th>${element.aa1}</th>
            <th>${element.aa2}</th>
            <th>${element.s}</th>
            <th>${element.ac}</th>
            <th>${element.nf}</th>
        `;
        tbody.innerHTML = tr.innerHTML + tbody.innerHTML;
    });
}

function getSavedData(save) {
    if(localStorage.getItem(save) !== null) {
        return ({
            aa1:localStorage.getItem(`${save}_aa1`),
            aa2:localStorage.getItem(`${save}_aa2`),
            s:localStorage.getItem(`${save}_s`),
            ac:localStorage.getItem(`${save}_ac`),
            nf:localStorage.getItem(`${save}_nf`)
        });
    }
    else {
        return null;
    }
}

function saveToLocalStorage(aa1, aa2, s, ac, nf) {
    if(localStorage.getItem(saves[0]) === null) {
        saveData(aa1, aa2, s, ac, nf, saves[0]);
        return;
    }
    if(localStorage.getItem(saves[1]) === null) {
        saveData(aa1, aa2, s, ac, nf, saves[1]);
        return;
    }
    if(localStorage.getItem(saves[2]) === null) {
        saveData(aa1, aa2, s, ac, nf, saves[2]);
        return;
    }

    let s2 = getSavedData(saves[1]);
    let s3 = getSavedData(saves[2]);
    saveData(s2.aa1, s2.aa2, s2.s, s2.ac, s2.nf, saves[0]);
    saveData(s3.aa1, s3.aa2, s3.s, s3.ac, s3.nf, saves[1]);
    saveData(aa1, aa2, s, ac, nf, saves[2]);
}

function saveData(aa1, aa2, s, ac, nf, save) {
    localStorage.setItem(save, true);
    localStorage.setItem(`${save}_aa1`, aa1);
    localStorage.setItem(`${save}_aa2`, aa2);
    localStorage.setItem(`${save}_s`, s);
    localStorage.setItem(`${save}_ac`, ac);
    localStorage.setItem(`${save}_nf`, nf);
}