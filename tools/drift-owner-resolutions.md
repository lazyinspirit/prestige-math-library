# Owner resolution of a repaired drift blocker

The owner writes `research/RUN-owner-drift-resolutions.json` only after accepting
the actual focused repair. `drift-review-check.mjs` validates it in both modes.
This records planning acceptance, not mathematical proof/review coverage.
Native reports, successful results and original evidence remain unchanged.

All links use repository-relative regular nonsymlink files and SHA-256 of raw
bytes. Original source links must preserve the complete before file, not excerpts.
Calculate `scope_sha256` without running a gate:

```bash
node tools/drift-owner-resolutions.mjs --run RUN
```

The scope digest binds the complete ledger page rows, the in-run dependency
policy and each ledger page's current plan ID, kind, category, order, companion
and requirements. Subsequent item authoring is not a planning scope change.

Receipt shape (replace every placeholder with actual evidence):

```json
{
  "version": 1,
  "policy": "owner-resolved-drift-blockers",
  "authorized_by": "owner",
  "owner_identity": "/root",
  "authorized_at": "ISO timestamp",
  "reason": "Actual owner acceptance of the focused planning repair",
  "run": "RUN",
  "scope_sha256": "DIGEST",
  "report": {"path": "research/RUN-alpha-step1-drift.md", "sha256": "DIGEST"},
  "original_report": {"path": "research/ARCHIVE/original-report.md", "sha256": "SAME DIGEST"},
  "native_result": {"path": "research/RUN-dispatch/alpha-drift-review.attempt-1.result.json", "sha256": "DIGEST"},
  "native_prompt": {"path": "research/RUN-dispatch/alpha-drift-review.attempt-1.prompt.md", "sha256": "DIGEST"},
  "drift_evidence": {"path": "research/RUN-drift-evidence.json", "sha256": "DIGEST"},
  "resolutions": [{
    "page": "PAGE",
    "verdict": "VERDICT: drift-blocked — EXACT ORIGINAL DETAIL",
    "reason": "Actual repaired defect and acceptance",
    "sources": [{"path": "research/design.md", "original": {"path": "research/ARCHIVE/design-before.md", "sha256": "BEFORE"}, "current_sha256": "AFTER"}],
    "evidence": {"path": "research/RUN-owner-acceptance.json", "sha256": "DIGEST"},
    "consumers": [{"page": "PAGE-examples", "disposition": "repaired", "reason": "Exact change/check"}]
  }]
}
```

At least one complete before/after source must contain the resolved page ID;
every source must have changed, and current sources belong to `research/`,
`items/` or `library/` Markdown. Every planned transitive requirement consumer,
including the companion and its consumers, needs exactly one disposition:
`repaired` or `checked-unaffected`, with a concrete reason. This graph check
does not replace the owner's duty to trace nonlogical uses in source text.

The focused owner acceptance JSON has `run`, `page`, `owner: true`,
`decision: "resolved"`, the exact `verdict`, a nonempty `reason`, and `sources`
and `consumers` identical to the resolution row. Its `repair_evidence` is a
`{path, sha256}` link to the separate genuine delegated focused-repair artifact.
Additional mathematical reasoning/source excerpts may remain in either evidence
artifact. The owner wrapper does not claim to be a native agent result.

The native result must be the actual successful attempt file for Alpha's
`drift-review` assignment, with `covers: ["drift"]`, zero process/dispatch
exit codes and completed, unaborted terminal summary. Its prompt path and
run/output assignment must match the exact hash-bound original native prompt.
Only explicitly resolved `drift-blocked` lines are satisfied; malformed
receipts fail even when other drift decisions are valid.

Native append reports are verified as a sequential **applied prefix** of the
append registry. An unapplied suffix contributes no report bytes and requires
no application receipt yet; an applied generation after an unapplied one fails
closed. Every applied receipt must bind the exact reconstructed preceding
report, exact appended report, preserved inventories and exact resulting merge.

The owner receipt's `report.sha256` may identify an authenticated earlier prefix
of that same chain, including the full original report. It cannot identify
arbitrary stale bytes: the validator reconstructs the entire current report
from actual sequential application receipts and requires the accepted hash to
occur on that chain. This preserves the owner's historical report acceptance
without rebinding it after every native append. Source/evidence hashes, scope,
blocked verdicts, native prompt/result and affected-consumer checks remain
mandatory and unchanged.
