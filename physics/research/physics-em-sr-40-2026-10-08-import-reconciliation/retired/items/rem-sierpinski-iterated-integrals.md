---
id: rem-sierpinski-iterated-integrals
kind: remark
title: "Sierpinski's example under the continuum hypothesis"
status: published
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
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "W. Sierpinski, Sur un probleme concernant les ensembles mesurables superficiellement, Fund. Math. 1 (1920) 112-115"
      url: "https://eudml.org/doc/212592"
    - title: "Fubini's theorem, failure for non-measurable functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "H. Friedman, A consistent Fubini-Tonelli theorem for nonmeasurable functions, Illinois J. Math. 24 (1980) 390-395"
      url: "https://doi.org/10.1215/ijm/1256047607"
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

**What it costs, exactly.** More than ZFC: the statement is conditional on the
continuum hypothesis, which is independent of ZFC, so this is not a ZFC
counterexample but a consistency result. The dependence is an equivalence and
not merely a sufficient condition. A set $E$ with the two section properties
above splits the square into $E$, whose horizontal sections are countable, and
its complement, whose vertical sections are countable; and by Sierpinski's
decomposition theorem such a splitting exists, for the square or equally for the
plane, if and only if the continuum hypothesis holds. So under the negation of
the continuum hypothesis this construction is unavailable outright.

**What is not thereby restored.** The conclusion, unlike the construction, does
not go away. Martin's axiom also implies that there is a function on the unit
square whose two iterated integrals are defined and unequal, so Martin's axiom
together with the negation of the continuum hypothesis still produces one, by a
different route. What is consistent with ZFC, by a theorem of Friedman (1980),
is the opposite: there are models of ZFC in which no such function exists at
all, so that whenever both iterated integrals of a function on the unit square
exist they agree. The strong Fubini statement for non-measurable functions is
therefore independent of ZFC, and this item is one half of that independence.
The ordinals and transfinite recursion machinery the construction uses is itself
only ordinary ZFC, and this library plans that page; what is deferred is the
independence apparatus and the measure theory, not the well ordering.
