# Batch 72 authoring notes

Run `numerical-optimization-dynamics-2026-10-16`, batch 72, beta pair **Trust region and cubic regularization methods**. This is Step 1 authoring evidence, not independent proof approval.

## Controlling design and recorded conflict

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta scaffold/task, the current owner-authoring direction, the complete OPT3 contract in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md`, `research/plan-numerical-optimization-track.md` OPT3, and the assigned page records in `research/plan-spec.json` and the batch manifest.
- OPT3 in the current optimization plan controls the mathematical scope: quadratic trust-region ratio and radius updates; Cauchy, SPD dogleg, and truncated-CG steps; shifted-Hessian KKT conditions including the singular hard case; Cauchy decrease and `liminf ||g_k||=0`; target-specific `O(ε^-2)` trial bounds with rejected-step counting; and separate adaptive cubic regularization with `O(ε^-3/2)` evaluation complexity under Lipschitz-Hessian and sufficient model-decrease assumptions. The controlling contract expressly does not let a finite procedure alone imply convergence or complexity.
- The preserved OPT3 prose still says `OPT1` and `NA-05` as prerequisites. That conflicts with the current native `plan-spec.json` and assigned manifest, both of which list `krylov-methods-and-lanczos-convergence` and `nonconvex-line-search-and-inexact-newton-methods`. The current owner direction says actual consumed interfaces and current native assignments control over historical mixed pair keys. The batch manifest therefore retains those two current page requirements; the old OPT1/NA-05 prose is recorded as stale prerequisite routing, not used to invent item suppliers.
- Output is limited to batch 72 assigned items, the two page carriers, and batch-72 evidence. No published page, shared plan, owner state, or verdict was edited.

## Inventory and dependency levels

The A page is `trust-region-and-cubic-regularization-methods` (order 2428); its companion B page is `trust-region-and-cubic-regularization-methods-examples` (order 2429). The page cap is 100; the pages contain 18 and 3 items, respectively.

| Item dependency level | A-page items |
|---|---|
| 0 | `def-trust-region-quadratic-model-and-ratio`, `def-adaptive-cubic-regularization-model`, `lem-natural-logarithm-bounded-by-argument` |
| 1 | `lem-trust-region-subproblem-optimality-and-hard-case`, `alg-trust-region-cauchy-step`, `lem-positive-definite-model-has-unique-newton-step`, `lem-global-cubic-model-minimizer-decrease` |
| 2 | `lem-trust-region-cauchy-decrease`, `alg-dogleg-trust-region-step`, `alg-truncated-cg-trust-region-step`, `alg-adaptive-cubic-regularization` |
| 3 | `lem-truncated-cg-iterates-are-krylov-vectors`, `alg-trust-region-method`, `lem-trust-region-ratio-accuracy-for-small-radii`, `lem-adaptive-cubic-unsuccessful-iteration-count` |
| 4 | `thm-trust-region-global-liminf-gradient`, `thm-trust-region-epsilon-iteration-complexity`, `thm-adaptive-cubic-regularization-epsilon-complexity` |

B-page levels are 2: `ex-indefinite-trust-region-boundary-minimizer`, `ex-trust-region-singular-hard-case`; and 3: `ex-trust-region-newton-cauchy-truncated-cg`.

The scoped graph was recomputed from item `deps`: 21 items over 2 pages, no cycles, item levels match both manifest and frontmatter (distribution 3/4/6/5/3 at levels 0–4). A body-resolution pass over the transitive `deps`, `justified_by`, and `forward_refs` closure parsed 1,625 item records and 10,814 declared edges with no missing files. Batch scheduling level is 4, with prerequisite batches 34 and 58, scheduling input SHA-256 `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`.

## Supplier verification and unresolved interface

- **Batch 34:** the required page body `krylov-methods-and-lanczos-convergence` is absent. The published body of `def-krylov-subspace-of-a-matrix-and-start-vector` is present and inspected. The truncated-CG algorithm and Krylov-membership lemma use its exact finite-dimensional span definition and nesting only; the B-page 2D solve uses `K_2(B,-g)=R^2`. No Lanczos convergence theorem, spectral-gap assumption, or floating-point guarantee is used. The page-level edge remains unresolved for owner reconciliation; affected claims are none beyond the declared page requirement. See the exact status, hypotheses, affected claims, and owner action in `batch-72.dependencies.json`.
- **Batch 58:** the required `nonconvex-line-search-and-inexact-newton-methods` page and draft bodies `alg-inexact-newton-krylov-with-descent-safeguard`, `def-wolfe-and-strong-wolfe-conditions`, and `alg-bracketing-zoom-strong-wolfe-search` are present and inspected. They are not independently approved. The B example verifies the exact zero-residual/descent branch and both strong-Wolfe inequalities for its displayed quadratic at `t=1`, with `c1=1/10`, `c2=1/4`; it makes no convergence or finite-budget success claim about those supplier algorithms.
- The trust-region KKT proof depends on the published real spectral theorem, definite-form definition, intermediate-value theorem, and continuity-of-algebra supplier; all actual bodies were inspected. It proves necessity by comparing another feasible minimizer in the quadratic identity, avoiding an invalid claim that the constrained Lagrangian is globally minimized on all of `R^n`. Its secular-function argument treats singular coordinates explicitly and uses continuity/IVT rather than assuming strict monotonicity.
- The local logarithm lemma is a complete proof from the published natural-log definition/laws/derivative and MVT, and is used to absorb the terminal radius logarithm in the trust-region total-trial bound. Exact edges and required hypotheses are in `batch-72.dependencies.json`.

## Sources and retrieval record

`batch-72.coverage.json` records all 34 harvested search results with their per-result disposition, full-text locators, item coverage, source-resolution history, and fetch stamps. Five active full-text sources are fetch-verified:

- Nocedal and Wright, *Numerical Optimization*, second edition: `https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf`; complete 683-page PDF inspected, Ch. 4 §§4.0–4.3 and Ch. 7 §7.1, Algorithm 7.2. Stamp: 4,381,046 bytes, 683 pages, SHA prefix `6ee55b7f3fb579af`.
- Nick Gould, *Continuous Optimization Algorithms, Part 3.2: Trust-Region Methods*: `https://www.numerical.rl.ac.uk/media/people/nick-gould/part3.2.pdf`; complete 27-page notes, §II, pp. 12–24. Stamp: 232,599 bytes, 27 pages, SHA prefix `03c94e9e2825f43b`.
- Nesterov and Polyak, *Cubic regularization of a Newton scheme and its global performance*: `https://webdoc.sub.gwdg.de/ebook/serien/e/CORE/dp2003-41.pdf`; complete 27-page paper, §2, Lemma 1 and (2.4)–(2.7), plus §§3–4 for scope boundaries. Stamp: 237,065 bytes, 27 pages, SHA prefix `cd2026e2be884a81`.
- Cartis, Gould, and Toint, Part I author preprint, *Adaptive cubic overestimation methods for unconstrained optimization. Part I: motivation, convergence and numerical results*: `https://perso.unamur.be/~phtoint/pubs/TR07-05a.pdf`; complete 38-page preprint, §§1–3.2, PDF pp. 1–13. Stamp: 426,817 bytes, 38 pages, SHA prefix `71eb8f839878b18c`.
- Cartis, Gould, and Toint, Part II author preprint, *Adaptive cubic overestimation methods for unconstrained optimization. Part II: worst-case iteration complexity*: `https://perso.unamur.be/~phtoint/pubs/TR07-05b.pdf`; complete 19-page preprint, §2.2 Theorem 2.1 and §§3.1, 4–5.1, PDF pp. 4–14. Stamp: 247,942 bytes, 19 pages, SHA prefix `b57de0c038f34875`.

The original Oxford Part I and Part II PDFs were each opened and inspected in full but the direct fetch check timed out five times after the prior recorded attempt. Their source-resolution rows retain the full attempt/search history and complete local alternative arguments/dependencies; only those failing URLs are marked `dropped`. The matching author-university mirrors above were opened, inspected, stamped, and remain active. Mathematical coverage was not dropped.

## Mathematical boundaries

- The trust-region global result is `liminf ||∇f(x_k)||=0` under its stated bounded-model, Lipschitz-gradient, bounded-below, update, and Cauchy-decrease hypotheses. It does not claim full-sequence convergence without stronger uniform assumptions.
- The trust-region `O(ε^-2)` result is target-aware and states the gradient, radius, acceptance, and update conditions; it proves a finite target hit and counts unsuccessful trials via a radius telescoping bound.
- The cubic `O(ε^-3/2)` result assumes a Lipschitz Hessian, objective bounded below, exact global cubic-model minimizers, sufficient decrease, regularization floor/cap, and a proved rejected-iteration count. Finite solver or outer budgets can return failure and confer no unconditional success guarantee.
- The cubic complexity proof uses the item-local Cartis-style rejection argument only under its stated hypotheses; the Cauchy-decrease, ratio, and complexity claims are locally proved rather than accepted by citation.

## Final scoped checks and blockers

- `proof-layout.mjs` on all 21 assigned items: **21 items, 42 steps, 0 defects**.
- `proof-contract.mjs ... --strict`: **14/14 contracts, 0 errors, 0 warnings**. Contracts include exact local arguments/steps and supplier excerpts; finite checks cover all three examples and the logarithm lemma.
- `coverage-checklist.mjs ... --require-destination`: **1 page, 34 harvested results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs --coverage ... --stamp`: **5/7 fetch-verified; 7/7 resolved; 2 documented drops; 0 newly stamped**.
- `step1-decisions.mjs record`: **21 authoring-ready records written** with each item's exact direct dependency IDs. A scoped hash check reports **21/21 current and closed**. These are authoring-readiness records only.
- Scoped dependency recomputation: **pass** as detailed above. The official run-wide `batch-dependency-levels.mjs check` is blocked by malformed YAML in unrelated run items: unquoted source titles containing `I: Nonstiff Problems` in `alg-finite-sectional-forward-euler-positivity-cfl` and `thm-finite-sectional-forward-euler-positivity-and-conservation`. The run-wide `item-dependency-levels.mjs check` reaches unrelated empty scaffold inventories outside batch 72. The run-wide `step1-decisions.mjs check` fails while parsing unrelated item frontmatter with duplicate `pipeline_run` keys (including `alg-chebyshev-composite-simpson-weighted-mass-matrix`). All batch-72 transitive item closures were individually hashable. No unrelated items or scaffolds were changed.
- No tests were run; none were requested. Required proof, source, coverage, and dependency checks were run instead.

Batch 72's draft items, pages, proof contracts, coverage, and dependency inputs are ready for ordinary owner reconciliation and independent review. This handoff does not constitute approval, publication, or a verdict.
