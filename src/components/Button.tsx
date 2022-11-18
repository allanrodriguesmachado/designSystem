import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import clsx from 'clsx';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Compo = asChild ? Slot : 'h2';

    return (
        <Compo
            className={clsx(
                'text-gray-100 font-bold font-sans',
            )
            }
        >{children}</Compo>
    )
}