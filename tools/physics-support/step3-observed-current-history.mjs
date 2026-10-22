// Preserve an actual reader's once-current observation after a concurrent repair.
// This authenticates evidence only; ordinary ownership, routing and review stay owed.
import { existsSync, lstatSync, readFileSync, realpathSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as same } from 'node:util';
import { split, yaml } from './pathway-lib.mjs';
const sha = value => createHash('sha256').update(value).digest('hex');
const need = (ok, why) => { if (!ok) throw Error(`observed-current history: ${why}`); };
const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Pure recovery aid: retain logged numbered lines plus a proposed unchanged
 * prefix ONLY if the complete bytes reproduce the independently logged digest.
 * It writes nothing and does not authorize a route or certify source content. */
export function recoverLoggedSource(log, prefixSource, id, first, last, expected) {
  log = String(log); prefixSource = String(prefixSource);
  need(/^[a-z][a-z0-9-]*$/.test(id) && /^[a-f0-9]{64}$/.test(expected)
    && Number.isSafeInteger(first) && first >= 1 && Number.isSafeInteger(last) && last >= first,
  'invalid recovery coordinates');
  need(new RegExp(`^${expected}  items/${escape(id)}\\.md$`, 'm').test(log), 'no exact logged source digest');
  const lines = log.split(/\r?\n/), matches = new Map();
  for (let at = 0; at < lines.length; at++) {
    const body = [];
    for (let n = first; n <= last; n++) {
      const m = lines[at + n - first]?.match(/^\s*(\d+)\t(.*)$/);
      if (!m || Number(m[1]) !== n) break;
      body.push(m[2] + '\n');
    }
    if (body.length !== last - first + 1) continue;
    const raw = prefixSource.split(/(?<=\n)/).slice(0, first - 1).join('') + body.join('');
    if (sha(raw) === expected) matches.set(raw, raw);
  }
  need(matches.size === 1, 'no unique exact raw preimage recovered');
  return [...matches.values()][0];
}

export function observedCurrentHistory(root, run, batch, finding, dependencies, { atSplit = false } = {}) {
  root = resolve(root); batch = String(batch);
  const name = `research/${run}-step3-observed-current-history-${batch}.json`;
  if (!existsSync(resolve(root, name))) return null;
  const regular = path => {
    need(typeof path === 'string', 'missing path');
    const full = resolve(root, path);
    need(!relative(root, full).startsWith('..') && lstatSync(full).isFile() && realpathSync(full) === full,
      'nonregular or outside evidence');
    return readFileSync(full);
  };
  const authorityBytes = regular(name), auth = JSON.parse(authorityBytes);
  need(auth.version === 1 && auth.run === run && String(auth.batch) === batch
    && auth.authorized_by === '/root' && auth.kind === 'observed-current-history'
    && auth.mathematical_acceptance === false && auth.edit_permission === false
    && auth.original_obligation_owed === true && typeof auth.reason === 'string' && auth.reason.trim().length >= 40
    && Array.isArray(auth.findings) && auth.findings.length
    && new Set(auth.findings.map(row => row.finding_index)).size === auth.findings.length, 'invalid exact owner authority');
  const index = Number(finding.obligation?.match(new RegExp(`^reader:${escape(batch)}:(\\d+)$`))?.[1]);
  const entry = auth.findings.find(row => row.finding_index === index);
  if (!entry) return null;
  const bound = ref => {
    need(typeof ref?.path === 'string' && ref.path.startsWith(`research/${run}-`)
      && !ref.path.split('/').includes('..') && /^[a-f0-9]{64}$/.test(ref.sha256 ?? ''), 'invalid evidence binding');
    need(auth.inputs?.[ref.path] === ref.sha256, 'evidence absent from gate input bindings');
    const bytes = regular(ref.path); need(sha(bytes) === ref.sha256, `changed evidence ${ref.path}`); return bytes;
  };
  const reportBytes = bound(auth.original_report), report = JSON.parse(reportBytes);
  need(same(reportBytes, regular(`research/${run}-reader-findings-${batch}.json`)), 'original report bytes changed');
  const original = report.findings?.[index - 1];
  const nativeFields = ['id', 'subject_type', 'consumer_id', 'observed_source', 'location', 'defect', 'evidence', 'severity'];
  need(Number.isSafeInteger(index) && index > 0 && same(entry.original_finding, original)
    && same(original, Object.fromEntries(nativeFields.map(key => [key, finding[key]]))), 'native finding substitution');
  need(original.subject_type === 'in-run-dependency' && original.observed_source?.snapshot === 'current'
    && /^[a-f0-9]{64}$/.test(original.observed_source.item_sha256 ?? ''), 'not an exact observed-current finding');
  need(auth.native_receipt?.path === `research/${run}-dispatch/reader-reader-${batch}.result.json`, 'wrong native receipt');
  const receiptBytes = bound(auth.native_receipt), receipt = JSON.parse(receiptBytes);
  need(same(receiptBytes, bound(auth.native_receipt_archive)), 'receipt archive differs');
  need(receipt.run === run && receipt.role === 'reader' && receipt.label === `reader-${batch}`
    && same(receipt.covers?.map(String), [batch]) && Number.isSafeInteger(receipt.attempt) && receipt.attempt > 0
    && receipt.evidence_tag === `.attempt-${receipt.attempt}` && receipt.ok === true
    && receipt.exit_code === 0 && receipt.process_exit_code === 0 && receipt.timed_out === false
    && Number.isFinite(Date.parse(receipt.ended_at)), 'native reader did not genuinely finish');
  const stem = `research/${run}-dispatch/reader-reader-${batch}.attempt-${receipt.attempt}`;
  need(auth.native_log?.path === `${stem}.log` && auth.original_last_message?.path === `${stem}.last-message.json`, 'wrong attempt evidence');
  // This bounded route requires a complete native tail, not an owner assertion
  // that clipped diagnostics attest an otherwise unbound report.
  need(same(JSON.parse(receipt.tail), report) && same(JSON.parse(bound(auth.original_last_message)), report), 'native report differs');
  const log = bound(auth.native_log).toString(), oldBytes = bound(entry.observed_source), old = original.observed_source.item_sha256;
  need(sha(oldBytes) === old && new RegExp(`^${old}  items/${escape(original.id)}\\.md$`, 'm').test(log), 'raw preimage lacks native digest evidence');
  need(Array.isArray(entry.logged_excerpts) && entry.logged_excerpts.length > 0
    && entry.logged_excerpts.every(text => typeof text === 'string' && text.length >= 30
      && oldBytes.toString().includes(text) && log.includes(text)), 'no actual logged source excerpts');
  const route = dependencies.get(original.id), path = route?.consumers.get(original.consumer_id);
  need(route && path && String(route.producer_batch) === String(entry.producer_batch)
    && String(route.producer_batch) !== batch, 'no ordinary current owner/reachability route');
  const metadata = yaml().parse(split(oldBytes.toString()).fm);
  need(metadata?.id === original.id && metadata.status === 'draft'
    && (!metadata.pipeline_run || metadata.pipeline_run === run), 'wrong observed source identity/run');
  const currentAtSplit = bound(entry.current_source_at_split);
  need(sha(currentAtSplit) !== old && yaml().parse(split(currentAtSplit.toString()).fm)?.id === original.id, 'not a distinct same-item replacement');
  if (atSplit) need(same(currentAtSplit, regular(`items/${original.id}.md`)), 'current split source changed');
  return { authority: { path: name, sha256: sha(authorityBytes) }, finding_index: index,
    observed_source: entry.observed_source, current_source_at_split: entry.current_source_at_split,
    observed_carrier: { producer_batch: String(route.producer_batch), item_sha256: old } };
}
