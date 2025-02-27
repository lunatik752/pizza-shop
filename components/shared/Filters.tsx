"use client";

import React, { useEffect } from "react";
import { Title } from "@/components/shared/Title";
import { Input } from "@/components/ui";
import { RangeSlider } from "@/components/shared/RangeSlider";
import { CheckboxFiltersGroup } from "@/components/shared/CheckboxFiltersGroup";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter } from "next/navigation";
import { useFilters } from "@/hooks/use-filters";
import { useQueryFilters } from "@/hooks/use-query-filter";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const { ingredients, loading } = useFilterIngredients();
    const filters = useFilters();
    const {prices, pizzaTypes, sizes, setPrices, setPizzaTypes, setSelectedIngredients, selectedIngredients } = filters;

    useQueryFilters(filters);

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

    const updatePrices = (prices: number[]) => {
        console.log(prices, 999);
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className={"mb-5 font-bold"}/>
            <div className={"flex flex-col gap-4"}>
                <CheckboxFiltersGroup
                    title="Тип теста"
                    name="pizzaTypes"
                    className="mb-5"
                    onClickCheckbox={setPizzaTypes}
                    selected={pizzaTypes}
                    items={[
                        { text: 'Тонкое', value: '1' },
                        { text: 'Традиционное', value: '2' },
                    ]}
                />
            </div>
            <div className={"flex flex-col gap-4"}>
                <CheckboxFiltersGroup
                    title="Размеры"
                    name="sizes"
                    className="mb-5"
                    onClickCheckbox={filters.setSizes}
                    selected={sizes}
                    items={[
                        { text: '20 см', value: '20' },
                        { text: '30 см', value: '30' },
                        { text: '40 см', value: '40' },
                    ]}
                />
            </div>
            <div className={"mb-5 border-y border-y-neutral-100 py-6 pb-7 "}>
                <p className={"font-bold mb-3"}>Цена от и до:</p>
                <div className={"flex gap-3 mb-5"}>
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        value={String(filters.prices.priceFrom)}
                        onChange={(e) => setPrices('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        min={100}
                        max={1000}
                        placeholder="1000"
                        value={String(prices.priceTo)}
                        onChange={(e) =>  setPrices('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[prices.priceFrom || 0, prices.priceTo || 1000]}
                    onValueChange={updatePrices}
                />
            </div>
            <CheckboxFiltersGroup
                title="Ингредиенты"
                name="ingredients"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={setSelectedIngredients}
                selected={selectedIngredients}
            />
        </div>
    );
};


