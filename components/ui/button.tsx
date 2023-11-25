import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

// ButtonProps interface is inheriting ButtonHTMLAttributes than is being provided by HTML. 
// all the properties which ButtonHTMLAttributes have, can be used by ButtonProps as well. 

// HTMLButtonElement is an interface provided by DOM that defines the properties and methods available for HTML button elements. It includes attributes like disabled, form, type, and methods like click().

// React.ButtonHTMLAttributes is another interface provided by React. It includes all the standard HTML attributes that can be applied to a button element, such as onClick, className, disabled, etc. 

// ButtonHTMLAttributes is a generic type that takes HTMLButtonElement as its type parameter


// This part is using TypeScript generics
// This is using the forwardRef function from React to forward the ref to the underlying button element. The first generic parameter (HTMLButtonElement) specifies the type of the ref that will be forwarded, and the second parameter (ButtonProps) specifies the type of props that this component will receive.

// ...props: This syntax is the spread operator in JavaScript/TypeScript
// ...props is used to pass any additional props that your Button component might receive
// for example, <Button customProp="someValue" onClick={handleClick}> Click me </Button>
// The customProp and onClick props would be collected by ...props, and they will be spread onto the underlying <button> element 

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            className={cn(`
                w-auto
                rounded-full 
                bg-black 
                border-transparent 
                px-5 py-3 
                disabled:cursor-not-allowed 
                disabled:opacity-50 
                text-white 
                font-semibold 
                hover:opacity-75
                transition
            `, className)}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button"


// it is our owen custom button component 
export default Button