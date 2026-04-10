export type SearchObject = {
  imageUrl: string;
  title: string;

  price: number;
  brand: string;
  id: string;
};

export type TSearchData = {
  search: string;
  total: number;
  description: string;
  data: SearchObject[];
};
