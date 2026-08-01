#!/usr/bin/env node
// proof-contract.mjs — auditable proof-obligation, citation, and boundary contracts.
//
//   node tools/proof-contract.mjs research/level<n>-proof-contracts.json --strict
//   node tools/proof-contract.mjs research/level<n>-proof-contracts.json --items id-a,id-b
//
// This intentionally does not attempt to prove mathematics.  It makes three
// things that previously lived only in an author's private reasoning durable and
// mechanically auditable: (1) the exact source text for each cited fact,
// (2) the stated inputs for every numbered proof step, and (3) the disposition
// of the standard boundary cases.  `--strict` is the future-level gate: every
// selected proof-bearing item must have a contract entry.

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const STANDARD_BOUNDARIES = [
  'empty', 'zero', 'one', 'degenerate', 'endpoints', 'nonempty-choice',
  'iff-forward', 'iff-reverse',
];
const SOURCE_SECTIONS = new Set(['Statement', 'Statement refuted', 'Definition', 'Example']);
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const strict = argv.includes('--strict');
const requested = option('--items')
  ?.split(',').map((x) => x.trim()).filter(Boolean) ?? null;
const contractPath = argv.find((arg) => !arg.startsWith('--') && arg !== option('--items'));

if (!contractPath) usage();

const errors = [];
const warnings = [];
const error = (code, message, id = null) => errors.push({ code, message, id });
const warn = (code, message, id = null) => warnings.push({ code, message, id });

let document;
try {
  document = JSON.parse(readFileSync(resolvePath(contractPath), 'utf8'));
} catch (cause) {
  error('contract-read', `${contractPath}: ${cause.message}`);
  finish({ scope: [], checked: [] });
}

if (!document || typeof document !== 'object' || Array.isArray(document)) {
  error('contract-shape', 'top-level contract must be an object');
  finish({ scope: [], checked: [] });
}
if (document.version !== 1) error('contract-version', 'contract version must be 1');
if (!Array.isArray(document.scope) || document.scope.some((id) => typeof id !== 'string' || !id)) {
  error('contract-scope', '`scope` must be an array of item ids');
}
if (!document.contracts || typeof document.contracts !== 'object' || Array.isArray(document.contracts)) {
  error('contract-entries', '`contracts` must be an object keyed by item id');
}

const scope = Array.isArray(document.scope) ? document.scope : [];
const selected = requested ? scope.filter((id) => requested.includes(id)) : scope;
for (const id of requested ?? []) {
  if (!scope.includes(id)) error('selection-outside-scope', `${id} is not in this contract's scope`, id);
}

const checked = [];
for (const id of selected) {
  const entry = document.contracts?.[id];
  const item = loadItem(id);
  if (!item) {
    error('item-missing', `items/${id}.md does not exist`, id);
    continue;
  }
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    const message = `${id} has no proof contract entry`;
    (strict ? error : warn)('scope-missing-contract', message, id);
    continue;
  }
  validateItem(id, item, entry);
  checked.push(id);
}

for (const id of Object.keys(document.contracts ?? {})) {
  if (!scope.includes(id)) error('contract-outside-scope', `${id} has an entry but is not in scope`, id);
}
finish({ scope: selected, checked });

function validateItem(id, item, entry) {
  const facts = factsByLabel(item.body);
  const steps = numberedSteps(item.body);
  const declared = new Set([...item.deps, ...item.justified]);
  const citations = Array.isArray(entry.citations) ? entry.citations : [];
  const citationKeys = new Set();
  const citedFactKeys = new Set();

  if (!Array.isArray(entry.citations)) error('citations-shape', '`citations` must be an array', id);
  for (const citation of citations) {
    if (!citation || typeof citation !== 'object' || Array.isArray(citation)) {
      error('citation-shape', 'each citation must be an object', id);
      continue;
    }
    const { fact, source, source_section: section, quote, uses } = citation;
    if (typeof fact !== 'string' || typeof source !== 'string') {
      error('citation-id', 'citation needs string `fact` and `source`', id);
      continue;
    }
    const key = `${fact}\u0000${source}`;
    if (citationKeys.has(key)) error('citation-duplicate', `${fact} -> ${source} is repeated`, id);
    citationKeys.add(key);
    const factRecord = facts.get(fact);
    if (!factRecord) {
      error('citation-fact-missing', `${fact} is not a fact in ${id}`, id);
      continue;
    }
    if (!factRecord.links.includes(source)) {
      error('citation-source-not-in-fact', `${fact} does not link [[${source}]]`, id);
    }
    if (!declared.has(source)) {
      error('citation-undeclared-dependency', `${fact} cites ${source}, which is absent from deps/justified_by`, id);
    }
    const sourceItem = loadItem(source);
    if (!sourceItem) {
      error('citation-source-missing', `${fact} cites missing item ${source}`, id);
    } else if (!SOURCE_SECTIONS.has(section)) {
      error('citation-section', `${fact} -> ${source} needs a valid source_section`, id);
    } else if (typeof quote !== 'string' || !quote.trim()) {
      error('citation-quote-missing', `${fact} -> ${source} needs an exact non-empty quote`, id);
    } else if (!normalise(sectionText(sourceItem.body, section)).includes(normalise(quote))) {
      error('citation-quote-mismatch', `${fact} quote does not occur in ${source}'s ${section}`, id);
    }
    if (!Array.isArray(uses) || !uses.length) {
      error('citation-uses', `${fact} -> ${source} needs every proof step that cites ${fact}`, id);
    } else {
      const actualUses = [...steps.values()]
        .filter((step) => explicitTokens(step.text).has(fact))
        .map((step) => step.id);
      const claimedUses = new Set(uses);
      for (const stepId of uses) {
        const step = steps.get(stepId);
        if (!step) error('citation-use-step-missing', `${fact} names missing step ${stepId}`, id);
        else if (!explicitTokens(step.text).has(fact)) {
          error('citation-use-not-supported', `${fact} is not cited by declared use ${stepId}`, id);
        }
      }
      for (const stepId of actualUses) {
        if (!claimedUses.has(stepId)) error('citation-use-unmapped', `${fact} is cited by ${stepId} but the contract omits it`, id);
      }
    }
    citedFactKeys.add(key);
  }

  for (const fact of facts.values()) {
    for (const source of fact.links) {
      const key = `${fact.label}\u0000${source}`;
      if (!citedFactKeys.has(key)) error('citation-fact-uncontracted', `${fact.label} -> ${source} needs an exact citation contract`, id);
    }
  }

  const classified = new Map();
  validateStepEntries(entry.derivations, 'derivations', id, facts, steps, classified);
  validateStepEntries(entry.routine_steps, 'routine_steps', id, facts, steps, classified);
  for (const step of steps.values()) {
    if (!classified.has(step.id)) error('step-unmapped', `${step.id} has no derivation or routine-step contract`, id);
  }

  validateBoundaries(id, entry.boundaries, steps);
}

function validateStepEntries(entries, field, id, facts, steps, classified) {
  if (!Array.isArray(entries)) {
    error('step-entry-shape', `\`${field}\` must be an array`, id);
    return;
  }
  const ids = new Set();
  for (const entry of entries) {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      error('step-entry-shape', `each ${field} entry must be an object`, id);
      continue;
    }
    if (typeof entry.id !== 'string' || !entry.id.trim()) error('step-entry-id', `${field} entry needs a stable id`, id);
    else if (ids.has(entry.id)) error('step-entry-duplicate', `${field} repeats ${entry.id}`, id);
    else ids.add(entry.id);
    if (typeof entry.claim !== 'string' || !entry.claim.trim()) error('step-entry-claim', `${field} ${entry.id ?? '?'} needs a claim`, id);
    if (Object.hasOwn(entry, 'steps')) error('step-entry-legacy-steps', `${field} ${entry.id ?? '?'} must use one \`step\`, not \`steps\``, id);
    if (typeof entry.step !== 'string' || !entry.step) {
      error('step-entry-step', `${field} ${entry.id ?? '?'} needs exactly one step`, id);
      continue;
    }
    if (!Array.isArray(entry.inputs) || !entry.inputs.length) error('step-entry-inputs', `${field} ${entry.id ?? '?'} needs stated inputs`, id);
    const step = steps.get(entry.step);
    if (!step) {
      error('step-entry-step-missing', `${field} ${entry.id ?? '?'} names missing ${entry.step}`, id);
    } else {
      if (classified.has(entry.step)) error('step-entry-overlap', `${entry.step} is mapped by both ${classified.get(entry.step)} and ${entry.id ?? '?'}`, id);
      else classified.set(entry.step, entry.id ?? field);
      const inputs = new Set(entry.inputs ?? []);
      for (const token of explicitTokens(step.text)) {
        const acceptable = inputs.has(token) || inputs.has(`step ${token}`);
        if (!acceptable) error('step-entry-input-omitted', `${entry.id ?? field} omits ${token}, cited by ${entry.step}`, id);
      }
    }
    for (const input of entry.inputs ?? []) {
      if (typeof input !== 'string' || !input.trim()) {
        error('step-entry-input-invalid', `${field} ${entry.id ?? '?'} has an invalid input`, id);
        continue;
      }
      const fact = input.replace(/^fact\s+/, '');
      const previous = input.replace(/^step\s+/, '');
      if (/^[FAL]\d+$/.test(fact) && !facts.has(fact)) error('step-entry-input-fact-missing', `${entry.id ?? field} names missing fact ${fact}`, id);
      if (/^\d+\.\d+$/.test(previous) && !steps.has(previous)) error('step-entry-input-step-missing', `${entry.id ?? field} names missing step ${previous}`, id);
    }
  }
}

function validateBoundaries(id, boundaries, steps) {
  if (!Array.isArray(boundaries)) {
    error('boundary-shape', '`boundaries` must be an array', id);
    return;
  }
  const seen = new Set();
  for (const boundary of boundaries) {
    if (!boundary || typeof boundary !== 'object' || Array.isArray(boundary)) {
      error('boundary-entry-shape', 'each boundary entry must be an object', id);
      continue;
    }
    const { case: name, status, evidence, reason } = boundary;
    if (!STANDARD_BOUNDARIES.includes(name)) {
      error('boundary-case', `${name ?? '(missing)'} is not a standard boundary case`, id);
      continue;
    }
    if (seen.has(name)) error('boundary-duplicate', `${name} is listed twice`, id);
    seen.add(name);
    if (!['checked', 'not_applicable'].includes(status)) error('boundary-status', `${name} must be checked or not_applicable`, id);
    if (status === 'checked') {
      if (typeof evidence !== 'string' || !evidence.trim()) error('boundary-evidence', `${name} needs evidence`, id);
      else {
        const references = [...evidence.matchAll(/(?:step\s+)?(\d+\.\d+)/g)].map((m) => m[1]);
        if (!references.length && !/statement|definition|example|counterexample/i.test(evidence)) {
          error('boundary-evidence-unanchored', `${name} evidence must name a step or statement`, id);
        }
        for (const stepId of references) if (!steps.has(stepId)) error('boundary-evidence-step-missing', `${name} names missing step ${stepId}`, id);
      }
    }
    if (status === 'not_applicable' && (typeof reason !== 'string' || !reason.trim())) {
      error('boundary-na-reason', `${name} needs a specific not_applicable reason`, id);
    }
  }
  for (const name of STANDARD_BOUNDARIES) if (!seen.has(name)) error('boundary-missing', `${name} has no worksheet disposition`, id);
}

function loadItem(id) {
  const path = join(REPO, 'items', `${id}.md`);
  if (!existsSync(path)) return null;
  const source = readFileSync(path, 'utf8');
  const { fm, body } = split(source);
  return { id, body, deps: list(fm, 'deps'), justified: list(fm, 'justified_by') };
}

function split(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { fm: match[1], body: match[2] } : { fm: '', body: source };
}
function list(fm, key) {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0;
  for (let index = open; index < fm.length; index += 1) {
    if (fm[index] === '[') depth += 1;
    else if (fm[index] === ']' && --depth === 0) {
      return fm.slice(open + 1, index).split(',')
        .map((value) => value.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
    }
  }
  return [];
}
function factsByLabel(body) {
  const facts = new Map();
  const text = sectionText(body, 'Facts & Assumptions');
  const paragraphs = text.split(/\n\s*\n/);
  for (const paragraph of paragraphs) {
    const match = paragraph.trim().match(/^\[([FAL]\d+)\]\s*([\s\S]*)$/);
    if (!match) continue;
    const links = [...paragraph.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((link) => link[1]);
    facts.set(match[1], { label: match[1], text: paragraph, links });
  }
  return facts;
}
function numberedSteps(body) {
  const steps = new Map();
  const sections = ['Proof', 'Refutation', 'Counterexample', 'Verification'];
  for (const section of sections) for (const line of sectionText(body, section).split(/\r?\n/)) {
    const match = line.match(/^(\d+\.\d+)\s+(.+)$/);
    if (match) steps.set(match[1], { id: match[1], text: match[2] });
  }
  return steps;
}
function explicitTokens(text) {
  const out = new Set();
  for (const match of text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) out.add(match[1] ?? match[2]);
  return out;
}
function sectionText(body, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, 'm'));
  return match?.[1] ?? '';
}
function normalise(value) {
  return value.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
}
function option(flag) {
  const index = argv.indexOf(flag);
  return index >= 0 ? argv[index + 1] : undefined;
}
function resolvePath(path) {
  return path.startsWith('/') ? path : join(process.cwd(), path);
}
function usage() {
  console.error('usage: node tools/proof-contract.mjs <contract.json> [--strict] [--items id,id] [--json]');
  process.exit(2);
}
function finish(summary) {
  const result = { ok: errors.length === 0, errors, warnings, ...summary };
  if (asJson) console.log(JSON.stringify(result, null, 2));
  else {
    for (const record of errors) console.error(`ERROR ${record.code}${record.id ? ` [${record.id}]` : ''}: ${record.message}`);
    for (const record of warnings) console.warn(`WARN ${record.code}${record.id ? ` [${record.id}]` : ''}: ${record.message}`);
    console.log(`proof-contract: ${errors.length} error(s), ${warnings.length} warning(s), ${summary.checked.length}/${summary.scope.length} item(s) checked`);
  }
  process.exit(errors.length ? 1 : 0);
}
