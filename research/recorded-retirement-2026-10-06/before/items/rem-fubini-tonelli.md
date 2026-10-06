---
id: rem-fubini-tonelli
kind: remark
title: "Fubini-Tonelli theorem and the $\\sigma$-finiteness hypothesis"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral, rem-monotone-convergence-theorem]
justified_by: []
forward_refs: []
aliases: [rem-fubini, rem-tonelli]
landmark: true
short: "Iterated integrals equal the double integral for sigma-finite measures"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Fubini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "Fubini theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Fubini_theorem"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{A}, \mu)$ and $(Y, \mathcal{B}, \nu)$ be $\sigma$-finite
measure spaces and let $f$ be measurable for the product $\sigma$-algebra
$\mathcal{A} \otimes \mathcal{B}$.

**Tonelli.** If $f \ge 0$ then $x \mapsto \int_Y f(x,y)\, d\nu(y)$ and
$y \mapsto \int_X f(x,y) \, d\mu(x)$ are measurable and

$$\int_X \! \Big( \int_Y f \, d\nu \Big) d\mu \;=\; \int_Y \! \Big( \int_X f \, d\mu \Big) d\nu \;=\; \int_{X \times Y} f \, d(\mu \otimes \nu),$$

all three possibly $+\infty$.

**Fubini.** If $f \in L^{1}(\mu \otimes \nu)$ then $f(x, \cdot) \in L^1(\nu)$ for
$\mu$-almost every $x$, $f(\cdot, y) \in L^1(\mu)$ for $\nu$-almost every $y$,
the two almost everywhere defined iterated integrals are integrable, and the
same chain of equalities holds.

In practice the two are used together: Tonelli applied to $|f|$ establishes the
integrability hypothesis of Fubini, which is then applied to $f$. Neither
theorem asserts that equality of the two iterated integrals implies
integrability, and neither dispenses with $\sigma$-finiteness.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** Construction of the product measure by Caratheodory
extension from measurable rectangles, uniqueness of that extension on
$\sigma$-finite spaces by a Dynkin system argument, the fact that sections of a
product-measurable set are measurable, and then the monotone convergence theorem
([[rem-monotone-convergence-theorem]]) to pass from indicators to simple
functions to nonnegative measurable functions. $\sigma$-finiteness is used twice:
once to make the product measure unique, once to make the section function
measurable.

**Which page it serves.** The Fubini and change of variables page of the
multivariable track. That page proves the Fubini theorem for the Riemann integral
on a box, where the hypothesis is continuity or Riemann integrability of $f$
together with existence of the inner integrals, and where the counterexamples are
about existence rather than about measurability. The Lebesgue version is what
makes the theorem usable for the functions that actually arise, and its two
failure modes are recorded here as
[[rem-fubini-counting-measure-diagonal]] and
[[rem-sierpinski-iterated-integrals]].

**Two hypotheses that are often dropped and should not be.** The first is
$\sigma$-finiteness, whose failure is the diagonal example. The second is
product measurability of $f$: equality of iterated integrals for a function that
is not measurable on the product is not asserted by anything above, and
Sierpinski's example shows the iterated integrals can then exist and differ.
