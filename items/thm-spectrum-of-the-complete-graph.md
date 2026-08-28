---
id: thm-spectrum-of-the-complete-graph
kind: theorem
title: "The complete graph $K_n$ has adjacency spectrum $\\{n-1,(-1)^{n-1}\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjacency-matrix-of-a-finite-simple-graph, def-graph-spectrum-spectral-radius-and-cospectrality, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, Example 1.11"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

For every integer $n\ge1$, the complete graph $K_n$ has adjacency spectrum

$$\{n-1,(-1)^{n-1}\},$$

that is, the eigenvalue $n-1$ once and the eigenvalue $-1$ with multiplicity
$n-1$.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and the complete graph $K_n$.

[F1] In $K_n$, every pair of distinct vertices is adjacent ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] The adjacency spectrum is the multiset of eigenvalues of the adjacency matrix ([[def-graph-spectrum-spectral-radius-and-cospectrality]]).

## Proof

**Proof technique:** direct.

1.1 In the standard vertex order, the adjacency matrix of $K_n$ is $J-I$, where $J$ is the all-ones matrix, because [F1] makes every off-diagonal entry equal to $1$ and every diagonal entry equal to $0$. The all-ones vector $\mathbf 1$ satisfies $J\mathbf 1=n\mathbf 1$, so $(J-I)\mathbf 1=(n-1)\mathbf 1$. [F1, algebra]

2.1 If $x$ is orthogonal to $\mathbf 1$, then the coordinates of $x$ sum to $0$, so $Jx=0$. Hence $(J-I)x=-x$. The subspace $\mathbf 1^\perp$ has dimension $n-1$, so $-1$ is an eigenvalue with multiplicity at least $n-1$; together with step 1.1 this accounts for all $n$ dimensions. [step 1.1, algebra]

3.1 Therefore the eigenvalues of the adjacency matrix are exactly $n-1$ and $-1$ with the stated multiplicities, which is the spectrum by [F2]. [step 1.1, step 2.1, F2] ∎
