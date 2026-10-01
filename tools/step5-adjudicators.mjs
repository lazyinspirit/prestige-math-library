// Step 5a has one adjudicator per batch. Keep existing group decisions readable
// while an older run drains; never mix shared and batch files within a group.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export const batchAdjudicator = (group, batch) => ({
  label: `batch-${batch}`, covers: [String(batch)], scopeGroup: group.label,
});

export function step5Adjudicators(root, run, groups, dispatchDir) {
  return groups.flatMap(group => {
    const batches = group.covers.map(batch => batchAdjudicator(group, batch));
    const decisionsExist = label => existsSync(join(root, 'research',
      `${run}-alpha-${label}-5a-decisions.json`));
    // Artifact lookup may reuse a legacy report only with successful coverage.
    // A failed legacy attempt must not inject its shared path into new workers.
    let legacyComplete = !dispatchDir;
    if (dispatchDir) {
      try {
        const receipt = JSON.parse(readFileSync(join(dispatchDir, `alpha-5a-${group.label}.result.json`), 'utf8'));
        legacyComplete = receipt.ok === true && Array.isArray(receipt.covers)
          && group.covers.every(batch => receipt.covers.map(String).includes(String(batch)));
      } catch { legacyComplete = false; }
    }
    return legacyComplete && decisionsExist(group.label) && !batches.some(batch => decisionsExist(batch.label))
      ? [group] : batches;
  });
}
