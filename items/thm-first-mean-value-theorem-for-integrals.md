---
id: thm-first-mean-value-theorem-for-integrals
kind: theorem
title: "If $f$ is continuous on $[a,b]$ and $g$ is integrable with $g \\ge 0$, there is $\\xi \\in [a,b]$ with $\\int_a^b fg = f(\\xi)\\int_a^b g$"
status: draft
origin: session
deps: [thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-linearity-of-the-integral, thm-extreme-value-r, cor-continuous-image-of-an-interval-is-an-interval, thm-heine-borel-r, def-open-cover-r, thm-continuous-implies-integrable, def-continuity-real, def-max-min, lem-integral-elementary-bounds, def-darboux-integral, def-oriented-integral, def-interval, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-the-first-mean-value-theorem-needs-a-one-signed-weight]
justified_by: []
aliases: [thm-mean-value-theorem-for-integrals]
landmark: true
short: "first mean value theorem for integrals"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]) and let $g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]) with $g(x) \ge 0$ for every $x \in [a,b]$. Then $fg$
is integrable and there is $\xi \in [a,b]$ with

$$\int_a^b f\,g \;=\; f(\xi)\,\int_a^b g .$$

**The special case $g \equiv 1$** is the familiar statement that a continuous
function attains its average value: there is $\xi \in [a,b]$ with

$$\int_a^b f \;=\; f(\xi)\,(b-a) ,$$

and it is this clause that the fundamental theorem below is usually derived
from in other treatments.

**The hypothesis $g \ge 0$ is essential.** For a sign-changing integrable $g$
the conclusion fails, and the witness is
the counterexample with a sign-changing weight on the companion
page.

## Facts & Assumptions

**Given:** Reals $a < b$, a continuous $f : [a,b] \to \mathbb{R}$, and an integrable $g : [a,b] \to \mathbb{R}$ with $g \ge 0$ on $[a,b]$.

[L1] $[a,b]$ is compact, and a continuous real function on a nonempty compact set attains a minimum and a maximum there ([[thm-heine-borel-r]], [[def-open-cover-r]], [[thm-extreme-value-r]], [[def-max-min]], [[def-interval]]).

[L2] For continuous $f$ on $[a,b]$ with $a \le b$, $f[\,[a,b]\,] = [\min f[\,[a,b]\,],\ \max f[\,[a,b]\,]]$ ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 2).

[L3] A continuous function on $[a,b]$ is integrable there ([[thm-continuous-implies-integrable]]).

[L4] A product of two integrable functions on $[a,b]$ is integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L5] If $u \le w$ pointwise and both are integrable then $\int_a^b u \le \int_a^b w$; and if $u \ge 0$ is integrable then $\int_a^b u \ge 0$ ([[thm-monotonicity-of-the-integral]]).

[L6] Scalar multiples: $\int_a^b \lambda u = \lambda\int_a^b u$ ([[thm-linearity-of-the-integral]]), and $\int_a^b 1 = b-a$ ([[lem-integral-elementary-bounds]]).

[L7] Ordered-field arithmetic: multiplying an inequality by a nonnegative quantity preserves it, a positive real has a positive inverse, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L8] Oriented limits are not needed here, $a < b$ throughout; $\int_a^a u = 0$ ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is integrable by [L3], so $fg$ is integrable by [L4]. [given, L3, L4]

1.2 By [L1] fix $p, q \in [a,b]$ with $f(q) = \min f[\,[a,b]\,] =: m$ and $f(p) = \max f[\,[a,b]\,] =: M$, so $m \le f(x) \le M$ for every $x \in [a,b]$. [given, L1, choose]

1.3 By [L5], $\int_a^b g \ge 0$. [given, L5]

2.1 Since $g \ge 0$, multiplying the inequalities of step 1.2 by $g(x)$ gives $m\,g(x) \le f(x)g(x) \le M\,g(x)$ for every $x \in [a,b]$, and all three functions are integrable by step 1.1 and [L6]. [step 1.1, step 1.2, given, L6, L7]

3.1 By [L5] and [L6] applied to step 2.1, $m\int_a^b g \;\le\; \int_a^b fg \;\le\; M\int_a^b g$. [step 2.1, L5, L6]

4.1 **The case $\int_a^b g = 0$.** Then step 3.1 reads $0 \le \int_a^b fg \le 0$, so $\int_a^b fg = 0 = f(a)\int_a^b g$, and $\xi := a$ works. [step 1.3, step 3.1, L7]

4.2 **The case $\int_a^b g > 0$.** Then $\lambda := \bigl(\int_a^b fg\bigr)\big/\bigl(\int_a^b g\bigr)$ is a real satisfying $m \le \lambda \le M$, by step 3.1 divided by the positive $\int_a^b g$. [step 1.3, step 3.1, L7, construct]

5.1 By step 1.2 and [L2], $f[\,[a,b]\,] = [m,M]$, so $\lambda = f(\xi)$ for some $\xi \in [a,b]$; then $\int_a^b fg = \lambda\int_a^b g = f(\xi)\int_a^b g$. [step 1.2, step 4.2, L2, L7, choose]

6.1 The two cases $\int_a^b g = 0$ and $\int_a^b g > 0$ are exhaustive by step 1.3, so the theorem holds. [step 1.3, step 4.1, step 5.1, L7]

7.1 **The clause $g \equiv 1$.** The constant $1$ is integrable, nonnegative, with $\int_a^b 1 = b-a$ by [L6], so step 6.1 gives $\xi \in [a,b]$ with $\int_a^b f = f(\xi)(b-a)$. [step 6.1, L6] ∎

## Remarks

- **The case $\int_a^b g = 0$ is handled first because the usual proof divides by it.** There the conclusion is trivially true for *every* $\xi$, and nothing is claimed about the location of a distinguished point; the theorem asserts only that some $\xi$ works.

- **No intermediate value theorem is invoked directly.** What is needed is that the continuous image of $[a,b]$ is exactly $[\min,\max]$, which is claim 2 of [[cor-continuous-image-of-an-interval-is-an-interval]]; that item is itself proved from the intermediate and extreme value theorems, and citing it here saves repeating the argument.

- **$\xi$ can be forced to lie in the open interval only under extra hypotheses**, and none is claimed. The standard refinement puts $\xi$ in the open interval when $g \equiv 1$; it is not proved here, it is not needed anywhere on this page, and the theorem does not assert it.

- **Forward reference, orientation only.** The witness showing that $g \ge 0$ cannot be dropped is [[cex-the-first-mean-value-theorem-needs-a-one-signed-weight]] on the companion page; nothing above depends on it.
