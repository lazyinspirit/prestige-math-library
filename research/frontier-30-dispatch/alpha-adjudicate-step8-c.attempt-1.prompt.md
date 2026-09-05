# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-30-alpha-groups.json` is the assignment: it permits at
most eight groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-30
role: alpha-adjudicate
label: step8-c
covers: 3, 5, 6

# Step 8 adjudication — group **c**, run `frontier-30`

You are the group Alpha for batches **3**, **5**, **6**: 3 A/B pair(s), 6 page(s), 77 item(s), 27 open rejection(s) over 27 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-30-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | A | measure-theory | 288.035 | `the-maximal-function-and-lebesgue-differentiation-examples` |
| 3 | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples` | B | measure-theory | 288.036 | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` |
| 5 | `independence-borel-cantelli-and-zero-one-laws` | A | probability | 288.099 | `probability-spaces-random-variables-and-expectation-examples` |
| 5 | `independence-borel-cantelli-and-zero-one-laws-examples` | B | probability | 288.1 | `independence-borel-cantelli-and-zero-one-laws` |
| 6 | `fejer-and-poisson-summability-of-fourier-series` | A | fourier-analysis | 288.14006 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples`, `the-maximal-function-and-lebesgue-differentiation` |
| 6 | `fejer-and-poisson-summability-of-fourier-series-examples` | B | fourier-analysis | 288.14008 | `fejer-and-poisson-summability-of-fourier-series` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` — Differentiation of Monotone Functions and the Vitali Covering Theorem (26 item(s))

- `def-four-dini-derivatives-at-a-point` · definition — The four Dini derivatives of a real function at a point
- `thm-dini-derivatives-exist-are-ordered-and-detect-differentiability` · theorem — The four Dini derivatives always exist in the extended reals, satisfy the one-sided order inequalities, and detect finite differentiability
- `rem-dini-derivatives-specialise-the-published-derivative` · remark — The Dini-derivative criterion is the extended-real shadow of the library's finite derivative convention
- `def-vitali-cover-and-fine-cover-on-the-line` · definition — Vitali covers and fine covers on the real line by closed intervals
- `thm-riesz-rising-sun-lemma` · theorem — Riesz's rising sun lemma with the correct endpoint conclusion
- `thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions` · theorem — One-sided Hardy-Littlewood inequalities for the Dini derivatives of a continuous monotone function
- `thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun` · theorem — A continuous monotone function is differentiable almost everywhere by the rising-sun route
- `def-jump-function-of-an-increasing-function` · definition — The jump function of an increasing function on a compact interval
- `thm-increasing-functions-split-uniquely-as-jump-plus-continuous` · theorem — An increasing function splits uniquely as jump part plus continuous part
- `thm-jump-functions-have-derivative-zero-almost-everywhere` · theorem — A jump function has derivative zero almost everywhere
- `thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun` · theorem — A monotone function is differentiable almost everywhere by the rising-sun route
- `thm-vitali-covering-theorem-for-fine-covers-on-the-line` · theorem — The Vitali covering theorem for fine covers on the real line
- `thm-mini-vitali-fine-cover-characterisation-of-null-sets` · theorem — A set is null exactly when every fine cover has arbitrarily cheap countable subcovers
- `thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures` · theorem — A monotone function is differentiable almost everywhere by the Lebesgue-Stieltjes route
- `thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase` · theorem — For an increasing function, the derivative is measurable and integrable and its integral is bounded by the total increase
- `def-singular-function` · definition — A singular function on a compact interval
- `thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous` · theorem — A right-continuous increasing function splits uniquely as absolutely continuous plus jump plus singular continuous
- `thm-bv-functions-are-differentiable-almost-everywhere` · theorem — Every function of bounded variation is differentiable almost everywhere
- `thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions` · theorem — Fubini's theorem on term-by-term differentiation for pointwise sums of increasing functions
- `rem-roydens-vitali-route-is-a-third-proof` · remark — Royden's classical Vitali-covering proof is a third route and is not run on this page
- `fs-every-continuous-function-is-differentiable-almost-everywhere` · false-statement — FALSE: every continuous function is differentiable almost everywhere
- `fs-every-increasing-function-satisfies-newton-leibniz` · false-statement — FALSE: every increasing function satisfies Newton-Leibniz with its derivative
- `fs-vitali-covering-theorem-holds-for-arbitrary-covers` · false-statement — FALSE: the Vitali covering theorem holds for arbitrary covers
- `fs-zero-derivative-almost-everywhere-implies-constancy` · false-statement — FALSE: derivative zero almost everywhere implies constancy
- `fs-bounded-variation-implies-absolute-continuity` · false-statement — FALSE: every function of bounded variation is absolutely continuous
- `fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points` · false-statement — FALSE: a monotone function has at most countably many points of non-differentiability

### `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples` — Differentiation of Monotone Functions and the Vitali Covering Theorem — Examples (7 item(s))

- `ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one` · example — The Cantor function has derivative 0 almost everywhere, is not differentiable on the Cantor set, and still rises from 0 to 1
- `ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere` · example — A pure jump function can have dense discontinuities and derivative 0 almost everywhere
- `ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series` · example — A strictly increasing singular function from a dense series of scaled Cantor functions
- `ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values` · example — The four Dini derivatives of x sin(1/x) at 0 are all distinct
- `ex-jump-and-continuous-parts-of-x-plus-rational-jumps` · example — The function x plus summable rational jumps decomposes as its continuous part x and its jump part
- `cex-vitali-covering-theorem-needs-a-fine-cover` · counterexample — The fine-cover hypothesis in the Vitali covering theorem is load-bearing
- `ex-a-bv-function-with-a-jump-is-differentiable-almost-everywhere` · example — A BV function can fail continuity at one point and still be differentiable almost everywhere

### `independence-borel-cantelli-and-zero-one-laws` — Independence Borel Cantelli and Zero One Laws (22 item(s))

- `def-independent-families-of-event-classes` · definition — Independent families of event classes
- `def-independent-sigma-algebras-and-events` · definition — Independent sigma-algebras and independent events
- `def-pairwise-independence` · definition — Pairwise independence
- `lem-independent-families-pass-to-subfamilies` · lemma — Independent families pass to subfamilies
- `lem-independent-events-remain-independent-under-complements` · lemma — Independent events remain independent under complements
- `thm-pi-system-criterion-for-independent-sigma-algebras` · theorem — Independent pi-systems generate independent sigma-algebras
- `thm-grouping-independent-sigma-algebras` · theorem — Disjoint groups of an independent sigma-algebra family remain independent
- `def-independent-random-elements` · definition — Independent random elements
- `thm-rectangle-criterion-for-independent-random-elements` · theorem — Independent random elements are characterized by finite rectangle probabilities
- `cor-finite-random-variable-independence-agreement` · corollary — The general rectangle criterion agrees with the published finite random-variable definition
- `lem-measurable-functions-preserve-independence` · lemma — Measurable coordinatewise functions preserve independence
- `thm-independent-random-elements-have-product-joint-law` · theorem — Independent random elements have product joint law
- `thm-factorization-of-expectations-for-independent-variables` · theorem — Expectations factor over finite products of independent random variables
- `cor-covariance-vanishes-under-independence` · corollary — Independence forces covariance to vanish
- `def-limsup-and-infinitely-often-event` · definition — Limsup and the infinitely often event
- `cor-first-borel-cantelli-lemma-for-events` · corollary — First Borel-Cantelli lemma for events
- `thm-pairwise-independent-borel-cantelli-frequency-law` · theorem — Pairwise-independent Borel-Cantelli frequency law
- `cor-second-borel-cantelli-lemma-under-pairwise-independence` · corollary — Second Borel-Cantelli lemma under pairwise independence
- `def-tail-sigma-algebra-of-a-sequence` · definition — Tail sigma-algebra of a sequence
- `lem-tail-events-are-independent-of-every-finite-initial-sigma-algebra` · lemma — Tail events are independent of every finite initial sigma-algebra
- `thm-kolmogorov-zero-one-law` · theorem — Kolmogorov zero-one law
- `cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event` · corollary — Almost-sure convergence of an independent series is a zero-one event

### `independence-borel-cantelli-and-zero-one-laws-examples` — Independence Borel Cantelli and Zero One Laws - Examples (6 item(s))

- `ex-independent-events-that-are-not-disjoint` · example — Independent events need not be disjoint
- `ex-functions-of-disjoint-independent-coordinate-blocks` · example — Functions of disjoint independent coordinate blocks remain independent
- `ex-borel-cantelli-eventually-no-large-deviations` · example — A summable tail bound becomes an almost-sure eventual bound
- `ex-zero-one-law-for-convergence-of-a-random-series` · example — Convergence of an independent random series is a zero-one event
- `cex-divergent-probability-sum-without-independence` · counterexample — A divergent probability sum does not force infinitely many occurrences without independence
- `cex-independent-events-need-not-be-closed-under-unions-of-overlapping-pairs` · counterexample — Unions of overlapping independent events need not remain independent

### `fejer-and-poisson-summability-of-fourier-series` — Fejer and Poisson Summability of Fourier Series (11 item(s))

- `def-cesaro-and-abel-means-of-a-fourier-series` · definition — Cesaro and Abel means of a Fourier series
- `lem-fejer-kernel-is-a-positive-approximate-identity` · lemma — The Fejer kernel is a positive approximate identity
- `thm-fejer-convergence-in-lp` · theorem — Fejer means converge in L^p for 1 <= p < infinity
- `thm-fejer-uniform-convergence-for-continuous-periodic-functions` · theorem — Fejer means converge uniformly for continuous periodic functions
- `thm-fejer-means-converge-at-lebesgue-points` · theorem — Fejer means converge at Lebesgue points
- `lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity` · lemma — The Poisson kernel on the circle is a positive approximate identity
- `thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points` · theorem — Abel means converge in L^p, uniformly, and at Lebesgue points
- `thm-cesaro-summability-implies-abel-summability` · theorem — Cesaro summability implies Abel summability
- `thm-fejer-theorem-for-pointwise-midpoint-values` · theorem — Fejer means converge to midpoint values at jumps
- `thm-gibbs-overshoot-at-a-piecewise-c-one-jump` · theorem — Gibbs overshoot at a piecewise C^1 jump
- `rem-gibbs-phenomenon` · remark — Gibbs phenomenon

### `fejer-and-poisson-summability-of-fourier-series-examples` — Fejer and Poisson Summability of Fourier Series — Examples (5 item(s))

- `ex-fejer-means-of-a-single-character` · example — Fejer means of a single character
- `ex-poisson-integral-of-a-single-character` · example — Poisson integral of a single character
- `ex-fejer-summation-of-the-square-wave` · example — Fejer summation of the square wave
- `cex-fejer-means-need-not-converge-uniformly-for-discontinuous-data` · counterexample — Fejer means need not converge uniformly for discontinuous data
- `cex-abel-summability-does-not-imply-ordinary-convergence` · counterexample — Abel summability does not imply ordinary convergence

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cor-second-borel-cantelli-lemma-under-pairwise-independence` | `independence-borel-cantelli-and-zero-one-laws` | gpt-5.6-terra | `050c78df129c84dc31e83f73b77d460b99d032011dc2dc52794990d0c24d51f6` |
| `def-four-dini-derivatives-at-a-point` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `7f48dedfc544a333f98468334f26f3fabb06b29b847bc1a04fc20ba31b6fbcf4` |
| `def-jump-function-of-an-increasing-function` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `107b5f5fb99a4842851e734299470b117bbba4cd7ce410580986c425bc498d81` |
| `def-vitali-cover-and-fine-cover-on-the-line` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `a3199e4706cdfb7dcbc8feebe45ef9a5ce6f2dfbb2a54036a9abc37cd2106e79` |
| `ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples` | gpt-5.6-terra | `cba0f10c6fe1c64532c3558559c3be9be22b42b2c43fbadcdf044021250e001d` |
| `ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples` | gpt-5.6-terra | `277137afec9a09f5e19438358c5a9bc55987459c7bde79f1e64dae04119b6ee2` |
| `ex-jump-and-continuous-parts-of-x-plus-rational-jumps` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples` | gpt-5.6-terra | `2e26d3587da140bd8841eb8065f666c99a5668c70950dc5e82faddd3534c88d6` |
| `ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples` | gpt-5.6-terra | `71f50ff4969212a1d423a4bd27a7459162dd220abb434310644973bcf0c867f9` |
| `ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples` | gpt-5.6-terra | `04cf4c96ec685b56e285f417844d06c02a19e427a523ff7a370b69e86538b8ae` |
| `ex-zero-one-law-for-convergence-of-a-random-series` | `independence-borel-cantelli-and-zero-one-laws-examples` | gpt-5.6-terra | `f8f24706675cb6566841e6ade5e3c10474c3ea5423ef3a0dbf1b0bdf6528ab01` |
| `fs-bounded-variation-implies-absolute-continuity` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `65402c057f13c3e64c4c0acb0d2baa64fc988cca6d6bb7ffb0eca421ae4219bb` |
| `fs-every-increasing-function-satisfies-newton-leibniz` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `b3e83d360705870c60ead8ba4764c510ab12f2c90dcea667b8cb15789f02a212` |
| `rem-dini-derivatives-specialise-the-published-derivative` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `ad5bdffe94a5a683b12ac89d369176c6bd0f356680b83e69fbbf199eeebb3717` |
| `rem-gibbs-phenomenon` | `fejer-and-poisson-summability-of-fourier-series` | gpt-5.6-terra | `5a8686d366c1acad615fadbfd0775837e0e62f2f077420a5b35f17917e713d96` |
| `thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `3d74584071da9c6dbe81ff98cbbeeaa00524b6da3be86c930c6518fe8b7dca74` |
| `thm-factorization-of-expectations-for-independent-variables` | `independence-borel-cantelli-and-zero-one-laws` | gpt-5.6-terra | `4477170e8c61b7364f9687f624341ab8f07d4679a4f5a01d77dc4e86afb69b66` |
| `thm-gibbs-overshoot-at-a-piecewise-c-one-jump` | `fejer-and-poisson-summability-of-fourier-series` | gpt-5.6-terra | `ae288b53cf7309883127311d47d6491cba0fb832265fe0a01118db0e766630e5` |
| `thm-increasing-functions-split-uniquely-as-jump-plus-continuous` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `293b52245b02c36fc03aa2a78357c639d15799ec3b3c364885508786c085f27a` |
| `thm-independent-random-elements-have-product-joint-law` | `independence-borel-cantelli-and-zero-one-laws` | gpt-5.6-terra | `67a3b86f9ab19d75274da9aa443c11ef400aac40971875a03db99493a2ce96d0` |
| `thm-jump-functions-have-derivative-zero-almost-everywhere` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `109bafde17711c9749b5b10724c5784ca3be1d411ac593fbac13aab2241d9a06` |
| `thm-mini-vitali-fine-cover-characterisation-of-null-sets` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `24948a4fc64df075c4e400cc5ac980dd260ca82dad57c0c1199c00255a2aca2c` |
| `thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `72cb22c3fe77ebb990aa757af8012ae27f647a3a14eeb142c281873c7a87a17a` |
| `thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `41d3628a967594ecaa804462498436e980f5ec14fc0a49154068b5c5f520e1c4` |
| `thm-riesz-rising-sun-lemma` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `a636776a3715a9535a3d79b60e7522941aa3927338393c24ca2b7f2d432e0612` |
| `thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `59996addf81baa3ecca2fd5247a3004e8bf05ccd1050a6883553d0ea7d1da64b` |
| `thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `72abaa7d088875f7fcb060b6a08c4ac2a22f622bbd2b45445071aba5b3d0ae8d` |
| `thm-vitali-covering-theorem-for-fine-covers-on-the-line` | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem` | gpt-5.6-terra | `ea44d5af24a6c83073d7cbb997d2194e05797989c59a6377fe6cecc712a6a4a2` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-30`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-30-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-30-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-30-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-30-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
