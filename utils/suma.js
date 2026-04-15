export function suma(a,b){

    if(a && typeof a !== "number") return 0

    if(!a && !b) return 0

    return a + b
}