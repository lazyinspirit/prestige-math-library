#!/usr/bin/env node
// Exact historical dependency evidence after an explicitly reviewed proof repair.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { split, yaml } from './pathway-lib.mjs';
import { itemHashGuard } from './item-hash.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const safe = value => { if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid historical route identifier'); return value; };
const sorted = value => Array.isArray(value) ? value.map(sorted) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(k => [k, sorted(value[k])])) : value;
export const historicalFindingHash = finding => sha(JSON.stringify(sorted(finding)));
export const ownerHistoricalRoutesPath = (root, run) => join(root, 'research', `${safe(run)}-step5-owner-historical-inrun-routes.json`);
const read = path => JSON.parse(readFileSync(path, 'utf8'));
function source(root, link, expected) {
  const path = resolve(root, link?.path ?? '');
  if (!link || !/^[a-f0-9]{64}$/.test(link.sha256 ?? '')
    || !realpathSync(path).startsWith(realpathSync(join(root, 'research')) + '/')
    || expected && path !== resolve(root, expected)) throw Error('Invalid historical route source path');
  const bytes = readFileSync(path);
  if (sha(bytes) !== link.sha256) throw Error(`Tampered historical route source: ${link.path}`);
  return bytes.toString('utf8');
}
function owners(root, run) {
  const result = new Map();
  for (const name of readdirSync(join(root, 'research'))) {
    const match = name.match(new RegExp(`^${safe(run)}-batch-(\\d+)\\.pages\\.json$`));
    if (!match) continue;
    const doc = read(join(root, 'research', name)), pages = Array.isArray(doc) ? doc : doc.pages ?? [];
    for (const page of pages) for (const item of page.items ?? []) {
      const id = typeof item === 'string' ? item : item.id;
      result.set(id, [...(result.get(id) ?? []), match[1]]);
    }
  }
  return result;
}
function snapshot(root, run, batch, label, link) {
  const doc = JSON.parse(source(root, link, `research/${run}-step5-hash-${batch}-${label}.json`));
  if (doc.version !== 2 || doc.run !== run || String(doc.batch) !== batch || doc.label !== label || !Array.isArray(doc.manifest))
    throw Error('Invalid historical route snapshot identity');
  return doc;
}
export function validateOwnerHistoricalRoutes(root, run, doc) {
  if (doc?.version !== 1 || doc.policy !== 'owner-step5-historical-inrun-route-v1' || doc.run !== run || doc.step !== 5
    || doc.owner !== true || doc.owner_identity !== '/root' || !Number.isFinite(Date.parse(doc.at))
    || !String(doc.reason ?? '').trim() || !Array.isArray(doc.routes) || !doc.routes.length)
    throw Error('Invalid owner historical in-run route registry');
  const homes = owners(root, run), used = new Set(), routes = [];
  for (const row of doc.routes) {
    const batch = String(row.batch); safe(batch);
    if (!new RegExp(`^(reader|refuter):${batch}:[a-zA-Z0-9_-]+$`).test(row.obligation) || used.has(row.obligation))
      throw Error('Invalid or duplicate historical route obligation');
    used.add(row.obligation);
    const scope = read(join(root, 'research', `${run}-step5-scope-${batch}.json`));
    const findings = [...(scope.reader_findings ?? []), ...(scope.refuter_findings ?? [])].filter(f => f.obligation === row.obligation);
    if (scope.run !== run || findings.length !== 1) throw Error('Missing exact historical scope finding');
    const finding = findings[0], producer = String(finding.producer_batch);
    safe(producer); safe(finding.id); safe(finding.consumer_id);
    if (finding.subject_type !== 'in-run-dependency' || producer === batch || historicalFindingHash(finding) !== row.finding_sha256)
      throw Error('Historical finding identity/path changed');
    for (const [kind, filename, key] of [['reader', `reader-findings-${batch}`, 'reader_report_sha256'], ['refuter', `refute-${batch}`, 'refuter_report_sha256']]) {
      if (row[`${kind}_report`]?.sha256 !== scope[key]) throw Error('Historical report disagrees with scope');
      source(root, row[`${kind}_report`], `research/${run}-${filename}.json`);
    }
    const pre = snapshot(root, run, batch, 'pre', row.consumer_pre_snapshot);
    const post = snapshot(root, run, batch, 'post', row.consumer_post_snapshot);
    if (!pre.manifest.includes(finding.consumer_id) || !post.manifest.includes(finding.consumer_id)
      || !scope.manifest_post?.includes(finding.consumer_id)) throw Error('Historical consumer was not assigned to this batch');
    const historical = snapshot(root, run, producer, 'pre', row.producer_pre_snapshot);
    if (historicalFindingHash(row.producer_pre_snapshot) !== historicalFindingHash({ path: finding.producer_pre_snapshot?.path, sha256: finding.producer_pre_snapshot?.sha256 })
      || historicalFindingHash(finding.producer_pre_snapshot?.carrier) !== historicalFindingHash({ producer_batch: producer, ...historical.hashes?.[finding.id] }))
      throw Error('Original producer pre-reader identity changed');
    if (homes.get(finding.id)?.length !== 1 || homes.get(finding.id)[0] !== producer
      || homes.get(finding.consumer_id)?.length !== 1 || homes.get(finding.consumer_id)[0] !== batch)
      throw Error('Historical route producer/consumer home changed or ambiguous');
    const producerText = readFileSync(join(root, 'items', `${finding.id}.md`), 'utf8');
    const producerItem = yaml().parse(split(producerText).fm) ?? {};
    if (producerItem.status !== 'draft' || producerItem.pipeline_run !== undefined && producerItem.pipeline_run !== run)
      throw Error('Historical producer is not an exact current-run draft');
    const current = readFileSync(join(root, 'items', `${finding.consumer_id}.md`), 'utf8');
    if (row.current_proof_review?.owner !== true || row.current_proof_review.removed_edges_reviewed !== true
      || row.current_proof_review.no_unresolved_scope_dependency !== true
      || row.current_proof_review.consumer_guard_sha256 !== itemHashGuard(current)) throw Error('Missing current owner proof review');
    const review = source(root, row.review);
    if (![run, row.obligation, finding.id, finding.consumer_id, row.current_proof_review.consumer_guard_sha256]
      .every(value => review.includes(value))) throw Error('Owner review does not bind this exact current historical route');
    const path = finding.dependency_path;
    if (!Array.isArray(path) || path.length < 2 || path[0]?.id !== finding.consumer_id || path.at(-1)?.id !== finding.id
      || new Set(path.map(n => n.id)).size !== path.length || !Array.isArray(row.sources) || row.sources.length !== path.length)
      throw Error('Invalid complete historical dependency path');
    const nodes = path.map((node, index) => {
      safe(node.id);
      const link = row.sources[index];
      if (link?.id !== node.id || link.sha256 !== node.item_sha256) throw Error('Archived source differs from frozen dependency path');
      const fm = yaml().parse(split(source(root, link)).fm) ?? {};
      if (fm.id !== node.id) throw Error('Archived source item identity differs');
      return fm;
    });
    for (let i = 0; i < nodes.length - 1; i++) {
      const edges = [...(Array.isArray(nodes[i].deps) ? nodes[i].deps : []), ...(Array.isArray(nodes[i].justified_by) ? nodes[i].justified_by : [])];
      if (!edges.includes(path[i + 1].id)) throw Error('Archived source lacks an actual dependency path leg');
    }
    routes.push({ batch, finding });
  }
  return routes;
}
export function loadOwnerHistoricalRoutes(root, run) {
  const path = ownerHistoricalRoutesPath(root, run);
  return existsSync(path) ? validateOwnerHistoricalRoutes(root, run, read(path)) : [];
}
export function recordOwnerHistoricalRoutes(root, run, evidence) {
  const path = ownerHistoricalRoutesPath(root, run);
  const doc = JSON.parse(source(root, { path: evidence, sha256: sha(readFileSync(resolve(root, evidence))) }));
  validateOwnerHistoricalRoutes(root, run, doc);
  if (existsSync(path)) {
    if (historicalFindingHash(read(path)) !== historicalFindingHash(doc)) throw Error('Refusing to replace immutable historical route registry');
    return { path, reused: true };
  }
  writeFileSync(path, JSON.stringify(doc, null, 2) + '\n', { flag: 'wx', mode: 0o444 });
  return { path, reused: false };
}
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const args = process.argv.slice(2), opt = name => args[args.indexOf(name) + 1];
  try {
    if (!['record', 'check'].includes(args[0]) || !args.includes('--run') || !args.includes('--evidence'))
      throw Error('usage: step5-owner-historical-routes.mjs record|check --run RUN --evidence research/FILE [--root DIR]');
    const root = resolve(args.includes('--root') ? opt('--root') : '.');
    if (args[0] === 'check') console.log(`step5-owner-historical-routes: ${validateOwnerHistoricalRoutes(root, opt('--run'), read(resolve(root, opt('--evidence')))).length} valid route(s)`);
    else console.log(JSON.stringify(recordOwnerHistoricalRoutes(root, opt('--run'), opt('--evidence'))));
  } catch (cause) { console.error(`step5-owner-historical-routes: ${cause.message}`); process.exitCode = 1; }
}
