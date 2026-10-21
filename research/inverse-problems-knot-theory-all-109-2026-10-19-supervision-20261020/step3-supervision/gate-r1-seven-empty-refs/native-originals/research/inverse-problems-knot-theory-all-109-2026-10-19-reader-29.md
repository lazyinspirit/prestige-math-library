# Step 3a reader report — batch 29

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `29`

## Opened inventory

Assigned pages:

- `library/inverse-problems/regularized-gauss-newton-and-levenberg-marquardt.md` (A)
- `library/inverse-problems/regularized-gauss-newton-and-levenberg-marquardt-examples.md` (B)

Assigned items, reviewed in their proof/dependency context:

- `def-ip-product-tangential-cone-condition`
- `lem-ip-lm-product-condition-implies-range-approximation`
- `alg-ip-regularized-levenberg-marquardt`
- `lem-ip-lm-step-existence-and-residual-forcing`
- `lem-ip-lm-fejer-decrease-and-parameter-bound`
- `thm-ip-lm-local-discrepancy-stopping`
- `ex-ip-lm-scalar-regularized-step-stability`
- `cex-ip-lm-zero-noise-discrepancy-stopping`

Opened the four direct A-page prerequisite pages: `nonlinear-inverse-problems-and-tangential-cone-conditions`, `nonlinear-tikhonov-existence-and-stability`, `gauss-newton-and-levenberg-marquardt-methods`, and `iterative-regularization-and-early-stopping`. The latter two are published pages in `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/`.

Opened the direct definitions used by the assigned items: `def-ip-nonlinear-forward-map`, `def-ip-tangential-cone-condition`, `def-ip-forward-map-and-solution-classes`, `def-hilbert-space`, `def-inner-product-space`, `def-inner-product-norm`, `def-real-and-complex-inner-product-space`, `def-norm-and-normed-space`, `def-complex-norm-and-complex-normed-space`, `def-banach-space`, `def-complete-metric-space`, `def-metric-space`, `def-metric-topology`, `def-metric-continuity`, `def-frechet-derivative-between-banach-spaces`, `def-space-of-bounded-linear-operators`, `def-bounded-linear-operator`, `def-operator-norm`, and `lem-the-frechet-derivative-is-unique`.

Opened the proof suppliers and supporting procedures used in the assigned arguments: `cor-inner-product-induces-a-norm`, `thm-cauchy-schwarz-in-an-inner-product-space`, `lem-of-abs-value`, `def-countable-choice`, `def-hilbert-space-adjoint`, `lem-hilbert-tikhonov-normal-operator-invertible`, `thm-intermediate-value`, `thm-hilbert-adjoint-properties`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `lem-cauchy-reals-archimedean`, `thm-of-square-roots`, `alg-safeguarded-levenberg-marquardt`, `alg-gauss-newton-qr-svd-step-with-rank-safeguard`, `lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer`, `def-euclidean-inner-product`, `def-jacobian-matrix-and-gradient`, `def-matrix-product-and-identity-matrix`, `def-trust-region-quadratic-model-and-ratio`, `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, and `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`.

## Mathematical review

- `def-ip-product-tangential-cone-condition`: the two-point remainder and its quantifiers are stated correctly. The accompanying remark correctly says the condition is an explicit hypothesis and is not derived from differentiability or the one-basepoint cone condition.
- `lem-ip-lm-product-condition-implies-range-approximation`: the product remainder gives a bound (ce\|F(x)-y\|); the noise triangle inequality and (R>\tau\delta) give ([1+ce(1+\tau)]R/\tau). The displayed definition of \(\gamma\) gives the claimed \(\sigma/\gamma\) margin.
- `alg-ip-regularized-levenberg-marquardt`: the inputs, exact regularized subproblem, forcing rule, domain/discrepancy/budget branches, and failure statuses are specified. The local range condition is correctly treated as sufficient for the forcing parameter, not as an input to the minimization. Its `justified_by` link to the existence lemma follows the algorithm well-definedness rule; the lemma's `deps` edge to the analyzed algorithm is intentional.
- `lem-ip-lm-step-existence-and-residual-forcing`: the normal operator gives a unique minimizer; the inverse identity gives continuity in \(\alpha\); comparison with the fixed range witness gives a residual below \(\sigma\|r\|\) for small positive \(\alpha\), while the large-\(\alpha\) limit is \(\|r\|\). The intermediate value argument is valid. The argument is self-contained relative to its stated Hilbert-space and intermediate-value suppliers.
- `lem-ip-lm-fejer-decrease-and-parameter-bound`: the first variation yields the normal equation; the identities for \(q=r-Th\) and \(w=Te+r\), followed by Cauchy–Schwarz, give the stated decrease. Applying \(T\) to the normal equation and using \(\|T^*\|=\|T\|\) gives the parameter bound.
- `thm-ip-lm-local-discrepancy-stopping`: the Fejér estimate keeps the iterates within the stated local ball, the product condition yields the factor \(q=(\sigma+ce_0)/(1-ce_0)\), and the positive-noise discrepancy crossing is finite. The first-crossing and logarithmic estimates preserve the hypotheses and do not claim an error rate for the stopped iterate.
- `ex-ip-lm-scalar-regularized-step-stability`: completing the square gives the stated fixed-damping step and uniform bound. The forcing-selected parameter instead yields a step proportional to \(1/\varepsilon\). In the safeguarded trial, the augmented scalar matrix has the stated exact reduced QR factorization; the QR routine solves the augmented residual equation with the correct sign. Affineness makes actual and predicted reductions equal, and the strict trust-radius inequality leaves damping unchanged.
- `cex-ip-lm-zero-noise-discrepancy-stopping`: the identity map satisfies the product condition with zero remainder and all local numerical bounds. The forcing equality gives \(\alpha_n=1\) and \(r_{n+1}=r_n/2\), so \(r_n=2^{-n}/16>0\) at every finite index. This refutes only a zero-noise finite-stopping extension; the assigned theorem assumes \(\delta>0\).

Source checks: Clason, *Regularization of Inverse Problems*, arXiv:2001.00617v2, §11.2, equations (11.14)–(11.17), Theorem 11.8 and its proof (existence of the forcing parameter), Lemma 11.9 and equation (11.18) (Fejér decrease), and Assumption 11.10/equations (11.22)–(11.23) with Theorem 11.11 and its proof (local positive-noise stopping). The source statements and relevant proof arguments were opened in the arXiv PDF. [Source](https://arxiv.org/pdf/2001.00617v2). Kaltenbacher, *Inverse Problems – Applications and Solution Strategies*, slide 80 gives the same unanchored LM update, residual-forcing equality, and discrepancy rule. [Source](https://me.aau.at/~bkaltenb/AD12_kaltenbacher.pdf).

## Edits and validation

Added the required blank-line separation between numbered proof paragraphs in:

- `items/lem-ip-lm-product-condition-implies-range-approximation.md`
- `items/lem-ip-lm-step-existence-and-residual-forcing.md`
- `items/lem-ip-lm-fejer-decrease-and-parameter-bound.md`

These were formatting-only repairs; proof text, mathematics, references, dependencies, and proof facts are unchanged. `reflow.mts` reported each contract unchanged; `precheck.mts` passed each item. No stale `verification.judge` entry was present on these changed items. The final batched `proof-layout` check reported 3 items, 14 steps, and 0 defects.

## Page verdicts

- A page: **pass**. Its frontmatter inventory matches the six assigned items; its four prerequisite page IDs resolve, including the two cross-category published pages. The body is empty and `page_layout: compact-v1` is present.
- B page: **pass**. Its examples inventory matches both assigned examples, it requires the A page, the body is empty, and `page_layout: compact-v1` is present.

## Uneditable defects and blocker

No confirmed defects requiring repair outside this batch were found. No blocker remains.

## Coverage note

All eight assigned item files and both assigned page files were opened, along with the direct logical suppliers and the supporting source passages identified above. I did not independently re-audit every foundational ancestor behind already-published suppliers where the supplier's exact statement or proof step sufficed for the assigned argument. One initial source-view sequence did not follow the declared dependency order: the product-condition definition was opened before its direct suppliers, and the self-contained existence lemma was opened before the algorithm file; all supplier statements and the complete algorithm were subsequently inspected before reaching the verdicts. No mathematical uncertainty remains in the assigned claims.
