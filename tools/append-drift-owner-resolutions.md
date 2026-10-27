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
