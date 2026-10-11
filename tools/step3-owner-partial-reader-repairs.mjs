// Retain unresolved reader findings after a partial repair. This authority
// grants routing only, never mathematical acceptance or a closed defect.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { split, yaml } from './pathway-lib.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort()
    .map(key => [key, canonical(value[key])])) : value;
export const partialReaderHash = value => sha(JSON.stringify(canonical(value)));

export function partialReaderFindings(root, run, batch) {
  if (!/^[A-Za-z0-9_-]+$/.test(run ?? '') || !/^[1-9]\d*$/.test(String(batch)))
    throw Error('Invalid partial-reader identity');
  const path = join(root, 'research', `${run}-step3-owner-partial-reader-repairs.json`);
  if (!existsSync(path)) return new Map();
  const record = JSON.parse(readFileSync(path, 'utf8'));
  if (record.version !== 1 || record.run !== run || record.registered_by !== 'root'
    || record.policy !== 'retain-unresolved-partial-reader-repair-v1'
    || typeof record.authorization !== 'string' || record.authorization.trim().length < 80
    || record.mathematical_acceptance !== false || !Array.isArray(record.batches))
    throw Error('Invalid partial-reader routing authority');
  const selected = record.batches.filter(row => String(row.batch) === String(batch));
  if (!selected.length) return new Map();
  if (selected.length !== 1) throw Error('Ambiguous partial-reader batch');
  const entry = selected[0], research = join(root, 'research');
  const reportBytes = readFileSync(join(research, `${run}-reader-findings-${batch}.json`));
  const postBytes = readFileSync(join(research, `${run}-step3-hash-${batch}-post.json`));
  const resultBytes = readFileSync(join(research, `${run}-dispatch`, `reader-reader-${batch}.result.json`));
  const result = JSON.parse(resultBytes), post = JSON.parse(postBytes), report = JSON.parse(reportBytes);
  if (sha(reportBytes) !== entry.reader_report_sha256 || sha(postBytes) !== entry.post_snapshot_sha256
    || sha(resultBytes) !== entry.reader_result_sha256 || result.ok !== true
    || result.run !== run || result.role !== 'reader' || !result.covers?.map(String).includes(String(batch))
    || post.run !== run || String(post.batch) !== String(batch) || post.label !== 'post'
    || !Array.isArray(entry.targets) || !entry.targets.length)
    throw Error('Changed or incomplete partial-reader evidence');
  const findings = new Map();
  for (const target of entry.targets) {
    if (!/^[a-z][a-z0-9-]*$/.test(target.id ?? ''))
      throw Error('Invalid partial-reader subject');
    const finding = report.findings?.[target.index - 1];
    const obligation = `reader:${batch}:${target.index}`;
    const item = yaml().parse(split(readFileSync(join(root, 'items', `${target.id}.md`), 'utf8')).fm);
    if (!Number.isSafeInteger(target.index) || target.index < 1 || findings.has(obligation)
      || !/^[a-z][a-z0-9-]*$/.test(target.id ?? '') || finding?.id !== target.id
      || finding.subject_type !== 'in-flight-item' || item?.status !== 'draft'
      || !post.manifest?.includes(target.id) || partialReaderHash(finding) !== target.finding_sha256
      || partialReaderHash(post.hashes?.[target.id]) !== target.carrier_sha256)
      throw Error('Invalid partial-reader finding binding');
    findings.set(obligation, { id: target.id, record_sha256: partialReaderHash(entry),
      finding_sha256: target.finding_sha256, carrier_sha256: target.carrier_sha256 });
  }
  return findings;
}
