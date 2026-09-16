---
id: cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation
kind: corollary
title: "Brownian one- and quadratic variation"
status: draft
origin: pipeline
deps: [cor-brownian-paths-have-infinite-total-variation-on-every-interval, thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes, def-quadratic-variation-along-a-partition-sequence, def-axiom-of-choice, def-brownian-motion]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Almost surely
both of the following hold.

1. The path has infinite total variation sums on every nondegenerate compact
   interval: it is not of bounded variation there.
2. For every $T>0$ the dyadic partial quadratic-variation processes converge
   uniformly on $[0,T]$ to $t$, so the quadratic variation of the path along
   the dyadic partition sequence is the deterministic function $t$ on
   $[0,\infty)$.

The two conclusions are not in conflict: the first is an assertion about sums
of first powers $|B_{t_{i+1}}-B_{t_i}|$ over partitions, the second about sums
of squares along the named dyadic sequence.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] Almost surely the variation sums of the path are unbounded above on every nondegenerate compact interval, so the path is not of bounded variation there. [[cor-brownian-paths-have-infinite-total-variation-on-every-interval]]

[F2] For each fixed $T>0$, almost surely the dyadic partial quadratic-variation processes of $[0,T]$ converge to $t$ uniformly on $[0,T]$, for both conventions of [[def-quadratic-variation-along-a-partition-sequence]]. [[thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes]]

[F3] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 By [F1] there is one probability-one event on which the variation sums are unbounded on every nondegenerate compact interval; this is already a single almost-sure statement and needs no further intersection. [F1]

1.2 By [F2] applied with $T=N$ for each integer $N\ge1$ and intersected over the countably many $N$, there is a probability-one event on which the dyadic partial quadratic-variation process of $[0,N]$ converges uniformly to $t$ for every $N\ge1$; consequently, for an arbitrary $T>0$, choosing an integer $N\ge T$ gives $\sup_{0\le t\le T}|[B]^{\pi_m}_t-t|\le\sup_{0\le t\le N}|[B]^{\pi_m}_t-t|\to0$, so the convergence is uniform on every compact time interval, and the limit function is $t\mapsto t$. [F2]

2.1 Intersecting the probability-one events of [step 1.1] and [step 1.2] gives an event of probability one on which both assertions hold simultaneously; the dyadic partition sequence is named, so the second conclusion is a statement about that sequence and not about arbitrary partitions. [step 1.1, step 1.2]

3.1 The degenerate cases are covered: the interval in the first assertion and the horizon $T$ in the second are required to be nondegenerate and positive respectively; the value $t=0$ is a partition point at which both quadratic sums vanish; the countable intersection is over integer horizons only, which suffices by monotonicity of the supremum in $T$; and AC enters only through [F3]. [step 1.2, step 2.1, F3, given] ∎

## Source notes

Lawler, Section 2.8, records both faces of the dichotomy: the absolute-increment sums diverge while the squared-increment sums converge to elapsed time. The corollary collects the two independently proved statements on the page and makes explicit that the quadratic variation is asserted along the named dyadic sequence.
