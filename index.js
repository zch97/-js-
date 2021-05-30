const glide = new Glide('.glide')   // 实例化轮播图

// 实现轮播图中的标题显示动画 --start
const captionsEl = document.querySelectorAll('.slide-caption');

// glide提供的对轮播图显示和轮播事件的监听
glide.on(['mount.after','run.after'], () => {
    const caption = captionsEl[glide.index]
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        delay: anime.stagger(400, {start: 300}),
        translateY: [anime.stagger([40, 10]), 0]
    })
})

//每次轮播前要先把轮播图中的标题隐藏
glide.on('run.before', () => {
    document.querySelectorAll('.slide-caption > *').forEach(el => {
        el.style.opacity = 0;
    })
})

// 实现轮播图中的标题显示动画 --end

glide.mount();  // 挂载轮播图


