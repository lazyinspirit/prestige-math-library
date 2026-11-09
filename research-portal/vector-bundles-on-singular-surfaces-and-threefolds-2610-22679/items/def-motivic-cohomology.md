---
id: def-motivic-cohomology
kind: definition
title: Motivic complexes and cohomology
status: published
domain: mathematics
deps:
  - def-article-conventions
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-cohomology
  - lem-author-b747b28c359f-derived-finite-coefficients
dependency_roles:
  def-article-conventions: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  lem-author-b747b28c359f-derived-finite-coefficients: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 4, Definition 2.2
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Introduction, pp. 2–3, especially Theorem 1.1 and its opening statement
dependency_level: 8
---

## Definition
Let $k$ and $\mathrm{Sch}_k$ have the conventions of [[def-article-conventions]]: objects of $\mathrm{Sch}_k$ are quasi-compact quasi-separated schemes over $k$. For an integer $j\geq0$, the **motivic complex of weight $j$** is the restriction to $\mathrm{Sch}_k$ of the Elmanto–Morrow Nisnevich sheaf $\mathbb Z(j)_{\mathrm{mot}}$ supplied by [[lem-author-b747b28c359f-elmanto-morrow-complexes]]. It is a contravariant functor with values in $D(\mathbb Z)$, the derived category of complexes of abelian groups.

For $X\in\mathrm{Sch}_k$ and $i\in\mathbb Z$, its **motivic cohomology group of degree $i$ and weight $j$** is
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\bigr).$$
For a positive integer $n$, define finite coefficients objectwise by
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z/n):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n\bigr).$$
The derived tensor product here is equivalently the mapping cone of multiplication by $n$. A morphism $X\to Y$ of $k$-schemes induces pullback from the group of $Y$ to that of $X$.

## Justification
The external input [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies the specified complex-valued functor and its Nisnevich descent on the stated category. By [[lem-author-b747b28c359f-derived-cohomology]], $H^i$ is a functor on $D(\mathbb Z)$, so the integral group and pullback are independent of representatives and respect identities and composition. [[lem-author-b747b28c359f-derived-finite-coefficients]] supplies the derived quotient, its equivalence with the cone, and its functoriality; applying cohomology gives the finite-coefficient group and its pullback. Evaluation in this definition is evaluation of the supplied complex-valued sheaf; no identification with derived sections on a separately chosen site is assumed.

## Reading limits
The article's Definition 2.2 and the introduction and opening statement of Elmanto–Morrow Theorem 1.1 were read. The construction is used through the explicitly marked external input; its proof is not reconstructed here.
