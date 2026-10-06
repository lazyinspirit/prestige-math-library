#!/usr/bin/env node
// Explicit owner representation corrections after readers. Historical routing
// remains unchanged: this is not authority for reader deletions or proof drops.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { split, yaml } from './pathway-lib.mjs';
import { loadStep5OwnerCreation } from './auditor-created-items.mjs';
const sha = x => createHash('sha256').update(x).digest('hex');
const safe = x => { if (!/^[a-zA-Z0-9_-]+$/.test(x ?? '')) throw Error('Invalid migration identifier'); return x; };
export const ownerIdMigrationsPath = (root, run) => join(root, 'research', `${safe(run)}-step5-owner-id-migrations.json`);
const read = path => JSON.parse(readFileSync(path, 'utf8'));
function source(root, link, expected) {
  const path = resolve(root, link?.path ?? '');
  if (!link || !/^[a-f0-9]{64}$/.test(link.sha256 ?? '')
    || !realpathSync(path).startsWith(realpathSync(join(root, 'research')) + '/')
    || expected && path !== resolve(root, expected)) throw Error('Invalid migration source path');
  const bytes = readFileSync(path);
  if (sha(bytes) !== link.sha256) throw Error(`Tampered migration source: ${link.path}`);
  return bytes.toString('utf8');
}
const fm = text => yaml().parse(split(text).fm) ?? {};
const statement = text => split(text).body.match(/^## Statement\r?\n+([\s\S]*)/m)?.[1]
  .split(/\r?\n## /)[0].trim();
function validate(root, run, doc) {
  if (doc?.version !== 1 || doc.policy !== 'owner-step5-unproved-orientation-id-migration-v1'
    || doc.run !== run || doc.step !== 5 || doc.owner !== true || doc.owner_identity !== '/root'
    || !Number.isFinite(Date.parse(doc.authorized_at)) || typeof doc.reason !== 'string'
    || doc.reason.trim().length < 40 || !Array.isArray(doc.migrations) || !doc.migrations.length)
    throw Error('Invalid owner Step5 ID migration registry');
  const baseline = JSON.parse(source(root, doc.baseline, `research/${run}-step5-auditor-baseline.json`));
  const all = new Set(), rows = [];
  for (const row of doc.migrations) {
    const { old_id: old, new_id: id, batch, page } = row;
    safe(old); safe(id); safe(batch); safe(page);
    if (all.has(old) || all.has(id) || !/^(prop|thm)-/.test(old) || !id.startsWith('rem-')
      || row.source_only !== true || row.after_readers !== true || !Array.isArray(row.logical_consumers)
      || row.logical_consumers.length || typeof row.exact_statement !== 'string' || !row.exact_statement.trim())
      throw Error('Invalid source-only migration row');
    all.add(old); all.add(id);
    const original = source(root, row.original);
    const before = fm(original);
    if (before.id !== old || before.kind !== (old.startsWith('thm-') ? 'theorem' : 'proposition')
      || before.provenance?.proof !== 'not-supplied' || before.provenance?.statement !== 'literature-derived'
      || before.proved_here === true || before.verification?.precheck !== 'n/a'
      || before.verification?.judge !== undefined || /^## (Proof|Refutation|Verification)\s*$/m.test(split(original).body)
      || statement(original) !== row.exact_statement)
      throw Error(`${old}: original is not the exact unproved orientation claim`);
    const baselineCarrier = baseline.item_carriers?.[old];
    if (baseline.run !== run || baseline.step !== 5 || baselineCarrier?.batch !== String(batch)
      || baselineCarrier?.page !== page || baselineCarrier?.item_file_sha256 !== row.original.sha256)
      throw Error(`${old}: missing original baseline carrier`);
    for (const label of ['pre', 'post']) {
      const snapshot = JSON.parse(source(root, row[`${label}_reader`], `research/${run}-step5-hash-${batch}-${label}.json`));
      if (snapshot.version !== 2 || snapshot.run !== run || String(snapshot.batch) !== String(batch)
        || snapshot.label !== label || !snapshot.manifest?.includes(old) || snapshot.manifest.includes(id)
        || snapshot.hashes?.[old]?.item_sha256 !== row.original.sha256
        || snapshot.hashes[old].manifest_sha256 !== baselineCarrier.manifest_sha256
        || snapshot.hashes[old].contract_sha256 !== baselineCarrier.contract_sha256)
        throw Error(`${old}: migration cannot excuse a reader deletion or changed historical carrier`);
    }
    if (existsSync(join(root, 'items', `${old}.md`))) throw Error(`${old}: old canonical carrier still exists`);
    const currentText = readFileSync(join(root, 'items', `${id}.md`), 'utf8');
    const current = fm(currentText), body = split(currentText).body;
    const oldUrls = (before.sources?.references ?? []).map(x => x.url).filter(Boolean).sort();
    const urls = (current.sources?.references ?? []).map(x => x.url).filter(Boolean).sort();
    if (sha(currentText) !== row.current_item_sha256 || current.id !== id || current.kind !== 'remark'
      || current.pipeline_run !== run || current.proved_here !== false
      || current.provenance?.proof !== 'not-supplied' || current.provenance?.statement !== 'literature-derived'
      || current.verification?.precheck !== 'n/a'
      || current.verification?.judge !== undefined || !current.aliases?.includes(old)
      || /^## (Proof|Refutation|Verification)\s*$/m.test(body)
      || !body.match(/^## Remark\r?\n+([\s\S]*)$/m)?.[1].startsWith(row.exact_statement + '\n\n')
      || current.external_dependency?.exact_statement !== row.exact_statement
      || !oldUrls.length || JSON.stringify(oldUrls) !== JSON.stringify(urls)
      || !urls.includes(current.external_dependency?.source_url)
      || ['local_proof_attempt', 'necessity'].some(k => !current.external_dependency?.[k]?.trim()))
      throw Error(`${id}: lost claim, source, alias or explicit unproved representation`);
    const creation = loadStep5OwnerCreation(root, run, id, row.owner_creation);
    if (!creation || creation.receipt.batch !== String(batch) || creation.receipt.page !== page
      || creation.receipt.carriers.item_file_sha256 !== row.current_item_sha256
      || Date.parse(creation.receipt.attested_at) > Date.parse(doc.authorized_at))
      throw Error(`${id}: invalid migration owner creation origin`);
    const raw = read(join(root, 'research', `${run}-batch-${batch}.pages.json`));
    const pages = Array.isArray(raw) ? raw : raw.pages ?? [];
    const entries = pages.flatMap(p => (p.items ?? []).map(x => ({ page: p.id, item: x })));
    const entry = entries.filter(x => x.item.id === id);
    if (entries.some(x => (x.item.id ?? x.item) === old) || entry.length !== 1 || entry[0].page !== page
      || entry[0].item.kind !== 'remark' || entry[0].item.proved_here !== false
      || entry[0].item.statement !== row.exact_statement || !entry[0].item.aliases?.includes(old))
      throw Error(`${id}: migration manifest does not retain the exact recorded claim/home`);
    rows.push(row);
  }
  // Aliases preserve links, never logical edges. Check actual current callers,
  // not a caller-supplied zero-consumer assertion. Unrelated malformed YAML is
  // outside scope unless its bytes name a migrating ID.
  for (const file of readdirSync(join(root, 'items')).filter(x => x.endsWith('.md'))) {
    const text = readFileSync(join(root, 'items', file), 'utf8');
    if (![...all].some(id => text.includes(id))) continue;
    const item = fm(text), body = split(text).body;
    for (const row of rows) for (const id of [row.old_id, row.new_id]) {
      if (['deps', 'justified_by', 'forward_refs'].some(k => (item[k] ?? []).includes(id)))
        throw Error(`${item.id}: logical consumer of unproved migration ${id}`);
      if (body.includes(`[[${id}`) && !(item.external_refs ?? []).some(x => [row.old_id, row.new_id].includes(x)))
        throw Error(`${item.id}: migration mention must use external_refs`);
      if (item.id !== row.new_id && (item.aliases ?? []).includes(id))
        throw Error(`${id}: ambiguous migration alias`);
    }
  }
  return rows;
}
export function loadOwnerIdMigrations(root, run) {
  const path = ownerIdMigrationsPath(root, run);
  return existsSync(path) ? validate(root, run, read(path)) : [];
}
export function recordOwnerIdMigrations(root, run, evidence) {
  const path = ownerIdMigrationsPath(root, run), doc = read(resolve(root, evidence));
  if (!resolve(root, evidence).startsWith(resolve(root, 'research') + '/')) throw Error('Migration evidence must be in research');
  validate(root, run, doc);
  if (existsSync(path)) {
    if (JSON.stringify(read(path)) !== JSON.stringify(doc)) throw Error('Refusing to replace owner ID migration registry');
    return path;
  }
  writeFileSync(path, JSON.stringify(doc, null, 2) + '\n');
  return path;
}
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const args = process.argv.slice(2), opt = name => args[args.indexOf(name) + 1];
  try {
    if (!['record', 'check'].includes(args[0]) || !args.includes('--run') || !args.includes('--evidence')) throw Error('usage: step5-owner-id-migrations.mjs record|check --run RUN --evidence research/FILE [--root DIR]');
    const root = resolve(args.includes('--root') ? opt('--root') : '.');
    if (args[0] === 'check') console.log(`step5-owner-id-migrations: ${validate(root, opt('--run'), read(resolve(root, opt('--evidence')))).length} valid owner migration(s)`);
    else console.log(recordOwnerIdMigrations(root, opt('--run'), opt('--evidence')));
  } catch (cause) { console.error(`step5-owner-id-migrations: ${cause.message}`); process.exitCode = 1; }
}
