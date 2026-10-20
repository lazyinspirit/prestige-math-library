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
export function validateAdoptionAcceptance(root, acceptancePath, now, liveText, predecessor) {
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
  if (predecessor) {
    const old = predecessor.acceptance;
    if (a.previous_claim_sha256 !== adoptionSha(JSON.stringify(predecessor.claim))
      || Date.parse(a.accepted_at) < Date.parse(predecessor.claim.claimed_at)
      || a.content_sha256 === old.content_sha256)
      throw new Error('refresh does not bind changed predecessor content');
    for (const key of ['run', 'id', 'group', 'before_file', 'before_raw_sha256', 'pre_sha256', 'prior_publication_commit'])
      if (a[key] !== old[key]) throw new Error(`refresh changes original ${key}`);
  } else if (a.previous_claim_sha256 !== undefined) throw new Error('refresh acceptance requires authenticated predecessor');
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
    if (predecessor) {
      const old = predecessor.acceptance;
      const oldFiles = old.delegated_chain?.map(entry => entry.file) ?? [old.delegated_file];
      if (oldFiles.includes(step.file)) throw new Error('refresh requires separate new delegated evidence');
    }
    const { row, shape } = delegatedRecord(d, step.pointer);
    const beforeKey = step.before_field ?? (shape === 'items' ? 'original' : 'before');
    if (!(shape === 'items' ? ['original', 'integrated_preimage'] : ['before']).includes(beforeKey))
      throw new Error('unsupported delegated before endpoint');
    const original = row[beforeKey];
    const stepBefore = readAdoptionResearch(root, original?.path);
    const stepCurrent = readAdoptionResearch(root, step.corrected_file);
    if (row.id !== a.id || original?.sha256 !== adoptionSha(stepBefore)
      || (index === 0 && predecessor
        ? itemHashGuard(stepBefore) !== predecessor.acceptance.content_sha256
        : (index === 0 && original.path !== a.before_file) || stepBefore !== previous)
      || row.current?.path !== `items/${a.id}.md` || row.current?.sha256 !== adoptionSha(stepCurrent)
      || !published(stepBefore, a.id) || !published(stepCurrent, a.id))
      throw new Error('delegated repair record does not bind exact chained endpoints');
    previous = stepCurrent;
  }
  if (previous !== corrected) throw new Error('delegated repair chain does not reach accepted corrected snapshot');
  return { acceptance: a, acceptance_sha256: adoptionSha(raw) };
}

export function authenticateAdoption(root, claim, receipt, liveText, seen = new Set()) {
  if (seen.has(claim.adoption_receipt) || seen.size >= 16 || claim.version !== 1
    || !Number.isFinite(Date.parse(claim.claimed_at))) throw new Error('invalid or cyclic adoption history');
  seen.add(claim.adoption_receipt);
  const raw = readAdoptionResearch(root, claim.adoption_receipt), adoption = JSON.parse(raw);
  if (claim.claim_kind !== ADOPTION_KIND || adoptionSha(raw) !== claim.adoption_sha256
    || adoption.version !== 1 || adoption.kind !== ADOPTION_KIND
    || adoption.recorded_at !== claim.claimed_at || Date.parse(claim.claimed_at) > Date.now())
    throw new Error('invalid hash-bound adoption receipt');
  let predecessor;
  if (adoption.previous_history !== undefined || adoption.previous_claim !== undefined
    || adoption.previous_history_sha256 !== undefined) {
    const historyRaw = readAdoptionResearch(root, adoption.previous_history), h = JSON.parse(historyRaw);
    if (adoptionSha(historyRaw) !== adoption.previous_history_sha256 || h.version !== 1
      || h.kind !== 'published-repair-adoption-history' || h.recorded_at !== claim.claimed_at
      || JSON.stringify(h.previous_claim) !== JSON.stringify(adoption.previous_claim)
      || JSON.stringify(JSON.parse(h.previous_claim_raw)) !== JSON.stringify(h.previous_claim)
      || h.previous_claim_sha256 !== adoptionSha(h.previous_claim_raw)
      || h.previous_adoption_raw !== readAdoptionResearch(root, h.previous_claim.adoption_receipt)
      || h.previous_adoption_sha256 !== adoptionSha(h.previous_adoption_raw))
      throw new Error('forged or mismatched adoption history');
    const oldAdoption = JSON.parse(h.previous_adoption_raw);
    if (h.previous_acceptance_raw !== readAdoptionResearch(root, oldAdoption.acceptance_file)
      || h.previous_acceptance_sha256 !== adoptionSha(h.previous_acceptance_raw))
      throw new Error('previous owner acceptance history mismatch');
    const oldAcceptance = JSON.parse(h.previous_acceptance_raw);
    authenticateAdoption(root, h.previous_claim, oldAcceptance,
      readAdoptionResearch(root, oldAcceptance.corrected_file), seen);
    if (Date.parse(h.previous_claim.claimed_at) >= Date.parse(claim.claimed_at))
      throw new Error('refresh must follow predecessor adoption');
    predecessor = { claim: h.previous_claim, acceptance: oldAcceptance };
  }
  const { acceptance: a, acceptance_sha256 } = validateAdoptionAcceptance(root,
    adoption.acceptance_file, claim.claimed_at, liveText, predecessor);
  if (acceptance_sha256 !== adoption.acceptance_sha256) throw new Error('owner acceptance changed after adoption');
  for (const key of ['run', 'id', 'group', 'pre_sha256'])
    if (a[key] !== claim[key] || adoption[key] !== claim[key] || receipt[key] !== claim[key])
      throw new Error(`adoption ${key} mismatch`);
  for (const key of ['before_file', 'before_raw_sha256', 'content_sha256', 'prior_publication_commit'])
    if (receipt[key] !== a[key]) throw new Error(`repair/adoption ${key} mismatch`);
  return adoption;
}

/** Preserve a truthful predecessor in a new nonoverwriting history carrier. */
export function prepareAdoptionRefresh(root, claim, now, claimRaw = JSON.stringify(claim)) {
  if (claim?.claim_kind !== ADOPTION_KIND) throw new Error('refresh requires an explicit adopted ownership claim');
  const adoptionRaw = readAdoptionResearch(root, claim.adoption_receipt), adoption = JSON.parse(adoptionRaw);
  const acceptanceRaw = readAdoptionResearch(root, adoption.acceptance_file), acceptance = JSON.parse(acceptanceRaw);
  authenticateAdoption(root, claim, acceptance, readAdoptionResearch(root, acceptance.corrected_file));
  if (Date.parse(now) <= Date.parse(claim.claimed_at)) throw new Error('refresh must follow predecessor adoption');
  if (JSON.stringify(JSON.parse(claimRaw)) !== JSON.stringify(claim)) throw new Error('previous raw claim mismatch');
  return { predecessor: { claim, acceptance }, history: {
    version: 1, kind: 'published-repair-adoption-history', recorded_at: now,
    previous_claim: claim, previous_claim_raw: claimRaw, previous_claim_sha256: adoptionSha(claimRaw),
    previous_adoption_raw: adoptionRaw, previous_adoption_sha256: adoptionSha(adoptionRaw),
    previous_acceptance_raw: acceptanceRaw, previous_acceptance_sha256: adoptionSha(acceptanceRaw),
  } };
}
