function evaluator() {
    with (this.scopeGuard) {
        with (this.evalOnce) {
            return function () {
                'use strict';
                return eval(arguments[0])
            }
        }
    }
}
exports.good = (sourceCode, globalObject = Object.create(null)) => {
    const evaluate = evaluator.call({
        evalOnce: Object.freeze(
            Object.defineProperty(Object.create(null), 'eval', {
                get: Array.prototype.pop.bind([eval]),
            })
        ),
        scopeGuard: new Proxy(globalObject, {
            has: () => true
        }),
    })
    return evaluate.call(globalObject, sourceCode);
}

exports.lockdown = () => {
    Object.freeze(Object.prototype)
    Object.freeze(Array.prototype)
    Object.freeze(Promise.prototype)
    Object.defineProperty(Function.prototype, 'constructor', {
        get: () => () => () => { throw Error('why so eval?') }
    })
}