'use client'

import React, {useEffect, useRef} from 'react';
import {Title} from "@/components/shared/Title";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/ProductCard";
import {useIntersection} from 'react-use';
import {useCategoryStore} from "@/store/categoty";

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

    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    });
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

   useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div  className={className} id={title} ref={intersectionRef} >
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {
                    items.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.items[0].price}
                            ingredients={product.ingredients}
                        />
                    ))
                }
            </div>
        </div>
    );
};


