export function getInterfaceName(text: string): string | null {
  const regex = /\binterface\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/;
  const match = text.match(regex);
  return match ? match[1] : null;
}
