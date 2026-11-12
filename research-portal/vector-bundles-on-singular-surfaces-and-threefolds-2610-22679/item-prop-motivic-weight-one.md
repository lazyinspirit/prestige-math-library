---
title: Motivic weight one
status: published
research_item: prop-motivic-weight-one
dependency_level: 14
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 4, property (2) and equation (2.3)
      statement: The natural weight-one comparison is an equivalence on cohomology
        through degree three; degrees at most two give zero, units and Picard
        groups.
      hypotheses: X is a qcqs scheme over the article base field. The arbitrary-field
        extension in this item uses the declared prime-field restriction
        supplier; Choice and compatible size bounds belong to the supplied
        constructions.
      reading_limits: In this assignment, read property (2) and equation (2.3) in the
        frozen extraction and inspected the supplied PDF image page-4.png. No
        proof of the comparison is given at that locator or reconstructed here.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/html/2309.08463v1
      locator: Introduction prime-field convention; Lemma 5.1 statement; Definition
        5.2 and map (5.1); Corollary 7.11 statement and short proof
      statement: A natural comparison from shifted Nisnevich units to the weight-one
        motivic complex has cofiber supported in degrees greater than three.
      hypotheses: The base is Q or F_p for a prime p and X is qcqs over that base; use
        the specified Elmanto–Morrow complex and comparison.
      reading_limits: Freshly checked the versioned HTML at precisely these locators.
        The short proof invokes Corollary 7.10; its underlying results and the
        construction proof of Lemma 5.1 were not reconstructed. This source
        check supports use of the declared external-input supplier, not a new
        local proof.
---

PDF p. 4: Property (2) and equation (2.3)

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-13e6fe931c45-prime-field-restriction](item-lem-author-13e6fe931c45-prime-field-restriction)
- [lem-author-13e6fe931c45-weight-one-external](item-lem-author-13e6fe931c45-weight-one-external)
- [lem-author-13e6fe931c45-weight-one-identifications](item-lem-author-13e6fe931c45-weight-one-identifications)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-article-conventions](item-def-article-conventions)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · Introduction prime-field convention; Lemma 5.1 statement; Definition 5.2 and map (5.1); Corollary 7.11 statement and short proof `](https://arxiv.org/html/2309.08463v1)


## Statement
Assume the Axiom of Choice and the site-size bounds of [lem-author-13e6fe931c45-weight-one-identifications](item-lem-author-13e6fe931c45-weight-one-identifications). Let $k$ be a field and $X$ a quasi-compact quasi-separated $k$-scheme. There is a natural map
$$R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]\longrightarrow\mathbb Z(1)_{\rm mot}(X)$$
that is an equivalence in degrees at most three: it induces an isomorphism on cohomology in every degree $i\leq3$. Here $\mathbb G_m$ is the sheaf of invertible regular functions on the small Nisnevich site, and $\mathbb Z(1)_{\rm mot}(X)$ is the complex of [def-motivic-cohomology](item-def-motivic-cohomology). Consequently, for $i\leq2$,
$$H^{i,1}_{\rm mot}(X,\mathbb Z)\cong H^{i-1}_{\rm Nis}(X,\mathbb G_m)\cong\begin{cases}0&i\leq0,\\\Gamma(X,\mathcal O_X)^\times&i=1,\\\operatorname{Pic}(X)&i=2.\end{cases}$$
The Picard group is the group of isomorphism classes of line bundles, meaning locally free rank-one $\mathcal O_X$-modules, under tensor product.

## Facts & Assumptions

**Given:** $k$, $X$, Choice, and the stated site-size bounds.

**Goal:** Construct the comparison and establish its degree range and the displayed groups.

[F1] Passing to the prime subfield preserves the underlying scheme, the small Nisnevich units, and the value of the restricted motivic functor ([lem-author-13e6fe931c45-prime-field-restriction](item-lem-author-13e6fe931c45-prime-field-restriction)).

[F2] The Elmanto–Morrow external input supplies the natural comparison with cofiber supported in degrees $>3$ for qcqs schemes over a prime field ([lem-author-13e6fe931c45-weight-one-external](item-lem-author-13e6fe931c45-weight-one-external)).

[F3] Under Choice and the specified size bounds, such a comparison yields the stated low-degree identifications ([lem-author-13e6fe931c45-weight-one-identifications](item-lem-author-13e6fe931c45-weight-one-identifications)).

[F4] A $k$-scheme, its $k$-morphisms, and the quasi-compact and quasi-separated conditions have the definitions of [def-article-conventions](item-def-article-conventions). Here the field is arbitrary as expressly stated, and no finite-type condition is imposed on $X$.

[F5] Use the small Nisnevich site of [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface): étale $X$-schemes with residue-field-preserving covering families. Its units sheaf and restriction maps are identified in [F1]. Right-derived evaluation and $H^n_{\rm Nis}$ have the definitions of [def-derived-sections-on-sites](item-def-derived-sections-on-sites). Regard the units sheaf as concentrated in degree zero. Use the cochain shift and mapping-cone conventions explicitly stated by [F2].

[A1] Choice has the meaning of [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and is used in the supplied resolution and derived-evaluation constructions. Take the stated site-size bounds compatibly for [F1], [F2], [F3] and [F5]: retain the same full small category of étale $X$-schemes, containing $X$, open subobjects and the relevant fibre products, and the same covering families when forgetting the field structure, in the ambient universes required by [F1]. The small site and derived evaluation in the comparison and in the low-degree computation are these same choices. This retains the suppliers' size assumptions rather than identifying a big site with a small one.

[F6] The prime subfield of $k$ is isomorphic to $\mathbb Q$ or $\mathbb F_p$ for a prime $p$, by [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification). Use the induced prime-field structure when applying [F2].

## Proof

1.1 Let $F$ be the prime subfield of $k$, meaning its smallest subfield as in [F1]. By [F6], identify $F$ with $\mathbb Q$ or $\mathbb F_p$ and use the induced structure map. By [F1] and [F4], the underlying qcqs scheme, small Nisnevich units and restricted motivic value are unchanged. With the common site and derived evaluation fixed by [A1] and [F5], the hypotheses of [F2] now hold and its source and target are exactly the displayed objects. Apply [F2] to obtain the natural map with cofiber supported in degrees greater than three. Every $k$-morphism is a morphism for the induced prime-field structures, so restricting this natural comparison gives naturality on $k$-schemes. [A1, F1, F2, F4, F5, F6, given]

2.1 Apply [F3] to this map. It gives an isomorphism in every degree at most three and the zero, units and Picard identifications through degree two. These are the claimed equivalence range and formula, with the same Choice, site and size assumptions. [A1, F3, step 1.1] ∎

## Reading limits
The article's property (2) and equation (2.3) were checked in the frozen text and supplied PDF page image. The prime-field convention, Lemma 5.1 statement, Definition 5.2 and map (5.1), and Corollary 7.11 with its short proof were checked in the [versioned Elmanto–Morrow HTML](https://arxiv.org/html/2309.08463v1). The comparison is used through the explicitly identified external-input supplier [F2]; its construction and underlying proof are not reconstructed here. The two steps above compose the declared suppliers locally.
