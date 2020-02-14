/*
旋转木马的思路：
    - 页面 page  html and css
        - 类似 container
            - images
                - css
                - html
            - indicators
                - css
                - html
            - text
                - css
                - html
    - 事件
        - click
            - indicators
                - slide indicator
                    - 删除所有 active  添加 active
                    - data-index
                        - slide image
                            - gua-image-center
                            - gua-image-left
                            - gua-image-right
                            - data-active 改变 +1 -1
            - images
                - data-index
                   - slide image
                            - gua-image-center
                            - gua-image-left
                            - gua-image-right
                    - slide indicator
                         - 删除所有 active  添加 active
        - auto slide image
            - images
            - indicators
*/
const showAll = function (index) {
    let i = index
    showImg(i)
    showInd(i)
}
const imageSelector = function (index, offset) {
    let imgs = int(e('.gua-carousel-images').dataset.imgs)
    let s = '#id-image-'
    if (offset == 0) {
        return s + str(index)  // center
    }
    if (offset == -1) {
        // index 1 
        if (index == 1) {
            return s + str(imgs)
        } else {
            return s + str(index - 1)
        }
    }
    if (offset == 1) {
        // index  6
        if (index == imgs) {
            return s + '1'
        } else {
            return s + str(index + 1)
        }
    }
}
const showImg = function (index) {
    let center = e(imageSelector(index, 0))
    let left = e(imageSelector(index, -1))
    let right = e(imageSelector(index, 1))
    // log('center', center)
    // log('left', left)
    // log('right', right)
    let c = 'gua-image-center'
    let l = 'gua-image-left'
    let r = 'gua-image-right'
    removeClassAll(c)
    removeClassAll(l)
    removeClassAll(r)
    toggleClass(center, c)
    toggleClass(left, l)
    toggleClass(right, r)
}
const showInd = function (index) {
    let ind = '#dian-' + str(index)
    let dian = e(ind)
    let className = 'active'
    removeClassAll(className)
    toggleClass(dian, className)
}
const bindEventInd = function () {
    let dians = es('.dian')
    bindAll(dians, 'click', function (event) {
        let dian = event.target
        log('click', dian)
        let index = int(dian.dataset.index)
        showAll(index)
    })
}
const bindEventImg = function () {
    let dians = es('.gua-carousel-image')
    bindAll(dians, 'click', function (event) {
        let dian = event.target
        log('click', dian)
        let index = int(dian.dataset.index)
        showAll(index)
    })
}
const nextIndex = function() {
    let offset = +1
    let c = e('.gua-carousel-images')
    let imgs = parseInt(c.dataset.imgs)
    let index = parseInt(c.dataset.active)
    let new_index =(index + offset + imgs) % imgs
    if (index + offset == imgs) {
        new_index = index + offset
    }
    if (new_index == 0) {
        new_index = imgs
    }
    c.dataset.active = new_index
    return new_index
}
const autoImage = function() {
    let offset = +1
    let new_index = nextIndex(offset)
    log('new_index', new_index)
    showAll(new_index)
}
const autoPlay = function() {
    let fps = 3000
    setInterval(function() {
        autoImage()
    }, fps)
}
const bindEvents = function () {
    bindEventInd()
    bindEventImg()
}
const initHtml = function() {
    let body = e('body')
    t = `
    <!-- 轮播图 -->
    <div class="gua-carousel">
        <!-- data-imgs 是图片的总数 -->
        <!-- data-active 是当前显示的图片的下标 -->
        <div class="gua-carousel-images" data-imgs="6" data-active="3">
            <a id="id-image-1" class="gua-carousel-image" data-index=1>
                    <img src="images/1.jpg" alt="">
                    <div class="gua-image-shadow"> 1 </div>
                </a>
            <a id="id-image-2" class="gua-carousel-image gua-image-prev" data-index=2>
                    <img src="images/2.jpg" alt="">
                    <div class="gua-image-shadow">2</div>
                </a>
            <a id="id-image-3" class="gua-carousel-image gua-image-center" data-index=3>
                    <img src="images/3.jpg" alt="">
                    <div class="gua-image-shadow">3</div>
                </a>
            <a id="id-image-4" class="gua-carousel-image gua-image-next" data-index=4>
                    <img src="images/4.jpg" alt="">
                    <div class="gua-image-shadow">4</div>
                </a>
            <a id="id-image-5" class="gua-carousel-image" data-index=5>
                    <img src="images/5.jpg" alt="">
                    <div class="gua-image-shadow">5</div>
                </a>
            <a id="id-image-6" class="gua-carousel-image" data-index=6>
                    <img src="images/6.jpg" alt="">
                    <div class="gua-image-shadow">6</div>
            </a>
        </div>

        <div class="gua-text">

            <text>
                <span>&nbsp; &nbsp; &nbsp; 关于 </span>
                <br>
                <span>大侄子的秘密花园</span>
                </test>
        </div>

        <div class="tiao">
            <div data-index=1 id='dian-1' class="dian">
            </div>
            <div data-index=2 id='dian-2' class="dian">
            </div>
            <div data-index=3 id='dian-3' class="dian active">
            </div>
            <div data-index=4 id='dian-4' class="dian">
            </div>
            <div data-index=5 id='dian-5' class="dian">
            </div>
            <div data-index=6 id='dian-6' class="dian">
            </div>
        </div>
        <aurthor>
            <span class="aurthor">
                    cover by DaZhiZi
                </span>
        </aurthor>
    `
    appendHtml(body, t)
}
const main = function () {
    initHtml()
    bindEvents()
    autoPlay()
}

main()