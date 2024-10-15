import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/Container";
import {Categories} from "@/components/shared/Categories";
import {SortPopup} from "@/components/shared/SortPopup";

type TopBarPropsType = {
    className?: 'string'
}

export const TopBar: React.FC<TopBarPropsType> = ({className}) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',className)}>
            <Container className={'flex items-center justify-between'}>
                <Categories/>
                <SortPopup/>
            </Container>
        </div>
    );
};


