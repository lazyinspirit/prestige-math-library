// Evidence bundles: the exact text a reviewer needs, assembled mechanically.
//
// WHY THIS EXISTS. A long-lived repair lane pays for its whole history on every
// turn: phase-2-remaining-27's two Step-7 adjudicator lanes averaged ~130k input
// tokens per call over ~2,900 calls, while the stateless, pre-bundled judge pass
// averaged 24k for the same kind of judgment. The difference is not the reading,
// it is who assembles the context: the judge tool builds one compact prompt per
// item; the adjudicator re-derives its context by hand, one `cat` at a time, and
// carries every earlier `cat` for the rest of the session.
//
// WHAT A BUNDLE IS, AND IS NOT. Every block is VERBATIM: the item's own
// Statement, Definition, Construction or Example section; its Facts section; and
// each cited fact's recorded `quote` from the proof contract, with its source id
// and section. Nothing is summarised, so a bundle is evidence for exactly what it
// quotes and nothing more — anything else still requires opening the item. The
// caps below never silently drop text: a cut leaves a marker naming the file to
// open.
//
// The layout is deterministic (fixed section order, items sorted by id, clauses
// sorted by fact label) so an unchanged bundle is a stable prompt prefix and the
// provider's cache keeps hitting.

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { physicalInterface } from './physics-interface.mjs';
import { stripJudgeStamp } from './item-hash.mjs';

/** The named `##` section of an item or interface file, verbatim. */
export function section(source, headings) {
  for (const heading of headings) {
    const match = source.match(new RegExp(`\\n## ${heading}\\b[^\\n]*\\n([\\s\\S]*?)(?=\\n## |$)`));
    if (match) return match[1].trim();
  }
  return '';
}

/** The claim-section list the judge path has always used. Kept byte-compatible
 *  with the pre-2026-09-20 implementation: widening it changes what every judge
 *  sees, which is not a token change to slip in silently. */
const INTERFACE_SECTIONS = ['Statement refuted', 'Statement', 'Postulate', 'Observations', 'Definition', 'Example'];

/** Section names that carry an item's own claim, for bundle evidence blocks. */
const CLAIM_SECTIONS = ['Statement refuted', 'Statement', 'Postulate', 'Observations', 'Definition', 'Construction',
  'Example', 'Counterexample'];

/** The interface of a supplier: what it asserts, plus its recorded remarks. */
export function interfaceText(source, cap = 3_000) {
  const main = section(source, INTERFACE_SECTIONS);
  const remarks = section(source, ['Remarks']);
  // Unusual item kinds can fall back to the whole source. Keep that fallback
  // byte-compatible with the pre-stamp context: verification.judge is evidence
  // about the mathematics, not mathematical context for every page-mate.
  const physical = physicalInterface(source);
  const qualification = physical ? `**Physical contract:**\n${JSON.stringify(physical, null, 2)}` : '';
  const text = [main, qualification, remarks ? `**Remarks.**\n${remarks}` : ''].filter(Boolean).join('\n\n')
    || stripJudgeStamp(source).trim();
  return text.length <= cap
    ? text
    : `${text.slice(0, cap)}\n… [interface truncated; do not infer absence from this cut]`;
}

/** The cited facts of a proof contract, in fact-label order. */
export function citedClauses(contract) {
  const rows = [];
  for (const citation of contract?.citations ?? []) {
    rows.push({
      fact: String(citation?.fact ?? '?'),
      source: String(citation?.source ?? '?'),
      sourceSection: String(citation?.source_section ?? ''),
      quote: String(citation?.quote ?? ''),
    });
  }
  return rows.sort((left, right) => left.fact.localeCompare(right.fact, undefined, { numeric: true }));
}

/** Every in-run proof contract for `run`, merged and cached per process. */
const contractCache = new Map();
export function contractsFor(repo, run) {
  const key = `${repo}\u0000${run}`;
  if (contractCache.has(key)) return contractCache.get(key);
  const merged = {};
  const dir = join(repo, 'research');
  for (const name of existsSync(dir) ? readdirSync(dir) : []) {
    if (!name.startsWith(`${run}-batch-`) || !name.endsWith('.proof-contracts.json')) continue;
    try {
      const doc = JSON.parse(readFileSync(join(dir, name), 'utf8'));
      Object.assign(merged, doc?.contracts ?? {});
    } catch { /* a malformed contract is the contract gate's problem, not ours */ }
  }
  contractCache.set(key, merged);
  return merged;
}

/** One item's evidence block: Statement → Facts → cited clauses, all verbatim. */
export function itemEvidenceBlock({
  repo, id, itemsDir = 'items', contract, quoteCap = 8_000, sectionCap = 6_000,
}) {
  const path = join(repo, itemsDir, `${id}.md`);
  if (!existsSync(path)) return `### [[${id}]] — MISSING ITEM FILE\n${path} does not exist; adjudicate nothing here.\n`;
  const text = readFileSync(path, 'utf8');
  const claim = section(text, CLAIM_SECTIONS);
  const facts = section(text, ['Facts & Assumptions', 'Facts and Assumptions']);
  const clauses = citedClauses(contract);
  const cut = (body) => (body.length <= sectionCap ? body
    : `${body.slice(0, sectionCap)}\n… [truncated at ${sectionCap} characters by the bundle cap — `
      + `open \`items/${id}.md\` for the rest; nothing below this cut is evidence]`);
  const lines = [`### [[${id}]]`, ''];
  lines.push(claim
    ? `${cut(claim)}\n`
    : `*This item carries no Statement/Definition/Construction/Example section — open \`items/${id}.md\`.*\n`);
  if (facts) lines.push(`**Facts & Assumptions (verbatim).**\n\n${cut(facts)}\n`);
  if (!clauses.length) {
    lines.push(`*No proof-contract citations recorded for this item — its cited clauses must be read from the files.*\n`);
  } else {
    let used = 0;
    lines.push('**Cited clauses (verbatim quotes from the proof contract).**\n');
    for (const clause of clauses) {
      if (used + clause.quote.length > quoteCap) {
        lines.push(`- \`${clause.fact}\` → [[${clause.source}]] (${clause.sourceSection}): *omitted by the bundle cap — `
          + `open \`items/${clause.source}.md\` and read it before deciding anything that rests on it.*`);
        continue;
      }
      used += clause.quote.length;
      lines.push(`- \`${clause.fact}\` → [[${clause.source}]]${clause.sourceSection ? ` (${clause.sourceSection})` : ''}`);
      lines.push(clause.quote
        ? clause.quote.split('\n').map((line) => `  > ${line}`).join('\n')
        : `  > *the contract records no quote for this citation — open \`items/${clause.source}.md\`.*`);
    }
  }
  return `${lines.join('\n')}\n`;
}

/** A group's bundle: the rejection queue grouped by item, then each item's
 *  evidence block. Deterministic in every ordering, so identical inputs give
 *  byte-identical output. */
export function buildGroupBundle({
  repo,
  run,
  group,
  items,
  rejections = [],
  quoteCap = 8_000,
  bundleCap = 400_000,
  generatedAt = null,
}) {
  const contracts = contractsFor(repo, run);
  const byItem = new Map();
  for (const rejection of [...rejections].sort((left, right) =>
    String(left.id).localeCompare(String(right.id))
    || String(left.model).localeCompare(String(right.model)))) {
    if (!byItem.has(rejection.id)) byItem.set(rejection.id, []);
    byItem.get(rejection.id).push(rejection);
  }
  // Evidence is rendered for the items that actually have an objection; a whole
  // group's inventory in one bundle would be larger than the history it replaces.
  // The caller may name extra items when a round needs them.
  const ids = [...new Set([...items, ...byItem.keys()])].sort();

  const head = [
    `# Step-7 evidence bundle — group ${group} (run \`${run}\`)`,
    '',
    'Every block below is verbatim: each item\'s own claim section, its Facts section, and the',
    'recorded quote of every cited fact. Nothing here is a summary, so the bundle is evidence',
    'for exactly what it quotes and no more. Open `items/<id>.md` when you need any other part,',
    'when a cap marker names a file, or when the contract records no quote.',
    '',
    'The bundle is an entry point, never a fence. You keep full access to: web search',
    '(`tools.web_search=true`, with shell network access) for any source check; the entire',
    'published library under `library/`; and every item of this frontier under `items/`,',
    'including items owned by other groups (needed for seams and cross-group alerts).',
    'Read each file once, in the order given, and do not re-read one already in your context —',
    'but read whatever else the mathematics requires.',
    generatedAt ? `Rendered ${generatedAt}.` : '',
    '',
    '## Rejection queue (grouped by item)',
    '',
  ].filter((line) => line !== '');
  for (const id of ids) {
    const rows = byItem.get(id);
    if (!rows) continue;
    head.push(`### \`${id}\` — ${rows.length} rejection(s)`);
    for (const row of rows) {
      head.push(`- \`${row.model}\` (context \`${String(row.context_sha256 ?? '?').slice(0, 16)}\`): ${row.reason ?? row.finding ?? ''}`);
    }
    head.push('');
  }
  head.push('## Item evidence', '');

  const blocks = [];
  let used = head.join('\n').length;
  for (const id of ids) {
    const block = itemEvidenceBlock({ repo, id, contract: contracts[id], quoteCap });
    if (used + block.length > bundleCap) {
      blocks.push(`### [[${id}]]\n*Omitted by the bundle cap — open \`items/${id}.md\` and the proof contract for its cited clauses.*\n`);
      continue;
    }
    used += block.length;
    blocks.push(block);
  }
  return `${head.join('\n')}${blocks.join('\n')}`.trimEnd() + '\n';
}
