'use client'

import React, {ChangeEvent, useState} from 'react';
import {FilterCheckbox, FilterCheckboxPropsType} from "@/components/shared/FilterCheckbox";
import {Input} from "@/components/ui";

type CheckboxFiltersGroupPropsType = {
    title: string
    items: FilterCheckboxPropsType[]
    defaultItems: FilterCheckboxPropsType[]
    limit?: number
    searchInputPlaceholder?: string
    onClickCheckbox?: (id: string) => void
    defaultValue?: string[]
    selected?: Set<string>
    className?: string
    name?: string
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupPropsType> = (
    {
        title,
        items,
        defaultItems,
        limit = 3,
        searchInputPlaceholder = 'Поиск...',
        className,
        onClickCheckbox,
        selected,
        name,
    }) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const showedItems = !showAll
        ? defaultItems.slice(0, limit)
        : items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()));

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const onClickShowAllButton = () => setShowAll(!showAll);

    return (
        <div className={className}>
            <p className={'font-bold mb-3'}>{title}</p>
            <div className="mb-5">
                <Input
                    placeholder={searchInputPlaceholder}
                    className="bg-gray-50 border-none"
                    value={searchValue}
                    onChange={onChangeSearchInput}
                />
            </div>
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {
                    showedItems.map((item, index) => (
                        <FilterCheckbox
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={false}
                            onCheckedChange={(ids) => console.log(ids)}
                            name={name}
                        />
                    ))
                }
                {
                    items.length > limit &&
                    <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                        <button onClick={ onClickShowAllButton } className="text-primary mt-3">
                            { showAll ? 'Скрыть' : '+ Показать все' }
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};


