---
id: thm-laplacian-is-the-oriented-incidence-product
kind: theorem
title: "The Laplacian equals $BB^{\\mathsf T}$ for every oriented incidence matrix $B$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-incidence-matrix-of-a-graph, def-laplacian-matrix-of-a-finite-simple-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, Lemma 1.6(a)"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

Let $G$ be a finite simple graph, let $B$ be any oriented incidence matrix of
$G$, and let $L(G)$ be its Laplacian matrix. Then

$$L(G)=BB^{\mathsf T}.$$

## Facts & Assumptions

**Given:** A finite simple graph $G$ with oriented incidence matrix $B=(b_{ij})$ and Laplacian matrix $L=L(G)$.

[F1] Each column of $B$ has one entry $1$, one entry $-1$, and all other entries $0$ ([[def-oriented-incidence-matrix-of-a-graph]]).

[F2] The Laplacian has diagonal entries equal to vertex degrees and off-diagonal entries $-1$ on adjacent pairs and $0$ otherwise ([[def-laplacian-matrix-of-a-finite-simple-graph]]).

## Proof

**Proof technique:** direct.

1.1 The $(i,i)$ entry of $BB^{\mathsf T}$ is $\sum_j b_{ij}^2$. By [F1], the term $b_{ij}^2$ is $1$ exactly when the edge $e_j$ is incident with $v_i$, and is $0$ otherwise. Therefore $(BB^{\mathsf T})_{ii}$ is the number of edges incident with $v_i$, namely $\deg(v_i)=L_{ii}$ by [F2]. [F1, F2]

1.2 For $i\ne r$, the entry $(BB^{\mathsf T})_{ir}=\sum_j b_{ij}b_{rj}$ receives a nonzero contribution only from edges incident with both $v_i$ and $v_r$. In a simple graph there is at most one such edge. If $v_i$ and $v_r$ are not adjacent, the sum is $0$. If they are adjacent, the unique common edge contributes $(1)(-1)$ or $(-1)(1)$, hence $-1$. So $(BB^{\mathsf T})_{ir}=L_{ir}$ by [F2]. [F1, F2]

2.1 Steps 1.1 and 1.2 show that every entry of $BB^{\mathsf T}$ matches the corresponding entry of $L(G)$, so the matrices are equal. [step 1.1, step 1.2] ∎
