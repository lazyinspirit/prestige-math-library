---
id: rem-real-exponents-deferred
kind: remark
title: "Why real exponents are deferred"
status: published
origin: session
deps: [def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-complete-ordered-field, thm-nth-roots-exist, thm-of-square-roots, thm-cauchy-schwarz-finite, lem-max-is-sup, def-real-limit, lem-of-q-dense, thm-of-archimedean]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Exercise 6)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.7"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

What this page has built is $a^{r}$ for a positive real base $a$ and a
**rational** exponent $r$ ([[def-rational-power]]), together with its algebra
([[lem-rational-power-laws]]) and its order behaviour: strictly increasing in
$r$ for $a > 1$, constant for $a = 1$, strictly decreasing for $0 < a < 1$, and
strictly increasing in $a$ for a fixed positive exponent
([[lem-rational-power-monotone]]). Nothing here is a limit, a series or a
continuous function. Every value is produced by finitely many field operations
once the relevant root is available, and the only nonalgebraic ingredient
anywhere on the page is the least-upper-bound property
([[def-complete-ordered-field]]). It enters exactly one proof on the page
directly, the existence of $n$-th roots ([[thm-nth-roots-exist]]); everything
else here that needs a root cites a theorem rather than the property itself, and
those theorems are [[thm-nth-roots-exist]] and, for the root form of
Cauchy-Schwarz ([[thm-cauchy-schwarz-finite]]), the already published
[[thm-of-square-roots]]. In each case completeness is spent on producing a root
and on nothing else.

**The obvious next step, and how far it gets.** For $a > 1$ and a real $x$, put

$$E_a(x) := \sup\{\, a^{r} : r \in \mathbb{Q},\; r \le x \,\}.$$

This supremum exists. The set is nonempty because there is a rational below $x$,
and it is bounded above because there is a rational $R > x$, whence
$a^{r} \le a^{R}$ for every rational $r \le x$ by monotonicity in the exponent;
both rationals are supplied by the density of $\mathbb{Q}$ in $\mathbb{R}$
([[lem-of-q-dense]], [[thm-of-archimedean]]). The definition is also consistent
with what we already have: for a rational $x$ the set has greatest element
$a^{x}$, and a set with a greatest element has that element as its supremum
([[lem-max-is-sup]]), so $E_a(x) = a^{x}$. For $0 < a < 1$ one sets
$E_a(x) := 1/E_{1/a}(x)$, and $E_1(x) := 1$. So the object exists, it is the
right object, and it is monotone.

**Where it stops.** Proving the law $E_a(x+y) = E_a(x)E_a(y)$ from this
definition is not an algebraic manipulation. One has to compare a supremum over
rationals $r \le x + y$ with the products $a^{s}a^{t}$ for $s \le x$, $t \le y$,
and the two families are not the same: every $s + t$ is one of the $r$, but a
given $r \le x+y$ need only be *approximated* by such sums. Closing that gap is
an approximation argument, and an approximation argument needs a notion of limit
and an estimate that controls $a^{r} - a^{s}$ in terms of $r - s$. The library
does have a notion of convergent sequence of reals, introduced in the
construction of $\mathbb{R}$ via Cauchy sequences ([[def-real-limit]]), but no
continuity, no uniform continuity, no series and no derivative is available at
this point in its reading order, and each of those is exactly what the standard
proofs of the power laws for real exponents use. Writing such
a proof here would either import machinery that does not exist yet or quietly
assume it, and the second is the failure mode this library is built to avoid.

**The route the library will actually take.** General powers will be defined not
by the supremum above but through the exponential function and the logarithm,
via $a^{x} = \exp(x \log a)$ for $a > 0$. That route is developed much later,
after limits, continuity, series and differentiation are in place; the
exponential is built as a power series or as the solution of a differential
equation, the logarithm as its inverse, and the power laws for real exponents
then fall out of the functional equation $\exp(u+v) = \exp(u)\exp(v)$ instead of
being fought for one at a time. The supremum definition is then recovered as a
theorem rather than taken as a definition. **No link is given here**, because
the page that carries that development does not exist yet, and a wikilink to it
would be unresolvable.

**Practical consequence for this page.** Everywhere an exponent appears in a
statement on this page it is an integer or a rational, and where that looks like
a restriction it is a real one. The weights in the weighted AM-GM inequality are
rational for this reason, and the conjugate exponent $q = p/(p-1)$ in Hölder and
Minkowski is rational precisely because $p$ is. Those statements are not weaker
versions of the classical ones waiting to be upgraded; they are the classical
ones, restricted to the exponents that currently have a meaning.
