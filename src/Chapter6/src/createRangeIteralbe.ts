export const createRangeIterable = (from: number, to: number) => {
    let currentValue = from
    return{
        next() {
            const value = currentValue < to ? currentValue ++ : undefined
            const done = value == undefined
            return {value,done}
        }
    }
}
// value와 done이라는 속성을가진 next메소드를 반환하므로 create머시기는 반복기 제공자라고 한다.