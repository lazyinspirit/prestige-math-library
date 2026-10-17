# Step 3a reader report — batch 78

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: `reader-78`  
Scope: batch `78`

## Opened inventory

Assigned pages opened:

- A page `positive-conservative-production-destruction-integrators` at `library/numerical-differential-equations-and-stochastic-dynamics/positive-conservative-production-destruction-integrators.md`.
- B page `positive-conservative-production-destruction-integrators-examples` at `library/numerical-differential-equations-and-stochastic-dynamics/positive-conservative-production-destruction-integrators-examples.md`.

All 19 assigned items were opened and reviewed in dependency order: `def-finite-conservative-production-destruction-system`, `lem-strict-column-dominance-implies-nonnegative-inverse`, `alg-modified-patankar-euler`, `def-source-factored-production-destruction-rates`, `alg-zero-compatible-modified-patankar-euler`, `alg-mprk22-1`, `thm-modified-patankar-euler-positive-conservative`, `lem-modified-patankar-euler-positive-tube-local-error-and-stability`, `thm-zero-compatible-modified-patankar-euler-admissibility`, `thm-mprk22-1-positive-conservative`, `lem-mprk22-1-positive-tube-local-error-and-stability`, `thm-modified-patankar-euler-global-first-order-error`, `thm-patankar-inexact-solve-residual-ledger`, `thm-mprk22-1-global-second-order-error`, `ex-two-compartment-stiff-reversible-transfer`, `ex-three-species-weighted-stoichiometric-conservation`, `ex-zero-denominator-corner-and-factorized-extension`, `cex-small-residual-does-not-certify-positivity`, and `cex-forward-euler-negative-concentration-despite-stability`.

The seven required prerequisite pages were opened: `matrix-norms-condition-numbers-and-numerical-stability`, `finite-precision-direct-factorizations`, `one-step-ode-consistency-and-local-error`, `global-ode-and-density-error`, `runge-kutta-methods-and-order`, `finite-generator-master-equations-and-uniformization`, and `stability-regions-and-stiff-equations`. Their relevant item interfaces were checked. In-run supplier bodies reviewed were `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` and `lem-rounded-linear-and-normal-residual-certificates` (batch 1); `def-one-step-ode-method-local-defect-order-and-stability` (batch 7); `lem-discrete-one-step-error-recurrence-bound` and `thm-global-error-from-one-step-defect-and-stability` (batch 28); `prop-explicit-rk-order-conditions-through-four` and `prop-euler-midpoint-rk4-orders-and-stability-functions` (batch 35); `def-xd-finite-column-generator` (batch 47); and `thm-explicit-euler-absolute-stability-disk` (batch 52).

Published supporting statements opened included the standard floating-point model, the product-of-rounding-errors bound, the Euclidean Cauchy–Schwarz and norm results, the first-order IVP and solution definition, the $C^k$ convention, the Euclidean inner product, induced matrix norm and compatibility result, continuous-partials differentiability, total-derivative and Banach chain/product rules, the total-derivative mean-value inequality, multivariable Taylor and Lagrange/Cauchy remainder results, and the real sum/power/exponential statements used by the finite recurrence proof. Matrix-space, matrix-product, explicit Runge–Kutta tableau, and scalar absolute-stability definitions were also opened. This was a focused check of the batch's claim-supporting interfaces, not a corpus-wide audit of every supplier's own prerequisite proofs.

For the Patankar scheme and its order limits, I read the relevant full-text sections of Kopecz and Meister, *On order conditions for modified Patankar-Runge-Kutta schemes*: §1, §2 Lemmas 2.6–2.7, and §3.2 Theorems 3.4–3.5 ([arXiv PDF](https://arxiv.org/pdf/1702.04589)). I also checked §3.4, equations (3.15)–(3.17) and the near-zero stage caution, in Blanes, Iserles, and Macnamara, *Positivity-preserving methods for ordinary differential equations* (printed pp. 1854–1855; [full PDF](https://personales.upv.es/serblaza/2022_M2AN.pdf)). These passages support the stated positive-interior MPE/MPRK formulas and the explicit caution at small stage denominators; the local item proofs were checked independently.

## Review and repairs

The paired-transfer matrix identities, inverse-positivity lemma, MPE and MPRK procedures, zero-factor extension, local Taylor expansions, one-step stability bounds, global recurrence applications, and example computations were checked. The page summaries preserve the proved domains and caveats: the standard ratio method is restricted to positive denominators, the zero-state method requires the stated factorization, and order/global-error claims are restricted to smooth positive tubes.

Repairs made:

- Added explicit stored-operand/common-format assumptions and an exact-or-certified upper bound for $\|\widehat w\|_2$ in `thm-patankar-inexact-solve-residual-ledger`. Its radius is now $\rho=\eta_w+W$, with $\eta_w\ge\|\widehat w\|_2$, and the final caveat covers right-hand-side data error as well as coefficient assembly. This closes the unstated input and norm-certification requirements of the residual supplier and justifies step 1.2.
- Corrected step 3.1 of `cex-small-residual-does-not-certify-positivity`: the residual-ledger radius satisfies $\rho\ge\varepsilon$ in the one-dimensional witness; it is not equal to $\varepsilon$. The title now states that the example concerns the candidate's nonnegativity.
- Added blank-line separation between numbered proof steps in all 14 changed proof-bearing items: `lem-strict-column-dominance-implies-nonnegative-inverse`, `thm-modified-patankar-euler-positive-conservative`, `lem-modified-patankar-euler-positive-tube-local-error-and-stability`, `thm-zero-compatible-modified-patankar-euler-admissibility`, `thm-mprk22-1-positive-conservative`, `lem-mprk22-1-positive-tube-local-error-and-stability`, `thm-modified-patankar-euler-global-first-order-error`, `thm-patankar-inexact-solve-residual-ledger`, `thm-mprk22-1-global-second-order-error`, `ex-two-compartment-stiff-reversible-transfer`, `ex-three-species-weighted-stoichiometric-conservation`, `ex-zero-denominator-corner-and-factorized-extension`, `cex-small-residual-does-not-certify-positivity`, and `cex-forward-euler-negative-concentration-despite-stability`.
- Updated the assigned proof-contract entries for the residual ledger and the residual-sign counterexample. Neither item contained a `verification.judge` record to remove. No page prose required repair.

Validation after the final item edits:

- `reflow.mts`: all 14 changed items returned `unchanged`.
- `precheck.mts`: all 14 changed items passed.
- `node tools/proof-layout.mjs` on all 14 changed paths: 14 items, 51 numbered steps, 0 defects.

## Uneditable findings

The following current-run supplier proofs are outside batch 78. Their mathematical arguments were readable, but their numbered steps lack the required blank paragraph separators. Exact current-source hashes and the assigned consumers are included in the structured findings output. These are nonfatal layout findings; no mathematical defect was confirmed in these suppliers.

- `lem-rounded-linear-and-normal-residual-certificates`, `## Proof`, lines 46–50; assigned consumer `thm-patankar-inexact-solve-residual-ledger`.
- `lem-discrete-one-step-error-recurrence-bound`, `## Proof`, lines 69–71; assigned consumer `thm-modified-patankar-euler-global-first-order-error`.
- `thm-global-error-from-one-step-defect-and-stability`, `## Proof`, lines 60–62; assigned consumer `thm-modified-patankar-euler-global-first-order-error`.
- `prop-euler-midpoint-rk4-orders-and-stability-functions`, `## Proof`, lines 53–65; assigned consumer `cex-forward-euler-negative-concentration-despite-stability`.
- `thm-explicit-euler-absolute-stability-disk`, `## Proof`, lines 46–48; assigned consumer `cex-forward-euler-negative-concentration-despite-stability`.
- `prop-explicit-rk-order-conditions-through-four`, `## Proof`, lines 73–81; assigned consumer `cex-forward-euler-negative-concentration-despite-stability`.

## Page verdicts

- `positive-conservative-production-destruction-integrators` — **pass**. The A-page summary matches the current claims and states the denominator, positive-tube, zero-state, MPRK22(1), and residual-margin limits accurately.
- `positive-conservative-production-destruction-integrators-examples` — **pass**. The B-page summary matches the two computed examples and the two counterexamples after the assigned title and margin correction.

## Blockers and limitations

No mathematical blocker remains in batch 78. The current batch dependency sidecar/proof-contract evidence still marks six outside supplier-readiness records stale: `lem-rounded-linear-and-normal-residual-certificates`, `def-one-step-ode-method-local-defect-order-and-stability`, `thm-global-error-from-one-step-defect-and-stability`, `prop-euler-midpoint-rk4-orders-and-stability-functions`, `def-xd-finite-column-generator`, and `thm-explicit-euler-absolute-stability-disk`. I reviewed their mathematical interfaces but did not recompute or alter their owner readiness records; owner reconciliation may still be needed before later gates. Autopilot status at handoff showed the run active with no current blocker entry. The source review was limited to the arguments and interfaces needed by this batch.
