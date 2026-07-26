---
id: def-lipschitz-holder-contraction
kind: definition
title: "Lipschitz map, $\\alpha$-Hölder map for rational $0 < \\alpha \\le 1$, and contraction"
status: draft
origin: session
deps: [def-metric-uniform-continuity, def-metric-space, def-rational-power,
       def-rat-order, lem-metric-nonnegativity, def-integer-power]
justified_by: []
forward_refs: [cex-strict-contraction-without-a-fixed-point]
aliases: []
landmark: true
short: "Lipschitz, Hölder, contraction"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function. Recall that a metric takes nonnegative real values
([[lem-metric-nonnegativity]]).

- $f$ is **Lipschitz** with **constant** $L$, where $L \in \mathbb{R}$ and
  $L \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; L \, d_X(x,x') \qquad \text{for all } x, x' \in X .$$
  $f$ is *Lipschitz* if it is Lipschitz with some such constant.
- Let $\alpha \in \mathbb{Q}$ with $0 < \alpha \le 1$ ([[def-rat-order]]). $f$ is
  **$\alpha$-Hölder** with **constant** $C$, where $C \in \mathbb{R}$ and
  $C \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; C \, d_X(x,x')^{\alpha} \qquad \text{for all } x, x' \in X ,$$
  the power being the rational power of a nonnegative base
  ([[def-rational-power]]). $f$ is *$\alpha$-Hölder* if it is so with some such
  constant, and *Hölder* if it is $\alpha$-Hölder for some rational
  $\alpha \in (0,1]$.
- $f$ is a **contraction** with constant $q$ if it is Lipschitz with constant $q$
  and $0 \le q < 1$. The number $q$ is then called a **contraction constant** for
  $f$.

**The power $d_X(x,x')^{\alpha}$ is defined at every pair, including $x = x'$.**
The base $d_X(x,x')$ is a nonnegative real, and [[def-rational-power]] defines
$a^{\alpha}$ for every $a > 0$ and, by its supplementary clause, sets
$0^{\alpha} = 0$ for every rational $\alpha > 0$. Since $\alpha > 0$ is required
here, the displayed inequality at $x = x'$ reads $0 \le C \cdot 0$, which holds;
so no separate clause and no restriction to $x \ne x'$ is needed. Note that this
is exactly why the exponent is required to be strictly positive: at $\alpha = 0$
the convention $0^0 = 1$ of [[def-integer-power]] would make the condition read
$d_Y(f(x),f(x')) \le C$ at equal points, a different statement.

**Why the exponent is a rational and why it is at most $1$.** This library has no
real exponents ([[def-rational-power]]), so $\alpha$ ranges over the rationals;
that is a limitation of the ambient toolkit and not of the notion. The upper
bound $\alpha \le 1$ is the standard convention, and it is where the notion is
useful: the classical theory reserves the name for $\alpha \in (0,1]$, and
nothing in this library uses an exponent outside that range. No claim is made
here about what an exponent $\alpha > 1$ would do.

**Constants are not unique and are not part of the data.** If $f$ is Lipschitz
with constant $L$ it is Lipschitz with every constant $L' \ge L$, and likewise
for Hölder constants; the adjectives above are existential statements. A
*contraction*, by contrast, requires a constant strictly below $1$, and that is a
real restriction: exhibiting the constant is part of exhibiting a contraction, and
a map that shrinks every distance without admitting one uniform constant is not a
contraction here.

## Remarks

- **The three conditions are ranked, and the ranking is a theorem.** Contraction
  implies Lipschitz by definition; Lipschitz and Hölder each imply uniform
  continuity ([[def-metric-uniform-continuity]]), and uniform continuity implies
  continuity. That is [[thm-metric-regularity-hierarchy]], where the one
  implication that needs a hypothesis, namely Lipschitz implies Hölder, is stated
  with the boundedness hypothesis it actually needs.
- **A Lipschitz map with constant $0$ is constant** when $X$ is nonempty, since
  $d_Y(f(x),f(x')) \le 0$ forces $f(x) = f(x')$ by the separation axiom (M1)
  ([[def-metric-space]]). So the constant maps are exactly the maps admitting
  every nonnegative constant, and they are contractions with constant $0$.
- **Naming forks.** Many texts call a Lipschitz map with constant $L < 1$ a
  *contraction* and one with $d(fx,fy) < d(x,y)$ for $x \ne y$ a *contractive* or
  *weakly contractive* map. This library uses *contraction* only in the first
  sense; the second condition is strictly weaker and does not force a fixed point
  ([[fs-strict-contraction-has-a-fixed-point]]), witnessed by
  [[cex-strict-contraction-without-a-fixed-point]], which is precisely why the two
  names are kept apart here.
