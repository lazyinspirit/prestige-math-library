---
id: thm-matrix-tree-theorem
kind: theorem
title: "Kirchhoff's matrix-tree theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-laplacian-matrix-of-a-finite-simple-graph, def-number-of-spanning-trees, def-oriented-incidence-matrix-of-a-graph, def-spanning-tree, thm-binet-cauchy-formula, thm-laplacian-is-the-oriented-incidence-product, thm-tree-characterisations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, Theorem 1.8"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

Let $G$ be a finite simple graph on vertices $v_1,\dots,v_n$ with $n\ge2$ and
Laplacian $L(G)$. For each $i$, let $L^{(i)}$ be the matrix obtained from $L(G)$ by
deleting row $i$ and column $i$. Then

$$\det L^{(i)}=\tau(G),$$

where $\tau(G)$ is the number of spanning trees of $G$. In particular, every
principal cofactor of the Laplacian is the same.

## Facts & Assumptions

**Given:** A finite simple graph $G$ on vertices $v_1,\dots,v_n$ with $n\ge2$, an oriented incidence matrix $B$, and an index $i$.

[F1] A spanning tree of $G$ is a spanning subgraph that is a tree, and $\tau(G)$ counts the spanning trees ([[def-spanning-tree]], [[def-number-of-spanning-trees]]).

[L1] The Laplacian satisfies $L(G)=BB^{\mathsf T}$ ([[thm-laplacian-is-the-oriented-incidence-product]]).

[L2] A graph on $n$ vertices is a tree exactly when it is connected and has $n-1$ edges ([[thm-tree-characterisations]]).

[L3] The Binet-Cauchy formula expands determinants of products of rectangular matrices as sums of products of maximal minors ([[thm-binet-cauchy-formula]]).

## Proof

**Proof technique:** direct.

1.1 Delete row $i$ from $B$ to obtain an $(n-1)\times |E(G)|$ matrix $B^{(i)}$. By [L1], the matrix $L^{(i)}$ obtained by deleting row $i$ and column $i$ from $L(G)$ is $L^{(i)}=B^{(i)}(B^{(i)})^{\mathsf T}$. Applying [L3] gives $\det L^{(i)}=\sum_{|S|=n-1}\det(B^{(i)}[S])^2$, where $S$ ranges over all $(n-1)$-edge subsets of $E(G)$. [L1, L3, algebra]

1.2 Fix such a set $S$, and let $G_S$ be the spanning subgraph with edge set $S$. If $G_S$ is disconnected, then the vertex-indicator vector of the component of $v_i$ gives a nonzero linear relation among the rows of $B^{(i)}[S]$, so $\det(B^{(i)}[S])=0$. If $G_S$ is connected, then $G_S$ has $n-1$ edges and is therefore a tree by [L2]. In that case choose the orientation of every edge of $G_S$ away from the root $v_i$ and order the nonroot vertices so that every parent precedes its children. In this order the matrix $B^{(i)}[S]$ is triangular with diagonal entries all $\pm1$, hence $\det(B^{(i)}[S])=\pm1$. Therefore $\det(B^{(i)}[S])^2$ is $1$ when $S$ is the edge set of a spanning tree and $0$ otherwise. [F1, L2, choose, algebra]

2.1 Substituting step 1.2 into the sum of step 1.1 shows that $\det L^{(i)}$ counts exactly the spanning trees of $G$, namely $\tau(G)$ by [F1]. Since the right-hand side does not depend on $i$, every principal cofactor of the Laplacian is equal. [step 1.1, step 1.2, F1] ∎
