---
id: def-the-integral-function
kind: definition
title: "The integral function $F(x) := \\int_a^x f$ of an integrable $f$"
status: draft
origin: session
deps: [lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-oriented-integral, def-darboux-integral, def-interval, def-bounded-set]
forward_refs: [cex-an-integrable-function-with-no-primitive, fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: [def-integral-function]
landmark: true
short: "integral function $F(x) = \\int_a^x f$"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). The **integral function of $f$ with base point $a$**
is

$$F : [a,b] \to \mathbb{R}, \qquad F(x) \;:=\; \int_a^x f .$$

**It is a genuine function, and that has to be checked.** For $x \in (a,b]$ the
restriction of $f$ to $[a,x]$ is integrable, by
[[lem-integrability-on-a-subinterval]] applied with $c := a$ and $d := x$, so
$\int_a^x f$ names a single real number ([[def-darboux-integral]]). For $x = a$
the symbol $\int_a^a f$ is $0$ by [[def-oriented-integral]]. So $F(x)$ is defined
at every point of $[a,b]$ and

$$F(a) \;=\; 0 .$$

More generally, for any base point $c \in [a,b]$ the function
$x \mapsto \int_c^x f$ is defined on the whole of $[a,b]$, the integral being the
oriented one of [[def-oriented-integral]] when $x < c$; the case $c = a$ is
written $F$ above and is the one used unless another base point is named.

### The two identities used throughout

**Increments are integrals.** For all $x, y \in [a,b]$, in either order,

$$F(y) - F(x) \;=\; \int_x^y f .$$

This is claim 3 of [[thm-additivity-over-subintervals]] applied to the three
points $a$, $x$, $y$: it gives $\int_a^x f + \int_x^y f = \int_a^y f$, that is
$F(x) + \int_x^y f = F(y)$. No ordering of $x$ and $y$ is assumed, and the
degenerate cases $x = y$, $x = a$ and $y = a$ are included, since claim 3 is
stated for arbitrary points.

**Changing the base point changes $F$ by a constant.** If $c \in [a,b]$ and
$F_c(x) := \int_c^x f$, then for every $x \in [a,b]$

$$F_c(x) \;=\; F(x) - F(c) ,$$

again by claim 3 of [[thm-additivity-over-subintervals]] at the points $a$, $c$,
$x$. So the family of integral functions of $f$ is one function up to an
additive constant.

## Remarks

- **$F$ exists for every integrable $f$, whether or not $f$ has a primitive.**
  Nothing in the definition asks $f$ to be continuous anywhere, and nothing here
  claims $F' = f$. The two statements about $F'$ that this page does prove are: $F$ is
  always Lipschitz ([[thm-the-integral-function-is-lipschitz]]), and $F'(c) = f(c)$
  at every point $c$ where $f$ is continuous ([[thm-ftc-first-part]]).

- **$F$ need not be a primitive of $f$.** At a discontinuity of $f$ the
  derivative $F'$ may fail to exist, or may exist and differ from $f$; both
  possibilities are exhibited on the companion page, by
  [[cex-an-integrable-function-with-no-primitive]] and
  [[fs-the-integral-function-is-always-a-primitive]]. That is the honest content
  of the phrase "the integral function", and it is why it is not called "the
  primitive" here.

- **Why the base point is part of the data and the notation suppresses it.** The
  symbol $F$ hides its dependence on $a$, as is customary; the identity
  $F_c = F - F(c)$ above is what makes the suppression harmless, since every
  statement below about $F$ is about its increments, which do not see the base
  point at all.
