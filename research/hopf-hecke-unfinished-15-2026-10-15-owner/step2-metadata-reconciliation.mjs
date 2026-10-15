import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { yaml } from '../../tools/pathway-lib.mjs';
import { dependencyLevels } from '../../tools/item-dependency-levels.mjs';
const run = 'hopf-hecke-unfinished-15-2026-10-15';
const base = `research/${run}-owner/step2-metadata-reconciliation`;
const sha = value => createHash('sha256').update(value).digest('hex');
const ascii = text => text.replace(/[^\x00-\x7f]/g, ch => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0'));
const documents = [], pages = [], sources = new Map(), changes = [];
for (const name of fs.readdirSync('research').filter(x => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(x))) {
  const file = `research/${name}`, before = fs.readFileSync(file, 'utf8'), rows = JSON.parse(before);
  const plain = JSON.stringify(rows, null, 2) + '\n';
  if (before !== plain && before !== ascii(plain)) throw Error(`Inspect nonstandard serialization: ${file}`);
  documents.push({ file, before, rows, escaped: before !== plain });
  for (const page of rows) {
    for (const item of page.items) {
      const file = `items/${item.id}.md`, before = fs.readFileSync(file, 'utf8');
      const fm = yaml().parse(before.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);
      if (fm.id !== item.id || fm.kind !== item.kind) throw Error(`Identity/kind mismatch: ${item.id}`);
      sources.set(item.id, { file, before, fm });
      for (const key of ['title', 'deps', 'justified_by', 'forward_refs']) {
        const value = key === 'title' ? fm[key] : fm[key] ?? [];
        if (key !== 'title' && !Array.isArray(value)) throw Error(`Invalid ${key}: ${item.id}`);
        if (JSON.stringify(item[key] ?? (key === 'title' ? null : [])) !== JSON.stringify(value)) {
          changes.push({ item: item.id, field: key, before: item[key] ?? null, after: value });
          item[key] = value;
        }
      }
    }
    pages.push(page);
  }
}
const graph = dependencyLevels(pages, { validateLabels: false });
if (graph.errors.length) throw Error(graph.errors.join('\n'));
const writes = [];
for (const [id, { item }] of graph.items) {
  const level = graph.levels.get(id), source = sources.get(id);
  if (item.dependency_level !== level) {
    changes.push({ item: id, field: 'manifest.dependency_level', before: item.dependency_level, after: level });
    item.dependency_level = level;
  }
  if (source.fm.dependency_level !== level) {
    if (!/^dependency_level: \d+$/m.test(source.before)) throw Error(`Inspect dependency level: ${id}`);
    const after = source.before.replace(/^dependency_level: \d+$/m, `dependency_level: ${level}`);
    writes.push({ file: source.file, before: source.before, after });
    changes.push({ item: id, field: 'source.dependency_level', before: source.fm.dependency_level, after: level });
  }
}
for (const document of documents) {
  let after = JSON.stringify(document.rows, null, 2) + '\n';
  if (document.escaped) after = ascii(after);
  if (after !== document.before) writes.push({ file: document.file, before: document.before, after });
}
for (const row of writes) {
  if (fs.readFileSync(row.file, 'utf8') !== row.before) throw Error(`Concurrent change: ${row.file}`);
  const archive = `${base}/before/${row.file}`;
  if (fs.existsSync(archive)) throw Error(`Archive exists: ${archive}`);
  fs.mkdirSync(path.dirname(archive), { recursive: true });
  fs.writeFileSync(archive, row.before, { flag: 'wx' });
}
for (const row of writes) fs.writeFileSync(row.file, row.after);
fs.mkdirSync(base, { recursive: true });
fs.writeFileSync(`${base}/integration.json`, JSON.stringify({ run, at: new Date().toISOString(), scope: graph.items.size,
  kind: 'Owner metadata reconciliation after genuine native Step2 source repair and review; no new proof approval or native coverage',
  changes, writes: writes.map(({ file, before, after }) => ({ file, before_sha256: sha(before), after_sha256: sha(after) })),
  canonical_plan_changed: false, mathematical_bodies_changed: false }, null, 2) + '\n');
console.log(JSON.stringify({ items: graph.items.size, metadata_fields: changes.length, files: writes.length }));
