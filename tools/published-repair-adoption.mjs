// Explicit recovery of missing pre-edit serialization. This authenticates
// ownership evidence only: it supplies no audit, judge or native gate coverage.
import { readFileSync, realpathSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { itemHashGuard } from './item-hash.mjs';

export const ADOPTION_KIND = 'owner-adopted-delegated-repair';
export const adoptionSha = text => createHash('sha256').update(text).digest('hex');
const field = (text, key) => new RegExp(`^${key}:\\s*["']?([^\\n"']+?)["']?\\s*$`, 'm')
  .exec(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)?.[1] ?? '')?.[1];
const published = (text, id) => field(text, 'id') === id && field(text, 'status') === 'published'
  && field(text, 'proved_here') !== 'false';

export function readAdoptionResearch(root, path) {
  if (typeof path !== 'string' || !path.startsWith('research/') || path.includes('\\')
    || path.split('/').some(part => !part || part === '.' || part === '..')) throw new Error('invalid adoption research path');
  const absolute = resolve(root, path), base = realpathSync(resolve(root, 'research'));
  const rel = relative(base, realpathSync(absolute));
  if (!rel || rel.startsWith('..') || isAbsolute(rel) || !lstatSync(absolute).isFile())
    throw new Error('adoption evidence must be a regular research file');
  return readFileSync(absolute, 'utf8');
}

export function hasCommittedPriorPublication(root, id, before, commit, claimedAt) {
  if (!/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/.test(commit ?? '')
    || !/^[a-zA-Z0-9_-]+$/.test(id) || !Number.isFinite(Date.parse(claimedAt))) return false;
  const git = args => spawnSync('git', ['--no-replace-objects', '-C', root, ...args], { maxBuffer: 16 * 1024 * 1024 });
  const metadata = git(['show', '--no-patch', '--format=%H%n%ct', commit]);
  if (metadata.status !== 0) return false;
  const [object, timestamp, ...extra] = metadata.stdout.toString('utf8').trim().split('\n');
  if (object !== commit || extra.length || !/^\d+$/.test(timestamp)
    || Number(timestamp) * 1000 > Date.parse(claimedAt)) return false;
  if (git(['merge-base', '--is-ancestor', commit, 'HEAD']).status !== 0) return false;
  const carrier = git(['show', `${commit}:items/${id}.md`]);
  return carrier.status === 0 && carrier.stdout.equals(Buffer.from(before, 'utf8'));
}

// Deliberately narrow record shapes; an explicit pointer selects an actual
// delegated repair, never a consumer disposition or narrative claim.
function delegatedRecord(artifact, pointer) {
  const match = /^\/(actual_source_repairs|items)\/(0|[1-9][0-9]*)$/.exec(pointer ?? '');
  if (!match || !Array.isArray(artifact[match[1]])) throw new Error('invalid delegated repair record pointer');
  const row = artifact[match[1]][Number(match[2])];
  if (!row || artifact[match[1]].filter(candidate => candidate?.id === row.id).length !== 1)
    throw new Error('missing or ambiguous delegated repair record');
  return { row, shape: match[1] };
}

/** Validate owner acceptance and both exact endpoints. Current raw bytes live
 * in a snapshot so subsequent verification-only changes remain possible. */
export function validateAdoptionAcceptance(root, acceptancePath, now, liveText) {
  const raw = readAdoptionResearch(root, acceptancePath), a = JSON.parse(raw);
  if (a.version !== 1 || a.kind !== 'owner-acceptance-delegated-published-repair'
    || a.authorized_by !== 'owner' || a.verdict !== 'accepted'
    || !/^[a-zA-Z0-9_-]+$/.test(a.run ?? '') || !/^[a-zA-Z0-9_-]+$/.test(a.group ?? '')
    || !/^[a-z][a-z0-9-]*$/.test(a.id ?? '')
    || !Number.isFinite(Date.parse(a.accepted_at)) || Date.parse(a.accepted_at) > Date.parse(now)
    || !Number.isFinite(Date.parse(now))) throw new Error('invalid focused owner acceptance');
  const before = readAdoptionResearch(root, a.before_file);
  const corrected = readAdoptionResearch(root, a.corrected_file);
  if (!published(before, a.id) || !published(corrected, a.id)
    || a.before_file === a.corrected_file || adoptionSha(before) !== a.before_raw_sha256
    || itemHashGuard(before) !== a.pre_sha256 || adoptionSha(corrected) !== a.corrected_raw_sha256
    || itemHashGuard(corrected) !== a.content_sha256 || a.pre_sha256 === a.content_sha256
    || itemHashGuard(liveText) !== a.content_sha256 || !published(liveText, a.id))
    throw new Error('adoption endpoints do not match published sources');
  if (!hasCommittedPriorPublication(root, a.id, before, a.prior_publication_commit, now))
    throw new Error('adoption requires an exact ancestor published Git carrier');
  const single = ['delegated_file', 'delegated_sha256', 'delegated_pointer'];
  if (a.delegated_chain !== undefined && single.some(key => a[key] !== undefined))
    throw new Error('ambiguous single/chain delegated evidence');
  const steps = a.delegated_chain ?? [{ file: a.delegated_file, sha256: a.delegated_sha256,
    pointer: a.delegated_pointer, corrected_file: a.corrected_file }];
  if (!Array.isArray(steps) || !steps.length || steps.length > 16)
    throw new Error('invalid delegated repair chain');
  let previous = before;
  for (const [index, step] of steps.entries()) {
    const delegatedRaw = readAdoptionResearch(root, step.file), d = JSON.parse(delegatedRaw);
    if (step.file === acceptancePath || adoptionSha(delegatedRaw) !== step.sha256
      || d.version !== 1 || d.run !== a.run || typeof d.agent !== 'string' || !d.agent.trim()
      || d.agent === 'owner' || !d.agent.startsWith('/root/') || typeof d.lane !== 'string' || !d.lane.trim())
      throw new Error('missing or mismatched separate delegated repair evidence');
    const { row, shape } = delegatedRecord(d, step.pointer);
    const beforeKey = step.before_field ?? (shape === 'items' ? 'original' : 'before');
    if (!(shape === 'items' ? ['original', 'integrated_preimage'] : ['before']).includes(beforeKey))
      throw new Error('unsupported delegated before endpoint');
    const original = row[beforeKey];
    const stepBefore = readAdoptionResearch(root, original?.path);
    const stepCurrent = readAdoptionResearch(root, step.corrected_file);
    if (row.id !== a.id || original?.sha256 !== adoptionSha(stepBefore)
      || (index === 0 && original.path !== a.before_file) || stepBefore !== previous
      || row.current?.path !== `items/${a.id}.md` || row.current?.sha256 !== adoptionSha(stepCurrent)
      || !published(stepBefore, a.id) || !published(stepCurrent, a.id))
      throw new Error('delegated repair record does not bind exact chained endpoints');
    previous = stepCurrent;
  }
  if (previous !== corrected) throw new Error('delegated repair chain does not reach accepted corrected snapshot');
  return { acceptance: a, acceptance_sha256: adoptionSha(raw) };
}

export function authenticateAdoption(root, claim, receipt, liveText) {
  const raw = readAdoptionResearch(root, claim.adoption_receipt), adoption = JSON.parse(raw);
  if (claim.claim_kind !== ADOPTION_KIND || adoptionSha(raw) !== claim.adoption_sha256
    || adoption.version !== 1 || adoption.kind !== ADOPTION_KIND
    || adoption.recorded_at !== claim.claimed_at || Date.parse(claim.claimed_at) > Date.now())
    throw new Error('invalid hash-bound adoption receipt');
  const { acceptance: a, acceptance_sha256 } = validateAdoptionAcceptance(root,
    adoption.acceptance_file, claim.claimed_at, liveText);
  if (acceptance_sha256 !== adoption.acceptance_sha256) throw new Error('owner acceptance changed after adoption');
  for (const key of ['run', 'id', 'group', 'pre_sha256'])
    if (a[key] !== claim[key] || adoption[key] !== claim[key] || receipt[key] !== claim[key])
      throw new Error(`adoption ${key} mismatch`);
  for (const key of ['before_file', 'before_raw_sha256', 'content_sha256', 'prior_publication_commit'])
    if (receipt[key] !== a[key]) throw new Error(`repair/adoption ${key} mismatch`);
  return adoption;
}
