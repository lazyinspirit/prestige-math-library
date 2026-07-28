---
id: def-evaluation-map
kind: definition
title: "The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$"
status: published
origin: session
deps: [def-compact-open-topology, def-product-topology, def-continuous-map-top,
       def-subspace-topology-top, def-topological-space, def-metric-space,
       def-metric-topology, def-metrizable-space, thm-product-universal-property,
       def-metric-compactness]
justified_by: []
aliases: [def-evaluation]
landmark: false
short: "evaluation map"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space carrying its metric topology
([[def-metric-topology]], [[def-metrizable-space]]), let $(Y,\mathcal{T}_Y)$ be a
topological space ([[def-topological-space]]), and let $C(X,Y)$ carry the
compact-open topology ([[def-compact-open-topology]]). The **evaluation map** is

$$e : C(X,Y) \times X \longrightarrow Y, \qquad e(f,x) := f(x),$$

the domain carrying the product topology ([[def-product-topology]]) of the
compact-open topology on $C(X,Y)$ and the metric topology on $X$.

**This is a function.** For $f \in C(X,Y)$ and $x \in X$ the value $f(x)$ is a
well-determined element of $Y$, and a pair $(f,x)$ of the product determines both
entries ([[def-product-topology]]), so $e$ is defined on all of
$C(X,Y) \times X$ with no further condition.

**Which topology is meant is part of the definition.** Continuity of $e$ is a
statement about the pair of topologies on the source and the topology on the
target ([[def-continuous-map-top]]), and $C(X,Y)$ carries several topologies on
this page. Unless another is named, the topology on $C(X,Y)$ inside an evaluation
map is the compact-open one; where a subspace of $C(X,Y)$ is evaluated, it carries
the subspace topology ([[def-subspace-topology-top]]).

**Separate continuity is immediate; joint continuity is not.** For fixed
$f \in C(X,Y)$ the map $x \mapsto e(f,x) = f(x)$ is continuous, being $f$ itself.
For fixed $x \in X$ the map $f \mapsto e(f,x) = f(x)$ is continuous as well, since
for open $V \subseteq Y$ its preimage is $S(\{x\},V)$, a subbasic open set of the
compact-open topology, $\{x\}$ being compact ([[def-compact-open-topology]]).
What is at issue on this page is **joint** continuity, that is continuity of $e$
on the product, and that genuinely needs a hypothesis on $X$: it holds when $X$ is
locally compact, and this page records as a false statement that it holds for
every metric $X$, with an explicit witness.

## Remarks

- **The evaluation map is what makes the compact-open topology the right one.**
  Among topologies on $C(X,Y)$ making evaluation continuous, coarser is better
  and the compact-open topology is the standard choice; its subbasic sets
  $S(K,V)$ are exactly the conditions the argument for joint continuity consumes,
  a compact neighbourhood of the point being mapped into the target open set.

- **The order of the factors is a convention.** Writing $e(f,x)$ rather than
  $e(x,f)$ costs nothing: the two products are different sets, but the two maps
  are continuous or not together, since swapping the factors is a homeomorphism
  by the characteristic property of the product
  ([[thm-product-universal-property]]). This page always writes the function
  first.
