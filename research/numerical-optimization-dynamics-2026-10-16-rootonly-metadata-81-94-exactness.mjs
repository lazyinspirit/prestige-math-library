/** Read-only source-exactness verifier for the prepared ROOTONLY metadata mirrors.
 * Run from repository root; stdout is the full JSON report. Optional --report PATH
 * writes that report only to the explicitly selected research artifact.
 * This checks literal/source-reference alignment, not proof or native acceptance.
 */
import fs from 'node:fs';
import path from 'node:path';
import { numberedProofSteps, sourceSectionText } from '../tools/facts-block.mjs';
import { frontmatterList } from '../tools/frontmatter-list.mjs';

const run = 'numerical-optimization-dynamics-2026-10-16';
const data = `research/${run}-rootonly-metadata-81-94-final-data`;
const args = process.argv.slice(2);
if (args.length && (args.length !== 2 || args[0] !== '--report' || !args[1].startsWith('research/'))) {
  throw new Error('Usage: node research/...-exactness.mjs [--report research/REPORT.json]');
}
const readJson = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const normalize = s => s.replace(/\s+/g, ' ').trim();
const preview = readJson(`${data}/preview.json`);
const errors = [];
const sourceMap = new Map();
const contractMap = {};
let citations = 0, derivations = 0, routines = 0, interfaces = 0, manifests = 0;
function recordSource(sourcePath, use) {
  if (!sourceMap.has(sourcePath)) sourceMap.set(sourcePath, []);
  sourceMap.get(sourcePath).push(use);
}
function check(condition, message) { if (!condition) errors.push(message); }
function checkExcerpt(id, source, sectionName, excerpt, label) {
  const sourcePath = `items/${source}.md`;
  const text = fs.readFileSync(sourcePath, 'utf8');
  const section = sourceSectionText(text, sectionName);
  check(typeof section === 'string' && normalize(section).includes(normalize(excerpt)), `${id}/${label}: excerpt absent in ${sourcePath} ${sectionName}`);
  recordSource(sourcePath, `${id}/${label} (${sectionName})`);
}
for (const p of preview.files) {
  check(fs.readFileSync(p).equals(fs.readFileSync(`${data}/before/${path.basename(p)}`)), `stale canonical metadata: ${p}`);
}
for (const p of preview.source_guards) {
  check(fs.readFileSync(p).equals(fs.readFileSync(`${data}/sources/${path.basename(p)}`)), `stale actual source: ${p}`);
  recordSource(p, 'full-byte guard');
}
const old81 = `research/${run}-rootonly-metadata-81-after94-data/proposed/${run}-batch-81.proof-contracts.json`;
check(fs.readFileSync(`${data}/proposed/${run}-batch-81.proof-contracts.json`).equals(fs.readFileSync(old81)), 'pending81 proposed contract bytes changed');

// Include both pending batches in the readable map, while retaining the original
// batch94-only exactness counts below. Batch81 proposed bytes are guarded above.
for (const batch of ['81', '94']) {
  const all = readJson(`${data}/proposed/${run}-batch-${batch}.proof-contracts.json`).contracts;
  for (const [id, contract] of Object.entries(all)) {
    const sources = [...new Set([id, ...(contract.citations ?? []).map(c => c.source), ...(contract.supplier_interfaces ?? []).map(c => c.supplier)])];
    const key = `batch${batch}.contracts.${id}`;
    contractMap[key] = sources.map(s => `items/${s}.md`);
    for (const source of sources) recordSource(`items/${source}.md`, key);
  }
}

// The original reported 180 quotes / 44 full claims / 14 manifests are batch94.
const contracts = readJson(`${data}/proposed/${run}-batch-94.proof-contracts.json`).contracts;
for (const [id, contract] of Object.entries(contracts)) {
  const carrier = `items/${id}.md`;
  const text = fs.readFileSync(carrier, 'utf8');
  const steps = numberedProofSteps(text);
  recordSource(carrier, `batch94.contracts.${id} (own proof/Definition)`);
  for (const [kind, rows] of [['derivations', contract.derivations ?? []], ['routine_steps', contract.routine_steps ?? []]]) {
    for (const row of rows) {
      const step = steps.find(s => s.id === row.step);
      check(step && normalize(step.claim) === normalize(row.claim), `${id}/${kind}/${row.id}: full claim differs`);
      if (kind === 'derivations') derivations++; else routines++;
    }
  }
  for (const citation of contract.citations ?? []) {
    checkExcerpt(id, citation.source, citation.source_section, citation.quote, `citation ${citation.fact}`);
    for (const use of citation.uses ?? []) {
      check(steps.some(s => s.id === use), `${id}/${citation.fact}: stale proof use ${use}`);
    }
    const actualUses = steps.filter(s => s.inputs.includes(citation.fact) || new RegExp(`\\b${citation.fact}\\b`).test(s.text)).map(s => s.id);
    check(JSON.stringify(actualUses) === JSON.stringify(citation.uses ?? []), `${id}/${citation.fact}: proof uses differ from actual source references`);
    citations++;
  }
  for (const entry of contract.supplier_interfaces ?? []) {
    checkExcerpt(id, entry.supplier, entry.source_section, entry.excerpt, 'supplier interface');
    interfaces++;
  }
}
const pages = readJson(`${data}/proposed/${run}-batch-94.pages.json`);
for (const page of pages) {
  for (const item of [...(page.items ?? []), ...(page.examples ?? [])]) {
    if (typeof item !== 'object') continue;
    const carrier = `items/${item.id}.md`;
    const text = fs.readFileSync(carrier, 'utf8');
    check(JSON.stringify(item.deps) === JSON.stringify(frontmatterList(text, 'deps')), `${item.id}: manifest deps differ`);
    if ('justified_by' in item || frontmatterList(text, 'justified_by').length) {
      check(JSON.stringify(item.justified_by ?? []) === JSON.stringify(frontmatterList(text, 'justified_by')), `${item.id}: manifest justified_by differs`);
    }
    const title = text.match(/^title:\s*(.*)$/m)?.[1]?.replace(/^(['"])(.*)\1$/, '$2');
    check(item.title === title, `${item.id}: manifest title differs`);
    recordSource(carrier, `batch94.pages.${page.id ?? page.category}.${item.id} (deps/justified_by/title)`);
    manifests++;
  }
}
check(citations === 180 && derivations === 44 && manifests === 14, 'original 180quotes/44claims/14manifests counts changed');
const report = {
  checked_at: new Date().toISOString(),
  command: `node research/${run}-rootonly-metadata-81-94-exactness.mjs`,
  guarded_metadata_carriers: preview.files.length,
  guarded_actual_sources: preview.source_guards.length,
  citation_quotes_checked: citations,
  derivation_claims_checked: derivations,
  routine_claims_checked: routines,
  supplier_interface_excerpts_checked: interfaces,
  manifest_carriers_checked: manifests,
  pending81_proposed_contract_exact_old_bytes: !errors.includes('pending81 proposed contract bytes changed'),
  contract_to_source_map: contractMap,
  source_to_contract_map: Object.fromEntries([...sourceMap].sort(([a], [b]) => a.localeCompare(b))),
  errors,
  scope: 'Read-only source exactness and raw guards. Whitespace-normalized quoted excerpts and complete proof claims, source-derived citation uses, actual source manifest prerequisite/title mirrors. Manually authored boundary evidence, finite-branch explanations and manifest statement summaries require independent human reading. No proof or native acceptance is implied.'
};
const output = JSON.stringify(report, null, 2) + '\n';
if (args.length) fs.writeFileSync(args[1], output, { flag: 'wx' });
process.stdout.write(output);
if (errors.length) process.exitCode = 1;
