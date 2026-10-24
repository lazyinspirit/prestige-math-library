// Same-frontier root metadata reconciliation; native stages remain owed.
import { syncManifestsPreservingItems } from '../../tools/physics-support/plan-manifests.mjs';
import { writeBatchDependencyLevels } from '../../tools/physics-support/batch-dependency-levels.mjs';
const run = 'advanced-qft-supersymmetry-build-2026-10-23';
const rows = syncManifestsPreservingItems(process.cwd(), run);
const levels = writeBatchDependencyLevels(process.cwd(), run);
console.log(`Preserved ${rows.length} batches and item inventories; reconciled ${levels.batches.length} scheduling rows. No dispatch, stage or gate coverage created.`);
