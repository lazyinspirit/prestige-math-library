# Step 3a Reader Report — Batch 27

Run: `mathematical-statistics-foundations-37`  
Batch: `27`  
Role: independent reader  
Verdict: both assigned pages pass after the listed in-scope repairs. No mathematical blocker remains in batch 27.

## Opened inventory

Assigned pages opened:

- `library/mathematical-statistics/splines-series-and-approximation-rates.md` (A page)
- `library/mathematical-statistics/splines-series-and-approximation-rates-examples.md` (B page)

All assigned items were opened and reviewed in dependency order:

- A page: `def-b-spline-space-and-basis`, `def-natural-cubic-spline`, `thm-spline-polynomial-reproduction`, `thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots`, `def-natural-cubic-smoothing-spline`, `def-local-spline-quasi-interpolant`, `thm-natural-cubic-smoothing-spline-exists-uniquely`, `thm-sobolev-spline-quasi-interpolant-rate`, `def-series-spline-least-squares`, `thm-series-training-risk`, `cor-series-spline-sobolev-training-risk-rate`.
- B page: `cex-one-observation-does-not-identify-a-smoothing-spline`, `ex-b-spline-basis-and-polynomial-reproduction`, `ex-natural-cubic-interpolants-on-two-and-three-knots`, `ex-uniform-mesh-linear-spline-approximation`, `ex-spline-training-risk-can-differ-from-independent-test-risk`.

Direct suppliers and page context opened to check the assigned claims included `def-axiom-of-choice`, `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`, `def-sobolev-space-wkp-and-its-norm`, `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`, `def-inner-product-space`, `def-inner-product-norm`, `prop-pythagorean-parallelogram-and-polarisation-identities`, `thm-finite-dimensional-orthogonal-decomposition`, `def-orthogonal-projection`, `thm-orthogonal-projection-is-the-unique-nearest-point`, `thm-bessel-inequality-and-finite-parseval-identity`, `prop-orthogonal-projection-formula-and-linearity`, `thm-holder-inequality-for-integrals`, `def-measure-kernel-and-probability-kernel`, `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `def-independent-random-elements`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-independent-random-elements-have-product-joint-law`, `thm-dynkin-pi-lambda`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and `thm-gram-schmidt-orthonormalisation`.

Other-batch/current-run dependencies opened were `def-fixed-design-projection-estimator` (batch 18), `def-density-target-and-kernel-density-estimator` (batch 25 page context), `def-regression-target-version` (batch 26), and `def-loss-function-and-risk`. The cited conditional-expectation supplier `cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable` was also opened.

The assigned A-page prerequisite pages opened were `decision-theoretic-upper-bounds-and-oracle-risk`, `losses-risk-and-decision-rules`, `weak-derivatives-and-sobolev-spaces`, `sobolev-traces-and-zero-boundary-values`, and `inner-product-spaces-and-orthogonality`. The current `nonparametric-regression-and-smoothing` page and its `nonparametric-density-estimation-and-kernels` page prerequisite were checked as context for the selected regression target.

## Repairs and evidence

1. `def-b-spline-space-and-basis`: made the recursive degree index explicit. For a fixed final degree (p) and clamped vector of length (n+p+1), degree (d) now has indices (1\le j\le n+p-d), and the left-limit endpoint convention is stated for every (d). This fixes the missing domain of the recursive family, including the lower-degree indices referenced by the recurrence. Lyche–Manni–Speleers, *B-Splines and Spline Approximation*, §1.1.1, Definition 2 (PDF p. 2) gives the knot-indexed recurrence; §1.2.3, Theorem 16 (PDF pp. 14–15) uses the final (n)-function family.

2. `thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots`: corrected the left and right endpoint-slope formulas and stated their endpoint locations. The left slope is (d_i-M_i h_i/3-M_{i+1}h_i/6); the right slope is (d_i+M_i h_i/6+M_{i+1}h_i/3). Equating adjacent slopes gives the displayed tridiagonal system. The prior citation to Tibshirani §2.3 was inaccurate for interpolation; it concerns the smoothing-spline representer theorem. It is now cited to Green and Silverman, *Nonparametric Regression and Generalized Linear Models: A Roughness Penalty Approach*, §2.2.1, Theorem 2.2, printed p. 15. That theorem gives existence and uniqueness for distinct-knot natural cubic interpolation; the item’s local proof establishes the stated endpoint-inclusive version.

3. `ex-natural-cubic-interpolants-on-two-and-three-knots`: changed the same inaccurate §2.3 citation to Green and Silverman §2.2.1, Theorem 2.2. The two-knot and three-knot computations were checked directly against the system and interval formulas.

4. `def-local-spline-quasi-interpolant`: defined a mesh-indexed operator family with common (M,C_Q) and required each neighborhood to contain its cell. This makes “independent of the mesh” a property of a family and supplies the inclusion used in the approximation proof. Lyche–Manni–Speleers, §2.2.1, Definitions 29–30 (PDF pp. 26–27), define support neighborhoods and local stability; Theorem 32 (PDF pp. 28–29) explicitly uses ([\xi_m,\xi_{m+1}]\subseteq J_m).

5. `thm-sobolev-spline-quasi-interpolant-rate`: stated the mesh-family scope and real-valued Sobolev input, used neighborhood containment in the local estimate, and made the endpoint (q=1,\infty) Taylor bounds explicit. Step 4.1 originally cited a theorem whose ambient inner-product space must be finite-dimensional, while (L^2(I)) is not. Replaced that invalid use with a direct cellwise construction: the polynomial Gram matrix is positive definite, its inverse defines the (L^2) projector, and the residual is orthogonal, so Pythagoras gives contractivity. The CIME source Theorem 32 and Example 33 support the local approximation argument and the uniform-mesh specialization.

6. `ex-uniform-mesh-linear-spline-approximation`: made the uniform-mesh interpolants an explicit family, so the common constants (M=1,C_Q=1) match the revised definition. Its Peano-kernel calculation gives the stated (h^2\|D^2f\|_\infty/8) bound.

7. `thm-series-training-risk`: explicitly supplied a common probability space and iid measurable pair-valued observations, and wrote the deterministic approximation condition as an integral against (P_X), rather than using an undefined (X). Allowed (C=0), which the proof and the exact-approximation boundary already support. Newey, MIT 14.385, Proposition 3 and proof (PDF pp. 10–11), gives the corresponding ΔK/n variance term and squared approximation term; the item proves its supplied-kernel and rank-deficient-design version locally.

8. `cor-series-spline-sobolev-training-risk-rate`: stated (a<b), the Lebesgue-density interpretation, finite Δ, integer degree, and iid model explicitly. The proof now passes from the selected Borel version to its continuous Sobolev representative using (P_X\ll\lambda), expands the cellwise spline into the deterministic B-spline coefficient vector required by the risk theorem, and applies the density bound. The constant times (\|D^s g_0\|_2^2) conclusion includes the zero-derivative case through (C=0) in the repaired generic risk theorem.

The batch-27 proof contracts were updated for the changed definitions, statements and step arguments. No changed item had a `verification.judge` record to remove.

## Source locators

- Lyche, Manni and Speleers, [*B-Splines and Spline Approximation*](https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf): §1.1.1 Definition 2 (PDF pp. 2–3); §1.2.3 Theorem 16 (PDF pp. 14–15); §2.2.1 Definitions 29–30 (PDF pp. 26–27), Theorem 32 and Example 33 (PDF pp. 28–29).
- Tibshirani, [*Nonparametric Regression: Splines and RKHS Methods*](https://www.stat.berkeley.edu/~ryantibs/statlearn-s23/lectures/splines_rkhs.pdf): §2.1 natural spline definition (PDF p. 2), §2.2 smoothing objective, and §2.3 representer theorem (PDF p. 3). The §2.3 passage supports the smoothing claim, not natural interpolation.
- Newey, [*Nonparametric and Semiparametric Estimation*](https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf): §6, Proposition 3 and proof (PDF pp. 10–11).
- Green and Silverman, *Nonparametric Regression and Generalized Linear Models: A Roughness Penalty Approach*, §2.2.1, Theorem 2.2, printed p. 15: [academic repository record and PDF](https://ndl.ethernet.edu.et/handle/123456789/32883); [full text mirror opened for the theorem and proof](https://pdfcoffee.com/chapman-amp-hallcrc-monographs-on-statistics-amp-applied-probability-pj-green-bernard-w-silverman-nonparametric-regression-and-generalized-linear-models-a-roughness-penalty-approach-chapman-and-h-pdf-free.html).

## Page verdicts

- `splines-series-and-approximation-rates`: **pass after repair**. The B-spline definition and basis theorem now agree on index domains; natural cubic interpolation has the correct slope formulas; the smoothing-spline reduction is proved by finite-dimensional minimization and the orthogonality identity; and the Sobolev-rate and training-risk claims state and use their hypotheses. The page summary correctly limits the spline rate to the stated uniform full-multiplicity convention and the risk claim to training-design loss.
- `splines-series-and-approximation-rates-examples`: **pass after repair**. The Bernstein basis, two/three-knot interpolants, one-observation nonuniqueness example, uniform linear interpolant and train/test separation computations all check. Its interpolation citation now points to the interpolation theorem.

The earlier batch-27 cross-dependency note described an absent density-target carrier on the regression page’s prerequisite path. The current batch-25 manifest and `items/def-density-target-and-kernel-density-estimator.md` contain that carrier; the current regression-target definition and its conditional-expectation supplier are mathematically sufficient for the assigned corollary. No in-run dependency finding remains.

## Uneditable findings

None. I found no current defect in the assigned pages or in the direct published and other-batch suppliers used by their proofs.

## Validation and blockers

For all eight changed items, `reflow.mts` reported unchanged and `precheck.mts` passed with zero failures. The final command `node tools/proof-layout.mjs` over all eight changed item paths reported **8 items, 18 steps, 0 defects**. No blocker remains for batch 27.

## Coverage note

I reviewed every assigned page and item, the direct suppliers used by their claims, the relevant prerequisite-page summaries, and the cited source passages listed above. I did not audit every transitive proof beneath the published measure, probability, Sobolev and linear-algebra interfaces, nor unrelated items on prerequisite pages. The Green–Silverman theorem text and proof were read in an accessible text mirror and cross-checked against the book’s academic-repository record; a direct fetch of that repository’s PDF timed out.
