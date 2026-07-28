---
id: cex-the-box-topology-disconnects-a-product-of-connected-spaces
kind: counterexample
title: "$\\mathbb{R}^{\\mathbb{N}}$ in the box topology is disconnected, the bounded and the unbounded sequences forming a separation, although every factor is connected and the product topology is connected"
status: draft
origin: session
deps: [thm-product-of-connected-spaces, def-connected-space, thm-connectedness-characterisations,
       def-product-topology, thm-box-finer-than-product, def-topological-space,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-metric-topology,
       def-bounded-set, def-interval, cor-archimedean-reciprocal, def-canonical-natural,
       def-sequence, cor-connected-subsets-of-the-line]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a product of connected spaces is connected *in the box
topology*. [[thm-product-of-connected-spaces]] proves this for the **product**
topology only, and the restriction is not a matter of convenience.

**Witness.** Let $\mathbb{R}^{\mathbb{N}} := \prod_{n \in \mathbb{N}} \mathbb{R}$,
each factor carrying the usual topology
([[lem-real-line-is-a-metric-space]], [[def-metric-topology]],
[[def-metrizable-space]]), and give it the box topology
$\mathcal{T}^{\square}$ ([[def-product-topology]]). A point of
$\mathbb{R}^{\mathbb{N}}$ is a sequence of reals ([[def-sequence]]). Put

$$B \;:=\; \{\, x \in \mathbb{R}^{\mathbb{N}} : x \text{ is bounded} \,\}, \qquad V \;:=\; \{\, x \in \mathbb{R}^{\mathbb{N}} : x \text{ is unbounded} \,\}$$

([[def-sequence]], [[def-bounded-set]]). Then $(B, V)$ is a separation of
$\mathbb{R}^{\mathbb{N}}$ in the box topology
([[def-connected-space]]), while every factor $\mathbb{R}$ is connected and
$\mathbb{R}^{\mathbb{N}}$ **is** connected in the product topology
([[thm-product-of-connected-spaces]]).

## Facts & Assumptions

**Given:** $\mathbb{R}^{\mathbb{N}} = \prod_{n \in \mathbb{N}} \mathbb{R}$ with the box topology, and the sets $B$ and $V$ above.

[A1] The boxes $\prod_{n} U_n$ with every $U_n$ open form a basis of the box topology; the box topology is finer than the product topology and the two differ in general ([[def-product-topology]], [[thm-box-finer-than-product]], [[def-topological-space]]).

[A2] A sequence of reals $x$ is bounded when there is $M \in \mathbb{R}$ with $|x_n| \le M$ for every $n \in \mathbb{N}$, and unbounded otherwise ([[def-sequence]], [[def-bounded-set]]).

[A3] $(a,b) = \{\, t : a < t < b \,\}$ is open in $\mathbb{R}$, and $|s - t| < 1$ gives $|s| \le |t| + 1$ and $|s| \ge |t| - 1$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metric-topology]]).

[A4] A separation of a space is a pair of open, nonempty, disjoint sets covering it; a space admitting one is disconnected ([[def-connected-space]], [[thm-connectedness-characterisations]], claim 1).

[A5] $\mathbb{R}$ is connected, being order-convex, and a product of connected spaces is connected in the **product** topology ([[cor-connected-subsets-of-the-line]], [[thm-product-of-connected-spaces]], [[def-interval]]).

[A6] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$; the canonical naturals of $\mathbb{R}$ are unbounded above ([[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

## Counterexample

**Proof technique:** direct.

1.1 $B$ and $V$ are disjoint and cover $\mathbb{R}^{\mathbb{N}}$, a sequence being bounded or unbounded and not both, by [A2]. [A2]

1.2 Both are nonempty: the constant sequence $x_n := 0$ is bounded by $M = 0$, and the sequence $y_n := \iota(n)$ of canonical naturals is unbounded by [A6], no real bounding all of them. [A2, A6]

2.1 $B$ is open in the box topology. Let $x \in B$ with bound $M$, and let $W := \prod_{n} (x_n - 1,\ x_n + 1)$, a box, hence open by [A1]. For $y \in W$ one has $|y_n - x_n| < 1$, so $|y_n| \le |x_n| + 1 \le M + 1$ for every $n$ by [A3]; hence $y \in B$ and $W \subseteq B$. [step 1.1, A1, A2, A3]

2.2 $V$ is open in the box topology. Let $x \in V$ and take the same box $W := \prod_{n} (x_n - 1,\ x_n + 1)$, open by [A1]. For $y \in W$ and any $M \in \mathbb{R}$, unboundedness of $x$ gives $n$ with $|x_n| > M + 1$, and then $|y_n| \ge |x_n| - 1 > M$ by [A3]; so no $M$ bounds $y$, that is $y \in V$ and $W \subseteq V$. [step 1.1, A1, A2, A3]

3.1 By steps 1.1, 1.2, 2.1 and 2.2 the pair $(B,V)$ is a separation of $\mathbb{R}^{\mathbb{N}}$ in the box topology, so that space is disconnected by [A4]; whereas every factor is connected and the same product is connected in the product topology by [A5]. [step 1.1, step 1.2, step 2.1, step 2.2, A4, A5] ∎

## Remarks

- **The proof of the product-topology theorem breaks at exactly one place.** There the finite-support points around a base point are dense, because a basic product-open set constrains only finitely many coordinates. A box constrains every coordinate at once, so a point differing from the base point in finitely many coordinates need not lie in a given box, the density argument fails, and with it the conclusion.

- **The separating property is invariant under bounded perturbation, and that is all that is needed.** Boundedness of a sequence is unchanged by moving every coordinate by less than $1$, and a single box of width $2$ around a point performs exactly such a perturbation. Any property with that stability separates the box topology in the same way.

- **Nothing here contradicts [[thm-box-finer-than-product]].** The box topology is finer, so it has more open sets and therefore more chances to separate; a finer topology can disconnect a space that a coarser one connects, and this witness is that phenomenon in its simplest form.
