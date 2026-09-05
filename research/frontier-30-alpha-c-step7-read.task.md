# Step 7 whole-group reading — group **c**, run `frontier-30`

You are the group Alpha for batches **3**, **5**, **6**: 3 A/B pair(s), 6 page(s), 77 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

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
- `thm-increasing-functions-split-uniquely-as-jump-plus-continuous` · theorem — A nondecreasing function splits uniquely into a jump part and a continuous part
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

---

# Step 7 — group reading digest, `frontier-30`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
