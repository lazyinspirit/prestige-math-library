# frontier-20 — Alpha group `a` — Step 3 scaffold review

Group `a` covers batches `1` and `2`: MT-6, MT-7, and MT-8. I read the current
`research/frontier-20-batch-{1,2}.pages.json`, `.coverage.json`, and `.notes.md`
artifacts against `research/plan-measure-theory-track.md` §§MT-6..MT-8, the live
`research/plan-spec.json`, and the current published dependencies on disk.

All three A pages are now **sufficient** for authoring on the current bytes.
One in-scope dependency seam on MT-7 was repaired during this review; the two
pending scope rows both close as `stands`.

| A page | batch | A items | verdict | notes |
|---|---|---:|---|---|
| `lebesgue-stieltjes-measures-and-distribution-functions` | 1 | 22 | **sufficient** | MT-6 route closes; Folland 1.19 exclusion stands |
| `measurable-functions-and-simple-approximation` | 1 | 28 | **sufficient** | one dependency repair applied (B1-1) |
| `the-lebesgue-integral-and-the-convergence-theorems` | 2 | 45 | **sufficient** | MT-8 route closes; Bass Cor. 8.3 deferral stands |

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| B1-1 | `measurable-functions-and-simple-approximation` | moderate | repaired in manifest |

### B1-1 — repaired: MT-7 carried a load-bearing dependency on a published `ai-generated` counterexample

`rem-zero-times-infinity-convention-for-pointwise-products` in
`research/frontier-20-batch-1.pages.json` depended on the published item
`cex-zero-times-infinity-indeterminate`, whose frontmatter carries
`provenance.statement: ai-generated`. That counterexample is explanatory, not a
logical prerequisite of the remark, so I removed it from the manifest and left
the remark dependent only on `def-extended-reals`. After that edit, the group's
external-dependency audit reports **54 external dep ids, no draft targets, and
no `ai-generated` statement dependencies**.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-20 --group a` produced
two pending rows; both are now resolved and
`node tools/scope-decisions.mjs check --run frontier-20 --group a` passes with
`0 error(s)`.

- MT-6 / Folland Theorem 1.19 (`measurable sets are G_delta or F_sigma modulo
  null sets`) — **`stands`**. The current MT-6 page stops at the Borel
  correspondence, interval formulas, regularity on `R`, Cantor measure, and the
  finite atomic-plus-atomless decomposition. The completed-domain approximation
  theorem is outside that boundary and no manifest item on MT-6 or its companion
  uses it.
- MT-8 / Bass Corollary 8.3 (`vanishing of every indefinite integral implies the
  integrand is 0 almost everywhere`) — **`stands`**. The live destination
  `the-lebesgue-and-riemann-integrals-compared` exists in `plan-spec.json` at
  order `288.017`, immediately after MT-8, and is the planned one-dimensional
  indefinite-integral seam page. MT-8 already harvests the measure-theoretic
  core through its zero-integral and almost-everywhere-equality items.

## Page review

### `lebesgue-stieltjes-measures-and-distribution-functions`

The page is mathematically shaped exactly as MT-6 requires: convention ledger,
half-open interval algebra, finite additivity, premeasure, Caratheodory
existence, uniqueness on `(a,b]`, reconstruction from measures finite on
compacta, the interval/jump formulas, regularity, Lebesgue measure as
`mu_id`, Cantor measure, and the finite atomic-plus-atomless decomposition. The
source stack is sufficient and independent: Folland §1.5 plus Hunter §2.9.

The only non-included harvest row is Folland's Theorem 1.19, and that is now a
reviewed `stands` exclusion rather than a missing prerequisite. The notes file
still contains an earlier DNS-blocker section, but the current coverage bytes
are the authoritative scaffold state and now carry `fetch_verified` stamps for
both MT-6 sources on Wednesday, August 26, 2026.

**Verdict: sufficient.**

### `measurable-functions-and-simple-approximation`

The MT-7 route also closes as designed: measurable-function definition, the
extended-real Borel codomain, threshold criteria, continuous/monotone/coordinate
measurability, composition with Borel maps, arithmetic and lattice closure, the
sequential sup/inf/limsup/liminf theorem, explicit simple approximation,
completion representatives, Doob-Dynkin, and the designed false-statement and
counterexample boundary markers. The source stack is adequate and independent:
Axler, Hunter, and the CUHK martingale notes.

The only actual closure defect I found on this page was B1-1, the load-bearing
dependency on a published `ai-generated` counterexample. That repair is already
present in the reviewed manifest, and no further scaffold defect remains.

**Verdict: sufficient.**

### `the-lebesgue-integral-and-the-convergence-theorems`

MT-8 is complete on theorem coverage. The manifest contains the full three-stage
route the design calls for: simple integral well-definedness and measure-valued
indefinite integrals; nonnegative integral, MCT, additivity, Beppo Levi,
density, Fatou, reverse Fatou, zero-integral / null-set consequences, and
Chebyshev-Markov; then signed/complex integration, linearity, triangle
inequality, DCT with `L^1` convergence, bounded convergence, density of simple
functions in `L^1`, absolute continuity of the integral, countable additivity of
the indefinite integral, continuity and differentiation under the integral sign,
and Jensen.

The one deferred row, Bass Corollary 8.3, has a live later home on MT-9 and is
properly recorded as such. Batch 2's notes still justify its four local
measurable-function preliminaries by an earlier state in which batch 1 had empty
item arrays; that note is stale on the current bytes, but it does **not** make
the scaffold insufficient. The current MT-8 preliminaries are narrow,
source-backed, and dependency-closed, so Step 5 can author from them without an
unresolved mathematical gap.

**Verdict: sufficient.**

## Mechanical checks on the current bytes

- `node tools/scope-decisions.mjs check --run frontier-20 --group a`
  — `scope-decisions: 2 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-20-batch-1.coverage.json research/frontier-20-batch-2.coverage.json`
  — `coverage-checklist: 3 page(s), 104 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-1.pages.json research/frontier-20-batch-2.pages.json`
  — `content-policy: 130 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  — passes on the current plan; only repository-wide `redundant-prereq`
  advisories remain.
- Local external-dependency audit over batches `1` and `2`
  — `deps-ok checked 54 external dep ids; no draft or ai-generated statement dependencies`.
