---
id: thm-graham-pollak
kind: theorem
title: "Graham–Pollak: a complete bipartite decomposition of $K_n$ has at least $n-1$ parts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-bipartite-decomposition-of-a-graph, cor-rank-criterion-for-consistency, thm-rref-consistency-and-free-variable-parametrisation, cor-matrix-rank-nullity, def-finite-simple-graph, cor-complete-graph-edge-count, def-sum-over-a-finite-index-set, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §1.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 8"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
    - title: "O. Pikhurko, An Introduction to Combinatorics, §3.3"
      url: "https://people.maths.ox.ac.uk/keevash/eac/notes.pdf"
pipeline_run: null
---

## Statement

Let

$$((X_1,Y_1),\dots,(X_m,Y_m))$$

be a complete bipartite decomposition of the complete graph $K_n$. Then

$$m\ge n-1.$$

## Facts & Assumptions

**Given:** a complete bipartite decomposition $((X_1,Y_1),\dots,(X_m,Y_m))$ of $K_n$.

[F1] In such a decomposition every edge of $K_n$ lies in exactly one of the complete bipartite graphs $K_{X_k,Y_k}$ ([[def-complete-bipartite-decomposition-of-a-graph]]).

[F2] A homogeneous linear system with fewer equations than unknowns has a nonzero solution ([[cor-rank-criterion-for-consistency]], [[thm-rref-consistency-and-free-variable-parametrisation]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $m\le n-2$. Then the homogeneous real system $$\sum_{i<n}x_i=0,\qquad \sum_{i\in X_k}x_i=0\ \text{ for }1\le k\le m$$ has $m+1\le n-1<n$ equations in the $n$ unknowns $x_0,\dots,x_{n-1}$, so [F2] gives a nonzero real solution $a=(a_0,\dots,a_{n-1})$. [assume-contra, F2]

1.2 Because each edge $\{i,j\}$ of $K_n$ lies in exactly one part by [F1], one has $$\sum_{i<j}x_ix_j=\sum_{k=1}^{m}\Bigl(\sum_{i\in X_k}x_i\Bigr)\Bigl(\sum_{j\in Y_k}x_j\Bigr).$$ [F1]

2.1 Substituting the solution $a$ into step 1.2 gives $0$ on the right, because every displayed sum over an $X_k$ is $0$ by step 1.1. On the left, $$\sum_{i<j}a_ia_j=\tfrac12\Bigl[\Bigl(\sum_{i<n}a_i\Bigr)^2-\sum_{i<n}a_i^2\Bigr]=-\tfrac12\sum_{i<n}a_i^2<0,$$ since $\sum_{i<n}a_i=0$ by step 1.1 and not all $a_i$ are $0$. This contradiction shows that $m\ge n-1$. [step 1.1, step 1.2, algebra, discharge-contradiction] ∎

## Remarks

- The lower bound is sharp: the star decomposition of $K_n$ into the graphs $K_{\{0\},\{1,\dots,n-1\}}$, $K_{\{1\},\{2,\dots,n-1\}}$, and so on uses exactly $n-1$ parts.
