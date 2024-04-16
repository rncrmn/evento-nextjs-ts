import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
