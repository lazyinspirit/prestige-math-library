---
id: lem-author-bcce21321c2a-regular-spectral-obstructions
title: Disconnected and bipartite spectral witnesses
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-bcce21321c2a-ordered-centered-spectrum
  - def-expander-prereq-regular-pairing-conditioning
  - math:def-adjacency-matrix-of-a-finite-simple-graph
  - math:def-walks-paths-and-connectedness-in-a-simple-graph
dependency_roles:
  lem-author-bcce21321c2a-ordered-centered-spectrum: mathematical-premise
  def-expander-prereq-regular-pairing-conditioning: mathematical-premise
  math:def-adjacency-matrix-of-a-finite-simple-graph: mathematical-premise
  math:def-walks-paths-and-connectedness-in-a-simple-graph: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement

For a labelled simple $d$-regular graph $G$ on $n\ge2$ vertices with $d>0$, let $A$ be its adjacency matrix and write $\rho_0(A)=\|A-(d/n)J\|_{\mathrm{op}}$, where $J$ is the all-ones matrix. A connected component is a maximal set of vertices joined by paths; a component is bipartite if it splits into two disjoint parts with each edge joining different parts. If $G$ is disconnected, or has a bipartite connected component, then $\rho_0(A)=d$. Consequently, for any $0<t<d$, the inequality $\rho_0(A)<t$ excludes both obstructions.

## Statement references

[[lem-author-bcce21321c2a-ordered-centered-spectrum]]

[[def-expander-prereq-regular-pairing-conditioning]]

[[math:def-adjacency-matrix-of-a-finite-simple-graph]]

[[math:def-walks-paths-and-connectedness-in-a-simple-graph]]

## Facts & Assumptions

[F1] [[lem-author-bcce21321c2a-ordered-centered-spectrum]] identifies $\rho_0(A)$ with the norm of $A$ on $\mathbf1^\perp$. Its proof step 1.1 bounds every adjacency eigenvalue in absolute value by $d$, using a maximum-modulus coordinate of a nonzero eigenvector and the nonnegative row sum $d$.

[F2] [[def-expander-prereq-regular-pairing-conditioning]] supplies the labelled simple regular graph and incidence conventions.

[F3] [[math:def-adjacency-matrix-of-a-finite-simple-graph]] defines $A_{vw}$ to be $1$ for an edge and $0$ otherwise; hence $(Ax)_v$ is the sum of $x_w$ over neighbours $w$ of $v$.

[F4] [[math:def-walks-paths-and-connectedness-in-a-simple-graph]] defines paths, connectedness and connected components.

## Proof

**Given:** The regular graph and either of the stated obstructions.

**Goal:** Exhibit a mean-zero eigenvector of eigenvalue $d$ or $-d$.

1.1 If $C$ is a nonempty proper connected component, its indicator $\mathbf1_C$ satisfies $A\mathbf1_C=d\mathbf1_C$: vertices in $C$ have all $d$ neighbours in $C$, and vertices outside have none in $C$. Thus $x=\mathbf1_C-(|C|/n)\mathbf1$ is nonzero, has coordinate sum zero and satisfies $Ax=dx$. By [F1] this forces $\rho_0(A)\ge d$, while the eigenvalue bound gives the reverse inequality. [F1, F2, F3, F4, given, algebra]

2.1 If a connected component has bipartition $L,R$, counting its edges at each end gives $d|L|=d|R|$. Since $d>0$, $|L|=|R|$. Let $y$ equal $1$ on $L$, $-1$ on $R$ and zero elsewhere. It is nonzero, has coordinate sum zero and satisfies $Ay=-dy$, because every neighbour of a vertex in the component has the opposite sign. Again [F1] forces $\rho_0(A)=d$. Either obstruction therefore contradicts $\rho_0(A)<t<d$, proving the conclusion. [F1, F2, F3, F4, given, algebra] ∎
