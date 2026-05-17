// 导航栏滚动效果
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 作品图片点击放大
document.querySelectorAll('.view-img-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const imgUrl = this.getAttribute('data-img');
        const modalImg = document.getElementById('modalPreviewImg');
        modalImg.src = imgUrl;
        const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
        imageModal.show();
    });
});

// 留言表单验证
const submitBtn = document.getElementById('submitMsgBtn');
if (submitBtn) {
    submitBtn.addEventListener('click', function () {
        const name = document.getElementById('nameInput');
        const content = document.getElementById('messageContent');
        let valid = true;

        if (!name.value.trim()) {
            name.classList.add('is-invalid');
            valid = false;
        } else {
            name.classList.remove('is-invalid');
        }

        if (!content.value.trim()) {
            content.classList.add('is-invalid');
            valid = false;
        } else {
            content.classList.remove('is-invalid');
        }

        if (valid) {
            const list = document.getElementById('commentList');
            const li = document.createElement('li');
            li.className = 'list-group-item bg-transparent';
            li.textContent = `✅ ${name.value}：${content.value}`;
            list.prepend(li);
            name.value = '';
            content.value = '';
            alert('留言提交成功！');
        }
    });
}
