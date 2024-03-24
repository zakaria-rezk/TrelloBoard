export type ID =string;
export interface Column {
    id:ID,
    title:string, 
    tasks: tasks[]
}
export interface tasks {
    id:string;
    title:string,
    createdAt:string,
}