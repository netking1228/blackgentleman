// 當用戶滾動到圖片時，添加 "visible" 類名以顯示動畫
const dynamicImages = document.querySelectorAll('.dynamic-img');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

dynamicImages.forEach((img) => observer.observe(img));




// 獲取當前年份並插入到 <span> 中
document.getElementById("year").textContent = new Date().getFullYear();




if (window.location.pathname.endsWith('contact.html')) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw_UTJn4UG4zAT62Vme7mPG6z20ba5vKlJTvDOBG3ltsGOyZBbz1dVxy3m6of88yJUk/exec';

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        const formData = $(this).serialize();

        $.ajax({
            url: scriptURL,
            method: 'POST',
            data: formData,
            success: function (response) {
                $('#responseMessage').text('表單已成功提交！').addClass('alert alert-success');
                $('#contactForm')[0].reset();
            },
            error: function () {
                $('#responseMessage').text('提交失敗，請稍後再試！').addClass('alert alert-danger');
            }
        });


    });
}

