---
id: def-equivalent-metrics
kind: definition
title: "Topologically, uniformly and Lipschitz equivalent metrics on a set"
status: published
origin: session
deps: [def-metric-topology, def-metric-space, def-metric-continuity, def-metric-ball]
justified_by: []
aliases: [def-topologically-equivalent, def-uniformly-equivalent, def-lipschitz-equivalent]
landmark: true
short: "equivalence of metrics"
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
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $d$ and $d'$ both be metrics on $X$
([[def-metric-space]]). Note that the underlying set is the same; nothing below
compares metrics on different sets.

- $d$ and $d'$ are **topologically equivalent** if they have the same metric
  topology ([[def-metric-topology]]):
  $$\mathcal{T}_d = \mathcal{T}_{d'} .$$
- $d$ and $d'$ are **uniformly equivalent** if for every real $\varepsilon > 0$
  there are reals $\delta > 0$ and $\delta' > 0$ such that, for all
  $x, y \in X$,
  $$d(x,y) < \delta \;\Longrightarrow\; d'(x,y) < \varepsilon \qquad \text{and} \qquad d'(x,y) < \delta' \;\Longrightarrow\; d(x,y) < \varepsilon .$$
- $d$ and $d'$ are **Lipschitz equivalent** if there are reals
  $\alpha, \beta > 0$ with
  $$\alpha\, d(x,y) \;\le\; d'(x,y) \;\le\; \beta\, d(x,y) \qquad \text{for all } x, y \in X .$$

**What the middle condition says in words.** It is the statement that both
identity maps $\mathrm{id} : (X,d) \to (X,d')$ and
$\mathrm{id} : (X,d') \to (X,d)$ are *uniformly* continuous: the same $\delta$
works at every pair of points, not merely at each point separately as in
[[def-metric-continuity]]. Uniform continuity has no definition of its own at
this point in the reading order, so the condition is written out in full above;
a later page defines it, and until then this write-out is what earlier pages
quote.

**Each of the three is an equivalence relation on the metrics on $X$.**
Reflexivity is immediate ($\delta = \varepsilon$, and $\alpha = \beta = 1$);
symmetry is built into the statements, the uniform one being symmetric by
construction and the Lipschitz one because
$\alpha d \le d' \le \beta d$ gives $\beta^{-1} d' \le d \le \alpha^{-1} d'$;
and transitivity follows by composing the $\delta$s and multiplying the
constants.

## Remarks

- **The three are ranked, and the ranking is proved, not assumed**:
  Lipschitz equivalence implies uniform equivalence implies topological
  equivalence ([[thm-metric-equivalence-hierarchy]]). Neither implication
  reverses, and the witnesses live on the companion page.
- **Naming forks in the literature.** Many texts say *strongly equivalent* for
  what is called Lipschitz equivalent here, and many say simply *equivalent* for
  what is called topologically equivalent here. This library always writes the
  qualifier, so that no statement depends on which convention a reader brings.
  A few texts define topological equivalence by "the identity is a
  homeomorphism", which is the same condition
  ([[thm-metric-continuity-characterisations]]).
- **Topological equivalence preserves exactly the topological notions**: open,
  closed, closure, interior, boundary, convergence of sequences, continuity of
  maps into and out of the space. It does not preserve boundedness, diameters or
  the Lipschitz constants, and [[fs-boundedness-is-a-topological-property]]
  records the first of those failures.
