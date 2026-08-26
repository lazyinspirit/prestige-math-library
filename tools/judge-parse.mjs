// judge-parse.mjs — pure verdict parsing, importable without spawning a model.

/** Find the first balanced `{...}` block containing `"keep"` that parses to an
 *  object with a boolean `keep`. This is PARSING, never inference:
 *  `JSON.parse` must succeed and `keep` must be a boolean, so prose like
 *  "Flagged: keep=false" with no well-formed object stays unrecovered — a
 *  null for a re-spend, exactly as before. String-aware brace matching;
 *  bounded to the first 20 candidate opens because a verdict object sits near
 *  the start or the end of a reply, never buried past that. */
export const extractEmbeddedVerdict = (text) => {
  const s = String(text ?? '');
  let opens = 0;
  for (let start = s.indexOf('{'); start !== -1 && opens < 20; start = s.indexOf('{', start + 1), opens++) {
    let depth = 0, inString = false, escaped = false;
    for (let i = start; i < s.length; i++) {
      const ch = s[i];
      if (escaped) { escaped = false; continue; }
      if (ch === '\\') { escaped = true; continue; }
      if (ch === '"') { inString = !inString; continue; }
      if (inString) continue;
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          const candidate = s.slice(start, i + 1);
          if (candidate.includes('"keep"')) {
            try {
              const v = JSON.parse(candidate);
              if (v && typeof v.keep === 'boolean') {
                return { keep: v.keep, reason: typeof v.reason === 'string' ? v.reason : undefined };
              }
            } catch { /* not valid JSON — keep scanning */ }
          }
          break;
        }
      }
    }
  }
  return null;
};
