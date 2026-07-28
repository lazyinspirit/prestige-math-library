---
id: def-equicontinuity
kind: definition
title: "Equicontinuity at a point, uniform equicontinuity, and pointwise boundedness of a family of maps between metric spaces"
status: published
origin: session
deps: [def-metric-space, def-metric-ball, def-metric-continuity,
       def-metric-uniform-continuity, def-metric-bounded-diameter, def-metrizable-space,
       def-topology-of-pointwise-convergence, def-metric-topology,
       def-topology-of-compact-convergence, def-lipschitz-holder-contraction]
justified_by: []
aliases: [def-equicontinuous, def-uniformly-equicontinuous]
landmark: true
short: "equicontinuity; pointwise boundedness"
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
    - title: "Equicontinuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equicontinuity"
    - title: "J. Munkres, Topology, 2nd ed., §45"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$\mathcal{F} \subseteq Y^{X}$ be a set of functions $X \to Y$
([[def-topology-of-pointwise-convergence]]). Let $a \in X$.

- $\mathcal{F}$ is **equicontinuous at $a$** if for every real $\varepsilon > 0$
  there is a real $\delta > 0$ such that
  $$d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for every } f \in \mathcal{F} \text{ and every } x \in X \text{ with } d_X(x,a) < \delta .$$
- $\mathcal{F}$ is **equicontinuous** if it is equicontinuous at every point of
  $X$.
- $\mathcal{F}$ is **uniformly equicontinuous** if for every real
  $\varepsilon > 0$ there is a real $\delta > 0$ such that
  $$d_Y\big(f(x), f(x')\big) < \varepsilon \qquad \text{for every } f \in \mathcal{F} \text{ and all } x, x' \in X \text{ with } d_X(x,x') < \delta .$$
- $\mathcal{F}$ is **pointwise bounded** if for every $x \in X$ the set
  $\mathcal{F}(x) := \{\, f(x) : f \in \mathcal{F} \,\}$ is a bounded subset of
  $Y$ ([[def-metric-bounded-diameter]]).

**Everything is in the quantifier order, and the order is the only difference
from ordinary continuity.** Continuity of each single $f \in \mathcal{F}$ at $a$
allows $\delta$ to depend on $\varepsilon$, on $a$ **and on $f$**
([[def-metric-continuity]]); equicontinuity at $a$ demands one $\delta$ serving
every member of the family at once. Uniform continuity of each single $f$ allows
$\delta$ to depend on $\varepsilon$ and on $f$
([[def-metric-uniform-continuity]]); uniform equicontinuity demands one $\delta$
serving every member and every pair of points at once. Written with the
quantifiers in order, the four conditions are

$$\forall \varepsilon\, \forall f\, \forall a\, \exists \delta, \qquad \forall \varepsilon\, \forall a\, \exists \delta\, \forall f, \qquad \forall \varepsilon\, \forall f\, \exists \delta\, \forall a, \qquad \forall \varepsilon\, \exists \delta\, \forall f\, \forall a$$

for pointwise continuity of each member, equicontinuity, uniform continuity of
each member, and uniform equicontinuity respectively.

**Immediate consequences, recorded because they are used.**

1. *Every member of an equicontinuous family is continuous*, and every member of
   a uniformly equicontinuous family is uniformly continuous: the $\delta$ that
   serves the whole family serves each member
   ([[def-metric-continuity]], [[def-metric-uniform-continuity]]).
2. *Uniform equicontinuity implies equicontinuity*, by taking $x' = a$.
3. *Both conditions are about the metrics $d_X$ and $d_Y$, not about the
   topologies they induce.* Replacing a metric by a topologically equivalent one
   can destroy either, exactly as it can destroy uniform continuity.
4. *A one-element family $\{f\}$ is equicontinuous exactly when $f$ is
   continuous*, and uniformly equicontinuous exactly when $f$ is uniformly
   continuous; so the notions do generalise the single-function ones and do not
   merely resemble them.

**Pointwise boundedness is a hypothesis about the values, not about the
functions.** It says that at each individual point the family's values stay in
one ball of $Y$; the radius may depend on the point, and no single ball need
contain all the values at all the points. The stronger condition, that
$\bigcup_{x} \mathcal{F}(x)$ is bounded, is *uniform boundedness* and is not
defined here, nothing on this page using it.

## Remarks

- **Why this definition sits on this page.** Equicontinuity is the hypothesis of
  the Ascoli-Arzelà theorem, which characterises the compact subsets of
  $C(X,Y)$ in the topology of compact convergence
  ([[def-topology-of-compact-convergence]]). That theorem is not proved here and
  is not stated here; the definition is placed on this page so that the page
  proving it has the vocabulary available earlier in the reading order. Nothing
  below this item uses equicontinuity except the companion page's examples.

- **Neither condition is implied by the other two hypotheses of Ascoli.**
  Pointwise boundedness does not imply equicontinuity, and the companion page
  gives a family of continuous functions on $[0,1]$ with all values in $[0,1]$
  that fails to be equicontinuous at $0$. Conversely an equicontinuous family need
  not be pointwise bounded: the constant functions with values $0, 1, 2, \dots$
  are uniformly equicontinuous and unbounded at every point.

- **A convenient sufficient condition.** A family of maps that are all Lipschitz
  with one common constant $L$ is uniformly equicontinuous, $\delta :=
  \varepsilon/(L+1)$ serving. The companion page uses this for the $1$-Lipschitz
  maps into $\mathbb{R}$, among them all the distance functions
  $x \mapsto d_X(x,A)$.
