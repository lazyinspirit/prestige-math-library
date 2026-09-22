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

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Then:

1. Almost surely, the path has unbounded total-variation sums on every
   nondegenerate compact interval $[a,b]\subseteq[0,\infty)$: it is not of bounded variation there.
2. For every fixed $T>0$, almost surely the dyadic partial
   quadratic-variation processes on $[0,T]$ converge uniformly to $t$.
   These assertions hold simultaneously for every horizon in any prescribed
   countable subset of $(0,\infty)$, in particular for all positive integer horizons.

The two conclusions are not in conflict: the first is an assertion about sums
of first powers $|B_{t_{i+1}}-B_{t_i}|$ over partitions, the second about sums
of squares along the named dyadic sequence.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] Almost surely the variation sums of the path are unbounded above on every nondegenerate compact interval in $[0,\infty)$, so the path is not of bounded variation there. [[cor-brownian-paths-have-infinite-total-variation-on-every-interval]]

[F2] For each fixed $T>0$, almost surely the dyadic partial quadratic-variation processes of $[0,T]$ converge to $t$ uniformly on $[0,T]$, for both conventions of [[def-quadratic-variation-along-a-partition-sequence]]. [[thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes]]

[F3] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 By [F1] there is one probability-one event on which the variation sums are unbounded on every nondegenerate compact interval in $[0,\infty)$; this is already a single almost-sure statement and needs no further intersection. [F1]

1.2 For each fixed $T>0$, [F2] gives a probability-one event on which the dyadic partial quadratic-variation processes formed from the dyadic partitions of $[0,T]$ converge uniformly to $t$ on $[0,T]$. For a prescribed countable $C\subseteq(0,\infty)$, select such a measurable full-measure event $E_T$ for each $T\in C$ using the stated AC, and intersect with the single full-measure continuity event supplied by Brownian motion. The event $E_C=\bigcap_{T\in C}E_T$ (also intersected with that continuity event) has probability one, giving simultaneous convergence for $C$. This includes finite and empty $C$ and all positive integer horizons. The partition used for each $T$ has points $kT/2^n$; convergence is not transferred between differently scaled grids. [F3] [F2, F3]

2.1 For a fixed horizon, or the prescribed countable set in step 1.2, intersecting the probability-one event of [step 1.1] with the corresponding event of [step 1.2] gives both assertions simultaneously; the dyadic partition sequence is named, so the second conclusion is a statement about that sequence and not about arbitrary partitions. [step 1.1, step 1.2]

3.1 The degenerate cases are covered: the interval in the first assertion and the horizon $T$ in the second are required to be nondegenerate and positive respectively; the value $t=0$ is a partition point at which both quadratic sums vanish; only prescribed countable families of horizons are intersected, because the dyadic partitions supplied by [F2] depend on the horizon; and AC enters through the suppliers and the countable selection of their full-measure events in [F3]. [step 1.2, step 2.1, F3, given] ∎

## Source notes

Lawler, Section 2.8, records both faces of the dichotomy: the absolute-increment sums diverge while the squared-increment sums converge to elapsed time. The corollary collects the two independently proved statements on the page and makes explicit that the quadratic variation is asserted along the named dyadic sequence.
