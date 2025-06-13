import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";

export interface FoodCataloguePage{
    footItemList:FoodItem[];
    restaurant:Restaurant;
}