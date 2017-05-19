# My-summary
summary

# 前端优化简述

> 无意中看了这个，写的很好，就直接拿过来了

### 优化目的

1. 用户角度：页面加载更快、操作响应更快、体验更好
1. 服务端角度：减少请求数、减小请求带宽

### 优化方法

1. 页面优化
    - HTTP请求数
        1. 从设计实现层面简化页面
        1. 合理设置`HTTP`缓存
        1. 资源合并与压缩(example：`CSS Sprites`)
        1. Inline Images（将图片嵌入到页面或style文件）
        1. Lazy Load Images
        1. 避免重复的资源请求
    - 资源优化
        1. 图片格式的选择（非透明大图尽量不用png、PS保存图片为`web格式`且勾选`连续`选项）
    - 资源的无阻塞加载
        1. CSS放在HEAD中
        1. JavaScript置底
        1. Lazy Load Javascript（example：`AMD`）
1. 代码优化
    - DOM操作优化
        1. 减少DOM操作，减少`Reflow和Repaint`
        1. HTML Collection（类数组集合并不是一个静态的结果，表示的仅是特定的查询，每次访问时会重新执行查询需要遍历 HTML Collection时，将它转为数组再访问，以提高性能）
    - JavaScript
        1. 减少作用域链查找（example：缓存全局变量）
        1. 慎用 `with、eval、Function`
        1. 减少闭包的使用（易内存浪费，不仅仅是常驻内存，重要的是，使用不当会造成无效内存的产生）
        1. 直接量、局部变量的使用（对象属性以及数组的访问需要更大的开销）
        1. 减少字符串拼接`+`使用
    - CSS选择符优化
        1. 减少层级，多用class（浏览器解析CSS是从右往左）
    -  HTML结构优化
        1. 使用HTML5 DOCTYPE
        1. 标签闭合、结构分离
        1. Boolean 属性不需要赋值，如果存在则为True（example：`checked、selected`）
        1. 语义化、标签统一整洁
        1. 减少文本和元素混合，并作为另一元素的子元素
        1. 避免使用`<br />、<hr />`

    # 从浏览器输入URL按回车到页面显示都发生了什么
    
    1. 浏览器根据URL进行DNS查询
        1. 首先从DNS缓存中查询
        2. 若未在缓存中找到，则不停的向上一级请求DNS服务器
    2. 取得IP地址，建立TCP连接
    3. 构造HTTP请求报
        添加一些HTTP首部
        根据同源政策添加cookie
    4. 在TCP连接上发送HTTP报文，等待响应
    5. 服务器处理HTTP请求报文，返回响应HTTP响应报文
    6. 浏览器处理服务器的HTTP响应报文，若为HTML则渲染页面，不包括脚本的简单渲染流程如下：
        1. 解析DOM，CSSOM
        2. 根据DOM、CSSOM计算render tree
        3. 根据render tree进行layout
        4. paint，至此，用户可以看到页面了

# 使用fetch的时候遇到的问题
    见：image/
