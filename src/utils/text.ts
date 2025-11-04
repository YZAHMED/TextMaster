export function toUpper(text: string): string {
  return text.toUpperCase();
}

export function toLower(text: string): string {
  return text.toLowerCase();
}

export function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/\b([a-z])(\w*)/g, (_, first: string, rest: string) => first.toUpperCase() + rest);
}

export function toSentenceCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, (s) => s.toUpperCase());
}

export function normalizeSpaces(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export function removePunctuation(text: string): string {
  return text.replace(/[\p{P}\p{S}]+/gu, '');
}

export function trimEachLine(text: string): string {
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .join('\n');
}

export function removeEmptyLines(text: string): string {
  return text
    .split(/\r?\n/)
    .filter((l) => l.trim() !== '')
    .join('\n');
}

export function dedupeLines(text: string): string {
  const seen = new Set<string>();
  return text
    .split(/\r?\n/)
    .filter((l) => {
      if (seen.has(l)) return false;
      seen.add(l);
      return true;
    })
    .join('\n');
}

export function sortLinesAsc(text: string): string {
  return text.split(/\r?\n/).sort((a, b) => a.localeCompare(b)).join('\n');
}

export function sortLinesDesc(text: string): string {
  return text.split(/\r?\n/).sort((a, b) => b.localeCompare(a)).join('\n');
}

export function reverseText(text: string): string {
  return text.split('').reverse().join('');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function toCamelCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+([a-z0-9])/g, (_, c: string) => c.toUpperCase());
}

export function toSnakeCase(text: string): string {
  return text
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .toLowerCase();
}

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function countSentences(text: string): number {
  const matches = text.match(/[.!?](\s|$)/g);
  return matches ? matches.length : text.trim() ? 1 : 0;
}

export function countLines(text: string): number {
  if (text === '') return 0;
  return text.split(/\r?\n/).length;
}

export function estimateReadingTimeMinutes(text: string, wpm = 200): number {
  const words = countWords(text);
  return Math.max(1, Math.ceil(words / wpm));
}

export function wordFrequency(text: string): Array<{ word: string; count: number }> {
  const map = new Map<string, number>();
  const words = text.toLowerCase().match(/[a-z0-9']+/g) || [];
  for (const w of words) map.set(w, (map.get(w) || 0) + 1);
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word, count]) => ({ word, count }));
}

