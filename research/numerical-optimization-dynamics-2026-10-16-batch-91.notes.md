# Batch 91 authoring notes

Batch 91 contains 18 A-page items and 7 B-page examples. The pair scheduling level is 6 with prerequisite batches 3, 39, 72, and 83, using scheduling input `a20c83d967c4fb82d96b2681fe009f89c3dd179bbf56683e847ca38526498979`. The recomputed in-batch item levels range from 0 to 5; the manifest and carrier frontmatter carry those same labels. The item inventory remains well below the 100-item page cap.

## Plan and scope reconciliation

The controlling owner direction, PC-PATH section at L1101, `plan-spec.json`, and the audit contract agree on the pair scope and required pages. No plan/spec conflict was found. The design states the second-order centered tangent and projected-string consistency claims in the sequence defining the string method; it does not explicitly assign that rate to the improved-tangent NEB branch. This batch therefore proves the $O(h^2)$ result for the centered string and separately proves a smooth $Θ(h)$ counterexample for the NEB monotone one-sided branch. If the owner intended the $O(h^2)$ statement to cover that NEB branch as well, the exact counterexample in `prop-improved-neb-monotone-tangent-has-first-order-projection-error` is the scope issue to reconcile: the two claims cannot both hold as stated.

The dimer chapter assigns a mode-gap estimate and its effect on an inexact local saddle iteration. The batch proves the HVP truncation/noise bound, a residual-to-mode-line estimate, the local residual-to-saddle certificate, and a local dimer translation recurrence with a bounded noise floor. The recurrence requires a validated gap and accepted mode data at every attempted iterate; finite budget, rotation success, or a Ritz residual alone is not a saddle certificate.

## Supplier checks

- **Batch 3, nonlinear equations and Newton methods:** read the current `alg-newton-correction-for-vector-residuals`, `thm-updated-jacobian-newton-local-quadratic-convergence`, and `lem-vector-newton-correction-error-under-lipschitz-jacobian` bodies and complete proofs. The first supplies the unique square correction $Jp=-F$ when $J$ is invertible. The quadratic theorem requires a $C^2$ residual, a simple zero, nonsingular Jacobian at the root, and a Lipschitz Jacobian locally; the exact index-one Hessian gives nonsingularity without positive definiteness. The vector remainder lemma supplies the local dimer translation error term. These are draft supplier items and still require normal independent review; this record is author-side only.
- **Batch 39, globalization and inexact certificates:** read `alg-damped-newton` and the full strong-convexity global/local theorem proof. Its Hessian lower bound is positive definite and its conclusion is explicitly for strongly convex objectives. It does not prove a saddle result and is not used in PC-PATH.
- **Batch 72, trust-region and cubic regularization:** read `alg-trust-region-method`. Its Cauchy decrease, ratio, and radius branches are not used; PC-PATH makes no trust-region convergence or complexity claim.
- **Batch 83, Stiefel and Grassmann optimization:** the current manifest and `alg-riemannian-trust-region.md` carrier are present. I inspected the current method body: it uses Stiefel/Grassmann tangent or horizontal spaces and QR/polar retractions. PC-PATH works in Euclidean coordinates and does not use the optional OPT11 retraction interface. No supplier is missing; this is a verified page-context dependency, not a logical premise or independent approval.
- Published Euclidean spectral, Cauchy–Schwarz, Taylor, metric completeness, closed-ball completeness, maximum-norm, and Courant–Fischer supplier bodies used by the local proofs were checked at their actual statements and, where proof-bearing, complete proofs. No choice axiom is used.

## Local proof repairs and caveats

- The discrete stable-path residual is measured in the componentwise maximum norm. Its contraction argument now uses a separate maximum-norm local-root lemma, including the zero-residual uniqueness case; the Euclidean root lemma alone would introduce a mesh-dimension factor and would not support a uniform bound.
- The local index-one saddle certificate uses the Euclidean residual-to-root lemma with the explicit inverse bound $1/\gamma$ and therefore proves uniqueness on the stated radius $2\|\nabla V(x)\|_2/\gamma$.
- The unequal-step centered tangent coefficients cancel the second derivative exactly. The interpolation redistribution proof uses segment start index $i-1$ in its cumulative-length equation.
- The NEB circle chart uses $X_s=((R_0+n)/R_0)T$; the factor $1/R_0$ is required. The polar example proves a nonzero first-order projection error on the strictly monotone branch without invoking a convergence theorem for another discretization.
- The eigenvector-following Newton algorithm checks ordered validated intervals, approximate eigenpair residuals, and sign-invariant overlap with the previous lowest mode before taking the exact Newton correction. The mode check does not alter the correction, and all finite failures/stops are explicit.
- The local dimer translation theorem compares rank-one mode projectors to the saddle mode, then gives an explicit contraction coefficient and force-noise floor. Its bounds are conditional on per-iterate validated enclosures and accepted dimer tests.
- Batch 39's positive-definite damped-Newton theorem is deliberately not cited as a supplier for any saddle claim. There are no reaction-rate, global transition, arbitrary-start convergence, or universal string/NEB error claims.

## Source reading and coverage

The A-page source coverage records 9 independent full-text treatments, including the Henkelman–Jóhannesson–Jónsson textbook chapter, FNC textbook, and Hairer–Wanner textbook. The B page carries three supporting source treatments. Relevant full text was inspected before harvesting the listed headings; every harvested result has an explicit disposition and item. The 2007 simplified-string paper's full-gradient update is recorded as a distinct method, and the Liu–Chen–Ortner convergence theorem is recorded as a different upwind discretization whose hypotheses are not imported. The final coverage file contains 55 harvested results across A and B.

`source-fetch-check --stamp` verified all 12 coverage source entries with 0 documented drops. No retrieval failure or recovery retry occurred, so no `source_resolution` drop or owner-escalation record was needed.

## Current scoped validation record

Final scoped checks passed:

- `proof-layout.mjs`: 25 changed items, 70 numbered proof steps, 0 defects.
- `precheck.mts`: 19 proof-bearing items checked, 0 failing. The checker’s canonical dependency-layer numbering was applied before the final run.
- `rendercheck.mjs`: all 25 item files and both draft page files parsed; 0 errors.
- focused `depcheck.mjs` item scope: 0 errors and 0 warnings.
- strict proof-contract check: 25/25 items, 0 errors and 0 warnings.
- coverage checklist: 2 pages, 55 harvested results, 0 errors and 0 warnings.
- source-fetch check: 12/12 source entries fetch-verified; 0 drops and no retrieval retries.
- Batch 91 decision records: 25/25 current `ready` author-readiness records, each hash-matched to its item and declared dependencies. These records are not independent approval.
- All 10 supplier excerpts in the cross-batch dependency evidence match the current supplier sections exactly.

The scoped dependency graph used all nonempty manifests in this run: 206 pages and 1,928 items, with no graph errors and no dependency-level mismatch among the 25 batch-91 items (levels 0–5). The run-wide `item-dependency-levels.mjs check --run` exits 1 because of 10 out-of-scope manifest issues: empty inventories on `simulation-gradient-estimation-and-simultaneous-perturbation` and its examples page, `multirate-and-partitioned-time-integration` and its examples page, `langevin-splittings-and-invariant-measure-error` and its examples page, and `global-sensitivity-anova-and-sobol-estimation` and its examples page; plus stale labels on `ex-additive-eigensolve-tolerance-residual-certificate` (stored 3, computed 4) and `ex-affine-random-diffusion-uniform-coercivity` (stored 4, computed 5). Those carriers are outside batch 91 and were not edited.
