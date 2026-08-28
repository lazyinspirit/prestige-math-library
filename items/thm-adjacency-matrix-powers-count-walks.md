---
id: thm-adjacency-matrix-powers-count-walks
kind: theorem
title: "The $(i,j)$ entry of $A(G)^k$ counts walks of length $k$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjacency-matrix-of-a-finite-simple-graph, def-graph-walk-trail-path-and-cycle, thm-matrix-of-a-composite-is-the-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, Theorem 4.7.1"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
---

## Statement

Let $G$ be a finite simple graph with ordered vertex set
$V(G)=\{v_1,\dots,v_n\}$, let $A=A(G)$, and let $k\ge1$ be an integer. Then
for every $1\le i,j\le n$, the entry $(A^k)_{ij}$ equals the number of walks of
length $k$ from $v_i$ to $v_j$ in $G$.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with ordered vertices $v_1,\dots,v_n$, its adjacency matrix $A$, and an integer $k\ge1$.

[F1] The entry $A_{ij}$ is $1$ exactly when $v_i$ and $v_j$ are adjacent, and is $0$ otherwise ([[def-adjacency-matrix-of-a-finite-simple-graph]]).

[F2] A walk of length $k+1$ from $v_i$ to $v_j$ is exactly a walk of length $k$ from $v_i$ to some intermediate vertex $v_r$, followed by the edge $v_rv_j$ ([[def-graph-walk-trail-path-and-cycle]]).

## Proof

**Proof technique:** direct.

1.1 We argue by induction on $k$. For $k=1$, the number of walks of length $1$ from $v_i$ to $v_j$ is $1$ when $v_i$ and $v_j$ are adjacent and $0$ otherwise, so it is exactly $A_{ij}$ by [F1]. [F1, base]

2.1 Assume the claim for some $k\ge1$. Then $\bigl(A^{k+1}\bigr)_{ij}=\sum_{r=1}^n (A^k)_{ir}A_{rj}$. By the inductive hypothesis, $(A^k)_{ir}$ counts the walks of length $k$ from $v_i$ to $v_r$, while [F1] makes $A_{rj}$ the indicator that the final edge $v_rv_j$ exists. Therefore the summand counts the length-$(k+1)$ walks from $v_i$ to $v_j$ whose last intermediate vertex is $v_r$, and summing over $r$ counts all such walks exactly once by [F2]. [step 1.1, F1, F2, induction]

3.1 The base case and inductive step prove the claim for every $k\ge1$. [step 1.1, step 2.1, discharge-induction] ∎
