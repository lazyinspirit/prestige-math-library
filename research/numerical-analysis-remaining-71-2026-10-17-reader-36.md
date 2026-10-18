# Step 3a reader report — batch 36

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `36`  
Role: independent reader

## Opened inventory

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/hyperbolic-dg-and-summation-by-parts-discretizations.md` (A)
- `library/numerical-pdes-and-spatial-discretization/hyperbolic-dg-and-summation-by-parts-discretizations-examples.md` (B)

Assigned items, read in dependency order:

1. `def-pe04-one-dimensional-interval-mesh-and-broken-polynomials`
2. `def-pe04-diagonal-norm-sbp-element-data`
3. `def-pe04-upwind-dg-transport-discretization`
4. `alg-pe04-first-order-upwind-forward-euler`
5. `def-pe04-cellwise-l2-projection`
6. `def-pe04-upwind-sbp-sat-transport-discretization`
7. `thm-pe04-upwind-dg-l2-energy-stability`
8. `def-pe04-flux-differencing-sbp-systems`
9. `lem-pe04-cellwise-l2-projection-exists-best-approximation`
10. `thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy`
11. `thm-pe04-upwind-sbp-sat-l2-energy-stability`
12. `thm-pe04-dg-smooth-solution-l2-error-bound`
13. `thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability`
14. `thm-pe04-ssprk33-first-order-upwind-entropy-preservation`
15. `cex-pe04-underintegrated-burgers-collocation-entropy-growth`
16. `ex-pe04-central-versus-upwind-periodic-transport`
17. `ex-pe04-upwind-transport-with-inflow`
18. `ex-pe04-sbp-inflow-sat-energy-identity`

Published mathematical suppliers opened:

- `def-matching-affine-simplicial-meshes`
- `def-broken-and-conforming-polynomial-spaces`
- `def-measure-space`
- `def-calligraphic-l-p-on-a-measure-space`
- `lem-affine-simplex-gauss-green-formula`
- `def-oriented-simplicial-cell-chains`
- `lem-oriented-facet-cancellation-on-matching-meshes`
- `def-countable-choice`
- `cor-vector-valued-ftc-and-lipschitz-bound`
- `cor-cauchy-schwarz-inequality-for-l-two`
- `lem-euclidean-balls-have-positive-finite-lebesgue-measure`
- `thm-borel-sets-are-lebesgue-measurable`
- `thm-lebesgue-measure-is-a-complete-measure`
- `prop-measure-monotonicity`
- `alg-ssprk33`
- `prop-ssprk33-third-order-and-convex-preservation`
- `def-convex-subset-of-euclidean-space`
- `def-convex-and-strictly-convex-functions-on-euclidean-sets`
- `def-interval`

Draft current-run suppliers opened:

- `def-hyperbolic-system-and-characteristic-families`
- `def-pe03-system-entropy-pair-and-potential`
- `def-pe03-tadmor-entropy-conservative-flux`

## Source checks

- Cockburn, *An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems*, §§3.2–3.5, printed pp. 161–164, confirms the one-dimensional broken space, weak form, flux convention, and degree-zero specialization. §3.16, printed pp. 189–200, contains the linear L2 stability and error-estimate arguments. The assigned exact trace-residual estimate is established locally, not claimed from that source. URL: <https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf>.
- Cockburn and Shu, “Runge–Kutta Discontinuous Galerkin Methods for Convection-Dominated Problems,” §2.1, printed pp. 174–176, gives the DG weak form and the piecewise-constant forward-Euler specialization; §2.3, printed pp. 190–193, discusses the forward-Euler stability condition. URL: <https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf>.
- Fisher and Carpenter, *High-Order Entropy Stable Finite Difference Schemes for Nonlinear Conservation Laws: Finite Domains*, §2.3.2, printed p. 8, states the SBP derivative/norm identity; §§3.1–3.2, printed pp. 13–20, derive the semidiscrete entropy condition and numerical flux requirement. URL: <https://ntrs.nasa.gov/api/citations/20130011028/downloads/20130011028.pdf>.
- Tadmor, “Entropy Stable Schemes,” §§4.1–4.3 and 4.6, printed pp. 477–483, gives the entropy potential jump condition and semidiscrete entropy dissipation; §5.1, printed p. 485, separates spatial dissipation from forward-time entropy production. URL: <https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf>.

The source checks support the local DG, SBP, and Tadmor identities. The assigned proofs supply their own affine-element and mesh-pairing algebra.

## Repairs and evidence

1. `alg-pe04-first-order-upwind-forward-euler`: added explicit input and output types and the `CFL-inadmissible` return when any cell has $\lambda_K>1$. The prior Definition stated only the admissible output and left the other branch unspecified. This follows the algorithm requirement to define branches and makes the procedure total over its stated inputs. The direct consumers `thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy` and `thm-pe04-ssprk33-first-order-upwind-entropy-preservation` use only the admissible branch; their proofs remain valid without edits.

2. `thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability`: corrected the periodic-face clause. With positive $\alpha$, the entropy contributions from paired periodic faces do not cancel to zero: they give the same $\alpha\lVert[v]\rVert^2/2$ dissipation as an interior interface. The theorem now requires matching paired nodes/weights and opposite normals, treats each pair as one interior interface, includes it in the interface-dissipation sum, and omits it from the physical boundary term. The proof identifies both the entropy contribution and cancellation of the conservative state flux. This agrees with the local contraction calculation and Tadmor’s jump identity in §4.2.

The batch proof-contract file was regenerated for the theorem’s facts and derivations. The generator reports that the algorithm has no proof steps to parse; it was skipped for proof-step regeneration. Neither edited item had a `verification.judge` record to remove. Existing owner review records in the proof-contract file remain bound to their pre-edit item hashes; they are historical evidence and need the owner’s normal hash rebind/recertification before a hash-gated closeout.

Validation after the edits:

- Reflow: both changed item files reported `unchanged`.
- Precheck: the algorithm reported `0 checked, 0 failing`; the theorem passed with `1 checked, 0 failing`.
- Final proof layout, one batched invocation over both changed item paths: `2 items, 4 steps, 0 defects`.

## Unedited defects and page verdicts

Unedited defects: none found in the assigned items, their directly used mathematical suppliers, or either assigned page.

- `hyperbolic-dg-and-summation-by-parts-discretizations` (A): **pass after item repairs**. Its summary accurately distinguishes the conditional semidiscrete SBP entropy claim, the projection-residual estimate, and the degree-zero fully discrete branch. No A-page prose edit was needed.
- `hyperbolic-dg-and-summation-by-parts-discretizations-examples` (B): **pass**. Its summary matches the four assigned witnesses and computations. No B-page prose edit was permitted or needed.

Blocker for later closeout: the changed item carriers no longer match the item hashes in existing owner boundary-review records. No new review or judge stamps were written. The owner must rebind those records to the repaired bytes before a hash-gated final closeout.

## Coverage limitation

All 18 assigned items, both assigned pages, the listed direct mathematical suppliers used in the proofs, and the named current-run entropy definitions were opened. The wider formal transitive dependency closure contains hundreds of foundational suppliers; I did not re-audit every such published proof wholesale. No unedited defect was identified from the direct claims and source passages reviewed.
