---
id: thm-qa-34-modfkv-low-rank-approximation
kind: theorem
title: ModFKV low-rank approximation supplier
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-34-modfkv-low-rank-description
  - def-qa-34-l2-sample-query-access
  - def-qa-34-threshold-band-svd-target
  - lem-qa-34-modfkv-sampling-gram-bound
  - lem-qa-34-exponential-gram-concentration
  - lem-qa-34-two-sketch-threshold-band-bound
  - thm-qa-34-best-frobenius-rank-k-approximation
  - thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
    - title: Alan Frieze, Ravi Kannan, and Santosh Vempala, Fast Monte-Carlo Algorithms for Finding Low-Rank Approximations
      url: https://www.cs.princeton.edu/courses/archive/spring04/cos598B/bib/FriezeKV-lowrank.pdf
---

## Statement

Let $A\in\mathbb R^{m\times n}$ be nonzero, $F=\|A\|_F$, and suppose it has the exact row/column ℓ2 sample/query access of [[def-qa-34-l2-sample-query-access]]. Let $0<\sigma\le F$, $0<\epsilon\le\tfrac14\sqrt{\sigma/F}$, $\epsilon^2\le\eta\le1$, and $0<\delta<1$. Set $K=F^2/\sigma^2$ and $\bar\epsilon=\eta\epsilon^2$. For a sufficiently large universal constant in the sample count
$$q=\Theta\!\left(\frac{K^4}{\bar\epsilon^2}\log\frac2\delta\right),$$
the procedure [[alg-qa-34-modfkv-low-rank-description]] outputs a description of a rank-at-most-$K$ matrix $D=AS^T\widehat U\widehat\Sigma^{-2}\widehat U^TS$ such that, with probability at least $1-\delta$, there is a threshold-band target $A_{\sigma,\eta}$ from [[def-qa-34-threshold-band-svd-target]] satisfying
$$\|D-A_{\sigma,\eta}\|_F\le\epsilon F.$$
The ModFKV description itself queries $O(q^2)$ matrix entries and computes an SVD of a $q\times q$ matrix at $O(q^3)$ arithmetic cost, before any later sampling from $D$'s rows. These operation counts use the stated exact-access arithmetic model and do not include unprovided preprocessing for the input access structure.

## Facts & Assumptions

**Given:** The matrix, exact access, and parameters of the Statement.

[F1] [[lem-qa-34-exponential-gram-concentration]] controls both Gram errors with probability at least $1-\delta$, and proves $\|S\|_F=\|W\|_F=F$ exactly.

[F2] [[lem-qa-34-two-sketch-threshold-band-bound]] gives the retained rank, near-isometry, and the threshold-band error from these two Gram errors.

## Proof

1.1 Set $t=\bar\epsilon/(1000K^2)$. Choose the integer $q=\lceil10^6K^4\bar\epsilon^{-2}(1+\sqrt{2\log(2/\delta)})^2\rceil$. This has the asserted $\Theta$ order, uniformly for $0<\delta<1$, and [F1] gives both Gram errors at most $tF^2$ except on an event of probability at most $\delta$. The algorithm's mixture probability equals $\|S_{*,j}\|^2/F^2$, so a zero-probability column is never drawn and its INVALID branch has probability zero. [given, F1, algebra]

2.1 Since $K\ge1$, $\eta\le1$ and $\epsilon\le1/4$, $tK\le1/2$. On the event in step 1.1, [F2] applies to the actual strictly retained singular values and to $M=S^TU\Sigma^{-2}U^TS$. It gives rank at most $K$ and a threshold-band target with error at most $F(tK+\sqrt{77tK/\eta})\le F(\epsilon^2/1000+\epsilon\sqrt{77/1000})\le\epsilon F$. Empty retention returns zero and is included in [F2]. No gap between actual singular values is assumed. [given, F2, step 1.1, algebra]

3.1 The $q$ row samples, $q$ mixture samples and the probabilities of the sampled columns can be obtained using at most $O(q^2)$ input queries: each mixture probability sums $q$ known row probabilities and queried squared entries. Forming $W$ uses $q^2$ entries; its exact-arithmetic SVD and the stored matrices require $O(q^3)$ arithmetic. These costs give the stated counts for the description and make no claim to materialize $A$, $S$ or $D$ in full. [given, step 1.1, step 2.1, algebra] ∎
