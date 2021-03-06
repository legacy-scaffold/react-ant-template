

module.exports={
    splitChunks:{
        chunks:"all",
        cacheGroups:{
            //css样式的优化
            "global-Style":{//全局组件样式
                priority:130, 
                enforce:true, 
                name:"globalStyle",                             
                test:/\.global\.scss$/,
            },
            "other-Style":{//第三方库的组件样式
                priority:120, 
                enforce:true, 
                name:"otherStyle",                             
                test:/(node_modules)/,
            },  
            "component-Style":{//自己写的组件样式
                priority:110,
                enforce:true,  
                name:"componentStyle",                        
                test:/(#Component)|(yscComponent)/,
            },                    
            "module-Style":{//业务模块的样式
                priority:100, 
                enforce:true, 
                name:"moduleStyle",                             
                test:/\.module\.scss$/,
            },
            //下面是js的优化
            "publicModule":{
                priority:130, 
                enforce:true, 
                name:"publicModule",
                test:/(node_modules)/,
            }
        }
    }
}