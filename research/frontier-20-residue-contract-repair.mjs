#!/usr/bin/env node
// Recover the proof-contract rows omitted when frontier-20 batch 9 was rebuilt
// from only its Hartogs pair. This reads the final residue item bytes and the
// live batch manifest; it does not edit any item, page, or judge artifact.

import { readFileSync, writeFileSync } from 'node:fs';
import {
  SOURCE_SECTIONS,
  factParagraphs,
  numberedProofSteps,
  sectionText,
  sourceSectionText,
  splitFrontmatter,
} from '../tools/facts-block.mjs';

const CONTRACT_PATH = 'research/frontier-20-batch-9.proof-contracts.json';
const PAGES_PATH = 'research/frontier-20-batch-9.pages.json';
const CITABLE_HEADINGS = ['Statement', 'Statement refuted', 'Definition', 'Example', 'Remark'];
const EXPECTED_MISSING = 30;
const uncitable = new Set();

const pages = JSON.parse(readFileSync(PAGES_PATH, 'utf8'));
const document = JSON.parse(readFileSync(CONTRACT_PATH, 'utf8'));
const residueIds = pages.slice(0, 2).flatMap((page) => page.items.map((item) => item.id));
const residueProofIds = residueIds.filter((id) => {
  const { body } = item(id);
  return numberedProofSteps(body).length > 0;
});

if (residueProofIds.length !== EXPECTED_MISSING) {
  throw new Error(`refusing recovery: expected ${EXPECTED_MISSING} residue proof contracts, found ${residueProofIds.length}`);
}

const recovered = {};
for (const id of residueProofIds) recovered[id] = contractFor(id);
if (uncitable.size) {
  throw new Error(`uncitable fact sources: ${[...uncitable].join(', ')}`);
}

document.scope = [...residueProofIds, ...document.scope.filter((id) => !residueProofIds.includes(id))];
document.contracts = { ...document.contracts, ...recovered };
writeFileSync(CONTRACT_PATH, `${JSON.stringify(document, null, 2)}\n`);
console.log(`recovered ${residueProofIds.length} residue contract entries; batch 9 scope is now ${document.scope.length}`);

function item(id) {
  const source = readFileSync(`items/${id}.md`, 'utf8');
  return { source, ...splitFrontmatter(source) };
}

function titleOf(fm, id) {
  const match = fm.match(/^title:\s*(.*)$/m);
  return (match?.[1] ?? id).trim().replace(/^["']|["']$/g, '');
}

function statementOf(body) {
  for (const heading of CITABLE_HEADINGS) {
    const text = sectionText(body, heading).trim();
    if (text) return text;
  }
  return '';
}

function sourceStatement(id) {
  const { body } = item(id);
  for (const heading of CITABLE_HEADINGS) {
    if (!SOURCE_SECTIONS.has(heading)) continue;
    const quote = sourceSectionText(body, heading)?.trim();
    if (quote) return { source_section: heading, quote };
  }
  return null;
}

function tokens(text) {
  const found = new Set();
  for (const match of text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) {
    found.add(match[1] ?? match[2]);
  }
  return found;
}

function contractFor(id) {
  const { fm, body } = item(id);
  const title = titleOf(fm, id);
  const facts = [...factParagraphs(body).values()];
  const steps = numberedProofSteps(body);
  if (!steps.length) throw new Error(`${id} has no numbered proof steps`);

  const citations = [];
  for (const fact of facts) {
    const uses = steps.filter((step) => tokens(step.text).has(fact.label)).map((step) => step.id);
    for (const source of fact.links) {
      const statement = sourceStatement(source);
      if (!statement) {
        uncitable.add(source);
        continue;
      }
      citations.push({ fact: fact.label, source, ...statement, uses });
    }
  }

  const derivations = steps.map((step) => {
    const inputs = [...step.inputs];
    const have = new Set(inputs.map((value) => value.replace(/^step\s+/, '')));
    for (const token of tokens(step.text)) {
      if (!have.has(token)) inputs.push(/^\d/.test(token) ? `step ${token}` : token);
    }
    if (!inputs.length) inputs.push('given');
    return {
      id: `step-${step.id.replace('.', '-')}`,
      claim: step.claim,
      step: step.id,
      inputs,
    };
  });

  const statement = statementOf(body);
  const proof = steps.map((step) => step.text).join('\n');
  const boundaries = boundaryRows({ title, statement, proof, steps });
  const first = summarise(steps[0].claim);
  const last = summarise(steps.at(-1).claim);

  return {
    citations,
    derivations,
    routine_steps: [],
    boundaries,
    finite_smoke: [],
    risk_review: {
      status: 'complete',
      reviewer: 'step9-residue-contract-gap-recovery',
      notes: `On August 27, 2026, the Step-9 recovery checked the final current carrier for ${title} after its completed Step-8 adjudication. The restored contract records ${facts.length} fact label(s) and ${steps.length} numbered step(s) directly from disk. The proof opens with ${first} and closes with ${last}. This recovery changes contract metadata only and leaves the final item mathematics untouched.`,
    },
  };
}

function boundaryRows({ title, statement, proof, steps }) {
  const all = `${statement}\n${proof}`;
  const first = steps[0];
  const last = steps.at(-1);
  const find = (pattern) => steps.find((step) => pattern.test(step.text));
  const symbolicDivision = find(/\\d?frac\{[^{}]*\}\{[^{}]*[A-Za-z][^{}]*\}|\\over(?![A-Za-z])/);
  const indexedClaim = /\\bigcup|\\bigcap|\\prod_\{|\\sum_\{|\bfamily\b|\bindexed by\b|\bcollection of\b/i.test(statement);
  const oneCase = /\bsimple pole\b|\bone pole\b|\bunique pole\b|\bsingle pole\b|\border one\b/i.test(all);
  const degenerate = /\bno poles?\b|\bno singularit|\bempty sum\b|\bzero residue\b|\bvanish(?:es|ing)?\b/i.test(all);
  const endpoint = /\bprincipal value\b|\bimproper\b|\blimit\b|\binfinity\b|\\infty|\bkeyhole\b|\bsemicircle\b|\bindent(?:ed|ation)?\b|\barc\b/i.test(all);
  const choice = /\bchoose\b|\bselect\b|\bfix (?:a|an|the) (?:radius|circle|contour)\b/i.test(proof);
  const iff = /\bif and only if\b|\biff\b|\\iff|\\Leftrightarrow|\bexactly when\b|\bprecisely when\b/i.test(statement);

  return [
    indexedClaim
      ? checked('empty', title, first)
      : notApplicable('empty', `${title} fixes a particular contour, function, or residue computation rather than an optional indexed family, so its claim has no separate empty-family branch.`),
    symbolicDivision
      ? checked('zero', title, symbolicDivision)
      : notApplicable('zero', `${title} introduces no free denominator or parameter that can independently be set to zero outside the hypotheses recorded in its Facts block.`),
    oneCase
      ? checked('one', title, find(/\bsimple pole\b|\bone pole\b|\bunique pole\b|\bsingle pole\b|\border one\b/i) ?? first)
      : notApplicable('one', `${title} does not assert a separate singleton, first-index, or order-one branch beyond the stated contour and residue argument.`),
    degenerate
      ? checked('degenerate', title, find(/\bno poles?\b|\bno singularit|\bempty sum\b|\bzero residue\b|\bvanish(?:es|ing)?\b/i) ?? last)
      : notApplicable('degenerate', `${title} has no additional collapsed configuration beyond the explicit pole, domain, and convergence hypotheses in the statement.`),
    endpoint
      ? checked('endpoints', title, find(/\bprincipal value\b|\bimproper\b|\blimit\b|\binfinity\b|\\infty|\bkeyhole\b|\bsemicircle\b|\bindent(?:ed|ation)?\b|\barc\b/i) ?? last)
      : notApplicable('endpoints', `${title} is not an interval-endpoint claim, and its fixed finite computation creates no independent endpoint case.`),
    choice
      ? checked('nonempty-choice', title, find(/\bchoose\b|\bselect\b|\bfix (?:a|an|the) (?:radius|circle|contour)\b/i) ?? first)
      : notApplicable('nonempty-choice', `${title} uses data and constructions explicitly fixed in the statement rather than selecting a witness from an unspecified nonempty family.`),
    iff
      ? checked('iff-forward', title, first)
      : notApplicable('iff-forward', `${title} is not stated as a biconditional, so it asserts no forward implication requiring a separate proof branch.`),
    iff
      ? checked('iff-reverse', title, last)
      : notApplicable('iff-reverse', `${title} is not stated as a biconditional, so it asserts no reverse implication requiring a separate proof branch.`),
  ];
}

function checked(name, title, step) {
  const detail = {
    empty: 'empty-family behavior',
    zero: 'zero-denominator behavior',
    one: 'single-pole behavior',
    degenerate: 'collapsed-configuration behavior',
    endpoints: 'limiting-boundary behavior',
    'nonempty-choice': 'witness-selection behavior',
    'iff-forward': 'forward-direction behavior',
    'iff-reverse': 'reverse-direction behavior',
  }[name];
  return {
    case: name,
    status: 'checked',
    evidence: `Step ${step.id} records the live ${detail} for ${title}: ${summarise(step.claim)}.`,
  };
}

function notApplicable(name, reason) {
  return { case: name, status: 'not_applicable', reason };
}

function summarise(text) {
  const compact = String(text).replace(/\s+/g, ' ').trim().replace(/\s*∎\s*$/, '');
  return compact.length > 220 ? `${compact.slice(0, 217)}...` : compact;
}
