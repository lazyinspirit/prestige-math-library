---
id: def-isometry-and-metric-embedding
kind: definition
title: "Isometry, isometric embedding, and the subspace metric on a subset"
status: published
origin: session
deps: [def-metric-space, def-metric-topology, def-injection-surjection-bijection,
       def-metric-ball]
justified_by: []
aliases: [def-subspace-metric, def-isometry]
landmark: false
short: "isometry, subspace metric"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Isometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isometry"
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]).

**Isometric embedding and isometry.** A function $f : X \to Y$ is an
**isometric embedding** if

$$d_Y\big(f(x), f(x')\big) = d_X(x,x') \qquad \text{for all } x, x' \in X ,$$

and an **isometry** if it is in addition bijective
([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if
some isometry between them exists.

**Subspace metric.** Let $A \subseteq X$ and let

$$d_A := d_X \restriction (A \times A)$$

be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$:
the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on
triples of points, and each holds for points of $A$ because it holds for points
of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the
inclusion $A \to X$ is an isometric embedding by construction. The metric
topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$.

**Balls of a subspace are traces of balls of the ambient space.** For $a \in A$
and $r > 0$,

$$B_A(a,r) = B_X(a,r) \cap A ,$$

directly from the definitions: a point $z$ lies in the left side exactly when
$z \in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the
ambient space is always written into the ball notation, and it is the source of
every apparent paradox about balls in subspaces.

## Remarks

- **An isometric embedding is automatically injective**, and it identifies $X$
  with the subspace $f[X]$ of $Y$, topology and all; that is
  [[lem-isometry-is-an-embedding]]. The word *embedding* is therefore justified
  rather than merely suggestive.
- **A bijective isometric embedding has an isometric inverse.** If $f$ is an
  isometry then $f^{-1}$ satisfies
  $d_X(f^{-1}(y), f^{-1}(y')) = d_Y(y,y')$, because writing $y = f(x)$ and
  $y' = f(x')$ turns that into the defining identity of $f$. So "isometric" is a
  symmetric relation between metric spaces, and it is transitive because a
  composite of isometries is one.
- **Isometry is much finer than having the same topology.** Isometric spaces are
  homeomorphic, but $\mathbb{R}$ with $d(x,y) = |x-y|$ and $\mathbb{R}$ with
  $\min\{|x-y|, 1\}$ have the same topology and are not isometric, the second
  being bounded and the first not
  ([[lem-bounded-remetrisation]], [[lem-real-line-is-a-metric-space]]).
