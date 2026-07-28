---
id: def-locally-compact-metric-space
kind: definition
title: "Locally compact metric space: every point has a compact neighbourhood"
status: draft
origin: session
deps: [def-metric-space, def-metric-topology, def-metric-ball, def-metric-compactness,
       lem-compactness-is-intrinsic, def-isometry-and-metric-embedding,
       def-neighbourhood-top, def-metrizable-space, def-topological-space,
       thm-heine-borel-rn]
justified_by: []
aliases: [def-locally-compact-metric]
landmark: true
short: "locally compact metric space"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with balls as in
[[def-metric-ball]] and compact subsets as in [[def-metric-compactness]].

$(X,d)$ is **locally compact** if for every $x \in X$ there are a compact subset
$K \subseteq X$ and a real $r > 0$ with

$$B(x,r) \;\subseteq\; K .$$

**This is the condition "every point has a compact neighbourhood", written out.**
Give $X$ its metric topology $\mathcal{T}_d$ ([[def-metric-topology]]), so that
$(X, \mathcal{T}_d)$ is a topological space ([[def-metrizable-space]]). A set
$K \subseteq X$ is a neighbourhood of $x$ in the sense of
[[def-neighbourhood-top]] exactly when some open $U$ satisfies
$x \in U \subseteq K$, and by [[def-metric-topology]] that holds exactly when some
ball $B(x,r)$ satisfies $B(x,r) \subseteq K$. So the displayed condition says
precisely that $x$ has a compact neighbourhood, and the two readings are the same
condition and not two notions.

**Two conventions are fixed here, because both are live in the literature.**

- *Neighbourhoods need not be open.* This library's convention is
  [[def-neighbourhood-top]]'s, and it is what makes "compact neighbourhood" a
  useful phrase at all: a compact set is rarely open. Note that
  [[def-metric-topology]] uses the word *neighbourhood* for an open set
  containing the point; that narrower usage is confined to that item, and the
  present definition never relies on it.
- *Compactness of a subset is intrinsic.* $K$ compact means the metric subspace
  $(K, d_K)$ is a compact metric space ([[def-metric-compactness]],
  [[def-isometry-and-metric-embedding]]); the equivalent description by families
  of open subsets of the ambient $X$ is [[lem-compactness-is-intrinsic]] and is
  cited wherever it is used.

**Every compact metric space is locally compact**, since $K := X$ and any $r > 0$
serve at every point. The empty metric space is locally compact, the condition
being vacuous.

## Remarks

- **Dictionary: this is the metric special case of a notion this library does not
  yet define in general.** *Locally compact* is ordinarily defined for an
  arbitrary topological space, by the same words: every point has a compact
  neighbourhood, compactness there being the open-cover condition for arbitrary
  topological spaces. This library has no general topological compactness at this
  point in the reading order — the only compactness available is
  [[def-metric-compactness]], for metric spaces — so the definition above is
  stated for a metric space and for nothing else, and it never claims to be the
  general one.

  **The agreement, when the general notion arrives, will be immediate and not a
  theorem about metrics.** A metric space is a topological space whose topology
  is $\mathcal{T}_d$ ([[def-metrizable-space]]), and *the metric topology is the
  topology*: the open sets of $(X,d)$ used by [[def-metric-compactness]] and by
  [[lem-compactness-is-intrinsic]] are literally the members of $\mathcal{T}_d$.
  So a subset of $X$ is compact in the metric sense exactly when it is compact in
  the topological sense, and "has a compact neighbourhood" means the same thing on
  both sides. The page that defines compactness for arbitrary topological spaces
  carries the obligation to record that agreement explicitly, exactly as
  [[def-metrizable-space]] records the agreement of the metric and topological
  notions of neighbourhood, closure, convergence and continuity. Stating this here
  is what stops the library from acquiring two unrelated notions under one name.

- **What local compactness is used for on this page.** Two things, and only two:
  continuity of the evaluation map, and the converse half of the exponential law.
  The compact-open topology itself, the comparison of the three topologies, the
  uniform limit theorem, completeness and Dini's theorem all do without it.

- **The real line is locally compact and the rationals are not.** For
  $\mathbb{R}$ with its usual metric a closed bounded interval around a point is
  compact ([[thm-heine-borel-rn]]), which is the hypothesis discharged. For
  $\mathbb{Q}$ with the metric of $\mathbb{R}$ it fails at every point, and that
  failure is exactly what the false statement about the evaluation map on this
  page exploits.
