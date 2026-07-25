---
id: rem-holder-minkowski-integral
kind: remark
title: "Holder and Minkowski inequalities in integral form"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "The integral versions of the two inequalities that make the L^p norms norms"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Holder's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder%27s_inequality"
    - title: "Minkowski inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_inequality"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{A}, \mu)$ be a measure space and for measurable $f$ put
$\|f\|_p := \big(\int_X |f|^p \, d\mu\big)^{1/p}$ for $1 \le p < \infty$, and
$\|f\|_\infty := \operatorname{ess\,sup}_X |f|$.

**Holder.** If $1 \le p, q \le \infty$ with $\tfrac1p + \tfrac1q = 1$, then for
all measurable $f, g$,

$$\int_X |fg| \, d\mu \le \|f\|_p \, \|g\|_q .$$

For $1 < p < \infty$ equality holds exactly when $|f|^p$ and $|g|^q$ are
proportional almost everywhere. The case $p = q = 2$ is the Cauchy-Schwarz
inequality for the integral.

**Minkowski.** If $1 \le p \le \infty$, then for all measurable $f, g$,

$$\|f + g\|_p \le \|f\|_p + \|g\|_p .$$

Hence $\|\cdot\|_p$ is a seminorm on the measurable functions with finite
$p$-th moment, and a norm on the quotient by equality almost everywhere. For
$0 < p < 1$ Minkowski's inequality reverses on nonnegative functions and
$\|\cdot\|_p$ is not a norm.

## Remarks

**Not proved in this library.** The inequalities are recorded here in their
integral form only, and used in no proof here.

**What would prove it.** Young's inequality
$ab \le a^p/p + b^q/q$, or the concavity of the logarithm, plus the monotonicity
and additivity of the Lebesgue integral
([[rem-lebesgue-measure-and-integral]]). No convergence theorem is needed; the
proofs are the finite-sum proofs with sums replaced by integrals.

**Which page it serves.** The roots and rational powers page already proves the
weighted arithmetic-geometric mean inequality and the finite forms of Holder and
Minkowski for finite sequences of reals with rational exponents, and the
$\mathbb{R}^n$ as a normed space page uses those to get the $p$-norms on
$\mathbb{R}^n$. The integral form is the same statement for the counting measure
replaced by an arbitrary measure, and it is exactly the step that needs the
integral.

**What is genuinely missing here, and what is not.** The inequality itself is not
deep and its finite version is in scope. What is deferred is the setting: the
statement quantifies over measurable functions and uses $\int$ and
$\operatorname{ess\,sup}$, none of which this library defines. The moment the
integral exists, these two lines follow at once, which is why they are recorded
together rather than as separate results.
