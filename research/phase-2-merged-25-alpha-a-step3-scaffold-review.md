# Phase 2 catch-up 24 — alpha group a Step-3 scaffold review

- Run: `phase-2-catchup-24`
- Role/group: alpha / `a`
- Batches: `1`, `3`, `4`
- Scope: six A/B pairs, 124 owned items
- Verdict artifact: `research/phase-2-catchup-24-alpha-a-step3-verdicts.json`

## Verdict summary

| Batch | A/B pair | Verdict |
| --- | --- | --- |
| 1 | `measure-preserving-systems-and-mixing-criteria` | sufficient |
| 1 | `complex-riesz-thorin-endpoint-interpolation` | sufficient |
| 3 | `strong-laws-of-large-numbers` | insufficient |
| 3 | `weak-convergence-tightness-and-representation` | insufficient |
| 4 | `standard-borel-real-codings-and-determining-classes` | insufficient |
| 4 | `conditional-expectation` | insufficient |

The two sufficient verdicts cover both their A and B pages. The four insufficient verdicts are repairable without weakening or dropping any mathematics. Exact item-level repairs are in the verdict JSON and expanded below for the owning Betas.

## Batch 1: sufficient pairs

### Measure-preserving systems and mixing criteria

The A-page routes are structurally and mathematically closed: finite/sigma-finite uniqueness is restricted correctly; completion invariance is proved through representatives; the Koopman operator, invariant representatives and invariant-function characterization use the stated probability-preserving hypotheses; sweep-out and mixing implications have the correct directions; and the algebra/pi-system extension separates the actual finite-measure uniqueness input from page membership. The complex-correlation formulation uses the complex `L^2` convention already required by the page. The examples consume only established A-page interfaces. No item reaches the deferred set-theory catalogue.

### Complex Riesz–Thorin endpoint interpolation

The finite-support analytic family uses the correct complex powers and endpoint exponent arithmetic. The three-lines argument controls both boundary lines, and finite target localization gives an arbitrary measure-space proof before the extension step. Extension agreement invokes the countable-choice-bearing `L^p` completeness interface only where needed. In particular, this proof does not consume the defective published `thm-riesz-thorin-interpolation`; it builds the required endpoint result locally. Both B-page applications have adequate local inputs.

## Batch 3: repairs required

### Strong laws of large numbers

1. `lem-summability-of-truncated-normalized-variances` uses `ceil(t)` without `lem-integer-part`. `thm-etemadi-strong-law-for-pairwise-independent-iid-variables` uses `floor((1+1/r)^j)`, integer powers and a geometric-tail estimate without `lem-integer-part`, `def-integer-power` and `thm-geometric-series`. Add those direct deps and the coefficient bound following the nonnegative-sum interchange.

2. There is one published-proof blocker on an actual owned dependency path:

   `thm-finite-variance-logarithmic-rate-for-iid-sums`
   -> `thm-kolmogorov-strong-law-under-summable-normalized-variances`
   -> its stated logarithmic-rate summability clause.

   The published proof of that clause uses logarithms, arbitrary real powers, substitution and the integral of `u^(-1-2epsilon)` without the corresponding prerequisites. This is not unrelated page debt: the owned proof strategy cites the clause. Close it locally by grouping `2^k <= n < 2^(k+1)`, bounding a block by a constant multiple of `k^(-1-2epsilon)`, and applying `thm-p-series-real-exponents` and `thm-direct-comparison-test`. Declare `def-integer-power`, `thm-natural-logarithm-laws` and `thm-real-power-laws`, or exact equivalent earlier suppliers. The published theorem's unused `L^2`-completeness clause remains Phase-3 consumer debt and is not a supplier verdict issue here.

3. Three examples use undefined finite-law names: `ex-almost-sure-frequency-of-heads`, `ex-nonidentical-strong-law-under-summable-normalized-variances`, and `cex-identical-distribution-without-independence-can-defeat-the-mean-law`. Define the relevant Bernoulli/Rademacher laws inline and recompute their moments. `cex-weak-law-does-not-imply-strong-law` must either instantiate the uniform variable as the identity on the Lebesgue unit interval (with `thm-lebesgue-measure-of-a-box-of-every-kind`) or construct the varying two-point laws directly.

4. `ex-strong-law-estimator-of-an-integrable-mean` must construct the claimed density and prove its normalization, finite mean and infinite second moment from exact real-power/improper-integral suppliers. `cex-iid-strong-law-fails-at-infinite-absolute-mean` likewise needs a defined Cauchy probability law and exact inverse-tangent/rational improper-integral inputs for the proposed convolution computation. The latter proof need not calculate the single degenerate convolution point because equality almost everywhere is sufficient.

The main iid `L^1` law, truncation, subsequence argument, maximal ergodic lemma and local ergodic probability-case route otherwise check out. The stale historical MT-23 concern is superseded by the current local maximal/Birkhoff closure.

### Weak convergence, tightness and representation

1. `lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence` extends arbitrary grid interpolants by zero outside a cube. Unless their boundary values are zero, the result is discontinuous. Require zero boundary data or taper on a larger cube and prove density of the resulting countable subclass of `C_c(R^d)`.

2. `ex-weak-convergence-of-gaussian-laws-by-parameters` uses standard-normal and `N(m,sigma^2)` notation without an earlier definition or construction. The assigned probability design places `lem-normal-density-has-total-mass-one` and `def-standard-normal-and-normal-laws` on later PT-9 `central-limit-theorems`. Because a B page is a leaf and forward dependencies are forbidden, route a shared prose-scaffold/plan repair moving this example to `central-limit-theorems-examples` after those suppliers, or authorize equivalent suppliers in legal earlier proof order. The claim must not be dropped.

3. `cex-boundedness-of-first-moments-alone-does-not-give-uniform-integrability` invokes Markov but omits `cor-markov-inequality-for-random-variables`; add it or prove the explicit two-point tail bound. `ex-tightness-from-a-uniform-moment-bound` has Markov but needs exact Euclidean-norm and arbitrary-real-power measurability/monotonicity support (`lem-metrics-on-rn`, `def-real-power`, `thm-real-power-laws`, or exact equivalents).

4. `ex-quantile-coupling-on-the-real-line` assumes a uniform random variable and uses nullity of the countable discontinuity set. Instantiate the identity on the Lebesgue unit interval and add `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-countable-subsets-of-rn-are-lebesgue-null` and its `def-countable-choice` hypothesis, or provide a complete earlier local null-set argument.

5. `cex-a-nontight-sequence-with-no-probability-law-subsequence-limit` needs `thm-compact-subset-is-closed-and-bounded` (or `thm-heine-borel-rn`) for the compact-implies-bounded step.

The Prokhorov, Levy–Prokhorov metric, finite partition and Skorokhod representation routes otherwise match the stated hypotheses and directions.

## Batch 4: repairs required

### Standard Borel real codings and determining classes

1. `lem-hilbert-cube-has-a-bimeasurable-real-coding` uses floor, integer powers and a diagonal bijection `N^2 -> N`; add `lem-integer-part`, `def-integer-power` and `thm-n-cross-n-countable` (or exact equivalent coding support).

2. `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras` uses countability of all finite Boolean expressions over a countable family. Supply an explicit natural-number coding, or add `def-natural-number-coding-of-finite-sequences` and `thm-countable-union-of-countable` together with the exact choice hypothesis by which it is obtained.

3. `ex-euclidean-borel-spaces-are-standard-borel` uses the maximum coordinate metric and countability of finite powers of `Q`; add `lem-metrics-on-rn` and `thm-product-of-countable`. The proposed singleton treatment of `n=0` is adequate.

The explicit binary-row/canonical-expansion construction and Borel image/inverse proof otherwise avoid an illegitimate appeal to a later abstract standard-Borel isomorphism theorem.

### Conditional expectation

1. `cor-conditional-lp-contraction` uses conditional Jensen with `phi(t)=|t|^p` for arbitrary real `p >= 1`, but no prerequisite establishes measurability and convexity of this function. Add a new A-page lemma, for example the unused correctly prefixed `lem-absolute-real-powers-are-convex`, immediately before the contraction with exact real-power/calculus/convexity deps, then depend on it. This is an authorized new local prerequisite and keeps the A page below the 60-item limit.

2. `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula` explicitly uses known-variable conditioning on `U^2` but omits `lem-conditioning-a-known-variable-and-an-independent-variable`. Add the edge, or replace that step with a direct definition-and-uniqueness proof and its exact deps.

3. `cor-conditional-cauchy-schwarz-inequality` promotes nonnegativity of a quadratic from rational to real parameters. Add `lem-rat-embeds-dense`; polynomial continuity can be checked inline.

4. `cex-taking-out-an-unbounded-factor-needs-integrability` needs `def-integer-power` and `thm-geometric-series` for normalization and integrability. `ex-law-of-total-variance` should replace undefined Bernoulli shorthand by the explicit equally weighted four-atom law already contemplated by its proof strategy.

The Radon–Nikodym construction, class-valued uniqueness, tower/taking-out laws, conditional convergence results, support-line Jensen route, `L^2` projection and uniform-integrability route otherwise have the correct hypotheses and directions.

## Same-frontier dependency ledger

Batches 1 and 4 have no same-frontier inputs. Batch 3 has seven open input rows from `measure-preserving-systems-and-mixing-criteria`; all seven are genuine and verified:

- The maximal ergodic lemma uses the measurable probability-preserving transformation definition and invariant integrals to make the finite maxima integrable and cancel shifted integrals.
- The local Birkhoff ergodic theorem uses the invariant-integrals result in its `L^1` truncation step and the stated null/conull invariant-set characterization of ergodicity for the limiting invariant events.
- The coordinate-shift corollary uses the generating pi-system preservation criterion for the product cylinder calculation and the ergodicity definition after invariant events are shown to lie in the tail sigma-algebra.

Owning Beta for batch 3 should mark all seven rows `verified` with these item-level uses and refresh the aggregate ledger. This review does not edit the append-only batch ledger.

## Sources and dispositions

I independently read the relevant complete-text portions of the active treatments: Einsiedler–Ward and Sarig for ergodic systems; Teschl and Laugesen for interpolation; Durrett, Roch and van Gaans for strong laws; Durrett, van Gaans and the Vienna Advanced Probability notes for weak convergence; Durrett, Rao–Srivastava and Marker for standard Borel spaces; and Durrett plus van der Vaart for conditional expectation. The active coverage records contain two independent treatments per A page. There are no `source_resolution` drops or owner escalations in batches 1, 3 or 4.

All 34 deferred/out-of-scope rows were independently checked. Each deferred destination exists later in the assigned prose plan and the owned proof uses only the narrower local interface; each out-of-scope result is neither mapped nor load-bearing. Their Step-3 decisions are recorded as `stands` in `research/phase-2-catchup-24-alpha-a-scope-decisions.json`.

The coverage and notes files retain stale top-level blocker prose from before source stamping and plan population (notably batches 1 and 4 report unavailable stamps, and batch 3 reports unreconciled plan state). The underlying source records now validate. Betas should refresh those status summaries and hashes after implementing the mathematical repairs; stale prose alone did not change a mathematical verdict.

## Foundations boundary and consumer debt

No owned `requires`, `deps`, `justified_by` or load-bearing `forward_refs` path reaches `deferred-set-theory-beyond-choice` or an item recorded there. Deferred coverage results treat their destinations as future targets, never suppliers.

The published logarithmic-rate clause described above is a blocker only for `thm-finite-variance-logarithmic-rate-for-iid-sums`, whose proposed proof actually consumes it. The local dyadic supplement is the required reroute. The unrelated published `L^2`-completeness defect noted in the same strategy is not consumed and remains Phase-3 debt rather than a supplier failure.

## Checks

The following checks were run on the reviewed bytes:

- `node tools/scope-decisions.mjs check --run phase-2-catchup-24 --group a` — 34 current declines, 0 errors.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-1.pages.json research/phase-2-catchup-24-batch-3.pages.json research/phase-2-catchup-24-batch-4.pages.json --manifest-only` — 124 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-1.coverage.json research/phase-2-catchup-24-batch-3.coverage.json research/phase-2-catchup-24-batch-4.coverage.json --require-destination` — 6 pages, 226 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage /tmp/catchup24-step3-a.4nXngL/batch-1.coverage.json,/tmp/catchup24-step3-a.4nXngL/batch-3.coverage.json,/tmp/catchup24-step3-a.4nXngL/batch-4.coverage.json --stamp` on temporary copies — batch 1: 4/4 verified; batch 3: 5/5 verified; batch 4: 5/5 verified; 0 new stamps. Temporary copies avoided unauthorized coverage-file edits.
- `node tools/scaffold-verdicts.mjs --run phase-2-catchup-24` — 24/24 A pages reviewed across the run, 15 insufficient, 0 unreviewed.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json` — 691 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; declared page order acyclic and consistent, with no item-level cycles, forward references, B-page dependencies or unresolved IDs among the 960 pages carrying item lists. Its global report notes 659 planned pages whose item lists are not yet asserted.
- `node tools/extcheck.mjs --quiet` — exit 0; 57 pre-existing global `unproved-on-published` warnings, followed by `OK` for the recorded-not-proved policy check.
- Direct JSON artifact check — 6 verdicts, 34 scope decisions, 0 pending.
- `git diff --check --` on the three authorized output files — clean.

No batch scaffold, coverage, notes, plan, prose design, or cross-batch ledger file was edited by this reviewer.
