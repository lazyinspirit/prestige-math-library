---
id: cor-intermediate-value-theorem-topological
kind: corollary
title: "A real-valued continuous map on a connected space has order-convex image, so it takes every value between any two of its values"
status: published
origin: session
deps: [thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line,
       def-connected-space, def-continuous-map-top, def-interval,
       def-subspace-topology-top, def-metrizable-space, lem-real-line-is-a-metric-space,
       def-metric-topology]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "J. R. Munkres, Topology, 2nd ed., §24"
      url: "https://en.wikipedia.org/wiki/Topology_(Munkres_book)"
pipeline_run: null
---

## Statement

Let $X$ be a connected topological space ([[def-connected-space]]) and let
$f : X \to \mathbb{R}$ be continuous ([[def-continuous-map-top]]), $\mathbb{R}$
carrying its usual topology ([[lem-real-line-is-a-metric-space]],
[[def-metric-topology]], [[def-metrizable-space]]). Then:

1. $f[X]$ is an order-convex subset of $\mathbb{R}$ ([[def-interval]]).
2. **Intermediate values are attained.** If $p, q \in X$ and $c \in \mathbb{R}$
   satisfies $f(p) \le c \le f(q)$, then there is $x \in X$ with $f(x) = c$.

Claim 2 is the intermediate value theorem with no hypothesis on $X$ beyond
connectedness: no order, no metric, no interval. The classical statement for a
continuous $f : [a,b] \to \mathbb{R}$ is the special case $X = [a,b]$, that
subspace being connected by [[cor-connected-subsets-of-the-line]].

## Facts & Assumptions

**Given:** A connected space $X$, a continuous $f : X \to \mathbb{R}$, and $\mathbb{R}$ with its usual topology.

[A1] A continuous image of a connected space is a connected subset of the target ([[thm-continuous-image-of-a-connected-space]], claim 1).

[A2] A subset of $\mathbb{R}$ is a connected subset exactly when it is order-convex, that is when it contains every point lying between two of its points ([[cor-connected-subsets-of-the-line]], [[def-interval]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 $f[X]$ is a connected subset of $\mathbb{R}$, by [A1] applied to the connected space $X$ and the continuous map $f$. [A1, given]

2.1 Hence $f[X]$ is order-convex by [A2]; this is claim 1. [step 1.1, A2]

3.1 For claim 2, let $p, q \in X$ and $c \in \mathbb{R}$ with $f(p) \le c \le f(q)$. Both $f(p)$ and $f(q)$ lie in $f[X]$, so $c \in f[X]$ by step 2.1, which says precisely that $c = f(x)$ for some $x \in X$. [step 2.1] ∎

## Remarks

- **Why $f(p) \le c \le f(q)$ and not $f(p) < c < f(q)$.** Order-convexity is stated with non-strict inequalities, so the endpoints are included and the statement covers $c = f(p)$ and $c = f(q)$ without a separate clause. No assumption $f(p) \le f(q)$ is needed either: if $f(q) \le c \le f(p)$ the same argument applies with the two points exchanged.

- **What is not claimed.** Nothing here says that $f[X]$ is an interval in the sense of one of the nine written forms of [[def-interval]]; that classification of the order-convex sets is recorded there as unproved. Nor does the corollary say anything about how many $x$ satisfy $f(x) = c$, or that such an $x$ can be found by any procedure. It is an existence statement obtained by transporting connectedness, and the witness is never exhibited.

- **The hypothesis on $X$ is exactly connectedness.** If $X$ is disconnected the conclusion fails at once: a separation $(U,V)$ of $X$ gives a continuous $f$ equal to $0$ on $U$ and $1$ on $V$ whose image is $\{0,1\}$, which omits every value strictly between.
