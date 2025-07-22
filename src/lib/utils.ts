import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, resolving conflicts according to Tailwind CSS rules.
 * This function first merges the provided class values using clsx, then applies tailwind-merge to handle Tailwind CSS class conflicts.
 *
 * @param inputs - The class values to be combined.
 * @returns A single string containing the merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
