// 页面加载完成后添加动画类
window.addEventListener('load', function () {
    const articles = document.querySelectorAll('.md-content__inner article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.classList.add('fadeInUp');
        }, index * 200);
    });
});