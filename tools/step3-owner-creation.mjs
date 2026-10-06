#!/usr/bin/env node
// Owner-spawned origin is distinct from native authoring and mathematical audit.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { itemHash, loadStep3 } from './step3-decisions.mjs';
import { frontmatterList } from './frontmatter-list.mjs';

export const STEP3_OWNER_CREATION_POLICY = 'owner-spawned-step3-creation-v1';
const safe = value => {
  if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid run or item ID');
  return value;
};
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const json = path => JSON.parse(readFileSync(path, 'utf8'));
const hash = value => sha(JSON.stringify(value));
const isHash = value => /^[a-f0-9]{64}$/.test(value ?? '');
const baselinePath = (root, run) => join(root, 'research', `${safe(run)}-step3-auditor-baseline.json`);
export const step3OwnerCreationPath = (root, run, id) => join(root, 'research',
  `${safe(run)}-step3-owner-creation-${safe(id)}.json`);
const researchFile = (root, path) => {
  if (typeof path !== 'string' || !path.startsWith('research/')) throw Error('Owner creation evidence must be a research path');
  const file = resolve(root, path);
  if (!existsSync(file) || !realpathSync(file).startsWith(realpathSync(join(root, 'research')) + sep))
    throw Error('Owner creation evidence must resolve inside research');
  return file;
};
function baselineFor(root, run) {
  const bytes = readFileSync(baselinePath(root, run)), baseline = JSON.parse(bytes.toString());
  if (baseline.version !== 1 || baseline.run !== run || baseline.policy !== 'auditor-authored-step3-bypass-v1'
    || !Array.isArray(baseline.items) || !Array.isArray(baseline.existing_item_files)
    || !Array.isArray(baseline.scopes) || !Number.isFinite(Date.parse(baseline.at)))
    throw Error('Invalid immutable Step 3 baseline');
  return { baseline, baseline_sha256: hash(baseline), baseline_file_sha256: sha(bytes) };
}
export function step3OwnerCreationClaim(s, id) {
  const live = s.items.get(id);
  if (!live) throw Error(`${id}: missing current manifest identity`);
  const text = readFileSync(join(s.root, 'items', `${safe(id)}.md`), 'utf8');
  const claim = { ...Object.fromEntries(['id', 'kind', 'title', 'statement'].map(key => [key, live.item[key] ?? null])),
    source_claim: text.split(/^## /m).filter(section => /^(Statement|Definition)\b/.test(section)).map(section => section.trim()) };
  return { page: live.page.id, batch: String(live.page.batch), claim_sha256: hash(claim),
    item_file_sha256: sha(text) };
}
function validate(root, run, id, receipt, s) {
  const boundary = baselineFor(root, run), { baseline } = boundary;
  const at = Date.parse(receipt?.attested_at), baselineAt = Date.parse(baseline.at);
  const timeline = receipt?.author?.timeline;
  const known = timeline?.mode === 'known' && Number.isFinite(Date.parse(timeline.started_at))
    && Date.parse(timeline.started_at) >= baselineAt && Date.parse(timeline.ended_at) >= Date.parse(timeline.started_at)
    && Date.parse(timeline.ended_at) <= at;
  const unknown = timeline?.mode === 'unknown' && timeline.after_baseline === true
    && timeline.started_at === undefined && timeline.ended_at === undefined && !!String(timeline.reason ?? '').trim();
  const allowed = ['version', 'policy', 'evidence_class', 'run', 'step', 'id', 'owner', 'owner_identity',
    'author', 'attested_at', 'reason', 'owner_held_escalation', 'baseline_sha256', 'baseline_file_sha256',
    'page', 'batch', 'claim_sha256', 'item_file_sha256', 'sources'];
  if (!receipt || Object.keys(receipt).some(key => !allowed.includes(key))
    || receipt.version !== 1 || receipt.policy !== STEP3_OWNER_CREATION_POLICY || receipt.evidence_class !== 'owner-spawned-creation'
    || receipt.run !== run || receipt.step !== 3 || receipt.id !== id || receipt.owner !== true
    || Object.keys(receipt.author ?? {}).some(key => !['identity', 'timeline'].includes(key))
    || Object.keys(timeline ?? {}).some(key => !(timeline?.mode === 'known'
      ? ['mode', 'started_at', 'ended_at'] : ['mode', 'after_baseline', 'reason']).includes(key))
    || !/^\/root(?:\/[a-zA-Z0-9_-]+)*$/.test(receipt.owner_identity ?? '')
    || !/^\/root\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(receipt.author?.identity ?? '')
    || receipt.author.identity === receipt.owner_identity || !Number.isFinite(at) || at < baselineAt
    || (!known && !unknown) || !String(receipt.reason ?? '').trim() || !String(receipt.owner_held_escalation ?? '').trim()
    || receipt.baseline_sha256 !== boundary.baseline_sha256 || receipt.baseline_file_sha256 !== boundary.baseline_file_sha256
    || baseline.items.some(row => row.id === id) || baseline.existing_item_files.includes(id)
    || !isHash(receipt.claim_sha256) || !isHash(receipt.item_file_sha256) || !Array.isArray(receipt.sources))
    throw Error(`${id}: invalid owner creation attestation or immutable baseline binding`);
  const claim = step3OwnerCreationClaim(s, id);
  if (claim.page !== receipt.page || claim.batch !== receipt.batch || claim.claim_sha256 !== receipt.claim_sha256)
    throw Error(`${id}: stale owner creation claim identity`);
  const texts = new Map();
  for (const source of receipt.sources) {
    if (!source || Object.keys(source).some(key => !['role', 'path', 'sha256'].includes(key))
      || !['assignment', 'authorship', 'escalation'].includes(source.role) || !isHash(source.sha256))
      throw Error(`${id}: invalid owner creation source`);
    const file = researchFile(root, source.path);
    if (file === resolve(step3OwnerCreationPath(root, run, id))) throw Error('Creation receipt cannot attest its own origin');
    const bytes = readFileSync(file);
    if (sha(bytes) !== source.sha256) throw Error(`${id}: stale owner creation source`);
    texts.set(source.role, `${texts.get(source.role) ?? ''}\n${bytes.toString()}`);
  }
  const binds = (role, values) => values.every(value => texts.get(role)?.includes(value));
  if (!binds('assignment', [run, id, receipt.owner_identity, receipt.author.identity])
    || !binds('authorship', [run, id, receipt.author.identity, receipt.claim_sha256, receipt.item_file_sha256])
    || !binds('escalation', [run, receipt.owner_held_escalation]))
    throw Error(`${id}: incomplete owner creation assignment/authorship/escalation evidence`);
  return receipt;
}
export function loadStep3OwnerCreation(root, run, id, s = loadStep3(root, run)) {
  const path = step3OwnerCreationPath(root, run, id);
  if (!existsSync(path)) return null;
  return validate(root, run, id, json(path), s);
}
export function recordStep3OwnerCreation(root, run, id, evidence) {
  safe(run); safe(id);
  const s = loadStep3(root, run), inputPath = researchFile(root, evidence);
  if (inputPath === resolve(step3OwnerCreationPath(root, run, id))) throw Error('Use original creation evidence, not the registration path');
  const receipt = validate(root, run, id, json(inputPath), s);
  if (step3OwnerCreationClaim(s, id).item_file_sha256 !== receipt.item_file_sha256)
    throw Error(`${id}: owner creation must bind the genuine current authored bytes`);
  const nativePath = join(root, 'research', `${run}-step3-auditor-certifications.json`);
  if (existsSync(nativePath) && json(nativePath).items?.some(row => row.id === id))
    throw Error(`${id}: cannot reclassify an existing native creation certificate`);
  const path = step3OwnerCreationPath(root, run, id);
  if (existsSync(path)) {
    const prior = loadStep3OwnerCreation(root, run, id, s);
    if (JSON.stringify(prior) !== JSON.stringify(receipt)) throw Error(`${id}: refusing to replace owner creation origin`);
    return { path, reused: true };
  }
  writeFileSync(path, `${JSON.stringify(receipt, null, 2)}\n`, { flag: 'wx' });
  return { path, reused: false };
}

// Creation alone cannot exclude an item from native classification. The owner
// must separately examine and accept current inputs through recordStep3.
export function currentStep3OwnerCreationDecision(s, id) {
  const path = join(s.root, 'research', `${s.run}-step3b-owner-${safe(id)}.json`);
  if (!existsSync(path)) return false;
  const row = json(path), live = s.items.get(id), deps = row.dependencies;
  const text = readFileSync(join(s.root, 'items', `${safe(id)}.md`), 'utf8');
  const fm = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)?.[1] ?? '';
  const declared = [...(live?.item.deps ?? []), ...(live?.item.justified_by ?? []), ...(live?.item.forward_refs ?? []),
    ...['deps', 'justified_by', 'forward_refs'].flatMap(key => frontmatterList(fm, key))];
  return row.version === 1 && row.run === s.run && row.phase === 'item' && row.target === id
    && row.owner === true && row.decision === 'repaired' && !!String(row.reason ?? '').trim()
    && Number.isFinite(Date.parse(row.at)) && Array.isArray(deps) && deps.every(value => typeof value === 'string')
    && JSON.stringify(deps) === JSON.stringify([...new Set(deps)].sort()) && declared.every(id => deps.includes(id))
    && row.sha256 === itemHash(s, id, deps);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2), get = flag => args[args.indexOf(flag) + 1];
    if (args[0] !== 'register' || !args.includes('--run') || !args.includes('--id') || !args.includes('--evidence'))
      throw Error('Usage: step3-owner-creation.mjs register --run RUN --id ITEM --evidence research/JSON');
    const result = recordStep3OwnerCreation(process.cwd(), get('--run'), get('--id'), get('--evidence'));
    console.log(`step3-owner-creation: ${result.path} ${result.reused ? 'reused' : 'recorded'}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
