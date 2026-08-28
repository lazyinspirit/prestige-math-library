---
id: cor-trace-of-adjacency-power-counts-closed-walks
kind: corollary
title: "The trace of $A(G)^k$ counts closed walks of length $k$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-adjacency-matrix-powers-count-walks, def-trace-of-a-square-matrix-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, Corollary 4.7.3"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
---

## Statement

Let $G$ be a finite simple graph with adjacency matrix $A(G)$, and let
$k\ge1$. Then

$$\operatorname{tr}\bigl(A(G)^k\bigr)$$

equals the number of closed walks of length $k$ in $G$.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with adjacency matrix $A$, and an integer $k\ge1$.

[L1] The entry $(A^k)_{ii}$ counts the walks of length $k$ from $v_i$ back to $v_i$ ([[thm-adjacency-matrix-powers-count-walks]]).

[F1] The trace of a square matrix is the sum of its diagonal entries ([[def-trace-of-a-square-matrix-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 For each vertex $v_i$, a walk of length $k$ from $v_i$ to itself is exactly a closed walk of length $k$ whose chosen start vertex is $v_i$, so [L1] makes $(A^k)_{ii}$ the number of such closed walks. [L1]

2.1 Summing step 1.1 over all vertices counts every closed walk of length $k$ exactly once for each of its chosen start vertices, and by [F1] that sum is $\operatorname{tr}(A^k)$. Hence the trace counts the closed walks of length $k$. [step 1.1, F1] ∎
