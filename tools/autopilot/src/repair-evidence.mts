/** Filter only recognisable diagnostic records; retain continuations, headers,
 * unknown subjects and ambiguous output. Full original evidence stays on disk. */
export function scopedGateOutput(output: string, assigned: Set<string>, known: Set<string>): string {
  const records: string[][] = [];
  for (const line of output.split('\n')) {
    const startsRecord = /^(?:ERROR|WARN(?:ING)?|ORDINARY|MODERATE|HIGH|CRITICAL)\b/.test(line)
      || /^\s{2}[a-z][a-z0-9-]+\s+\[/.test(line)
      || /^\S/.test(line);
    if (startsRecord || !records.length) records.push([]);
    records.at(-1)!.push(line);
  }
  return records.filter((lines) => {
    const first = lines[0];
    const subject = /^(?:ERROR|WARN(?:ING)?|ORDINARY|MODERATE|HIGH|CRITICAL)\b[^\n]*?\[([a-z][a-z0-9-]+)\]/.exec(first)?.[1]
      ?? /^\s{2}([a-z][a-z0-9-]+)\s+\[/.exec(first)?.[1];
    if (!subject || !known.has(subject) || assigned.has(subject)) return true;
    // A cross-owner diagnostic can still carry evidence for our own dependency.
    return [...lines.join('\n').matchAll(/\b[a-z][a-z0-9]*(?:-[a-z0-9]+)+\b/g)]
      .some(([id]) => assigned.has(id));
  }).map((lines) => lines.join('\n')).join('\n');
}
