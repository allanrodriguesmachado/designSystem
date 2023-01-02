import {clsx} from 'clsx';
import {Slot} from '@radix-ui/react-slot';
import {ButtonHTMLAttributes, ReactNode} from "react";

export interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?: boolean
}

export function Button({children, asChild,className, ...props}: ButtonProps) {
    const Comp = asChild ? Slot : 'button'
    return (
        <>
            <Comp
                className={clsx('py-3 px-4  bg-red rounded font-semibold text-black text-sm w-full ' +
                    'transition-colors hover:bg-red-100 focus:ring-2 ring-white focus:ring-opacity-50' +
                    ' focus:outline-none focus:ring-red',
                    className)}  {...props}>{children}</Comp>
        </>
    )
}