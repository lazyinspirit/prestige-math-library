import { stripVerification } from '../../tools/item-hash.mjs';

// Replace only the original verification span; no replacement-string expansion,
// frontmatter reserialization, or newline normalization is permitted.
export function verificationCandidate(text, receiptPath) {
  const envelope = /^---\n([\s\S]*?)\n---\n/.exec(text);
  if (!envelope) throw Error('Expected LF frontmatter envelope.');
  const matches = [...envelope[1].matchAll(/^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)/gm)];
  if (matches.length !== 1) throw Error('Expected exactly one verification mapping.');
  const match = matches[0];
  const hasProof = /^## (?:Proof|Refutation|Counterexample|Verification)\b/m.test(text);
  const replacement = `verification:\n  precheck: ${hasProof ? 'pass' : 'n/a'}\n  repair: ${receiptPath}`
    + (match[0].endsWith('\n') ? '\n' : '');
  const start = 4 + match.index;
  const end = start + match[0].length;
  const final = text.slice(0, start) + replacement + text.slice(end);
  if (stripVerification(final) !== stripVerification(text)) throw Error('Verification span edit changed canonical mathematics.');
  return { final, hasProof, start, end };
}
