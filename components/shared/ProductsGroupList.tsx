import React from 'react';
import {Title} from "@/components/shared/Title";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/ProductCard";

type ProductsGroupListPropsType = {
    title: string
    items: any[]
    categoryId: number
    listClassName?: string
    className?: 'string'
}

export const ProductsGroupList: React.FC<ProductsGroupListPropsType> = ({
                                                                            title,
                                                                            items,
                                                                            listClassName,
                                                                            categoryId,
                                                                            className
                                                                        }) => {
    return (
        <div className={className}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                        ingredients={product.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};


