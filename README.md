## carousel 旋转木马
>  轮播图 : 每个网站包括苹果都有的轮播图组件

### 项目截图：

![carousel](../screenphoto/carousel.png)

### 思路：
- 旋转木马的思路：
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


