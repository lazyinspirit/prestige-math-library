// Preserve an intermediate reader observation whose original source bytes
// were not captured. This grants routing, never defect acceptance.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { partialReaderHash } from './step3-owner-partial-reader-repairs.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
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
    const receipt = JSON.parse(receiptBytes), finding = JSON.parse(reportBytes).findings?.[entry.index - 1];
    const obligation = `reader:${batch}:${entry.index}`;
    if (!Number.isSafeInteger(entry.index) || entry.index < 1 || result.has(obligation)
      || entry.original_source_unavailable !== true || typeof entry.reason !== 'string' || entry.reason.trim().length < 80
      || entry.report_sha256 !== sha(reportBytes) || entry.result_sha256 !== sha(receiptBytes)
      || receipt.ok !== true || receipt.run !== run || receipt.role !== 'reader' || !receipt.covers?.map(String).includes(String(batch))
      || finding?.subject_type !== 'in-run-dependency' || finding.id !== entry.id
      || finding.observed_source?.snapshot !== 'current' || !/^[a-f0-9]{64}$/.test(finding.observed_source.item_sha256 ?? '')
      || partialReaderHash(finding) !== entry.finding_sha256
      || !/^[a-f0-9]{64}$/.test(entry.producer_sha256_at_registration ?? '')
      || entry.producer_sha256_at_registration === finding.observed_source.item_sha256) throw Error('Invalid unbound reader evidence');
    result.set(obligation, { record_sha256: partialReaderHash(entry), original_source_unavailable: true });
  }
  return result;
}
