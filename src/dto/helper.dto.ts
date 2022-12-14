export interface findAndCreatePhoneNumberDTO {
  localFormat: string;
  countryCode: string;
}

export interface findAndCreateImageDTO {
  url: string;
  table_type: 'image' | 'business' | 'cart' | 'order' | 'product' | 'transactions';
  table_id: number;
  reference?: string;
}

export interface findAndCreateAddressDTO {
  street: string;
  country: string;
  state: string;
  city: string;
  default?: boolean;
  shopper?: number;
  business?: number;
}

export interface businessCheckerDTO {
  owner?: number;
  reference?: string;
}
