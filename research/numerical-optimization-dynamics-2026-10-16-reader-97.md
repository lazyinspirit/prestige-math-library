# Reader report — batch 97

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `97`  
Role: independent reader

## Assignment and run state

The assigned manifest contains A page `self-consistent-projector-iterations-and-certified-mixing`, B companion `self-consistent-projector-iterations-and-certified-mixing-examples`, 20 A-page items, and 6 B-page examples. At final status recomputation the run remained live, no task was in flight, and batch 97 was still outstanding in the 3a-read/split stages. No batch-97 blocker was reported.

The task-specific prompt supplied the manifest; the current batch dependency-input artifact was opened. A separate rendered reader bundle was not present in the task-specific paths inspected, so this review used the manifest, dependency-input artifact, current assigned sources, and current dependency sources.

## Opened inventory

### Assigned pages

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/self-consistent-projector-iterations-and-certified-mixing.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/self-consistent-projector-iterations-and-certified-mixing-examples.md`

### Assigned items, read in dependency order

A page:

- `lem-capped-diis-coefficient-minimizer-exists`
- `def-self-consistent-projector-response-map`
- `def-admissible-hermitian-density-domain`
- `lem-spectral-gap-persistence-and-uniform-resolvent-bound`
- `lem-gapped-projector-map-well-defined`
- `lem-projector-is-admissible-density`
- `lem-admissible-density-domain-is-closed-convex-complete`
- `thm-block-projector-frechet-derivative-and-bound`
- `thm-contractive-scf-convergence-and-inexact-error-bound`
- `thm-level-shift-fixed-projector-equivalence`
- `alg-undamped-scf-with-gap-and-residual-status`
- `alg-capped-diis-projector-proposal`
- `lem-density-mixing-preserves-domain-but-not-projectors`
- `thm-gapped-response-projector-lipschitz-certificate`
- `cor-finite-basis-energy-model-has-c1-response`
- `thm-density-mixing-contracts-under-jacobian-certificate`
- `alg-certified-scf-with-diis-safeguard`
- `thm-certified-diis-error-inheritance`
- `alg-relaxed-density-mixing-with-finite-budget`
- `lem-finite-budget-scf-iteration-work`

B companion:

- `ex-occupied-projector-discontinuity-at-zero-gap`
- `ex-self-consistent-projector-two-cycle-with-gap`
- `ex-affine-contractive-response-and-residual-error`
- `ex-density-mixture-leaves-projector-manifold`
- `ex-diis-singular-gram-fallback`
- `ex-additive-eigensolve-tolerance-residual-certificate`

### Dependency items inspected

In-run suppliers outside batch 97, left unchanged:

- `alg-fixed-point-iteration` (batch 3)
- `def-rank-r-orthogonal-projector-domain` (batch 92)
- `lem-complex-hermitian-eigenvalues-lipschitz` (batch 92)
- `lem-hermitian-idempotent-trace-equals-rank` (batch 92)
- `def-finite-basis-projector-energy-model` (batch 92)
- `prop-finite-projector-energy-reality-and-gradient` (batch 92)

Published suppliers opened:

- `lem-of-triangle-inequality`; `lem-of-abs-value`; `def-finite-sum-in-a-commutative-monoid`; `def-frobenius-matrix-norm`; `thm-heine-borel-rn`; `thm-extreme-value-metric`
- `def-self-adjoint-and-normal-endomorphism`; `def-matrix-product-and-identity-matrix`; `def-trace-of-a-square-matrix`; `thm-trace-of-ab-equals-trace-of-ba`; `cor-trace-is-invariant-under-similarity`; `def-rank-and-nullity`
- `thm-complex-spectral-theorem-for-normal-endomorphisms`; `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; `thm-weyl-inequalities-for-self-adjoint-sums`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`
- `def-metric-space`; `def-complete-metric-space`; `thm-euclidean-space-complete`; `thm-complete-subspace-iff-closed`; `def-lipschitz-holder-contraction`; `thm-banach-fixed-point`
- `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`; `def-c-one-map-and-local-inverse`; `def-ck-and-multi-index-notation-in-several-variables`; `thm-continuous-partial-derivatives-imply-total-differentiability`; `lem-euclidean-linear-maps-have-matrices-and-are-bounded`; `thm-chain-rule-for-total-derivatives`; `cor-vector-valued-ftc-and-lipschitz-bound`
- `def-complex-line-integral-over-a-rectifiable-path`; `prop-linearity-of-complex-line-integrals`; `thm-existence-of-complex-line-integrals-on-rectifiable-paths`; `thm-cauchy-integral-formula-circle`; `thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain`
- `prop-differentials-of-trace-and-frobenius-linear-functionals`; `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`

## Repairs and evidence

All repairs below were limited to assigned in-flight items. No page prose was edited.

- `lem-capped-diis-coefficient-minimizer-exists`, steps 1.1–3.1: supplied explicit Lipschitz estimates for the affine constraint and the absolute-sum cap, established continuity of the residual map by the Frobenius norm inequalities, used Heine–Borel directly for the minimizer set, and derived the squared-Frobenius convexity identity entrywise. This closes the continuity and closed-subset-compactness assumptions without narrowing the statement. The generic DIIS affine coefficient constraint and residual least-squares objective agree with Rohwedder, *An Analysis for Some Methods and Algorithms of Quantum Chemistry*, Chapter 4 §4.1, printed pp. 94–95, equations (4.1)–(4.2); the minimum-norm tie-break is established by the local proof.
- `lem-admissible-density-domain-is-closed-convex-complete`, steps 1.2–4.1: identified the Hermitian matrix space isometrically with `R^{n^2}` under the Frobenius norm, used Euclidean completeness for Cauchy sequences, and proved closedness as an intersection of closed quadratic-form and trace constraints rather than assuming sequential closedness. The admissible-domain definition agrees with Cancès, Kemlin, and Levitt, Appendix Lemma 4.1: `CH(M_N)={P=P*, 0≤P≤1, Tr(P)=N}`.
- `thm-block-projector-frechet-derivative-and-bound`, steps 1.1–4.1: proved that the operator-norm ball is open in the Frobenius topology, defined matrix contour integrals entrywise, supplied existence and the matrix-valued integral norm estimate, and made the derivative's real-linearity and continuity explicit. The spectral separation and Cauchy formula are applied only under the strict gap and contour hypotheses already stated in the listed dependencies.
- `thm-level-shift-fixed-projector-equivalence`, statement and step 3.1: added the missing condition `P∈U` required to evaluate `F(P)` and derived commutation from the occupied spectral projector's eigenbasis description before comparing the occupied and shifted virtual blocks.
- `alg-undamped-scf-with-gap-and-residual-status`: specified the eigensolver output/failure interface and the invariant-set condition that ensures each accepted update remains in its input set.
- `alg-capped-diis-projector-proposal`: added the current `(P_k,F(P_k))` input, the exact constrained-solver and mixed-matrix eigensolver interfaces, the real coefficient domain, and the candidate/fallback return values. The solver now returns the theorem's unique minimum-norm selection or an explicit failure.
- `alg-certified-scf-with-diis-safeguard`: specified `F`, `K⊆U∩P_r`, the eigensolver, approximate response evaluator, and constrained least-squares solver inputs; passed the required interfaces to the proposal procedure; and defined terminal output tuples. Failure returns retain the current certified `E_k` bound. It now uses `lem-finite-budget-scf-iteration-work` as a `justified_by` result.
- `alg-relaxed-density-mixing-with-finite-budget`: specified the response matrix map and eigensolver required by its gap checks, and described it as the residual/budget pattern for a partial response map with explicit gap failure.
- `lem-finite-budget-scf-iteration-work`: included the certified DIIS algorithm as a supplier and proved its finite outer-work bound: at most `N` updates and `2N+1` current/candidate residual tests, with returning solver primitives. The baseline procedures retain the `N+1` residual-test bound.
- `thm-certified-diis-error-inheritance`: changed the infinite-sequence clause to describe an infinite sequence following the update rules, which is distinct from the algorithm's finite-budget execution.
- `ex-self-consistent-projector-two-cycle-with-gap`: made the exact eigensolver and the invariant two-point set explicit after the undamped procedure's input interface was clarified.
- `ex-affine-contractive-response-and-residual-error`: stated the general theorem's residual estimate conditionally and showed the scalar equality directly, without asserting that the example's interval satisfies an unstated completeness premise.
- `ex-diis-singular-gram-fallback`: replaced the false claim that each displayed rank-one term is self-adjoint with the explicit symmetric-pair calculation for `G`, and supplied the current/preceding pair and eigensolver inputs required by the proposal procedure.

The current published and other-batch supplier statements used by the proofs were inspected at their cited sections. No defect was found in those suppliers; none is reported as an uneditable finding.

## Validation

- The final reflow run covered all 13 changed item paths; all were unchanged by the formatter. An earlier reflow preceded later proof adjustments.
- `regen-contract-entries.mjs` regenerated the citations and derivations for all 9 changed proof-bearing items in the batch proof-contract file.
- Precheck passed for all 9 proof-bearing changed items. The 4 changed algorithm definitions correctly reported zero proof-like sections to check.
- No changed item contained a `verification.judge` record, so there was no stale judge record to remove.
- The required final `node tools/proof-layout.mjs` command covered all 13 changed item paths: 34 proof steps, 0 defects.

## Page verdicts

- `self-consistent-projector-iterations-and-certified-mixing` (A): the page summary's distinction between undamped projector iteration, density mixing, certified contraction, safeguarded DIIS, level shifting, and finite-budget failure statuses is supported by the reviewed items after the repairs above. No A-page prose edit was needed.
- `self-consistent-projector-iterations-and-certified-mixing-examples` (B): the summary accurately describes the six checked computations, including the positive-gap two-cycle, zero-gap discontinuity, residual equality, density mixture, singular-Gram fallback, and additive response tolerance. No B-page prose edit was permitted or needed.

## Uneditable findings and blockers

No defects remained in published or other-batch dependencies, so the findings array is empty. No batch-97 blocker prevented review or repair. The recomputed run status showed the build remains live with other batches still outstanding.

## Source checks and limitation

The batch dependency-input file was used as a locator, not as a verdict. No standalone rendered reader bundle was available in the task-specific paths. The relevant external checks were:

- Rohwedder §4.1, pp. 94–95, equations (4.1)–(4.2), for DIIS's normalized residual least-squares objective: [source PDF](https://depositonce.tu-berlin.de/bitstreams/7a3115d5-2ab7-4041-b9ea-5259a6659a2e/download).
- Cancès, Kemlin, and Levitt, Appendix Lemma 4.1, for the convex fixed-trace density domain: [arXiv PDF](https://arxiv.org/pdf/2004.09088).
- Cancès and Le Bris (2000), abstract and Sections 2.2/4, for the finite-dimensional level-shifting algorithm context; the local equivalence in this batch is derived directly: [article PDF](https://www.numdam.org/item/M2AN_2000__34_4_749_0.pdf).
