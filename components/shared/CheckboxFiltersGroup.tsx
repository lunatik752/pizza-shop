'use client'

import React, {ChangeEvent, useState} from 'react';
import {FilterCheckbox, FilterCheckboxPropsType} from "@/components/shared/FilterCheckbox";
import { Skeleton } from "@/components/ui";

type CheckboxFiltersGroupPropsType = {
    title: string
    items: FilterCheckboxPropsType[]
    defaultItems?: FilterCheckboxPropsType[]
    limit?: number
    searchInputPlaceholder?: string
    onClickCheckbox?: (id: string) => void
    defaultValue?: string[]
    loading?: boolean
    selected?: Set<string>
    className?: string
    name?: string
    values: Set<string>
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupPropsType> = (
    {
        title,
        items,
        defaultItems,
        limit = 3,
        className,
        loading,
        onClickCheckbox,
        values,
        name,
    }) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const showedItems = !showAll
        ? (defaultItems || items).slice(0, limit)
        : items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()));

    const onClickShowAllButton = () => setShowAll(!showAll);

    if (loading)  {
        return <div className={className}>
            <p className={'font-bold mb-3'}>{title}</p>

            {
                ...Array(limit).fill(0).map((_, i) => (
                    <Skeleton key={i} className="h-6 mb-5 rounded-[8px]" />
                ))
            }
        </div>

    }

    return (
        <div className={className}>
            <p className={'font-bold mb-3'}>{title}</p>
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {
                    showedItems.map((item, index) => (
                        <FilterCheckbox
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={values.has(item.value)}
                            onCheckedChange={() => onClickCheckbox?.(item.value)}
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


