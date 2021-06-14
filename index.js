const glide = new Glide('.glide')   // 实例化轮播图

// 实现轮播图中的标题显示动画 --start
const captionsEl = document.querySelectorAll('.slide-caption');

// glide提供的对轮播图显示和轮播事件的监听
glide.on(['mount.after', 'run.after'], () => {
    const caption = captionsEl[glide.index]
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        delay: anime.stagger(400, { start: 300 }),
        translateY: [anime.stagger([40, 10]), 0]
    })
})

//每次轮播前要先把轮播图中的标题隐藏
glide.on('run.before', () => {
    document.querySelectorAll('.slide-caption > *').forEach(el => {
        el.style.opacity = 0;
    })
})
glide.mount();  // 挂载轮播图
// 实现轮播图中的标题显示动画 --end


// 成功案例效果 --start
const isotope = new Isotope('.cases', {
    layoutMode: 'fitRows',
    itemSelector: '.case-item'
});

const filterBtns = document.querySelector('.filter-btns');

filterBtns.addEventListener('click', e => {
    let { target } = e;
    const filterOption = target.getAttribute('data-filter');
    if (filterOption) {
        document.querySelectorAll('.filter-btn.active').forEach(btn => {
            btn.classList.remove('active');
            target.classList.add('active');

            isotope.arrange({ filter: filterOption })
        })
    }
})
// 成功案例效果 --end

// 控制header和返回顶部按钮 --start
const headerEl = document.querySelector('header'), scrollToTop = document.querySelector('.scrollToTop');

window.addEventListener('scroll', () => {
    let height = headerEl.getBoundingClientRect().height;
    if (window.pageYOffset - height > 800) {
        if (!headerEl.classList.contains('sticky')) {
            headerEl.classList.add('sticky')
        }
    } else {
        headerEl.classList.remove('sticky')
    }

    if (window.pageYOffset > 2000) {
        scrollToTop.style.display = 'block'
    } else {
        scrollToTop.style.display = 'none'
    }
})
// 控制header和返回顶部按钮 --end

// 关于我，服务流程，数据展示模块下的子模块动画 --start
const staggeringOption = {
    delay: 300,
    distance: '50px',
    duration: 500,
    easing: 'ease-in-out',
    origin: 'bottom'
}
ScrollReveal().reveal('.feature', { ...staggeringOption, interval: 350 });
ScrollReveal().reveal('.service-item', { ...staggeringOption, interval: 350 });

const dataSectionEl = document.querySelector('.data-section');

ScrollReveal().reveal('.data-section', {
    beforeReveal: () => {
        anime({
            targets: '.data-piece .num',
            innerHTML: el => {
                return [0, el.innerHTML]
            },
            duration: 2000,
            round: 1,
            easing: 'easeInExpo'
        });
        dataSectionEl.style.backgroundPosition = `center calc(50% - ${dataSectionEl.getBoundingClientRect().bottom / 5}px)`;
    }
});

// 控制数据部分的视差动画
window.addEventListener('scroll', () => {
    const bottom = dataSectionEl.getBoundingClientRect().bottom;
    const top = dataSectionEl.getBoundingClientRect().top;

    if (bottom >= 0 && top <= window.innerHeight) {
        dataSectionEl.style.backgroundPosition = `center calc(50% - ${bottom / 5}px)`;
    }
})
// 关于我，服务流程，数据展示模块下的子模块动画 --end

// 实现导航和回到顶部流畅滚动
const scroll = new SmoothScroll('nav a[href*="#"], .scrollToTop a[href*="#"]', {
    header: 'header',
    offset: 80
});

document.addEventListener('scrollStart', () => {
    if (headerEl.classList.contains('open')) {
        headerEl.classList.remove('open')
    }
})

// 探索更多按钮
const exploreBtnEls = document.querySelectorAll('.explore-btn');
exploreBtnEls.forEach(item => {
    item.addEventListener('click', () => {
        scroll.animateScroll(document.querySelector('.about-us'))
    })
})

// 折叠按钮
const burgerEl = document.querySelector('.burger');
burgerEl.addEventListener('click', () => {
    headerEl.classList.toggle('open');
})

