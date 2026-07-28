---
id: cex-nonnegative-integrable-with-zero-integral-need-not-vanish
kind: counterexample
title: "Thomae's function is nonnegative, Riemann integrable on $[0,1]$ with integral $0$, and nonzero at every rational, so a vanishing integral does not force a nonnegative integrand to vanish"
status: draft
origin: session
deps: [fs-nonnegative-integrable-with-zero-integral-vanishes, ex-thomae-is-riemann-integrable-with-integral-zero, def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, def-darboux-integral, def-canonical-natural, lem-of-naturals-positive, lem-q-and-irrationals-dense-r, def-interval, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
short: "zero integral, nonzero function"
proof_strategy: direct
verification:
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
pipeline_run: null
---

## Statement refuted

**Refuted:** that a nonnegative Riemann integrable function on $[a,b]$ with
$\int_a^b f = 0$ vanishes identically
([[fs-nonnegative-integrable-with-zero-integral-vanishes]],
[[def-darboux-integral]]).

The witness is Thomae's function $t$ on $[0,1]$
([[def-dirichlet-and-thomae-functions]]). It satisfies $0 \le t \le 1$, it is
Riemann integrable with $\int_0^1 t = 0$
([[ex-thomae-is-riemann-integrable-with-integral-zero]]), and it is **positive at
every rational point of $[0,1]$** — a dense set, and an infinite one. So the
failure is not at a single stray point: the function is nonzero on a dense
subset of the interval and the integral still vanishes.

**The repaired statement asks for continuity.** With $f$ continuous the
conclusion is true, and the reason is exactly what fails here: a continuous
function positive at one point is positive on a whole subinterval, whereas $t$ is
positive only on a set that contains no interval
([[lem-q-and-irrationals-dense-r]]). That repaired statement is not proved here,
since the additivity of the integral over subintervals is not available at this
point in the reading order.

## Facts & Assumptions

**Given:** Thomae's function $t : [0,1] \to \mathbb{R}$, with $t(x) = 1/\iota(q(x))$ at a rational $x$ of least denominator $q(x) \ge 1$ and $t(x) = 0$ at an irrational $x$ ([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]]).

[A1] The refuted claim: a nonnegative Riemann integrable function on a closed bounded interval with distinct endpoints whose integral is $0$ vanishes identically.

[L1] $0 \le t(x) \le 1$ for every $x \in [0,1]$, and $t(x) = 1/\iota(q(x)) > 0$ at every rational $x$, since $\iota(q(x)) \ge 1 > 0$ ([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L2] $t$ is Riemann integrable on $[0,1]$ and $\int_0^1 t = 0$ ([[ex-thomae-is-riemann-integrable-with-integral-zero]], [[def-darboux-integral]]).

[L3] $t$ is discontinuous at every rational point and continuous at every irrational point, so its discontinuity set in $[0,1]$ is $\mathbb{Q}\cap[0,1]$ ([[thm-dirichlet-and-thomae-continuity-sets]]).

[L4] $\mathbb{Q}$ is dense in $\mathbb{R}$, so every nonempty open interval contains a rational ([[lem-q-and-irrationals-dense-r]]).

[L5] Ordered-field arithmetic: $0 < 2^{-1} < 1$, so $2^{-1}$ lies in $[0,1]$ and is rational; the order is total and transitive ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 $t$ is nonnegative on $[0,1]$ by [L1], and it is Riemann integrable there with $\int_0^1 t = 0$ by [L2]; the interval $[0,1]$ has $0 < 1$ by [L5]. [given, L1, L2, L5]

1.2 $t$ does not vanish identically: $2^{-1}$ is a rational point of $[0,1]$ by [L5], so $t(2^{-1}) > 0$ by [L1]. [given, L1, L5]

2.1 The hypotheses of [A1] hold for $t$ on $[0,1]$ and its conclusion fails, so [A1] is refuted. [step 1.1, step 1.2, A1]

3.1 The failure is dense, not isolated: by [L4] every nonempty open subinterval of $[0,1]$ contains a rational, at which $t$ is positive by [L1]; so $\{\, x \in [0,1] : t(x) > 0 \,\}$ meets every subinterval of $[0,1]$ with distinct endpoints. It is also exactly the set of discontinuities of $t$, by [L3] and [L1]. [step 1.2, L1, L3, L4] ∎

## Remarks

- **What the integral measures, and what it does not.** $\int_0^1 t = 0$ says that the upper Darboux sums can be made arbitrarily small, not that $t$ is small anywhere in particular. The set where $t$ is positive is $\mathbb{Q}\cap[0,1]$, which is null ([[lem-countable-sets-are-null]]); by [[thm-lebesgue-criterion]] that is also exactly why $t$ is integrable at all.

- **Every upper Darboux sum is strictly positive.** Each subinterval contains a rational, so $M_i > 0$ for every $i$ and $U(t,P) > 0$ for every partition $P$; the upper integral is nevertheless $0$, an infimum of a set of positive numbers. Nothing is contradictory here, and it is the cleanest reminder that an infimum need not be attained.

- **The Dirichlet function is not available as a witness.** It is also nonnegative and nonzero on a dense set, but it is not integrable at all ([[cex-dirichlet-is-not-riemann-integrable]]), so it cannot satisfy the hypotheses of the refuted claim. Thomae's function is the standard witness precisely because it repairs integrability while keeping the dense positive set.
