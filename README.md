# 原生js制作响应式网站教程学习记录
教学视频出处：  https://www.bilibili.com/video/BV117411n7R1?p=1

## 成品

## 收获

- css方面

  + 两种写法的区别

    ```css
    .slide-caption h3 {
        font-size: 24px;
        margin: 48px 0;
    }
    /* 写法一：类名之间有空格，选择器选择到的元素是：
    <element class="slide-caption">
    ...
    <h3> 
    */
    
    .slide-caption.left{
        max-width: 80vw;
        text-align: left;
    }
    /* 写法二：类名之间没有空格，选择器选择到的元素是：
    <element class="slide-caption left">
    ...
    <h3>
    */
    ```

  + css中的变量使用:root

    ```css
    /* 定义:root */
    :root {
        --primary-color:#ff434f;
        --secondary-color: #e3e3e3;
        --text-color-lightest: #e7e9ec;
        --text-color-darker: #2e2e2e;
        --text-color-dark: #494949;
        --text-color-gray: #8b8b8b;
        --text-color-dark-gray: #727272;
        --text-color-light-gray: #c6c6c6;
        --backdrop-color: rgba(42, 42, 42, 0.69)
    }
    
    /* 使用var() */
    header nav i {
        color:var(--text-color-lightest);
    }
    ```

    

