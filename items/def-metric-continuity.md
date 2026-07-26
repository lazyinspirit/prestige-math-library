---
id: def-metric-continuity
kind: definition
title: "Continuity of a map between metric spaces, at a point and globally, in the $\\varepsilon$-$\\delta$ form"
status: draft
origin: session
deps: [def-metric-space, def-metric-ball]
justified_by: []
aliases: [def-continuous-map-metric]
landmark: true
short: "$\\varepsilon$-$\\delta$ continuity"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let
$f : X \to Y$ be a function and let $a \in X$.

$f$ is **continuous at $a$** if for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that

$$d_X(x,a) < \delta \;\Longrightarrow\; d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for all } x \in X .$$

$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of
$X$.

**The same condition in balls.** Since $d_X(x,a) < \delta$ says $x \in B_X(a,\delta)$
and $d_Y(f(x),f(a)) < \varepsilon$ says $f(x) \in B_Y(f(a),\varepsilon)$
([[def-metric-ball]]), continuity at $a$ reads: for every $\varepsilon > 0$ there
is $\delta > 0$ with

$$f\big[B_X(a,\delta)\big] \subseteq B_Y\big(f(a), \varepsilon\big).$$

Both forms are used below and are the same statement written twice.

**Both metrics matter, and both are named.** Continuity is a property of the
triple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same
underlying sets are in play, as in [[def-equivalent-metrics]], the metrics are
always written out.

**Quantifier order.** The $\delta$ is allowed to depend on $\varepsilon$ **and on
the point $a$**. Requiring one $\delta$ to work at every point simultaneously is
a strictly stronger condition, uniform continuity; this library does not define
it here, and where it is needed it is written out in full
([[def-equivalent-metrics]]).

## Remarks

- **Nothing is claimed here beyond the definition.** That continuity is
  equivalent to preimages of open sets being open, to preimages of closed sets
  being closed, to sequential continuity, and to
  $f[\overline{A}] \subseteq \overline{f[A]}$, is the theorem
  [[thm-metric-continuity-characterisations]].
- **Continuity at a point is a local condition**: it depends only on the values
  of $f$ on any one ball around $a$, since the condition may always be tested
  with a smaller $\delta$.
- Every isometric embedding is continuous, with $\delta = \varepsilon$
  ([[def-isometry-and-metric-embedding]], [[lem-isometry-is-an-embedding]]), and
  so is every map that does not increase distances, such as $u \mapsto d(u,A)$
  ([[lem-distance-to-set-is-lipschitz]]).
