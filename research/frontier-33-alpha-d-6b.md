# Frontier 33 — Alpha group d, Step 6b

## Scope and result

Owned batches: 8, 13, and 16. I reread the three scope files, reader reports/findings, refuter reports, current carriers, cited dependency statements, detector output, frozen hashes, and the full-gate repair record. The exact queue contains 72 obligations: 71 post-reader item carriers and one refuter finding; no reader or page obligation is owed.

All 71 post-reader carriers are repaired proof-contract records. 27 match the frozen pre-6b carrier and are accepted; 44 received the required item-specific HIGH/CRITICAL risk review and are amended relative to both snapshots. Batch counts are: batch 8 19 accepted / 27 amended, batch 13 0 accepted / 3 amended, and batch 16 8 accepted / 14 amended.

## Confirmed refuter defect

`refuter:16:1` is confirmed fatal. The observed simultaneous-handle proof used a dependency whose statement assumes exactly one critical point although the proposition quantifies over `m` critical points. The full pre-6b gate already made the smallest coherent repair: after the disjoint local modifications, current step 3.1 applies `thm-regular-interval-diffeomorphism` to the compact critical-free lower band and transports every attaching tube at once. That dependency has the required hypotheses, and the proof explicitly covers `m=0`. Item dependencies, manifest provenance, derivation contract, and risk review agree with the repaired proof. Ledger row: `frontier-33-A6b-d-072`.

## Risk and validation

The mathematical risk pass completed 79 required reviews: 27 in batch 8, 37 in batch 13, and 15 in batch 16. Each record identifies the detector’s concrete risk and the checked derivation, citations, and edge cases. No further defect was confirmed.

The owned contracts pass `risk-report.mjs --require-reviewed`, strict proof-contract validation, citation fidelity, and boundary audit. The repaired simultaneous-handle item also passes focused reflow, precheck, render, content-policy, and manifest-dependency checks. The decision file contains one decision and one unique closed ledger reference for every obligation; its carrier hashes are stamped by the task interface.

The scoped adjudication checker reports no group-d decision, hash, verdict, or ledger error. Its current nonzero exit comes only from global published-content protocol records outside this dispatch: `def-tensor-product-total-complex-of-chain-complexes` is not owned by an exact repaired Step-6 finding, and `reader:6:1` is not an exact repaired reader finding. The contract-audit report already records the first as an authority-bound published dependency; neither batch 6 nor either published-content record is writable in group d, so both are named external blockers rather than group-d decisions.
