Root-only RPM22/24/27 metadata adoption. The helper has not been executed.

ROOT first uses the canonical append command, which takes its own lock and refreshes the generated view:

```sh
node tools/physics-support/defect-ledger.mjs append --file research/physics-td-qft-rpm-62-2026-10-14-owner-stage3-rpm22-24-27-adoption-proposal/ledger-append.proposal.json
node research/physics-td-qft-rpm-62-2026-10-14-owner-stage3-rpm22-24-27-adoption-proposal/adopt.mjs --index research/physics-td-qft-rpm-62-2026-10-14-owner-stage3-rpm22-24-27-adoption-proposal/index.proposal.json --apply --affected-carriers-drained --ledger-append-serialized
```

The helper NEVER stages or writes the global ledger, ledger view, scientific sources or native state. It verifies that both exact same-subject successors are already active in the canonical ledger, then guards ledger lock/stat currency before commit, each rename and after the final rename. Concurrent append refuses or rolls back metadata while preserving the canonical append.

Actual native writer checks cover ONLY22/23/24/25/27/31 and read state uncached/unhashed. Unrelated61 may remain live. Source2 and the four reviewed BMT consumer proofs are protected by exact released/snapshot bytes; this is original-owner completion of the four actual holds, not a whole86-item proof audit.

Ten shared metadata targets have fresh raw before archives: six contract documents, manifests22/24, existing plan, and decisions27. Only59 exact fields are proposed. Batch25 participates solely for the approved homogeneous-shell F2 quote to Definition22; no25/26 decisions or old science packets are consumed. Manual finite worksheets, boundary flags/status/reasons, history, unknown fields, physical qualifiers and all unproposed values are preserved. No source frontmatter, dependency, page-order or context change is made.

Guard/refusal reporting is grouped before writes. Input reads are cached with before/after stat checks; atomic staging saves exact target bytes. Rollback restores only bytes still equal to this helper after-image, preserving concurrent edits for manual recovery. ROOT must execute before later shared-plan mutations or obtain fresh exact guards; there is no waiver. No numeric levels, readiness or gates are certified, and no software tests are run.
