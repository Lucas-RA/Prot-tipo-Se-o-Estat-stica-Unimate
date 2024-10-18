document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.display = 'block';
        } else {
            accordionContent.style.display = 'none';
        }
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== accordionContent) {
                content.style.display = 'none';
                content.previousElementSibling.classList.remove('active');
            }
        });
    });
});


