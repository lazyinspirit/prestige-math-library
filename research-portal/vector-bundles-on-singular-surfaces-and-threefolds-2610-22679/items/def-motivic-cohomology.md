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
  - def-nisnevich-covering-interface
  - math:def-derived-category-of-an-abelian-category
  - lem-author-b747b28c359f-cochain-cohomology
  - math:def-axiom-of-choice
dependency_roles:
  def-article-conventions: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  lem-author-b747b28c359f-derived-finite-coefficients: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  lem-author-b747b28c359f-cochain-cohomology: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 4, Definition 2.2
      statement: Definition 2.2 names the Elmanto–Morrow Nisnevich motivic complex and
        defines integral motivic cohomology as the cohomology of its value at X.
      hypotheses: The article scheme and field conventions apply; X is a qcqs k-scheme
        and the weight j is nonnegative. The cohomological degree i is an
        integer.
      reading_limits: Freshly read Definition 2.2 in the frozen article text and
        inspected the supplied PDF image page-4.png. Only the complex
        identification and integral definition are taken from this locator. The
        objectwise finite-coefficient extension here is justified by the
        declared local derived-coefficient supplier, not attributed to this
        definition. No filtration or comparison theorem is imported here.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: v1, Introduction p. 2 (prime-field convention); p. 3, opening assertion
        of Theorem 1.1; p. 11, Section 2.1 (derived sheaf conventions)
      statement: For nonnegative weights, Theorem 1.1 supplies finitary Nisnevich
        sheaves of derived complexes on qcqs schemes over a prime field. Section
        2.1 interprets these as sheaves with values in a stable
        infinity-category. Restriction to k-schemes is supplied locally by the
        declared Elmanto–Morrow input.
      hypotheses: The prime field is Q or F_p; schemes are quasi-compact and
        quasi-separated over that field; j is nonnegative. For restriction, k
        has that prime subfield.
      reading_limits: Freshly read the versioned arXiv PDF extraction at the
        prime-field convention, opening assertion of Theorem 1.1, and Section
        2.1. Screenshot requests did not produce an inspectable image in this
        tool session; these source checks use the PDF extraction. Neither
        Section 4 nor the construction and descent proofs were reconstructed.
        Only the existence and sheaf interpretation used through the declared
        external supplier are imported.
dependency_level: 8
formulation_deps:
  - def-article-conventions
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-cohomology
  - lem-author-b747b28c359f-derived-finite-coefficients
  - def-nisnevich-covering-interface
  - math:def-derived-category-of-an-abelian-category
  - lem-author-b747b28c359f-cochain-cohomology
  - math:def-axiom-of-choice
argument_deps:
  - def-article-conventions
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-cohomology
  - lem-author-b747b28c359f-derived-finite-coefficients
  - def-nisnevich-covering-interface
  - math:def-derived-category-of-an-abelian-category
  - lem-author-b747b28c359f-cochain-cohomology
  - math:def-axiom-of-choice
---

## Definition
Assume the Axiom of Choice and fix compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, as required by the supplied Elmanto–Morrow complex functor. Scheme data, sites and coefficient values satisfy its fixed size bounds.

Let $k$ and $\mathrm{Sch}_k$ have the conventions of [[def-article-conventions]]: objects of $\mathrm{Sch}_k$ are quasi-compact quasi-separated schemes over $k$. For an integer $j\geq0$, the **motivic complex of weight $j$** is the restriction to $\mathrm{Sch}_k$ of the Elmanto–Morrow Nisnevich sheaf $\mathbb Z(j)_{\mathrm{mot}}$ supplied by [[lem-author-b747b28c359f-elmanto-morrow-complexes]]. It is a contravariant functor with values in $D(\mathbb Z)$, the derived category of complexes of abelian groups.

For $X\in\mathrm{Sch}_k$ and $i\in\mathbb Z$, its **motivic cohomology group of degree $i$ and weight $j$** is
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\bigr).$$
For a positive integer $n$, define finite coefficients objectwise by
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z/n):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n\bigr).$$
The derived tensor product here is equivalently the mapping cone of multiplication by $n$. A morphism $X\to Y$ of $k$-schemes induces pullback from the group of $Y$ to that of $X$.

## Justification
The assumed [[math:def-axiom-of-choice]] and nested universe bounds are inherited from [[lem-author-b747b28c359f-elmanto-morrow-complexes]]; they discharge that construction premise before its functor is evaluated or restricted.

The external input [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies the specified complex-valued functor and its Nisnevich descent on the stated category. Nisnevich covering families and the topology they generate are those of [[def-nisnevich-covering-interface]]. The supplied sheaf is understood in the derived, homotopy-coherent sense of Elmanto–Morrow, Theorem 1.1 and Section 2.1, rather than as a degreewise sheaf of complexes. Its restriction to the category of [[def-article-conventions]] is already part of the external supplier's contract.

Use the cochain, localization and size conventions of [[math:def-derived-category-of-an-abelian-category]] for the underlying derived category $D(\mathbb Z)$ and its mapping-cone model. For a representing cochain complex $C$, [[lem-author-b747b28c359f-cochain-cohomology]] defines the abelian group $H^i(C)=\ker d_C^i/\operatorname{im}d_C^{i-1}$. By [[lem-author-b747b28c359f-derived-cohomology]], $H^i$ is a functor on $D(\mathbb Z)$, so the integral group and pullback are independent of representatives and respect identities and composition. This uses the underlying derived-category functor of the supplied homotopy-coherent sheaf; no construction of its descent data from an ordinary triangulated-category-valued presheaf is asserted.

[[lem-author-b747b28c359f-derived-finite-coefficients]] supplies the derived quotient, its equivalence with the cone, and its functoriality without any boundedness assumption. In particular, it supplies a fixed coefficient functor computed by the two-term free resolution of $\mathbb Z/n$, including its descent on all derived-category morphisms; a choice of cones for individual morphisms in an abstract triangulated category is not being used as a functor. Applying cohomology gives the finite-coefficient group and its pullback. This finite-coefficient extension is defined here using that supplier; it is not an additional assertion of the article's Definition 2.2.

Evaluation in this definition is evaluation of the supplied complex-valued sheaf; no identification with derived sections on a separately chosen site is assumed.

## Reading limits
The article's Definition 2.2 was checked in the frozen extraction and supplied PDF page image. Elmanto–Morrow's prime-field convention, the opening assertion of Theorem 1.1, and Section 2.1 were checked in the versioned PDF extraction. Its screenshot requests did not produce an inspectable image in this tool session. The construction is used through the explicitly marked external supplier; its proof is not reconstructed here.
