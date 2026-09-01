# frontier-28 alpha group c step 6b adjudication

Date: 2026-09-01
Run: `frontier-28`
Group: `c`
Scope: batches `4`, `5`, and `6`

## Batch 4

- Touched obligations: `13` total: `11` `accepted_repair` and `2` `amended_repair`.
- `cor-ell-p-duality-by-counting-measure` and `cor-l-p-norm-recovery-by-unit-l-q-pairings` still carry Reader 4's repaired mathematics, but their live carriers now differ from the exact post-reader snapshot because current item bytes changed later, and the counting-measure corollary's manifest row changed later as well.
- Refuter obligations: `3` total, all `confirmed_fatal` and repaired by narrowing the Countable Choice scope in the affected example/counterexample facts blocks.
- Mathematical disposition: reader-4's real-valued duality repairs still stand on current disk, and Alpha confirmed the three refuter-found foundational scope defects before narrowing those items to carry Countable Choice explicitly.
- Risk review: batch 4 already carried complete required high/critical risk_review rows on current disk; I rechecked the touched duality spine and the two high-risk counterexamples against the live files before closing the batch.

## Batch 5

- Touched obligations: `15` total.
- Verdict mix: `13` `amended_repair`, `2` `reverted_change`.
- Page obligations: `1`, recorded as `amended_repair` after the page summary was updated to distinguish Countable Choice results from Dependent Choice results.
- Refuter obligations: `7` total: `4` `confirmed_fatal`, `2` `confirmed_nonfatal`, and `1` `false_positive` on the induced quotient norm example.
- Mathematical disposition: the current FA-2 carrier now matches the repaired theorem/example family. Alpha confirmed the missing AC_omega hypotheses in the dense-extension and quotient-completeness theorems, repaired the zero-space and bounded-projection gaps, resynchronized the stale contract rows, and verified that the refuter's closed-kernel objection to the induced quotient norm is not a live defect.
- Risk review: wrote complete `alpha-6b-c` risk_review rows for `thm-bounded-linear-operator-equivalences`, `thm-extension-of-a-bounded-map-from-a-dense-subspace`, `thm-bounded-bilinear-map-equivalences`, `lem-quotient-seminorm-is-representative-independent`, `thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed`, `thm-quotient-map-is-open`, `thm-quotient-of-banach-by-closed-subspace-is-banach`, `thm-universal-property-of-the-normed-quotient`, `thm-bounded-below-iff-injective-with-closed-range`, `thm-bounded-right-inverse-iff-kernel-is-complemented`, `thm-bounded-left-inverse-iff-range-is-complemented`, `ex-coordinate-projections-and-inclusions-on-product-banach-spaces`, `ex-shift-operators-on-classical-sequence-spaces`, `ex-evaluation-functional-on-c-of-k`, `ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm`, `ex-c-mod-constants-and-oscillation-norm`, `cex-a-closed-subspace-need-not-have-a-best-approximation`, `cex-an-algebraic-complement-need-not-be-topological`.

## Batch 6

- Touched obligations: `8` total: `1` `accepted_repair` and `7` `amended_repair`.
- Refuter obligations: `6` total: `4` `confirmed_fatal` and `2` `confirmed_nonfatal`.
- Mathematical disposition: Alpha confirmed the live proof defects in the Chebyshev/Bertrand/Mertens chain, repaired the bad primorial step in the theta and Bertrand proofs, repaired the noninteger endpoint cancellation, repaired the pi(x) integral bound near 2, and repaired the first-Mertens tail estimate. I also rechecked the explicit residual scan for `2 <= n <= 467`, the repaired lower bound at `n = 468`, and the `pi/theta/psi` example table numerics on September 1, 2026.
- Risk review: wrote complete `alpha-6b-c` risk_review rows for `lem-prime-counting-chebyshev-partial-summation`, `lem-central-binomial-coefficient-prime-valuation`, `thm-chebyshev-theta-linear-bounds`, `lem-chebyshev-functions-prime-power-comparison`, `thm-chebyshev-prime-counting-bounds`, `thm-bertrands-postulate`, `lem-weighted-von-mangoldt-harmonic-estimate`, `thm-first-mertens-theorem-for-primes`, `thm-second-mertens-theorem-for-primes`, `thm-third-mertens-theorem-for-primes`, `ex-prime-counting-theta-and-psi-table`.

## Repairs

- `items/cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval.md`, `items/cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality.md`, and `items/ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q.md` now carry the Countable Choice hypothesis required by their cited measure-theory witnesses.
- `library/functional-analysis/bounded-linear-operators-and-quotient-spaces.md` now distinguishes Countable Choice results from Dependent Choice results, and `items/ex-coordinate-projections-and-inclusions-on-product-banach-spaces.md` now handles the zero-space norm boundary and correct operator typings.
- `items/thm-extension-of-a-bounded-map-from-a-dense-subspace.md` and `items/thm-quotient-of-banach-by-closed-subspace-is-banach.md` now state AC_omega explicitly; `items/thm-bounded-right-inverse-iff-kernel-is-complemented.md` and `items/thm-bounded-left-inverse-iff-range-is-complemented.md` now make the bounded projection steps explicit; and the batch-5 proof contract was fully resynchronized, including the hand-maintained nonproximinal counterexample entry and the stale biconditional boundary rows.
- `items/lem-prime-counting-chebyshev-partial-summation.md`, `items/lem-chebyshev-functions-prime-power-comparison.md`, `items/thm-chebyshev-theta-linear-bounds.md`, `items/thm-chebyshev-prime-counting-bounds.md`, `items/thm-bertrands-postulate.md`, and `items/thm-first-mertens-theorem-for-primes.md` now carry the repaired analytic-number-theory steps described above. The batch-6 proof contract boundary rows were also rewritten from boilerplate to anchored evidence where the current proofs actually discharge the edge case.
- `research/frontier-28-batch-4.pages.json`, `research/frontier-28-batch-5.pages.json`, `research/frontier-28-batch-6.pages.json`, `research/frontier-28-batch-4.proof-contracts.json`, `research/frontier-28-batch-5.proof-contracts.json`, and `research/frontier-28-batch-6.proof-contracts.json` were synchronized to the repaired item/page carriers and the required Alpha risk-review records.
- `research/frontier-28-alpha-c-6b-ledger-rows.json`, `research/frontier-28-alpha-c-6b-decisions.json`, and `research/frontier-28-alpha-c-6b-gate-ledger-rows.json` now record all `53` owned Step-6 obligations for group `c` plus `2` gate supplement decisions for the batch-4 routing repair.

## Gate repair - `step6-routing-adjudicate` (Tuesday, September 1, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed two stale batch-4 touched decisions: `cor-ell-p-duality-by-counting-measure` and `cor-l-p-norm-recovery-by-unit-l-q-pairings`.
- Reread both current corollaries against `research/frontier-28-reader-4.md` and found no new mathematical defect. Retagged both touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-28-S6-c-gate-4-1` and `frontier-28-S6-c-gate-4-2` via `research/frontier-28-alpha-c-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate --batch 4`
  -> `21 item(s) routed, 16 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate`
  -> `424 item(s) routed, 166 adjudication obligation(s), 0 error(s)`.
- `node tools/defect-ledger.mjs validate --run frontier-28`
  -> `181 defect row(s) checked, 0 error(s)`.

## Stage-owned follow-up

- I did not run any Step-6 stamp command. The dispatch says the stage stamps `subject_sha256`, so the decisions file is left unstamped for the stage-owned pass.

## Blockers

- None in the live group-`c` scope.
