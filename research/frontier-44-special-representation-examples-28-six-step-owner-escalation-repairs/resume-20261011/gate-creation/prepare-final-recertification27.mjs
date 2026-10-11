import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const run = 'frontier-44-special-representation-examples-28-six-step';
const base = `research/${run}-owner-escalation-repairs/resume-20261011`;
const directory = `${base}/gate-creation/final-recertification27`;
const sha = value => createHash('sha256').update(value).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const marker = path => ({ path, sha256: sha(readFileSync(path)) });
const save = (path, value) => writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
const native = await import(pathToFileURL(resolve(`${base}/gate-creation/final-native8/native-validator-readonly.mjs`)));
const baseline = read(`research/${run}-step3-auditor-baseline.json`);
const current = native.inventory(process.cwd(), run);
if (current.length !== 902) throw Error(`Expected stable current 902 inventory, got ${current.length}`);
const original = new Set(baseline.items.map(row => row.id));
const additions = current.filter(row => !original.has(row.id));
if (additions.length !== 27) throw Error(`Expected 27 postbaseline additions, got ${additions.length}`);
mkdirSync(directory, { recursive: true });
const new8 = read(`${base}/gate-creation/final-native8/index.json`).rows;
const rows = [];
for (const row of additions) {
  const carriers = native.carrierHashes(process.cwd(), run, row);
  const originPath = `research/${run}-step3-owner-creation-${row.id}.json`;
  const exists = existsSync(originPath);
  const origin = exists ? native.loadStep3OwnerCreation(process.cwd(), run, row.id).marker : null;
  const pending = new8.find(value => value.id === row.id);
  if (!origin && !pending) throw Error(`${row.id}: no genuine origin or prepared new origin`);
  const evidence = {
    version: 1, run, step: 3, id: row.id, owner: true, owner_identity: '/root',
    prepared_at: new Date().toISOString(), page: row.page, batch: row.batch, carriers,
    immutable_owner_origin: origin,
    pending_first_origin: pending ? marker(pending.path) : null,
    root_integration: [
      marker(`${base}/root-application/gate1-positivity-metadata-receipt.json`),
      marker(`${base}/root-application/gate1-six-rehomes-receipt.json`),
      marker(`${base}/root-application/gate1-native-application-receipt.json`),
    ],
    reason: 'Current source/contract/manifest ownership recertification after genuine gate-1 repairs and root metadata integration. Immutable creation origins, author identities and original native worker history are preserved. This binds current carriers only; no independent mathematical acceptance, native execution coverage or refunded review round is asserted.',
    mathematical_review_claimed: false,
  };
  const path = `${directory}/${row.id}.json`;
  save(path, evidence);
  // Current native recertifier stores evidence by research basename; root must
  // copy this exact payload to this root-level evidence path before invoking.
  const nativeEvidencePath = `research/${run}-step3-owner-current-carrier-evidence-${row.id}-${sha(JSON.stringify(carriers)).slice(0, 16)}.json`;
  rows.push({
    id: row.id, source_evidence_path: path, source_evidence_sha256: sha(readFileSync(path)),
    native_evidence_path: nativeEvidencePath, origin_registered: exists,
    new_origin_command: pending?.command ?? null,
    recertification_required: exists,
    recertification_command: ['node', 'tools/auditor-created-items.mjs', 'owner-recertify',
      '--run', run, '--step', '3', '--id', row.id, '--evidence', nativeEvidencePath,
      '--reason', evidence.reason], carriers,
  });
}
save(`${directory}/index.json`, {
  run, prepared_at: new Date().toISOString(), current_inventory_count: current.length,
  count: rows.length, existing_registered_origins: rows.filter(row => row.origin_registered).length,
  new_pending_origins: rows.filter(row => !row.origin_registered).length,
  native_evidence_path_note: 'Root must copy each exact source payload to its root-level native_evidence_path; current native API records research basename. No files copied and no recertification invoked by preparer.',
  no_native_writes: true, rows,
});
console.log(`Prepared ${rows.length} current-carrier evidence packets: ${rows.filter(row => row.origin_registered).length} registered origins to recertify + ${new8.length} first origins.`);
