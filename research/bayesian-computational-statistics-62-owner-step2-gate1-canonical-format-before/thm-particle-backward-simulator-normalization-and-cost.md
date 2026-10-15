---
id: thm-particle-backward-simulator-normalization-and-cost
kind: theorem
title: Normalization and operation counts for particle backward smoothing
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - alg-particle-backward-simulator
proof_strategy: direct
axiom_use: No choice axiom is used; the result is finite algebra and loop counting.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 11, §§11.2–11.3"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §5.2"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Assume the finite particle-mode inputs and denominator conditions of
[[alg-particle-backward-simulator]]. The backward index probabilities at
each step are nonnegative and sum to one. In the all-marginals recursion,
the raw updated smoothing weights also sum to one, so the optional explicit
normalization in the algorithm leaves them unchanged. Count one transition
density evaluation and a bounded number of real arithmetic operations as
unit cost, and sample from a categorical vector by a linear scan of its $N$
entries. Then drawing $S$ backward paths costs $O(SN(T+1))$ operations,
including terminal draws, and computing all smoothed marginal weights costs
$O(N+N^2T)$, including initialization and output. For $T\ge1$ these are
respectively $O(SNT)$ and $O(N^2T)$; for fixed $S$, path sampling costs
$O(N(T+1))$.

## Facts & Assumptions

**Given:** Normalized filtering weights $w_t^i$, finite positive backward
denominators, the all-marginals update in the algorithm, and the unit-cost
convention in the Statement.

[F1] For each reachable child value $x'$, the particle backward probabilities omit indices with $w_t^i=0$ and divide the remaining scores by the finite positive score sum $q_{t+1}^N(x')$. [[alg-particle-backward-simulator]]

[F2] The all-marginals recursion forms a probability vector for each child with positive smoothing weight, omits zero filtering and smoothing weights before evaluating transition densities, and updates by mixing those vectors with $\bar w_{t+1|T}$, initialized by $\bar w_{T|T}=w_T$. [[alg-particle-backward-simulator]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For any child value $x'$ at which a backward weight vector is required, the mode's admissibility condition gives $0<q_{t+1}^N(x')<\infty$. For each index with $w_t^i=0$ the algorithm sets its backward probability to zero without evaluating its density; for each positive-weight index the score is finite and nonnegative. Summing over $i$ therefore gives $\sum_{i:w_t^i>0}w_t^if_{t+1}(x'\mid x_t^i)/q_{t+1}^N(x')=1$. Thus each required backward vector is a probability vector. [F1, F2, given, algebra]

1.2 Suppose $\sum_j\bar w_{t+1|T}^j=1$. For every $j$ with $\bar w_{t+1|T}^j>0$, admissibility makes its score sum finite positive, and the associated vector $(b_t^{i,j})_i$ sums to one by step 1.1. The raw update is $\bar w_{t|T}^i=\sum_{j:\bar w_{t+1|T}^j>0}\bar w_{t+1|T}^jb_t^{i,j}$. Summing over $i$ gives $\sum_{j:\bar w_{t+1|T}^j>0}\bar w_{t+1|T}^j=1$. Since $\bar w_{T|T}=w_T$ sums to one, backward induction proves every update is already normalized; zero smoothing-weight terms are never evaluated. [F2, given, step 1.1, algebra]

2.1 At each of the $T$ backward times for one sampled path, the algorithm evaluates $N$ transition scores and scans $N$ probabilities; terminal sampling also scans $N$ entries. Storing the path costs $O(T+1)$, so $S$ paths take $O(SN(T+1))$ operations. In the all-marginals recursion, initialization and output cost $O(N(T+1))$, while each backward time evaluates one transition score and performs bounded arithmetic for each of the $N^2$ past/future particle pairs. The total is $O(N(T+1)+N^2T)=O(N+N^2T)$ because $N\ge1$. For fixed $S$ this gives $O(N(T+1))$ path cost, and when $T\ge1$ the bounds reduce to $O(SNT)$ and $O(N^2T)$. [F1, F2, given] ∎
