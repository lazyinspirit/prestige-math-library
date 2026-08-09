---
id: ex-thomae-is-riemann-integrable-with-integral-zero
kind: example
title: "Thomae's function is Riemann integrable on $[0,1]$ with integral $0$: it is continuous at every irrational, so its discontinuity set is countable, and every lower Darboux sum is $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, cor-countably-many-discontinuities-integrable, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, thm-rationals-countable, lem-subset-of-countable, def-countable, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-continuity-real, lem-finite-sum-laws, def-finite-sum, def-interval, def-bounded-set, def-infimum, def-max-min, def-canonical-natural, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$\\int_0^1 t = 0$ for Thomae"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "MAT 125B Discussion 3 (UC Davis)"
      url: "https://www.math.ucdavis.edu/~gravner/MAT125B/materials/disc3.pdf"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Example

Let $t : [0,1] \to \mathbb{R}$ be Thomae's function restricted to $[0,1]$: at a
rational $x$ with least denominator $q(x) \ge 1$ it takes the value
$1/\iota(q(x))$, and at an irrational $x$ the value $0$
([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]]). Then $t$ is
Riemann integrable on $[0,1]$ and

$$\int_0^1 t \;=\; 0 .$$

**Two ingredients, and they pull in opposite directions.** $t$ is continuous at
every irrational and discontinuous at every rational
([[thm-dirichlet-and-thomae-continuity-sets]]), so its discontinuity set is
$\mathbb{Q}\cap[0,1]$, which is infinite and dense — and countable, which is what
[[cor-countably-many-discontinuities-integrable]] needs. The value is then read
off the lower sums, every one of which is $0$ because every subinterval contains
an irrational ([[lem-q-and-irrationals-dense-r]]).

Every **upper** sum, by contrast, is strictly positive, since every subinterval
contains a rational; the upper integral is nevertheless $0$, an infimum of
positive numbers.

## Facts & Assumptions

**Given:** Thomae's function $t : [0,1] \to \mathbb{R}$ as above.

[L1] $t(x) = 1/\iota(q(x))$ with $\iota(q(x)) \ge 1 > 0$ at a rational $x$, and $t(x) = 0$ at an irrational $x$; hence $0 \le t(x) \le 1$ everywhere and $t(x) > 0$ at every rational $x$ ([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] Thomae's function on $\mathbb{R}$ is continuous at every irrational and discontinuous at every rational ([[thm-dirichlet-and-thomae-continuity-sets]]); a restriction is continuous at every point of the smaller domain at which the original is continuous, the same $\delta$ serving a condition quantified over fewer points ([[def-continuity-real]]).

[L3] $\mathbb{Q}$ is countably infinite and every subset of an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

[L4] A bounded function on $[a,b]$ with $a < b$ whose set of discontinuities is at most countable is Riemann integrable ([[cor-countably-many-discontinuities-integrable]], [[def-bounded-set]]).

[L5] The irrationals are dense in $\mathbb{R}$, so every nonempty open interval contains an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L6] For a partition $P = (n,s)$ of $[0,1]$: $n \ge 1$, $s_i < s_{i+1}$, $\Delta_i > 0$, $I_i = [s_i,s_{i+1}] \subseteq [0,1]$, and $(s_i,s_{i+1})$ is a nonempty open interval ([[def-partition-and-refinement]], [[def-interval]]).

[L7] $m_i = \inf t[I_i]$, $L(t,P) = \sum_{i<n}m_i\Delta_i$, $\underline{\int_0^1}t$ is the supremum of the lower sums and $\overline{\int_0^1}t$ the infimum of the upper sums, and the integral is their common value when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L8] A set with a least element has it as its infimum; the supremum of $\{0\}$ is $0$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L9] Finite sums: $\sum_{i<n}0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L10] Ordered-field arithmetic: the order is total and transitive, and a reciprocal of a positive quantity is positive ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 $t$ is bounded on $[0,1]$, with $0 \le t(x) \le 1$ for every $x$, by [L1]. [given, L1, L10]

1.2 By [L2], $t$ is continuous at every irrational point of $[0,1]$, so its set of discontinuities in $[0,1]$ is contained in $\mathbb{Q}\cap[0,1]$, which is at most countable by [L3]; a subset of it is then at most countable as well. [given, L2, L3]

2.1 By [L4] applied on $[0,1]$, with $0 < 1$, $t$ is Riemann integrable on $[0,1]$. [step 1.1, step 1.2, L4]

2.2 **Every lower sum is $0$.** Let $P = (n,s)$ be a partition of $[0,1]$ and $i < n$. By [L6] the interval $(s_i,s_{i+1})$ is nonempty and open, so by [L5] it contains an irrational $y$, and $y \in I_i \subseteq [0,1]$, so $t(y) = 0$ by [L1]. Since $t \ge 0$ by [L1], the value $0$ is the least element of $t[I_i]$ and $m_i = 0$ by [L8]. Hence $L(t,P) = 0$ by [L7] and [L9]. [step 1.1, L1, L5, L6, L7, L8, L9]

3.1 The set of lower sums is therefore $\{0\}$ and $\underline{\int_0^1}t = 0$ by [L8]; since $t$ is integrable by step 2.1, $\int_0^1 t = 0$ by [L7]. [step 2.1, step 2.2, L7, L8] ∎

## Remarks

- **The discontinuity set is dense and the function is still integrable.** $\mathbb{Q}\cap[0,1]$ meets every subinterval of $[0,1]$, so no partition isolates the bad points; what saves the function is that the set is countable, hence null ([[lem-countable-sets-are-null]]). This is the cleanest witness that "small" for integrability means small in measure and not small in category or in closure.

- **The same function refutes a plausible converse.** $t$ is nonnegative, integrable with integral $0$, and positive at every rational, so a vanishing integral does not force a nonnegative integrand to vanish ([[cex-nonnegative-integrable-with-zero-integral-need-not-vanish]], [[fs-nonnegative-integrable-with-zero-integral-vanishes]]).

- **Contrast with the Dirichlet function.** $\mathbf{1}_{\mathbb{Q}}$ is discontinuous everywhere and not integrable ([[cex-dirichlet-is-not-riemann-integrable]]), yet it is nonzero at exactly the same points as $t$. Only the values differ, and they differ in a way that makes $t$ continuous at every irrational; that is the whole of the difference.
