---
id: ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set
kind: example
title: "For every $F_\\sigma$ subset $E$ of $[0,1]$ of measure zero there is a bounded Riemann integrable function on $[0,1]$ whose set of discontinuities is exactly $E$"
status: published
origin: session
deps: [thm-lebesgue-criterion, def-f-sigma-g-delta, def-measure-zero-and-content-zero, lem-nondegenerate-interval-is-not-null, def-continuity-real, def-classification-of-discontinuities, def-open-and-closed-in-r, def-neighbourhood-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-integer-power, lem-power-monotone, thm-well-ordering-principle, lem-finite-set-has-max, def-max-min, def-sequence, def-bounded-set, def-darboux-integral, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
short: "prescribed null $F_\\sigma$ discontinuity set"
proof_strategy: constructive
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Fsigma set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F%CF%83_set"
pipeline_run: null
---

## Example

Let $E \subseteq [0,1]$ be an $F_\sigma$ subset of $\mathbb{R}$
([[def-f-sigma-g-delta]]) of measure zero
([[def-measure-zero-and-content-zero]]). Then there is a bounded function
$h : [0,1] \to \mathbb{R}$, with values in $[0,1]$, that is Riemann integrable on
$[0,1]$ and whose set of discontinuities is **exactly** $E$
([[def-continuity-real]], [[def-classification-of-discontinuities]]).

**The construction.** Fix closed sets $F_0, F_1, F_2, \dots$ with
$E = \bigcup_{n \in \mathbb{N}} F_n$ and put

$$h(x) \;:=\; 2^{-n(x)} \ \text{ for } x \in E, \qquad h(x) \;:=\; 0 \ \text{ for } x \in [0,1]\setminus E,$$

where $n(x) := \min\{\, n \in \mathbb{N} : x \in F_n \,\}$ is the least index of a
closed set containing $x$ ([[thm-well-ordering-principle]]). Nothing is selected:
$n(x)$ is the least element of a set determined by $x$ and the fixed sequence
$(F_n)$.

**Why this is worth stating.** Together with
[[thm-discontinuity-set-is-f-sigma]], which shows that a discontinuity set is
always the trace of an $F_\sigma$ set, and with [[thm-lebesgue-criterion]], which
shows that an integrable function has a null discontinuity set, the example says
that the two necessary conditions are also **jointly sufficient**: null and
$F_\sigma$ is exactly what a discontinuity set of a Riemann integrable function
on $[0,1]$ can be. The Cantor set and any at most countable subset of $[0,1]$
are instances.

**Choice.** The construction uses none; the only choice principle in the
statement comes from the direction of [[thm-lebesgue-criterion]] used at the end,
and that direction, "null $\Rightarrow$ integrable", is a theorem of ZF.

## Facts & Assumptions

**Given:** An $F_\sigma$ set $E \subseteq [0,1]$ of measure zero, and a sequence $(F_n)_{n \in \mathbb{N}}$ of closed subsets of $\mathbb{R}$ with $E = \bigcup_n F_n$.

[L1] $E$ is a union of a sequence of closed sets ([[def-f-sigma-g-delta]], [[def-sequence]]).

[L2] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L3] A set $F$ is closed exactly when every point outside $F$ has a neighbourhood missing $F$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] $E$ has measure zero and a subset of a null set is null, so $E$ contains no interval with two distinct endpoints: such an interval would be null, contradicting [[lem-nondegenerate-interval-is-not-null]] ([[def-measure-zero-and-content-zero]]).

[L5] Powers: $2^{-n} > 0$ for every $n \in \mathbb{N}$, $2^{0} = 1$, $2^{-n} \le 1$, and $m < n$ implies $2^{-n} < 2^{-m}$ ([[def-integer-power]], [[lem-power-monotone]]).

[L6] Every nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $2^{-N} \le 1/\iota(N)$ for $N \ge 1$, since $\iota(N) \le 2^{N}$ by induction ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-power-monotone]]).

[L8] A bounded function on $[a,b]$ with $a < b$ whose set of discontinuities has measure zero is Riemann integrable, and that implication uses no choice principle ([[thm-lebesgue-criterion]], [[def-bounded-set]], [[def-darboux-integral]]).

[L9] Ordered-field arithmetic and the absolute value: the order is total and transitive; for $0 \le x \le 1$ and a real $\rho > 0$ the reals $u := \max\{0,x-\rho\}$ and $v := \min\{1,x+\rho\}$ satisfy $u < v$ and $(u,v) \subseteq N_\rho(x)\cap[0,1]$; a nonempty open interval is a nondegenerate interval ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-max-min]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]], [[def-neighbourhood-r]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** constructive.

1.1 Fix the sequence $(F_n)$ of [L1] and define $n(x) := \min\{\, n \in \mathbb{N} : x \in F_n \,\}$ for $x \in E$, which exists by [L2] since the set is a nonempty subset of $\mathbb{N}$; define $h : [0,1] \to \mathbb{R}$ by $h(x) := 2^{-n(x)}$ for $x \in E$ and $h(x) := 0$ otherwise. [given, L1, L2, L5, construct]

2.1 $h$ is bounded with values in $[0,1]$: $0 < 2^{-n(x)} \le 2^{0} = 1$ for $x \in E$ by [L5], and $h = 0$ off $E$. [step 1.1, L5]

2.2 **$h$ is discontinuous at every point of $E$.** Let $x \in E$, so $h(x) = 2^{-n(x)} > 0$ by [L5], and let a real $\rho > 0$ be given. By [L9] the interval $(u,v) \subseteq N_\rho(x)\cap[0,1]$ is nonempty with $u < v$, hence is a nondegenerate interval, so by [L4] it is not contained in $E$: there is $y \in (u,v)$ with $y \notin E$, and then $h(y) = 0$ and $|h(x)-h(y)| = 2^{-n(x)}$. So the continuity condition fails at $x$ for $\varepsilon := 2^{-n(x)}$. [step 1.1, L4, L5, L9]

2.3 **$h$ is continuous at every point of $[0,1]\setminus E$.** Let $x \in [0,1]$ with $x \notin E$, so $h(x) = 0$, and let a real $\varepsilon > 0$ be given. By [L7] fix a natural $N \ge 1$ with $2^{-N} \le 1/\iota(N) < \varepsilon$. For each $n \le N$ one has $x \notin F_n$, since $F_n \subseteq E$, so [L3] supplies a real $\rho_n > 0$ with $N_{\rho_n}(x) \cap F_n = \varnothing$; put $\rho := \min\{\rho_0,\dots,\rho_N\} > 0$, which exists by [L6]. [step 1.1, L3, L6, L7, L9, choose]

3.1 For $y \in [0,1]$ with $|y - x| < \rho$: if $y \notin E$ then $h(y) = 0$; and if $y \in E$ then $y \notin F_n$ for every $n \le N$ by step 2.3, so $n(y) > N$ and $h(y) = 2^{-n(y)} < 2^{-N} < \varepsilon$ by [L5] and step 2.3. In both cases $|h(y) - h(x)| = h(y) < \varepsilon$, so $h$ is continuous at $x$. [step 1.1, step 2.3, L5, L9]

4.1 By steps 2.2 and 3.1 the set of discontinuities of $h$ in $[0,1]$ is exactly $E$, which has measure zero by hypothesis; $h$ is bounded by step 2.1 and $0 < 1$, so [L8] gives that $h$ is Riemann integrable on $[0,1]$. The function $h$ constructed in step 1.1 therefore has all the stated properties. [step 2.1, step 2.2, step 3.1, given, L8, discharge-construct] ∎

## Remarks

- **Where each hypothesis on $E$ is used.** That $E$ is $F_\sigma$ is what makes the exhaustion $(F_n)$ available and hence gives continuity off $E$ in step 3.1; that $E$ is null is used twice, once through [L4] to force discontinuity **on** $E$, and once at the end through [[thm-lebesgue-criterion]]. Dropping either hypothesis breaks the example, and by [[thm-discontinuity-set-is-f-sigma]] and [[thm-lebesgue-criterion]] neither can be dropped from the conclusion either.

- **The values $2^{-n}$ are a convenience.** Any sequence of positive reals tending to $0$ would do in their place; what the proof needs is that the value at a point of $F_n \setminus (F_0 \cup \dots \cup F_{n-1})$ is small when $n$ is large, and that it is never $0$ on $E$.

- **Two familiar instances.** Taking $E$ at most countable recovers a function continuous exactly off a prescribed countable set, of which Thomae's function is the case $E = \mathbb{Q}\cap[0,1]$ in spirit though not in formula ([[ex-thomae-is-riemann-integrable-with-integral-zero]]); taking $E$ to be the Cantor set recovers a function of the type of [[ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero]], the Cantor set being closed, hence $F_\sigma$, and null.

- **No analogue holds without nullity.** The Smith-Volterra-Cantor set is closed, hence $F_\sigma$, and it is the discontinuity set of its own indicator, which is **not** integrable ([[cex-indicator-of-a-fat-cantor-set-is-not-integrable]]). So the $F_\sigma$ condition alone buys nothing.
