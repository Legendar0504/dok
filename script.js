function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImage');
    
    if (!modal || !modalImg) {
        console.error('Modal elements not found!');
        return;
    }
    
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    modalImg.alt = "Увеличенное изображение";
    
    // Закрытие при клике вне изображения
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal();
        }
    }
    
    // Закрытие по клавише Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}