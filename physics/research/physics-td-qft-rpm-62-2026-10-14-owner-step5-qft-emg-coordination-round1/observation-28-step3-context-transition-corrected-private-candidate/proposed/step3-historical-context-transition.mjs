// Verify a separately attributed current external-context binding without
// resealing or changing the original Step-3 closure or historical decisions.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { basename, dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { isDeepStrictEqual as equal } from 'node:util';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { externalContextReceipt } from './step3-escalations.mjs';

const raw = bytes => createHash('sha256').update(bytes).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const need = (ok, message) => { if (!ok) throw Error('Step-3 historical context: ' + message); };
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');
const omit = (value, fields) => Object.fromEntries(Object.entries(value).filter(([key]) => !fields.includes(key)));
const prefix = (before, after) => Array.isArray(before) && Array.isArray(after)
  && before.length <= after.length && before.every((row, i) => equal(row, after[i]));
const unique = rows => new Set(rows).size === rows.length;

function immutableSeal(seal, refreshed) {
  const copy = structuredClone(seal);
  delete copy.receipt_sha256;
  if (refreshed) {
    delete copy.consumer_math_sha256;
    delete copy.review_evidence;
    for (const row of copy.reviewed_maintenance_findings ?? []) delete row.review_evidence;
  }
  return copy;
}
function immutableContext(entry) {
  const copy = structuredClone(entry);
  delete copy.consumer_math_sha256;
  delete copy.premise_quotes;
  copy.review = omit(copy.review, ['evidence', 'evidence_refs']);
  for (const row of copy.reviewed_maintenance_findings ?? []) {
    row.review = omit(row.review, ['evidence', 'evidence_refs']);
  }
  return copy;
}

/** Returns only exact historical/current artifact pairs authenticated by the
 * root receipt. No source, decision, certificate, ledger or closure is written. */
export function historicalContextTransition(root, run, closure, currentArtifacts) {
  root = resolve(root);
  const pointerPath = join(root, 'research', run + '-step3-historical-context-transition.json');
  if (!existsSync(pointerPath)) return new Map();
  const pointer = read(pointerPath), research = realpathSync(join(root, 'research'));
  need(pointer.version === 1 && pointer.run === run, 'wrong advertisement');
  const bound = ref => {
    need(ref && typeof ref.path === 'string' && !isAbsolute(ref.path) && sha(ref.sha256), 'invalid raw evidence reference');
    const file = resolve(root, ref.path), rel = relative(research, realpathSync(file));
    need(!isAbsolute(rel) && !rel.startsWith('..') && rel.startsWith(run + '-'), 'evidence is not run-local');
    need(raw(readFileSync(file)) === ref.sha256, 'evidence changed: ' + ref.path);
    return file;
  };
  const receiptPath = bound(pointer.receipt), receipt = read(receiptPath);
  need(dirname(receiptPath) === research
    && basename(receiptPath).startsWith(run + '-step3-historical-context-transition-')
    && receiptPath !== pointerPath, 'transition receipt must be separate immutable research evidence');
  need(receipt.version === 1 && receipt.run === run && receipt.reviewer === '/root'
    && receipt.scope === 'historical-external-context-binding-only'
    && typeof receipt.reason === 'string' && receipt.reason.trim().length >= 40
    && typeof receipt.scientific_owner === 'string' && receipt.scientific_owner.startsWith('/root/'), 'wrong root authority');
  const closurePath = bound(receipt.closure);
  need(closurePath === join(research, run + '-step3-closure.json') && equal(read(closurePath), closure), 'wrong frozen closure');
  const beforeFile = bound(receipt.before_decision), decisionFile = bound(receipt.decision);
  need(dirname(decisionFile) === research && basename(decisionFile).startsWith(run + '-alpha-')
    && basename(decisionFile).endsWith('-3a-decisions.json')
    && closure.artifacts?.[receipt.decision.path] === receipt.before_decision.sha256
    && currentArtifacts[receipt.decision.path] === receipt.decision.sha256
    && receipt.before_decision.sha256 !== receipt.decision.sha256, 'decision is not the exact frozen/current artifact pair');
  const before = read(beforeFile), current = read(decisionFile);
  need(equal(omit(before, ['decisions']), omit(current, ['decisions']))
    && before.version === 1 && before.run === run && Array.isArray(before.decisions)
    && Array.isArray(current.decisions) && before.decisions.length === current.decisions.length
    && unique(before.decisions.map(row => row.obligation)), 'decision document or row set changed');
  const oldContextFile = bound(receipt.before_context), contextFile = bound(receipt.context);
  need(contextFile === join(research, run + '-step3-owner-external-context.json'), 'wrong current context receipt');
  const oldContext = read(oldContextFile), context = read(contextFile);
  need(oldContext.version === 1 && oldContext.run === run && oldContext.reviewed_by === 'root'
    && equal(omit(oldContext, ['contexts', 'inputs']), omit(context, ['contexts', 'inputs']))
    && Array.isArray(oldContext.contexts) && Array.isArray(context.contexts)
    && equal(oldContext.contexts.map(row => row.obligation), context.contexts.map(row => row.obligation))
    && unique(oldContext.contexts.map(row => row.obligation)), 'context document or entry set changed');
  const ownerFile = bound(receipt.owner_proposal), owner = read(ownerFile);
  need(owner.run === run && owner.released === true && owner.scientific_owner === receipt.scientific_owner
    && owner.source_shared_writes === false
    && owner.observed_original_context_receipt?.sha256 === receipt.before_context.sha256
    && owner.entries && typeof owner.entries === 'object', 'missing authentic same-owner original/current review lineage');
  const originalReviewFile = bound(owner.genuine_original_receipt);
  const originalReview = read(originalReviewFile);
  need(originalReview.run === run && originalReview.released === true
    && originalReview.source_writes === false && originalReview.shared_writes === false, 'original review is not preserved');
  const selectedBefore = read(bound(owner.observed_original_selected_entries));
  const science = new Map((receipt.science ?? []).map(ref => [bound(ref), ref.sha256]));
  need(science.has(ownerFile) && science.has(originalReviewFile), 'same-owner review evidence is not explicitly bound');
  const refreshed = receipt.refreshed_obligations;
  need(Array.isArray(refreshed) && refreshed.length > 0 && unique(refreshed)
    && equal([...refreshed].sort(), Object.keys(owner.entries).sort()), 'wrong exact refreshed use inventory');
  const refreshedSet = new Set(refreshed);
  const oldEntries = new Map(oldContext.contexts.map(row => [row.obligation, row]));
  const checkAppend = (oldRefs, newRefs) => {
    need(prefix(oldRefs, newRefs), 'original review evidence was removed or reordered');
    for (const ref of newRefs.slice(oldRefs.length)) need(science.has(bound(ref)), 'new review reference is not root-bound same-owner science');
  };
  for (const entry of context.contexts) {
    const old = oldEntries.get(entry.obligation);
    if (!refreshedSet.has(entry.obligation)) {
      need(equal(old, entry), 'unrefreshed context changed: ' + entry.obligation);
      continue;
    }
    need(equal(selectedBefore[entry.obligation], old)
      && equal(immutableContext(old), immutableContext(entry))
      && equal(owner.entries[entry.obligation].proposed_context_entry, entry), 'context exceeds exact original-owner proposal: ' + entry.obligation);
    checkAppend(old.review.evidence_refs, entry.review.evidence_refs);
    for (const [i, row] of (old.reviewed_maintenance_findings ?? []).entries()) {
      checkAppend(row.review.evidence_refs, entry.reviewed_maintenance_findings[i].review.evidence_refs);
    }
  }
  need(oldContext.inputs && context.inputs, 'missing original/current input bindings');
  for (const [path, hash] of Object.entries(oldContext.inputs)) need(context.inputs[path] === hash, 'original context input changed: ' + path);
  for (const [path, hash] of Object.entries(context.inputs)) {
    const file = bound({ path, sha256: hash });
    if (!(path in oldContext.inputs)) need(science.has(file), 'new context input is not bound review evidence');
  }
  const sealed = [];
  for (const [i, old] of before.decisions.entries()) {
    const row = current.decisions[i];
    if (old.verdict !== 'context_accepted') {
      need(equal(old, row), 'noncontext decision changed: ' + old.obligation);
      continue;
    }
    need(equal(omit(old, ['context_receipt_sha256', 'context_evidence']), omit(row, ['context_receipt_sha256', 'context_evidence']))
      && old.context_receipt_sha256 === receipt.before_context.sha256
      && old.context_evidence?.receipt_sha256 === receipt.before_context.sha256
      && row.context_receipt_sha256 === receipt.context.sha256
      && row.context_evidence?.receipt_sha256 === receipt.context.sha256
      && equal(immutableSeal(old.context_evidence, refreshedSet.has(old.obligation)),
        immutableSeal(row.context_evidence, refreshedSet.has(old.obligation))), 'noncontext field or unlicensed seal changed: ' + old.obligation);
    const verified = externalContextReceipt(root, run, row, null, current.group);
    need(verified.valid && equal(verified.seal, row.context_evidence), 'current native external-context verification failed: ' + old.obligation + ': ' + (verified.error ?? 'seal mismatch'));
    sealed.push(old.obligation);
  }
  need(equal(sealed, receipt.context_seal_obligations)
    && refreshed.every(id => sealed.includes(id)), 'root receipt does not name exactly all changed context seals');
  const native = receipt.native_certification, certFile = bound(native?.certificate), cert = read(certFile);
  const { sha256: payloadHash, ...payload } = cert;
  need(cert.version === 2 && cert.run === run && cert.phase === 'impact-repeat'
    && Number.isSafeInteger(cert.round) && cert.round > 0 && payloadHash === raw(JSON.stringify(payload))
    && certFile === join(research, run + '-step5-v2', 'certification-impact-repeat-' + cert.round + '.json'), 'wrong genuine native certificate');
  const label = 'step5-v2-certify-impact-repeat-r' + cert.round + '-all';
  const dispatchFile = bound(native.dispatch), dispatch = read(dispatchFile);
  need(dispatchFile === join(research, run + '-dispatch', 'tool-' + label + '.result.json')
    && dispatch.run === run && dispatch.role === 'tool' && dispatch.label === label && dispatch.ok === true
    && dispatch.written_by === 'autopilot' && equal(dispatch.covers, ['all'])
    && Number.isFinite(Date.parse(dispatch.ended_at)) && Date.parse(dispatch.ended_at) >= Date.parse(cert.at), 'native certification did not actually complete');
  const state = read(join(root, '.physics-autopilot', run, 'state.json'));
  need(state.run === run && Date.parse(state.stages?.['5.7-certify']?.gatesPassedAt) >= Date.parse(dispatch.ended_at), 'native certification gate has not passed');
  const consumers = [...new Set(refreshed.map(id => oldEntries.get(id).consumer_id))].sort();
  need(equal(consumers, [...(native.subjects ?? [])].sort()) && unique(native.subjects ?? []), 'wrong certified consumer inventory');
  for (const id of consumers) {
    const text = readFileSync(join(root, 'items', id + '.md'));
    const rows = cert.items.filter(row => row.id === id);
    need(rows.length === 1 && rows[0].guard_sha256 === itemHashGuard(text.toString('utf8'))
      && rows[0].item_sha256 === itemHashJudge(text.toString('utf8')) && sha(rows[0].context_sha256), 'certified consumer content is no longer current: ' + id);
  }
  return new Map([[receipt.decision.path, { before: receipt.before_decision.sha256,
    current: receipt.decision.sha256, receipt: pointer.receipt }]]);
}
