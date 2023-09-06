export interface Footprint {
  id: number | string;
  name: string;
  address: string;
  longitude: number;
  latitude: number;
  iconPath: string;
  width: string | number;
  height: string | number;
}
export interface GraphicCardData {
  id: number;
  avatar: string;
  title: string;
  time: string;
  tags?: Array<string>;
  content?: string;
  images: Array<string>;
  hidden?: boolean; //是否隐藏
}

export interface Food {
  id: string;
  name: string;
  img: string;
  count: number;
}

export interface Menu {
  id: string;
  type: string;
  foods: Array<Food>;
}
