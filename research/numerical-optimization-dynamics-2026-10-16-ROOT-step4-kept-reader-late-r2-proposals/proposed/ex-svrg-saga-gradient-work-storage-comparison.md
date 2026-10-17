---
id: ex-svrg-saga-gradient-work-storage-comparison
kind: example
title: SVRG and SAGA gradient-work and storage ledger
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-svrg-finite-sum-method
  - alg-saga-finite-sum-method
  - def-finite-sum
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rie Johnson and Tong Zhang, Accelerating Stochastic Gradient Descent using Predictive Variance Reduction, NeurIPS 2013"
      url: https://proceedings.neurips.cc/paper_files/paper/2013/file/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Paper.pdf
      locator: Section 2, SVRG work and storage.
    - title: "Aaron Defazio, Francis Bach, and Simon Lacoste-Julien, SAGA: A Fast Incremental Gradient Method With Support for Non-Strongly Convex Composite Objectives, NeurIPS 2014"
      url: https://proceedings.neurips.cc/paper_files/paper/2014/file/937964195d6fb3a55cd7cc578165f058-Paper.pdf
      locator: Sections 2–3, SAGA stored-gradient work and memory comparison.
---

## Statement

Let a finite sum have $n,d\ge1$ components and dimension, and let an SVRG epoch and SAGA block each have $m\ge1$ inner updates. Count component-gradient evaluations separately from scalar coordinate arithmetic, and do not cache SVRG snapshot gradients. SVRG uses $n+2m$ component-gradient evaluations per epoch, $O(nd)$ arithmetic to assemble its full gradient, $O(d)$ arithmetic per inner update, and $O(d)$ working storage. SAGA uses $n+m$ component-gradient evaluations during its initialized block and $m$ new evaluations in each later equally long block; initializing its mean takes $O(nd)$ arithmetic, each later update takes $O(d)$ arithmetic, and its table plus auxiliary vectors use $O(nd)$ storage. The cost of evaluating a component gradient is not bounded here. For $n=1000$, $d=20$, and $m=2n=2000$, the gradient counts are 5000 SVRG evaluations per epoch, 3000 SAGA evaluations in the initial block, and 2000 in a later block; the SAGA table has 20,000 scalar coordinates.

## Facts & Assumptions

**Given:** The component count, dimension, horizon, and algorithms in the Statement.

[F1] [[alg-svrg-finite-sum-method]]: the procedure computes the full finite-sum gradient, evaluates both displayed component gradients at every inner update without caching snapshot values, and uses a fixed number of vector additions, scalings, and temporaries per update. After the loop it independently selects $J$ uniformly from $\{0,\ldots,m-1\}$ and returns $x_J$.

[F2] [[alg-saga-finite-sum-method]]: initialization evaluates one component gradient for each table entry and forms their running mean; each later update evaluates one sampled component gradient once and reuses it for the estimator and replacement, with a fixed number of vector operations and temporary $d$-vectors.

[F3] [[def-finite-sum]]: the finite objective contains exactly $n$ component functions.

## Proof

**Given:** $n,d\ge1$, an epoch and blocks of length $m\ge1$, and the displayed finite-sum algorithms. The numerical instance is $n=1000$, $d=20$, and $m=2n=2000$.

1.1 By [F1] and [F3], one full gradient evaluates each of the $n$ component gradients once, and each of the $m$ inner updates evaluates two component gradients, so SVRG uses $n+2m$ evaluations. By [F2], SAGA initializes all $n$ table entries and evaluates one sampled component per update, so its initialized block uses $n+m$ evaluations and a later block uses $m$. Substitution of $n=1000$ and $m=2000$ gives 5000, 3000, and 2000, respectively. [F1, F2, F3, given, algebra]

1.2 A full gradient sums and scales $n$ vectors with $d$ coordinates, using $O(nd)$ coordinate operations; each update in [F1] has a fixed number of vector operations and therefore costs $O(d)$. SAGA's initialization forms the table mean from $n$ vectors for $O(nd)$ coordinate operations, and each update in [F2] uses a fixed number of vector operations for $O(d)$. [F1, F2, F3, given, algebra]

2.1 To implement the random-iterate output in [F1] without retaining its trajectory, draw the independent uniform index $J\in\{0,\ldots,m-1\}$ before the inner loop, save $x_t$ when $t=J$, execute all $m$ updates, and return the saved vector. Conditional on the snapshot, for every index string $(i_0,\ldots,i_{m-1})$ and $j$, both this implementation and the displayed post-loop draw assign joint probability $n^{-m}/m$ to that string and $J=j$; the iterates are the same deterministic functions of that string. Hence the joint law of the entire epoch trajectory and returned $x_J$ is identical, also after averaging over a random snapshot. The full gradient can be accumulated with one running $d$-vector; the snapshot, current iterate, component-gradient temporaries, and saved output require only a fixed number of $d$-vectors and index/counter words. This law-equivalent implementation therefore uses $O(d)$ working storage without replaying updates or caching snapshot component gradients, and its gradient counts remain exactly those in step 1.1. By [F2], SAGA stores $n$ table vectors and a constant number of additional $d$-vectors, giving $nd+O(d)=O(nd)$ scalars because $n\ge1$. At the numerical instance the table itself contains $1000\cdot20=20{,}000$ coordinates. The accounting excludes arithmetic within each component-gradient evaluation and makes no total-runtime claim. [F1, F2, given, step 1.1, algebra] ∎

