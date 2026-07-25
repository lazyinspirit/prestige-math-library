---
id: rem-fubini-counting-measure-diagonal
kind: remark
title: "Failure of Tonelli without $\\sigma$-finiteness: the diagonal under Lebesgue times counting measure"
status: draft
origin: session
proved_here: false
deps: [rem-fubini-tonelli]
justified_by: []
forward_refs: []
aliases: [rem-diagonal-counterexample]
landmark: false
short: "A nonnegative product-measurable function whose iterated integrals are 0 and 1"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Fubini's theorem, failure for non-sigma-finite measures (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "T. Tao, An Introduction to Measure Theory, Ch. 1"
      url: "https://terrytao.wordpress.com/books/an-introduction-to-measure-theory/"
pipeline_run: null
---

## Statement

Let $X = [0,1]$ with Lebesgue measure $\lambda$ and let $Y = [0,1]$ with counting
measure $\kappa$, so that $\kappa(A)$ is the number of elements of $A$ when $A$
is finite and $+\infty$ otherwise. Let

$$f = \mathbf{1}_{\Delta}, \qquad \Delta = \{ (x,y) \in [0,1]^2 : x = y \},$$

the indicator of the diagonal. Then $f$ is nonnegative and measurable for the
product $\sigma$-algebra, and

$$\int_X \Big( \int_Y f(x,y) \, d\kappa(y) \Big) d\lambda(x) = \int_0^1 1 \, d\lambda = 1,$$

$$\int_Y \Big( \int_X f(x,y) \, d\lambda(x) \Big) d\kappa(y) = \int_Y 0 \, d\kappa = 0 .$$

The two iterated integrals are $1$ and $0$. Tonelli's theorem does not apply
because $\kappa$ is not $\sigma$-finite on the uncountable set $[0,1]$, and no
hypothesis on $f$ can repair this: $f$ is an indicator of a closed set, as good
as a function can be.

## Remarks

**Not proved in this library.** The computation is a two-line consequence of the
definitions of the two integrals, but both integrals belong to the deferred
measure track ([[rem-lebesgue-measure-and-integral]]), so it is recorded here
rather than proved.

**What would prove it.** Only the definitions: the inner integral against
counting measure of $\mathbf{1}_{\{x\}}$ is $1$ for each fixed $x$, and the inner
integral against Lebesgue measure of the indicator of a single point is $0$ for
each fixed $y$. The measurability of $\Delta$ in the product $\sigma$-algebra is
the one point needing care, and it follows since $\Delta$ is closed and the
product $\sigma$-algebra here contains the Borel sets of the square.

**Which page it serves.** The Fubini and change of variables page, as the
counterexample that shows why the Lebesgue statement carries a $\sigma$-finiteness
hypothesis while the Riemann statement on a box does not need one. It is the
cheapest possible witness: no choice, no pathological set, no continuum
hypothesis, just a measure that is too large.

**Contrast with the other failure recorded here.** In this example $f$ is
perfectly measurable and the measures are at fault. In
[[rem-sierpinski-iterated-integrals]] the measures are the best possible and the
function is at fault. Between them they show that both hypotheses of
[[rem-fubini-tonelli]] are needed.
