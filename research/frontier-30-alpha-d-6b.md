# Frontier-30 Alpha d Step 6b

Run: `frontier-30`  
Group: `d`  
Date: Saturday, September 5, 2026 (Australia/Sydney)

## Scope

Owned batches: `4`, `7`, and `15`.

Routed obligations on current disk:

- Batch `4`: `3` touched items.
- Batch `7`: `3` touched items and `6` refuter findings.
- Batch `15`: `5` touched items and `3` refuter findings.
- Supplemental gate findings created during the mandatory high-risk reread: `1`.

There were no routed page obligations and no routed reader-findings obligations for this group.

## Adjudication

Decision mix on current disk:

- `2` touched obligations close as `accepted_repair`: `ex-many-extensions-from-a-codimension-one-subspace` and `def-plaque-of-a-flat-chart`.
- `9` touched obligations close as `amended_repair` because the live carrier no longer equals the frozen post-reader snapshot after the Step 6b repairs, the mandatory high-risk contract updates, or the later stale-touched reread recorded below.
- `8` refuter findings are `confirmed_fatal`.
- `1` refuter finding is `confirmed_nonfatal`.
- `2` supplemental gate findings are `confirmed_nonfatal`.

Confirmed and repaired refuter findings:

- Batch `7`: repaired the space-time Cauchy-surface dimension mismatch, the induced inverse-function-theorem failure in `thm-local-linear-transport-cauchy-problem`, the missing classical-solution regularity in the characteristic counterexample, the missing `C^1` hypothesis in the two transport examples, and the forward-only Gronwall step in `lem-transport-characteristics-depend-c-one-on-initial-position`.
- Batch `15`: repaired the product-foliation leaf statement, the noncentral-leaf description in the Mobius example, and the transpose error in `lem-involutive-frame-reduction`.

Supplemental high-risk reread repair:

- Repaired `ex-leaves-of-a-lie-subalgebra-distribution` by replacing the unsupported coset-partition conclusion with an explicit integral-curve argument and the maximal-integral-manifold uniqueness clause.

## Risk Review

Completed `risk_review: {status: complete, reviewer: alpha-6b-d, notes: ...}` on every current high/critical item owned by this group:

- Batch `4`: `8` items.
- Batch `7`: `8` items.
- Batch `15`: `7` items.

Rerunning `risk-report` after the repairs produced no newly promoted high-risk items beyond those 23, and the final `--require-reviewed` rerun passed on all three owned contracts.

## Focused Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the ten directly edited item files: reflowed six items cleanly; four were already canonical.
- `node tools/tsx-run.mjs tools/precheck.mts` on the nine edited proof-bearing items: pass, `9 checked, 0 failing`.
- `node tools/rendercheck.mjs` on the ten directly edited item files: clean.
- `node tools/regen-contract-entries.mjs` regenerated the five edited batch-7 contract entries and the four edited batch-15 entries, then reran for the two renumbered batch-15 entries.
- `node tools/proof-contract.mjs research/frontier-30-batch-{4,7,15}.proof-contracts.json --strict`: all three clean, with `15/15`, `19/19`, and `37/37` item(s) checked respectively.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-{4,7,15}.proof-contracts.json --items-dir items --fail-on-missing-quote`: `88` citation rows checked, no missing quotes, no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-30-batch-{4,7,15}.proof-contracts.json --items-dir items --fail-on-contradicted`: advisory candidates only. I reread the nine flagged rows and did not confirm a real boundary defect; the empty/zero axes there are either excluded by the item hypothesis or belong only to auxiliary proof parameters, not to a missing statement case.
- `node tools/risk-report.mjs research/frontier-30-batch-{4,7,15}.proof-contracts.json --require-reviewed`: all three clean.

Artifacts written:

- `research/frontier-30-alpha-d-6b.md`
- `research/frontier-30-alpha-d-6b-decisions.json`

## Blockers

None.

## Gate repair - `step6-routing-adjudicate`

- Reproduced the live stale-touched queue on the current tree and confirmed one batch-15 touched-decision drift: `ex-irrational-linear-foliation-of-the-two-torus`.
- Re-read the current example against `research/frontier-30-reader-15.md` and found no new mathematical defect. I retagged the touched decision from `accepted_repair` to `amended_repair` and appended the supplemental gate row `frontier-30-S6-d-gate-15-2` via `research/frontier-30-alpha-d-6b-gate-ledger-rows.json`.
- Focused rerun: batch `15` -> `48 item(s) routed, 8 adjudication obligation(s), 0 error(s)`.
