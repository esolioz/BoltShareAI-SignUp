export interface IUser {
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: IAddress;
}

export interface IAddress {
  street?: string;
  postalCode?: number;
  city?: string;
  country?: string;
}
