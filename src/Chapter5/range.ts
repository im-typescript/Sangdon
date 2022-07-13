export const range = (from:number,to:number):number[] => 
    {return from < to ? [from, ...range(from+1,to)] : [ ] }

// from :: 포함 to:: 불포함
// 이상          미만