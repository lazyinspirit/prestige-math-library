---
title: Units and Picard groups in Nisnevich degree zero and one
status: draft
research_item: lem-nisnevich-line-bundle-torsors
dependency_level: 13
---

PDF p. 4: Weight one units and Picard identification

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf)
- [lem-author-8e1c0251ef0d-frame-transitions](item-lem-author-8e1c0251ef0d-frame-transitions)
- [lem-author-8e1c0251ef0d-torsor-cocycle](item-lem-author-8e1c0251ef0d-torsor-cocycle)
- [lem-author-8e1c0251ef0d-cocycle-morphism](item-lem-author-8e1c0251ef0d-cocycle-morphism)
- [lem-author-8e1c0251ef0d-tensor-transitions](item-lem-author-8e1c0251ef0d-tensor-transitions)
- [lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input)
- [lem-author-8e1c0251ef0d-h1-torsor-input](item-lem-author-8e1c0251ef0d-h1-torsor-input)


## Statement
Assume the Axiom of Choice and the fixed universe bounds in [def-derived-sections-on-sites](item-def-derived-sections-on-sites). For a scheme $X$, use its small Nisnevich site, taken as a sufficiently small full subcategory of étale $X$-schemes containing $X$ and closed under the fibre products and Zariski refinements used below. Let $\mathbb G_m$ be the sheaf assigning $U$ the group $\Gamma(U,\mathcal O_U)^\times$. Then

$$H^0_{\mathrm{Nis}}(X,\mathbb G_m)=\Gamma(X,\mathcal O_X)^\times,\qquad H^1_{\mathrm{Nis}}(X,\mathbb G_m)\cong\operatorname{Pic}(X).$$

The second identification sends a line bundle to its frame torsor, with inverse obtained by descent from local frames. A line bundle is a Zariski locally free $\mathcal O_X$-module of rank one; $\operatorname{Pic}(X)$ is the group of its isomorphism classes under tensor product.

## Facts & Assumptions

[A1] The stated Choice assumption supplies the set-indexed choice of torsor sections in step 3.1 and is inherited by the selected derived-sections model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** $X$, its specified small Nisnevich site, the Axiom of Choice, and the stated size bounds.

**Goal:** Identify degrees zero and one, including the frame-torsor inverse.

[F1] Nisnevich covering families are jointly surjective étale families, and Zariski open covers are Nisnevich covers ([def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)).

[F2] The structure presheaf is a sheaf on a site satisfying the listed full-subcategory, Zariski-refinement, terminal-object and fpqc-cover hypotheses. Jointly surjective étale families are fpqc; quasi-coherent modules have effective and fully faithful fpqc descent, and finite local freeness descends ([lem-author-8e1c0251ef0d-fpqc-descent-input](item-lem-author-8e1c0251ef0d-fpqc-descent-input)).

[F3] Units of a ring sheaf form a sheaf ([lem-author-8e1c0251ef0d-units-sheaf](item-lem-author-8e1c0251ef0d-units-sheaf)). Degree-zero derived sections of an abelian sheaf are its sections, under the derived conventions of [def-derived-sections-on-sites](item-def-derived-sections-on-sites).

[F4] First cohomology classifies torsors as in [lem-author-8e1c0251ef0d-h1-torsor-input](item-lem-author-8e1c0251ef0d-h1-torsor-input). Frames and transition units have the properties in [lem-author-8e1c0251ef0d-frame-transitions](item-lem-author-8e1c0251ef0d-frame-transitions), [lem-author-8e1c0251ef0d-torsor-cocycle](item-lem-author-8e1c0251ef0d-torsor-cocycle), [lem-author-8e1c0251ef0d-cocycle-morphism](item-lem-author-8e1c0251ef0d-cocycle-morphism), and [lem-author-8e1c0251ef0d-tensor-transitions](item-lem-author-8e1c0251ef0d-tensor-transitions).

[F5] The Picard group is the tensor-product group of line-bundle isomorphism classes ([math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)).

## Proof

1.1 The site has the full-subcategory, Zariski-refinement and terminal-object properties required by [F2]. A covering sieve contains a Nisnevich family, and that family is jointly surjective étale by [F1], hence fpqc by [F2]. The sheaf condition can therefore be checked on those generating families. The structure presheaf is a sheaf, and its units form the abelian sheaf $\mathbb G_m$ by [F3]. Evaluation at the terminal object $X$ and [F3] give the stated degree-zero equality. [F1, F2, F3]

2.1 Let $L$ be a line bundle. On each étale $U\to X$, take frames of its pullback $L|_U$. The structure presheaf on the slice site over $U$ is a sheaf by the same argument as in step 1.1. Frames form a $\mathbb G_m$-torsor by [F4]: Zariski trivializations of $L|_U$ are Nisnevich covers by [F1]. Thus every line bundle determines a torsor. [F1, F4, step 1.1, construct]

3.1 Conversely, let $P$ be a $\mathbb G_m$-torsor. Choose a Nisnevich covering family $U_i\to X$ with sections $s_i$. Its transition units $g_{ij}$ satisfy the cocycle equation by [F4]. On each $U_i$ take the free rank-one module with basis $e_i$; use the isomorphisms determined by $e_j=g_{ij}e_i$ on double fibre products. The cocycle equation is exactly the descent compatibility on triple fibre products. [F4, choose, construct, step 2.1, A1]

4.1 The family is fpqc by [F1] and [F2]. Effective descent gives a quasi-coherent module $L$ with these pullbacks and transition maps; finite local freeness descends by [F2]. At every point of $X$, choose a point of some $U_i$ over it. The fibre of $L$ becomes one-dimensional after extension to that point's residue field, so the rank of $L$ there is one. Hence $L$ is a line bundle. [F1, F2, step 3.1]

5.1 The descended frames have the same transitions as the $s_i$, so [F4] gives an equivariant isomorphism from the frame torsor of $L$ to $P$. Conversely, starting with a line bundle and using its local frames, full faithfulness of descent in [F2] identifies the descended module with the original bundle. These constructions are independent of choices: pass to a common refinement, use the change-of-section formula in [F4], and apply full faithfulness of descent. Thus line bundles up to isomorphism and torsors up to equivariant isomorphism are in bijection. [F2, F4, step 2.1, step 4.1]

6.1 By [F4], the torsor bijection gives a canonical bijection with $H^1$. It is compatible with the group laws: using an injective embedding $\mathbb G_m\hookrightarrow I$, the construction described in the cited torsor-classification input represents a class by a global section of $I/\mathbb G_m$, with its torsor the sheaf of local lifts. Adding two representatives adds their local lifts; their transition units multiply. By [F4], tensoring line bundles also multiplies their frame transitions. Therefore the bijection sends tensor products to sums in $H^1$. [F4, step 5.1, algebra]

7.1 The unit line bundle has the trivial frame torsor by [F4]. Together with [F5] and steps 1.1 and 6.1, this proves both identifications and the stated inverse. [F4, F5, step 1.1, step 6.1] ∎
