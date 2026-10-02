# Step 5 S-unit owner repair

Run: `frontier-37-owner-30`. Item: `thm-s-unit-theorem`. Recorded 2026-10-01.

## Evidence and scope

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the complete current theorem and its batch-3 proof-contract row, the refuter-3 finding, and the exact Statement sections of its two F5 suppliers. The refuter artifact records one fatal `false-claim` at Proof 8.1: its purported exhaustive AC list omits F5. Both `thm-unique-factorisation-of-ideals-in-dedekind-domains` and `lem-finite-support-of-ideal-valuations` explicitly assume AC in their Statements. F5 supplies ideal factorisation and valuation additivity in steps 1.1 and 2.1.

Disk state before mutation showed refuter-3 attempt 2 ended successfully at `2026-10-01T11:18:58.052Z`, collection ended at `11:18:59.287Z`, and no active native Step-5 Alpha covered batch 3. The proof Statement and Given already assume AC, and `deps` already includes `def-axiom-of-choice` and both F5 suppliers. No Statement or Definition changed; no downstream interface repair is required for this correction.

## Repair

Proof 8.1 now identifies the AC-qualified inputs F2, F3, F4 and F5, and states that the proof's selections need only finite choice. The corresponding derivation, F5 citation-use lists, and nonempty-choice boundary were reconciled in `research/frontier-37-owner-30-batch-3.proof-contracts.json`.

The same contract row's singleton boundary also falsely asserted `M=hZ` and referred to the prime ideal as an element with inverse `1/p`. It now states the actual conclusion `hZ⊆M=dZ`, with positive `d` dividing `h`, and verifies that the selected generator `pi_p` is an S-unit through its valuations. This is a contract correction to the existing argument, not a new theorem claim.

## Actual local checks

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-s-unit-theorem.md`: exit 0, 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/thm-s-unit-theorem.md`: exit 0, 1 file; real KaTeX and renderer YAML parsing passed.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-3.proof-contracts.json --strict --items thm-s-unit-theorem`: exit 0, 0 errors, 1 warning, 1/1 checked. The warning is `shotgun-bracket` at 8.1: four of eight facts are cited while two other steps cite no declared fact. Those four facts are the actual AC-qualified inputs; the warning is retained and reported.

These are local format/render/contract checks, not an independent mathematical audit or adjudication. The original fatal finding and all engine evidence remain untouched. No upstream audit, adjudication write, broad gate attempt, evidence recertification, or stage transition was performed.

## Exact SHA-256 hashes

- Before `items/thm-s-unit-theorem.md`: `1991296602603763ff65fd5ee7e30592477f656eb74ec2311667e31476fa8a02`
- After `items/thm-s-unit-theorem.md`: `5973514db7b24a361afc7b80ef210a7f36d11d21a2aba98ccb6fbc45a5453f92`
- Before `research/frontier-37-owner-30-batch-3.proof-contracts.json`: `097f544db4ba17fa48b6d7d6578d8a900dd86af463b39aa1707206cef53564d3`
- After `research/frontier-37-owner-30-batch-3.proof-contracts.json`: `9a1276a1eee7a0aca8303172d6a43c6edd4116632b0d8d29dd63e1291536aeaa`
- Evidence `research/frontier-37-owner-30-refute-3.json`: `7a7749902ff3ef314b8bb64892b96c98b764168f388342679cfd5dad65347acb`
- Evidence `items/thm-unique-factorisation-of-ideals-in-dedekind-domains.md`: `08f68f9be360cf47b45714af5fd3385299f8fe7353ca2343471e01d921eda2c3`
- Evidence `items/lem-finite-support-of-ideal-valuations.md`: `4ea5360c2c30919da78dee0a60e35665650f50cecec26d1a257a3f6c9e21d5af`

## Handoff

The scoped owner edit is complete. Native Alpha and engine certification must evaluate current content and retain the original finding in their evidence history; this report does not clear or adjudicate it. Central merged contracts and certifications, if refreshed, belong to the orchestrator after all authorized writers have drained.
