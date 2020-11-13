function countdown() {
    let s = 0
    function counter() {
        console.log(`${++s}회 호출됨`)
    }
    return counter
}

const c1 = countdown(10)
c1()
c1()
c1()