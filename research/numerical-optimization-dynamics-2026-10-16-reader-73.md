# Step 3a Reader Report — batch 73

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `73`  
Role: independent reader

## Opened inventory

Assigned pages:

- A: `variance-reduced-finite-sum-and-adaptive-gradient-optimization`
- B: `variance-reduced-finite-sum-and-adaptive-gradient-optimization-examples`

The A page’s three required pages were also opened: `variance-reduction-and-randomized-integration`, `proximal-gradient-and-accelerated-composite-optimization`, and `stochastic-approximation-and-stochastic-gradient-methods`.

Assigned A-page items, reviewed by dependency level:

- Level 0: `alg-adam-update`, `alg-amsgrad-update`, `lem-finite-sum-gradient-is-average`, `lem-positive-diagonal-map-preserves-closed-convexity`.
- Level 1: `alg-saga-finite-sum-method`, `alg-svrg-finite-sum-method`, `cex-adam-periodic-linear-losses-force-divergence`, `lem-convex-smooth-component-gradient-cocoercivity`, `thm-independent-minibatch-conditional-variance`.
- Level 2: `alg-diagonal-adagrad-online-regret`, `cex-saga-linear-factor-fails-under-standard-initialization`, `lem-saga-estimator-and-table-recurrence`, `lem-svrg-unbiasedness-and-variance-bound`.
- Level 3: `lem-diagonal-adagrad-subproblem-well-defined`, `thm-saga-expected-linear-contraction`, `thm-saga-constant-step-memory-capped-linear-contraction`, `thm-svrg-epoch-expected-linear-contraction`.
- Levels 4–5: `lem-diagonal-adagrad-one-step-regret-bound`, `thm-diagonal-adagrad-regret-bound`.

Assigned B-page examples:

- `ex-regularized-logistic-finite-sum`
- `ex-svrg-saga-gradient-work-storage-comparison`
- `ex-adam-adaptive-step-divergence`

The relevant Definition/Statement sections for all direct dependencies in the batch manifest were opened. These included the finite-sum, natural-number and ordered-field rules; derivative and gradient rules; Euclidean norm, finite-sum laws and square-root facts; convexity, smoothness, strong convexity and subgradients; conditional expectation and filtration results; and the proximal, metric-topology, compactness, and exponential/logarithm results. Additional supplier material opened for the AdaGrad well-definedness chain included `lem-proper-closed-convex-function-affine-minorant`, `lem-smooth-composite-sum-preserves-proper-closed-convexity`, `lem-prox-indicator-is-euclidean-projection`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, `cor-bolzano-weierstrass-in-rn`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `thm-euclidean-semicontinuity-level-set-characterisations`, and `thm-compact-subset-is-closed-and-bounded`. Draft supplier proofs used by assigned items were read, including the smoothness descent lemma, the strong-convexity gradient lemma, the proximal existence theorem, and the affine-minorant proof chain.

## Repairs and evidence

1. `items/lem-finite-sum-gradient-is-average.md`: added `lem-of-naturals-positive` to `deps` and a fact establishing that the canonical real image of `n >= 1` is positive. Step 2.1 now derives that `n` is nonzero and its field inverse exists before applying the scalar-multiple derivative rule. This closes the denominator prerequisite for the finite average. The matching proof contract citation and derivation were updated.

2. `items/lem-positive-diagonal-map-preserves-closed-convexity.md`: corrected the explanation of `d_j^{-2}`. The integer-power definition gives `d_j^{-2}=(d_j^2)^{-1}`; the square is positive and the cited inverse-positivity result then gives the required positive coefficient. The matching proof-contract derivation was updated.

3. `items/lem-diagonal-adagrad-subproblem-well-defined.md`: corrected Fact F8 to match the square-root theorem’s nonnegative-root statement. Step 1.1 now shows the root is nonzero because its square is positive, which proves the diagonal scaling is invertible. Its proof-contract citation and derivation were updated.

4. `items/ex-regularized-logistic-finite-sum.md`: Step 2.1 now derives ordinary convexity from the displayed strong Jensen inequality before invoking the strong-convexity definition, whose input already requires a convex function. The proof-contract derivation was updated.

5. `items/alg-amsgrad-update.md`: corrected the literature caveat. Reddi–Kale–Kumar Algorithm 2 takes the running maximum of the uncorrected second-moment recurrence and uses it directly in the denominator; it does not apply Adam’s second-moment bias correction. The locally defined bias-corrected variant remains clearly distinguished from that algorithm.

No `verification.judge` records were present on the edited items. No item Statement or update recurrence was changed.

Primary-source checks confirmed the cited conventions: Kingma–Ba, *Adam: A Method for Stochastic Optimization*, Section 2 Algorithm 1 and Section 3 bias-correction equations (`https://arxiv.org/pdf/1412.6980`); Reddi–Kale–Kumar, *On the Convergence of Adam and Beyond*, page 4 Algorithm 2 and page 3 Theorem 1 / Appendix F Theorem 6 (`https://arxiv.org/pdf/1904.09237`); Defazio–Bach–Lacoste-Julien, *SAGA*, Section 2 (`https://proceedings.neurips.cc/paper_files/paper/2014/file/937964195d6fb3a55cd7cc578165f058-Paper.pdf`); Johnson–Zhang, *Accelerating Stochastic Gradient Descent using Predictive Variance Reduction*, equation (7), Figure 1 option II, Theorem 1 and gradient-work discussion (`https://proceedings.neurips.cc/paper_files/paper/2013/file/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Paper.pdf`); and Duchi–Hazan–Singer, *Adaptive Subgradient Methods for Online Learning and Stochastic Optimization*, Section 1.1 (`https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf`). These references establish update conventions; the assigned claims’ convergence and regret arguments were checked in their local proofs.

All 17 proof-contract entries were reconciled against their current step text. The contract’s SAGA escalation was checked independently: the retained faster-factor theorem requires `eta <= 1/(7 mu n)`, while the `n=100`, `eta=1/13` counterexample violates that cap and refutes only the uncapped factor. The separate memory-capped theorem proves the broader constant-step rate.

## Validation

- Reflow and precheck ran for each of the five edited items. All four proof-bearing items passed precheck; the algorithm item had `0 checked, 0 failing`.
- Final batched proof-layout check: 5 items, 12 proof steps, 0 defects.
- The revised proof-contract derivations match the authored proof steps after whitespace normalization.

## Page verdicts and remaining defects

- A page: no remaining defect identified. Its summary accurately describes the finite-sum estimators, the two SAGA rate branches and their counterexample, the SVRG guarantee, the AdaGrad regret result, and the stated Adam/AMSGrad conventions.
- B page: no remaining defect identified. The logistic example satisfies the cited SVRG hypotheses and its exact factor is `181/224`; the gradient-work counts and periodic Adam drift agree with the item proofs.
- Unedited defects: none. No proposed withdrawal or blocker remains for batch 73.

The live run status also reported separate `3a-collect` batch 27 and `3a-split` batch 61 blockers; those are outside this assignment and were not investigated.

## Coverage note

All assigned pages and 22 assigned items were reviewed, along with the relevant dependency statements and draft supplier proofs. External source reading was limited to the cited passages needed to confirm the method conventions; unrelated sections of those papers were not audited.
