export function isTypeString(string: string): boolean {
    const regex = /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^;]+);/g;
    return regex.test(string);
}