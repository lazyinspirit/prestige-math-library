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

For a finite sum with $n=1000$ components in dimension $d=20$, compare SVRG and SAGA over $m=2n=2000$ inner updates, with no caching of SVRG snapshot gradients. SVRG uses $n+2m=5000$ component-gradient evaluations per epoch and $O(d)$ working storage. SAGA uses $n+m=3000$ evaluations during its initial 2000-step block, then $m=2000$ new component-gradient evaluations in each later block; its table stores $nd=20{,}000$ scalar gradient coordinates, for $O(nd)$ storage.

## Facts & Assumptions

**Given:** The component count, dimension, horizon, and algorithms in the Statement.

[F1] [[alg-svrg-finite-sum-method]]: each epoch computes a full gradient using $n$ component gradients, uses two component gradients per inner update without caching, and keeps $O(d)$ working memory.

[F2] [[alg-saga-finite-sum-method]]: initialization computes $n$ component gradients, each later update uses one new component gradient, and the gradient table occupies $O(nd)$ storage.

[F3] [[def-finite-sum]]: the finite objective contains exactly $n$ component functions.

## Proof

**Given:** $n=1000$, $d=20$, and $m=2n=2000$.

1.1 By [F1], SVRG's $n$ full-gradient evaluations plus $2m$ inner evaluations total $1000+2(2000)=5000$. By [F2], SAGA's initialization plus the first block costs $n+m=1000+2000=3000$; once the table exists, a later equally long block costs one new gradient at each of its $m$ updates, hence $2000$. [F1, F2, F3, given, algebra]

2.1 Using the same $n,d$ and algorithms from step 1.1, the SVRG state consists of a fixed number of $d$-vectors by [F1], so its storage scales as $O(d)=O(20)$. The SAGA table has one $d$-vector for each of the $n$ terms by [F2], hence $nd=1000\cdot20=20{,}000$ scalar coordinates and $O(nd)$ storage. These are gradient-evaluation and storage counts; they do not count arithmetic within each gradient evaluation. [F1, F2, F3, step 1.1, given, algebra] ∎
