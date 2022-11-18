import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import clsx from 'clsx';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({ size = 'md', children, asChild }: HeadingProps) {
    const Compo = asChild ? Slot : 'h2';

    return (
        <Compo
            className={clsx(
                'text-gray-100 font-bold font-sans',
                {

                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-xxl': size === 'lg',
                }
            )
            }
        >{children}</Compo>
    )
}