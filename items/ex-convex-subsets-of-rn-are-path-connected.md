---
id: ex-convex-subsets-of-rn-are-path-connected
kind: example
title: "Every convex subset of $\\mathbb{R}^n$, in particular every ball and $\\mathbb{R}^n$ itself, is path-connected and hence connected"
status: draft
origin: session
deps: [def-path-connected, thm-path-connected-implies-connected, def-connected-space,
       lem-product-topology-on-rn, def-product-topology, thm-product-universal-property,
       lem-metrics-on-rn, def-norm-and-normed-space, def-p-norms-on-rn, def-vector-space,
       def-continuous-map-top, def-interval, def-metric-topology, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-metric-ball, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Convex set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convex_set"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Example

Let $n \in \mathbb{N}$ with $n \ge 1$ and give $\mathbb{R}^n$ the product
topology, which is the metric topology of $d_\infty$
([[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-metric-topology]]).
Recall that $\mathbb{R}^n$ is a real vector space under coordinatewise operations
([[def-vector-space]], [[def-norm-and-normed-space]]).

A subset $C \subseteq \mathbb{R}^n$ is **convex** when

$$x, y \in C \ \text{ and } \ t \in [0,1] \quad \Longrightarrow \quad (1-t)x + ty \in C$$

([[def-interval]]). Then:

1. **Every convex $C \subseteq \mathbb{R}^n$ is path-connected**
   ([[def-path-connected]]), hence connected ([[def-connected-space]],
   [[thm-path-connected-implies-connected]]).
2. **Every ball is convex**, in each of the norms $\lVert\cdot\rVert_1$,
   $\lVert\cdot\rVert_2$, $\lVert\cdot\rVert_\infty$
   ([[def-p-norms-on-rn]], [[def-metric-ball]]); so every ball of
   $\mathbb{R}^n$ is path-connected and connected.
3. **$\mathbb{R}^n$ itself is convex**, hence path-connected and connected, and
   so is every half-space
   $\{\, x : x_k \le c \,\}$, and every box $\prod_{k<n} J_k$ with each $J_k$ an
   order-convex subset of $\mathbb{R}$.

## Facts & Assumptions

**Given:** $\mathbb{R}^n$ with $n \ge 1$, its product topology, and a convex subset $C \subseteq \mathbb{R}^n$.

[A1] A map into $\mathbb{R}^n$ is continuous exactly when each of its $n$ components is; a map into a subspace is continuous exactly when its composite with the inclusion is ([[thm-product-universal-property]], claim 2, [[def-subspace-topology-top]], [[def-continuous-map-top]]).

[A2] An affine map $t \mapsto c + mt$ of $\mathbb{R}$ into $\mathbb{R}$ is continuous, since $|m(s-t)| = |m||s-t|$, so a ball of radius $\delta/|m|$ maps into one of radius $\delta$ when $m \ne 0$, and a constant map is continuous ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]]).

[A3] A path in a subset $A$ from $x$ to $y$ is a continuous $\gamma : [0,1] \to A$ with $\gamma(0) = x$, $\gamma(1) = y$; $A$ is path-connected when every pair of its points is joined by one ([[def-path-connected]], [[def-interval]]).

[A4] Every path-connected subset is connected ([[thm-path-connected-implies-connected]], claim 2, [[def-connected-space]]).

[A5] A norm satisfies $\lVert \lambda v\rVert = |\lambda|\,\lVert v\rVert$ and $\lVert u + v\rVert \le \lVert u\rVert + \lVert v\rVert$, and the ball $B(c,r)$ of the induced metric is $\{\, y : \lVert y - c\rVert < r \,\}$ ([[def-norm-and-normed-space]], [[def-p-norms-on-rn]], [[def-metric-ball]], [[lem-metrics-on-rn]]).

[A6] $\mathbb{R}^n$ is a real vector space, so it is closed under the scalar multiples and sums forming $(1-t)x + ty$ ([[def-vector-space]]); and an order-convex $J \subseteq \mathbb{R}$ contains every real lying between two of its elements ([[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 Let $x, y \in C$ and define $\gamma : [0,1] \to \mathbb{R}^n$ by $\gamma(t) := (1-t)x + ty$, so that the $k$-th component is $t \mapsto x_k + t(y_k - x_k)$, an affine map of $\mathbb{R}$ into $\mathbb{R}$. [A2]

1.2 Every ball is convex: for $x, y \in B(c,r)$ and $t \in [0,1]$, $\lVert (1-t)x + ty - c\rVert = \lVert (1-t)(x-c) + t(y-c)\rVert \le (1-t)\lVert x-c\rVert + t\lVert y-c\rVert < (1-t)r + tr = r$, using [A5] and $1-t \ge 0$, $t \ge 0$. [A5]

1.3 $\mathbb{R}^n$ is convex, since $(1-t)x + ty$ is an element of $\mathbb{R}^n$ for all $x, y$ and $t$; a box $\prod_{k<n} J_k$ with each $J_k$ order-convex is convex, since $(1-t)x_k + t y_k$ lies between $x_k$ and $y_k$ and hence in $J_k$; and a half-space $\{x : x_k \le c\}$ is convex for the same reason. [A6]

2.1 $\gamma$ is continuous into $\mathbb{R}^n$ by [A1] and step 1.1, each component being continuous by [A2]; and $\gamma$ takes values in $C$ by convexity, so it is continuous into the subspace $C$ by [A1]. [step 1.1, A1, A2]

3.1 $\gamma(0) = x$ and $\gamma(1) = y$, so $\gamma$ is a path in $C$ from $x$ to $y$ by [A3]. As $x, y \in C$ were arbitrary, $C$ is path-connected; and it is connected by [A4]. This is claim 1. [step 1.1, step 2.1, A3, A4]

4.1 Claims 2 and 3 follow from claim 1 together with steps 1.2 and 1.3, each of the sets listed there being convex. [step 1.2, step 1.3, step 3.1] ∎

## Remarks

- **The path is the straight segment and nothing more is needed.** Convexity is exactly the hypothesis that the segment between two points of the set stays in the set, so the definition of the path writes itself; the only work is that the segment is a continuous map, which is [A1] plus the continuity of an affine map of one real variable.

- **Convexity is far from necessary.** A circle is path-connected and not convex, and so is any set obtained from a convex one by bending it. Nothing above asserts a converse.

- **The hypothesis $n \ge 1$ comes from $d_\infty$.** $\lVert\cdot\rVert_\infty$ is a maximum over $n$ terms and is undefined at $n = 0$ ([[def-p-norms-on-rn]], [[lem-metrics-on-rn]]). At $n = 0$ the product is a one-point space, which is path-connected outright.
