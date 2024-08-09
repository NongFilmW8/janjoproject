function toggleDarkMode() {
    var body = document.body;
    var icon = document.getElementById('moonIcon');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun'); // เปลี่ยนเป็นไอคอนพระอาทิตย์เมื่อเปิด Dark Mode
        icon.style.transform = 'rotate(180deg)';
        icon.style.opacity = '0.5';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon'); // เปลี่ยนเป็นไอคอนพระจันทร์เมื่อกลับสู่โหมดปกติ
        icon.style.transform = 'rotate(0deg)';
        icon.style.opacity = '1';
    }
}
