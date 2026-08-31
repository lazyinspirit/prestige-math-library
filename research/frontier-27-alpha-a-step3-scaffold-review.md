# frontier-27 — Alpha group `a` Step 3 scaffold review

Scope: batches `2`, `3`, and `4`, covering
`conjugate-gradients-minres-and-preconditioning`,
`density-separability-and-convolution-in-lp`, and
`normed-and-banach-spaces`.

I read each owned batch manifest, coverage file, notes file, controlling design
section, and the current `research/plan-spec.json`. On Monday, August 31, 2026,
I refreshed `research/frontier-27-alpha-a-scope-decisions.json`, resolved its
`17` pending rows, repaired the live scaffold defects described below, and
reran the relevant checks on current bytes.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `conjugate-gradients-minres-and-preconditioning` | 2 | sufficient | The live LA-22 route and its deferred/out-of-scope boundaries still close on current disk, and every current A-page item now has a coverage carrier. |
| `density-separability-and-convolution-in-lp` | 3 | sufficient | The MT-15 scaffold now keeps its smoothness and mollifier dependencies inside the existing closure, avoids the foreign B-page example dependency, and every current A-page item now has a coverage carrier. |
| `normed-and-banach-spaces` | 4 | sufficient | The FA-1 route and its deferred/out-of-scope boundaries still match the current design, and every current A-page item now has a coverage carrier. |

## Direct repairs applied

### Batch 2 — `conjugate-gradients-minres-and-preconditioning`

`research/frontier-27-batch-2.coverage.json` omitted direct carriers for five
current A-page items. I added canonical carriers for:

- `def-quadratic-energy-of-a-hermitian-positive-definite-linear-system`
- `thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer`
- `def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system`
- `prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate`
- `def-lanczos-process-as-hermitian-arnoldi`

This closes the coverage-completeness gap without changing page scope,
prerequisites, or reading order.

### Batch 3 — `density-separability-and-convolution-in-lp`

`research/frontier-27-batch-3.coverage.json` omitted direct carriers for
fourteen current A-page items. I added canonical carriers for:

- `def-translation-of-a-function-on-rn`
- `def-c-c-and-c-c-infinity-on-rn`
- `def-convolution-of-two-functions-on-rn`
- `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes`
- `thm-box-step-functions-are-dense-in-l-p-of-rn`
- `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess`
- `lem-countable-generators-yield-countable-set-algebras`
- `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra`
- `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p`
- `prop-l-one-convolution-is-bilinear-commutative-and-associative`
- `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset`
- `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity`
- `prop-mollifier-families-are-l-one-approximate-identities`
- `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`

I also repaired the manifest and notes:

- `research/frontier-27-batch-3.pages.json` now uses the already-reached
  `def-ck-and-multi-index-notation-in-several-variables` and
  `def-vector-valued-functions-limits-and-continuity` items instead of the
  later `def-ck-euclidean-maps-and-diffeomorphisms` dependency.
- `def-mollifier-family-generated-by-a-unit-mass-smooth-bump` no longer
  depends on the foreign B-page item `ex-smooth-compactly-supported-bump`.
- `research/frontier-27-batch-3.notes.md` now records that repaired
  smoothness route and the conditional bump-witness discipline accurately.

This removes the only live out-of-closure / foreign-B dependency seam while
preserving the batch's existing page-level prerequisite and design scope.

### Batch 4 — `normed-and-banach-spaces`

`research/frontier-27-batch-4.coverage.json` omitted direct carriers for nine
current A-page items. I added canonical carriers for:

- `rem-real-and-complex-normed-space-convention`
- `lem-reverse-triangle-inequality-in-a-normed-space`
- `def-linear-isometry-and-isometric-isomorphism`
- `def-normed-subspace`
- `lem-complete-subspace-is-closed`
- `lem-closed-subspace-of-a-banach-space-is-banach`
- `lem-vector-operations-are-continuous-in-a-normed-space`
- `lem-completion-operations-are-well-defined`
- `thm-metric-completion-carries-a-unique-banach-space-structure`

This closes the coverage-completeness gap without changing the FA-1 route.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-27 --group a` produced
`17` current decline rows for this group.

- `16` now resolve as `stands`.
- `1` resolves as `owner-decision`: Tao `Exercise 1.6.27(iv), convergence at
  Lebesgue points`. MT-15 still stops at $L^p$ convergence and compact-uniform
  convergence for continuous data, and the current `research/plan-spec.json`
  still has no exact later page id that cleanly absorbs the stronger
  Lebesgue-point statement.

The other deferred rows still have exact later homes on current disk:

- `conjugate-gradients-minres-and-preconditioning-examples`
- `the-duality-of-lp-and-lq`
- `bounded-linear-operators-and-quotient-spaces`
- `finite-dimensional-normed-spaces-and-riesz-lemma`

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-27 --group a`
  Result: `scope-decisions: a: 17 decline(s), 17 pending`.
- `node tools/scope-decisions.mjs check --run frontier-27 --group a`
  Result after resolution: `scope-decisions: 17 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-2.coverage.json`
  Result: `coverage-checklist: 1 page(s), 34 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-3.coverage.json`
  Result: `coverage-checklist: 1 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-4.coverage.json`
  Result: `coverage-checklist: 1 page(s), 46 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-2.pages.json research/frontier-27-batch-3.pages.json research/frontier-27-batch-4.pages.json`
  Result: `content-policy: 106 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-2.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-3.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-4.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- Local closure audit over the six owned A/B manifest pages, using published
  library homes plus the live overlay manifests
  Result: `local-closure-audit: 6 page(s), 0 issue(s)`.
- Exact manifest-to-coverage audit over the three owned A-page manifests
  Result: `0` missing current A-item carriers on every page.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: ended with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.` The only trailing note is the standing reminder that `699` planned pages still carry no item list.
- `node tools/prosecheck.mjs research/frontier-27-batch-3.notes.md research/frontier-27-alpha-a-step3-scaffold-review.md --warnings`
  Result: `2` files checked, `0` errors, `11` heuristic `count-in-prose` warnings only, then `OK — no positional claim contradicts the spec.`
- JSON parse of the six edited structured files
  Result: `json-parse: 6 file(s), 0 error(s)`.
- `git diff --check -- research/frontier-27-alpha-a-scope-decisions.json research/frontier-27-alpha-a-step3-scaffold-review.md research/frontier-27-alpha-a-step3-verdicts.json research/frontier-27-batch-2.coverage.json research/frontier-27-batch-3.coverage.json research/frontier-27-batch-3.pages.json research/frontier-27-batch-3.notes.md research/frontier-27-batch-4.coverage.json`
  Result: clean.

No Step-3 blocker remains in group `a`'s owned scaffold scope.
