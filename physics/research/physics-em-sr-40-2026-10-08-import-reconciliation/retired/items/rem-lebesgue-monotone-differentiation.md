---
id: rem-lebesgue-monotone-differentiation
kind: remark
title: "Lebesgue's differentiation theorem for monotone functions"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral, rem-vitali-covering-theorem]
justified_by: []
forward_refs: []
aliases: [rem-monotone-differentiable-ae]
landmark: true
short: "A monotone function on an interval is differentiable almost everywhere"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Lebesgue's theorem on the differentiability of monotone functions (Wikipedia, Monotonic function)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "B. S. Thomson, Vitali coverings and Lebesgue's differentiation theorem, Real Anal. Exchange 29 (2003/04) 957-973"
      url: "https://classicalrealanalysis.info/documents/Thomson-RAE2003-euclid.rae.1149698567.pdf"
    - title: "Bounded variation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_variation"
    - title: "C. Heil, Absolute continuity and the Banach-Zaretsky theorem, Corollary 6"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Statement

Let $F : [a,b] \to \mathbb{R}$ be monotone. Then $F$ is differentiable at almost
every point of $[a,b]$, the derivative $F'$ is measurable, and if $F$ is
increasing then

$$\int_a^b F' \, d\lambda \le F(b) - F(a),$$

with equality precisely when $F$ is absolutely continuous. The same conclusion
holds for every
$F$ of bounded variation, since such an $F$ is a difference of two increasing
functions.

The inequality is genuinely an inequality. The Cantor function
$c : [0,1] \to [0,1]$ is continuous and increasing with $c' = 0$ almost
everywhere, so $\int_0^1 c' \, d\lambda = 0 < 1 = c(1) - c(0)$.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** The Vitali covering theorem
([[rem-vitali-covering-theorem]]) applied to the sets where the upper and lower
Dini derivates differ, or the rising sun lemma route, or the mini-Vitali route
through growth lemmas; all three need Lebesgue outer measure as a measure, not
just the elementary null sets. The inequality
$\int_a^b F' \le F(b) - F(a)$ then follows from Fatou's lemma
([[rem-fatou-lemma]]) applied to the difference quotients
$n\,(F(x + 1/n) - F(x))$.

**The equality case.** Equality
$\int_a^b F' \, d\lambda = F(b) - F(a)$ holds for an increasing $F$ exactly when
$F$ is absolutely continuous in the sense of
[[rem-absolutely-continuous-function]], which is the content of
[[rem-ftc-absolutely-continuous]]. The gap between the two sides is carried by
the singular part of $F$, and the Cantor function is the case where the singular
part is everything.

**Which page it serves.** The monotone functions and discontinuities page, which
proves that a monotone function has at most countably many discontinuities and
therefore is continuous almost everywhere, and then stops. Differentiability
almost everywhere is the next statement in every classical treatment and cannot
be reached from the elementary theory. It is also what allows the Cantor function
counterexample to be stated at full strength on the Cantor set page: not merely
"$c' = 0$ off a null set", which is elementary, but "$c$ is one of the monotone
functions to which Lebesgue's theorem applies, and it saturates the inequality
in the wrong direction".

**A naming warning.** The phrase "Lebesgue differentiation theorem" is used for
two different results. In the classical one-variable literature, including
Thomson's article cited above, it names the theorem stated here, that monotone
functions are almost everywhere differentiable. In the $L^1$ and harmonic
analysis literature it names the averaging statement recorded separately as
[[rem-lebesgue-differentiation-theorem]]. Neither is proved here, and this
library keeps them under distinct names.
