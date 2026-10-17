# Numerical optimization and dynamics — batch 58 authoring evidence

Scope: batch 58 only, pair `nonconvex-line-search-and-inexact-newton-methods` and its examples. The assigned inventory has nine A items and three B items; both pages are below the 100-item cap. No published item, other pair, shared plan, run state, or verdict was edited.

## Controlling plan and conflicts

The owner direction `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md` controls over stale task/design text. Its OPT1 assignment points to the current optimization plan and exact OPT1 contract in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md`. The generated task's design locations at `research/plan-numerical-optimization-track.md` L605 and L617 are the same OPT1 scope and preserved proof design; the owner direction does not replace their mathematical requirements.

The task's `requires` slugs match the current OPT1 plan-spec entry. The audit contract's shorthand labels resolve as OPT0 = `numerical-optimization-globalization-and-inexact-certificates`, NA-09 = `nonlinear-equations-and-newton-methods`, and NA-05 = `krylov-methods-and-lanczos-convergence`. There is no scope conflict after resolving those labels. The plan requires Wolfe/strong-Wolfe and Zoutendijk results locally, inexact-Newton forcing rates, and the three assigned examples; nonlinear conjugate gradient remains with OPT14.

The dispatch scheduling input is `13d6c7995bc212bf12dc286ef626cf95193bd830cda1a18d29141f76c9defad4`; batch 58 is dependency level 3 with prerequisite batches 3, 34, and 39. The shared run remains at Step 1 authoring and was not modified. Batch 3's supplier body and proof were inspected; its successful dispatch is not treated as independent approval. Batches 34 and 39 were still in progress at handoff. Their unresolved page edges and exact currently available item interfaces are recorded in `batch-58.dependencies.json` for owner reconciliation.

## Inventory, order, and proof routes

The manifest, both A/B carriers, dependency input, and proof contracts agree on this inventory. In-run levels are zero without in-run suppliers and otherwise one plus the maximum supplier level.

| Item | Level | In-batch suppliers | Claim and proof route |
|---|---:|---|---|
| `def-wolfe-and-strong-wolfe-conditions` | 0 | — | Defines feasible ray, descent direction, Wolfe and strong-Wolfe tests, Armijo condition, and descent angle with the gradient/inner-product conventions explicit. Strong Wolfe implies Wolfe under the stated descent-direction and parameter hypotheses. |
| `lem-strong-wolfe-step-exists-on-a-bounded-below-ray` | 1 | Wolfe definition | Uses the first crossing of the shifted ray objective, boundedness below, the mean-value theorem, and continuity to obtain a strict strong-Wolfe interval. |
| `alg-bracketing-zoom-strong-wolfe-search` | 1 | Wolfe definition | Specifies expansion and endpoint-ordered bisection/zoom, checks domain before evaluation, validates both tests before returning, and reports finite-budget/domain failures. It does not claim finite budgets must find an existing step. |
| `lem-wolfe-step-lower-bound-from-the-descent-angle` | 1 | Wolfe definition | The curvature inequality bounds the directional gradient change below; segmentwise Lipschitz continuity and Cauchy–Schwarz bound it above, yielding the step lower bound. |
| `thm-zoutendijk-summability-for-wolfe-steps` | 2 | Wolfe definition; angle lemma | With explicit iterate update and lower bounded initial sublevel, combines the angle lower bound with Armijo decrease and telescopes to finite weighted gradient-square sum. |
| `cor-uniform-descent-angle-implies-gradient-vanishing` | 3 | Zoutendijk theorem | A uniform positive angle lower bound makes the unweighted squared gradient norms summable, hence the gradient norms tend to zero. It asserts neither iterate convergence nor minimizer convergence. |
| `alg-inexact-newton-krylov-with-descent-safeguard` | 2 | Wolfe definition; bracketing/zoom search | Defines the matrix-free Krylov interface, recomputes shifted residuals, checks descent, retries with shifts, falls back to negative gradient, and returns explicit finite-budget failures. The local rate theorem is expressly limited to the unshifted full-step branch. |
| `lem-inexact-newton-error-recurrence-under-lipschitz-jacobian` | 1 | — | Uses the batch-3 exact Taylor remainder, a local inverse bound, and an explicit residual expansion. The extra comparison of `J(x)` with `J_*` is retained, giving the correct `3L/2` Taylor coefficient before the forcing term is separated. |
| `thm-inexact-newton-local-forcing-rates` | 2 | Error-recurrence lemma | A small invariant tube and the recurrence give linear convergence for uniformly bounded forcing below one, superlinear convergence when forcing tends to zero, and quadratic convergence when forcing is residual-sized. It does not claim globalization automatically selects full unit steps. |
| `ex-rosenbrock-newton-step-satisfies-strong-wolfe` | 3 | Inexact-Newton algorithm; Wolfe search/definition | Exact rational gradient, Hessian, Newton solve, descent threshold, objective decrease, and strong-curvature bounds verify the first full step. |
| `ex-rosenbrock-indefinite-hessian-requires-descent-safeguard` | 3 | Inexact-Newton algorithm; Wolfe existence lemma/definition | An exact pointwise Hessian calculation shows the raw Newton direction ascends; the shifted solve passes residual/descent tests, and nonnegativity of the objective gives a bounded-below ray. Finite search failure remains possible. |
| `ex-inexact-newton-forcing-tolerance-cost-and-rate` | 3 | Inexact-Newton algorithm; local-rate theorem | Solves a scalar Newton equation by a finite Richardson recurrence, derives the exact residual and least iteration count, verifies unit strong Wolfe acceptance, and distinguishes linear from quadratic outer error. |

The item dependency file records all five batch-3/published external edges and all eighteen within-batch edges. The `alg-inexact-newton-krylov-with-descent-safeguard` interface uses the already-published matrix-free access, Krylov subspace, and matrix-product/identity definitions; no unfinished batch-34 convergence result is a premise. The canonical published Armijo termination supplier was inspected, but it is not substituted for Wolfe curvature. No unfinished batch-39 theorem is a premise; the local Wolfe, angle, and Zoutendijk claims are proved here. The declared page edges to batches 34 and 39 remain open for owner reconciliation, as recorded with exact page IDs, hypotheses, and affected claims in the dependency input.

The inexact-Newton rate theorem applies only to the unshifted full-step root recurrence in its invariant neighborhood. Nocedal–Wright's eventual unit-step result requires a positive-definite critical Hessian; invertibility of the root Jacobian alone does not establish that the safeguarded algorithm enters this branch. The A item and page note preserve this limitation.

## Source record

The coverage file preserves two independent full-text sources, search queries, screened alternatives, harvested-result dispositions, and fetch stamps. The full texts were retrieved and inspected at the cited sections; the notes do not claim that every page of the book was read.

- Jorge Nocedal and Stephen J. Wright, *Numerical Optimization*, 2nd ed., [complete 683-page PDF](https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf). Inspected in full: Chapter 3 §§3.1–3.2 Wolfe/strong-Wolfe conditions, Lemma 3.1 and Theorem 3.2 proof; §3.5 bracketing/zoom; Chapter 5 §5.2 nonlinear-CG boundary; Chapter 7 §7.1 inexact residual, local rates, and Newton–CG safeguard. Fetch stamp: 4,381,046 bytes, 683 pages, SHA-256 prefix `6ee55b7f3fb579af`.
- Ron S. Dembo, Stanley C. Eisenstat, and Trond Steihaug, “Inexact Newton Methods,” *SIAM Journal on Numerical Analysis* 19 (1982), 400–408, [complete 10-page scan](https://wiki.math.ntnu.no/_media/tma4180/2018v/inexactnewton.pdf). Inspected in full, including Theorem 2.3 and proof, Theorem 3.3, Corollary 3.5, and the appendix counterexample. Fetch stamp: 260,663 bytes, 10 pages, SHA-256 prefix `ee31cfdc0e0fdcd4`.

Two alternate retrievals failed and were replaced without claiming source reading from them: the convexoptimization.com Nocedal–Wright PDF returned a browser internal error; the Bergen Dembo PDF redirected to an unrelated department page. The complete Kent State and NTNU copies were then opened and fetch-verified. Coverage records those retrieval histories and search outcomes. No selected source remains unresolved or dropped, so no `source_resolution` drop/escalation entry is applicable.

The Nocedal–Wright results used only as boundaries are recorded inline/out-of-scope: positive-definite critical Hessian is needed for eventual unit steps; nonlinear-CG convergence needs its own direction hypotheses and remains out of scope. The Dembo–Eisenstat–Steihaug rate theorems are not used to infer quadratic convergence from a forcing sequence alone; the local proof states the required residual scaling.

## Contracts, readiness, and scoped checks

The proof-contract file has contracts for all nine proof-bearing items, generated from their final facts, steps, inputs, supplier excerpts, and boundary cases. Definition, algorithm, and examples are not proof-contract entries. Readiness records are item-level authoring records only; they do not constitute independent review or supplier approval. Page-level batch-34 and batch-39 reconciliation remains visible in the dependency input and is not represented as completed approval.

Final scoped-check results after the last item and contract edits:

- `node tools/proof-layout.mjs` on the 12 assigned items: pass, 36 steps, 0 defects. The phase precheck passes all 9 proof-bearing items; the definition and two algorithms are not applicable.
- `proof-contract.mjs --strict --json`: pass, 9 contracts, 0 errors and 0 warnings. Contract boundary evidence uses the final step labels.
- `manifest-deps.mjs` and `content-policy.mjs`: pass, 12 items, 0 errors/warnings. The explicit batch-3 plus batch-58 dependency-level calculation passes 23 items with no cycle or label error; batch 58's maximum item level is 3. The item-level dependency input agrees with the manifest levels.
- Focused `depcheck`: pass, 411-item dependency closure and 85 prerequisite pages, 0 errors/warnings. Focused `fwdcheck`: 0 open forward references, 0 load-bearing later-material edges, 0 errors/warnings. Focused `extcheck`: 12 items, 0 unproved suppliers/open problems/errors/warnings. `citecheck`: 12 items, 0 warnings.
- `rendercheck` on all 12 items and both assigned pages: pass, 14 files, 0 errors and 0 warnings.
- Coverage checklist: pass, 1 A page and 13 harvested results, 0 errors/warnings. `source-fetch-check --stamp`: pass, 2/2 sources fetch-verified, 0 newly stamped and 0 dropped sources.
- All 12 Step 1 records are `ready`, `owner: false`, have dependency arrays matching the manifest, and contain current SHA-256 fields. Readiness is item-level authoring completion. The declared page edges to unfinished batches 34 and 39 remain unresolved for owner reconciliation and are not claimed as closed by these records.

No full-suite test or run-wide gate was run. No test request was made; only the requested scoped authoring checks were run.

