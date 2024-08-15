function addNote() {
    var note = document.getElementById("message").value;

    if (note.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    const para = document.createElement('p');
    para.textContent = note;

    const closeIcon = document.createElement('span');

    closeIcon.className = 'fa-solid fa-circle-xmark  close';

    closeIcon.onclick = function () {
        para.remove();
    };

    para.appendChild(closeIcon);
    document.getElementById('messageContainer').appendChild(para);

    document.getElementById("message").value = "";
}