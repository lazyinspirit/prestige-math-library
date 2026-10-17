# Batch 35 authoring notes — Runge–Kutta methods and order

Run: numerical-optimization-dynamics-2026-10-16 · pair: runge-kutta-methods-and-order · batch: 35.

## Controlling design and conflict record

I read the complete assigned NA-15 design at research/plan-numerical-analysis-track.md lines 214–220, the current E3 design in research/plan-numerical-dynamics-track.md beginning at line 407 and its mathematical-contract appendix, the corresponding research/plan-spec.json row, the owner authoring direction, the generated batch assignment, and the current item and batch dependency records.

The controlling source is the current dynamics plan plus its incorporated E3 contract. The plan-spec.json row points to that repaired plan/contract and does not introduce a separate claim or item-scope conflict. The older NA-15 entry is stale and incomplete: it centers Euler, midpoint and RK4, imports generic P-NUM-ODE-01/02 context, and explicitly says this pair makes no fixed-interval global-error claim. Current E3 additionally requires SSPRK(3,3), first- and second-order RKC methods, their exact Chebyshev interfaces and stability limits, a deterministic stage-perturbation bound, and nonlinear RKC2 order two with a conditional fixed-time global estimate. I followed the current plan and recorded the item-level mismatch here; the global estimate uses batch 28's actual global-error supplier and does not duplicate a generic propagation theorem.

The page retains the current scope and its cautions: tableau conditions are sufficient, not necessary; forward-Euler preservation is an SSP premise at the actual stage times; RKC2's interval is a certified inclusion, not a maximal interval; matrix nonexpansion is restricted to self-adjoint nonpositive operators; the additive stage-error model is not an estimate of floating-point error; and nonlinear RKC2's accuracy constants are for fixed stage count on a common tube.

## Inventory and dependency levels

The scheduling input hash is ddff7b3e0cb91165e15fdbc6dc97af74f2b96d34e750d8627bcd0543fba8e0c1. Batch 35 is scheduled at batch dependency level 2 and requires batches 7 and 28. Item levels below were recomputed over those two prerequisite manifests and the batch-35 manifest, because “in-run supplier” includes suppliers in any batch of this run.

| Item dependency level | Items |
|---:|---|
| 0 | lem-chebyshev-rkc-bounds-and-endpoint-derivatives |
| 1 | def-explicit-runge-kutta-tableau-and-stage-map |
| 2 | alg-rkc1-chebyshev, alg-rkc2-linear-chebyshev, alg-rkc2-nonlinear, def-euler-midpoint-rk4-tableaus, prop-explicit-rk-order-conditions-through-four, alg-ssprk33 |
| 3 | prop-euler-midpoint-rk4-orders-and-stability-functions, prop-rkc-stability-intervals-and-stage-degree, lem-rkc-chebyshev-stage-perturbation-amplification, prop-ssprk33-third-order-and-convex-preservation, ex-midpoint-order-loss-at-continuous-time-kink |
| 4 | thm-nonlinear-rkc2-order-two-and-global-error, ex-euler-midpoint-rk4-fixed-time-error-slopes, ex-rkc-self-adjoint-heat-stability-work, ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth, ex-rkc-stage-roundoff-quadratic-amplification |

The A page has 13 items; its B companion has 5 examples. Both stay below the 100-item cap. The assigned manifest, item frontmatter and page lists agree. The current cross-batch interfaces and in-run levels are recorded in research/numerical-optimization-dynamics-2026-10-16-batch-35-dependency-inputs.json.

## Supplier bodies and hypotheses

All five page prerequisites in the assigned manifest have current bodies: mixed-partials-taylor-and-extrema, picard-lindelof-and-first-order-odes, one-step-ode-consistency-and-local-error, global-ode-and-density-error, and fundamental-trigonometric-identities. The used published items and their hypotheses are identified in the dependency-input and cross-batch records.

I inspected the actual batch-7 bodies def-one-step-ode-method-local-defect-order-and-stability, lem-time-along-ode-solution-derivative-bound, and thm-forward-euler-one-step-consistency-and-local-error. The directly used definition fixes the method-minus-exact exact-start defect, a uniform $O(h^{p+1})$ local-order bound, and the fiberwise $(1+Lh)$ one-step stability convention. The other two bodies were read as prerequisite-page context; their Euler conclusion is not used to prove the RK tableau orders.

I inspected the actual batch-28 bodies thm-global-error-from-one-step-defect-and-stability and lem-discrete-one-step-error-recurrence-bound. The global theorem requires a fixed uniform mesh, a common compact tube containing the exact path, numerical states and all stages, an initial $C_0h^p$ error, a uniform $Ch^{p+1}$ exact-start defect, and a $(1+Lh)$ one-step bound. The nonlinear RKC2 theorem proves its own local defect and stability premises and applies the supplier with exact initial data and $p=2$. These supplier bodies are draft authoring evidence; no readiness record or inspection is represented as independent acceptance.

One dependency name in the initial batch-35 scaffold did not resolve: def-c-k-and-multi-index-notation-in-several-variables. I replaced it with the actual published ID def-ck-and-multi-index-notation-in-several-variables, added the Jacobian-identification theorem where the RK expansion needs $Df=Jf$, and checked the actual supplier bodies. The midpoint-kink proof now cites the actual stage-map definition; the nonlinear RKC2 stability proof explicitly cites the Euclidean triangle-inequality supplier; and the SSP preservation statement explicitly assumes the initial state lies in its invariant set.

No axiom of choice or other nonconstructive axiom is used. The trigonometric angle and finite-dimensional eigenbasis choices are individual existential witnesses; the arguments do not select from an arbitrary indexed family.

## Source reading and dispositions

The full relevant text was read and inspected from five independent treatments:

- Hairer–Nørsett–Wanner, Solving Ordinary Differential Equations I, Chapter III §III.2, printed pp. 61–62: explicit tableaux, exact-start order convention, and Taylor coefficient comparison. Printed pp. 63–64 were checked to keep the generic local-to-global recurrence with batch 28 rather than duplicate it here.
- MIT OCW 18.330, Chapter 5, PDF pp. 3–6: Euler/midpoint/RK4 formulas, local-error definitions, and the distinction between order and scalar stability. Stated order results are not used as proofs.
- Gottlieb–Shu–Tadmor, SIAM Review, §§2.1–2.2, printed pp. 90–93, and §4.1, pp. 100–101: forward-Euler convex preservation and SSPRK(3,3).
- Sommeijer–Shampine–Verwer, “RKC: An explicit solver for parabolic PDEs,” §§1–2 and adjacent error discussion, printed pp. 315–319: stage recurrences and near-negative-real stability setting.
- Almuslimani–Vilmart, §§2.2.1–2.2.2, PDF pp. 6–9: first- and second-order Chebyshev recurrences and nonlinear RKC2 coefficients; the authored formulas are the verified undamped specialization.

Every named result harvested from these ranges has an included, inline, or justified out-of-scope disposition in research/numerical-optimization-dynamics-2026-10-16-batch-35.coverage.json. The two page entries contain 26 harvested results. The assigned Hairer URL initially timed out through the web reader; I searched for independent treatments and the full chapter, then recovered the complete official PDF by direct retrieval. The success and prior attempt/search history are preserved in the source coverage; no source remains unresolved or dropped, so there is no source_resolution drop record.

## Proof and example scope

The A page proves the required Chebyshev interval and endpoint facts locally; it uses the Chebyshev degree supplier only for degree and leading coefficient. The general RK item expands stages and the exact flow through degree four and proves the coefficient matches. The selected tableaus and scalar stability functions are checked by direct algebra. SSPRK(3,3) order is proved from those conditions, and its invariant-region/convex-functional conclusion is conditional on the stated forward-Euler hypotheses at times $t,t+h,t+h/2$.

For RKC1, the first-order scalar stability set is exactly $[-2s^2,0]$. For RKC2, only the certified interval $[-2(s^2-1)/3,0]$ is claimed; it is not asserted maximal. The Euclidean matrix conclusion uses an orthonormal eigenbasis and is limited to self-adjoint nonpositive matrices. The stage perturbation lemma bounds the stated deterministic additive model only. The nonlinear RKC2 result assumes $C^2$ regularity, bounded derivatives on a compact convex tube, a common state-Lipschitz constant and fixed $s$; its global application keeps the tube and all stage-admission conditions explicit.

The B page verifies five finite examples: the exact midpoint defect at a time kink, nonzero fixed-time error constants for Euler/midpoint/RK4, a diagonal heat-spectrum RKC1 stability comparison, a nonnormal matrix growth witness, and equality in the quadratic RKC1 additive-stage-perturbation bound. None upgrades scalar stability to nonnormal matrix stability or deterministic perturbations to a floating-point guarantee.

## Scoped checks and readiness

- Dependency levels over batches 7, 28 and 35: 31 items, no cycles or level errors; batch-35 labels range from 0 to 4.
- Manifest dependencies: 18 items, 0 normalized, 0 errors.
- Strict proof contracts: 18/18 items, 82 exact supplier citations and 55 numbered-step mappings, 0 errors and 0 warnings.
- Proof layout: 18 items, 55 steps, 0 defects.
- Phase precheck: 12 proof-bearing items checked, 0 failing; six definition/algorithm items are not applicable.
- Renderer check: 20 item/page files, 0 errors and 0 warnings.
- Content policy: 18 scoped items, 0 errors and 0 warnings.
- Focused dependency check: all 18 selected items and their prerequisite item/page closure pass with 0 errors and 0 warnings.
- Coverage checklist: 2 pages, 26 harvested results, 0 errors and 0 warnings. Source-fetch check: 9/9 source placements fetch-verified and resolved; there are five unique full-text documents.
- Content policy's first whole-corpus read hit a transient ENOENT for an unrelated item while the shared items directory was changing; the repeat completed successfully with 18/18 assigned items and no warnings.

Each of the 18 item decision records is ready with its direct dependencies and current content hash. These are Step 1 authorship/readiness records only, not independent proof approval. At the final disk-recomputed status check, the run remained at 1-scaffold with 33/107 batches covered and no worker in flight; batch 35 still appears in the remaining batch list, and the separate owner blocker still requires repair and recertification. Runtime state, verdicts, shared plans, published content and other batch files were not changed.
