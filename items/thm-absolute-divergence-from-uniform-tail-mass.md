---
id: thm-absolute-divergence-from-uniform-tail-mass
kind: theorem
title: "Uniform oscillatory tail mass forces failure of absolute convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-nonnegative-improper-integral-bounded-primitive-criterion,
       def-absolute-and-conditional-improper-convergence,
       thm-monotonicity-of-the-integral,
       thm-additivity-over-subintervals, def-monotone-function,
       def-sequence, def-series, lem-series-tail-invariance]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, exercises following Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $g\ge0$ be monotone on $[a,\infty)$ and suppose $\int_a^\infty g$ diverges. Let $a\le x_0<x_1<\cdots$ tend to infinity and satisfy $x_{j+1}-x_j\le M$ for some $M>0$, and suppose a locally integrable $f$ satisfies
$$\int_{x_j}^{x_{j+1}}|f(x)|\,dx\ge\delta>0$$
for every $j$. Then $\int_a^\infty|f(x)g(x)|\,dx$ diverges, so $\int_a^\infty fg$ cannot converge absolutely.

## Facts & Assumptions

**Given:** The nonnegative monotone $g$, bounded-gap sequence, and uniform block mass in the statement.

[L1] Proper integration preserves order and is additive on adjacent intervals ([[thm-monotonicity-of-the-integral]], [[thm-additivity-over-subintervals]]).

[L2] A nonnegative improper integral converges exactly when its truncations are bounded ([[thm-nonnegative-improper-integral-bounded-primitive-criterion]]).

[L3] Removing finitely many terms does not affect divergence of a nonnegative series ([[lem-series-tail-invariance]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $g$ is nonincreasing. On the $j$th block, $g(x)\ge g(x_{j+1})$, hence [L1, L2, L3]
$$\int_{x_j}^{x_{j+1}}|f|g\ge\delta g(x_{j+1}).$$
Also $\int_{x_j}^{x_{j+1}}g\le M g(x_j)$. Since $\int g$ diverges, additivity and [L2] force $\sum_jg(x_j)$, and hence its shifted tail, to diverge. Thus the block lower bounds for $\int|f|g$ have unbounded partial sums. [L1, L2, L3]

1.2 If $g$ is nondecreasing, divergence of its integral implies it is positive at some point; thereafter $g(x_j)$ is bounded below by a positive constant. Now $\int_{x_j}^{x_{j+1}}|f|g\ge\delta g(x_j)$, whose partial sums diverge. [given]

2.1 In either monotonicity case the nonnegative truncations of $|fg|$ are unbounded, so [L2] proves divergence and the definition rules out absolute convergence. [L2] ∎
