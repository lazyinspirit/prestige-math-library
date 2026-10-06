---
id: rem-lebesgue-differentiation-theorem
kind: remark
title: "Lebesgue differentiation theorem for $L^1$ functions"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral, rem-vitali-covering-theorem]
justified_by: []
forward_refs: []
aliases: [rem-lebesgue-points]
landmark: false
short: "Almost every point is a Lebesgue point: averages of an integrable function converge to its value"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Lebesgue differentiation theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue_differentiation_theorem"
    - title: "Vitali covering lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vitali_covering_lemma"
pipeline_run: null
---

## Statement

Let $f \in L^{1}(\mathbb{R}^n)$. Then for almost every $x \in \mathbb{R}^n$,

$$\lim_{r \to 0^{+}} \frac{1}{\lambda_n(B(x,r))} \int_{B(x,r)} f \, d\lambda_n = f(x),$$

and indeed almost every $x$ is a **Lebesgue point**, meaning

$$\lim_{r \to 0^{+}} \frac{1}{\lambda_n(B(x,r))} \int_{B(x,r)} |f(y) - f(x)| \, d\lambda_n(y) = 0.$$

In dimension one this says that for $f \in L^{1}[a,b]$ the indefinite integral
$F(x) = \int_a^x f \, d\lambda$ satisfies $F' = f$ almost everywhere, which is
the Lebesgue form of the first fundamental theorem of calculus. A special case
is the Lebesgue density theorem: a measurable set $E$ has density $1$ at almost
every point of $E$ and density $0$ at almost every point of its complement.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** The Hardy-Littlewood maximal inequality, itself proved
from the $5r$ covering lemma inside [[rem-vitali-covering-theorem]], plus density
of the continuous functions in $L^{1}$, plus the dominated convergence theorem
([[rem-dominated-convergence-theorem]]). Every ingredient is measure-theoretic.

**Which page it serves.** The fundamental theorems of calculus page. That page
proves that $F(x) = \int_a^x f$ is differentiable with $F' = f$ at every point
where $f$ is continuous, which is as far as the Riemann theory reaches. The
theorem above removes continuity entirely and replaces "at every point of
continuity" by "at almost every point", and together with
[[rem-ftc-absolutely-continuous]] it closes the subject.

**Why it is stated separately from the monotone case.** See the naming warning in
[[rem-lebesgue-monotone-differentiation]]. The two results are close relatives,
each provable from Vitali-type covering arguments, but they are different
statements about different objects, and conflating them is a common source of
confusion about what the fundamental theorem of calculus actually says.
