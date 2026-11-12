---
title: Coherent derived étale sections for the constant and Tate coefficients
status: draft
research_item: lem-adjudicate-9ec8664ca09c-etale-coefficient-functor
dependency_level: 14
sources:
  references:
    - title: The Stacks Project, big and small étale sites
      url: https://stacks.math.columbia.edu/tag/0214
      locator: Definitions 34.4.6 and 34.4.8; Lemmas 34.4.7, 34.4.13 and 34.4.16–18;
        Lemma 34.4.20, statement and forward construction through the
        composition identity.
      statement: A big étale site can contain prescribed schemes. Restriction to each
        small site is inverse image and evaluates on the same objects. Big-site
        base change is restriction to a slice. A big sheaf has small-site
        transition maps from inverse images, satisfying composition.
      hypotheses: Schemes in a chosen big étale site. Use a site containing the
        size-bounded S-schemes and the required small sites and slices, in
        enlarged universes.
      reading_limits: Read these definitions, the covering-refinement proof, the
        restriction and base-change formulas and their proofs, and the statement
        and forward proof of 34.4.20 in the served text during this turn. Import
        the site-existence and topos foundations. Do not infer the general
        inverse-image/restriction interchange explicitly excluded after 34.4.17.
        Tags were not revision-pinned.
    - title: The Stacks Project, Lemma 59.99.1
      url: https://stacks.math.columbia.edu/tag/0758
      locator: Lemma 59.99.1(2)(a), with (1)(a) and both proofs.
      statement: Restriction of a K-injective abelian-sheaf complex on a big étale
        site to the small étale site of any object remains K-injective.
      hypotheses: A scheme S and an object V of its big étale site. Apply to abelian
        sheaves, not structure-sheaf modules.
      reading_limits: Read the complete lemma and both proofs, including the
        structure-sheaf-module counterexample, during this turn. Import the
        cited exact-adjoint results. Apply only to abelian sheaves; exclude
        structure-sheaf modules.
    - title: The Stacks Project, Cohomology of unbounded complexes
      url: https://stacks.math.columbia.edu/tag/07A5
      locator: Section 21.19, opening paragraph, additive-functor clause (2),
        computation formula and object-sections example (2), before Lemma
        21.19.1.
      statement: K-injective resolutions of ringed-site complexes can be chosen
        functorially. Right derived additive evaluation is computed on such a
        resolution.
      hypotheses: A ringed site in fixed universes and additive evaluation into an
        abelian category. Use the constant integer sheaf to treat abelian
        sheaves; retain Choice for the resolution construction.
      reading_limits: Read the opening of Section 21.19 through its object-sections
        example during this turn. Import functorial resolution existence and
        derived-functor foundations; do not claim their reconstruction.
    - title: The Stacks Project, Lemma 21.20.1
      url: https://stacks.math.columbia.edu/tag/08FI
      locator: Lemma 21.20.1, full statement and one-line proof.
      statement: Restriction of a K-injective module complex to the localization of a
        ringed site at an object is K-injective.
      hypotheses: A ringed site and one of its objects. Apply with constant integer
        coefficients to the big étale site and U.
      reading_limits: Read the full statement and exact-left-adjoint proof during this
        turn. Import the referenced adjoint construction; apply with the
        constant integer sheaf.
    - title: The Stacks Project, Inverse image on small étale sites
      url: https://stacks.math.columbia.edu/tag/03PZ
      locator: Definition 59.36.1 and Lemma 59.36.2(1), with the proof of (1)–(2).
      statement: Small-site inverse image is left adjoint to direct image and is exact
        on abelian sheaves.
      hypotheses: Any scheme morphism, with the corresponding small étale topoi.
      reading_limits: Read Definition 59.36.1, all assertions of Lemma 59.36.2 and its
        proof during this turn. Use only the inverse-image adjunction and
        abelian exactness. Import general topos machinery; use no proper or
        smooth base-change theorem.
    - title: The Stacks Project, K-injective complexes
      url: https://stacks.math.columbia.edu/tag/070G
      locator: Definition 13.31.1, Lemma 13.31.2 and the proof of Lemma 13.31.7.
      statement: Maps into a K-injective complex in the homotopy and derived
        categories agree; a quasi-isomorphism between K-injectives is a homotopy
        equivalence.
      hypotheses: An abelian category and K-injective target complexes; for the second
        assertion both complexes are K-injective.
      reading_limits: Read Definition 13.31.1, Lemma 13.31.2 with its proof, and Lemma
        13.31.7 with its proof during this turn. Import resolution existence
        separately; do not reconstruct localization foundations.
---

PDF p. 6: Singular Beilinson–Lichtenbaum comparison

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [def-etale-tate-coefficients](item-def-etale-tate-coefficients)
- [lem-author-2ac325480ae8-chosen-root](item-lem-author-2ac325480ae8-chosen-root)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [` The Stacks Project, big and small étale sites · Definitions 34.4.6 and 34.4.8; Lemmas 34.4.7, 34.4.13 and 34.4.16–18; Lemma 34.4.20, statement and forward construction through the composition identity. `](https://stacks.math.columbia.edu/tag/0214)
- [` The Stacks Project, Lemma 59.99.1 · Lemma 59.99.1(2)(a), with (1)(a) and both proofs. `](https://stacks.math.columbia.edu/tag/0758)
- [` The Stacks Project, Cohomology of unbounded complexes · Section 21.19, opening paragraph, additive-functor clause (2), computation formula and object-sections example (2), before Lemma 21.19.1. `](https://stacks.math.columbia.edu/tag/07A5)
- [` The Stacks Project, Lemma 21.20.1 · Lemma 21.20.1, full statement and one-line proof. `](https://stacks.math.columbia.edu/tag/08FI)
- [` The Stacks Project, Inverse image on small étale sites · Definition 59.36.1 and Lemma 59.36.2(1), with the proof of (1)–(2). `](https://stacks.math.columbia.edu/tag/03PZ)
- [` The Stacks Project, K-injective complexes · Definition 13.31.1, Lemma 13.31.2 and the proof of Lemma 13.31.7. `](https://stacks.math.columbia.edu/tag/070G)


## Statement
Assume the Axiom of Choice and the compatible nested-universe bounds for schemes, sites, complexes and coherent presheaves. Fix a prime $p$, put $S=\operatorname{Spec}\mathbb Z[1/p]$, and let $\mathcal C$ be the size-bounded category of qcqs $S$-schemes used for the big cdh site. Enlarge the bounds to choose an auxiliary big étale site $\mathcal B=(\mathit{Sch}/S)_{\rm et}$ containing these schemes, the field scheme $U=\operatorname{Spec}k$ below, their small étale sites and the required slice. Use the small étale sites induced by $\mathcal B$ in this construction. This auxiliary site is used to construct presheaves; it does not replace the cdh topology.

For $V\in\mathcal C$ there are coherent contravariant functors $E_0(V)=R\Gamma_{\rm et}(V,\mathbb Z/p)$ and $E_3(V)=R\Gamma_{\rm et}(V,\mu_p^{\otimes3})$ with values in the enhanced derived category $D(\mathbb Z)$. Coefficients are the constant étale sheaf and the ordinary tensor cube over that constant ring sheaf, respectively. For either coefficient write $M_V$ for its sheaf on the small étale site of $V$. Their arrows are the actual derived pullback maps: for $f:W\to V$, use exact small-site inverse image, the canonical coefficient map $c_f:f_{\rm et}^{-1}M_V\to M_W$, and derived sections. The construction is functorial in coefficient morphisms and compatible with restriction to the schemes over $U$.

If $k$ is a field in which $p$ is invertible and $\zeta\in k$ has order $p$, the coefficient isomorphism $1\mapsto\zeta^{\otimes3}$ induces a coherent natural equivalence $j^*E_0\to j^*E_3$ on $\mathcal C/U$. Its inverse is induced by the inverse coefficient isomorphism. Here $j$ forgets the map to $U$; no chosen-root transformation on the ambient $S$-category is asserted.

## Statement references
[lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[def-etale-tate-coefficients](item-def-etale-tate-coefficients)

[lem-author-2ac325480ae8-chosen-root](item-lem-author-2ac325480ae8-chosen-root)

## Facts & Assumptions
[A1] The Axiom of Choice is used for the functorial K-injective resolutions in source reference 2. Universe existence is a separate assumption; enlarge the compatible bounds to contain $\mathcal B$, $\mathcal B/U$ and their complexes. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site) supply the Choice, universe, qcqs category, slice and coherent-presheaf conventions.

[F1] [def-derived-sections-on-sites](item-def-derived-sections-on-sites) supplies abelian sheaves, K-injectivity and derived evaluation into abelian complexes. Source references 1–3 supply, respectively, K-injectivity after small-site restriction, functorial resolutions, and K-injectivity after restriction to a slice. Source reference 5 supplies the homotopy-equivalence criterion for quasi-isomorphisms between K-injectives. All resolutions here are in abelian sheaves, equivalently modules over the constant integer sheaf.

[F2] Source reference 0 supplies the auxiliary big étale site, exact inverse-image restriction $r_VM$ to $V_{\rm et}$ with $(r_VM)(W/V)=M(W/S)$, and the transition maps $c_f$ and their composition identity. Source reference 4 supplies exact small-site inverse image and its adjunction. These are distinct from a false general interchange of inverse image with restriction.

[F3] [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) supplies sheafification and its locally represented sections. [def-etale-tate-coefficients](item-def-etale-tate-coefficients) supplies the constant ring, roots of unity, sheaf tensor construction and their restrictions. Use these same constructions on $\mathcal B$: sheafify the constant $\mathbb Z/p$ presheaf and the presheaf of units $u$ with $u^p=1$, then sheafify the sectionwise tensor cube over the constant ring sheaf. Call the resulting abelian sheaves $M_0$ and $M_3$. All restriction homomorphisms come from pullback of regular functions and tensor factors.

[F4] [def-etale-tate-coefficients](item-def-etale-tate-coefficients) supplies the chosen-root coefficient isomorphism on the small étale site of every $k$-scheme, without a qcqs hypothesis, under the stated field and root assumptions. [lem-author-2ac325480ae8-chosen-root](item-lem-author-2ac325480ae8-chosen-root) supplies its pullback-compatible family on the qcqs slice $\mathcal C/U$. [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the enhanced target $D(\mathbb Z)$ and the functor-category universal property of localization, including natural transformations. Thus localizing a strict presheaf of complexes gives a coherent presheaf.

## External input
The imported inputs are the big/small site and transition constructions in [Stacks, §34.4](https://stacks.math.columbia.edu/tag/0214), the abelian K-injective restriction theorem [59.99.1](https://stacks.math.columbia.edu/tag/0758), functorial resolution and evaluation in [§21.19](https://stacks.math.columbia.edu/tag/07A5), slice restriction [21.20.1](https://stacks.math.columbia.edu/tag/08FI), exact inverse image in [§59.36](https://stacks.math.columbia.edu/tag/03PZ), and the K-injective comparison in [§13.31](https://stacks.math.columbia.edu/tag/070G). Source references 0–5 record their hypotheses and reading limits. The coherent presheaf construction and its chosen-root application below are local compositions of these facts, not a single imported theorem.

## Proof
**Given:** $p,S,\mathcal C,\mathcal B$, Choice and the stated enlarged bounds; for the root assertion also $k,\zeta,U,j$ as stated.

**Goal:** Construct both ambient derived-section presheaves and the actual natural coefficient equivalence on the slice.

1.1 Construct $M_0,M_3$ by [F3]. For any scheme $V$ represented in $\mathcal B$, an étale object over $V$ has the same étale covering families and further covering refinements whether computed in $V_{\rm et}$ or in $\mathcal B$ (with the cofinal covering convention of [F2]). Consequently the locally represented-section construction of sheafification commutes with restriction here, including the sheafifications defining the tensor cube. Thus $r_VM_0=\underline{\mathbb Z/p}_V$ and $r_VM_3=\mu_{p,V}^{\otimes3}$ canonically, with their actual coefficient restrictions. Choose functorially $M[0]\to I(M)$ on $\mathcal B$ by [A1, F1]. For either coefficient set $C_M(V)=I(M)(V)$; its maps are the restriction chain maps $I(M)(f)$. This is a strict contravariant functor to complexes, functorial in $M$. By [F1, F2], $r_VI(M)$ is a K-injective resolution of $r_VM$, and $I(M)(V)=(r_VI(M))(V)$ computes its small-site derived sections. For $f:W\to V$, apply [F2]'s transition construction degreewise to this resolution. The square over $c_f:f_{\rm et}^{-1}r_VM\to r_WM$ commutes, and $f_{\rm et}^{-1}$ is exact. Its right adjoint $f_{{\rm et},*}$ preserves K-injectives: maps from an acyclic complex into $f_{{\rm et},*}I$ identify, including cochain homotopies, with maps from its acyclic inverse image into $I$, and are therefore nullhomotopic. The adjoint transition $r_VI(M)\to f_{{\rm et},*}r_WI(M)$ thus computes $r_VM\to Rf_{{\rm et},*}r_WM$. Evaluation at $V$ gives $I(M)(V)\to I(M)(W)$ by the pushforward formula in [F2]. The canonical derived pullback followed by the coefficient map is therefore represented by the restriction chain map $I(M)(f)$. Composition of these maps holds already on complexes, by the transition identity in [F2]. Localization into the enhanced target of [F4] retains the full diagram and coefficient transformations, producing $E_0,E_3$ with the asserted actual pullbacks. [A1, F1, F2, F3, F4, construct]

2.1 Restrict the two big sheaves and their resolutions to $\mathcal B/U$. By [F1, F2] these remain resolutions by K-injectives, and their evaluation diagrams are exactly the restricted ambient diagrams. On this big slice the locally defined rule $1\mapsto\zeta^{\otimes3}$ gives a morphism $M_0|_U\to M_3|_U$: pullback of the base-field section preserves the formula and the sheaf tensor relations. For every object $(X\to U)$ of $\mathcal B/U$, the coefficient identifications in step 1.1, applied to the underlying scheme $X$, identify the restriction of this morphism to $X_{\rm et}$ with $1\mapsto\zeta^{\otimes3}$ between the constant sheaf $\mathbb Z/p$ and $\mu_{p,X}^{\otimes3}$. The chosen-root assertion of [def-etale-tate-coefficients](item-def-etale-tate-coefficients) in [F4] applies to every such $k$-scheme $X$, including those that are not qcqs: $p$ is invertible in $k$ and $\zeta$ has order $p$, and the induced small sites have the open restrictions and covering refinements used in that construction by [F2]. Thus every one of these small-site morphisms is an isomorphism. Evaluating at the terminal object $X/X$ of each small site shows that every component of the big-sheaf morphism is an isomorphism. The componentwise inverses are natural, by the naturality equations for the original morphism, so they define an inverse big-sheaf morphism. On the qcqs subcategory $\mathcal C/U$, the same formula is the pullback-compatible coefficient family of [lem-author-2ac325480ae8-chosen-root](item-lem-author-2ac325480ae8-chosen-root) in [F4]. Apply a functorial resolution $J$ on $\mathcal B/U$ to these two inverse morphisms. It gives inverse maps between the evaluation diagrams of $J(M_0|_U)$ and $J(M_3|_U)$. To compare with the ambient resolutions, use the natural zigzags $I(M)|_U\to J(I(M)|_U)\leftarrow J(M|_U)$. Both arrows are quasi-isomorphisms between K-injectives: the first is the resolution map and the second comes from the original resolution by functoriality and the natural quasi-isomorphisms to $J$. By [F1] they are homotopy equivalences and remain so after evaluation at any object. These are zigzags of entire evaluation diagrams on the slice. By [F4] they give coherent natural equivalences to the restricted ambient diagrams $j^*E_0,j^*E_3$. Transport the root transformation of the $J$-models and its inverse through these equivalences. This constructs the asserted transformation between the restricted ambient diagrams without an ambient coefficient morphism. The same comparison applied to two choices of functorial resolution proves independence up to coherent natural equivalence; all maps just constructed are the derived maps computed in step 1.1. [A1, F1, F2, F3, F4, step 1.1] ∎
