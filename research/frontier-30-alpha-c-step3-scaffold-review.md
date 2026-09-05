# frontier-30 · Alpha group `c` · Step 3 scaffold review

Group `c` owns batches `3`, `5`, and `6` in
`research/frontier-30-alpha-groups.json`:

- MT-18 `differentiation-of-monotone-functions-and-the-vitali-covering-theorem`
- PT-2 `independence-borel-cantelli-and-zero-one-laws`
- FR-2 `fejer-and-poisson-summability-of-fourier-series`

For each owned pair I read the current `README.md`, `SCHEMA.md`,
`WORKFLOW.md`, and `CLAUDE.md`; the batch manifest, coverage, and notes files;
the live `research/plan-spec.json`; and the governing design sections
`MT-18` in `research/plan-measure-theory-track.md`, `PT-2` in
`research/plan-probability-track.md`, and `FR-2` in
`research/plan-fourier-analysis-track.md`.

Checks run on Saturday, September 5, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group c`
  - result before resolution: `scope-decisions: c: 17 decline(s), 17 pending`
- `node tools/scope-decisions.mjs check --run frontier-30 --group c`
  - result after resolution: `scope-decisions: 17 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-30-batch-3.coverage.json research/frontier-30-batch-5.coverage.json research/frontier-30-batch-6.coverage.json --require-destination`
  - result: `coverage-checklist: 3 page(s), 102 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-3.pages.json research/frontier-30-batch-5.pages.json research/frontier-30-batch-6.pages.json`
  - result: `content-policy: 77 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-3.coverage.json`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-5.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-6.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; only the standing repository-wide `redundant-prereq`
    advisories remain, ending in the standard `OK` line
- `node tools/validate-plan.mjs /tmp/frontier-30-alpha-c-merged-plan.json`
  - result: pass; the merged temp plan ends in the standard `OK` line
- focused closure audit over the three owned manifests using current plan rows
  plus published library page homes
  - result: `0` unresolved item homes, `0` deps outside the retained closure,
    `0` foreign B-page item deps after the local repair below
- `node tools/prosecheck.mjs research/frontier-30-alpha-c-step3-scaffold-review.md --warnings`
  - result: pass with heuristic `count-in-prose` warnings only
- `git diff --check -- research/frontier-30-batch-3.pages.json research/frontier-30-alpha-c-scope-decisions.json research/frontier-30-alpha-c-step3-scaffold-review.md research/frontier-30-alpha-c-step3-verdicts.json`
  - result: pass

## Scope receipt

`research/frontier-30-alpha-c-scope-decisions.json` is current.

All `17` current decline rows resolve as `stands`:

- MT-18: the four Thomson `Theorem 2.1`, `Theorem 2.2`, `Definition of the
  Measures L and L*`, and `Lemma 3.1` rows are honest non-load-bearing trims.
  The retained scaffold already keeps the concrete Vitali theorem, the
  cheap-countable-subcover null-set characterisation, and the Royden third-route
  remark the design asks for.
- PT-2: the six deferred rows all point to exact later A pages that already
  exist on current disk: `infinite-product-measures-and-kolmogorov-extension`
  (PT-3), `modes-of-convergence-for-random-variables` (PT-4),
  `strong-laws-of-large-numbers` (PT-6), and
  `characteristic-functions-inversion-and-continuity` (PT-8).
- FR-2: the seven Laugesen/Grafakos out-of-scope rows are honest trims of the
  torus maximal-function route, the disk Laplace-equation application, and a
  Dirichlet-side comparison result that the retained FR-2 scaffold does not use
  as a prerequisite.

No current row needs `owner-decision`: every deferred row already names an exact
later A page on current disk, and every out-of-scope row is a truthful
non-load-bearing boundary.

## Local repair

`research/frontier-30-batch-3.pages.json` had one illegal foreign B-page
dependency on current bytes:
`ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values`
depended on the published example-page item
`cor-x-sine-of-one-over-x-is-not-differentiable-at-zero`, whose home is
`trigonometric-and-oscillatory-examples-in-one-variable-examples`.

I removed that dependency. The retained example strategy already computes the
four Dini derivatives directly from quarter-turn sequences, so no new item, new
page, or page-order change was needed. After that repair, the merged-plan check
and the focused closure audit both report `0` foreign B-page deps.

## Pair verdicts

### `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` — `sufficient`

This pair is sufficient for authoring on current bytes: `26` A-page items and
`7` B-page items, so no split is owed.

The design/spec prerequisite mismatch recorded in the batch notes is nonfatal.
The live closure from
`the-maximal-function-and-lebesgue-differentiation-examples` still reaches the
retained MT-18 backbone, and the current scaffold keeps the two deliberate
monotone-a.e.-differentiability routes, the Vitali theorem, the mini-Vitali
null-set characterisation, Royden's third-route remark, the derivative-integral
inequality, the decomposition theorems, the BV consequence, and the Fubini
term-by-term differentiation tool.

The source stack is sufficient on the current bytes: `5/5` recorded sources are
fetch-verified, including the Riesz, Tao, Bass, BBT, and Thomson treatments the
page actually uses. The only concrete Step-3 defect was the repaired foreign
B-page dependency above; no missing result or source remains.

### `independence-borel-cantelli-and-zero-one-laws` — `sufficient`

This pair is sufficient for authoring on current bytes: `22` A-page items and
`6` B-page items, with no split owed.

The retained route is complete for PT-2: independence for event classes,
sigma-algebras, and random elements; the pi-system and grouping criteria; the
product-joint-law and expectation-factorisation consequences; the pairwise
independent Borel-Cantelli frequency law; and tail sigma-algebras with
Kolmogorov's zero-one law are all present.

The designed variance-additivity bridge is still covered honestly. Instead of
re-minting a weaker new corollary, the current scaffold cites the already
published stronger item
`cor-variance-adds-for-pairwise-independent-random-variables`, whose statement
already covers every finite pairwise-independent family. The six deferred source
rows all have exact later homes on current disk, and `3/3` recorded sources are
fetch-verified.

### `fejer-and-poisson-summability-of-fourier-series` — `sufficient`

This pair is sufficient for authoring on current bytes: `11` A-page items and
`5` B-page items, so no split is owed.

The retained FR-2 route is coherent and complete for authoring: the concrete
Cesaro and Abel means, Fejer and Poisson approximate-identity lemmas, `L^p`,
uniform, and Lebesgue-point convergence, the Cesaro-implies-Abel comparison,
the Fejer midpoint theorem, and the Gibbs theorem plus qualitative remark are
all present.

The out-of-scope maximal-function and PDE rows match the design rather than
leaving a gap. FR-2 explicitly avoids rebuilding the torus maximal-theorem
route and the disk Dirichlet-problem application, and the current closure from
the FR-1 examples page and the published measure-theory maximal-function page
reaches every retained dependency. The three recorded sources are all
fetch-verified.

## Outcome

All three owned A pages are sufficient for authoring on the current bytes:

- `differentiation-of-monotone-functions-and-the-vitali-covering-theorem`
- `independence-borel-cantelli-and-zero-one-laws`
- `fejer-and-poisson-summability-of-fourier-series`

`research/frontier-30-alpha-c-step3-verdicts.json` records all three pages as
`sufficient`.
