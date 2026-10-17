# Batch 79 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Pair: `renewal-age-and-size-structured-numerical-methods`  
Scheduling input: `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`  
Assigned batch level: 5; prerequisite batches: 7, 20, 28, 51 and 55.

## Scope and plan reconciliation

The owner direction controls the authoring route. The controlling track design is XD-04, with the NA-12/14/25 and P-NUM-ODE-01/02 route labels. `plan-spec.json` gives the concrete page requirements: `picard-lindelof-and-first-order-odes`, `one-step-ode-consistency-and-local-error`, `composite-quadrature-rules`, `global-ode-and-density-error`, `adaptive-quadrature-and-error-indicators`, and `hyperbolic-finite-difference-methods`. The assigned manifest has that exact list; there is no substantive plan/spec scope conflict.

The cutoff analysis and smooth finite-volume estimate needed an exact finite-age target with absorbing outflow. I added `def-age-structured-renewal-finite-cutoff-model` and `thm-age-structured-renewal-finite-cutoff-characteristic-solution` on the assigned A page, with explicit Volterra existence, mass growth and cumulative outflow arguments. The smooth error theorem now compares the scheme to this finite-age solution; the separate tail theorem adds the infinite-age cutoff term. The cohort theorem uses initial quadrature on `[0,A-T)` so no cohort crosses the cutoff during its consistency horizon, and controls the omitted initial tail through the verified semigroup data-stability result.

Inventory: 16 A items and 4 B examples. All dependency labels were recomputed from actual in-run dependencies and sorted before finalizing the page carriers. Maximum item level is 8. The pages remain draft and below the 100-item cap.

## Cross-batch supplier inspection

The exact current Statements and relevant complete proofs were inspected for each cross-batch supplier. The detailed consumer/supplier edges and interfaces are in `numerical-optimization-dynamics-2026-10-16-batch-79.cross-batch-dependencies.json`.

- Batch 7: `def-one-step-ode-method-local-defect-order-and-stability` and `thm-forward-euler-one-step-consistency-and-local-error`. The cohort survival field is the scalar C1 field `f(s,m)=-mu(a0+s)m` on a compact tube; the O(h²) defect and `1+Lh` stability hypotheses match.
- Batch 20: `alg-composite-midpoint-rule` and `thm-composite-midpoint-error-bound`. The algorithm uses positive midpoint panel weights; the error theorem requires C2 integrands and gives the stated `(b-a)h² max|f''|/24` bound.
- Batch 28: `lem-discrete-one-step-error-recurrence-bound`. The smooth theorem invokes it after the midpoint quadrature defect and mesh-ratio assumptions reduce the forcing to O(dt²); the cohort theorem applies it to survival weights.
- Batch 51: `alg-adaptive-simpson-with-finite-depth-and-panel-cap` and its termination/budget result. The local birth quadrature preserves cap/failure statuses and never treats an indicator as a true-error bound.
- Batch 55: `def-uniform-grid-and-difference-operators` and `thm-smooth-advection-stencils-consistent`. The age algorithm uses the grid definition. The supplier theorem is limited to smooth periodic constant-speed advection; no mortality or renewal-boundary conclusion is imported.
- Published: `def-first-order-ode-initial-value-problem-and-solution` and `thm-gronwall-integral-inequality`. Their current bodies and proof hypotheses were inspected; the exact direct uses are listed in the dependency records.

No mathematical cross-pair supplier is missing. The page-level batch requirements and actual item-level uses were checked separately.

## Source reading and resolution

Full-text source locators, result dispositions, fetch stamps and recovery history are in `numerical-optimization-dynamics-2026-10-16-batch-79.coverage.json`.

- Perthame, *Introduction to Structured Equations in Biology*, complete 48-page author lecture notes: Chapter 1 age renewal and characteristics (PDF pp. 3–5), size division and number/biomass balances (pp. 8–10), and Chapter 2 existence, upwind estimates, outflow and compactness (pp. 14–23).
- Süli, *B6.1 Numerical Solution of PDEs*, complete 110-page notes: §6.6 upwind formula and CFL stability (PDF pp. 99–102). The complete PDF was read through the web reader, but `source-fetch-check` produced six `ETIMEDOUT` results for its URL. It is retained only as a documented dropped source record, with replacement arguments for every affected item; no source claim or mathematical result is dropped.
- Brännström, Carlsson and Simpson, *On the Convergence of the Escalator Boxcar Train*, complete 17-page paper: cohort characteristics and weak formulation (§2, PDF pp. 3–5), and weak consistency/convergence reasoning (§3, pp. 5–11).
- Rutgers MATH 373 Lecture 12, complete four-page PDF: midpoint derivation and composite C2 error proof (printed pp. 35–38/PDF pp. 1–4).
- Rutgers MATH 575 Lecture 16, complete five-page PDF: §9 upwind transport formula, CFL condition and full convex-combination stability proof (printed pp. 56–57/PDF pp. 1–2). This is the active upwind lecture-note replacement for the unstamped Süli URL.
- Kent State Lecture 14, *Quadrature*, complete eight-page PDF: midpoint Taylor expansion, equal positive weights and composite rule (PDF pp. 4–6).
- Driscoll and Braun, FNC §5.7, complete online section: adaptive Simpson/Romberg indicator derivation, bisection and implementation (§§5.7.1–5.7.3). The local capped algorithm adds finite-work statuses and explicitly withholds a true-error guarantee.

The plan’s Springer title, *Transport Equations in Biology*, exposed only subscription-preview content; the complete Perthame author notes were found and read instead. A Virginia Tech composite-midpoint PDF candidate returned an open error; the Rutgers and Kent State full notes supplied the complete relevant reasoning. The FNC §5.6 integration page was inspected and does not contain a midpoint rule. It is not used as midpoint evidence in this batch. The batch-20 supplier items `alg-composite-midpoint-rule` and `thm-composite-midpoint-error-bound` currently cite that FNC page under mismatched source metadata; their mathematical bodies/proofs were checked and the midpoint formula was independently verified in the Rutgers and Kent State full texts. The external files were not edited; owner-side source-metadata repair is recommended.

## Scoped check results

- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-79.pages.json`: 20 items, 0 normalized, 0 errors.
- Full `node tools/item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16`: the run contains empty scaffold inventories in unassigned pages and two level-label mismatches outside this batch (`alg-sqp-reduced-bfgs-kkt-step` declares 3/computes 4; `thm-sqp-reduced-bfgs-superlinear-under-dm` declares 4/computes 5). The nonempty-page recomputation checked 1,628 items across 180 pages and found only those two external mismatches. Every batch-79 label matched, levels 0–8. The external labels were left to their owners.
- `node tools/proof-layout.mjs` on all 20 explicitly changed item files: 57 proof steps, 0 defects.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-79.proof-contracts.json --strict`: 20/20 items, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-79.coverage.json --stamp`: 10/12 source records fetch-verified; 2 Suli records have validated documented source-resolution drops. Check mode also passed with 12/12 resolved.
- `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-79.coverage.json`: 2 pages, 59 harvested dispositions, 0 errors and 2 low-yield warnings (A page 14/50 and B page 0/9 directly included rows). Most supporting material is recorded as inline because the local arguments extend the source treatment or the examples are computed from the local interfaces; every harvested row has a disposition and support explanation. The warnings remain for independent review.
- Step 1 readiness: 20 `ready` records were written with direct dependency IDs; the current-record hash audit found 20/20 closed. No `--owner` flag was used.

The full-run item-level checker’s empty-page failures and the two source-coverage yield warnings are recorded for reconciliation. Neither is an unresolved mathematical prerequisite for this pair.
