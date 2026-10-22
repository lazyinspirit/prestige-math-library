// Root-authorized routing metadata. Original reader observations are never rewritten.
import { existsSync, readFileSync, lstatSync, realpathSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as same } from 'node:util';
import { split, yaml } from './pathway-lib.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const check = (ok, why) => { if (!ok) throw Error(`downstream handoff: ${why}`); };
export function downstreamHandoffs(root, run, batch, report, manifests, { atSplit = false } = {}) {
  const name = `research/${run}-step3-downstream-handoff-${batch}.json`;
  if (!existsSync(resolve(root, name))) return new Map();
  const regular = path => {
    const full = resolve(root, path);
    check(typeof path === 'string' && !relative(root, full).startsWith('..')
      && lstatSync(full).isFile() && realpathSync(full) === full, 'nonregular/outside binding');
    return readFileSync(full);
  };
  const bytes = regular(name), auth = JSON.parse(bytes), hash = sha(bytes);
  check(auth.version === 1 && auth.run === run && String(auth.batch) === batch
    && auth.authorized_by === '/root' && auth.kind === 'downstream-in-run-consumer'
    && typeof auth.reason === 'string' && auth.reason.trim().length >= 40, 'missing exact Root authority');
  const bound = binding => {
    check(binding && /^research\//.test(binding.path ?? '') && /^[a-f0-9]{64}$/.test(binding.sha256 ?? ''), 'invalid evidence binding');
    check(auth.inputs?.[binding.path] === binding.sha256, 'evidence absent from gate input map');
    const value = regular(binding.path); check(sha(value) === binding.sha256, `stale evidence ${binding.path}`); return value;
  };
  const nativePath = `research/${run}-dispatch/reader-reader-${batch}.result.json`;
  check(auth.native_receipt?.path === nativePath, 'wrong native reader receipt');
  const nativeBytes = bound(auth.native_receipt), native = JSON.parse(nativeBytes);
  check(same(nativeBytes, bound(auth.native_receipt_archive)), 'native receipt archive differs');
  check(native.run === run && native.role === 'reader' && native.label === `reader-${batch}`
    && same(native.covers?.map(String), [batch]) && Number.isInteger(native.attempt) && native.attempt > 0
    && native.ok === true && native.exit_code === 0 && native.timed_out === false && native.ended_at, 'reader did not genuinely complete');
  const reportBytes = bound(auth.original_report);
  check(same(JSON.parse(reportBytes), report), 'report archive differs from actual reader observations');
  check(same(regular(`research/${run}-reader-findings-${batch}.json`), reportBytes), 'original report bytes changed');
  let message;
  if (auth.original_last_message) {
    check(native.evidence_tag === `.attempt-${native.attempt}`
      && auth.original_last_message.path === `research/${run}-dispatch/reader-reader-${batch}.attempt-${native.attempt}.last-message.json`, 'wrong original native message');
    message = bound(auth.original_last_message).toString();
    check(same(JSON.parse(message), report), 'native final message differs from original report');
  }
  let parsedTail;
  try { parsedTail = JSON.parse(native.tail); } catch { /* Authenticate genuine clipped diagnostics below. */ }
  if (parsedTail !== undefined) check(same(parsedTail, report), 'native tail differs from original report');
  else check(message && typeof native.tail === 'string' && native.tail.trimEnd().length >= 256
    && (message.trimEnd().endsWith(native.tail.trimEnd()) || reportBytes.toString().trimEnd().endsWith(native.tail.trimEnd())), 'native diagnostic suffix does not authenticate original report');
  const result = new Map(), Y = yaml();
  const item = id => { check(/^[a-z][a-z0-9-]*$/.test(id), 'invalid item id'); const value = Y.parse(split(regular(`items/${id}.md`).toString()).fm); check(value?.id === id, 'wrong path carrier identity'); return value; };
  const owners = id => Object.entries(manifests).filter(([, ids]) => ids.includes(id)).map(([b]) => b);
  check(Array.isArray(auth.findings) && auth.findings.length > 0, 'empty authorization');
  for (const row of auth.findings) {
    const index = row.finding_index, finding = report.findings?.[index - 1];
    check(Number.isInteger(index) && index > 0 && finding && same(row.original_finding, finding) && !result.has(index), 'finding substitution/duplicate');
    check(finding.subject_type === 'in-flight-item' && finding.consumer_id == null && finding.observed_source == null,
      'only original unbound downstream item observation is supported');
    const owner = owners(finding.id), metadata = item(finding.id);
    check(owner.length === 1 && owner[0] === String(row.owner_batch) && owner[0] !== batch
      && metadata.id === finding.id && metadata.status === 'draft'
      && (!metadata.pipeline_run || metadata.pipeline_run === run), 'not one exact current-run draft consumer');
    const baseline = JSON.parse(bound(row.owner_pre_snapshot));
    check(row.owner_pre_snapshot.path === `research/${run}-step3-hash-${owner[0]}-pre.json`
      && baseline.run === run && String(baseline.batch) === owner[0] && baseline.label === 'pre'
      && ['item_sha256', 'contract_sha256', 'manifest_sha256'].every(key => /^[a-f0-9]{64}$/.test(baseline.hashes?.[finding.id]?.[key] ?? '')),  'missing native consumer baseline');
    const observed = bound(row.current_source_observation);
    check(Y.parse(split(observed.toString()).fm)?.id === finding.id, 'wrong archived source identity');
    check(Array.isArray(row.excerpts) && row.excerpts.length > 0
      && row.excerpts.every(text => typeof text === 'string' && text.trim().length >= 15 && observed.toString().includes(text)), 'missing actual current-source excerpts');
    if (atSplit) check(same(regular(`items/${finding.id}.md`), observed), 'Root current-source observation stale before split');
    const path = row.dependency_path;
    check(Array.isArray(path) && path.length >= 2 && path[0] === finding.id && new Set(path).size === path.length
      && (manifests[batch] ?? []).includes(path.at(-1)), 'not consumer-to-assigned-supplier path');
    item(path.at(-1));
    for (let i = 0; i < path.length - 1; i++) {
      const current = item(path[i]);
      check([...(current.deps ?? []), ...(current.justified_by ?? [])].includes(path[i + 1]), 'missing actual dependency edge');
    }
    result.set(index, { kind: 'downstream-in-run-consumer', owner_batch: owner[0], authority: { path: name, sha256: hash },
      finding_index: index, dependency_path: path, current_source_observation: row.current_source_observation,
      original_reader_observation: 'unbound', root_observed_item_sha256: sha(observed) });
  }
  return result;
}
