// judge-parse.mjs — the judge lanes' pure parsing, importable and tested.
//
// Two functions, both born from frontier-15's step-10 report finding 16: the
// sonnet lane was "reliable at the verdict and unreliable at the transport" —
// 28 stated rejections lost to verdict parsing, and 626 attempts recorded at
// zero tokens because the CLI's plain-text mode carries no usage. Parsing
// lives here, out of judge.mts's top-level script body, so it can be tested
// without spawning a model.

/** Unwrap the claude CLI's `--output-format json` envelope: the reply text is
 *  `result` and the spend is `usage` (verified against the live CLI,
 *  2026-08-17: keys `result`, `usage.input_tokens`,
 *  `usage.cache_creation_input_tokens`, `usage.cache_read_input_tokens`,
 *  `usage.output_tokens`). A stdout that is not an envelope — an older CLI, a
 *  crash banner — passes through as plain text with no usage: the lane keeps
 *  working, only its cost visibility degrades. `prompt_tokens` sums the three
 *  input classes because the cost ledger records what was SUBMITTED, and a
 *  cache-read token is still a submitted token. */
export const unwrapSonnetEnvelope = (stdout) => {
  const text = String(stdout ?? '').trim();
  try {
    const env = JSON.parse(text);
    if (env && typeof env.result === 'string') {
      const u = env.usage;
      return {
        content: env.result.trim(),
        usage: u ? {
          prompt_tokens: (u.input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0),
          completion_tokens: u.output_tokens ?? 0,
        } : undefined,
      };
    }
  } catch { /* not an envelope — fall through to plain text */ }
  return { content: text };
};

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
