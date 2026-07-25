---
id: rem-sierpinski-iterated-integrals
kind: remark
title: "Sierpinski's example under the continuum hypothesis"
status: draft
origin: session
proved_here: false
deps: [rem-fubini-tonelli]
justified_by: []
forward_refs: [rem-continuum-hypothesis]
aliases: []
landmark: false
short: "Under CH, a non-measurable subset of the unit square whose iterated integrals are 0 and 1"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "W. Sierpinski, Sur un probleme concernant les ensembles mesurables superficiellement, Fund. Math. 1 (1920) 112-115"
      url: "https://eudml.org/doc/212592"
    - title: "Fubini's theorem, failure for non-measurable functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
pipeline_run: null
---

## Statement

Assume the continuum hypothesis. Then there is a set $E \subseteq [0,1]^2$ such
that

- for every $x \in [0,1]$ the vertical section
  $E_x = \{ y : (x,y) \in E \}$ has countable complement in $[0,1]$, and
- for every $y \in [0,1]$ the horizontal section
  $E^y = \{ x : (x,y) \in E \}$ is countable.

Consequently every section is Lebesgue measurable, $\lambda(E_x) = 1$ for every
$x$ and $\lambda(E^y) = 0$ for every $y$, so both iterated integrals of
$\mathbf{1}_E$ exist and

$$\int_0^1 \! \Big( \int_0^1 \mathbf{1}_E(x,y) \, dy \Big) dx = 1, \qquad \int_0^1 \! \Big( \int_0^1 \mathbf{1}_E(x,y) \, dx \Big) dy = 0 .$$

By Fubini's theorem $E$ is therefore not measurable in $[0,1]^2$. Sierpinski's
construction uses a well ordering of $[0,1]$ in order type $\omega_1$, which is
where the continuum hypothesis is spent, and sets
$E = \{ (x,y) : y \not\preceq x \}$ for that well ordering $\preceq$.

## Remarks

**Not proved in this library.** It is recorded with a citation to Sierpinski's
1920 paper and used in no proof here.

**What would prove it.** A well ordering of $[0,1]$ of order type $\omega_1$,
which under the continuum hypothesis ([[rem-continuum-hypothesis]]) exists by the
well ordering theorem, plus the observation that each initial segment of such a
well ordering is countable. The measure theory needed is then only that countable
sets are null and that Fubini's theorem ([[rem-fubini-tonelli]]) forbids the
displayed pair of values for a measurable set.

**Which page it serves.** The Fubini and change of variables page, beside
[[rem-fubini-counting-measure-diagonal]]. The two together answer the question
"which hypothesis of Fubini's theorem is doing the work": the diagonal example
kills $\sigma$-finiteness, this one kills the idea that measurability of every
section is enough.

**What it costs.** More than ZFC: the statement is conditional on the continuum
hypothesis, which is independent of ZFC, so this is not a ZFC counterexample but
a consistency result. Under Martin's axiom with the negation of the continuum
hypothesis the conclusion fails for this construction. The ordinals and
transfinite recursion machinery it uses is itself only ordinary ZFC, and this
library plans that page; what is deferred is the independence apparatus and the
measure theory, not the well ordering.
