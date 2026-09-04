# frontier-29 · Alpha group `c` · Step 3 scaffold review

Group `c` owns batches `4`, `6`, and `7` in
`research/frontier-29-alpha-groups.json`:

- MT-17 `the-maximal-function-and-lebesgue-differentiation`
- PT-1 `probability-spaces-random-variables-and-expectation`
- FR-1 `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`

For each owned pair I read the current:

- `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `CLAUDE.md`
- `research/frontier-29-batch-4.pages.json`,
  `research/frontier-29-batch-4.coverage.json`,
  `research/frontier-29-batch-4.notes.md`
- `research/frontier-29-batch-6.pages.json`,
  `research/frontier-29-batch-6.coverage.json`,
  `research/frontier-29-batch-6.notes.md`
- `research/frontier-29-batch-7.pages.json`,
  `research/frontier-29-batch-7.coverage.json`,
  `research/frontier-29-batch-7.notes.md`
- the live `research/plan-spec.json`
- the governing design sections `MT-17` in
  `research/plan-measure-theory-track.md`, `PT-1` in
  `research/plan-probability-track.md`, and `FR-1` in
  `research/plan-fourier-analysis-track.md`

Checks run on Tuesday, September 1, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group c`
  - result before resolution: `scope-decisions: c: 13 decline(s), 13 pending`
- `node tools/scope-decisions.mjs check --run frontier-29 --group c`
  - result after resolution: `scope-decisions: 13 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-4.coverage.json research/frontier-29-batch-6.coverage.json research/frontier-29-batch-7.coverage.json --require-destination`
  - result: `coverage-checklist: 3 page(s), 139 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-4.pages.json research/frontier-29-batch-6.pages.json research/frontier-29-batch-7.pages.json`
  - result: `content-policy: 94 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-4.coverage.json`
  - result: `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-6.coverage.json`
  - result: `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-7.coverage.json`
  - result: `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; only the standing repository-wide `redundant-prereq`
    advisories remain, ending in the standard `OK` line
- focused closure audit over the three owned A-page manifests, with published
  library pages included for current item homes
  - result: `0` hidden prerequisite homes, `0` foreign B-page item deps, `0`
    item deps outside declared closure

## Scope receipt

`research/frontier-29-alpha-c-scope-decisions.json` is current.

All `13` current decline rows resolve as `stands`:

- MT-17: `5` rows. The sharper maximal-function constants, the one-dimensional
  direct strong-`L^k` route, the classical `L log L` endpoint substitute,
  Rudin's stronger singular-measure derivative theorem, and Tao's stronger
  interval-sharpness construction are all non-load-bearing on the retained
  MT-17 route.
- PT-1: `6` rows. The convergence-to-the-limit material is correctly deferred
  to `modes-of-convergence-for-random-variables`, the characteristic-function
  section is correctly deferred to
  `characteristic-functions-inversion-and-continuity`, and the generating-
  function, differentiation-under-the-integral, and Minkowski rows are honest
  out-of-scope extras.
- FR-1: `2` rows. The Cesaro-versus-ordinary Tauberian theorem is correctly
  deferred to `fejer-and-poisson-summability-of-fourier-series`, and the
  stronger uniform BV estimate is an honest out-of-scope strengthening.

No current row needs `owner-decision`: every deferred row already names an
exact later A page on current disk, and every out-of-scope row is a truthful
non-load-bearing boundary.

No owned batch artifact required a mathematical or routing repair in this Step
3 review.

## Pair verdicts

### `the-maximal-function-and-lebesgue-differentiation` — `sufficient`

This pair is breadth-sound on current bytes: `25` A-page items and `9` B-page
items, so no split is owed.

The design/spec prerequisite mismatch is nonfatal. The live closure from
`the-duality-of-lp-and-lq-examples` already reaches the earlier MT-17 design
suppliers `the-lp-spaces-holder-minkowski-and-riesz-fischer`,
`product-measures-and-the-fubini-tonelli-theorems`,
`measurable-functions-and-simple-approximation`,
`the-radon-nikodym-theorem-and-lebesgue-decomposition`,
`density-separability-and-convolution-in-lp`,
`the-topology-of-euclidean-space`, and `compactness-in-metric-spaces`.

The current scaffold keeps the route honest:

- measurability of the centered maximal function remains a theorem, not hidden
  inside a definition;
- centered and uncentered conventions stay explicit and comparable;
- weak `(1,1)`, the `L^infty` bound, Marcinkiewicz, strong `L^p`, Lebesgue
  differentiation, Lebesgue points, density, differentiation along shrinking
  families, differentiation of measures, and the `L^1` FTC are all represented;
- the B page carries the concrete sharpness and counterexample leaves the
  design actually asks for.

The source stack and scope dispositions are also sufficient on the current
bytes: `4/4` recorded sources are fetch-verified, and the five decline rows are
all exact non-load-bearing trims rather than missing bridges.

**Verdict:** sufficient.

### `probability-spaces-random-variables-and-expectation` — `sufficient`

This pair is breadth-sound on current bytes: `30` A-page items and `11` B-page
items, with no split needed.

The PT-1 design/spec prerequisite mismatch is also nonfatal. Although the
design summary names two finite-probability pages plus the measure-theory
spine, the live closure from
`tempered-distributions-and-the-fourier-transform-examples` already reaches
every load-bearing earlier page actually cited by the manifest, and the finite
supplier items used here are all homed on the single published page
`finite-probability-spaces-and-random-variables`.

The retained route is sufficient for authoring:

- the finite/general bridge is explicit rather than hand-waved;
- laws, distribution functions, expectation, change of variables, variance,
  covariance, Jensen, Markov, Chebyshev, Holder, Cauchy-Schwarz, Lyapunov, and
  the second-moment bound are all present;
- the affine `L^2` predictor endpoint is retained as a real theorem, not left
  to prose;
- the B page has genuine law/expectation/inequality boundary cases rather than
  token examples.

The source and scope story is likewise sufficient: all `4` recorded sources are
fetch-verified, the deferred rows point to exact later PT pages already present
in `plan-spec.json`, and the out-of-scope rows avoid duplicating material that
the current PT-1 manifest does not need.

**Verdict:** sufficient.

### `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` — `sufficient`

This pair is breadth-sound on current bytes: `14` A-page items and `5` B-page
items, so no split is owed.

The FR-1 design/spec mismatch does not block authoring. The current closure
from `itos-formula-and-brownian-martingales-examples` and
`density-separability-and-convolution-in-lp` already reaches the published
Fourier and density suppliers the manifest actually cites, and the local torus
setup items in the scaffold remove any need to lean on unmaterialized FA page
items. My closure audit found no hidden prerequisite home, no foreign B-page
item dependency, and no item dependency outside the declared closure.

The page route is coherent on current disk:

- torus Fourier setup, kernel identities, Riemann-Lebesgue, localisation,
  Dini, bounded variation, and Dirichlet-Jordan are all represented;
- the B page keeps the intended kernel, localisation, Dini-boundary, and
  Lebesgue-constant leaves;
- the only deferred theorem has an exact later home on FR-2, and the one
  out-of-scope Grafakos theorem is a stronger uniform BV estimate that no
  retained FR-1 item needs.

The source backing is sufficient: both recorded sources are fetch-verified and
cover the retained route directly.

**Verdict:** sufficient.

## Outcome

All three owned A pages are sufficient for authoring on the current bytes:

- `the-maximal-function-and-lebesgue-differentiation`
- `probability-spaces-random-variables-and-expectation`
- `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`

`research/frontier-29-alpha-c-step3-verdicts.json` records all three pages as
`sufficient`.
