// 1、基本架构：
//   状态
//   then
//   执行器函数 executor

// 2、executor、resolve、reject
// 3、then 同步下调用
// 4、then 异步下调用
// 5、then 链式调用
//   返回 Promise
//   then 函数递归返回常量结果，供下个 then 使用
//   考虑 then 成功的回调为 null 的情况

// 完整代码
// https://febook.hzfe.org/awesome-interview/book1/coding-promise#4-%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81

class mPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    static resolve(value) {
        if (value && value.then) {
            return value
        }
        return new mPromise((resolve) => resolve(value))
    }

    static reject(value) {
        return new mPromise((_, reject) => reject(value))
    }

    constructor(fn) {
        this.state = mPromise.PENDING;
        this.result = null;

        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state === mPromise.PENDING) {
                setTimeout(() => {
                    this.state = mPromise.FULFILLED;
                    this.result = value;
                    this.onResolvedCallbacks.forEach(({fn, resolve, rejcet}) => resolve(fn(value)))
                })
            }
        }

        const reject = (reason) => {
            if (this.state === mPromise.PENDING) {
                setTimeout(() => {
                    this.status = mPromise.REJECTED;
                    this.result = reason;
                    this.onRejectedCallbacks.forEach(({fn, resolve, rejcet}) => reject(fn(value)))
                })
            }
        }

        try {
            fn(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }

    then(resFn, rejFn) {
        resFn = typeof resFn === 'function' ? resFn : value => value
        rejFn = typeof rejFn === 'function' ? rejFn : reson => reson

        const _promise = {
            [mPromise.PENDING]: () => {
                return new mPromise((resole, reject) => {
                    this.onResolvedCallbacks.push({fn: resFn, resole, reject})
                    this.onRejectedCallbacks.push({fn: rejFn, resole, reject})
                })
            },
            [mPromise.FULFILLED]: () => mPromise.resolve(resFn(this.result)),
            [mPromise.REJECTED]: () => mPromise.reject(resFn(this.result))
        }[this.state]

        return _promise()
    }

    catch(fn) {
        return this.then(undefined, fn)
    }

    finally(cb) {
        return this.then(cb, cb)
    }

}