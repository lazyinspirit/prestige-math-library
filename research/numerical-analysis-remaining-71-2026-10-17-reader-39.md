# Reader report: batch 39

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Batch: `39`

## Opened inventory

### Assigned pages

- `library/numerical-pdes-and-spatial-discretization/nonlinear-parabolic-compactness-and-monotone-evolution.md` (A page).
- `library/numerical-pdes-and-spatial-discretization/nonlinear-parabolic-compactness-and-monotone-evolution-examples.md` (B page).

### Assigned items, reviewed in supplier order

The A-page inventory (19 items) was reviewed:

`def-pe12-gelfand-triple`, `lem-pe12-w1p-compact-l2-embedding`, `lem-pe12-bochner-lp-mollification`, `lem-pe12-w0p-separable-reflexive`, `thm-pe12-bochner-lp-completeness`, `lem-pe12-outward-zero-brouwer`, `lem-pe12-quasiuniform-mass-inverse-decay`, `def-pe12-monotone-diffusion-flux`, `def-pe12-stable-conforming-fem-family`, `lem-pe12-evolution-energy-chain-rule`, `thm-pe12-aubin-lions-compactness`, `lem-pe12-space-time-gradient-weak-compactness`, `thm-pe12-discrete-aubin-lions-compactness`, `lem-pe12-boundary-preserving-quasi-interpolation`, `lem-pe12-minty-identification`, `thm-pe12-strong-monotone-residual-estimate`, `thm-pe12-l2-projector-w1p-stability`, `thm-pe12-backward-euler-galerkin-existence-energy`, and `thm-pe12-monotone-fem-limit`.

The B-page inventory (4 items) was reviewed:

`ex-pe12-porous-medium-barenblatt`, `cex-pe12-linear-ritz-does-not-commute`, `ex-pe12-time-oscillations-without-derivative-control`, and `ex-pe12-p-laplacian`.

The direct suppliers used to check the arguments were opened at their relevant Statement or Definition sections. These included the evolution-triple and compact-embedding interfaces; Sobolev and zero-extension definitions; the finite-element mesh, coefficient, inverse, Poincaré, and projector results; Bochner measurability, completeness, mollification, and approximation results; the Carathéodory composition lemma; Hölder, Minkowski, Young, dominated convergence, and scalar absolute-continuity results; the Brouwer and discrete-energy results; and the stated reflexivity, weak-subsequence, choice, product-measure, Tonelli, support-of-convolution, and bump suppliers. The complete direct dependency lists remain in the assigned items' `deps` and Facts blocks.

## Edits and evidence

- `lem-pe12-bochner-lp-mollification`: supplied a local truncation and dominated-convergence proof for finite-time (L^p) simple-function approximation; explicitly constructed a nonnegative unit-mass smooth kernel from the bump supplier; and made the measurability and a.e. convolution-integrability requirements explicit. This closes the former unproved (L^p)-density and kernel-existence steps. Its contract was updated. The local proof was cross-checked against Teschl, *Topics in Real and Functional Analysis*, §11.6, Lemma 11.35, printed p. 336 (PDF p. 348), <https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf>. Clason, *Introduction to Finite Element Methods*, Ch. 11 §11.1, PDF pp. 96–98, was also consulted for the Bochner (L^p) convention: <https://arxiv.org/pdf/1709.08618v2.pdf>.
- `lem-pe12-w0p-separable-reflexive`: removed reliance on the published (W^{1,p})-reflexivity proof and supplied a local completeness, reflexivity, and separability argument under the stated ultrafilter-lemma, Dependent Choice, and Hahn–Banach assumptions. The finite product uses the maximum norm and the proof now establishes its completeness coordinatewise. Also closed a missing math delimiter exposed by the final renderer. The proof contract was synchronized with the local argument. No judge record was present to remove.
- `thm-pe12-bochner-lp-completeness`: stated the strongly measurable (L^p) class convention in the proof and made the simple-approximation, countable selections, tail estimate, and convergence of the full Cauchy sequence explicit. The contract was updated; precheck passed.
- `lem-pe12-quasiuniform-mass-inverse-decay`: replaced the unproved cell-packing count by an inscribed-cube and box-volume comparison, including the uniform bound on cells incident to a node. Added the box-measure and measure-monotonicity suppliers and updated the contract. Precheck passed.
- `def-pe12-monotone-diffusion-flux`: made the choice implications used by its Sobolev and compactness interfaces explicit in Remarks, and stated the Hölder bound that makes the induced dual pairing finite. The authored Definition and Statement were preserved. Its contract gate remains clean.
- `thm-pe12-aubin-lions-compactness`: made the finite-dimensional approximation use the dense range explicitly; derived scalar (W^{1,1}) membership before applying the absolute-continuity result (the coefficient is initially known only in (L^p)); described the finite-grid interpolation net; and identified the common (L^r) limit with the (L^p) limit. Contract updated; precheck passed.
- `lem-pe12-space-time-gradient-weak-compactness`: explicitly proved completeness of the finite maximum-norm product used in the weak-subsequence argument. Contract updated; precheck passed.
- `thm-pe12-discrete-aubin-lions-compactness`: made the canonical (V\to H\to V^*) interpretation of the time differences explicit, supplied the finite-grid interpolation-net argument, and identified all finite-(L^r) limits with the strong (L^p) limit. Contract updated; precheck passed.
- `lem-pe12-minty-identification`: added the Carathéodory composition lemma as a direct dependency for flux measurability and separated the fixed (q\cdot\zeta) integrability from the dominated-convergence bound on the flux term. Contract updated; precheck passed.
- `thm-pe12-monotone-fem-limit`: added the Carathéodory composition lemma as a direct dependency and cited it where measurability of (a(x,\nabla\bar U_k)) is used. Contract updated; precheck passed.
- `cex-pe12-linear-ritz-does-not-commute`: corrected the title to “The linear Ritz projection need not preserve the nonlinear p-Laplacian residual,” which matches the displayed witness. The two residual values (1/2) and (2/3) and the conclusion in the Statement were verified by direct integration. Precheck passed.

No stale `verification.judge` record was present on the materially repaired items. The proof-contract gate passed for all 23 batch items. Reflow and precheck were run on each changed item after its repair. The required final batch-wide `proof-layout` command checked 11 changed items and 57 numbered steps with 0 defects. Its first diagnostic pass exposed the missing math delimiter and paragraph spacing in the local (W_0^{1,p}) proof; those were repaired before the successful final pass.

## Uneditable defects and dependency checks

No confirmed uneditable defect remains in this batch. An initial concern about `cor-vector-valued-ftc-and-lipschitz-bound`, Proof steps 2.1 and 3.1, was resolved by opening its vector-coordinate definition: this library defines \(\mathbb R^m\) using coordinates indexed by \(i<m\), so the proof does cover all (m) coordinates. It is not a finding.

The earlier (W^{1,p})-reflexivity dependency was removed from the assigned `lem-pe12-w0p-separable-reflexive` dependency closure and replaced by the local proof above; it is therefore not an in-run or published-dependency finding for this batch.

## Page verdicts

- **A page `nonlinear-parabolic-compactness-and-monotone-evolution`: pass.** Its summary is consistent with the reviewed definitions, compactness statements, discrete construction, and conditional FEM limit. No A-page prose edit was needed.
- **B page `nonlinear-parabolic-compactness-and-monotone-evolution-examples`: pass.** The examples' hypotheses and calculations are consistent with their stated purpose. The Ritz counterexample item title was narrowed to its actual residual witness; no B-page prose edit was made.

## Coverage note and blocker

All two assigned pages and all 23 assigned items were reviewed. The directly cited supplier statements and proof clauses needed for the batch arguments were opened; this review did not recursively re-prove every transitive proof behind every published supplier. No blocker remains. The routed findings file contains an empty findings array.

