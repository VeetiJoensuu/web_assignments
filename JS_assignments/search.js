document.getElementById('search-bar').addEventListener('keyup', function(event) {
    const query = event.target.value.toLowerCase();
    const sections = document.querySelectorAll('main > *');
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
