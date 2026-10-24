# Physics forward-check companion ordering repair

Run: advanced-qft-supersymmetry-build-2026-10-23. Reviewer: /root/rg_contract_repair. One review/repair round. Root authorized this focused tool defect repair after actual completed-author diagnostics. No content, scope, page order, manifest, item graph, native state, controller or mathematics sibling tool was changed.

The physics forward checker used `required.order >= consumer.order` as an unconditional plan-topology error. The canonical physics plan intentionally gives an A page and its B companion the same numeric order, with B requiring A. Consequently correct companion edges failed. Reproduced the actual defect before editing on the complete nonempty batch-5 and batch-21 manifest item selections: each command exited 1 with exactly one `plan-order-broken` error, respectively the #961 and #977 B-page requirement on its own A page. Raw commands and outputs are preserved in `physics-forward-before-batch-5.json` and `physics-forward-before-batch-21.json`.

Preserved original physics checker and WORKFLOW.md bytes in `physics-forward-companion-preimages/`, with SHA-256 index. Current modified checker, new test file and workflow-document hashes are in `physics-forward-current-inputs.json`.

## Narrow rule

Only `tools/physics-support/fwdcheck.mjs` changes executable behavior. Its canonical plan index now retains companion, category and library metadata and counts exact page identities and incoming companion claims. The existing plan-order error predicate allows an exception only when all of these hold:

- Consumer is B and prerequisite is A, with distinct IDs and the same finite numeric order.
- Their canonical plan rows name each other as reciprocal companions.
- Each page ID occurs once and each is claimed as a companion exactly once.
- Both have the same nonempty category and the same explicitly valid mathematics/physics library classification.
- A does not require B, including when only B's items are selected.

This is the representation's within-pair prerequisite order. A filename suffix, page prose, authored-only companion label, one-sided/wrong partner claim, shared claim, duplicate ID, wrong kind, cross-category/library label, or equal nonnumeric order cannot authenticate it. Strictly later and unrelated equal-order prerequisite edges retain the original failure. Ordinary strictly earlier prerequisites retain their existing behavior.

All item forward-reference interpretation, spine restrictions, unused/dangling/not-later/in-deps checks, declared-later-use checks, dependency propagation and item/page cycle code remain unchanged. A declared forward reference from B to its same-order A still fails `forward-not-later`; the pair exception is only for the ordinary page prerequisite. No later item use or A-to-B prerequisite is legalized.

The brief WORKFLOW.md addition states the exact rule, its boundaries and explicit item-selection use. No general mathematics fwdcheck or shared plan/order was edited.

## Actual validation

Every saved JSON check record contains its exact command, actual exit code, stdout and stderr.

- `physics-forward-after-regressions.json`: 25/25 new CLI regression tests pass. The fixture has real item carriers, A/B page carriers, canonical plan and nonempty scoped selection. Positive cases cover physics and mathematics classification within the physics engine and ordinary earlier prerequisites. Negative cases cover unrelated equality, later supplier, reverse requirement (including B-only scope), absent/wrong reciprocal companions despite authored labels, wrong kinds, shared claims, duplicate IDs, category/library mismatch or absence, and nonnumeric equal orders. Additional tests retain declared-not-later, spine/undeclared later-use, and actual item/page-cycle failures.
- `physics-forward-existing-fwdcheck.json`: existing scoped forward-check prerequisite-cycle regression passes (1/1), retaining exclusion of a disconnected cycle and rejection of a reached cycle.
- `physics-forward-after-batch-5.json`: actual scoped checker now exits 0, six selected items, two selected pages, zero errors/warnings, with prerequisite cycle context of 2,087 items/285 pages.
- `physics-forward-after-batch-21.json`: actual scoped checker now exits 0, four selected items, two selected pages, zero errors/warnings, with prerequisite cycle context of 2,091 items/286 pages.
- `physics-forward-syntax.json` and `physics-forward-test-syntax.json`: checker and test syntax checks pass.

Also ran the three existing relevant suites together: frontier-gate-scope, validate-plan-frontier and frontmatter-list. `physics-forward-after-existing-tests.json` records the full output: 33 pass and 4 fail. The four failures are `depcheck excludes unrelated page hygiene, multi-home and disconnected cycles`, `depcheck retains reachable supplier item/page cycles and B-page boundaries`, `matches the renderer YAML parser for every repository ID list`, and `supplier page cycles are checked through current external page inventories`. They exercise unchanged depcheck, YAML/frontmatter and validate-plan behavior; their failing commands do not execute the changed companion predicate. They were not relabeled passing or repaired outside this assignment. The existing fwdcheck regression from those suites passes separately as recorded above. No broader baseline or whole-corpus test was run.

## Limits and handoff

The canonical plan remains the authority for pair identity; this checker change supplies no publication, source or scientific acceptance. Missing/ambiguous pair metadata continues to fail rather than granting an exception. The new guard is deliberately narrower than a generic same-order relaxation and does not replace normal validate-plan/depcheck requirements.

No global gate battery or native transition was attempted, and no controller reload or readiness recertification was performed. Root owns eventual engine adoption, current-input preparation and the ordinary complete battery. This reviewer's writes are complete; unrelated existing-suite failures remain explicitly reported for Root's separate disposition.
