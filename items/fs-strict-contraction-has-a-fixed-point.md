---
id: fs-strict-contraction-has-a-fixed-point
kind: false-statement
title: "FALSE: $d(fx, fy) < d(x,y)$ for all $x \\ne y$ on a complete metric space forces a fixed point"
status: draft
origin: session
deps: [thm-banach-fixed-point, def-lipschitz-holder-contraction, def-complete-metric-space,
       lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding,
       thm-complete-subspace-iff-closed, lem-of-inverse-positive,
       thm-euclidean-space-complete, def-interval, thm-metric-sequential-closure,
       lem-limit-preserves-order, def-metric-space, lem-of-abs-value, lem-of-sign-rules,
       def-metric-convergence, def-metric-topology, def-metric-uniform-continuity]
justified_by: []
forward_refs: [cex-strict-contraction-without-a-fixed-point]
aliases: []
landmark: true
short: "FALSE: strict contractions have fixed points"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "Banach fixed-point theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_fixed-point_theorem"
pipeline_run: null
---

## Statement

**The following statement is FALSE.**

> Let $(X,d)$ be a nonempty complete metric space
> ([[def-complete-metric-space]]) and let $f : X \to X$ satisfy
> $$d\big(f(x), f(y)\big) < d(x,y) \qquad \text{for all } x, y \in X \text{ with } x \ne y .$$
> Then $f$ has a fixed point.

The condition displayed above is what many texts call *contractive*; it is
strictly weaker than being a contraction ([[def-lipschitz-holder-contraction]]),
which demands a **single** constant $q < 1$ with
$d(f(x),f(y)) \le q\,d(x,y)$ for all pairs at once. Banach's theorem
([[thm-banach-fixed-point]]) assumes the latter, and the difference between the
two hypotheses is exactly what this item is about.

## Facts & Assumptions

**Given:** The interval $X := [1,\infty) \subseteq \mathbb{R}$ ([[def-interval]]) with the metric $d(x,y) := |x-y|$ inherited from $\mathbb{R}$, and the function $f : X \to \mathbb{R}$ given by $f(x) := x + 1/x$.

[A1] The false claim: a strictly distance-decreasing self-map of a nonempty complete metric space has a fixed point.

[L1] The absolute value makes $\mathbb{R}$ a metric space, and a restriction of a metric to a subset is a metric with the same distances ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]], [[lem-of-abs-value]]).

[L2] $\mathbb{R}$ with the usual metric is complete ([[thm-euclidean-space-complete]]).

[L3] A closed subset of a complete metric space is complete, and a subset is closed exactly when it is sequentially closed ([[thm-complete-subspace-iff-closed]], [[thm-metric-sequential-closure]], [[def-metric-topology]], [[def-metric-convergence]]).

[L4] Limits of reals preserve non-strict inequalities ([[lem-limit-preserves-order]]).

[L5] $a > 0$ gives $a^{-1} > 0$, and a product of positives is positive; multiplying an inequality by a positive preserves it ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

[L6] $|uv| = |u||v|$ for reals ([[lem-of-abs-value]]).

## Refutation

**Proof technique:** direct.

1.1 $X$ is nonempty, since $1 \in X$; and $X$ is sequentially closed in $\mathbb{R}$, because a sequence in $X$ converging to a real $p$ satisfies $x_k \ge 1$ for every $k$ and hence $p \ge 1$, so $p \in X$. [L1, L4]

1.2 $f$ maps $X$ into $X$: for $x \ge 1$ one has $1/x > 0$, so $f(x) = x + 1/x > x \ge 1$. [L5]

1.3 For all $x,y \in X$: $f(x) - f(y) = (x - y) + \big(1/x - 1/y\big) = (x-y) - \frac{x-y}{xy} = (x-y)\Big(1 - \frac{1}{xy}\Big)$, since $1/x - 1/y = (y-x)/(xy)$. [L5]

2.1 Hence $X$ is closed in $\mathbb{R}$, and since $\mathbb{R}$ is complete, $(X,d)$ is a nonempty complete metric space. [step 1.1, L1, L2, L3]

2.2 Let $x, y \in X$ with $x \ne y$. Then $x,y \ge 1$ and they are not both equal to $1$, so $xy > 1$ and hence $0 < 1/(xy) < 1$, giving $0 < 1 - 1/(xy) < 1$. [step 1.2, L5]

2.3 $f$ has no fixed point in $X$: $f(x) - x = 1/x > 0$ for every $x \in X$, so $f(x) \ne x$. [step 1.2, L5]

3.1 Therefore $d(f(x),f(y)) = |f(x)-f(y)| = |x-y| \cdot \big(1 - 1/(xy)\big) < |x-y| = d(x,y)$ for all $x \ne y$ in $X$: the map $f$ strictly decreases every distance between distinct points. [step 1.3, step 2.2, L5, L6]

4.1 So $(X,d)$ is a nonempty complete metric space and $f : X \to X$ strictly decreases every distance between distinct points and has no fixed point, which refutes [A1]. The displayed statement is false. [step 2.1, step 1.2, step 3.1, step 2.3, A1] ∎

## Remarks

- **What goes wrong, quantitatively.** The factor by which $f$ shrinks distances is $1 - 1/(xy)$, which is below $1$ at every pair but approaches $1$ as $x$ and $y$ grow. No single $q < 1$ dominates all of them, so $f$ is not a contraction and Banach's theorem does not apply. The failure is therefore not an accident of this example but the exact difference between a pointwise inequality and a uniform one, which is the same difference as between continuity and uniform continuity ([[def-metric-uniform-continuity]]).
- **Boundedness would repair it, but that is not proved here.** On a *compact* space the strict condition does force a fixed point, by minimising $x \mapsto d(x,f(x))$; compactness of metric spaces is a later page in this library and nothing of the sort is claimed at this point. What the present item establishes is only that completeness alone is not enough.
- **The unboundedness of $[1,\infty)$ is doing the work**, and the map is pushing every point to the right by a shrinking but always positive amount. The worked-out version of this witness, including the verification that no contraction constant exists, is [[cex-strict-contraction-without-a-fixed-point]] on the companion page.
