# Step 3a reader report — batch 42

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader (`reader-42`)  
Coverage: batch `42`

## Opened inventory

- Instructions and task inputs: `CLAUDE.md`, `README.md`, `SCHEMA.md`, the review and algorithm portions of `WORKFLOW.md`, `briefs/reader.md`, and `research/numerical-optimization-dynamics-2026-10-16-batch-42.pages.json`.
- Assigned pages: `library/numerical-differential-equations-and-stochastic-dynamics/local-bifurcation-normal-forms-and-numerical-certificates.md` (A) and `library/numerical-differential-equations-and-stochastic-dynamics/local-bifurcation-normal-forms-and-numerical-certificates-examples.md` (B).
- Assigned A-page items, opened in dependency order: `def-hopf-normal-form-data`; `def-hopf-weighted-trajectory-space`; `lem-characteristic-roots-stay-in-separated-neighborhoods`; `lem-hopf-smooth-eigenpair-branch`; `def-local-periodic-orbit-poincare-and-floquet-data`; `thm-hyperbolic-local-map-stability`; `lem-hopf-weighted-trajectory-space-is-banach`; `alg-validate-local-hopf-certificate`; `thm-poincare-map-stability-implies-orbital-stability`; `lem-local-center-manifold-for-a-simple-hopf-point`; `lem-hopf-first-lyapunov-coefficient-from-multilinear-data`; `thm-scalar-fold-transcritical-pitchfork-local-normal-forms`; `thm-hopf-local-branch-and-stability`; `thm-local-hopf-certificate-is-sound`.
- Assigned B-page items: `ex-degenerate-hopf-with-zero-lyapunov-coefficient`; `ex-hopf-interval-enclosure-containing-zero`; `ex-pitchfork-symmetry-breaking-unfolding`; `ex-supercritical-hopf-cubic-normal-form`; `ex-subcritical-hopf-cubic-normal-form`.
- Required pages opened for context: `library/real-analysis/the-inverse-function-theorem-completed.md`, `library/numerical-differential-equations-and-stochastic-dynamics/pseudo-arclength-continuation-and-fold-certificates.md`, and `library/differential-topology/codimension-one-foliations-and-secondary-classes.md`.
- In-run draft suppliers opened with their complete arguments: `thm-augmented-residual-contraction-certificate` and `thm-simple-fold-lyapunov-schmidt-parameterization` (the pseudo-arclength prerequisite page). Their statements match the root-isolation and scalar-fold uses in this batch.
- Other directly used dependency statements opened: `def-eigenvalue-eigenvector-eigenspace-and-spectrum`; `def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue`; `prop-simple-eigenvalues-admit-left-right-normalization`; `def-ck-euclidean-maps-and-diffeomorphisms`; `def-total-derivative-in-euclidean-space`; `def-norm-and-normed-space`; `def-characteristic-polynomial-of-a-matrix`; `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`; `thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity`; `thm-bolzano-weierstrass`; `thm-parametrized-implicit-function-theorem-with-higher-regularity`; `thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing`; `thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x`; `thm-jordan-form-exists-iff-the-characteristic-polynomial-splits`; `def-jordan-canonical-form`; `thm-mean-value-inequality-for-total-derivatives`; `thm-euclidean-space-complete`; `thm-banach-fixed-point`; `lem-euclidean-linear-maps-have-matrices-and-are-bounded`; `thm-newton-leibniz-with-interior-derivative`; `thm-ftc-first-part`; `thm-chain-rule-for-total-derivatives`; `thm-ck-euclidean-maps-closed-under-algebra-and-composition`; `lem-smooth-bump-between-concentric-euclidean-balls`; `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`; `def-complex-exponential`; `thm-complex-exponential-is-entire-with-derivative-itself`; `thm-complex-exponential-addition-and-real-extension`; `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`; `thm-continuous-image-of-a-compact-space-is-compact`; `cor-compact-domain-maps-are-uniformly-continuous`; `thm-intermediate-value`; and `thm-cauchy-schwarz-and-the-euclidean-norm`.
- The published flow supplier `lem-c1-euclidean-maximal-flow-with-c2-upgrade` was opened with its proof. Published prerequisite statements were checked against each cited use; the lengthy weighted-space and flow arguments were reviewed in the assigned sources.

## Edits and evidence

1. In `items/def-local-periodic-orbit-poincare-and-floquet-data.md`, the Definition now requires a real (C^1) vector field on an open set before using (Df) in the variational equation. It also limits the return-map terminology to a section neighborhood where the next return is defined. This states the regularity needed for the displayed variational equation and avoids defining a return map outside its local domain. The direct consumers already assume at least (C^1) (the Hopf consumer assumes (C^5)); their statements and proofs remain valid. The definition's proof-contract boundary notes were updated, as were its exact source quotations in the contracts for `thm-poincare-map-stability-implies-orbital-stability` and `thm-hopf-local-branch-and-stability`. No `verification.judge` record was present on the definition.
2. In `items/thm-scalar-fold-transcritical-pitchfork-local-normal-forms.md`, the title now says “equilibrium branches.” The theorem proves branch sets, slopes, and curvature, but does not prove a coordinate or topological equivalence to canonical normal-form equations.

For the Hopf coefficient and normal-form calculations, I checked Kuznetsov, *Elements of Applied Bifurcation Theory*, 2nd ed., §3.5, printed pp. 94–100, and §5.4, printed pp. 177–178: [source PDF](https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf). The parameter-dependent quadratic and cubic elimination and the (G_{21}) coefficient convention agree with the local derivations after the batch's declared eigenvector normalization is imposed. Section 5.1.1, pp. 152–153, states the center-manifold theorem but says its proof is omitted; I therefore checked the assigned weighted-space proof directly rather than treating that citation as a proof supplier.

Validation after final edits:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-local-periodic-orbit-poincare-and-floquet-data.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-local-periodic-orbit-poincare-and-floquet-data.md` — 0 checked, 0 failing (definition).
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-scalar-fold-transcritical-pitchfork-local-normal-forms.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-scalar-fold-transcritical-pitchfork-local-normal-forms.md` — 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/def-local-periodic-orbit-poincare-and-floquet-data.md items/thm-scalar-fold-transcritical-pitchfork-local-normal-forms.md` — 2 items, 6 steps, 0 defects.

## Defects not edited

None. No confirmed defect remains in an uneditable dependency.

## Page verdicts

- **A — Local bifurcation normal forms and numerical certificates:** pass. Definitions, equilibrium branch results, the weighted-space center-manifold construction, Hopf coefficient, local periodic branch/stability proof, certificate procedure, and certificate-soundness theorem were checked. The summary accurately limits the conclusions to local dynamics and proof-carrying enclosures. The definition and title edits above are the only repairs.
- **B — Examples:** pass. The degenerate crossing, interval-enclosure failure, symmetry-breaking example, and supercritical/subcritical cubic computations agree with their stated hypotheses and conclusions.

## Blocker and coverage

There is no batch-42 blocker. Read-only `autopilot status` showed the run is active and has a separate existing `3a-split` blocker for batch 6 (`split-6` failed three times); that blocker is outside this assignment. The assigned pages, items, and dependency statements needed for their claims were reviewed. No unresolved mathematical uncertainty remains.
