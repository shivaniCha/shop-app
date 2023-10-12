import { RangeType } from "../../pages/Products/Products.types";

export type SidebarProps = {
  setCategory(value: string): void;
  range: RangeType;
  setRange(value: RangeType): void;
  categoryList: string[]
};
