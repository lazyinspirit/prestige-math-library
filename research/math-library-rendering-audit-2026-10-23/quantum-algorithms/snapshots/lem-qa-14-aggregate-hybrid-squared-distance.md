---
id: lem-qa-14-aggregate-hybrid-squared-distance
kind: lemma
title: Aggregate hybrid distance budget over all marked indices
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - lem-qa-14-cumulative-hybrid-bound
  - def-qa-14-query-mismatch-projectors
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
axiom_use: None; the proof uses finite-dimensional orthogonal decompositions and Cauchy–Schwarz.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 and Corollary 3.4 (PDF pp.7–10): aggregate query-magnitude bound."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§23.2, printed pp.110–112 (PDF pp.119–121): summing address-query magnitudes."
---

## Statement

For every $T\ge0$ query algorithm on $N$ addresses, with final states and query magnitudes as in [[lem-qa-14-cumulative-hybrid-bound]],
$$\sum_{i=1}^{N}\|\psi_T^i-\psi_T^0\|^2\le4T^2.$$

## Facts & Assumptions

**Given:** The cumulative hybrid estimate and the complete orthogonal address projectors.

[F1] [[lem-qa-14-cumulative-hybrid-bound]]: $\|\psi_T^i-\psi_T^0\|\le2\sum_{t<T}\sqrt{q_{t,i}}$ with $q_{t,i}=\|\Pi_{i-1}\psi_t^0\|^2$.

[F2] [[def-qa-14-query-mismatch-projectors]]: $\Pi_0,\ldots,\Pi_{N-1}$ are pairwise orthogonal and sum to identity on the query address, response, and work registers.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for finite real vectors, the square of the sum of coordinates is at most the vector length times the sum of their squares.

## Proof

1.1 If $T=0$, [F1] gives zero distance for every $i$, so the sum is zero. If $T\ge1$, squaring [F1] and applying [F3] to the real numbers $\sqrt{q_{t,i}}$ gives $\|\psi_T^i-\psi_T^0\|^2\le4T\sum_{t=0}^{T-1}q_{t,i}$; each $q_{t,i}$ is nonnegative because it is a squared norm. [F1, F3, algebra]

2.1 Summing over $i$ and interchanging finite sums, completeness and orthogonality in [F2] give $\sum_{i=1}^Nq_{t,i}=\sum_{j=0}^{N-1}\|\Pi_j\psi_t^0\|^2=\|\psi_t^0\|^2=1$ for each $t$. Therefore $\sum_i\|\psi_T^i-\psi_T^0\|^2\le4T\sum_{t<T}1=4T^2$. [F2, step 1.1, algebra] ∎
