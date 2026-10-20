#!/usr/bin/env node
// Root-only exact-field/string-span CAS. No hashes, recertification or gates.
import { readFileSync, writeFileSync, mkdirSync, openSync, closeSync, fsyncSync, existsSync, unlinkSync, renameSync, statSync } from 'node:fs';
import { dirname, resolve, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mergeFields, patchJSON } from '../../machine-learning-all-101-2026-10-19-prerequisite-declaration-repair/apply-root-only.mjs';
const need = (ok, message) => { if (!ok) throw Error(message); };
const count = (text, excerpt) => text.split(excerpt).length - 1;
export function mergeContextFields(text, ops) {
  const ordinary = ops.filter(op => ['json-page-field-cas', 'yaml-frontmatter-field-cas'].includes(op.op));
  let output = ordinary.length ? mergeFields(text, ordinary) : text;
  for (const op of ops.filter(op => !ordinary.includes(op))) {
    if (op.op === 'json-page-string-fragment-cas') {
      const data = JSON.parse(output), matches = data.pages.filter(p => p.id === op.page_id);
      need(matches.length === 1, 'Structured page identity must be unique');
      const before = matches[0][op.field];
      need(typeof before === 'string' && count(before, op.source_excerpt) === 1, 'Description fragment CAS failed');
      // Guard the selected literal, preserving a fresh description's other text,
      // including planning-pointer updates owned by the root.
      output = patchJSON(output, [{ ...op, op: 'json-page-field-cas', expected_value: before, proposed_value: before.replace(op.source_excerpt, op.proposed_replacement) }]);
    } else if (op.op === 'section-text-fragment-cas') {
      need(count(output, op.section_heading) === 1, 'Controlling section must be unique');
      const start = output.indexOf(op.section_heading), next = output.indexOf('\n### ', start + op.section_heading.length), end = next < 0 ? output.length : next;
      const section = output.slice(start, end);
      need(count(section, op.source_excerpt) === 1, 'Controlling prose fragment CAS failed');
      output = output.slice(0, start) + section.replace(op.source_excerpt, op.proposed_replacement) + output.slice(end);
    } else throw Error('Unexpected operation');
  }
  return output;
}
function main() {
  const args = process.argv.slice(2);
  need(args.every(a => ['--check', '--apply'].includes(a)) && !(args.includes('--check') && args.includes('--apply')), 'Usage: apply-root-only.mjs --check|--apply');
  const base = dirname(fileURLToPath(import.meta.url)), root = resolve(base, '../../..'), opFile = join(base, 'field-span-operations.json'), initial = readFileSync(opFile), ops = JSON.parse(initial);
  need(ops.length === 5, 'Expected five reviewed operations');
  const run = 'machine-learning-all-101-2026-10-19', allowed = new Set([`research/${run}-batch-70.pages.json`, 'research/plan-spec.json', 'research/plan-machine-learning-track.md', 'library/machine-learning/multimodal-contrastive-alignment-and-transfer.md']), groups = new Map();
  for (const op of ops) { need(allowed.has(op.file), 'Unexpected write target'); if (!groups.has(op.file)) groups.set(op.file, []); groups.get(op.file).push(op); }
  function preflight() {
    need(readFileSync(opFile).equals(initial), 'Reviewed operations changed');
    return [...groups].map(([file, operations]) => { const target = join(root, file), before = readFileSync(target); return { file, target, operations, before, after: Buffer.from(mergeContextFields(before.toString('utf8'), operations)) }; });
  }
  const checked = preflight();
  if (!args.includes('--apply')) { console.log(JSON.stringify({ applied: false, operations: ops.length, files: checked.length, exact_field_cas_pass: true, hashing: false, gates: false, batch51_preserved: true })); return; }
  const state = JSON.parse(readFileSync(join(root, '.autopilot', run, 'state.json')));
  need(state.stage === '2-scope-review' && !Object.values(state.dispatches).some(d => d.startedAt && !d.endedAt), 'Root integration requires actual Step2 native writer drain');
  const lock = join(base, 'root-apply.lock'), fd = openSync(lock, 'wx'), changes = [], archive = join(base, 'root-application-' + new Date().toISOString().replace(/[:.]/g, '-'));
  try {
    preflight(); // All five before any target archive/mutation.
    mkdirSync(archive);
    for (const [file, operations] of groups) {
      const target = join(root, file), before = readFileSync(target), after = Buffer.from(mergeContextFields(before.toString('utf8'), operations)), prior = join(archive, 'before', file);
      mkdirSync(dirname(prior), { recursive: true }); writeFileSync(prior, before, { flag: 'wx' });
      const temp = target + `.root-context-cas-${process.pid}.tmp`; let handle;
      try {
        handle = openSync(temp, 'wx', statSync(target).mode & 0o777); writeFileSync(handle, after); fsyncSync(handle); closeSync(handle); handle = undefined;
        need(readFileSync(target).equals(before), 'Concurrent target update; root must inspect partial application: ' + file);
        renameSync(temp, target);
        changes.push({ file, before_file: relative(root, prior), named_operations: operations.map(op => ({ op: op.op, page_id: op.page_id, field: op.field, section: op.section_heading })) });
        writeFileSync(join(archive, 'progress.json'), JSON.stringify({ run, changes, per_file_atomic: true, cross_file_transaction: false }, null, 2) + '\n');
      } finally { if (handle !== undefined) closeSync(handle); if (existsSync(temp)) unlinkSync(temp); }
    }
    writeFileSync(join(archive, 'receipt.json'), JSON.stringify({ run, at: new Date().toISOString(), changes, batch51_preserved: true, hashing: false, native_review_credit: false, certification_or_gate_credit: false, per_file_atomic: true, cross_file_transaction: false }, null, 2) + '\n');
    console.log(JSON.stringify({ applied: true, files: changes.length, archive: relative(root, archive), batch51_preserved: true, hashing: false, gates: false }));
  } catch (error) {
    if (existsSync(archive)) writeFileSync(join(archive, 'failure.json'), JSON.stringify({ error: error.message, applied_files: changes, cross_file_transaction: false }, null, 2) + '\n');
    throw error;
  } finally { closeSync(fd); unlinkSync(lock); }
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
