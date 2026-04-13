// FAQ 아코디언 UI
// 기본은 아코디언 콘텐츠는 숨김
// 클릭시 해당 콘텐츠 표시하고 나머지는 숨김
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
});
