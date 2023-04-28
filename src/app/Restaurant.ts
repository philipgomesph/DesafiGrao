export interface IMenu {
  menuName: string;
  description: string;
  price: number;
}
export interface IResturant {
  taxId: string;
  menu: IMenu[];
  name: string;
  phone: string;
  address: string;
}

export interface IMenuRestaurantName {
  name: string;
  phone: string;
  address: string;
}
