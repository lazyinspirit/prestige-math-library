# frontier-27 Alpha group b Step 6b

Date: Monday, August 31, 2026.

Owned batches: 1, 5, 6.

## Outcome

- Rechecked every routed touched carrier and every routed refuter finding against the current item, contract, manifest, and cited dependency bytes.
- Applied mathematical repairs in batch 1 to the principal-ideal, height-theorem, polynomial-dimension, affine-dimension, and example cluster; applied mathematical repairs in batch 6 to the cone-sign, degreewise-split, cycle-boundary, boundary-annihilation, long-exact-sequence, and relative-homology cluster.
- Reverified batch 1, 5, and 6 proof contracts, citation fidelity, content policy, reflow, and focused precheck after the live repairs.
- Wrote 45 complete Alpha risk reviews into the owned batch contracts and reran risk-report with --require-reviewed for batches 1, 5, and 6 on the current Monday, August 31, 2026 bytes.
- Appended 47 closed defect-ledger rows for this dispatch: 17 touched-carrier repairs, 28 confirmed refuter findings, 1 stale touched-carrier gate repair in batch 5, and 1 additional gate-level fatal repair found during the batch-1 risk reread.

## Batch notes

- Batch 1: reader-repaired touched items were all rechecked and remain repaired; all 22 refuter findings stand and are closed; the additional high-risk theorem repair in thm-krull-height-theorem is recorded as gate:frontier-27-S6-b-gate-1-1.
- Batch 5: all 8 touched reader repairs stand on the live bytes; 3 still match the post-reader carrier exactly and 5 are now amended because the current proof-contract, manifest, or item bytes changed later while preserving the repaired mathematics.
- Batch 6: the one touched reader repair stands; all 6 refuter findings stand, with 5 fatal repairs and 1 nonfatal repair closed on current bytes.
- Whole-run note on Monday, August 31, 2026: `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate` now returns `449 item(s) routed, 139 adjudication obligation(s), 0 error(s)`. The owned-batch checks for batches 1, 5, and 6 remain clean, and the former cross-group `decisions-missing` failure is gone on the current tree.

## Decision counts

- Touched: 17
- Refuter findings: 28
- Supplemental gate decisions: 2
- Accepted repairs: 4
- Amended repairs: 13
- Confirmed fatal findings: 27
- Confirmed nonfatal findings: 2
- False positives: 0

## Gate repair - `step6-routing-adjudicate` (Monday, August 31, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed one stale batch-5 touched decision: `fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category`.
- Reread the current false statement against `research/frontier-27-reader-5.md` and found no new mathematical defect. I retagged the touched decision from `accepted_repair` to `amended_repair` and appended the supplemental gate row `frontier-27-S6-b-gate-5-1` via `research/frontier-27-alpha-b-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate --batch 5`
  -> `39 item(s) routed, 8 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate`
  -> `449 item(s) routed, 139 adjudication obligation(s), 0 error(s)`.

No blocker remains inside the dispatched Step-6 scope on the current August 31, 2026 bytes.
