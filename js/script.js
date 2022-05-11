const buttonAdded = document.getElementById('buttonAdded');
const buttonDelete = document.getElementById('buttonDelete');
const uploadFile = document.getElementById('uploadFile');
const photo = document.querySelectorAll('.user_photo_added');
const arrowLeft = document.querySelector('.arrow_photo_left');
const arrowRight = document.querySelector('.arrow_photo_right');
let i = 0



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
        if(buttonAdded.classList.contains('hidden') == false ){
            document.getElementById('conclusionFile').innerText = '';
        }
    }
}

let showFile = function (input) {
    let file = input.files[0];
    let fileName = `${file.name}`;
    if(buttonAdded.classList.contains('hidden') == false){
        document.getElementById('conclusionFile').innerText = fileName;
    }
}

arrowLeft.onclick = function(){
    photo[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = photo.length - 1;
    }
    photo[i].style.display = 'block';
}
arrowRight.onclick = function(){
    photo[i].style.display = 'none';
    i = i + 1;
    if(i > photo.length - 1){
        i = 0;
    }
    photo[i].style.display = 'block';
}