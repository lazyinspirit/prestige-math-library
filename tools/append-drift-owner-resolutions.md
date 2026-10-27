# Owner resolution of a native append planning blocker

This is a separate owner decision after an actual local repair, not an Alpha
verdict, proof acceptance, worker execution, coverage, readiness, or gate waiver.
The native blocked report and all earlier native results stay unchanged. It
requires an **already sealed, successful engine-started append refresh**; it
never requests another review or manufactures a native result.

The owner alone writes
`research/RUN-frontier-append-N/owner-drift-resolutions.json`. The read-only
validator is `loadAppendDriftOwnerResolutions` in
`tools/append-drift-owner-resolutions.mjs`. `checkAppendReview` accepts only the
exact blocked lines it validates. After native application,
`drift-review-check.mjs` validates the same decision against the exact merged
native report and `review-applied.json`. Native application records the owner
receipt's raw hash as `ownerResolutionSha256`; the merged-report check requires
that exact binding. Ordinary nonblocked reviews retain
the existing path and require no owner receipt.

Every evidence link below is `{ "path": "repository-relative/path", "sha256":
"SHA256_OF_RAW_FILE_BYTES" }`. Files and their ancestor components must be
regular nonsymlink repository files. The receipt shape is:

```json
{
  "version": 1,
  "policy": "owner-resolved-native-append-drift-blockers",
  "run": "RUN",
  "number": 3,
  "authorized_by": "owner",
  "owner_identity": "/root",
  "authorized_at": "ISO timestamp",
  "reason": "Actual focused planning repair accepted by the owner",
  "entry_sha256": "SHA256_OF_JSON.stringify(EXACT_REGISTRY_ENTRY)",
  "report": {"path": "research/RUN-alpha-step1-append-3-drift.md", "sha256": "HASH"},
  "scope_sha256": "SCOPED_INTERFACE_DIGEST",
  "plan": {"path": "research/plan-spec.json"},
  "ledger": {"path": "research/RUN-scope-ledger.json"},
  "append_evidence": {"path": "research/RUN-append-3-drift-evidence.json", "sha256": "HASH"},
  "manifests": [{"path": "research/RUN-batch-BATCH.pages.json", "pages_sha256": "PAGE_IDENTITY_DIGEST"}],
  "inputs": [{"path": "research/actual-required-input.md", "sha256": "HASH"}],
  "native_refresh": {"path": "research/RUN-frontier-append-3/current-review-refresh.json", "sha256": "HASH"},
  "native_seal": {"path": "research/RUN-frontier-append-3/refresh-ID.seal.json", "sha256": "HASH"},
  "native_result": {"path": "research/RUN-dispatch/alpha-drift-review-append-3-refresh-ID.result.json", "sha256": "HASH"},
  "native_prompt": {"path": "research/RUN-dispatch/alpha-drift-review-append-3-refresh-ID.attempt-ATTEMPT.prompt.md", "sha256": "HASH"},
  "native_task": {"path": "research/RUN-frontier-append-3/refresh-ID.task.md", "sha256": "HASH"},
  "resolutions": [{
    "page": "EXACT_APPENDED_A_PAGE",
    "verdict": "VERDICT: drift-blocked — EXACT UNCHANGED NATIVE DETAIL",
    "reason": "The precise repaired planning obligation",
    "sources": [{
      "path": "research/ARCHIVE/full-plan-after.json",
      "original": {"path": "research/ARCHIVE/full-plan-before.json", "sha256": "HASH"},
      "current_sha256": "CURRENT_HASH"
    }],
    "proof_evidence": [{"path": "research/actual-full-local-proof.md", "sha256": "HASH"}],
    "consumers": [{
      "page": "EXACT_AFFECTED_PAGE", "disposition": "checked-unaffected",
      "reason": "Concrete actual interface/use disposition"
    }],
    "evidence": {"path": "research/owner-acceptance.json", "sha256": "HASH"}
  }]
}
```

`scope_sha256` is calculated by the exported function
`appendDriftOwnerScopeHash(entry, receipt.resolutions, currentLedger, currentPlan)`.
It binds the complete planned page/item/design objects for each resolved page,
its companion and all transitive planned consumers, and their direct prerequisite
pages. It also binds the corresponding ledger rows and in-run dependency policy.
Object keys are recursively sorted; array order is preserved. A new actual
consumer or changed affected/prerequisite interface fails closed. Unrelated
new pages/items and global plan formatting do not invalidate the decision.

`manifests` binds every appended batch exactly once and its complete page ID/kind
selector. Calculate `pages_sha256` with the exported
`appendManifestPageHash(parsedManifest)`; authored item inventories remain
protected by the existing native application before/after preservation checks
and full raw hashes in its application receipt. Ordinary authoring and Step-2
transcription are not fresh planning defects. Full planned item/design claims
are bound by `scope_sha256`, rather than by a permanently empty pre-authoring
manifest item list.

`inputs` is nonempty and raw-hash-binds actual stable repair inputs under
`research/`, `items/`, or `library/`. Include immutable full plan/ledger snapshots
there when used as repair evidence. The registry-entry hash uses parsed JSON
serialized with JavaScript `JSON.stringify`. Store the full plan before/after
source evidence in immutable snapshots; using the mutable global plan itself
as a `sources` current-file link would unnecessarily stale that raw binding.

Every `sources` entry binds a complete archived before file and a different
current full-file hash. Research Markdown and JSON are permitted, allowing the
actual plan correction to bind its full preimage. Item and library source
repairs must be Markdown. At least one before/after pair contains the resolved
page ID. New independent proof files are separately bound by the nonempty
`proof_evidence` list. Neither their filenames nor their contents are treated
as automatic mathematical acceptance; the owner must genuinely accept the
repair. Empty or missing proof evidence fails closed.

Consumer dispositions cover the companion and every planned transitive
`requires` consumer, exactly once, as `repaired` or `checked-unaffected`, with a
concrete reason. Nonlogical consumers remain the owner's responsibility.
The focused owner acceptance JSON must have:

```json
{
  "run": "RUN", "number": 3, "page": "EXACT_APPENDED_A_PAGE",
  "owner": true, "decision": "resolved", "reason": "Actual owner acceptance",
  "verdict": "EXACT_UNCHANGED_VERDICT_LINE",
  "sources": [], "consumers": [], "proof_evidence": [],
  "repair_evidence": {"path": "research/genuine-delegated-repair-report.md", "sha256": "HASH"}
}
```

The three arrays must equal the corresponding nonempty/complete resolution
arrays exactly; the empty arrays here are schema placeholders. The separate
`repair_evidence` must exist, be nonempty, hash-match, and differ from the owner
acceptance wrapper. The validator checks the actual refresh request, immutable
seal, prompt assignment, completed native result, and engine-started request
and dispatch in current state. It performs no state or evidence writes.

All ordinary plan, inventory-preservation, buildability, readiness, review and
scope gates still run. A repaired constant-coefficient sublemma may resolve a
specific planning blocker while a larger theorem's distinct mathematical
obligations remain held; this mechanism does not certify the larger theorem.

Focused tests:

```bash
node tools/tsx-run.mjs --test tools/autopilot/test/append-owner-resolution.test.mts
```

## Retaining concurrent authoring in prior manifests

A separate receipt allows native append application to retain actual owner-
authorized authoring performed after its immutable prior-manifest capture. It
is **not** drift resolution, mathematical acceptance, readiness, review or
worker coverage. It does not overwrite the native preimages or replace the
existing order-only recovery.

The owner writes
`research/RUN-frontier-append-N/owner-manifest-authoring-recovery.json`:

```json
{
  "version": 1,
  "policy": "owner-retained-append-manifest-authoring",
  "run": "RUN", "number": 3,
  "authorized_by": "owner", "owner_identity": "/root",
  "authorized_at": "ISO timestamp",
  "reason": "Retain the exact genuine authorized authoring changes",
  "entry_sha256": "SHA256_OF_JSON.stringify(EXACT_REGISTRY_ENTRY)",
  "records": [{
    "path": "research/RUN-batch-20.pages.json",
    "original": {
      "path": "research/RUN-frontier-append-3/preimages/RUN-batch-20.pages.json",
      "sha256": "EXACT_NATIVE_PREIMAGE_HASH"
    },
    "current_sha256": "FULL_CURRENT_MANIFEST_RAW_HASH",
    "items": [{
      "page": "ORIGINAL_PAGE_ID", "id": "EXACT_ITEM_ID",
      "change": "added",
      "reason": "Actual authorized authoring and its status limits",
      "source": {"path": "items/EXACT_ITEM_ID.md", "sha256": "CURRENT_RAW_HASH"},
      "contract": {"path": "research/RUN-batch-20.proof-contracts.json", "sha256": "CURRENT_RAW_HASH"},
      "repair_evidence": {"path": "research/ACTUAL_DELEGATED_REPAIR_REPORT.md", "sha256": "HASH"}
    }]
  }],
  "evidence": {"path": "research/OWNER_AUTHORING_ACCEPTANCE.json", "sha256": "HASH"}
}
```

The separate owner evidence has `run`, `number`, `owner: true`,
`decision: "retain-authoring"`, a nonempty `reason`, and `records` **identical**
to the receipt's records. Every actually changed or added item has exactly one
item record; `change` is `updated` for an existing item and `added` for a new ID.
Source files must declare that exact ID. The current batch worksheet must
contain both its scope declaration and exact contract object. Each record binds
nonempty genuine delegated repair evidence separately from the owner wrapper.
These are evidence checks, not an automatic mathematical evaluation.

For each listed manifest, all old pages and all their fields except `items`
remain equal, allowing only JSON key/page ordering differences. Every old item
ID stays on its original page. All exact existing-item metadata changes and
inserted IDs must be enumerated; item reordering itself requires no item record.
Current duplicate IDs across any batch fail closed. Missing, moved or dropped
old IDs, unbound deltas, changed page fields, stale preimages/current manifests,
source/worksheet/evidence hashes and a wrong generation fail closed. The same
mechanism works independently for append 3, append 4, and later generations;
each binds its own actual native capture.

`loadAppendManifestAuthoringRecovery` is read-only. Native application consults
it only for unexpected prior-manifest changes. Other changed manifests still
need their own exact recovery binding. Native SYNC must then preserve **all
current** page/item inventories, including the retained helpers and updates.
Its application receipt records `ownerManifestRecoverySha256` alongside the
post-SYNC full manifest hashes. An ordinary retry matching that successful
application uses its own hashes; it does not reinterpret the historical
pre-SYNC owner receipt as a new baseline or discard old evidence.

Focused recovery and native application tests:

```bash
node tools/tsx-run.mjs --test tools/autopilot/test/append-manifest-authoring-recovery.test.mjs tools/autopilot/test/append-owner-resolution.test.mts tools/autopilot/test/frontier-append.test.mts
```

### Page fields already changed by an authentic earlier native SYNC

A later append may have captured its preimages before an earlier generation
applied native SYNC. In that case its recovery record may add:

```json
"native_sync": {
  "number": 3,
  "application": {"path": "research/RUN-frontier-append-3/review-applied.json", "sha256": "HASH"},
  "result": {"path": "research/RUN-dispatch/tool-drift-append-apply-3.result.json", "sha256": "HASH"},
  "manifest": {"path": "research/ARCHIVE/native-sync-3-batch-BATCH.pages.json", "sha256": "HASH"}
}
```

This accepts no arbitrary page-field edit. The full immutable manifest snapshot
must hash-match the earlier native application receipt's exact post-SYNC row
for this same batch. Its full report merge and archived report preimage must
remain exact. The actual successful native tool result and completed
engine-started dispatch must agree with that earlier generation. Every changed
current page field must equal the corresponding snapshot field; old page IDs,
page kinds, batch identity and all old item IDs on their original pages are
still mandatory. Later item-only changes remain subject to every exact current
source/worksheet/delegated-evidence binding in the ordinary recovery records.
The evidence snapshot preserves historical native metadata without requiring
current item inventories to remain frozen forever.

`repair_evidence` may truthfully document an unresolved/held mathematical edit.
It need not be a close-authoring report, and this recovery does not turn that
edit or its parent theorem into an accepted proof or ready item.
