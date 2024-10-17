import React from 'react';
import {Title} from "@/components/shared/Title";
import {FilterCheckbox} from "@/components/shared/FilterCheckbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared/RangeSlider";

type FiltersPropsType = {
    className?: 'string'
}

export const Filters: React.FC<FiltersPropsType> = ({className}) => {
    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className={'mb-5 font-bold'}/>
            <div className={'flex flex-col gap-4'}>
                <FilterCheckbox text={'Можно собирать'} value={'1'}/>
                <FilterCheckbox text={'Новинки'} value={'2'}/>
            </div>
            <div className={'mb-5 border-y border-y-neutral-100 py-6 pb-7 '}>
                <p className={'font-bold mb-3'}>Цена от и до:</p>
                <div className={'flex gap-3 mb-5'}>
                    <Input placeholder='0' min={0} max={1000} defaultValue={0}/>
                    <Input placeholder='1000' min={100} max={1000}/>
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
            </div>
        </div>
    );
};


