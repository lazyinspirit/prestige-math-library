// Exact owner-authorized addition-only shared-ledger commit fragments.
import { createHash } from 'node:crypto';
const sha = text => createHash('sha256').update(text).digest('hex');
// Only a terminal record line terminator is non-content. Original bytes are
// retained; this accounts for EOF becoming an interior blank-line separator.
export const decodeLedger = bytes => new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes);
export const recordSignature = text => text.replace(/\r?\n$/, '');
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const refuse = why => { throw Error(`shared ledger fragment: ${why}`); };
export function fragmentRecords(text, run, ownedIds) {
  const records = [];
  const owns = value => value.includes(run) || ownedIds.has(/^\s*(?:\|\s*)?(?:`|\[\[)?([a-z][a-z0-9]*(?:-[a-z0-9]+)+)(?=[`|\]\s])/.exec(value)?.[1]);
  const emit = (start, end) => {
    const block = text.slice(start, end);
    if (!block.trim()) return;
    if (!block.trimStart().startsWith('|')) records.push({ start, end, text: block, owned: owns(block) });
    else {
      let at = start;
      for (const line of block.split('\n')) {
        records.push({ start: at, end: at + line.length, text: line, owned: owns(line) });
        at += line.length + 1;
      }
    }
  };
  let cursor = 0;
  for (const match of text.matchAll(/\n\s*\n/g)) { emit(cursor, match.index); cursor = match.index + match[0].length; }
  emit(cursor, text.length);
  return records;
}
export function validateFragment(spec, run, actualOwnedIds, working) {
  if (spec.version !== 1 || spec.kind !== 'published-ledger-addition-fragment' || spec.run !== run
    || spec.path !== 'research/published-consumer-supplier-ledger.md' || spec.authorized_by !== 'owner'
    || typeof spec.authorization !== 'string' || spec.authorization.length < 20
    || !Array.isArray(spec.base_owned_records) || !Array.isArray(spec.target_owned_records)
    || !Array.isArray(spec.evidence) || !spec.evidence.length) refuse('invalid exact owner authority');
  // Caller verifies every evidence path/hash and descriptor raw hash, and binds
  // this descriptor in native scope policy/readiness before actual preparation.
  const ids = new Set(actualOwnedIds);
  const own = text => fragmentRecords(text, run, ids).filter(r => r.owned).map(r => recordSignature(r.text));
  for (const rows of [spec.base_owned_records, spec.target_owned_records]) {
    if (rows.some(row => typeof row !== 'string' || !same(own(row), [recordSignature(row)])) || new Set(rows.map(recordSignature)).size !== rows.length)
      refuse('non-owned or duplicate authorized record');
  }
  const before = spec.base_owned_records.map(recordSignature), target = spec.target_owned_records.map(recordSignature);
  const retained = target.filter(row => before.includes(row));
  if (!same(retained, before) || target.length <= retained.length)
    refuse('authority must add records only; no replacement, deletion, or reorder');
  if (!same(own(working), target)) refuse('working owned projection differs from authority');
  return { ids, own };
}
export function composeFragment(base, spec, run, ids) {
  const rows = fragmentRecords(base, run, ids), owned = rows.filter(r => r.owned);
  const current = owned.map(r => recordSignature(r.text)), target = spec.target_owned_records.map(recordSignature);
  const before = spec.base_owned_records.map(recordSignature);
  if (same(current, target)) return { text: base, already_integrated: true, base_sha256: sha(base), insertions: [] };
  if (!same(current, before)) refuse('HEAD/index owned projection is neither exact before nor target');
  const pending = new Map(); let additions = [];
  for (const record of target) {
    if (before.includes(record)) {
      if (additions.length) pending.set(record, additions);
      additions = [];
    } else additions.push(record);
  }
  const insertions = [];
  for (const record of owned) {
    if (pending.has(recordSignature(record.text))) insertions.push({ at: record.start, text: pending.get(recordSignature(record.text)).join('\n\n') + '\n\n' });
  }
  if (additions.length) insertions.push({ at: base.length, text: (base.length && !base.endsWith('\n\n') ? base.endsWith('\n') ? '\n' : '\n\n' : '') + additions.join('\n\n') + '\n\n' });
  // This construction only inserts. Every byte of the HEAD/index input occurs
  // unchanged and in order in its corresponding result; no working foreign
  // bytes are copied into either tree or index.
  let text = '', cursor = 0; const applied = [];
  for (const insertion of insertions) {
    text += base.slice(cursor, insertion.at);
    applied.push({ at: text.length, length: insertion.text.length });
    text += insertion.text; cursor = insertion.at;
  }
  text += base.slice(cursor);
  let reconstructed = text;
  for (const span of [...applied].reverse()) reconstructed = reconstructed.slice(0, span.at) + reconstructed.slice(span.at + span.length);
  if (reconstructed !== base) refuse('composition failed exact base-byte reconstruction');
  const after = fragmentRecords(text, run, ids);
  if (!same(after.filter(r => r.owned).map(r => recordSignature(r.text)), target)
    || !same(after.filter(r => !r.owned).map(r => recordSignature(r.text)), rows.filter(r => !r.owned).map(r => recordSignature(r.text))))
    refuse('composition changed owned projection or foreign residual');
  return { text, already_integrated: false, base_sha256: sha(base), insertions };
}
