# Step 3a adjudication — batch-1

Run: `quantum-prerequisites-4-2026-10-15`. Assigned batch: `1`. Dispatch group: `batch-1`; the scope's original assignment group remains `b`.

## Obligations and evidence

The batch-1 scope has no touched items, touched pages, reader findings, refuter findings, or flagged carriers. The generated ordering task lists no item or other obligations. The reader report, reader-findings JSON, and refuter report agree: both items and both pages were opened, no edits were made, and no findings were reported. The reader-findings JSON and refuter JSON hashes match the scope's report bindings. Zero decisions are owed, so the decisions array is empty; untouched, unflagged carriers receive no decision.

Read evidence: `research/quantum-prerequisites-4-2026-10-15-step3-scope-1.json`, `research/quantum-prerequisites-4-2026-10-15-alpha-batch-1-3a-order.task.md`, `research/quantum-prerequisites-4-2026-10-15-reader-1.md`, `research/quantum-prerequisites-4-2026-10-15-reader-findings-1.json`, and `research/quantum-prerequisites-4-2026-10-15-refute-1.json`.

The pre-reader and post-reader snapshots have identical item, contract, manifest, page, and page-manifest projections. Current raw hashes of both items and both pages match those snapshots. No reader delta requires acceptance, amendment, or reversion.

## Current content and prerequisites

Read the batch manifest and proof contracts, both current items, both current pages, and `items/def-extended-reals.md` as prerequisite context. In `def-measurable-pointwise-extended-real-product`, the zero, finite-nonzero, and nonzero-with-infinity clauses partition all input pairs; the empty domain has its unique empty output. The convention is symmetric and agrees with the supplier's partial scalar multiplication wherever defined. All four ordered zero-infinity pairs receive zero under the function convention. No measurability or choice assumption is asserted or needed.

In `ex-pointwise-extended-real-function-product-cases`, the ten rows yield `(0,0,0,0,+∞,-∞,-∞,+∞,-6,0)` by that definition. Both page summaries match their carriers. No defect was identified in these uses. This context check does not audit unrelated published claims or the full prerequisite closure. No external source text was consulted or independently source-certified.

## Risk and local checks

Both commands completed with exit code 0:

- `node tools/risk-report.mjs research/quantum-prerequisites-4-2026-10-15-batch-1.proof-contracts.json`
- `node tools/risk-report.mjs research/quantum-prerequisites-4-2026-10-15-batch-1.proof-contracts.json --require-reviewed`

Both reported MODERATE 4 for the definition, ORDINARY 2 for the example, and `0 error(s), 2 item(s) routed`. No HIGH or CRITICAL item requires a new risk-review record. Read-only Python assertions confirmed identical snapshot projections, current item/page raw hashes, and scope-bound reader-findings/refuter hashes. An initial assertion incorrectly tested the Markdown reader report against the reader-findings JSON binding; checking the correct artifact passed. A supplementary text search named a nonexistent `tools/lib` directory and returned exit 2; it was not a validation check.

## Handoff

Only this report and the task-named decisions file were written. No item, page, contract, manifest, dependency ledger, published ledger, or verification stamp changed. No proof-layout or precheck was needed because no item was edited. No confirmed defect, published-supplier alert, escalation, or blocker was identified within this dispatch. No judging, stamping, certification, scheduling, or gate battery was performed. The engine owns subsequent checks and transitions.
