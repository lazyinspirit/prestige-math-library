#!/usr/bin/env node
// Regenerate the `citations` and `derivations` of named proof-contract entries
// from the current on-disk item text, preserving every other key (boundary,
// risk_review, ...). Used at step 6 after Alpha repairs change Facts or steps.
//
//   node tools/regen-contract-entries.mjs <batch-contract.json> <id> [id ...]
//
// A citation quote is the full text of the cited item's own statement section,
// which is the convention the existing contracts already use.
import { readFileSync, writeFileSync, existsSync } from 'fs';

const STATEMENT_HEADINGS = [
  'Statement', 'Definition', 'Example', 'Counterexample', 'Remark',
];

function itemPath(id) { return `items/${id}.md`; }

/** The item's reader-facing statement section, used verbatim as a citation quote. */
function statementSection(id) {
  const p = itemPath(id);
  if (!existsSync(p)) return null;
  const md = readFileSync(p, 'utf8');
  for (const h of STATEMENT_HEADINGS) {
    const m = md.match(new RegExp(`\\n## ${h}\\n([\\s\\S]*?)(?=\\n## |$)`));
    if (m) return { section: h, text: m[1].trim() };
  }
  return null;
}

/** [L#]/[F#]/[A#] fact lines and the wikilink targets each declares. */
function parseFacts(md) {
  const fa = md.split(/\n## Facts & Assumptions\n/)[1];
  if (!fa) return [];
  const body = fa.split(/\n## /)[0];
  const out = [];
  for (const m of body.matchAll(/^\[([LFA]\d+)\]\s([\s\S]*?)(?=\n\n\[[LFA]\d+\]|\n*$)/gm)) {
    const targets = [...m[2].matchAll(/\[\[([^\]]+)\]\]/g)].map(x => x[1]);
    out.push({ fact: m[1], text: m[2].trim(), targets });
  }
  return out;
}

/** Numbered proof steps. The contract checker reads only a step's FIRST line,
 *  so tokens are collected from that line exactly as `explicitTokens` does. */
function parseSteps(md) {
  const parts = md.split(/\n## (?:Proof|Refutation|Verification|Counterexample)\n/);
  if (parts.length < 2) return [];
  const body = parts[parts.length - 1];
  const out = [];
  const lines = body.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\d+\.\d+)\s+(.+)$/);
    if (!m) continue;
    const first = m[2];
    // Tokens come from the first line only, matching the checker.
    const tokens = new Set();
    for (const t of first.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) {
      tokens.add(t[1] ?? t[2]);
    }
    // A step may run over several lines (a display); its input tag is the last
    // bracketed group of the whole block, which is not always on line one.
    let block = first;
    for (let k = i + 1; k < lines.length && !/^\d+\.\d+\s/.test(lines[k]); k++) block += '\n' + lines[k];
    const tags = [...block.matchAll(/\[([^\][]*)\]\s*(?:∎)?\s*(?=\n|$)/g)];
    const tag = tags.length ? tags[tags.length - 1] : null;
    const claim = first.replace(/\s*\[[^\][]*\]\s*(?:∎)?\s*$/, '').trim();
    const inputs = tag ? tag[1].split(',').map(s => s.trim()).filter(Boolean) : [];
    out.push({ step: m[1], claim, inputs, tokens });
  }
  return out;
}

const [file, ...ids] = process.argv.slice(2);
if (!file || !ids.length) {
  console.error('usage: regen-contract-entries.mjs <contract.json> <id> [id ...]');
  process.exit(2);
}
const doc = JSON.parse(readFileSync(file, 'utf8'));
const contracts = doc.contracts || doc;

let changed = 0, skipped = 0;
for (const id of ids) {
  if (!contracts[id]) { skipped++; continue; }
  const md = readFileSync(itemPath(id), 'utf8');
  const facts = parseFacts(md);
  const steps = parseSteps(md);
  if (!facts.length || !steps.length) {
    console.error(`SKIP ${id}: no facts or no steps parsed`);
    skipped++; continue;
  }

  const citations = [];
  for (const f of facts) {
    // Every wikilink target of a fact needs its own citation contract.
    if (!f.targets.length) continue; // a pure assumption, e.g. [A1]
    const uses = steps.filter(s => s.tokens.has(f.fact)).map(s => s.step);
    for (const src of f.targets) {
      const st = statementSection(src);
      if (!st) { console.error(`WARN ${id}: cannot read statement of ${src}`); continue; }
      citations.push({
        fact: f.fact, source: src, source_section: st.section,
        quote: st.text, uses,
      });
    }
  }

  // A step's stated inputs must cover every token its first line cites.
  const derivations = steps.map(s => {
    const inputs = [...s.inputs];
    const have = new Set(inputs.map(t => t.replace(/^step\s+/, '')));
    for (const tok of s.tokens) {
      if (!have.has(tok)) inputs.push(/^\d/.test(tok) ? `step ${tok}` : tok);
    }
    return { id: `step-${s.step.replace('.', '-')}`, claim: s.claim, step: s.step, inputs };
  });

  contracts[id] = { ...contracts[id], citations, derivations };
  changed++;
}
writeFileSync(file, JSON.stringify(doc, null, 2) + '\n');
console.log(`${file}: regenerated ${changed}, skipped ${skipped}`);
