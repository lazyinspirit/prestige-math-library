---
id: lem-author-bcce21321c2a-simple-spectral-event-counting
title: Simple-model spectral events as conditional pairing counts
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-regular-pairing-conditioning
  - lem-author-bcce21321c2a-feasible-regular-orders
  - lem-author-bcce21321c2a-ordered-centered-spectrum
  - math:def-adjacency-matrix-of-a-finite-simple-graph
dependency_roles:
  def-expander-prereq-regular-pairing-conditioning: mathematical-premise
  lem-author-bcce21321c2a-feasible-regular-orders: mathematical-premise
  lem-author-bcce21321c2a-ordered-centered-spectrum: mathematical-premise
  math:def-adjacency-matrix-of-a-finite-simple-graph: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement

Let $n$ and $d$ be integers with $n\ge2$, $0<d<n$ and $nd$ even. Let $\Omega$ be the uniform labelled pairing space and $S$ its simplicity event. Let $G$ instead denote a uniform element of the nonempty set $\mathcal G_d(n)$. For each $g\in\mathcal G_d(n)$, let $A(g)$ be its adjacency matrix in the vertex order $1,\ldots,n$. For real $t$, put $\mathcal B_t=\{g\in\mathcal G_d(n):\rho_0(A(g))\ge t\}$, where $\rho_0$ is the centered spectral quantity. If $G(\omega)$ is the collapsed pairing graph, then

$$\mathbb P(G\in\mathcal B_t)=\frac{|\mathcal B_t|}{|\mathcal G_d(n)|}=\frac{\mathbb P(\{\omega\in S:G(\omega)\in\mathcal B_t\})}{\mathbb P(S)}.$$

Thus the simple-model spectral event is exactly a conditional pairing event. A theorem already stated for uniform $\mathcal G_d(n)$ can be applied directly; no unconditioned pairing estimate or asymptotic simplicity estimate is needed for that application.

## Statement references

[[def-expander-prereq-regular-pairing-conditioning]]

[[lem-author-bcce21321c2a-feasible-regular-orders]]

[[lem-author-bcce21321c2a-ordered-centered-spectrum]]

[[math:def-adjacency-matrix-of-a-finite-simple-graph]]

## Facts & Assumptions

[F1] [[def-expander-prereq-regular-pairing-conditioning]] gives the uniform finite laws, conditional-probability formula and the constant number $(d!)^n$ of pairings realizing each simple regular graph.

[F2] [[lem-author-bcce21321c2a-feasible-regular-orders]] ensures $\mathcal G_d(n)$ is nonempty and $\mathbb P(S)>0$.

[F3] [[lem-author-bcce21321c2a-ordered-centered-spectrum]] defines the centered spectral threshold on each simple graph.

[F4] [[math:def-adjacency-matrix-of-a-finite-simple-graph]] defines $A(g)$ in the fixed vertex order $1,\ldots,n$; its entries are $1$ for edges and $0$ otherwise, so it is a real symmetric adjacency matrix to which [F3] applies.

## Proof

**Given:** The finite spaces, collapse map and real threshold in the statement.

**Goal:** Compute the spectral event probability in the two ensembles.

1.1 The spectral condition defines a subset $\mathcal B_t$ of the finite graph set by [F3] and [F4]. Every subset is an event in its finite uniform space, so its probability is $|\mathcal B_t|/|\mathcal G_d(n)|$. By [F2] the denominator is nonzero. [F1, F2, F3, F4, given]

2.1 Each graph in $\mathcal B_t$ has exactly $(d!)^n$ pairing preimages by [F1], and these preimages are disjoint for distinct graphs. The numerator pairing event therefore contains $|\mathcal B_t|(d!)^n$ outcomes. The event $S$ contains $|\mathcal G_d(n)|(d!)^n$ outcomes. Uniform pairing weights cancel in their probability ratio, giving the claimed equality. The conditional-probability formula applies by [F2]; since the graph law itself is uniform, applying a theorem stated in that law requires no further model transfer estimate. [F1, F2, step 1.1, algebra] ∎
