# Impact receipts and preserved supplier claims

`impact-audit.mjs` computes changed surface fingerprints and direct or transitive
consumer inventories from the selected immutable touchlog window. Historical
surface fingerprints include frontmatter and Facts as well as the exported
Statement or Definition. A proof dependency repair can therefore change this
fingerprint while preserving the original supplier claim. Under the repository's
Statement/Definition propagation rule, that event creates no consumer review duty.

When actual baseline bytes are available, the owner can add a hash-bound
`claim_preservations` link to an impact receipt. Preserve the original receipt
and attribute the owner amendment separately. This is an inventory comparison,
not a new mathematical review or native worker attestation. The linked research
JSON has this schema, with actual values rather than placeholders:

```json
{
  "version": 1,
  "policy": "impact-claim-preservation-v1",
  "id": "SUPPLIER",
  "owner": true,
  "owner_identity": "/root",
  "at": "ACTUAL_OBSERVATION_TIME",
  "reason": "Actual reason for comparing the preserved claim",
  "window": {
    "before_snapshot_sha256": "SHA256_OF_JSON_STRINGIFY_BASELINE_SNAPSHOT",
    "after_snapshot_sha256": "SHA256_OF_JSON_STRINGIFY_SELECTED_CURRENT_SNAPSHOT",
    "from": "BASELINE_LABEL",
    "to": "CURRENT_SELECTED_LABEL"
  },
  "before": { "path": "research/ACTUAL_BEFORE.item", "sha256": "RAW_ITEM_SHA256" },
  "after": { "guard_sha256": "FULL_CURRENT_GUARD_SHA256", "surface_sha256": "FULL_CURRENT_SURFACE_SHA256" },
  "claim_sha256": "SHA256_OF_THE_EXACT_ORIGINAL_CLAIM_SECTION"
}
```

The receipt links it as `claim_preservations: [{ "path": "research/EVIDENCE.json",
"sha256": "RAW_EVIDENCE_SHA256" }]`. Evidence and retained bytes must resolve
inside the repository's real research directory and match their full raw hashes.
The tool checks the baseline and current guard/surface hashes against both
selected snapshots and their complete bound payloads, the current full hashes, item identity and unchanged kind. Appending another snapshot leaves the selected historical window valid; changing either selected snapshot does not.
It requires exactly one nonempty literal Statement for a lemma/theorem/
proposition/corollary, or Definition for a definition, and byte-identical old and
current claim sections with the recorded full claim hash. Missing claims,
changed claims, ambiguous claims, duplicate subjects, stale windows, false owner
authority, escaping paths or any mismatched binding fail closed. No snapshot is
rewritten and no claim is reconstructed from a fingerprint.

Validated events remain visible in `maintenance_changes` and
`maintenance_impacts`, including their logical and citation consumers. They are
excluded only from changed-claim review duties; every other source event retains
the existing computation and review requirements. Missing actual reviews cannot
be filled by this evidence. Ordinary invocations without preservation evidence
retain the legacy surface behavior.

The existing `--refresh-receipt` command updates the computed inventory and source
window, preserving all written dispositions and adding only pending rows for
new review subjects. It records the maintenance inventory when preservation
evidence validates, and refuses to refresh on invalid preservation evidence.
The receipt checker independently revalidates these bindings on every gate run.
