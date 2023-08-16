const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

//code to click anywhere on the window to close the modal
window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});