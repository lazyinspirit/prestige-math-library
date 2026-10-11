import hashlib,difflib,json
out='research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/resume-20261011/integration/gate1-repair/rehome-support';p='tools/step3-scope.mjs';before=open(p).read();s=before
needle="import { loadOwnerIdMigrations } from './step3-owner-id-migrations.mjs';";assert s.count(needle)==1;s=s.replace(needle,needle+"\nimport { loadStep3OwnerRehomes, projectOwnerRehomeBatches, ownerRehomeCarrierBatch } from './step3-owner-rehomes.mjs';")
s=s.replace('function manifestItems() {','function currentManifestItems() {',1)
needle='function manifestPages() {';assert s.count(needle)==1;s=s.replace(needle,"""let ownerRehomeRows = null;
function ownerRehomes() {
  if (ownerRehomeRows === null) {
    try { ownerRehomeRows = loadStep3OwnerRehomes(ROOT, run); }
    catch (cause) { fail(`step3-scope: ${cause.message}`, 1); }
  }
  return ownerRehomeRows;
}
// Original native readers/refuters/Alpha retain their exact obligation batches.
// This view is Step3a routing only, never new-home execution coverage.
function manifestItems() {
  return projectOwnerRehomeBatches(currentManifestItems(), ownerRehomes());
}
function currentOwnerContract(id, historicalBatch, fallback = null) {
  const batch = ownerRehomeCarrierBatch(ownerRehomes(), id, historicalBatch);
  if (batch === String(historicalBatch)) return fallback ?? null;
  return readJson(R('research', `${run}-batch-${batch}.proof-contracts.json`), `rehome current batch ${batch} contract`).contracts?.[id] ?? null;
}

"""+needle,1)
needle='  return { itemRows, pageRows };';assert s.count(needle)==1;s=s.replace(needle,"""  for (const row of ownerRehomes().filter(row => row.from_batch === String(batch))) {
    itemRows.set(row.id, canonical({ ...row.current_manifest_entry, __step4_page_id: row.to_page }));
  }
"""+needle,1)
needle='hashValue(contract.contracts?.[id] ?? null)';assert s.count(needle)==2;s=s.replace(needle,'hashValue(currentOwnerContract(id, batch, contract.contracts?.[id]))')
needle="  const contractPath = R('research', `${run}-batch-${producer}.proof-contracts.json`);";assert s.count(needle)==1;s=s.replace(needle,"  const currentBatch = ownerRehomeCarrierBatch(ownerRehomes(), id, producer);\n  const contractPath = R('research', `${run}-batch-${currentBatch}.proof-contracts.json`);",1)
needle="""      if (!contractsByBatch.has(target.batch)) {
        contractsByBatch.set(target.batch, readJson(R('research', `${run}-batch-${target.batch}.proof-contracts.json`),
          `batch ${target.batch} proof contract`).contracts ?? {});
      }
      const entry = contractsByBatch.get(target.batch)[target.id];""";assert s.count(needle)==1;s=s.replace(needle,"""      const currentBatch = ownerRehomeCarrierBatch(ownerRehomes(), target.id, target.batch);
      if (!contractsByBatch.has(currentBatch)) {
        contractsByBatch.set(currentBatch, readJson(R('research', `${run}-batch-${currentBatch}.proof-contracts.json`),
          `batch ${currentBatch} proof contract`).contracts ?? {});
      }
      const entry = contractsByBatch.get(currentBatch)[target.id];""",1)
open(out+'/step3-scope.proposed.mjs','w').write(s);open(out+'/step3-scope.patch','w').write(''.join(difflib.unified_diff(before.splitlines(True),s.splitlines(True),fromfile=p,tofile=p)));json.dump({'path':p,'before_sha256':hashlib.sha256(before.encode()).hexdigest(),'proposed_file':out+'/step3-scope.proposed.mjs','proposed_sha256':hashlib.sha256(s.encode()).hexdigest(),'existing_id_migration_api_unchanged':True,'native_obligation_records_and_snapshots_unchanged':True},open(out+'/scope-proposal-guard.json','w'),indent=2)
