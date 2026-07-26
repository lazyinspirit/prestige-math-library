---
id: def-metric-uniform-continuity
kind: definition
title: "Uniform continuity of a map of metric spaces: one $\\delta$ serving every point"
status: published
origin: session
deps: [def-metric-continuity, def-metric-space, def-equivalent-metrics,
       def-metric-ball]
justified_by: []
forward_refs: [cex-continuous-map-destroying-cauchyness]
aliases: []
landmark: true
short: "uniform continuity"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function.

$f$ is **uniformly continuous** if for every real $\varepsilon > 0$ there is a
real $\delta > 0$ such that

$$d_X(x,x') < \delta \;\Longrightarrow\; d_Y\big(f(x), f(x')\big) < \varepsilon \qquad \text{for all } x, x' \in X .$$

**The whole content is in the quantifier order.** Continuity at a point $a$
allows $\delta$ to depend on $\varepsilon$ *and on $a$*
([[def-metric-continuity]]); uniform continuity demands one $\delta$ that works
for every pair of points at once. Written with the quantifiers in order,
continuity on $X$ is
$\forall \varepsilon\, \forall a\, \exists \delta\, \forall x$ and uniform
continuity is $\forall \varepsilon\, \exists \delta\, \forall a\, \forall x$;
moving $\exists \delta$ to the left is the entire difference, and it is a
strictly stronger condition.

**Uniform continuity is a property of the triple $(d_X, d_Y, f)$.** Both metrics
are named, and neither may be replaced by a merely topologically equivalent one
without changing the notion.

**This definition was promised earlier and is now discharged.**
[[def-metric-continuity]] records that uniform continuity is not defined there,
and [[def-equivalent-metrics]] writes the condition out in full for the identity
maps of two metrics on one set rather than naming it. With the definition above,
*uniform equivalence* of $d$ and $d'$ says exactly that
$\mathrm{id} : (X,d) \to (X,d')$ and $\mathrm{id} : (X,d') \to (X,d)$ are both
uniformly continuous, which is how that condition is read from here on.

## Remarks

- **Uniform continuity implies continuity, and the converse fails.** The
  implication is immediate, since a $\delta$ serving every point serves each
  point; it is recorded with the rest of the hierarchy in
  [[thm-metric-regularity-hierarchy]]. The failure of the converse is witnessed
  by $x \mapsto 1/x$ on $(0,1)$
  ([[cex-continuous-map-destroying-cauchyness]]).
- **The condition is symmetric in $x$ and $x'$** and says nothing about a
  distinguished point, which is why it is stated with two free variables and no
  base point. In ball language it reads: for every $\varepsilon > 0$ there is
  $\delta > 0$ with $f[B_X(x,\delta)] \subseteq B_Y(f(x),\varepsilon)$ for
  **every** $x \in X$ simultaneously ([[def-metric-ball]]).
- **What uniform continuity buys.** It transports Cauchy sequences
  ([[thm-uniform-continuity-preserves-cauchy]]), which ordinary continuity does
  not, and that single property is what makes extension from a dense subspace
  possible ([[thm-uniformly-continuous-extension-from-dense]]) and what makes
  completion functorial enough to be unique
  ([[thm-metric-completion-unique]]).
