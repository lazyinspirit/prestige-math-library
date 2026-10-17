// Preserve intermediate reader observations without inventing a historical
// composite carrier. Available raw source may be bound separately; routing only.
import { readFileSync, existsSync, lstatSync } from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { partialReaderHash } from './step3-owner-partial-reader-repairs.mjs';
import { split, yaml } from './pathway-lib.mjs';
import { draftOwnerMatcher } from './run-draft-ownership.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
export const OBSERVATION_EVIDENCE_POLICY = 'owner-reader-observation-evidence-v1';
// New archive/closure inputs are regular own-run research files, never links.
function researchBytes(root, run, path) {
  if (typeof path !== 'string' || isAbsolute(path) || path.includes('\\')
    || !path.startsWith(`research/${run}-`) || path.split('/').some(part => !part || part === '.' || part === '..'))
    throw Error('Invalid reader observation research path');
  const full = resolve(root, path), local = relative(resolve(root), full);
  if (!local || local.startsWith('..') || isAbsolute(local)) throw Error('Escaping reader observation research path');
  let cursor = resolve(root);
  for (const part of local.split('/')) {
    cursor = join(cursor, part);
    if (lstatSync(cursor).isSymbolicLink()) throw Error('Symlink reader observation evidence');
  }
  if (!lstatSync(full).isFile()) throw Error('Nonregular reader observation evidence');
  return readFileSync(full);
}
function observedSourceArchive(root, run, entry, finding, receipt, report) {
  const marker = entry.observed_source_archive;
  if (!marker || Object.keys(marker).some(key => !['path', 'sha256'].includes(key))
    || !/^[a-f0-9]{64}$/.test(marker.sha256 ?? '')
    || marker.sha256 !== finding.observed_source.item_sha256)
    throw Error('Invalid observed source archive binding');
  const bytes = researchBytes(root, run, marker.path), fm = yaml().parse(split(bytes.toString('utf8')).fm);
  if (sha(bytes) !== marker.sha256 || fm?.id !== finding.id
    || typeof fm.pipeline_run !== 'string' || !draftOwnerMatcher(root, run)(fm))
    throw Error('Observed source archive has wrong bytes or draft ownership');
  let tail;
  try { tail = JSON.parse(receipt.tail); } catch { throw Error('Reader observation requires a complete native structured tail'); }
  if (!Array.isArray(report.findings) || !/^[a-z][a-z0-9-]*$/.test(finding.id)
    || receipt.label !== `reader-${entry.batch}` || receipt.exit_code !== 0 || receipt.process_exit_code !== 0
    || receipt.timed_out === true || !Number.isFinite(Date.parse(receipt.ended_at))
    || ![String(entry.batch), `${run}-batch-${entry.batch}`].includes(String(report.batch))
    || partialReaderHash(tail) !== partialReaderHash(report))
    throw Error('Observed source archive lacks exact successful native completion');
  return { path: marker.path, sha256: marker.sha256 };
}
export function unboundReaderObservations(root, run, batch) {
  if (!/^[A-Za-z0-9_-]+$/.test(run ?? '') || !/^[1-9]\d*$/.test(String(batch))) throw Error('Invalid unbound reader identity');
  const path = join(root, 'research', `${run}-step3-owner-unbound-reader-observations.json`);
  if (!existsSync(path)) return new Map();
  const doc = JSON.parse(readFileSync(path));
  if (doc.version !== 1 || doc.run !== run || doc.registered_by !== 'root'
    || doc.mathematical_acceptance !== false || !Array.isArray(doc.observations)) throw Error('Invalid unbound reader authority');
  const result = new Map();
  for (const entry of doc.observations.filter(x => String(x.batch) === String(batch))) {
    const reportBytes = readFileSync(join(root, 'research', `${run}-reader-findings-${batch}.json`));
    const receiptBytes = readFileSync(join(root, 'research', `${run}-dispatch`, `reader-reader-${batch}.result.json`));
    const receipt = JSON.parse(receiptBytes), report = JSON.parse(reportBytes), finding = report.findings?.[entry.index - 1];
    const obligation = `reader:${batch}:${entry.index}`;
    if (!Number.isSafeInteger(entry.index) || entry.index < 1 || result.has(obligation)
      || ![true, false].includes(entry.original_source_unavailable) || typeof entry.reason !== 'string' || entry.reason.trim().length < 80
      || entry.report_sha256 !== sha(reportBytes) || entry.result_sha256 !== sha(receiptBytes)
      || receipt.ok !== true || receipt.run !== run || receipt.role !== 'reader' || !receipt.covers?.map(String).includes(String(batch))
      || finding?.subject_type !== 'in-run-dependency' || finding.id !== entry.id
      || finding.observed_source?.snapshot !== 'current' || !/^[a-f0-9]{64}$/.test(finding.observed_source.item_sha256 ?? '')
      || partialReaderHash(finding) !== entry.finding_sha256
      || !/^[a-f0-9]{64}$/.test(entry.producer_sha256_at_registration ?? '')
      || entry.producer_sha256_at_registration === finding.observed_source.item_sha256) throw Error('Invalid unbound reader evidence');
    if (entry.original_source_unavailable === false) {
      const archive = observedSourceArchive(root, run, entry, finding, receipt, report);
      result.set(obligation, { record_sha256: partialReaderHash(entry), original_source_unavailable: false,
        observed_source_archive: archive });
    } else {
      // Preserve the existing missing-source binding exactly, including key order.
      result.set(obligation, { record_sha256: partialReaderHash(entry), original_source_unavailable: true });
    }
  }
  return result;
}

// Opt-in closure evidence only: never expands unmarked historical receipts.
export function closureEvidence(root, run) {
  if (!/^[A-Za-z0-9_-]+$/.test(run ?? '')) throw Error('Invalid observation closure identity');
  const registry = `research/${run}-step3-owner-unbound-reader-observations.json`;
  if (!existsSync(join(root, registry))) return {};
  const bytes = researchBytes(root, run, registry), doc = JSON.parse(bytes);
  if (doc.version !== 1 || doc.run !== run || doc.registered_by !== 'root'
    || doc.mathematical_acceptance !== false || !Array.isArray(doc.observations))
    throw Error('Invalid observation closure authority');
  for (const batch of new Set(doc.observations.map(entry => String(entry.batch))))
    unboundReaderObservations(root, run, batch);
  const out = { [registry]: sha(bytes) };
  const add = (path, expected) => {
    if (sha(researchBytes(root, run, path)) !== expected
      || out[path] !== undefined && out[path] !== expected) throw Error('Changed observation closure evidence');
    out[path] = expected;
  };
  for (const entry of doc.observations) {
    add(`research/${run}-reader-findings-${entry.batch}.json`, entry.report_sha256);
    add(`research/${run}-dispatch/reader-reader-${entry.batch}.result.json`, entry.result_sha256);
    if (entry.original_source_unavailable === false)
      add(entry.observed_source_archive.path, entry.observed_source_archive.sha256);
  }
  return out;
}
