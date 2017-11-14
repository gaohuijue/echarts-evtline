# 可以配置事件的折线图
```js
.setOption({
    // ...
    series:[
        {
            type:'evtline',
            // The configuration is the same as "line" chart.
            onmouseout:function(){},
            onmouseover:function(){},
            symbolClick:function(data,beautiBox){
                //beautiBox是自己写的组件
            }
        }
        // ...
    ]
    // ...    
})
    

```
