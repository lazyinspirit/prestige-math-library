---
id: lem-ratio-cut-indicator-trace-identities
kind: lemma
title: "RatioCut and Ncut as indicator-matrix traces"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-weighted-graph-laplacian
  - def-ratio-cut-and-normalized-cut
  - lem-weighted-graph-laplacian-quadratic-form-and-kernel
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007"
      url: "https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf"
    - title: "Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013"
      url: "https://arxiv.org/pdf/1311.2492"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $W,D,L,V,V_+$ be as in the finite weighted graph definition. For a square matrix $B$, set $\operatorname{tr}(B)=\sum_i B_{ii}$. If $A_1,\ldots,A_k$ partition $V$, define $H_R\in\mathbb R^{n\times k}$ by $(H_R)_{ir}=|A_r|^{-1/2}$ for $i\in A_r$ and $0$ otherwise. Then $H_R^TH_R=I_k$ and $\operatorname{RatioCut}(A_1,\ldots,A_k)=\operatorname{tr}(H_R^TLH_R)$. If $A_1,\ldots,A_k$ partition $V_+$, define $H_N\in\mathbb R^{n\times k}$ by $(H_N)_{ir}=\operatorname{vol}(A_r)^{-1/2}$ for $i\in A_r$ and $0$ otherwise. Then $H_N^TDH_N=I_k$ and $\operatorname{Ncut}(A_1,\ldots,A_k)=\operatorname{tr}(H_N^TLH_N)$.

## Statement references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

## Facts & Assumptions

**Given:** A finite weighted graph with symmetric nonnegative zero-diagonal $W$, degree matrix $D$, Laplacian $L=D-W$, and either a partition of all vertices or a partition of its positive-degree vertices.

[F1] [[def-finite-weighted-graph-laplacian]]: $d_i=\sum_jw_{ij}$, $D=\operatorname{diag}(d_i)$, and $L=D-W$.

[F2] [[def-ratio-cut-and-normalized-cut]]: $\operatorname{cut}(A,A^c)=\sum_{i\in A,j\notin A}w_{ij}$, $\operatorname{vol}(A)=\sum_{i\in A}d_i$, RatioCut divides each cut by $|A|$, Ncut divides it by $\operatorname{vol}(A)$, and the indicator columns are normalized by $|A|^{-1/2}$ or $\operatorname{vol}(A)^{-1/2}$ respectively.

[F3] [[lem-weighted-graph-laplacian-quadratic-form-and-kernel]]: $h^TLh=\frac12\sum_{i,j}w_{ij}(h_i-h_j)^2$ for every real vector $h$.

## Proof

1.1 The supports of distinct RatioCut indicator columns are disjoint, and each column has $|A_r|$ entries equal to $|A_r|^{-1/2}$. Thus each column has squared norm $1$ and distinct columns have inner product $0$, so $H_R^TH_R=I_k$. [given, F2, algebra]

1.2 The supports of distinct Ncut indicator columns are disjoint, and $h_r^TDh_r=\operatorname{vol}(A_r)^{-1}\sum_{i\in A_r}d_i=1$. Distinct columns have $D$-inner product $0$, so $H_N^TDH_N=I_k$. [given, F1, F2, algebra]

1.3 By [F3], the energy of a RatioCut indicator column is $\frac12\sum_{i,j}w_{ij}(h_i-h_j)^2$. Terms with both indices inside or both outside $A_r$ vanish. Each ordered crossing pair has squared difference $|A_r|^{-1}$; symmetry makes the two directed crossing sums equal, so the factor $1/2$ leaves $h_r^TLh_r=\operatorname{cut}(A_r,A_r^c)/|A_r|$. [given, F2, F3, algebra]

1.4 For a Ncut indicator column the same finite energy sum has zero terms except across $A_r$ and its complement, and each crossing squared difference is $\operatorname{vol}(A_r)^{-1}$. Pairing the two equal directed sums gives $h_r^TLh_r=\operatorname{cut}(A_r,A_r^c)/\operatorname{vol}(A_r)$. [given, F2, F3, algebra]

2.1 By the stated trace definition, $\operatorname{tr}(H_R^TLH_R)=\sum_r h_r^TLh_r$ and $\operatorname{tr}(H_N^TLH_N)=\sum_r h_r^TLh_r$. Summing steps 1.3 and 1.4 gives the RatioCut and Ncut identities, while steps 1.1 and 1.2 give their respective indicator constraints. [F2, step 1.1, step 1.2, step 1.3, step 1.4, algebra] ∎
