# Batch 92 authoring notes — PC-VAR

## Scope and controlling plan

The assigned pair is `finite-basis-projector-energies-and-variational-electronic-structure`, A/B orders 2468–2469, in `numerical-optimization-inverse-problems-and-uncertainty-quantification`. The owner-authoring direction for the fresh combined run is controlling. The dependency artifact assigns batch 92 level 6 with prerequisite batches 57, 72, and 83; scheduling input is `a20c83d967c4fb82d96b2681fe009f89c3dd179bbf56683e847ca38526498979`.

The complete PC-VAR section and its incorporated contract appendix were compared with the PC-VAR row in `research/plan-spec.json`. There is no semantic scope conflict. The empty `items` array in plan-spec is an inventory placeholder; the authored inventory is 19 A items and 6 B examples, all below the 100-item page cap. The controlling scope retains the finite projector model, the finite-temperature domain/entropy/minimizer/Fermi–Dirac claims, nested trial-space infima with a conditional continuum recovery conclusion, the NA-37 residual warning/example without duplicating batch-57 residual and Ritz bounds, and the stated limitations on physical exactness, nonlinear self-consistent uniqueness, and source-model error.

The first-variation route now explicitly uses all complex projector tangent directions as skew-Hermitian commutators. The new local lemma constructs a unitary Cayley curve with velocity `[K,P]`, proves both tangent inclusions, and avoids importing the real-only batch-83 formulas. This is an equivalent commutator-curve realization of the plan’s stated exponential-orbit route; it uses the assigned complex Hermitian conventions and existing matrix-inverse differential suppliers.

## Inventory and dependency levels

The current manifest contains the exact direct `deps` for every item and matches item frontmatter. Levels below were calculated over all item suppliers in the active run, including cross-batch suppliers. The batch-57 Ritz residual theorem counts as an in-run supplier for its example; published dependencies do not raise a level.

| Level | Items |
|---:|---|
| 0 | `def-rank-r-orthogonal-projector-domain`; `def-finite-temperature-density-matrix-free-energy`; `lem-complex-hermitian-eigenvalues-lipschitz`; `thm-nested-finite-basis-infimum-monotonicity`; `ex-incomplete-ci-trial-energy-exceeds-finite-ground-energy` |
| 1 | `lem-hermitian-idempotent-trace-equals-rank`; `def-finite-basis-projector-energy-model`; `lem-finite-temperature-density-domain-compact`; `lem-finite-temperature-entropy-continuous-at-endpoints`; `prop-interior-entropy-trace-derivative`; `ex-nested-trial-spaces-may-have-equal-energies`; `ex-zero-ritz-residual-does-not-identify-ground-state` |
| 2 | `lem-rank-r-projector-grassmann-chart-and-tangent`; `lem-finite-projector-domain-compact`; `prop-finite-projector-energy-reality-and-gradient`; `thm-finite-temperature-free-energy-attains-minimum`; `lem-finite-temperature-minimizer-is-interior`; `ex-overlap-whitening-can-amplify-coefficient-errors`; `ex-nonsmooth-exchange-correlation-functional-breaks-c2` |
| 3 | `thm-finite-projector-energy-attains-minimum`; `thm-finite-temperature-fermi-dirac-stationarity`; `lem-complex-projector-tangent-commutator-curves` |
| 4 | `thm-finite-projector-commutator-stationarity` |
| 5 | `thm-positive-tangent-hessian-implies-strict-projector-minimum`; `ex-two-level-nonlinear-projector-stationary-maximum` |

## Cross-batch interfaces and reconciliation

Batch 57’s current bodies were read in full where used. `prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil` assumes Hermitian `H`, positive-definite Hermitian `S=LL*`, and the coordinate change `y=L*c`; this matches the local model definition and the overlap example. `thm-finite-hermitian-ritz-residual-certifies-spectrum-and-eigendirection` assumes Countable Choice, finite-dimensional Hermitian `A`, and a unit vector; the residual example states and meets these hypotheses and uses only spectral proximity plus the explicit warning that residual size does not identify the ground-state branch. `thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error` is for the countable-choice compact-coercive form setting, conforming finite subspaces, and a small eigenspace gap. PC-VAR does not instantiate it in the finite matrix model; continuum equality remains conditional on energy recovery.

Batch 72’s actual trust-region and cubic pages define real Euclidean procedures and state their finite-budget and convergence limits. PC-VAR defines no optimization algorithm and makes no trust-region convergence claim; the page edge is retained as contextual design. Batch 83’s actual page says its geometry is for real orthonormal frames and the real Grassmann quotient (`X^T X=I`, `O(r)`). That is not a direct supplier for PC-VAR’s complex Hermitian projectors, adjoints, and unitary gauge. The complex graph chart, commutator tangent curves, stationarity, and chart-Hessian result are proved locally. The A-page edge to batch 83 remains `open` in the cross-batch input for owner reconciliation: clarify whether it is contextual or requires a complex Stiefel/Grassmann supplier with `U(r)` gauge and compatible Hermitian tangent/Hessian conventions. No local item proof relies on batch 83, and no supplier acceptance is claimed.

The outgoing consumer scan found batch 97 page `self-consistent-projector-iterations-and-certified-mixing`, which requires the PC-VAR A page. Its item `cor-finite-basis-energy-model-has-c1-response` consumes `def-finite-basis-projector-energy-model`: Hermitian `h`, real-linear `G`, real `C^2` `E_xc` on an open neighborhood, and `F(P)=h+G(P)+grad E_xc(P)`. Those are explicit in the PC-VAR definition. Batch 97 separately supplies its complex block-projector derivative and common-contour resolvent bound; the PC-VAR simple-projector commutator result does not claim cluster-projector differentiability. The consumer-owned cross-batch input should record this exact interface; this note is not a consumer approval.

## Mathematics, hypotheses, and axiom branches

- The projector domain uses `1<=r<n`; its trace/rank interpretation is justified by the finite Hermitian idempotent lemma. The realification/Weyl proof supplies the complex Hermitian eigenvalue Lipschitz estimate.
- The finite projector energy is real and `C^2`; self-adjointness of the real-linear interaction map is used in the quadratic derivative. Compactness and extreme value give only finite-model global existence. The chart-Hessian theorem is sufficient, not necessary, for a strict local minimum modulo unitary gauge.
- The entropy uses the closed-domain convention `0 log 0=0`; endpoint continuity and the one-sided entropy singularity are proved locally. Interior trace-constrained stationarity yields the Fermi–Dirac formula. The unique multiplier is only for fixed Hermitian `F`; nonlinear self-consistent density uniqueness is expressly not claimed.
- Nested finite-space infima decrease to the union infimum. Equality with a continuum infimum is conditional on an explicit energy-recovery property; no continuum HF/KS existence or source-model accuracy is claimed.
- Proofs are choice-free except `ex-zero-ritz-residual-does-not-identify-ground-state`, which explicitly assumes Countable Choice because its batch-57 supplier does. No AC or stronger choice principle is imported silently.

## Source reading and disposition

The A page has multiple independent full-text treatments, including a textbook chapter and a complete textbook/lecture-style source. Full texts were downloaded or inspected before authoring; the fetch checker will bind the successful source bodies in the coverage file.

1. Alan Edelman, Tomás A. Arias, and Steven T. Smith, *The Geometry of Algorithms with Orthogonality Constraints*, complete 51-page PDF, <https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf>. Read §§2.3.2 and 2.5, printed pp. 314–322; projector representation, Grassmann quotient/gauge, and tangent geometry.
2. P.-A. Absil, R. Mahony, and R. Sepulchre, *Optimization Algorithms on Matrix Manifolds*, complete Chapter 3 PDF, <https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf>. Read §§3.4.4 and 3.5.7, printed pp. 31–40; quotient Grassmann conventions and embedded tangent directions. This is the textbook treatment.
3. Eric Cancès and Claude Le Bris, “On the convergence of SCF algorithms for the Hartree–Fock equations,” complete 27-page article, <https://numdam.org/item/M2AN_2000__34_4_749_0.pdf>. Read §2.1 and Lemmas 1–3 with proofs, printed pp. 751–755; finite density-projector model, gauge, energy variation, stationary commutation, and continuum caveats.
4. Daniel Arovas, *Thermodynamics and Statistical Mechanics*, §7.4, <https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method>. Retrieved the complete chapter page and read the complete variational-principle section; entropy/free-energy context. Fixed-particle fermionic endpoint and multiplier details are proved locally.
5. Christoph Helmberg, Guilherme Porto, Guilherme Torres, and Vilmar Trevisan, arXiv:2308.12654, <https://arxiv.org/pdf/2308.12654>. Retrieved the complete 14-page paper and read §2, Theorem 2; real Weyl inequalities used with a local complex realification proof.

The Wiley source candidate “Can we outperform the DIIS approach for electronic structure calculations?” was not used. Its full text was unavailable after the original attempt and five recovery retries; the source-resolution record preserves the URLs/searches. It concerns SCF algorithm comparison and convergence, none of which PC-VAR claims. The actual PC-VAR claims have complete local arguments and are covered by the full-text sources above and the separate full Cancès–Le Bris SCF-convergence article. This source drop waives no mathematical coverage.

## Scoped checks and readiness

Final checks after the last item edits:

- `node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 92`: pass, fingerprint `0c2882578cd0b83da1b985e5d4ac18939548ddb0b34f2cdc5341981033f5262b`. Its precheck (22 proof-bearing items), scoped rendercheck, content-policy (25 items), and strict proof-contract (25/25) all exited 0.
- `node tools/proof-layout.mjs` on all 25 assigned item paths: 25 items, 63 proof steps, 0 defects.
- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-92.pages.json`: 25 items, 0 normalized, 0 errors. The scoped active-run dependency-level walk gives 25/25 current labels, maximum item level 5, 0 batch-92 errors.
- The run-wide `item-dependency-levels check` still reports seven errors outside batch 92: four empty scaffold inventories for the simulation-gradient-estimation and global-sensitivity-ANOVA pairs; and stale labels for `ex-affine-random-diffusion-uniform-coercivity` (4 vs computed 5), `alg-fem-control-active-set-box-quadratic-solve` (1 vs computed 0), and `thm-fem-control-active-set-box-quadratic-solve-sound-finite` (4 vs computed 3). No foreign carrier was edited.
- Focused `depcheck --items-file` on the 25 assigned IDs: passed; 25 item checks and prerequisite cycle checks covering 1,038 items / 235 pages, no item or page cycles or unresolved references.
- `source-fetch-check --stamp` and final check mode: 5/6 sources full-text fetch-verified; 6/6 resolved, with one documented unused-source drop. The A-page sources and exact dispositions are in the coverage file.
- The batch-92 cross-batch input has all 6 declared page/item edges; all 6 attached excerpts match the current source bodies exactly. The real-only batch-83 page-level context remains open for owner reconciliation; no local item proof depends on that page.
- Current Step-1 records: 25/25 assigned items are `ready` and hash-current under their recorded direct/justified-by dependencies. These are authoring-completeness records only, not independent approval. The A-page contextual batch-83 reconciliation remains explicit in the cross-batch record and the relevant reasons.

No tests were run. The active run, shared plans, engine state, owner verdicts, and foreign items were not edited.
