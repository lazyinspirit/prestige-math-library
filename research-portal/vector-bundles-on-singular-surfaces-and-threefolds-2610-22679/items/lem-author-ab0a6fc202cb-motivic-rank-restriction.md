---
id: lem-author-ab0a6fc202cb-motivic-rank-restriction
kind: lemma
title: Finite rank strata detect Elmanto-Morrow motivic cohomology
status: published
domain: mathematics
deps:
  - lem-author-ab0a6fc202cb-finite-common-rank-strata
  - lem-author-ab0a6fc202cb-clopen-derived-descent
  - lem-author-ab0a6fc202cb-finite-derived-products
  - def-motivic-cohomology
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-ab0a6fc202cb-finite-common-rank-strata: mathematical-premise
  lem-author-ab0a6fc202cb-clopen-derived-descent: mathematical-premise
  lem-author-ab0a6fc202cb-finite-derived-products: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 9
---

## Statement
Assume AC and the article's field convention: $k$ is algebraically closed unless otherwise specified. Let $X$ be any qcqs $k$-scheme and $X=\coprod_{\alpha\in A}X_\alpha$ the finite common rank partition of finitely many finite locally free sheaves. For the actual Elmanto-Morrow motivic complex of every weight $j\geq0$, restriction gives
$$\mathbb Z(j)_{\mathrm{mot}}(X)\simeq\prod_\alpha\mathbb Z(j)_{\mathrm{mot}}(X_\alpha).$$
Thus for every $i\in\mathbb Z$ and $R=\mathbb Z$ or $\mathbb Z/n$ with $n>0$, the joint restriction map
$$H^{i,j}_{\mathrm{mot}}(X,R)\xrightarrow{\cong}\prod_\alpha H^{i,j}_{\mathrm{mot}}(X_\alpha,R)$$
is an isomorphism and in particular injective. No smoothness, finite-type, noetherian, dimension or regularity hypothesis is required. Weights $j<0$ are not defined here unless an additional zero-weight convention has explicitly been adopted.

## Facts & Assumptions

**Given:** AC, the field, scheme, family and integer/coefficient bounds above.

**Goal:** Prove the exact motivic detection property required by a varying-rank flag tower.

[F1] The common rank strata and their finite union are qcqs and clopen. [[lem-author-ab0a6fc202cb-finite-common-rank-strata]], [[math:def-axiom-of-choice]]

[F2] The specified complex is the restriction from the prime field of a homotopy-coherent $D(\mathbb Z)$-valued Nisnevich sheaf on qcqs schemes. [[lem-author-b747b28c359f-elmanto-morrow-complexes]]

[F3] Finite clopen descent for such a sheaf is the product equivalence, including its value zero on the empty scheme. [[lem-author-ab0a6fc202cb-clopen-derived-descent]]

[F4] Integral motivic groups are $H^i$ of the complex; finite coefficients apply derived tensor with $\mathbb Z/n$ first. These operations commute with the finite product. [[def-motivic-cohomology]], [[lem-author-ab0a6fc202cb-finite-derived-products]]

## Proof

1.1 Every $k$-scheme under consideration is a scheme over the prime field $\mathbb F\subset k$ by composition of structure maps, and its underlying qcqs property is unchanged. The clopen inclusions and their fiber products in [F1] remain the same Nisnevich cover after forgetting to $\mathbb F$. Thus [F2] supplies descent for precisely this cover, not a different smooth or cycle-theoretic cohomology. [F1, F2, given]

2.1 Apply [F3] to the restricted weight-$j$ sheaf, with $j\geq0$. It gives the displayed equivalence of actual motivic complexes, whose components are the restriction maps. The empty-base case is included by its empty-cover clause. [F2, F3, step 1.1]

3.1 Applying the two operations in [F4] and their finite-product compatibility to step 2.1 gives the displayed group isomorphisms in every integer degree $i$. Hence the joint restriction is injective. Only the hypotheses of the existing qcqs motivic sheaf and the finite clopen partition have been used, proving all claims. [F4, step 2.1] ∎
