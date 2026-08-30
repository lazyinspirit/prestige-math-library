# frontier-25 · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `2`, `3`, and `9` in
`research/frontier-25-alpha-groups.json`: the four A pages
`the-moore-penrose-pseudoinverse-and-regularised-least-squares`,
`eigenvalue-iterations-and-the-qr-algorithm`,
`the-radon-nikodym-theorem-and-lebesgue-decomposition`, and
`rank-theorems-and-embedded-submanifolds`.

For each owned A/B pair I read the current:

- `research/frontier-25-batch-{2,3,9}.pages.json`
- `research/frontier-25-batch-{2,3,9}.coverage.json`
- `research/frontier-25-batch-{2,3,9}.notes.md`
- `research/plan-spec.json`
- the controlling design sections in
  `research/plan-algebra-track-expansion-v2.md`,
  `research/plan-measure-theory-track.md`,
  `research/plan-functional-analysis-track.md`,
  `research/plan-probability-track.md`, and
  `research/plan-differential-geometry-track.md`

Checks run on Sunday, August 30, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-25 --group b`
  - initial result: `scope-decisions: b: 13 decline(s), 13 pending`
- `node tools/scope-decisions.mjs check --run frontier-25 --group b`
  - final result: `scope-decisions: 13 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-2.coverage.json research/frontier-25-batch-3.coverage.json research/frontier-25-batch-9.coverage.json --require-destination`
  - result: `coverage-checklist: 4 page(s), 130 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-2.pages.json research/frontier-25-batch-3.pages.json research/frontier-25-batch-9.pages.json`
  - result: `content-policy: 135 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs /private/tmp/frontier-25-alpha-b-spliced-plan.json`
  - result: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 548 page(s) with item lists.`
- focused published-home closure audit over the four owned A pages after splicing the current batch manifests into the live plan
  - result: `0` hidden prerequisites, `0` forward refs, `0` foreign B-page deps, `0` unresolved deps

The temporary spliced plan at `/private/tmp/frontier-25-alpha-b-spliced-plan.json`
was built by replacing the frontier-25 seed entries for batches `2`, `3`, and
`9` inside `research/plan-spec.json` with the live batch manifests.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | 2 | 17 | 9 | **sufficient** | no repair needed |
| `eigenvalue-iterations-and-the-qr-algorithm` | 2 | 20 | 9 | **sufficient** | sufficient after direct repair |
| `the-radon-nikodym-theorem-and-lebesgue-decomposition` | 3 | 20 | 15 | **sufficient** | sufficient after direct repair; design-vs-spec prerequisite note only |
| `rank-theorems-and-embedded-submanifolds` | 9 | 37 | 8 | **sufficient** | seam-aware RC-2 routing already closes |

No split is owed: the four A-page counts are `17`, `20`, `20`, and `37`, all
below the Step-3 ceiling of `60`.

## Scope receipt

`research/frontier-25-alpha-b-scope-decisions.json` is current. All `13`
decline rows now resolve as `stands`.

That outcome is credible on the current August 30, 2026 bytes:

- batch `2` keeps LA-18 and LA-19 on the design's exact route: projection
  geometry before least squares, unshifted Tikhonov only, explicit QR
  convergence hypotheses, and residual-based stopping. The Stanford and MIT
  omitted sections are genuine enrichments outside the current page scope, not
  missing load-bearing bridges.
- batch `3` keeps MT-13 on the scalar Lebesgue-decomposition and
  Radon-Nikodym spine named by the measure-track design. The deferred
  conditional-expectation row has an exact later destination
  `conditional-expectation`, and the remaining Bass/Axler omissions are
  non-load-bearing enrichments or later versions/functional-analytic packaging.
- batch `9` reflects the DG-4 seam amendment already in force: Euclidean
  regular-level-set examples move to RC-2, the intrinsic derivative remains on
  DG-3, and the remaining Merry quotient corollary still lies outside the
  current embedded-submanifold route.

No pending row requires `owner-decision`: every current deferment already has
an exact destination on disk, and every current out-of-scope row is a
non-load-bearing exclusion consistent with the controlling design and the live
manifest route.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| B2-1 | `eigenvalue-iterations-and-the-qr-algorithm` | high | repaired in manifest |
| B3-1 | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | high | repaired in manifest |

### B2-1 — repaired: the Hermitian power-iteration rate proposition cited a later same-page item

`research/frontier-25-batch-2.pages.json` had
`prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration`
before
`prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient`,
even though the former depended on the latter.

That was not harmless ordering noise: the spliced-plan validation failed with an
`[intra-order]` error on the current bytes. I repaired the scaffold by moving
the Hermitian stationary-point proposition ahead of the power-iteration rate
proposition inside the eigenvalue A-page manifest. After that repair, the
spliced-plan audit reports no same-page order defect in batch `2`.

### B3-1 — repaired: the counting-measure counterexample depended on a foreign B page

`research/frontier-25-batch-3.pages.json` had
`cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness`
depending on the published example
`ex-counting-measure-integral-is-a-series`, which is homed on the earlier
examples page `the-lebesgue-integral-and-the-convergence-theorems-examples`.

That violated the B-page leaf rule and made the spliced-plan validation fail
with a `[b-leaf]` error. I repaired the counterexample by rewriting its
strategy to a singleton-mass contradiction and replacing the foreign B-page
dependency with the A-page suppliers `def-measure-with-density` and
`prop-the-nonnegative-integral-agrees-with-the-simple-integral`. After that
repair, the companion page is again a leaf on the current bytes.

## Page review

### `the-moore-penrose-pseudoinverse-and-regularised-least-squares`

This pair is sufficient on the current bytes. The A-page spine still matches
LA-18's design-critical route: pseudoinverse definition and uniqueness,
projection geometry, image/kernel identities, least-squares minimisers,
reduced-QR formulas, spectral regularisation, and the fixed-rank continuity /
rank-loss discontinuity boundary. The current source stack is enough for
authoring, and the omitted Stanford material is still outside that chosen route
rather than a missing theorem the scaffold now spends.

**Verdict:** sufficient.

### `eigenvalue-iterations-and-the-qr-algorithm`

This pair is sufficient after B2-1. The scaffold keeps every convergence
hypothesis explicit, limits Rayleigh-quotient iteration to the local Hermitian
cubic theorem, and states the unshifted-QR theorem with the separated-modulus
and leading-minor hypotheses instead of overclaiming general convergence. The
omitted MIT stability section remains a true later numerical analysis branch,
not a hidden dependency of the exact-iteration page.

**Verdict:** sufficient.

### `the-radon-nikodym-theorem-and-lebesgue-decomposition`

This pair is sufficient after B3-1. The current A page preserves the
three-theorem split the design requires, includes the derivative calculus and
the real-line three-part decomposition theorem, and keeps the Hilbert-space
proof as a non-load-bearing orientation remark only. The measure-track design
still disagrees with the live spec on the page-level prerequisite list, but the
current manifest closes through the live plan: the spliced-plan audit found no
hidden prerequisite, forward edge, or foreign B-page dependency.

**Verdict:** sufficient.

### `rank-theorems-and-embedded-submanifolds`

This pair is sufficient on the current bytes. The scaffold is already
seam-aware: it cites RC-1 and RC-2 for the Euclidean base case, keeps the
manifold transport and embedded-submanifold theory on DG-4, and routes the
regular-level-set stock examples away from this page to avoid duplication. The
current manifest already includes the live spec's RC-2 prerequisite, the DG-3
derivative material is correctly inherited rather than re-homed, and the
replacement injective-immersion counterexample avoids introducing the
irrational-orbit closure theorem missing from current page scope.

**Verdict:** sufficient.

## Outcome

All four owned A pages are sufficient for authoring on the current August 30,
2026 bytes:

- `the-moore-penrose-pseudoinverse-and-regularised-least-squares`
- `eigenvalue-iterations-and-the-qr-algorithm`
- `the-radon-nikodym-theorem-and-lebesgue-decomposition`
- `rank-theorems-and-embedded-submanifolds`
