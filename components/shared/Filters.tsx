"use client";

import React from "react";
import { Title } from "@/components/shared/Title";
import { Input } from "@/components/ui";
import { RangeSlider } from "@/components/shared/RangeSlider";
import { CheckboxFiltersGroup } from "@/components/shared/CheckboxFiltersGroup";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";

type PriceProps = {
    priceFrom: number;
    priceTo: number;
}

type FiltersPropsType = {
    className?: "string"
}

export const Filters: React.FC<FiltersPropsType> = ({ className }) => {
    const [ prices, setPrice] = React.useState<PriceProps>({priceFrom: 0, priceTo: 1000});
    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>([]));
    const [pizzaType, {toggle: togglePizzaTypes}] = useSet(new Set<string>([]));

    const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();
    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

    const updatePrice = (name: keyof PriceProps, value: number)=>{
        setPrice({
            ...prices,
            [name]: value
        })
    };

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className={"mb-5 font-bold"}/>
            <div className={"flex flex-col gap-4"}>
                <CheckboxFiltersGroup
                    title="Тип теста"
                    name="pizzaType"
                    className="mt-5"
                    items={[
                        { value: "20", text: "20 см" },
                        { value: "30", text: "30 см" },
                    ]}
                    onClickCheckbox={togglePizzaTypes}
                    values={pizzaType}
                />
            </div>
            <div className={"flex flex-col gap-4"}>
                <CheckboxFiltersGroup
                    title="Размеры"
                    name="sizes"
                    className="mt-5"
                    items={[
                        { value: "20", text: "20 см" },
                        { value: "30", text: "30 см" },
                        { value: "40", text: "40 см" },
                    ]}
                    onClickCheckbox={toggleSizes}
                    values={sizes}
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
                        defaultValue={0}
                        value={String(prices.priceFrom)}
                        onChange={(e) => {updatePrice("priceFrom", +e.target.value)}}
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={String(prices.priceTo)}
                        onChange={(e) => {updatePrice("priceTo", +e.target.value)}}
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[ prices.priceFrom, prices.priceTo ]}
                    onValueChange={([priceFrom, priceTo]) => {setPrice({priceFrom, priceTo});}}
                />
            </div>
            <CheckboxFiltersGroup
                title="Ингредиенты"
                name="ingredients"
                className="mt-5"
                limit={5}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                values={selectedIds}
                showSearchInput={true}
            />
        </div>
    );
};


