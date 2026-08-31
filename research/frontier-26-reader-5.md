# frontier-26 reader-5 report

Date: Sunday, August 30, 2026.
Batch: `5`.
Assigned A/B pair: `average-orders-divisor-sums-and-representation-counts` / `average-orders-divisor-sums-and-representation-counts-examples`.

## Opened scope

- Design and batch artifacts: `research/plan-number-theory-track.md` (NT-10), `research/frontier-26-batch-5.pages.json`, `research/frontier-26-batch-5.coverage.json`, `research/frontier-26-batch-5.proof-contracts.json`, `research/frontier-26-beta-5.task.md`, `research/frontier-26-batch-5.notes.md`, `research/frontier-26-reader.task.md`, `research/frontier-26-covers.json`.
- Assigned pages: `library/number-theory/average-orders-divisor-sums-and-representation-counts.md`, `library/number-theory/average-orders-divisor-sums-and-representation-counts-examples.md`.
- Assigned items: `def-summatory-function-and-average-order`, `def-euler-mascheroni-constant`, `lem-harmonic-sum-asymptotic`, `thm-dirichlet-hyperbola-method`, `thm-divisor-counting-summatory-estimate`, `lem-summatory-logarithm-asymptotic`, `cor-average-order-of-divisor-counting-function`, `thm-divisor-sum-summatory-estimate`, `cor-average-order-of-divisor-sum-function`, `thm-euler-totient-summatory-estimate`, `cor-average-order-of-euler-totient`, `thm-coprime-pair-counting-asymptotic`, `cor-asymptotic-density-of-coprime-pairs`, `def-two-square-representation-function`, `lem-normalized-two-square-count-is-multiplicative`, `thm-two-square-representation-count`, `cor-average-order-of-two-square-representations`, `ex-dirichlet-hyperbola-lattice-decomposition`, `ex-divisor-summatory-error-table`.
- Published dependencies opened for verification: `def-arithmetic-function`, `def-natural-logarithm`, `thm-logarithm-derivative-and-integral`, `thm-monotonicity-of-the-integral`, `thm-additivity-over-subintervals`, `thm-monotone-convergence`, `def-dirichlet-convolution`, `lem-finite-sum-reindexing-and-fubini`, `prop-divisor-functions-under-dirichlet-convolution`, `cor-basel-sum-by-residues`, `cor-classical-mobius-inversion`, `thm-sum-of-totients-over-divisors`, `def-divisor-power-sum-functions`, `def-number-theoretic-mobius-function`, `def-dirichlet-convolution-identity`, `def-coprime`, `def-sum-of-two-squares-representation`, `def-multiplicative-arithmetic-function`, `prop-odd-two-square-representations-correspond-under-doubling`, `lem-coprime-primitive-two-square-products-remain-primitive`, `lem-two-square-representations-of-prime-powers`, `thm-uniqueness-of-two-square-representation-of-a-prime`, `def-divides-in-z`, `thm-multiplicative-functions-determined-by-prime-powers`, `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder`.

## Edits

1. Repaired `items/lem-normalized-two-square-count-is-multiplicative.md`.
   The old step `3.1` inferred multiplicativity from prime-power values alone, which is not sufficient. I rewrote steps `2.1` and `3.1` to use Hackman Chapter `K.III.1`'s exact formula for `r_2(N)/4` in the library's ordered-sign convention, then derived the coprime-product law from that formula.
2. Updated `research/frontier-26-batch-5.proof-contracts.json`.
   The derivation claims for `lem-normalized-two-square-count-is-multiplicative` steps `2.1` and `3.1` now match the repaired proof.

## Confirmed defects

- Repaired in-flight defect: `items/lem-normalized-two-square-count-is-multiplicative.md`, step `3.1`.
  Class: unlicensed inference.
  Evidence: the prior text moved from prime-power values to multiplicativity without either a general counting formula or a separate bijection for coprime products. That implication is not valid on its own and was load-bearing for `thm-two-square-representation-count`.

No uneditable mathematical defect remains in the assigned pages, items, or opened dependencies.

## Page verdicts

- `average-orders-divisor-sums-and-representation-counts`: pass after the repair above. The page summary, titles, statements, and current proofs are now coherent against the opened dependencies.
- `average-orders-divisor-sums-and-representation-counts-examples`: pass. The hyperbola decomposition at `x=12` and the divisor-error table were rechecked numerically.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-normalized-two-square-count-is-multiplicative.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-normalized-two-square-count-is-multiplicative.md`
- `node tools/proof-contract.mjs research/frontier-26-batch-5.proof-contracts.json --strict`
- `node tools/finite-smoke.mjs research/frontier-26-batch-5.proof-contracts.json`
- `node tools/risk-report.mjs research/frontier-26-batch-5.proof-contracts.json --items lem-normalized-two-square-count-is-multiplicative`
- `node tools/boundary-audit.mjs research/frontier-26-batch-5.proof-contracts.json`
- `node tools/gate-liveness.mjs --run frontier-26 --contracts research/frontier-26-batch-5.proof-contracts.json --checklists research/frontier-26-batch-5.coverage.json --min-checks 1`
- `node tools/citation-fidelity.mjs research/frontier-26-batch-5.proof-contracts.json`

Observed results:

- `precheck` passed on the changed item.
- `proof-contract --strict` passed for all `16/16` scoped proof-bearing items.
- `finite-smoke` reported `0 error(s), 0 check(s) over 0/16 item(s) carrying obligations`.
- `risk-report` still classifies `lem-normalized-two-square-count-is-multiplicative` as `HIGH 5`; that is routing metadata, not a reader defect.
- `boundary-audit` reported `12` candidates; I opened each cited item and did not confirm a surviving defect from those candidates.
- `gate-liveness` reports one vacuous probe: `finite-smoke` checked nothing.
- `citation-fidelity` is structurally inapplicable on this batch contract at present and exits early because the contract contains no fact-citation entries.

## Blockers

- No mathematical blocker remains for batch `5`.
- Process note only: the focused battery is not fully live because `finite-smoke` still has zero scoped obligations on this batch contract.
