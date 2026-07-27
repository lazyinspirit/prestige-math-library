---
id: def-ring-of-functions
kind: definition
title: "The ring $R^{X}$ of all functions from a set $X$ into a ring, with pointwise operations"
status: draft
origin: session
deps: [def-ring, def-commutative-ring, def-zero-divisor-and-integral-domain, def-binary-operation, lem-ring-elementary-consequences]
justified_by: []
aliases: [def-function-ring]
landmark: false
short: "$R^{X}$, pointwise"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Function space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_space"
    - title: "Ring (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_(mathematics)"
pipeline_run: null
---

## Definition

Let $X$ be a set and $R$ a ring ([[def-ring]]). Write

$$R^{X} \;:=\; \{\, f \;:\; f \text{ is a function } X \to R \,\}$$

and define, for $f, g \in R^{X}$, the **pointwise** operations

$$(f + g)(x) := f(x) + g(x), \qquad (f \cdot g)(x) := f(x)\,g(x) \qquad (x \in X),$$

with distinguished elements the constant functions

$$0_{R^{X}}(x) := 0_R, \qquad 1_{R^{X}}(x) := 1_R \qquad (x \in X).$$

**These data make $R^{X}$ a ring.** Each rule assigns to a pair of functions
$X \to R$ another function $X \to R$, so each is a binary operation on $R^{X}$
([[def-binary-operation]]). Two elements of $R^{X}$ are equal exactly when they
agree at every $x \in X$, so every ring axiom, being an equation between
elements of $R^{X}$, holds as soon as it holds at each point; and at each point
it is the corresponding axiom of $R$. In particular
$-f$ is the function $x \mapsto -f(x)$, the additive group of $R^{X}$ is
abelian, multiplication is associative with two-sided identity $1_{R^{X}}$, and
both distributive laws hold.

**Commutativity.** If $R$ is commutative ([[def-commutative-ring]]) then so is
$R^{X}$, pointwise. If $X \ne \varnothing$ the converse holds: fixing
$x_0 \in X$ and taking constant functions $f \equiv a$, $g \equiv b$ gives
$ab = ba$ from $(fg)(x_0) = (gf)(x_0)$. If $X = \varnothing$ then $R^{X}$ has
exactly one element, the empty function, so $1_{R^{X}} = 0_{R^{X}}$ and $R^{X}$
is commutative whatever $R$ is; the converse therefore needs the hypothesis
$X \ne \varnothing$ and is stated with it.

**Zero divisors.** Suppose $R$ is not the one-element ring, that is $1_R \ne 0_R$
([[lem-ring-elementary-consequences]]), and suppose $X$ has two distinct
elements $x_1 \ne x_2$. Define $f, g \in R^{X}$ by

$$f(x) := \begin{cases} 1_R & x = x_1 \\ 0_R & x \ne x_1\end{cases} \qquad\qquad g(x) := \begin{cases} 0_R & x = x_1 \\ 1_R & x \ne x_1.\end{cases}$$

Then $f \ne 0_{R^{X}}$ because $f(x_1) = 1_R \ne 0_R$, and
$g \ne 0_{R^{X}}$ because $g(x_2) = 1_R \ne 0_R$; and $(fg)(x) = 0_R$ for every
$x$, since one of the two factors is $0_R$ at each point and $0_R y = 0_R = y 0_R$
([[lem-ring-elementary-consequences]]). So $f$ and $g$ are zero divisors
([[def-zero-divisor-and-integral-domain]]) and $R^{X}$ is not an integral
domain.

## Remarks

- **The same underlying set carries other structures.** $R^{X}$ is the set of
  *all* functions $X \to R$, with no continuity, boundedness or finiteness
  condition. When $R$ is a field, this same set with this same addition carries a
  second structure of interest, obtained by replacing the pointwise product with
  a scalar multiplication. The addition of that second structure is this same
  pointwise rule $(f+g)(x) = f(x) + g(x)$; what differs is the second operation,
  which multiplies a function by a scalar rather than two functions together, so
  the two are not special cases of one another.

- **This is where non-domains become plentiful.** Products of two nonzero rings
  ([[def-product-ring]]) and function rings on a set with at least two points are
  the two standard sources of zero divisors, and neither needs any arithmetic
  beyond $0 \cdot y = 0$.

- **The empty index set is a genuine case, not an edge case to be waved away.**
  $R^{\varnothing}$ has exactly one element and is the one-element ring, in which
  $1 = 0$; that is why the commutativity statement above carries the hypothesis
  $X \ne \varnothing$ in the direction where it is needed, and why the
  zero-divisor statement asks for two distinct points.
