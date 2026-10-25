// Mechanical authentication of the native stamper's own mapping delta only.
// Keep the actual provider context unchanged; never store an item or prompt.
import { createHash } from 'node:crypto';
import { itemHashGuard, itemHashJudge, stripJudgeStamp } from './item-hash.mjs';

const hash = value => createHash('sha256').update(value).digest('hex');
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');
const check = (ok, why) => { if (!ok) throw Error('Step 6 native judge stamp: ' + why); };
const MAX_FRAGMENT_BYTES = 4096;

export function stampObservation(source) {
  check(typeof source === 'string', 'source must be text');
  const stripped = stripJudgeStamp(source);
  let prefix = 0, suffix = 0;
  while (prefix < stripped.length && prefix < source.length && source[prefix] === stripped[prefix]) prefix++;
  while (suffix < stripped.length - prefix && suffix < source.length - prefix
    && source[source.length - suffix - 1] === stripped[stripped.length - suffix - 1]) suffix++;
  const text = source.slice(prefix, source.length - suffix);
  check(source.slice(0, prefix) + source.slice(prefix + text.length) === stripped,
    'existing judge stripping is not one contiguous deletion');
  check(Buffer.byteLength(text, 'utf8') <= MAX_FRAGMENT_BYTES, 'judge fragment exceeds bounded mapping size');
  return { raw_sha256: hash(source), item_sha256: itemHashJudge(source), guard_sha256: itemHashGuard(source),
    fragment: { offset: prefix, text, sha256: hash(text) } };
}

function nativeAfterFragment(source, fragment, model) {
  check(model === 'gpt-6-luna', 'unsupported native stamp model');
  const frontmatterEnd = source.indexOf('\n---\n', 4);
  check(source.startsWith('---\n') && frontmatterEnd >= 4 && fragment.offset >= 4
    && fragment.offset + fragment.text.length <= frontmatterEnd + 1, 'native mapping is outside frontmatter');
  const block = /^(?:verification:\n)? {2}judge:\n {4}model: "gpt-6-luna"\n {4}verdict: pass\n {4}date: (\d{4}-\d{2}-\d{2})\n$/.exec(fragment.text);
  const flow = /^, judge: \{model: "gpt-6-luna", verdict: pass, date: (\d{4}-\d{2}-\d{2})\}$/.exec(fragment.text);
  const date = (block ?? flow)?.[1];
  check(date && Number.isFinite(Date.parse(date + 'T00:00:00Z'))
    && new Date(date + 'T00:00:00Z').toISOString().slice(0, 10) === date, 'after mapping is not the exact native Luna pass/date stamp');
  if (block && !fragment.text.startsWith('verification:\n')) {
    // A two-space judge mapping can only be a direct verification child.
    const parent = source.slice(0, fragment.offset).match(/^([A-Za-z_][A-Za-z0-9_-]*):[^\n]*\n/gm)?.at(-1);
    check(parent === 'verification:\n', 'native judge mapping has another parent');
  }
  if (flow) {
    const lineStart = source.lastIndexOf('\n', fragment.offset - 1) + 1;
    check(/^verification:\s*\{[^{}\n]*$/.test(source.slice(lineStart, fragment.offset)), 'native flow stamp has another parent');
  }
}

// Recognize an already present native mapping only. This is not source-change
// authority: callers must independently authenticate its original keep/source
// and actual raw evidence. The strict before/after verifier below is unchanged.
export function verifyNativePassStamp(source, { model = 'gpt-6-luna' } = {}) {
  const after = stampObservation(source);
  nativeAfterFragment(source, after.fragment, model);
  return after;
}

export function verifyNativeStampDelta(source, before, { model = 'gpt-6-luna' } = {}) {
  check(model === 'gpt-6-luna', 'unsupported native stamp model');
  check(before && ['raw_sha256', 'item_sha256', 'guard_sha256'].every(key => sha(before[key]))
    && before.fragment && Number.isSafeInteger(before.fragment.offset) && before.fragment.offset >= 0
    && typeof before.fragment.text === 'string' && Buffer.byteLength(before.fragment.text, 'utf8') <= MAX_FRAGMENT_BYTES
    && sha(before.fragment.sha256) && hash(before.fragment.text) === before.fragment.sha256, 'invalid before observation');
  const after = stampObservation(source), stripped = stripJudgeStamp(source);
  check(after.item_sha256 === before.item_sha256 && after.guard_sha256 === before.guard_sha256,
    'item or guard changed across native stamping');
  check(before.fragment.offset <= stripped.length, 'before mapping offset is outside stripped source');
  const reconstructed = stripped.slice(0, before.fragment.offset) + before.fragment.text + stripped.slice(before.fragment.offset);
  check(hash(reconstructed) === before.raw_sha256, 'before raw source cannot be reconstructed from its own mapping fragment');
  if (after.raw_sha256 !== before.raw_sha256) nativeAfterFragment(source, after.fragment, model);
  return after;
}
