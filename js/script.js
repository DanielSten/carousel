let buttonAdded = document.getElementById('buttonAdded');
let buttonDelete = document.getElementById('buttonDelete');
let uploadFile = document.getElementById('uploadFile');


if (uploadFile) {
    uploadFile.addEventListener('change', function(){
        if(this.value) {
            buttonAdded.classList.toggle('hidden');
            buttonDelete.classList.toggle('hidden');
        }
    });
}

buttonDelete.onclick = function() {
    if (uploadFile.value) {
        uploadFile.value=''
        buttonAdded.classList.toggle('hidden');
        buttonDelete.classList.toggle('hidden');
    }
}

