#!/usr/bin/env node
// Read-only projection verification through actual repository content parsers.
// No validator CLI, gate, metadata write, acceptance, or source modification.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { splitFrontmatter, numberedProofSteps, factParagraphs, sourceSectionText } from '../../tools/facts-block.mjs';
import { parseFrontmatter } from '../../tools/content-policy-lib.mjs';
const base = dirname(fileURLToPath(import.meta.url));
const root = resolve(base, '../..');
const read = path => readFileSync(resolve(root, path), 'utf8');
const json = path => JSON.parse(read(path));
const require = (ok, message) => { if (!ok) throw Error(message); };
const equal = (a,b) => JSON.stringify(a) === JSON.stringify(b);
const spec = JSON.parse(readFileSync(resolve(base,'projection.json'),'utf8'));
const receipt = JSON.parse(readFileSync(resolve(base,'receipt.json'),'utf8'));
for (const [path, text] of Object.entries(spec.source_guards)) require(read(path) === text, `Raw source drift: ${path}`);
const documents = new Map();
for (const op of spec.operations) {
  if (!documents.has(op.file)) documents.set(op.file,json(op.file));
  let target = documents.get(op.file);
  for (const key of op.path.slice(0,-1)) target = target[key];
  const key = op.path.at(-1);
  require(equal(target[key],op.before) || equal(target[key],op.after), `Field drift: ${op.file}/${op.path.join('/')}`);
  target[key] = structuredClone(op.after);
}
const summaries = [];
for (const batch of [4,5,18,38]) {
  const prefix = `research/${spec.run}-batch-${batch}`;
  const pages = documents.get(`${prefix}.pages.json`) ?? json(`${prefix}.pages.json`);
  const contracts = (documents.get(`${prefix}.proof-contracts.json`) ?? json(`${prefix}.proof-contracts.json`)).contracts;
  let paragraphCount = 0, quoteCount = 0, manifestCount = 0;
  for (const page of pages) for (const item of page.items) {
    const metadata = parseFrontmatter(splitFrontmatter(read(`items/${item.id}.md`)).fm);
    for (const field of ['deps','justified_by']) if (field in item) require(equal(item[field],metadata[field] ?? []), `${item.id}: repository YAML ${field}`);
    manifestCount++;
  }
  for (const [id, contract] of Object.entries(contracts)) {
    const { body } = splitFrontmatter(read(`items/${id}.md`));
    const steps = numberedProofSteps(body);
    require(steps.length === contract.derivations.length, `${id}: repository paragraph count`);
    steps.forEach((step,index) => {
      const row = contract.derivations[index];
      require(step.id === row.step && step.claim === row.claim && equal(step.inputs,row.inputs), `${id}: repository full paragraph/final inputs ${step.id}`);
    });
    const facts = factParagraphs(body);
    const pairs = [...facts.values()].flatMap(fact => fact.links.map(source => [fact.label,source]));
    require(equal(pairs,contract.citations.map(c=>[c.fact,c.source])), `${id}: repository exact fact labels/source links`);
    for (const citation of contract.citations) {
      const supplier = splitFrontmatter(read(`items/${citation.source}.md`)).body;
      const section = sourceSectionText(supplier,citation.source_section);
      require(section !== null && section.trim() === citation.quote.trim(), `${id}: whole current supplier section ${citation.fact}/${citation.source}`);
      require(equal(citation.uses,steps.filter(step=>step.inputs.includes(citation.fact)).map(step=>step.id)), `${id}: actual final-tag fact uses ${citation.fact}`);
    }
    paragraphCount += steps.length;
    quoteCount += contract.citations.length;
  }
  summaries.push({ batch, manifest_items:manifestCount, complete_paragraphs:paragraphCount, whole_supplier_sections:quoteCount, status:'repository-parser-exact' });
}
const original = json(`research/${spec.run}-owner-step2-contract-mirror-preparation/edits.json`);
for (const edit of original.edits.filter(edit=>edit.pointer.at(-1)==='evidence')) {
  let value = documents.get(edit.file);
  for (const key of edit.pointer) value = value[key];
  require(value === edit.after, 'Approved Richardson boundary was not preserved');
}
require(spec.operations.length === 49, 'Expected exact 49 operations');
console.log(JSON.stringify({ mode:'read-only/in-memory',operations:spec.operations.length,approved_richardson_boundary_fields:2,batches:summaries },null,2));
