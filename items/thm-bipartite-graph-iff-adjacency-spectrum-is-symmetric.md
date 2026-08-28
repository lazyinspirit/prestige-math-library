---
id: thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric
kind: theorem
title: "A finite simple graph is bipartite if and only if its adjacency spectrum is symmetric about $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bipartite-graph, def-graph-spectrum-spectral-radius-and-cospectrality, cor-trace-of-adjacency-power-counts-closed-walks, thm-bipartite-iff-no-odd-cycle, cor-trace-is-invariant-under-similarity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steve Butler, Spectral Graph Theory course notes, lectures 3-4"
      url: "https://www.stevebutler.org/spectral2023"
---

## Statement

Let $G$ be a finite simple graph with adjacency spectrum
$\{\lambda_1,\dots,\lambda_n\}$. Then $G$ is bipartite if and only if the
multiset $\{\lambda_1,\dots,\lambda_n\}$ is symmetric about $0$, that is, if
and only if $\{\lambda_1,\dots,\lambda_n\}=\{-\lambda_1,\dots,-\lambda_n\}$ as
multisets.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with adjacency matrix $A$ and adjacency spectrum $\{\lambda_1,\dots,\lambda_n\}$.

[F1] In a bipartite graph the vertex set splits as $X\sqcup Y$, and every edge joins a vertex of $X$ to a vertex of $Y$ ([[def-bipartite-graph]]).

[L1] A graph is bipartite exactly when it has no odd cycle ([[thm-bipartite-iff-no-odd-cycle]]).

[L2] The trace $\operatorname{tr}(A^k)$ counts closed walks of length $k$ ([[cor-trace-of-adjacency-power-counts-closed-walks]]).

[F2] The adjacency spectrum is the multiset of eigenvalues of $A$ ([[def-graph-spectrum-spectral-radius-and-cospectrality]]).

[L3] Similar matrices have the same trace ([[cor-trace-is-invariant-under-similarity]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $G$ is bipartite with parts $X$ and $Y$. Let $D$ be the diagonal matrix whose $vv$ entry is $1$ on $X$ and $-1$ on $Y$. Then $D^{-1}=D$, and [F1] shows that every edge changes sign across the partition, so $DAD=-A$. Hence $A$ and $-A$ are similar and therefore have the same eigenvalues. By [F2], the spectrum is symmetric about $0$. [F1, F2]

1.2 Conversely, assume the spectrum is symmetric about $0$. Because [F2] cites the real spectral theorem for the real symmetric matrix $A$, there is an invertible matrix $P$ with $P^{-1}AP=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$. For every odd integer $r\ge1$, this gives $P^{-1}A^rP=\operatorname{diag}(\lambda_1^r,\dots,\lambda_n^r)$, so [L3] yields $\operatorname{tr}(A^r)=\sum_{i=1}^n\lambda_i^r=0$ after the odd powers cancel in symmetric pairs. By [L2], $G$ has no closed walk of odd length. An odd cycle would itself be an odd closed walk, so $G$ has no odd cycle. Therefore [L1] makes $G$ bipartite. [L1, L2, F2, L3, algebra]

2.1 Steps 1.1 and 1.2 prove the two directions of the equivalence. [step 1.1, step 1.2] ∎
