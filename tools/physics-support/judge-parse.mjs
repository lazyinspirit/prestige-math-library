// judge-parse.mjs — pure verdict parsing, importable without spawning a model.

/** Parse a candidate exactly, with one lossless normalization for a common
 * model serialization defect: LaTeX commands such as `\(` arrive inside JSON
 * strings with a single backslash. JSON reserves backslash but has no `\(`
 * escape, so quote only backslashes that do not begin a JSON escape. */
const quoteInvalidJsonEscapes = (candidate) => {
  let normalized = '';
  for (let i = 0; i < candidate.length; i++) {
    const ch = candidate[i];
    if (ch !== '\\') { normalized += ch; continue; }
    const next = candidate[i + 1];
    if ('"\\/bfnrt'.includes(next)) {
      normalized += ch + next;
      i++;
    } else if (next === 'u' && /^[0-9a-fA-F]{4}$/.test(candidate.slice(i + 2, i + 6))) {
      normalized += candidate.slice(i, i + 6);
      i += 5;
    } else {
      normalized += '\\\\';
    }
  }
  return normalized;
};

const parseCandidate = (candidate) => {
  try { return JSON.parse(candidate); }
  catch {
    return JSON.parse(quoteInvalidJsonEscapes(candidate));
  }
};

/** Find the first balanced `{...}` block containing `"keep"` that parses to an
 *  object with a boolean `keep`. This is PARSING, never inference:
 *  JSON parsing after the lossless escape normalization must succeed and
 *  `keep` must be a boolean, so prose like
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
              const v = parseCandidate(candidate);
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
