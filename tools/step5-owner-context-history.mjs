// Exact-byte context preservation for historical Step-5 proof attestations.
// This archives review inputs; it grants no authorship or current acceptance.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { itemHashGuard } from './item-hash.mjs';
import { split, yaml } from './pathway-lib.mjs';
const POLICY = 'step5-owner-historical-context-archive-v1';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const safe = value => { if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid historical context identifier'); return value; };
const KEYS = ['guard_sha256', 'judge_sha256', 'item_file_sha256', 'manifest_sha256', 'contract_sha256', 'step5_subject_sha256'];
const read = path => JSON.parse(readFileSync(path, 'utf8'));
function research(root, path) {
  const file = resolve(root, String(path ?? ''));
  if (!existsSync(file) || !realpathSync(file).startsWith(realpathSync(join(root, 'research')) + '/'))
    throw Error('Historical context evidence must resolve inside research');
  return file;
}
function bound(root, link) {
  if (!/^[a-f0-9]{64}$/.test(link?.sha256 ?? '')) throw Error('Invalid historical context hash');
  const bytes = readFileSync(research(root, link.path));
  if (sha(bytes) !== link.sha256) throw Error('Tampered historical context binding');
  return bytes;
}
function payload(text) {
  const block = text.match(/```step5-manifest-repair\s*\n([\s\S]*?)\n```/);
  if (!block) throw Error('Missing historical proof evidence');
  return JSON.parse(block[1]);
}
function stem(run, id, marker, context) {
  const legacy = `${safe(run)}-step5-owner-context-archive-${safe(id)}-${marker.sha256}-${safe(context.id)}`;
  // Keep existing archives addressable. Long item pairs otherwise exceed the
  // filesystem's 255-byte basename limit for the longest sidecar suffix.
  if (Buffer.byteLength(`${legacy}.certification.json`) <= 255) return legacy;
  const identity = { run, id, owner_recertification_sha256: marker.sha256, context_id: context.id };
  const compact = `${run}-step5-owner-context-archive-${sha(JSON.stringify(identity))}`;
  if (Buffer.byteLength(`${compact}.certification.json`) > 255)
    throw Error('Run identifier is too long for an owned historical context archive');
  return compact;
}
function original(root, run, id, marker, certificationLink) {
  const receipt = JSON.parse(bound(root, marker));
  if (receipt.version !== 1 || receipt.policy !== 'auditor-created-owner-recertification-v1'
    || receipt.run !== run || receipt.step !== 5 || receipt.id !== id || receipt.owner !== true
    || receipt.basis !== 'initial-step5-current-proof-manifest-review')
    throw Error('Unsupported historical context owner receipt');
  const evidence = { path: receipt.evidence, sha256: receipt.evidence_sha256 };
  const proof = payload(bound(root, evidence).toString('utf8'));
  if (proof.run !== run || proof.step !== 5 || proof.id !== id
    || proof.repair_kind !== 'current-proof-manifest-review'
    || !Array.isArray(proof.review?.context_items)) throw Error('Wrong historical context evidence');
  const cert = JSON.parse(bound(root, certificationLink));
  const rows = cert.items?.filter(row => row.id === id) ?? [];
  if (cert.version !== 1 || cert.policy !== 'auditor-created-stage-bypass-v2'
    || cert.run !== run || cert.step !== 5 || rows.length !== 1
    || rows[0].owner_recertification?.path !== marker.path
    || rows[0].owner_recertification?.sha256 !== marker.sha256
    || rows[0].owner_recertification?.basis !== receipt.basis
    || rows[0].author_result !== receipt.author_result
    || KEYS.some(key => rows[0][key] !== receipt.carriers?.[key]))
    throw Error('Historical context certification does not bind owner receipt');
  return { receipt, evidence, proof };
}

export function archivedProofContext(root, run, id, marker, evidenceSha, context) {
  const name = stem(run, id, marker, context);
  const path = join(root, 'research', `${name}.json`);
  if (!existsSync(path)) return null;
  const archive = read(research(root, path));
  const allowed = ['version', 'policy', 'run', 'step', 'id', 'owner', 'owner_identity', 'at', 'reason', 'owner_recertification', 'evidence', 'certification', 'context'];
  if (Object.keys(archive).some(key => !allowed.includes(key))
    || archive.version !== 1 || archive.policy !== POLICY || archive.run !== run
    || archive.step !== 5 || archive.id !== id || archive.owner !== true
    || archive.owner_identity !== '/root' || !Number.isFinite(Date.parse(archive.at))
    || !String(archive.reason ?? '').trim()
    || archive.owner_recertification?.path !== marker.path
    || archive.owner_recertification?.sha256 !== marker.sha256
    || archive.evidence?.sha256 !== evidenceSha
    || archive.context?.id !== context.id || archive.context?.guard_sha256 !== context.guard_sha256
    || archive.context?.path !== `research/${name}.item`
    || archive.certification?.path !== `research/${name}.certification.json`)
    throw Error('Invalid historical context archive receipt');
  const { evidence, proof } = original(root, run, id, marker, archive.certification);
  if (evidence.path !== archive.evidence.path || evidence.sha256 !== archive.evidence.sha256
    || proof.review.context_items.filter(row => row.id === context.id
      && row.guard_sha256 === context.guard_sha256).length !== 1)
    throw Error('Historical context not bound by original proof review');
  const bytes = bound(root, archive.context), fm = yaml().parse(split(bytes.toString('utf8')).fm) ?? {};
  if (fm.id !== context.id || itemHashGuard(bytes.toString('utf8')) !== context.guard_sha256)
    throw Error('Historical context item ID or guard mismatch');
  return { path, receipt: archive, bytes };
}

export function recordOwnerContextArchive(root, run, step, id, certificationPath, contextId, sourcePath, ownerIdentity, reason) {
  if (Number(step) !== 5 || ownerIdentity !== '/root' || !String(reason ?? '').trim())
    throw Error('Historical context archive requires Step 5 root authority and reason');
  safe(run); safe(id); safe(contextId);
  const certBytes = readFileSync(research(root, certificationPath)), cert = JSON.parse(certBytes);
  const row = cert.items?.find(row => row.id === id), marker = row?.owner_recertification;
  if (!marker || !/^[a-f0-9]{64}$/.test(marker.sha256 ?? '')) throw Error('Missing historical owner recertification marker');
  const certification = { path: certificationPath, sha256: sha(certBytes) };
  const { evidence, proof } = original(root, run, id, marker, certification);
  const contexts = proof.review.context_items.filter(row => row.id === contextId);
  if (contexts.length !== 1 || !/^[a-f0-9]{64}$/.test(contexts[0].guard_sha256 ?? ''))
    throw Error('Context is not uniquely bound by historical proof evidence');
  const context = contexts[0], bytes = readFileSync(research(root, sourcePath));
  const fm = yaml().parse(split(bytes.toString('utf8')).fm) ?? {};
  if (fm.id !== contextId || itemHashGuard(bytes.toString('utf8')) !== context.guard_sha256)
    throw Error('Retained context bytes do not match historical ID and guard');
  const name = stem(run, id, marker, context), path = join(root, 'research', `${name}.json`);
  const prior = archivedProofContext(root, run, id, marker, evidence.sha256, context);
  if (prior) {
    if (prior.receipt.context.sha256 !== sha(bytes) || prior.receipt.certification.sha256 !== sha(certBytes))
      throw Error('Refusing different historical context archive');
    return { path, reused: true };
  }
  const record = { version: 1, policy: POLICY, run, step: 5, id, owner: true,
    owner_identity: '/root', at: new Date().toISOString(), reason,
    owner_recertification: { path: marker.path, sha256: marker.sha256 }, evidence,
    certification: { path: `research/${name}.certification.json`, sha256: sha(certBytes) },
    context: { id: contextId, guard_sha256: context.guard_sha256,
      path: `research/${name}.item`, sha256: sha(bytes) } };
  for (const [link, content] of [[record.context, bytes], [record.certification, certBytes]]) {
    const file = resolve(root, link.path);
    if (existsSync(file)) { if (sha(readFileSync(research(root, link.path))) !== link.sha256) throw Error('Refusing conflicting historical archive bytes'); }
    else writeFileSync(file, content, { flag: 'wx', mode: 0o444 });
  }
  // Revalidate original links before publishing the immutable sidecar.
  original(root, run, id, marker, certification);
  writeFileSync(path, JSON.stringify(record, null, 2) + '\n', { flag: 'wx', mode: 0o444 });
  archivedProofContext(root, run, id, marker, evidence.sha256, context);
  return { path, reused: false };
}
