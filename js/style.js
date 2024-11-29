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

// 圖片出現時翻轉
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".dynamic-img img"); // 选中所有目标图片

    const observerOptions = {
        root: null, // 使用视窗为根
        rootMargin: "0px", // 触发范围（可调整）
        threshold: 0.1, // 目标元素至少进入 10% 时触发
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("flip"); // 添加类触发动画
                observer.unobserve(entry.target); // 停止观察，避免重复触发
            }
        });
    }, observerOptions);

    images.forEach((img) => {
        observer.observe(img); // 观察每个图片
    });
});


