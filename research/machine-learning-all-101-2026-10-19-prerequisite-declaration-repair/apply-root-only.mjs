#!/usr/bin/env node
// Root-only per-field CAS merger. Each file replacement is atomic; the set is not.
import { readFileSync, writeFileSync, existsSync, mkdirSync, openSync, closeSync, fsyncSync, chmodSync, statSync, lstatSync, realpathSync, renameSync, unlinkSync } from 'node:fs';
import { dirname, resolve, relative, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { split, yaml } from '../../tools/pathway-lib.mjs';
const need = (yes, message) => { if (!yes) throw Error(message); };
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const clone = value => structuredClone(value);
const ws = (s, at) => { while (/\s/.test(s[at] ?? '') && at < s.length) at++; return at; };
function stringEnd(s, at) {
  need(s[at] === '"', 'Expected JSON string');
  for (let i = at + 1; i < s.length; i++) {
    if (s[i] === '\\') { i++; continue; }
    if (s[i] === '"') return i + 1;
  }
  throw Error('Unterminated JSON string');
}
function valueEnd(s, at) {
  at = ws(s, at);
  if (s[at] === '"') return stringEnd(s, at);
  if (s[at] === '{' || s[at] === '[') {
    const close = s[at] === '{' ? '}' : ']';
    let i = ws(s, at + 1);
    if (s[i] === close) return i + 1;
    while (i < s.length) {
      if (close === '}') { i = ws(s, stringEnd(s, i)); need(s[i] === ':', 'Expected JSON colon'); i = ws(s, i + 1); }
      i = ws(s, valueEnd(s, i));
      if (s[i] === close) return i + 1;
      need(s[i] === ',', 'Expected JSON separator'); i = ws(s, i + 1);
    }
    throw Error('Unterminated JSON container');
  }
  const token = s.slice(at).match(/^(?:true|false|null|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/)?.[0];
  need(token, 'Invalid JSON value'); return at + token.length;
}
function objectFields(s, at) {
  need(s[at] === '{', 'Expected page object');
  const fields = new Map(); let i = ws(s, at + 1);
  while (s[i] !== '}') {
    const end = stringEnd(s, i), key = JSON.parse(s.slice(i, end));
    need(!fields.has(key), `Duplicate JSON page key: ${key}`);
    i = ws(s, end); need(s[i] === ':', 'Expected field colon');
    const start = ws(s, i + 1), finish = valueEnd(s, start);
    fields.set(key, { start, end: finish }); i = ws(s, finish);
    if (s[i] === '}') break;
    need(s[i] === ',', 'Expected page separator'); i = ws(s, i + 1);
  }
  return fields;
}
function arrayElements(s, at) {
  need(s[at] === '[', 'Expected page array');
  const spans = []; let i = ws(s, at + 1);
  while (s[i] !== ']') {
    const end = valueEnd(s, i); spans.push({ start: i, end }); i = ws(s, end);
    if (s[i] === ']') break;
    need(s[i] === ',', 'Expected array separator'); i = ws(s, i + 1);
  }
  return spans;
}
function replaceSpans(text, replacements) {
  const ordered = replacements.toSorted((a, b) => a.start - b.start);
  for (let i = 1; i < ordered.length; i++) need(ordered[i - 1].end <= ordered[i].start, 'Overlapping field operations');
  let output = text;
  for (const row of ordered.toReversed()) output = output.slice(0, row.start) + row.text + output.slice(row.end);
  return output;
}
function pageRows(document, canonical) {
  const rows = canonical ? document.pages : document;
  need(Array.isArray(rows), 'Missing current page array'); return rows;
}
export function patchJSON(text, operations) {
  const before = JSON.parse(text), canonical = operations[0].locator === 'root.pages[unique id]';
  need(operations.every(op => (op.locator === 'root.pages[unique id]') === canonical), 'Mixed JSON locators');
  const rows = pageRows(before, canonical), expected = clone(before), expectedRows = pageRows(expected, canonical);
  let arrayAt = ws(text, 0);
  if (canonical) { const field = objectFields(text, arrayAt).get('pages'); need(field, 'Canonical pages field absent'); arrayAt = field.start; }
  const spans = arrayElements(text, arrayAt), replacements = [], seen = new Set();
  for (const op of operations) {
    need(op.op === 'json-page-field-cas', 'Wrong JSON operation');
    const key = `${op.page_id}#${op.field}`; need(!seen.has(key), `Duplicate operation ${key}`); seen.add(key);
    const matches = rows.map((row, i) => ({ row, i })).filter(({ row }) => row.id === op.page_id);
    need(matches.length === 1, `Page must occur exactly once: ${op.page_id}`);
    const { row, i } = matches[0];
    for (const [key, value] of Object.entries(op.page_identity)) need(isDeepStrictEqual(row[key], value), `Changed page identity ${op.page_id}.${key}`);
    need(Object.hasOwn(row, op.field) === op.expected_field_present && isDeepStrictEqual(row[op.field], op.expected_value), `Field CAS failed ${op.page_id}.${op.field}`);
    const field = objectFields(text, spans[i].start).get(op.field);
    need(field && op.expected_field_present, `JSON field insertion is not authorized: ${key}`);
    const indent = text.slice(text.lastIndexOf('\n', field.start) + 1, field.start).match(/^[\t ]*/)?.[0] ?? '';
    replacements.push({ ...field, text: JSON.stringify(op.proposed_value, null, 2).replace(/\n/g, '\n' + indent) });
    expectedRows[i][op.field] = clone(op.proposed_value);
  }
  const output = replaceSpans(text, replacements);
  need(isDeepStrictEqual(JSON.parse(output), expected), 'JSON merge changed unowned data');
  return output;
}
function fmEnvelope(text) {
  const opening = text.match(/^---\r?\n/); need(opening, 'Frontmatter opening missing');
  const close = /^---[\t ]*\r?$/gm; close.lastIndex = opening[0].length;
  const match = close.exec(text); need(match, 'Frontmatter closing missing');
  return { start: opening[0].length, end: match.index, newline: opening[0].includes('\r') ? '\r\n' : '\n' };
}
function yamlFields(text, envelope) {
  const lines = []; let at = envelope.start;
  for (const line of text.slice(envelope.start, envelope.end).match(/[^\n]*(?:\n|$)/g) ?? []) {
    if (!line) continue;
    const key = line.match(/^("(?:[^"\\]|\\.)*"|'(?:[^']|'')*'|[A-Za-z_][A-Za-z0-9_-]*)[\t ]*:/);
    if (key) { const parsed = yaml().parse(`${key[1]}: null`); lines.push({ key: Object.keys(parsed)[0], start: at }); }
    at += line.length;
  }
  const fields = new Map();
  for (let i = 0; i < lines.length; i++) {
    const row = lines[i]; need(!fields.has(row.key), `Duplicate YAML key ${row.key}`);
    let end = lines[i + 1]?.start ?? envelope.end;
    // Separator blank lines belong to neither value and stay byte-identical.
    const raw = text.slice(row.start, end), suffix = raw.match(/(?:^[\t ]*\r?\n)+$/m);
    if (suffix && suffix.index + suffix[0].length === raw.length) end -= suffix[0].length;
    fields.set(row.key, { start: row.start, end });
  }
  return fields;
}
export function patchYAML(text, operations) {
  const parsed = yaml().parse(split(text).fm), expected = clone(parsed), envelope = fmEnvelope(text), fields = yamlFields(text, envelope), replacements = [], absent = [], seen = new Set();
  need(parsed && typeof parsed === 'object' && !Array.isArray(parsed), 'Invalid page frontmatter');
  for (const op of operations) {
    need(op.op === 'yaml-frontmatter-field-cas' && parsed.page === op.page_id, `Wrong YAML page identity ${op.page_id}`);
    need(!seen.has(op.field), `Duplicate YAML operation ${op.field}`); seen.add(op.field);
    need(Object.hasOwn(parsed, op.field) === op.expected_field_present && isDeepStrictEqual(parsed[op.field], op.expected_value), `YAML field CAS failed ${op.page_id}.${op.field}`);
    need(['requires', 'items', 'examples'].includes(op.field) && Array.isArray(op.proposed_value) && op.proposed_value.every(id => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)), 'Only named page ID arrays are authorized');
    const block = op.proposed_value.length ? `${op.field}:${envelope.newline}${op.proposed_value.map(id => `  - ${id}${envelope.newline}`).join('')}` : `${op.field}: []${envelope.newline}`;
    const field = fields.get(op.field);
    if (op.expected_field_present) {
      need(field, `YAML physical field missing ${op.field}`);
      need(!text.slice(field.start, field.end).split(/\r?\n/).some(line => /^\s*#/.test(line) || /\s#/.test(line)), `Refuse to discard comments in targeted YAML field ${op.field}`);
      replacements.push({ ...field, text: block });
    } else { need(!field, 'Unexpected YAML field'); absent.push(block); }
    expected[op.field] = clone(op.proposed_value);
  }
  if (absent.length) replacements.push({ start: envelope.end, end: envelope.end, text: absent.join('') });
  const output = replaceSpans(text, replacements);
  need(isDeepStrictEqual(yaml().parse(split(output).fm), expected), 'YAML merge changed unowned frontmatter');
  need(split(output).body === split(text).body, 'YAML merge changed page body');
  return output;
}
export function mergeFields(text, operations) {
  need(operations.length, 'Empty operation group');
  return operations[0].op === 'json-page-field-cas' ? patchJSON(text, operations) : patchYAML(text, operations);
}
function main() {
  const args = process.argv.slice(2); need(args.every(arg => ['--check', '--apply'].includes(arg)), 'Usage: apply-root-only.mjs --check|--apply');
  need(!(args.includes('--check') && args.includes('--apply')), 'Choose check or apply');
  const base = dirname(fileURLToPath(import.meta.url)), root = resolve(base, '../..'), packet = join(base, 'report.json'), opsFile = join(base, 'field-operations.json'), packetRaw = readFileSync(packet), opsRaw = readFileSync(opsFile), report = JSON.parse(packetRaw), ops = JSON.parse(opsRaw);
  need(ops.length === 141 && report.operations === 141, 'Expected all 141 reviewed field operations');
  const pin = report.staged_artifacts.find(row => row.path.endsWith('/field-operations.json'));
  need(pin && sha(opsRaw) === pin.sha256, 'Field operations changed since report');
  const fileGroups = new Map();
  for (const op of ops) {
    need(op.file === 'research/plan-spec.json' || new RegExp(`^research/${report.run}-batch-\\d+\\.pages\\.json$`).test(op.file) || /^library\/[a-z0-9-]+\/[a-z0-9-]+\.md$/.test(op.file), 'Unexpected write target');
    if (!fileGroups.has(op.file)) fileGroups.set(op.file, []); fileGroups.get(op.file).push(op);
  }
  const safe = name => { const p = resolve(root, name); need(relative(root, p) && !relative(root, p).startsWith('..') && !lstatSync(p).isSymbolicLink() && !relative(root, realpathSync(p)).startsWith('..'), `Unsafe target ${name}`); return p; };
  function drained() {
    const state = JSON.parse(readFileSync(join(root, '.autopilot', report.run, 'state.json')));
    need(state.stage === '1-scaffold' && !Object.values(state.dispatches).some(d => d.startedAt && !d.endedAt), 'Native Step-1 writers must be drained');
  }
  function preflight() {
    drained(); need(readFileSync(packet).equals(packetRaw) && readFileSync(opsFile).equals(opsRaw), 'Packet changed');
    return [...fileGroups].map(([file, operations]) => { const target = safe(file), before = readFileSync(target), after = Buffer.from(mergeFields(before.toString('utf8'), operations)); return { file, operations, target, before, after }; });
  }
  // This checks every operation before any archive, lock or target mutation.
  const checked = preflight();
  if (!args.includes('--apply')) { console.log(JSON.stringify({ checked: true, applied: false, operations: ops.length, files: checked.length, field_cas_only: true, native_review_or_gate_credit: false })); return; }
  const lock = join(base, 'root-apply.lock'), lockfd = openSync(lock, 'wx');
  const stamp = new Date().toISOString().replace(/[:.]/g, '-'), application = join(base, `root-application-${stamp}`), changes = [], superseded = [];
  try {
    preflight(); // Repeat all141 under the root's integration lock before archiving.
    mkdirSync(application, { recursive: false });
    for (const [file, operations] of fileGroups) {
      let written = false;
      for (let attempt = 1; attempt <= 5; attempt++) {
        drained();
        const target = safe(file), before = readFileSync(target), after = Buffer.from(mergeFields(before.toString('utf8'), operations)), mode = statSync(target).mode & 0o777;
        const archive = join(application, `before-${attempt}`, file); mkdirSync(dirname(archive), { recursive: true }); writeFileSync(archive, before, { flag: 'wx' });
        const temp = `${target}.root-field-cas-${process.pid}-${attempt}.tmp`; let fd;
        try {
          fd = openSync(temp, 'wx', mode); writeFileSync(fd, after); fsyncSync(fd); closeSync(fd); fd = undefined; chmodSync(temp, mode);
          // Fresh shared-plan read above + immediate byte recheck. Foreign data
          // observed in that read is preserved literally outside edited fields.
          if (!readFileSync(target).equals(before)) { superseded.push({ file, attempt, archived_sha256: sha(before), reason: 'Concurrent write before atomic rename; reread and re-CAS every named field.' }); continue; }
          renameSync(temp, target); written = true;
          need(readFileSync(target).equals(after), `Post-write bytes changed ${file}`);
          changes.push({ file, before_sha256: sha(before), sha256: sha(after), archive: relative(root, archive), field_operations: operations.map(op => ({ page: op.page_id, field: op.field })) });
          break;
        } finally { if (fd !== undefined) closeSync(fd); if (existsSync(temp)) unlinkSync(temp); }
      }
      need(written, `Concurrent changes persisted for ${file}; inspect partial application journal`);
      writeFileSync(join(application, 'progress.json'), JSON.stringify({ run: report.run, changes, superseded }, null, 2) + '\n');
    }
    const receipt = { run: report.run, kind: 'root-applied-per-field-prerequisite-repair', at: new Date().toISOString(), report_sha256: sha(packetRaw), operations_sha256: sha(opsRaw), changes, superseded, per_file_atomic: true, cross_file_transaction: false, native_independent_review_credit: false, mathematical_acceptance: false, rehash_or_gate_credit: false };
    writeFileSync(join(application, 'receipt.json'), JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' });
    console.log(JSON.stringify({ applied: true, operations: ops.length, files: changes.length, receipt: relative(root, join(application, 'receipt.json')), cross_file_transaction: false }));
  } catch (error) {
    if (existsSync(application)) writeFileSync(join(application, 'failure.json'), JSON.stringify({ at: new Date().toISOString(), error: error.message, applied_files: changes, superseded, cross_file_transaction: false, instruction: 'Per-file writes already completed remain applied. Root must inspect this exact history; no cross-file rollback or successful acceptance is claimed.' }, null, 2) + '\n');
    throw error;
  } finally { closeSync(lockfd); unlinkSync(lock); }
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
