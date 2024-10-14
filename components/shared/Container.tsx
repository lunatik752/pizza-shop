import React from 'react';
import {cn} from "@/lib/utils";

type ContainerPropsType = {
    className?: string;
}

export const Container: React.FC<React.PropsWithChildren<ContainerPropsType>> = ({className, children}) => {
    return (
        <div className={cn('mx-auto max-w-[1280px]', className)}>{ children }</div>
    );
};

