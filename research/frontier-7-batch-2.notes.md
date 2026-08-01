# Frontier-7 batch 2 — Steps 1–2 scaffold notes (Beta-frontier7-2, 2026-08-01)

Scope: `the-logarithm-and-general-powers` (A+B) and
`sine-cosine-and-the-definition-of-pi` (A+B). The page objects are in
`research/frontier-7-batch-2.pages.json`; the durable authoring obligations are
in `research/frontier-7-batch-2.proof-contracts.json`.

This batch deliberately has exactly two A/B pairs. Both A pages require only
the already-published `the-exponential-function` pair. Neither pair cites the
other, any other frontier-7 pair, or any item on an examples page outside its
own pair.

## 1. Prose-scaffold amendments

### 1.1 Correct and sharpen RA-27

**File:** `research/plan-realanalysis-pages.md`

**Section:** the paragraph beginning `**RA-27 The Logarithm, General Powers,
and the Sup Definition**`.

**Old text:**

```text
log as exp inverse; **E4**: L(x) = int_1^x dt/t is well defined (integer powers
only, so no circularity), strictly increasing, L' = 1/x, L(xy) = L(x) + L(y),
bijective onto R, and its inverse solves y' = y, so E4 = E3. **E7** Rudin's
sup-over-rationals a^x = sup{a^q : q rational, q < x} and **E8** Tao's
limit-over-rationals (DISTINCT constructions, both needing RA-13's dense-extension
theorem). **E10** Landau's log x = lim 2^n (x^{1/n} - 1), with no integral and no
series.
```

**New text:**

```text
log as the inverse of the already-built exp; prove that this equals
L(x) = int_1^x dt/t by comparing derivatives and the value at 1. **E7**: for
a > 1 define the rational-supremum power by
sup{a^q : q rational, q < x}; define the 0 < a < 1 case through the reciprocal
base, and a = 1 separately. (The unqualified supremum formula is false for
0 < a < 1 because that set is unbounded above.) Prove this construction equals
exp(x log a). **E8**: every rational sequence q_n -> x has a^{q_n} -> a^x,
independently of the sequence. **E10** (Landau root limit):
log x = lim_{n->infinity} 2^n (x^{1/2^n} - 1), with no integral or log series.
```

This edit corrects two potentially fatal scaffold statements. First, the old
supremum formula does not work below base one. Second, its displayed Landau
formula had exponent `1/n` but multiplier `2^n`; except at `x=1` that sequence
does not have the asserted limit. The intended dyadic root is `1/2^n`.

### 1.2 Bind the signed infinite-product theorem precisely

**File:** `research/plan-realanalysis-pages.md`

**Section:** the level-9 inheritance note beneath RA-27.

**Edit:** append after the sentence ending `do not restate the log-free bounds.`

```text
Under this library's definition, finitely many zero factors are allowed: if
p_n = -1 at an initial index, the product may converge with value 0. Therefore
the signed criterion is stated with no artificial hypothesis p_n != -1 for
every n. From sum p_n^2 < infinity one gets p_n -> 0, hence eventually
1+p_n > 0; apply log only on that tail and use
log(1+t) = t + O(t^2). Tail invariance then proves both directions and handles
all finite initial factors exactly as `def-infinite-product` requires.
```

### 1.3 Do not import the unbuilt general convexity page

**File:** `research/plan-realanalysis-pages.md`

**Section:** RA-27, sentence containing `convexity of exp and hence AM-GM`.

**Old text:**

```text
convexity of exp and hence AM-GM, **Young, Holder, Minkowski**
```

**New text:**

```text
the explicit two-point inequality
exp((1-t)x+ty) <= (1-t)exp(x)+t exp(y), 0 <= t <= 1, proved directly by
one-variable calculus without citing the later general convexity page; hence
weighted AM-GM for real weights, and **Young, Holder, Minkowski** for real
exponents
```

This preserves the intended mathematics while avoiding a dependency on the
separately in-flight `convexity` pair.

### 1.4 Bind the analytic definition of pi

**File:** `research/plan-realanalysis-pages.md`

**Section:** RA-28.

**Edit:** append immediately after the sentence ending `tan, cot, sec, csc.`

```text
The proof order is binding: establish sin/cos series convergence and
derivatives; prove uniqueness for y''=-y by the constant energy of the
difference; obtain the addition formulas; use the alternating bounds
sin x >= x-x^3/6 > 0 on (0,2] and cos 2 <= -1/3; define gamma as the unique
zero of cos in (0,2), then pi := 2 gamma. Reconcile the alternative first-sine-
zero convention only after the shift formulas show sin x > 0 on (0,pi) and
sin pi = 0. The limit sin x/x = 1 is then the derivative of sin at zero; the
sector-area argument remains only a false-statement/refutation item.
```

### 1.5 Discharge the owed forward-reference seam

This exact edit cannot be applied until the two target items exist at Step 5;
it changes a published orientation remark and must therefore go through the
published-dependency/impact audit rather than being silently applied at Step 1.

**File:** `items/rem-classical-oscillator-is-sine-of-one-over-x.md`

**Frontmatter edit:** insert after `justified_by: []`:

```yaml
forward_refs: [cex-sine-of-one-over-x-has-no-limit-at-zero, ex-x-sine-of-one-over-x-tends-to-zero]
```

**Body section:** `## Why sin is not available here`

**Old text:** the entire section, from `This library has not defined` through
`declared in forward_refs as the schema requires.`

**New text:**

```markdown
## The later analytic construction

This library now constructs sine and cosine from their power series, proves
their differential and addition laws, and defines pi from the first positive
zero of cosine. The promised classical examples are
[[cex-sine-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-sine-of-one-over-x-tends-to-zero]]. They occur later in the reading
order, so both links are orientation-only forward references declared in this
item's `forward_refs`; no proof on this earlier page depends on them.
```

**Body section:** `## What is genuinely lost, and what is not`, final paragraph.

**Old text:**

```text
Those phenomena are not in scope here, and when they come into scope they will
be stated with sin, on the page that defines it.
```

**New text:**

```text
Those phenomena are not in scope on this earlier page; the forward-linked
analytic examples state them with sine on the later page that defines it.
```

## 2. Authoring-time proof and boundary notes

### 2.1 Logarithm and powers

- `def-natural-logarithm` is the inverse of the published bijection
  `exp: R -> (0,infinity)`. Do not rebuild exp and do not initially define log
  by an integral.
- `thm-logarithm-derivative-and-integral` proves the integral formula by showing
  both functions have derivative `1/x` and value zero at one. This avoids any
  circular use of logarithm laws in constructing log.
- `def-real-power` defines `a^x=exp(x log a)` for `a>0`, and adds only the
  standard supplementary convention `0^x=0` for `x>0`. In the derivative
  `d(x^alpha)/dx = alpha x^(alpha-1)`, state `x>0`. Do not define `0^0`, a
  zero base to a negative exponent, or negative-base irrational powers.
- The rational-supremum construction uses a supremum only for `a>1`. Its
  nonempty/bounded proof uses rational density, rational power monotonicity,
  and an integer rational bound. The reciprocal convention handles `0<a<1`.
- Landau's proof is the substitution `h_n=(log x)/2^n` into
  `(exp h-1)/h -> 1`. Treat `x=1` separately before dividing by `log x`.
- The log series is asserted on `(-1,1]`, not at `-1`. Its endpoint `x=1`
  requires both ordinary alternating-series convergence and Abel's theorem.
- In the signed infinite-product criterion, square summability makes the
  factors positive only eventually. All logarithms and estimates are on that
  tail. The library definition permits finitely many earlier zero factors, so
  the proof must preserve rather than erase them.
- `thm-p-series-real-exponents` covers every real `p`. For `p<=0` use the
  necessary term-to-zero condition; for `p>0` use the integral test, with
  `p=1` handled by log and `p!=1` by the real-power antiderivative.
- `thm-exponential-two-point-convexity` states the inequality explicitly and
  proves it with derivatives/MVT. It must not cite or define the general
  notion from the separately in-flight convexity page.
- Weighted AM-GM requires a nonempty finite family, nonnegative weights summing
  to one, and nonnegative entries; define its geometric side as the product
  over indices of **positive** weight, so a zero-weight zero entry never creates
  `0^0`. Prove the positive-entry case first and dispatch positive-weight zero
  entries separately. Young/Hölder/Minkowski must explicitly
  handle empty finite sums and zero normalising factors before division.
- Hyperbolic domains are exact: tanh and sech on all reals; coth and csch only
  away from zero; arcosh on `[1,infinity)`, artanh on `(-1,1)`, and arsinh on
  all reals. Check the signs of square-root and logarithm arguments.

### 2.2 Sine, cosine, and pi

- The convergence lemma precedes any appeal to the power-series differentiation
  theorem. The derivative theorem verifies the reindexing and the values
  `sin 0=0`, `cos 0=1` explicitly.
- ODE uniqueness is elementary: the difference of two solutions has
  derivative zero for `h^2+(h')^2`, whose initial value is zero. No external ODE
  theorem is permitted.
- For `0<x<=2`, alternating-series estimates give
  `sin x >= x-x^3/6 >= x/3 > 0`; they also give `cos 2 <= -1/3`. With
  `cos'=-sin`, cosine is strictly decreasing on `[0,2]`; IVT then gives a unique
  zero there and hence the smallest positive zero.
- Do not assume the first sine zero in defining pi. First define
  `pi=2 gamma`, obtain quarter-turn shifts from the addition formulas, and only
  then prove that pi is the first positive sine zero.
- The zero-set and least-period theorem must prove minimality, not merely show
  that `2pi` is a period. Reduce arbitrary reals by `lem-integer-part` and use
  the already-established signs on a fundamental interval.
- The four quotient functions state their domains using the exact sine/cosine
  zero sets. Derivative identities are asserted only where the quotients are
  defined.
- The Bartle-Sherbert bound uses strict alternating estimates:
  `cos(sqrt 2)>0` and, for `a=sqrt(6-2sqrt 3)`,
  `cos a < 1-a^2/2+a^4/24=0`. Then perform exact rational squaring for the
  decimal bounds; do not appeal to numerical approximation.
- For `sin(1/x)`, use two explicit positive sequences tending to zero on which
  sine is `1` and `-1`. For `x sin(1/x)`, use `|sin|<=1` and squeeze.
- The sector-area false statement does not deny the true limit. It refutes the
  claim that the geometric squeeze is logically independent of a prior
  calibration of angle measure/sector area to the analytic pi.

## 3. Authorship and source ledger

No item in this batch is planned as `ai-generated`. Definitions below are
faithful literature definitions (`literature-derived`). Every other item is an
established/documented result or classical example but will receive a newly
authored local proof or refutation, so its expected tag is `ai-altered`, not
`literature-derived`.

| Planned item | Expected authorship | Literature/source rationale |
|---|---|---|
| `def-natural-logarithm` | `literature-derived` | inverse-exp definition; Lebl §8.2 |
| `thm-natural-logarithm-laws` | `ai-altered` | classical laws; Lebl §8.2 |
| `thm-logarithm-derivative-and-integral` | `ai-altered` | inverse derivative/integral equivalence; Lebl §8.2 and the equivalence paper below |
| `def-real-power` | `literature-derived` | `a^x=exp(x log a)`; Lebl §8.2 |
| `thm-real-power-agrees-with-rational-exponent` | `ai-altered` | standard compatibility theorem; Lebl §8.2 |
| `thm-real-power-laws` | `ai-altered` | standard real exponent laws; Lebl §8.2 |
| `thm-real-power-continuity-and-derivatives` | `ai-altered` | standard calculus; Lebl §8.2 |
| `def-logarithm-to-a-base` | `literature-derived` | change-of-base definition; Lebl §8.2 |
| `thm-logarithm-change-of-base` | `ai-altered` | standard change-of-base/inverse result; Lebl §8.2 |
| `def-real-power-by-rational-supremum` | `literature-derived` | classical Dedekind/Rudin construction; Lebl §1.2 records the base-dependent convention |
| `thm-rational-supremum-power-agrees-with-exp` | `ai-altered` | equivalence of standard constructions; Lebl §§1.2, 8.2 |
| `cor-real-power-as-rational-limit` | `ai-altered` | standard continuity/density consequence; Lebl §§1.2, 8.2 |
| `thm-landau-logarithm-limit` | `ai-altered` | documented general root limit; dyadic form is its subsequence |
| `thm-log-one-plus-x-power-series` | `ai-altered` | classical log series and Abel endpoint; Lebl §8.2 / MIT notes |
| `thm-signed-infinite-product-square-summability-criterion` | `ai-altered` | classical log-product criterion; Williams notes and local definition |
| `thm-logarithm-slower-than-every-positive-power` | `ai-altered` | standard growth hierarchy; Lebl §8.2 |
| `thm-p-series-real-exponents` | `ai-altered` | standard integral-test theorem; MIT notes |
| `thm-exponential-two-point-convexity` | `ai-altered` | standard exponential convexity inequality; MIT notes |
| `thm-weighted-am-gm-real` | `ai-altered` | classical weighted AM-GM; UT Austin notes |
| `thm-young-inequality-real-exponents` | `ai-altered` | classical Young inequality; UT Austin notes |
| `thm-holder-finite-real-exponents` | `ai-altered` | classical Holder inequality; UT Austin notes |
| `thm-minkowski-finite-real-exponents` | `ai-altered` | classical Minkowski inequality; UT Austin notes |
| `def-hyperbolic-functions` | `literature-derived` | DLMF §§4.28, 4.35 |
| `thm-hyperbolic-identities-and-derivatives` | `ai-altered` | DLMF §§4.28, 4.35 |
| `thm-inverse-hyperbolic-logarithm-formulas` | `ai-altered` | DLMF inverse hyperbolic functions |
| `ex-two-to-sqrt-two-by-two-real-power-constructions` | `ai-altered` | direct check of two standard constructions |
| `ex-alternating-harmonic-series-sums-to-log-two` | `ai-altered` | standard endpoint specialization of log series |
| `ex-logarithmic-and-exponential-growth-comparisons` | `ai-altered` | standard growth examples |
| `ex-x-to-x-tends-to-one` | `ai-altered` | standard indeterminate-form example |
| `cex-log-one-plus-x-series-at-minus-one` | `ai-altered` | standard harmonic-series endpoint failure |
| `cex-logarithm-not-uniformly-continuous-on-positive-reals` | `ai-altered` | standard sequence-pair counterexample |
| `def-sine-and-cosine-by-power-series` | `literature-derived` | DLMF §4.19; Vienna notes |
| `lem-sine-and-cosine-series-converge-everywhere` | `ai-altered` | standard ratio-test proof; Vienna notes |
| `thm-sine-and-cosine-derivatives` | `ai-altered` | DLMF §4.23; Vienna notes |
| `thm-harmonic-oscillator-initial-value-characterization` | `ai-altered` | standard analytic characterization; UPenn notes |
| `thm-sine-and-cosine-addition-formulas` | `ai-altered` | DLMF §4.21; UPenn notes |
| `cor-trigonometric-parity-and-pythagorean-identity` | `ai-altered` | DLMF §4.21; Vienna notes |
| `lem-sine-positive-and-cosine-decreasing-on-zero-two` | `ai-altered` | exact alternating-bound route; Vienna notes p. 85 |
| `thm-cosine-has-a-smallest-positive-zero` | `ai-altered` | analytic pi construction; Vienna notes p. 85 |
| `def-pi-via-first-positive-cosine-zero` | `literature-derived` | analytic definition; Vienna notes p. 85 |
| `thm-quarter-turn-values-and-shift-formulas` | `ai-altered` | DLMF §4.21; Vienna notes |
| `cor-pi-is-the-first-positive-sine-zero` | `ai-altered` | standard reconciliation of conventions; Vienna notes |
| `thm-sine-cosine-zero-sets-and-fundamental-period` | `ai-altered` | DLMF §4.21; Vienna notes |
| `thm-sine-cosine-signs-monotonicity-and-ranges` | `ai-altered` | standard real-trig theorem; Vienna notes |
| `def-tangent-cotangent-secant-cosecant` | `literature-derived` | DLMF Chapter 4 |
| `thm-tangent-cotangent-secant-cosecant-derivatives-and-periods` | `ai-altered` | DLMF §§4.20–4.23 |
| `cor-sin-x-over-x-limit` | `ai-altered` | immediate analytic derivative consequence; Vienna notes |
| `ex-bartle-sherbert-bounds-for-pi` | `ai-altered` | Bartle-Sherbert exercise named in the scaffold; alternating proof independently checked |
| `cex-sine-of-one-over-x-has-no-limit-at-zero` | `ai-altered` | classical oscillator counterexample |
| `ex-x-sine-of-one-over-x-tends-to-zero` | `ai-altered` | classical squeeze example |
| `ex-x-squared-sine-of-one-over-x-is-differentiable` | `ai-altered` | classical differentiability/not-C1 example |
| `fs-sin-x-over-x-by-sector-areas` | `ai-altered` | logical circularity analyzed in arXiv:1302.1167 |

Authoring must give each item at least one of the exact URLs below in
`sources.references`; definitions should use the source closest to the exact
definition, while proof-bearing items may cite more than one.

## 4. Web research ledger

- Jiri Lebl, *Basic Analysis I*, logarithm/exponential and real powers:
  https://www.jirka.org/ra/html/sec_logandexp.html
- Jiri Lebl, *Basic Analysis I*, real numbers and rational-supremum powers:
  https://www.jirka.org/ra/html/sec_setofreals.html
- MIT OpenCourseWare, *18.100B Real Analysis* lecture notes:
  https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf
- Henry Ricardo, *The Equivalence of Definitions of the Natural Logarithm
  Function* (records `ln x = lim n(x^(1/n)-1)`; the dyadic form is a
  subsequence):
  https://www.tandfonline.com/doi/abs/10.1080/07468342.2022.2039553
- UT Austin real-analysis lecture notes (Young, Holder, Minkowski):
  https://web.ma.utexas.edu/users/lpbowen/m381c/lecture-notes.pdf
- Williams College classical-analysis notes (infinite products/log criterion):
  https://web.williams.edu/Mathematics/sjmiller/public_html/383Fa23/383Fa23_lectures.pdf
- NIST DLMF Chapter 4 and the addition-identity section:
  https://dlmf.nist.gov/4 and https://dlmf.nist.gov/4.21
- NIST DLMF hyperbolic identities:
  https://dlmf.nist.gov/4.35
- University of Vienna, *Introduction to Analysis* (analytic trig construction;
  the exact `cos 2 <= -1/3` route appears around p. 85):
  https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf
- University of Pennsylvania, *Advanced Analysis: Trigonometry*:
  https://www2.math.upenn.edu/~gressman/analysis/06-trigonometry.html
- *Essential Trigonometry Without Geometry*:
  https://meridian.allenpress.com/tjs/article/71/1/Article%2010/443947/ESSENTIAL-TRIGONOMETRY-WITHOUT-GEOMETRY
- Robert Bartle and Donald Sherbert, *Introduction to Real Analysis*:
  https://books.google.com/books/about/Introduction_to_Real_Analysis.html?id=YawbAAAAQBAJ
- Helmut Zeisel, *lim_(x->0) sin(x)/x and the definition of pi*:
  https://arxiv.org/abs/1302.1167

No external dependency fallback is proposed. The sources document statements;
all proofs are locally achievable from published dependencies.

## 5. Dependency closure and legacy authorship triage

Every external item named in the manifest was opened from disk and is
`status: published`. Every plan-homed dependency is on a page earlier than
order 177. Five published bootstrap items have no plan home
(`def-complete-ordered-field`, `lem-of-abs-value`, `lem-rat-embeds-dense`,
`thm-induction-principle`, and `thm-of-square-roots`); `depsource` treats these
as published rather than planned/homeless dependencies. None of the external
items carries an authorship tag, so all are honestly treated as
`legacy-unclassified` rather than guessed to be literature-derived. Beta's
permitted route for missing tags was applied as follows:

- exponential/log/power-series claims were source-checked against Lebl, MIT,
  DLMF, Vienna, and UPenn;
- calculus claims (inverse derivative, FTC, chain/MVT, power-series operations,
  integral test) were source-checked against Lebl/MIT and inspected on disk for
  exact statement fit;
- real-order, rational-density, finite-sum, and limit primitives were inspected
  on disk and accepted as established textbook results from existing model
  knowledge, with no deviation from their statements;
- Young/Holder/Minkowski and infinite-product routes were source-checked against
  the UT Austin and Williams notes, then aligned to the library's exact finite-
  sum and tail-product conventions.

No direct dependency was found to contain an obvious mathematical falsehood,
so this batch requests no published-dependency repair. The only published edit
requested is the already-owed orientation/forward-reference seam in §1.5.

## 6. Collision, order, and forward-reference report

- Candidate ids were searched across `items/`, `research/plan-spec.json`, and
  all existing research JSON manifests before writing. No collision or
  equivalent pre-existing statement was found.
- External dependency audit: every external id resolves to a published file;
  no unresolved, draft-page, planned-later, or homeless dependency remains.
- Same-page ordering: every dependency on a new item points to an earlier item
  on the same A page, or from a B item to its own A page/an earlier B item.
- Cross-pair dependency: none between the logarithm and trigonometric pairs.
- New `deps` forward references: none.
- Orientation-only forward references introduced by the coordinated published
  amendment: `rem-classical-oscillator-is-sine-of-one-over-x` points forward to
  `cex-sine-of-one-over-x-has-no-limit-at-zero` and
  `ex-x-sine-of-one-over-x-tends-to-zero`. They are not proof dependencies.

## 7. Richness and generated-claim minimization

The logarithm A page decomposes the construction into inverse-logarithm,
integral equivalence, two independent real-power constructions, series/growth,
real-exponent inequalities, and hyperbolic functions. Its B page supplies
construction agreement, endpoint, growth, limiting, and uniform-continuity
tests. The trigonometric A page follows the full analytic chain from convergent
series through derivatives, ODE uniqueness, addition identities, zero
existence, pi, periods, ranges, and quotient functions. Its B page supplies
quantitative pi bounds, two oscillator behaviours, a differentiable/non-C1
example, and the sector-area logical trap.

No theorem, definition, proposition, false statement, or remark was invented.
The one lemma-shaped decomposition item on the logarithm-free trig route and
the convergence lemma are both documented standard results and are therefore
`ai-altered`, not `ai-generated`. There is no generated dependency and no
load-bearing generated claim.

## 8. Step-5 authoring completion and exact-change ledger

All 52 authored items carry `authorship: ai-altered`: each has a
source-backed, established statement, while its local exposition, proof,
verification, or refutation was authored in this batch. No item is tagged
`ai-generated`, and no in-flight or published dependency is tagged as a new
source of mathematical authority. Every item retains one or more of the exact
URLs in §4 in `sources.references` and has `sources.scraped: []`.

The Step-5 text implements the proof routes in §2. The following changes from
the Step-1 contract are material and are recorded for Alpha's later audit:

- `thm-rational-supremum-power-agrees-with-exp` now cites the logarithm order
  law and strict increase of exponential, so the needed strict monotonicity of
  $t\mapsto a^t$ is an explicit dependency rather than an unstated inference.
- `thm-log-one-plus-x-power-series` now cites `thm-p-series-rational` for the
  negative harmonic divergence at $x=-1$; the alternating-series theorem is
  used only for the $x=1$ endpoint.
- `thm-hyperbolic-identities-and-derivatives` now proves the ranges needed by
  the inverse-function page, using exponential limits and the intermediate
  value theorem. `thm-inverse-hyperbolic-logarithm-formulas` cites those
  resulting bijections exactly.
- `thm-quarter-turn-values-and-shift-formulas` now declares
  `thm-cosine-has-a-smallest-positive-zero`, which its first fact directly
  uses.
- `thm-exponential-two-point-convexity` now declares and cites the chain rule
  for the derivative of $\exp(sd)$; finite-derivative algebra alone does not
  supply that composition rule.
- `thm-weighted-am-gm-real` defines the induction product before the
  two-point inequality uses it. The Young, Holder, and Minkowski items now
  distinguish positive-base power laws from the zero-base convention, and the
  Holder zero-norm case explicitly uses the finite nonnegative-sum argument.
- `ex-bartle-sherbert-bounds-for-pi` performs the final comparisons with exact
  rational squares, while its statement retains the traditional decimal
  bounds. This avoids treating decimal literals as proof-step identifiers in
  the proof-contract checker.
- Canonical phase normalization was applied to every proof. The normalization
  briefly removed section headings, which were restored as `Proof`,
  `Verification`, `Counterexample`, or `Refutation` before contract and render
  validation.

The exact source/step map in `frontier-7-batch-2.proof-contracts.json` was
regenerated from the authored facts and numbered steps. It covers all 44
proof-bearing items, records every cited local source with an exact source
excerpt, and leaves `risk_review` pending for Alpha. No judgment or audit call
was made by Beta.

## 9. Step-5 mechanical gate record

- `tools/reflow.mts`: unchanged on all 44 proof-bearing files.
- `tools/precheck.mts`: 44/44 pass.
- `tools/proof-contract.mjs --strict`: 44/44 pass, zero errors and warnings.
- `tools/content-policy.mjs research/frontier-7-batch-2.pages.json`: 52 scoped
  items, zero errors and warnings.
- `tools/prosecheck.mjs --warnings`: 48 authored item/page files, zero errors
  and warnings.
- `tools/rendercheck.mjs`: 48 authored item/page files parse cleanly under the
  real KaTeX renderer.
- `tools/fwdcheck.mjs`: clean globally, with no new forward references.
- `tools/depcheck.mjs`, `tools/extcheck.mjs`, and `tools/citecheck.mjs` show no
  diagnostic naming this batch. Their nonzero global diagnostics are preexisting
  or concurrent work outside the Step-5 ownership scope: YAML escapes in the
  normal-subgroups batch and three graph-definition `unproved-kind` entries,
  plus the library-wide existing citation-attribution warnings.
