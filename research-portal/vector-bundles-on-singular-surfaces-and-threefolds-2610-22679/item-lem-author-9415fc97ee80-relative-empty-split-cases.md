---
title: Relative objects for empty and split pairs
status: published
research_item: lem-author-9415fc97ee80-relative-empty-split-cases
dependency_level: 16
---

PDF p. 7: Motivic purity at a smooth closed point

## Prerequisites

- [math:def-complex-homotopy-and-contractibility-in-an-additive-category](https://alphabetamath.cc/item/def-complex-homotopy-and-contractibility-in-an-additive-category)
- [math:def-homotopy-category-of-chain-complexes](https://alphabetamath.cc/item/def-homotopy-category-of-chain-complexes)
- [lem-author-9415fc97ee80-relative-cone-quotient-model](item-lem-author-9415fc97ee80-relative-cone-quotient-model)
- [lem-author-9415fc97ee80-contravariant-relative-hom](item-lem-author-9415fc97ee80-contravariant-relative-hom)
- [def-supported-complex-indexing](item-def-supported-complex-indexing)
- [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-biproduct](https://alphabetamath.cc/item/def-biproduct)
- [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)
- [math:prop-zero-and-split-triangles-are-distinguished](https://alphabetamath.cc/item/prop-zero-and-split-triangles-are-distinguished)
- [math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three)
- [math:cor-triangulated-five-lemma](https://alphabetamath.cc/item/cor-triangulated-five-lemma)
- [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Let $\mathcal A$ be an abelian category, and let $A,B,C,D$ be cochain complexes in $\mathcal A$. All maps below are cochain maps, direct sums are biproducts with componentwise differential, and $0$ denotes the zero complex. Use $A[s]^n=A^{n+s}$ with differential $(-1)^sd_A$. Use the cone $Q(f)^n=Y^n\oplus X^{n+1}$, $d(y,x)=(d_Yy+f(x),-d_Xx)$ for $f:X\to Y$. Define the support-fiber model by
$$F(f)^n=X^n\oplus Y^{n-1},\qquad d(x,y)=(d_Xx,f(x)-d_Yy).$$
Its projection to $X$ gives the fiber triangle in $D(\mathcal A)$. Derived-category assertions use the standing size hypothesis of a small category of complexes or supplied small cofinal denominator families. Contractible means that a degree $-1$ morphism $h$ satisfies $dh+hd=\operatorname{id}$.

The cone of $\operatorname{id}_B$ is contractible, the cone of $0\to B$ is $B$, and the cone of the split inclusion $A\to A\oplus B$, $a\mapsto(a,0)$, is quasi-isomorphic to $B$. Dually, the fibers of $\operatorname{id}_C:C\to C$, $C\to0$, and the projection $C\oplus D\to C$ are respectively zero, $C$, and $D$ in $D(\mathcal A)$.

The same boundary calculations hold for chosen cofiber and fiber triangles in any supplied triangulated category, with $A,B,C,D$ now interpreted as objects of that category: a cofiber of $f:X\to Y$ is the third object of a distinguished triangle $X\xrightarrow{f}Y\to R\to X[1]$, and a fiber is the first object of a distinguished triangle $S\to X\xrightarrow{f}Y\to S[1]$. The cofibers of $\operatorname{id}_B$, $0\to B$ and $A\to A\oplus B$ are respectively isomorphic to $0,B,B$; the fibers of $\operatorname{id}_C$, $C\to0$ and $C\oplus D\to C$ are respectively isomorphic to $0,C,D$. The isomorphisms can be chosen compatibly with the maps of the triangles; uniqueness or a functorial choice is not asserted.

For the conditional geometric application, let $U\hookrightarrow X$ be an open immersion of schemes and write $Z=X\setminus U$ for its closed complement as a set. Supply a covariant motive-valued functor $M$ into a specified triangulated category and a contravariant coefficient functor $C$ into a specified triangulated category, which may in particular be a derived category of complexes. Their domains must contain the schemes and inclusion maps being used. Choose a relative object $R(X,U)$ by a distinguished triangle for the actual map $M(U)\to M(X)$, and a support object $S_Z(X)$ by a distinguished triangle for the actual restriction $C(X)\to C(U)$. Empty support gives $R(X,X)\cong0$ and $S_{\varnothing}(X)\cong0$. If $M(\varnothing)\cong0$, full support gives $R(X,\varnothing)\cong M(X)$; if $C(\varnothing)\cong0$, it gives $S_X(X)\cong C(X)$.

For a split pair $X=U\coprod Z$, meaning a decomposition into disjoint open-and-closed subschemes, additionally require that the map $M(U)\oplus M(Z)\to M(X)$ induced by the actual two inclusions is an isomorphism, respectively that the map $C(X)\to C(U)\oplus C(Z)$ given by the actual two restrictions is an isomorphism. These respective hypotheses give $R(X,U)\cong M(Z)$ and $S_Z(X)\cong C(Z)$. An isomorphism of the objects without compatibility with those maps does not suffice. These formal boundary cases do not establish purity for a positive-codimension smooth pair.

## Statement references
[lem-author-9415fc97ee80-relative-cone-quotient-model](item-lem-author-9415fc97ee80-relative-cone-quotient-model)

[def-supported-complex-indexing](item-def-supported-complex-indexing)

[math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-biproduct](https://alphabetamath.cc/item/def-biproduct)

[math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)

[math:prop-zero-and-split-triangles-are-distinguished](https://alphabetamath.cc/item/prop-zero-and-split-triangles-are-distinguished)

[math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three)

[math:cor-triangulated-five-lemma](https://alphabetamath.cc/item/cor-triangulated-five-lemma)

[math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

## Facts & Assumptions
**Given:** The complexes, maps and size convention of the Statement. In the geometric applications the functors, their target triangulations, the chosen relative/support triangles and the asserted empty-value or map-compatible split decompositions are supplied data. Coordinate formulas denote biproduct morphisms in $\mathcal A$.

**Goal:** Compute the identity, zero and split cases and justify their conditional geometric applications independently of Gysin purity.

[F1] The ambient abelian category, cochain complexes and cochain maps have the meanings of [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category), [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) and [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map). The biproduct structure maps have the meaning of [math:def-biproduct](https://alphabetamath.cc/item/def-biproduct); on complexes the stated differential is componentwise.

[F2] The cone differential, its distinguished triangle and its quotient quasi-isomorphism for termwise monic maps are supplied by [lem-author-9415fc97ee80-relative-cone-quotient-model](item-lem-author-9415fc97ee80-relative-cone-quotient-model). The shifts, homotopy localization and size convention are those of [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category).

[F3] [def-supported-complex-indexing](item-def-supported-complex-indexing) defines the displayed support-fiber model for complexes of abelian groups, including its projection and derived isomorphism class. Here the same formula in $\mathcal A$ is justified by its explicit signed identification with $Q(f)[-1]$ in the Proof; no derived-sections construction or spectral realization is being invoked.

[F4] [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category) supplies the translation, distinguished triangles, signed rotations and closure under triangle isomorphism. [math:prop-zero-and-split-triangles-are-distinguished](https://alphabetamath.cc/item/prop-zero-and-split-triangles-are-distinguished) supplies the zero and biproduct triangles.

[F5] [math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three) completes a commuting square between the first arrows of distinguished triangles. [math:cor-triangulated-five-lemma](https://alphabetamath.cc/item/cor-triangulated-five-lemma) makes the third component an isomorphism when the first two are isomorphisms. Rotating a fiber triangle puts its defining arrow in that first position.

[F6] [math:def-scheme](https://alphabetamath.cc/item/def-scheme) includes the empty scheme, and [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes) identifies an open immersion with an open subscheme. The functor identities and variance are those of [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor). The split decomposition in the Statement explicitly requires the isomorphisms induced by the inclusion or restriction maps, not merely an isomorphism of their underlying objects.

[F7] Under exactly its additional stable-enhancement, specified-cofiber and coherent restriction-arrow comparison hypotheses, [lem-author-9415fc97ee80-contravariant-relative-hom](item-lem-author-9415fc97ee80-contravariant-relative-hom) identifies enhanced contravariant Hom of the relative object with the restriction fiber. Its mapping-complex version additionally requires its coherent linear lift. An application to the article's motivic support spectrum also retains that supplier's Choice, domain and weight hypotheses. These are optional comparison premises, not assumptions needed for the formal boundary calculations.

[A1] Only an optional application to the article's motivic support spectrum in [F7] inherits the Axiom of Choice and the separate site and universe assumptions of that supplier. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) records this conditional premise. The abstract complex, triangulated and map-compatible split-pair calculations themselves make no Choice assumption.

[F8] [math:def-complex-homotopy-and-contractibility-in-an-additive-category](https://alphabetamath.cc/item/def-complex-homotopy-and-contractibility-in-an-additive-category) defines cochain homotopy $f-g=dh+hd$, contractibility and degreewise sums of homotopies in any additive category, hence in $\mathcal A$. Its dictionary $C_n=C^{-n}$, $s_n=h^{-n}$ takes these cochain homotopies to chain homotopies without an additional sign. Under this reindexing, [math:def-homotopy-category-of-chain-complexes](https://alphabetamath.cc/item/def-homotopy-category-of-chain-complexes) identifies homotopic maps and defines composition on their classes. The localization in [F2] is applied to that reindexed category.

## Proof
1.1 For $Q(\operatorname{id}_B)$ the degree $-1$ map $h(b_0,b_1)=(0,b_0)$ satisfies $dh(b_0,b_1)=(b_0,-d_Bb_0)$ and $hd(b_0,b_1)=(0,d_Bb_0+b_1)$, so $dh+hd=\operatorname{id}$. The cone of $0\to B$ is exactly $B$. The split inclusion $A\to A\oplus B$ is termwise monic and has quotient $B$; [F2] therefore gives its cone quasi-isomorphism to $B$. For a general $f:X\to Y$, the signed permutation $(x,y)\mapsto(y,-x)$ identifies the displayed $F(f)$ with $Q(f)[-1]$: the shifted cone differential sends $(y,-x)$ to $(-d_Yy+f(x),-d_Xx)$, the image of $d(x,y)$. The signed rotation of the cone triangle has first arrow minus the shifted cone projection; it therefore becomes the displayed projection $F(f)\to X$. This proves the claimed fiber interpretation in $\mathcal A$. For $f=\operatorname{id}_C$, $k(c,b)=(b,0)$ gives $dk(c,b)=(d_Cb,b)$ and $kd(c,b)=(c-d_Cb,0)$, so $F(\operatorname{id}_C)$ is contractible. The formula gives $F(C\to0)=C$. Reordering the three coordinates of $F(C\oplus D\to C)$ gives the complex $D\oplus F(\operatorname{id}_C)$. Write $p$ for projection to $D$ and $i$ for its inclusion. Then $pi=\operatorname{id}_D$, and the degree $-1$ morphism $H=0\oplus k$ satisfies $\operatorname{id}-ip=dH+Hd$ on $D\oplus F(\operatorname{id}_C)$. By [F8] this is a cochain homotopy; reindexing $C_n=C^{-n}$ and $s_n=H^{-n}$ makes it a chain homotopy. The homotopy-class category of [F8] therefore makes $p,i$ inverse. They remain inverse in the derived localization of [F2]. A contractible complex similarly has identity equal to zero in that homotopy category and is isomorphic to the zero complex there and in its derived localization. This proves all complex assertions, with [F3] recovering exactly the existing support convention for abelian groups. [F1, F2, F3, F8, algebra, construct]

2.1 In a general triangulated category, [F4] gives the identity triangle $B\xrightarrow{1}B\to0\to B[1]$, its rotations giving $0\to B\xrightarrow{1}B\to0$, and the split triangle $A\to A\oplus B\to B\to A[1]$. These exhibit the asserted cofibers. The identity triangle $C\xrightarrow{1}C\to0\to C[1]$ exhibits the fiber of $C\to0$; the triangle $0\to C\xrightarrow{1}C\to0$ exhibits the fiber of $\operatorname{id}_C$; and the split triangle $D\to D\oplus C\to C\to D[1]$, transported by the biproduct swap, exhibits the fiber of $C\oplus D\to C$. For any chosen completion of one of these arrows, rotate if necessary to make that arrow first. Apply [F5] with the identity isomorphisms on its source and target to obtain a compatible isomorphism on the third object, and then rotate back. The same argument applies to an arrow identified with one of these arrows by supplied source and target isomorphisms. It asserts neither uniqueness nor a functorial cone. Now [F6] makes the map for $U=X$ an identity, and the empty-value assumptions identify the maps for $U=\varnothing$ with $0\to M(X)$ and $C(X)\to0$. For the split pair the two required isomorphisms identify the actual arrows with the summand inclusion and projection, respectively. The chosen relative/support triangles therefore have exactly the objects asserted in the Statement. When the optional comparison data of [F7] are also supplied, retaining [A1] for an article-theory application, that result applied to the chosen cofiber and the actual restriction arrow identifies its enhanced Hom with this same computed support fiber, in the target and under the additional hypotheses specified there. No such comparison, complex model for an arbitrary motive, or positive-codimension purity is needed for the formal triangulated calculations. [F1, F4, F5, F6, F7, A1, given, step 1.1] ∎
