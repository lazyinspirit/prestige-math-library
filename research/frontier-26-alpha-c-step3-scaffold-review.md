# frontier-26 — Alpha group `c` Step 3 scaffold review

Scope: batches `2`, `3`, and `4`, covering
`krylov-subspaces-arnoldi-and-gmres`,
`matrix-differentiation-and-first-order-spectral-perturbation`,
`the-lp-spaces-holder-minkowski-and-riesz-fischer`, and
`analytic-continuation-and-monodromy`.

I read each owned batch manifest, coverage file, notes file, the controlling
design section, the current `research/plan-spec.json`, and the run-level drift
receipt. I refreshed `research/frontier-26-alpha-c-scope-decisions.json`,
resolved its eleven pending rows, and then checked the resulting file.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `krylov-subspaces-arnoldi-and-gmres` | 2 | insufficient | Four manifest items still lack any exact coverage carrier. |
| `matrix-differentiation-and-first-order-spectral-perturbation` | 2 | insufficient | Seven manifest items still lack any exact coverage carrier. |
| `the-lp-spaces-holder-minkowski-and-riesz-fischer` | 3 | insufficient | Sixteen manifest items still lack any exact coverage carrier. |
| `analytic-continuation-and-monodromy` | 4 | insufficient | The function-element definition lacks a coverage carrier, and the required CA-7/CA-17 agreement seam is still absent. |

## Direct repairs applied

None. The live defects are under-supported scaffold coverage and one missing
design seam, so I left them as batch-local Step-3 findings for Beta rather than
silently rewriting another role's harvest.

## Stable findings

### B2-1 — `krylov-subspaces-arnoldi-and-gmres` is under-harvested against LA-20

The controlling LA-20 design requires the grade/minimal-polynomial setup, the
polynomial-image characterization of Krylov space, GMRES residual minimization,
and exact termination at the relative grade
(`research/plan-algebra-track-expansion-v2.md:834-847`). The current manifest
does contain those items, but the current coverage record does not name them.

Evidence on current bytes:

- `research/frontier-26-batch-2.notes.md:192-200` says the batch added only a
  short canonical list for selected load-bearing items.
- `research/frontier-26-batch-2.coverage.json:35-42` harvests Saad's `Simple
  properties of K_m` but names only
  `thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise`.
- `research/frontier-26-batch-2.coverage.json:60-72` harvests the GMRES
  least-squares source block but names only
  `thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem`.
- `research/frontier-26-batch-2.coverage.json:109-123` harvests Trefethen-Bau's
  GMRES block but names only the residual-polynomial item and residual
  monotonicity corollary.
- A manifest-to-coverage audit on the current bytes finds four uncovered A-page
  items.

Exact missing results and source carriers:

- `def-grade-and-relative-minimal-polynomial-of-a-start-vector` and
  `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector` need exact
  carriers from the already-harvested Saad Set 13 Krylov block.
- `cor-gmres-minimizes-the-residual-over-the-affine-krylov-space` and
  `thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic`
  need exact carriers from the already-harvested GMRES block in Saad Set 13 or
  Trefethen-Bau Lecture 35.

Because current authoring would otherwise have to reconstruct four named A-page
results from unassigned neighboring source headings, the page is not
author-ready on current bytes.

### B2-2 — `matrix-differentiation-and-first-order-spectral-perturbation` is under-harvested against LA-21

The LA-21 design requires the matrix differential bundle, the compatible
left/right eigendata setup, the simple-eigenvalue condition-number definition,
and projector scale invariance
(`research/plan-algebra-track-expansion-v2.md:881-899`). The current manifest
contains all of those items, but the current coverage record only names the
least-squares bundle, the simple-branch theorem, the reduced-resolvent package,
the simple positive singular-value restriction, and the crossing counterexample.

Evidence on current bytes:

- `research/frontier-26-batch-2.notes.md:198-200` lists the only LA-21
  canonical carriers Beta added.
- `research/frontier-26-batch-2.coverage.json:176-200` confirms that the
  canonical list stops at those five items.
- `research/frontier-26-batch-2.coverage.json:205-345` contains no exact row
  for seven manifest items that the LA-21 design calls out explicitly.
- A manifest-to-coverage audit on the current bytes finds seven uncovered A-page
  items.

Exact missing results and source carriers:

- `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`,
  `prop-differentials-of-trace-and-frobenius-linear-functionals`, and
  `prop-gradient-of-a-quadratic-matrix-form` need exact carriers from the
  Edelman-Johnson matrix-calculus source block already harvested at
  `research/frontier-26-batch-2.coverage.json:205-245`.
- `def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue`,
  `prop-simple-eigenvalues-admit-left-right-normalization`,
  `def-condition-number-of-a-simple-eigenvalue`, and
  `prop-simple-spectral-projector-is-scale-invariant` need exact carriers from
  the already-harvested Bindel and Stewart-Sun perturbation blocks at
  `research/frontier-26-batch-2.coverage.json:255-337`.

Because seven named A-page results are still source-unassigned on current
bytes, this page is not author-ready.

### B3-1 — `the-lp-spaces-holder-minkowski-and-riesz-fischer` is under-harvested against MT-14

The MT-14 design requires a much broader A-page spine than the current harvest
records, including the equality cases, the vector-space and null-kernel
machinery, the Lyapunov interpolation block, the `p -> infinity` limit, and the
`L^2` parallelogram law
(`research/plan-measure-theory-track.md:3001-3057`). The batch notes correctly
explain the intended route, but the coverage file does not assign exact source
or canonical carriers to sixteen current A-page items.

Evidence on current bytes:

- `research/frontier-26-batch-3.notes.md:132-145` discusses quotient-first
  setup, completeness, the density deferrals, and the naming trap, but it does
  not add carriers for the comparison and equality subpackages.
- `research/frontier-26-batch-3.coverage.json:5-25` shows only four canonical
  carriers for the page.
- `research/frontier-26-batch-3.coverage.json:33-237` names the quotient,
  Holder, Minkowski, completeness, finite-measure inclusion, counting-measure
  inclusion, and the `0 < p < 1` metric block, but not the remaining sixteen
  manifest items.
- A manifest-to-coverage audit on the current bytes finds sixteen uncovered
  A-page items.

Exact missing results and source carriers:

- `def-conjugate-exponents`,
  `def-essential-supremum-with-respect-to-a-measure`,
  `def-null-subspace-of-almost-everywhere-zero-functions`,
  `thm-equality-case-in-holder-inequality`,
  `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities`,
  `thm-equality-case-in-minkowski-inequality`,
  `rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem`,
  `prop-essential-supremum-is-attained-as-the-least-essential-bound`,
  `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one`,
  `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class`,
  `cor-l-p-convergence-implies-convergence-in-measure`,
  `thm-lyapunov-interpolation-inequality-for-l-p-norms`,
  `rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm`,
  `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions`,
  `thm-parallelogram-law-in-l-two`, and
  `thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one`
  all still need exact coverage carriers from the already-read Axler, Hunter,
  and Wheeden-Zygmund source stack or from an expanded canonical list.

Three of those are especially load-bearing because the design calls them out as
downstream consumers' suppliers: `thm-lyapunov-interpolation-inequality-for-l-p-norms`,
`thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions`,
and `thm-parallelogram-law-in-l-two`
(`research/plan-measure-theory-track.md:3045-3053`).

Because half of the A-page manifest remains uncovered by exact harvest rows,
MT-14 is not author-ready on current bytes.

### B4-1 — `analytic-continuation-and-monodromy` lacks the function-element carrier

`def-function-element-and-direct-analytic-continuation` is the opening carrier
for the continuation chain, chain-refinement, and germ-surface blocks in the
current manifest
(`research/frontier-26-batch-4.pages.json:35-42`, `:45-52`, `:64-72`, and
`:121-127`). But the current coverage record never names that item.

Evidence on current bytes:

- `research/frontier-26-batch-4.coverage.json:24-219` names
  `def-complete-analytic-function`, `def-riemann-surface-of-a-complete-analytic-function`,
  `def-analytic-continuation-along-a-path`, and the later theorems, but no row
  names `def-function-element-and-direct-analytic-continuation`.
- The missing carrier is not replaced by a canonical row:
  `research/frontier-26-batch-4.coverage.json:5-19` contains only the local-ring
  theorem, the uniqueness theorem, and the covering warning.

Exact missing result and source carrier:

- `def-function-element-and-direct-analytic-continuation` needs an exact carrier
  from the already-harvested Ahlfors/McMullen continuation sources in
  `research/frontier-26-batch-4.coverage.json:24-162`.

Because later continuation items depend directly on that definition, the page is
not author-ready without it.

### B4-2 — `analytic-continuation-and-monodromy` is still missing the required CA-7/CA-17 agreement seam

The CA-20 design does not merely want the simply-connected continuation
corollary. It explicitly says that corollary is a second proof that a
nonvanishing function on a simply connected domain has a logarithm, and that an
agreement remark with CA-7/CA-17 is required
(`research/plan-complex-analysis-track.md:2668-2672`).

Evidence on current bytes:

- The manifest contains `cor-single-valued-continuation-on-simply-connected-domains`
  at `research/frontier-26-batch-4.pages.json:109-119`.
- No item or notes entry records the required CA-7/CA-17 agreement seam:
  `research/frontier-26-batch-4.pages.json` has no remark of that kind, and
  `research/frontier-26-batch-4.notes.md:153-190` discusses the local scaffold
  decisions without naming it.

Exact missing result and source:

- the required CA-7/CA-17 agreement remark attached to the simply-connected
  continuation corollary, as required by
  `research/plan-complex-analysis-track.md:2668-2672`.

This is a design-level omission on current bytes, so Beta needs either to add
the seam inside the scaffold files or to record a precise pushback in the fix
pass.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-26 --group c` produced
eleven current decline rows for this group. All eleven now resolve as `stands`
with current evidence.

The current bytes support those boundaries:

- LA-20 still stops at Arnoldi/GMRES and does not widen into FOM or truncated
  orthogonalization variants.
- LA-21 still stays on first-order simple-spectrum perturbation and does not add
  a whole-spectrum continuity package.
- MT-14 still defers density and separability to MT-15 and correctly keeps the
  later Wheeden-Zygmund "Riesz-Fischer" naming trap out of local scope.
- CA-20 still stops before level-curve preliminaries, branch-point
  classification, and algebraic-function/compact-surface examples.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-26 --group c`
  Result: `scope-decisions: c: 11 decline(s), 11 pending`.
- `node tools/scope-decisions.mjs check --run frontier-26 --group c`
  Result: `scope-decisions: 11 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-2.coverage.json`
  Result: `coverage-checklist: 2 page(s), 46 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-3.coverage.json`
  Result: `coverage-checklist: 1 page(s), 38 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-4.coverage.json`
  Result: `coverage-checklist: 1 page(s), 38 harvested result(s), 0 error(s), 0 warning(s)`.
- Manifest-to-coverage alignment audit over the four owned A pages
  Current result before any Beta fix: batch 2 / LA-20 missing 4 items; batch 2 /
  LA-21 missing 7 items; batch 3 / MT-14 missing 16 items; batch 4 / CA-20
  missing 1 item.
- `node tools/prosecheck.mjs research/frontier-26-alpha-c-step3-scaffold-review.md --warnings`
  Result: `0` errors, `5` `count-in-prose` warnings, and `OK — no positional claim contradicts the spec.`
- `git diff --check -- research/frontier-26-alpha-c-scope-decisions.json research/frontier-26-alpha-c-step3-scaffold-review.md research/frontier-26-alpha-c-step3-verdicts.json`
  Result: clean.
