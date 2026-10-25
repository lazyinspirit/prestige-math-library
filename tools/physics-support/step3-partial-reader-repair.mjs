// Exact Root routing of an original finding left open by a proof-only reader repair.
// This authenticates history; it grants no source edit or mathematical acceptance.
import { existsSync, readFileSync, lstatSync, realpathSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as same } from 'node:util';
import { split, yaml } from './pathway-lib.mjs';
const sha = b => createHash('sha256').update(b).digest('hex');
const canonical = v => Array.isArray(v) ? v.map(canonical) : v && typeof v === 'object'
  ? Object.fromEntries(Object.keys(v).sort().map(k => [k, canonical(v[k])])) : v;
const hash = v => sha(JSON.stringify(canonical(v)));
const findingHash = f => hash(Object.fromEntries(['id', 'location', 'defect', 'evidence', 'severity', 'subject_type', 'consumer_id'].map(k => [k, k === 'consumer_id' ? f[k] ?? null : f[k]])));
const need = (ok, why) => { if (!ok) throw Error(`partial reader repair: ${why}`); };
function nonproof(raw) {
  const text = raw.toString(), starts = [...text.matchAll(/^## Proof[ \t]*\r?$/gm)];
  need(starts.length === 1, 'requires one existing Proof section');
  const start = starts[0].index, tail = text.slice(start + starts[0][0].length);
  const end = /^## /m.exec(tail);
  return [text.slice(0, start), end ? tail.slice(end.index) : ''];
}
export function partialReaderRepairs(root, run, batch, report, manifests, { atSplit = false } = {}) {
  const name = `research/${run}-step3-partial-reader-repair-${batch}.json`;
  if (!existsSync(resolve(root, name))) return new Map();
  const regular = path => {
    need(typeof path === 'string' && !path.includes('\\') && !path.split('/').some(p => p === '..'), 'unsafe path');
    const full = resolve(root, path), rel = relative(resolve(root), full);
    need(rel && !rel.startsWith('..') && lstatSync(full).isFile() && realpathSync(full) === full, 'nonregular/outside evidence');
    return readFileSync(full);
  };
  const bytes = regular(name), auth = JSON.parse(bytes);
  need(auth.version === 1 && auth.run === run && auth.batch === batch && auth.authorized_by === '/root'
    && auth.kind === 'same-batch-proof-only-partial-reader-repair' && auth.mathematical_acceptance === false
    && auth.edit_permission === false && typeof auth.reason === 'string' && auth.reason.trim().length >= 80,
  'missing exact Root routing authority');
  const bound = (r, expected) => {
    need(r && typeof r.path === 'string' && r.path.startsWith('research/') && (!expected || r.path === expected)
      && /^[a-f0-9]{64}$/.test(r.sha256 ?? '') && auth.inputs?.[r.path] === r.sha256, 'invalid or unlisted evidence');
    const b = regular(r.path); need(sha(b) === r.sha256, `stale evidence ${r.path}`); return b;
  };
  const prefix = `research/${run}-dispatch/reader-reader-${batch}`;
  const nativeBytes = bound(auth.native_receipt, `${prefix}.result.json`), native = JSON.parse(nativeBytes);
  need(Number.isSafeInteger(native.attempt) && native.attempt > 0 && native.evidence_tag === `.attempt-${native.attempt}`
    && native.run === run && native.role === 'reader' && native.label === `reader-${batch}`
    && same(native.covers?.map(String), [batch]) && native.ok === true && native.exit_code === 0
    && native.process_exit_code === 0 && native.timed_out === false && Number.isFinite(Date.parse(native.ended_at)),
  'reader did not genuinely complete');
  const attempt = `${prefix}.attempt-${native.attempt}`;
  need(same(nativeBytes, bound(auth.native_attempt, `${attempt}.result.json`)), 'immutable attempt differs');
  need(bound(auth.native_prompt, `${attempt}.prompt.md`).toString().trim()
    && native.prompt?.endsWith('/' + auth.native_prompt.path), 'wrong native prompt');
  const findingsBytes = bound(auth.original_findings, `research/${run}-reader-findings-${batch}.json`);
  need(same(JSON.parse(findingsBytes), report)
    && same(JSON.parse(bound(auth.native_last_message, `${attempt}.last-message.json`)), report), 'changed original final findings');
  let tail; try { tail = JSON.parse(native.tail); } catch { /* Native diagnostics may retain only a suffix. */ }
  need(tail !== undefined ? same(tail, report) : typeof native.tail === 'string' && native.tail.trimEnd().length >= 256
    && bound(auth.native_last_message).toString().trimEnd().endsWith(native.tail.trimEnd()), 'native final diagnostics differ');
  bound(auth.reader_report, `research/${run}-reader-${batch}.md`);
  bound(auth.review);
  const snapshots = ['pre', 'post'].map(label => {
    const s = JSON.parse(bound(auth[`${label}_snapshot`], `research/${run}-step3-hash-${batch}-${label}.json`));
    need(s.version === 2 && s.run === run && String(s.batch) === batch && s.label === label
      && Array.isArray(s.manifest) && new Set(s.manifest).size === s.manifest.length, 'wrong native snapshot');
    return s;
  });
  const manifest = JSON.parse(bound(auth.manifest)), pages = Array.isArray(manifest) ? manifest : manifest.pages ?? [];
  const contracts = ['before', 'after'].map(label => JSON.parse(bound(auth[`${label}_contracts`])).contracts);
  const result = new Map();
  need(Array.isArray(auth.findings) && auth.findings.length > 0, 'empty authorization');
  for (const row of auth.findings) {
    const index = row.finding_index, original = report.findings?.[index - 1], id = original?.id;
    need(Number.isSafeInteger(index) && index > 0 && !result.has(index) && same(original, row.original_finding)
      && /^[a-z][a-z0-9-]*$/.test(id ?? '') && original.subject_type === 'in-flight-item'
      && original.consumer_id == null && original.observed_source == null, 'wrong original finding');
    need(same(Object.entries(manifests).filter(([, ids]) => ids.includes(id)).map(([b]) => b), [batch]), 'not unique same-batch ownership');
    const before = bound(row.before_source), after = bound(row.after_source);
    const fms = [before, after, regular(`items/${id}.md`)].map(b => yaml().parse(split(b.toString()).fm));
    need(fms.every(fm => fm?.id === id && fm.status === 'draft' && (!fm.pipeline_run || fm.pipeline_run === run)
      && fm.domain === 'mathematics'), 'not own-run draft mathematics');
    need(sha(before) !== sha(after) && same(nonproof(before), nonproof(after)), 'not a proof-only repair');
    need(/^## (?:Statement|Definition)[ \t]*\r?$/m.test(split(before.toString()).body), 'missing public claim');
    const rows = pages.flatMap(page => (page.items ?? []).map(item => ({ page: page.id, item: typeof item === 'string' ? { id: item } : item })))
      .filter(r => r.item.id === id);
    need(rows.length === 1, 'ambiguous archived manifest');
    for (const [i, source] of [before, after].entries()) {
      const carrier = snapshots[i].hashes?.[id];
      need(snapshots[i].manifest.includes(id) && contracts[i]?.[id]
        && carrier?.item_sha256 === sha(source) && carrier.contract_sha256 === hash(contracts[i][id])
        && carrier.manifest_sha256 === hash({ ...rows[0].item, __step4_page_id: String(rows[0].page) }), 'native source/contract/manifest mismatch');
    }
    if (atSplit) {
      need(same(regular(`items/${id}.md`), after), 'current source differs from native post');
      const current = JSON.parse(regular(`research/${run}-batch-${batch}.proof-contracts.json`));
      need(hash(current.contracts?.[id]) === snapshots[1].hashes[id].contract_sha256
        && same(regular(`research/${run}-batch-${batch}.pages.json`), bound(auth.manifest)), 'current contract/manifest differs from native post');
    }
    result.set(index, { authority: { path: name, sha256: sha(bytes) }, finding_index: index,
      original_reader_observation: 'unbound', original_finding_sha256: findingHash(original), post_carrier_sha256: hash(snapshots[1].hashes[id]) });
  }
  return result;
}

export function validatePartialReaderBindings(scope, routes) {
  const seen = new Set();
  for (const finding of scope.reader_findings ?? []) {
    const index = Number(finding.obligation?.split(':').at(-1)), route = routes.get(index);
    if (route || finding.partial_reader_repair) {
      need(route && same(finding.partial_reader_repair, route) && findingHash(finding) === route.original_finding_sha256 && finding.observed_sha256 === route.post_carrier_sha256
        && scope.touched?.includes(finding.id) && scope.refuter_scope?.includes(finding.id), 'lost exact routed authority or coverage');
      seen.add(index);
    }
  }
  need(seen.size === routes.size, 'lost original routed obligation');
}
