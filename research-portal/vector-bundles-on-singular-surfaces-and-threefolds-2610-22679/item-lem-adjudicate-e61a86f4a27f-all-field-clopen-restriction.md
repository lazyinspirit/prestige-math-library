---
title: Finite-clopen motivic restriction over every field
status: published
research_item: lem-adjudicate-e61a86f4a27f-all-field-clopen-restriction
dependency_level: 8
sources:
  references:
    - title: Kerodon, Theorem 7.2.3.1 (Joyal), tag 02NY
      url: https://kerodon.net/tag/02NY
      locator: Theorem 7.2.3.1(1), and proof (the detailed argument treats (2),
        declaring (1) analogous).
      statement: A simplicial map e:I→K, with K an infinity-category, is left cofinal
        if each I×_K K_{/r} is weakly contractible. For ordinary nerves this is
        the nerve of the comma category (e↓r).
      hypotheses: K is an infinity-category; the condition holds for every object r.
        Apply to nerves of the V-small ordinary categories J^op and R^op defined
        locally.
      reading_limits: Read the complete theorem and displayed proof on the primary
        page in this assignment. Import the left criterion; the detailed proof
        treats right cofinality and declares the left case analogous. Its
        fibration, anodyne and localization inputs are not reconstructed.
    - title: Kerodon, Corollary 7.2.2.2, tag 02XQ
      url: https://kerodon.net/tag/02XQ
      locator: Corollary 7.2.2.2, complete statement and proof, specialized to
        identity U.
      statement: Restriction of a cone along a left cofinal simplicial map preserves
        and detects its being a limit cone, by the identity-functor case of the
        stated U-limit assertion.
      hypotheses: A left cofinal map e:I→K and a cone on a K-diagram in an
        infinity-category. The derived target here has the required small limits
        within the stated universes.
      reading_limits: Read the complete statement and proof on the primary page in
        this assignment. Import its identity-U case. The cone-category
        equivalence cited in that proof is not reconstructed; the application
        below is local.
    - title: Kerodon, Contractibility, Subsection 3.2.4, tag 02L4
      url: https://kerodon.net/tag/02L4
      locator: Example 3.2.4.2; Definition 3.2.4.16; Remark 3.2.4.17.
      statement: The nerve of an ordinary category with an initial or final object is
        contractible, hence weakly contractible. Weak contractibility means that
        projection to a point is a weak homotopy equivalence.
      hypotheses: An ordinary category with an initial or final object, small in the
        universe used for its nerve. Apply only to the explicitly computed comma
        categories.
      reading_limits: Read the three specified entries on the primary page in this
        assignment. Import their nerve-contractibility assertion and its
        weak-contractibility consequence. The cited nerve-homotopy proposition
        and surrounding homotopy theory are not reconstructed.
---

PDF p. 8: Finite-clopen gluing of the motivic Chern coefficients

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [math:lem-open-immersion-monomorphism](https://alphabetamath.cc/item/lem-open-immersion-monomorphism)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [` Kerodon, Theorem 7.2.3.1 (Joyal), tag 02NY · Theorem 7.2.3.1(1), and proof (the detailed argument treats (2), declaring (1) analogous). `](https://kerodon.net/tag/02NY)
- [` Kerodon, Corollary 7.2.2.2, tag 02XQ · Corollary 7.2.2.2, complete statement and proof, specialized to identity U. `](https://kerodon.net/tag/02XQ)
- [` Kerodon, Contractibility, Subsection 3.2.4, tag 02L4 · Example 3.2.4.2; Definition 3.2.4.16; Remark 3.2.4.17. `](https://kerodon.net/tag/02L4)


## Statement
Assume the Axiom of Choice. Fix compatible Grothendieck universes $U\in V\in W$ with $\omega\in U$ and the site-size bounds of the supplied motivic and derived constructions; their existence is a separate assumption. Let $k\in U$ be any field and $X$ a qcqs $k$-scheme within these bounds. Let $X=\coprod_{\alpha\in A}X_\alpha$ be a finite clopen partition: the $X_\alpha$ are pairwise disjoint open-and-closed subschemes with restricted structure sheaves covering $X$. Empty pieces and the empty partition of the empty scheme are allowed. Every piece is required to be qcqs.
For every integer $j\geq0$, write $M_j$ for the supplied Elmanto–Morrow derived motivic sheaf on qcqs $k$-schemes, restricted from the prime subfield of $k$. Restriction induces an equivalence of complexes and, for every integer $a$, a group isomorphism
$$M_j(X)\simeq\prod_{\alpha\in A}M_j(X_\alpha),\qquad H^a(M_j(X))\xrightarrow{\cong}\prod_{\alpha\in A}H^a(M_j(X_\alpha)).$$
Here $H^{a,j}_{\rm mot}(T,\mathbb Z)$ means $H^a(M_j(T))$; the maps in the second formula are the cohomological restrictions. The empty product is zero, so $H^{a,j}_{\rm mot}(\varnothing,\mathbb Z)=0$. There is no algebraic-closure, smoothness, finite-type, noetherian or dimension hypothesis.

## Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)

## Facts & Assumptions
**Given:** The field, qcqs scheme, finite partition, weight and Choice and size assumptions in the Statement.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) with the separate existence and size assumptions stated above. These are inherited from the unbounded derived construction. The finite partition calculation adds no arbitrary choice.

[F1] [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies $M_j$ on the category $\mathcal C_k$ of all size-bounded qcqs $k$-schemes and all $k$-morphisms, for every field $k$ and $j\geq0$. The enhanced target $\mathcal D_\infty(\mathbb Z)$ is stable and presentable, has a terminal zero object and small coherent limits, and has ordinary derived category $D(\mathbb Z)$ as its homotopy category. Limits represent coherent cones, naturally in the vertex, using the supplied mapping spaces. For a covering sieve $R$ on $X$, regarded as the category of its arrows $T\to X$ and commuting triangles, restriction gives $M_j(X)\simeq\lim_{R^{\mathrm{op}}}M_j(T)$. In particular $M_j(\varnothing)\simeq0$. This is the covering-sieve interface actually supplied.

[F2] Reference 0 supplies the left cofinality criterion: for a functor $e:I\to K$ of ordinary categories, if every comma category $(e\downarrow r)$ has weakly contractible nerve, then $N(e)$ is left cofinal. Here $(e\downarrow r)$ has objects $(i,e(i)\to r)$ and arrows $i\to i'$ commuting with those maps to $r$. The nerve $N$ has strings of composable arrows as simplices, as in [F1]; ordinary nerves are infinity-categories since composition fills their inner horns. Reference 2 supplies weak contractibility for the nerve of any category with an initial or final object. Reference 1, with $U$ the identity functor, then preserves and detects coherent limit cones upon restriction along $e$. We use these only for categories small in $V$ and the enhanced target of [F1].

[F3] [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products) gives the projection-induced isomorphism $H^a(\prod C_\alpha)\cong\prod H^a(C_\alpha)$ for finite products in $D(\mathbb Z)$, including the empty family, with zero cohomology for the zero complex. Only its integral assertion is used.

[F4] The formulation types are [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) and [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme). An open immersion identifies its source with an open subscheme carrying the restricted structure sheaf, as in [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes), and is a monomorphism by [math:lem-open-immersion-monomorphism](https://alphabetamath.cc/item/lem-open-immersion-monomorphism). Thus a factorization through any fixed piece is unique. By [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes), morphisms are maps of locally ringed spaces: there is no map from a nonempty scheme to the empty scheme, and exactly one map from the empty scheme to any scheme, since both its underlying map and its structure-sheaf map are unique.

[F5] [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface) supplies the generated Nisnevich topology and proves that open covering families are Nisnevich, including the empty family on the empty scheme. Thus, for nonempty $X$, the sieve of arrows factoring through at least one piece of the partition is covering.

## External input
References 0 and 1 import the left cofinality criterion and its consequence for coherent limit cones; reference 2 imports the nerve-contractibility facts used to check that criterion. Their exact statements, hypotheses and current reading limits are recorded in sources.references. The motivic functor, enhanced target and covering-sieve descent are supplied by [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes), and integral cohomology of finite derived products by [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products). The finite-sieve calculation below is a local argument.

## Proof
**Goal:** Compute the restriction product directly from covering-sieve descent and then pass to cohomology.

1.1 Work under [A1]. If $X=\varnothing$, every piece is empty and [F1] gives zero for all values; any product of these terminal objects is terminal, proving the first formula, including the empty partition. Suppose $X\ne\varnothing$, and put $B=\{\alpha\in A:X_\alpha\ne\varnothing\}$. Let $R$ be the covering sieve of [F5]. Its arrow category contains the full subcategory $J$ on the inclusions $X_\alpha\to X$ for $\alpha\in B$ and one empty scheme over $X$. By disjointness and [F4], the only nonidentity arrows of $J$ are the unique maps $\varnothing\to X_\alpha$. Consider $e:J^{\mathrm{op}}\to R^{\mathrm{op}}$. For $r=(T\to X)$, objects of $(e\downarrow r)$ are factorizations $T\to Y\to X$ through objects $Y$ of $J$, with the opposite direction on commuting triangles. If $T$ is nonempty, membership in $R$ gives a factorization through a piece; disjointness makes its index unique and [F4] makes its map unique. The comma category then has just that object and its identity. If $T$ is empty, all its maps to objects of $J$ are unique, so the comma category is $J^{\mathrm{op}}$, with final object the chosen empty scheme. These comma categories have weakly contractible nerves by [F2]. Thus $e$ is left cofinal, and [F1]–[F2] identify $M_j(X)$ with the coherent limit of the star diagram $M_j(X_\alpha)\to M_j(\varnothing)$ on $J^{\mathrm{op}}$. Its central value is terminal. For any vertex $C$, its coherent cone space consists of maps $C\to M_j(X_\alpha)$, a map $C\to M_j(\varnothing)$, and the compatibilities along those arrows. The map to the central value and all these compatibilities have contractible choice spaces since $\operatorname{Map}(C,M_j(\varnothing))$ is contractible. There are no composable nonidentity arrows in this star; higher compatibilities are precisely the coherences into that terminal mapping space. Consequently this cone space is naturally $\prod_{\alpha\in B}\operatorname{Map}(C,M_j(X_\alpha))$. The coherent product universal property in [F1] identifies the star limit with $\prod_{\alpha\in B}M_j(X_\alpha)$. Reinserting the empty pieces adds terminal factors and gives the product over $A$. Its coordinate maps are the original restrictions throughout. [A1, F1, F2, F4, F5, given, construct]

2.1 Taking components of the finite product of mapping spaces in step 1.1 gives the product universal property in the ordinary homotopy category $D(\mathbb Z)$ of [F1]. Apply cohomology and the finite-product isomorphism of [F3]. Its coordinates are the cohomological restrictions, so this proves the second formula for every integer $a$. The empty product and empty-scheme value are zero by [F1] and [F3], with zero cohomology. The restriction equivalence commutes with maps respecting the indexed partitions, since its coordinates come from the original coherent functor. The argument imposes none of the additional geometric restrictions excluded by the Statement. [F1, F3, step 1.1] ∎
