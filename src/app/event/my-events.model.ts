export interface MyEvents{
    eventName:string,
    startTime:Date,
    location:string,
    rate?:number,
    type:'sport'|'nature' |'entertanment',
    attendance:number,
    description?:string,
    image?:string
}