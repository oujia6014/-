
//防抖重在清零，短时间多次请求计算过多
function debounce(fun, wait) {
    let timer;
    return (...args) => {
        clearTimeout(timer); //延迟清零
        timer = setTimeout(()=>{
            fun(...args);
        },wait);
    }
}

//节流重在加锁，多次请求中隔时间段执行一次
function throttle(fun, wait) {
    let timer;
    return (...args) => {
        if (timer) {//延迟加锁
            return;
        }
        timer = setTimeout(() => {
            fun(...args);
            timer = null;
        },wait)
    };
}