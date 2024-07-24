export interface IProducts{
    id: number,
    title: string,
    image?: string,
    price: string,
    year: number ,
    configure: IProductConfig;
    quantity: number;
}

export interface IProductConfig {
    memory: string,
    RAM: string,
    screen: string,
    CPU: string
}