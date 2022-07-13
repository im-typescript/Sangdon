export const fold = <T>(array: T[], cb:(result:T, value: T)=> T, initValue:T)=> {
    let result: T = initValue
    for (let i=0; i<array.length; i++){
        const value = array[i]
        result = cb(result,value)
    }
    return result
}