"use client";

import { Category } from "@prisma/client";
import {
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode,
} from "react-icons/fc";
import { IconType } from "react-icons/lib";
import { CategoryIcon } from "./category-icon";

interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Music": FcMusic,
    "Photography": FcOldTimeCamera,
    "Fitness": FcSportsMode,
    "Accounting": FcSalesPerformance,
    "Computer Science": FcMultipleDevices,
    "Filming": FcFilmReel,
    "Engineering": FcEngineering,
}

export const Categories = ({
    items
}: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((category) => (
                <CategoryIcon
                    key={category.id}
                    label={category.name}
                    icon={iconMap[category.name]}
                />
            ))}
        </div>
    )

}