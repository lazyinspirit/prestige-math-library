#!/usr/bin/env node
// announcement-steps.mjs — find proof steps that NAME a check instead of performing it.
//
//   node tools/announcement-steps.mjs                       # every item
//   node tools/announcement-steps.mjs --items a,b           # named items
//   node tools/announcement-steps.mjs --scope <file.json>   # ids from a JSON array
//   node tools/announcement-steps.mjs --json
//
// The class this catches, seen on frontier-13/14/15: a closing step reading
// "We include G = 1.", "Cover zero and whole submodules." or "We treat the
// trivial p-subgroup and primes not dividing |G|." — an imperative naming the
// boundary cases with no evaluation of any of them.  The contract's boundary row
// then points at a step that discharges nothing, which is the false-disposition
// defect boundary-audit exists to prevent but cannot see, because the row is
// `checked` with a real step reference.
//
// Every hit is a CANDIDATE for a human read, not a verdict: a short step that
// really does perform its check reads similarly and must be upheld by a reader.

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const option = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : undefined; };
const asJson = argv.includes('--json');

let scope = null;
if (option('--items')) scope = option('--items').split(',').map((v) => v.trim()).filter(Boolean);
else if (option('--scope')) scope = JSON.parse(readFileSync(option('--scope'), 'utf8'));

const HEADINGS = ['Proof', 'Refutation', 'Counterexample', 'Verification'];

// An announcement opens by naming an activity the step then fails to carry out.
// The verb list is grown from live misses, never guessed: "Keep the two prime
// orderings and the order-twelve boundary case explicit." slipped past the first
// version, which knew only `We <verb>` and a short imperative list. Any
// imperative-mood opener naming work belongs here.
const VERBS = 'treat|include|check|cover|handle|address|verify|record|note|consider|deal with|keep|retain|ensure|confirm|observe|recall|mention|state|list|spell out|make explicit|account for|display|exhibit|apply|remove|delete|discard|drop|induct';
const OPENERS = [
  new RegExp(`^We (?:${VERBS}|also)\\b`, 'i'),
  new RegExp(`^(?:${VERBS})\\b`, 'i'),
  /^(?:We |Also )?(?:point|pointing) (?:to|out)\b/i,
  /^The (?:preceding|foregoing|above|same) (?:argument|steps?|reasoning|proof)\b/i,
  /^(?:This|The) (?:argument|reasoning)? ?(?:completes|establishes|covers|handles|settles)\b/i,
];
// An OUTCOME marker: the sentence says what the named case actually yields, as
// opposed to merely naming it.  Deliberately checked only in the tail of the
// sentence, after the case has been named — "we treat $|G| = 1$" embeds math in
// the NAME of the case and is still an announcement, which is what made the
// first version of this detector miss two of the three known instances.
const OUTCOME = /(?:,|:|;|\bso\b|\bhence\b|\bthen\b|\bwhich\b|\bwhere\b|\bgives?\b|\byields?\b|\bforces?\b|\bbecomes?\b|\bequals?\b|\bis\b|\bare\b|\bhas\b|\bmakes?\b)/i;

const ids = scope ?? readdirSync(join(REPO, 'items')).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3));
const findings = [];

for (const id of ids) {
  let source;
  try { source = readFileSync(join(REPO, 'items', `${id}.md`), 'utf8'); } catch { continue; }
  const status = source.match(/^status:[ \t]*(\S+)/m)?.[1];
  for (const heading of HEADINGS) {
    const body = source.match(new RegExp(`^##\\s+${heading}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, 'm'))?.[1];
    if (!body) continue;
    const steps = [...body.matchAll(/^(\d+\.\d+)\s+([\s\S]*?)(?=^\d+\.\d+\s|\s*$)/gm)];
    for (const [, number, rawText] of steps) {
      // Strip the trailing bracketed citation list and the QED mark.
      const text = rawText.replace(/\[[^\]]*\]\s*∎?\s*$/m, '').replace(/∎/g, '').trim();
      if (!text) continue;
      // Sentences carrying the real content, minus the house closing formula.
      const sentences = text.split(/(?<=[.!?])\s+/).map((s) => s.trim())
        .filter((s) => s && !/^This proves the stated claim\.?$/i.test(s));
      if (!sentences.length) {
        findings.push({ id, status, heading, step: number, text, why: 'the step is only the house closing formula' });
        continue;
      }
      const announced = sentences.filter((s) => OPENERS.some((re) => re.test(s)));
      if (!announced.length) continue;
      // A sentence that is not an announcement at all carries the step's work.
      const substantive = sentences.filter((s) => !OPENERS.some((re) => re.test(s)));
      if (substantive.length) continue;
      // Every sentence names a check.  Does any of them say what the case yields?
      const discharged = announced.filter((s) => OUTCOME.test(s.replace(/^[^,:;]*?\b(?:treat|include|check|cover|handle|address|verify|record|note|consider|point)\b/i, '')));
      findings.push({
        id, status, heading, step: number, text,
        why: discharged.length ? 'every sentence names a check; an outcome may be stated — read it' : 'names a check and performs none',
        confidence: discharged.length ? 'weak' : 'strong',
      });
    }
  }
}

if (asJson) console.log(JSON.stringify({ scanned: ids.length, findings }, null, 1));
else {
  console.log(`announcement-steps: ${ids.length} item(s) scanned, ${findings.length} candidate step(s)\n`);
  for (const f of findings) console.log(`  ${f.id}  [${f.heading} ${f.step}] (${f.status})\n    ${f.text.replace(/\n/g, ' ')}\n    -- ${f.why}\n`);
  console.log('Every line above is a candidate for a human read, not a verdict.');
}
process.exit(findings.length ? 1 : 0);
