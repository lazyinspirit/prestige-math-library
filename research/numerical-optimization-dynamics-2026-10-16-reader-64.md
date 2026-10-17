# Step 3a reader report — batch 64

Run: `numerical-optimization-dynamics-2026-10-16`  
Reader: `reader-64`  
Verdict: no confirmed defects; no source repairs made.

## Inventory opened

Assigned pages:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/stochastic-approximation-and-stochastic-gradient-methods.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/stochastic-approximation-and-stochastic-gradient-methods-examples.md`

The three page prerequisites of the A page were opened:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/proximal-gradient-and-accelerated-composite-optimization.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/numerical-optimization-globalization-and-inexact-certificates.md`
- `library/probability/martingale-inequalities-and-convergence.md`

All 13 assigned items were opened and reviewed:

- `def-stochastic-gradient-oracle-and-unconstrained-update`
- `lem-robbins-siegmund-almost-supermartingale`
- `thm-robbins-monro-strongly-monotone-root-convergence`
- `thm-stochastic-gradient-nonconvex-randomized-iterate-bound`
- `thm-stochastic-gradient-biased-noise-floor`
- `lem-strong-convexity-implies-strong-monotonicity-of-gradient`
- `thm-stochastic-gradient-strong-convex-diminishing-step-rate`
- `def-projected-stochastic-gradient-update`
- `thm-projected-stochastic-gradient-strong-convex-a-s-convergence`
- `thm-projected-stochastic-gradient-convex-average-bound`
- `ex-streaming-least-squares-single-sample-update`
- `ex-noisy-scalar-root-robbins-monro-convergence`
- `ex-biased-simulator-gradient-stationarity-floor`

The manifest-listed direct item dependencies were opened, including the current batch-27 suppliers:

- `def-axiom-of-choice`
- `def-filtration-and-filtered-probability-space`
- `def-random-element-and-real-random-variable`
- `def-adapted-and-integrable-stochastic-process`
- `def-conditional-expectation-as-an-ae-class`
- `def-conditional-variance`
- `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`
- `def-euclidean-inner-product`
- `def-real-exponential-function-and-e`
- `def-complete-ordered-field`
- `thm-basic-algebra-and-order-properties-of-conditional-expectation`
- `thm-taking-out-what-is-known`
- `thm-doob-submartingale-convergence`
- `thm-derivative-of-exponential`
- `thm-exponential-is-strictly-increasing`
- `cor-mean-value-theorem`
- `thm-exponential-addition-formula`
- `thm-induction-principle`
- `thm-cauchy-schwarz-and-the-euclidean-norm`
- `thm-chain-rule-for-total-derivatives`
- `thm-differentiable-convex-functions-and-gradient-inequality`
- `def-convex-and-strictly-convex-functions-on-euclidean-sets`
- `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`
- `thm-p-series-real-exponents`
- `lem-geometric-sequence-null`
- `def-finite-probability-space-and-event`
- `def-derivative`
- `def-indicator-function-of-closed-convex-set` (current batch 27)
- `lem-prox-indicator-is-euclidean-projection` (current batch 27)
- `thm-proximal-operator-existence-resolvent-firm-nonexpansive` (current batch 27)
- `def-strong-convex-composite-objective` (current batch 27)
- `lem-l-smoothness-descent-inequality` (current batch 27)

Support records opened as evidence, not as verdicts: `research/numerical-optimization-dynamics-2026-10-16-batch-64.pages.json`, `research/numerical-optimization-dynamics-2026-10-16-batch-64.cross-batch-dependencies.json`, and `research/numerical-optimization-dynamics-2026-10-16-batch-64.coverage.json`.

## Mathematical review and page verdicts

**A page — pass.** The page summary accurately describes the locally proved almost-supermartingale result, its use of the published Doob convergence interface under AC, the strongly monotone and projected convergence results, and the finite-time convex and nonconvex rates. The caveat that these optimization convergence results do not themselves provide central-limit or inferential guarantees is accurate.

**B page — pass.** The three examples match their displayed computations and the linked results. The streaming least-squares oracle is unbiased at zero and the realized one-step gap is (1/8); the scalar example verifies the stated power-sum conditions and almost-sure convergence; the biased scalar recurrence converges to (-b), with average squared true gradient tending to (b^2).

The stochastic-oracle definition separates conditional variance from a conditional second-moment bound and fixes the filtration timing and AC convention consistently with its uses. In the Robbins–Siegmund proof, the product normalization, tail-error term, Doob applications to the two negative processes, and recovery of summability of (b_k) are valid. The strongly monotone root theorem and both projected convergence arguments have the required adaptedness, integrability, conditional-moment, and stepsize hypotheses. The nonconvex and biased descent estimates use the conditional second-moment identity with the stated variance bounds; the cross-term estimate in the biased result yields the displayed constants. The strong-convexity gradient lemma follows from the strong-Jensen inequality by a one-sided directional derivative. The last-iterate rate induction, projection definition, and finite-time projected convex telescope are valid, including their zero cases.

The three example calculations were checked directly. No witness, title, definition, statement, computation, or citation defect was confirmed. The current batch-27 supplier statements and proofs were inspected independently; their use here matches their stated interfaces.

## Source checks

The authoritative source targets cited by the assigned items were consulted at their cited sections: Bottou, Curtis, and Nocedal, §§4.1–4.3 (including Theorems 4.7 and 4.8); Bubeck, §§3.1, 3.4.2, and 6.1 (Theorems 6.1 and 6.2); Ghadimi and Lan, Assumption A1 and §2.1 (Theorem 2.1(a) and its descent/telescoping proof); and Bertsekas, Appendix A, Proposition A.4.5. Bertsekas states the generalized supermartingale convergence result but supplies no proof there; the local Robbins–Siegmund proof instead derives the needed result from the opened Doob theorem. Bubeck’s Theorem 6.2 is a weighted-average result with a different stepsize schedule; the item identifies it as a comparison locator, and the assigned local proof establishes its last-iterate claim independently. The source differences therefore do not amount to citation misrepresentation.

Formatting check: `node tools/proof-layout.mjs` was run once on all 13 assigned item paths; it reported 13 items, 38 steps, and 0 defects.

## Edits, uneditable defects, and blockers

No item or page prose was edited. No proof contract required updating, no `verification.judge` record was removed, and reflow/precheck were not run because there was no item repair. No confirmed uneditable defects remain, so the findings JSON is empty.

The batch-64 review has no blocker. At review time the run status showed no active worker and an unrelated run-level `3a-split` blocker: `split-25 failed 3x (covers 25)`. This does not concern batch 64.

## Coverage note

All assigned items, both assigned pages, the A page’s three required pages, and every manifest-listed direct item dependency were opened. A separate rendered evidence bundle was not present in the run-local `.autopilot` file listing; the batch coverage record and source locators were inspected, and the cited PDFs were independently opened. This review checked the relevant dependency interfaces and current batch-27 supplier proofs; it did not re-audit the complete recursive proof foundations of every already published supplier.
