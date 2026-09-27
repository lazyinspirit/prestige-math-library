#!/usr/bin/env node
// Proposed Step-3 published-audit batch stamper. Default mode is READ ONLY.
// The owner may use --apply only with an exact reviewed manifest hash, after
// every content writer drains. No judge or source-check stamp is written here.

import { readFileSync, readdirSync, writeFileSync, renameSync, unlinkSync } from 'node:fs';
import { join, resolve, relative, sep } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { yaml } from '../tools/pathway-lib.mjs';
import { itemHashGuard } from '../tools/item-hash.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
const option = name => {
  const i = args.indexOf(name);
  return i < 0 ? undefined : args[i + 1];
};
const has = name => args.includes(name);
const fail = message => { throw new Error(message); };
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const hex64 = value => typeof value === 'string' && /^[0-9a-f]{64}$/.test(value);
const idShape = value => typeof value === 'string' && /^(?:cex|cor|def|ex|fs|lem|prop|rem|thm)-[a-z0-9-]+$/.test(value);
const safePath = value => {
  if (typeof value !== 'string' || !value.startsWith('research/')) fail(`unsafe evidence path ${String(value)}`);
  const full = resolve(ROOT, value);
  if (!relative(ROOT, full) || relative(ROOT, full).startsWith('..' + sep)) fail(`evidence path leaves repository: ${value}`);
  return full;
};
const parts = source => {
  const m = /^(---\r?\n)([\s\S]*?)(\r?\n---\r?\n?)([\s\S]*)$/.exec(source);
  if (!m) fail('item has no standard frontmatter');
  return m;
};
const parseItem = (source, path) => {
  try { return yaml().parse(parts(source)[2]) ?? {}; }
  catch (error) { fail(`${path}: invalid YAML: ${error.message}`); }
};
const quote = value => JSON.stringify(value);

function propose(source, record) {
  const m = parts(source);
  const lines = m[2].split('\n');
  const i = lines.findIndex(line => /^verification:/.test(line));
  const child = record.field === 'audited'
    ? [`  audited: ${record.date}`]
    : [
        '  verified:',
        `    model: ${quote(record.model)}`,
        `    verdict: ${quote(record.verdict)}`,
        `    date: ${record.date}`,
        `    scope: ${quote(record.scope)}`,
        `    delegated_by: ${quote(record.delegated_by)}`,
      ];
  if (i < 0) {
    // Inserting at the very end leaves a stray blank line when the repository's
    // stripVerification helper removes this block. Put it before an existing
    // top-level key so the guard hash is exactly invariant.
    const sourceAt = lines.findIndex(line => /^sources:/.test(line));
    const topLevels = lines.map((line, index) => /^[A-Za-z_][A-Za-z0-9_-]*:/.test(line) ? index : -1).filter(index => index >= 0);
    const at = sourceAt >= 0 ? sourceAt : topLevels.at(-1);
    if (at === undefined) fail(`${record.id}: no top-level insertion point`);
    lines.splice(at, 0, 'verification:', ...child);
  }
  else if (lines[i] === 'verification: {}' || lines[i] === 'verification:') {
    if (lines[i] === 'verification: {}') lines[i] = 'verification:';
    let end = i + 1;
    while (end < lines.length && (lines[end].startsWith(' ') || lines[end].startsWith('\t') || lines[end] === '')) end++;
    lines.splice(end, 0, ...child);
  } else fail(`${record.id}: unsupported inline verification shape; inspect manually`);
  return m[1] + lines.join('\n') + m[3] + m[4];
}

function currentUnaudited() {
  const set = new Set();
  for (const name of readdirSync(join(ROOT, 'items')).filter(x => x.endsWith('.md'))) {
    const path = join(ROOT, 'items', name);
    const parsed = parseItem(readFileSync(path, 'utf8'), path);
    if (parsed.status !== 'published' || parsed.proved_here === false) continue;
    const v = parsed.verification ?? {};
    if (!v.audited && !v.verified) set.add(parsed.id);
  }
  return set;
}

function checkEvidence(record) {
  if (!Array.isArray(record.evidence) || !record.evidence.length) fail(`${record.id}: no evidence files`);
  let joined = '';
  for (const [index, entry] of record.evidence.entries()) {
    if (!hex64(entry.sha256)) fail(`${record.id}: invalid evidence SHA-256`);
    const path = safePath(entry.path);
    const bytes = readFileSync(path);
    if (digest(bytes) !== entry.sha256) fail(`${record.id}: evidence changed: ${entry.path}`);
    const body = bytes.toString('utf8');
    if (index === 0 && !body.includes(record.id) && !body.includes(record.raw_sha256))
      fail(`${record.id}: primary review evidence has neither item ID nor exact raw hash`);
    joined += body + '\n';
  }
  if (!joined.includes(record.id) || !joined.includes(record.raw_sha256))
    fail(`${record.id}: evidence set lacks exact ID or current raw SHA-256`);
}

function checkRecord(record, ledger) {
  if (!idShape(record.id) || !hex64(record.raw_sha256)) fail(`invalid item ID/hash: ${JSON.stringify(record)}`);
  if (!['audited', 'verified'].includes(record.field)) fail(`${record.id}: unknown field`);
  if (!['positive', 'pending-phase-3'].includes(record.audit_status)) fail(`${record.id}: unknown audit status`);
  if (!/^20\d\d-\d\d-\d\d$/.test(record.date)) fail(`${record.id}: invalid audit date`);
  if (record.field === 'verified') {
    if (record.audit_status !== 'positive') fail(`${record.id}: A-P pending cannot receive a positive delegated verdict`);
    for (const key of ['model', 'verdict', 'scope', 'delegated_by'])
      if (typeof record[key] !== 'string' || !record[key].trim()) fail(`${record.id}: missing ${key}`);
    if (record.delegated_by !== 'owner') fail(`${record.id}: delegated_by must identify the owner`);
    if (record.verdict !== 'locally-reviewed') fail(`${record.id}: use the bounded locally-reviewed verdict`);
    if (record.reviewer_role !== 'independent-delegate') fail(`${record.id}: independent delegate provenance absent`);
    const scope = record.scope.toLowerCase();
    if (!scope.includes('item-local') || !scope.includes('no whole-closure') || !scope.includes('no new judge'))
      fail(`${record.id}: delegated scope must state local review and disclaim whole-closure/judge certification`);
  } else {
    if (record.reviewer_role !== 'owner' || typeof record.audit_scope !== 'string' || !record.audit_scope.trim())
      fail(`${record.id}: scalar audited stamp requires a documented owner read/scope`);
  }
  if (record.audit_status === 'pending-phase-3') {
    if (record.field !== 'audited' || record.ledger_disposition !== 'A-P' ||
        typeof record.pending_reason !== 'string' || !record.pending_reason.trim())
      fail(`${record.id}: pending proof requires owner audit, A-P ledger and exact open obligation`);
    const row = ledger.split('\n').find(line => line.startsWith(`| \`${record.id}\` |`) && line.includes('A-P'));
    if (!row) fail(`${record.id}: no canonical A-P ledger row`);
  }
  checkEvidence(record);
}

const manifestArg = option('--manifest');
if (!manifestArg) fail('usage: node research/frontier-35-ten-categories-proposed-audit-stamper-20260926.mjs --manifest <research/manifest.json> [--apply --confirm-manifest-sha256 <digest>]');
const manifestPath = safePath(manifestArg);
const manifestBytes = readFileSync(manifestPath);
const manifestSha256 = digest(manifestBytes);
const manifest = JSON.parse(manifestBytes.toString('utf8'));
if (manifest.schema !== 'published-audit-stamps/v1' || !Array.isArray(manifest.records)) fail('invalid manifest schema');
const ledger = readFileSync(join(ROOT, 'research/published-consumer-supplier-ledger.md'), 'utf8');
const current = currentUnaudited();
const seen = new Set();
const proposed = [];
const counts = { verified: 0, audited: 0, pendingPhase3: 0 };
for (const record of manifest.records) {
  if (seen.has(record.id)) fail(`${record.id}: duplicate manifest entry`);
  seen.add(record.id);
  checkRecord(record, ledger);
  const path = join(ROOT, 'items', `${record.id}.md`);
  const before = readFileSync(path, 'utf8');
  if (digest(Buffer.from(before)) !== record.raw_sha256) fail(`${record.id}: raw pre-stamp hash changed`);
  const parsedBefore = parseItem(before, path);
  if (parsedBefore.id !== record.id || parsedBefore.status !== 'published' || parsedBefore.proved_here === false)
    fail(`${record.id}: not a proved-here published item`);
  const v = parsedBefore.verification ?? {};
  if (v.audited || v.verified || v.sources_checked) fail(`${record.id}: existing or incompatible verification field`);
  const after = propose(before, record);
  const parsedAfter = parseItem(after, path);
  const afterV = parsedAfter.verification ?? {};
  if (record.field === 'audited' ? afterV.audited !== record.date :
      afterV.verified?.model !== record.model || afterV.verified?.verdict !== record.verdict ||
      afterV.verified?.date !== record.date || afterV.verified?.scope !== record.scope ||
      afterV.verified?.delegated_by !== record.delegated_by)
    fail(`${record.id}: proposed verification YAML does not parse as intended`);
  delete parsedBefore.verification;
  delete parsedAfter.verification;
  if (JSON.stringify(parsedBefore) !== JSON.stringify(parsedAfter)) fail(`${record.id}: non-verification YAML changed`);
  if (itemHashGuard(before) !== itemHashGuard(after)) fail(`${record.id}: mathematical guard hash changed`);
  proposed.push({ id: record.id, path, before, after, beforeSha256: record.raw_sha256,
    afterSha256: digest(Buffer.from(after)), guardSha256: itemHashGuard(after), field: record.field });
  counts[record.field]++;
  if (record.audit_status === 'pending-phase-3') counts.pendingPhase3++;
}
const missing = [...current].filter(id => !seen.has(id)).sort();
const excess = [...seen].filter(id => !current.has(id)).sort();
const summary = { manifest: manifestArg, manifestSha256, currentUnaudited: current.size,
  proposed: proposed.length, counts, missing, excess,
  stamps: proposed.map(({ id, beforeSha256, afterSha256, guardSha256, field }) =>
    ({ id, field, beforeSha256, afterSha256, guardSha256 })) };
if (excess.length) fail(`manifest includes ${excess.length} items outside current unaudited set: ${excess.join(', ')}`);
if (has('--apply')) {
  if (manifest.ready_for_apply !== true || manifest.model_attribution_confirmed !== true)
    fail('apply requires owner-reviewed ready_for_apply and model_attribution_confirmed flags in the manifest');
  if (option('--confirm-manifest-sha256') !== manifestSha256) fail('apply requires the exact reviewed manifest SHA-256');
  if (missing.length) fail(`apply requires complete current unaudited coverage; ${missing.length} IDs missing`);
  const changed = [];
  try {
    for (const row of proposed) {
      if (digest(readFileSync(row.path)) !== row.beforeSha256) fail(`${row.id}: changed after preflight`);
      const tmp = `${row.path}.audit-stamp-tmp`;
      writeFileSync(tmp, row.after);
      renameSync(tmp, row.path);
      changed.push(row);
    }
  } catch (error) {
    for (const row of changed.reverse()) writeFileSync(row.path, row.before);
    for (const row of proposed) { try { unlinkSync(`${row.path}.audit-stamp-tmp`); } catch { /* absent */ } }
    throw error;
  }
  summary.applied = true;
} else summary.applied = false;
console.log(JSON.stringify(summary, null, 2));
