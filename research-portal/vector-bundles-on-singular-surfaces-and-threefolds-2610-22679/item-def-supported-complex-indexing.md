---
title: Support fibers with explicit cohomological indexing
status: published
research_item: def-supported-complex-indexing
dependency_level: 11
---

PDF p. 6: Definition 2.7 support indices

## Prerequisites

- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure)
- [math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three)
- [math:cor-triangulated-five-lemma](https://alphabetamath.cc/item/cor-triangulated-five-lemma)
- [math:cor-short-five-lemma-for-quasi-isomorphisms](https://alphabetamath.cc/item/cor-short-five-lemma-for-quasi-isomorphisms)


## Definition
Let $X$ be a scheme, $T\subseteq X$ a closed subset of its underlying topological space, and $U=X\setminus T$ its open complement. Fix an integer $j$ and a restriction map $f:C_j(X)\to C_j(U)$ of cochain complexes of abelian groups. A cochain complex $A$ consists of abelian groups $A^n$ and homomorphisms $d_A:A^n\to A^{n+1}$ with $d_A^2=0$; its cohomology is $H^n(A)=\ker(d_A:A^n\to A^{n+1})/\operatorname{im}(d_A:A^{n-1}\to A^n)$. A restriction map here means a cochain map: $d f=f d$. A quasi-isomorphism is a cochain map inducing an isomorphism in every cohomological degree.

Define the **support complex** $C_{j,T}(X)$ to be the homotopy fiber of $f$. Explicitly, for $A=C_j(X)$ and $B=C_j(U)$, one model has
$$C_{j,T}(X)^n=A^n\oplus B^{n-1},\qquad d(a,b)=(d_Aa,\,f(a)-d_Bb).$$
The projection $(a,b)\mapsto a$ is the support-to-global map. Define the **supported cohomology group** by
$$H_T^{a,j}(X)=H^a(C_{j,T}(X)).$$

For derived-category statements use $D(\mathbf{Ab})$, the localization of the homotopy category of unbounded cochain complexes of abelian groups at quasi-isomorphisms, with the standing size convention of a small category of complexes or supplied small cofinal denominator families. Here cochain maps are identified up to cochain homotopy, meaning $f-g=d h+h d$ for a degree-minus-one homomorphism $h$. Write $Q$ for localization. The cochain shift is $A[k]^n=A^{n+k}$ with differential $(-1)^k d_A$; the cone convention is $\operatorname{Cone}(f)^n=B^n\oplus A^{n+1}$ with differential $(b,a)\mapsto(d_Bb+f(a),-d_Aa)$. A fiber of a derived morphism $\alpha:A\to B$ means an object with a distinguished triangle $F\to A\xrightarrow{\alpha}B\to F[1]$ in this derived category. Choose a roof $A\xleftarrow{s}A'\xrightarrow{g}B$ representing $\alpha=Q(g)Q(s)^{-1}$, where $s$ is a quasi-isomorphism and $g$ is a cochain map. Use the displayed fiber model for $g$, with support-to-global map its projection to $A'$ followed by $Q(s)$. Its derived isomorphism class, together with the map to $A$, is independent of these choices up to an isomorphism commuting with that map. Such an isomorphism is not asserted unique or canonically chosen.

For an application to derived sections, assume the Axiom of Choice, the fixed site and universe bounds of the derived-sections interface, and supplied compatible restriction data. That interface can then provide the two complexes and their derived restriction morphism.

For spectral realization assume the Axiom of Choice and the size and pointed-space conventions of the Eilenberg–Mac Lane indexing interface. Write $HC_{j,T}(X)$ for its realization of a chosen support-complex model, and write $[2j]$ for suspension of a spectrum by $2j$. For every integer $i$ the indexing conventions are
$$\pi_i HC_{j,T}(X)\cong H_T^{-i,j}(X),\qquad \pi_i\bigl(HC_{j,T}(X)[2j]\bigr)\cong H_T^{2j-i,j}(X).$$
The two spectra in these formulas are distinguished: the second is shifted and the first is not. This auxiliary convention does not identify either spectrum with the article's support object without a separately specified comparison. The article's printed Definition 2.7 formula is retained separately in its article item.

## Definition references
[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure)

[math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three)

[math:cor-triangulated-five-lemma](https://alphabetamath.cc/item/cor-triangulated-five-lemma)

[math:cor-short-five-lemma-for-quasi-isomorphisms](https://alphabetamath.cc/item/cor-short-five-lemma-for-quasi-isomorphisms)

## Facts & Assumptions
**Given:** The scheme, closed subset, complexes and restriction data of the Definition. Derived-category assertions use the stated size convention. Derived sections and spectral realization use the indicated additional Choice, site and size hypotheses.

**Goal:** Justify the explicit fiber, strict-square comparison, independence of derived representatives with its projection, and both spectral indexing formulas.

[F1] Schemes, including their underlying topology, have the meaning of [math:def-scheme](https://alphabetamath.cc/item/def-scheme). The complex, map, quasi-isomorphism, homotopy, shift and cone formulas used here are specified in the Definition.

[F2] Abelian groups and homomorphisms form an abelian category by [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category). The roof localization and its standing size convention are those of [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category).

[F3] [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure) supplies the triangulation by localized cone triangles and the cohomology functors and their long exact sequences. Its exact shift and signed rotation conventions apply here.

[F4] [math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three) completes a commuting square of the first two arrows of distinguished triangles to a morphism of triangles. [math:cor-triangulated-five-lemma](https://alphabetamath.cc/item/cor-triangulated-five-lemma) makes its remaining component an isomorphism when the other two are isomorphisms.

[F5] [math:cor-short-five-lemma-for-quasi-isomorphisms](https://alphabetamath.cc/item/cor-short-five-lemma-for-quasi-isomorphisms) applies to a morphism of short exact sequences of complexes with quasi-isomorphisms on the two outer terms.

[F6] [def-derived-sections-on-sites](item-def-derived-sections-on-sites) supplies derived evaluation under its stated Choice, site and universe hypotheses. Restriction data remain an explicit application premise.

[F7] [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index) applies to any unbounded cochain complex of abelian groups under its ZFC, size and pointed-space conventions and gives the unshifted and spectrally shifted homotopy-group formulas.

[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is used when invoking the supplied derived-sections construction in [F6] or spectral realization in [F7]. The explicit differential and the individual roof and triangle comparisons add no choice hypothesis beyond their declared suppliers.

## Justification
1.1 The differential squares to zero since its second component after two applications is $f(d_Aa)-d_B(f(a)-d_Bb)=0$, and projection to $A$ is a cochain map. The signed permutation $(a,b)\mapsto(b,-a)$ identifies this model with $\operatorname{Cone}(f)[-1]$ so that the first map in the rotated cone triangle is the displayed projection. Thus [F2] and [F3] give its fiber triangle. For a strictly commuting square $v f=f'u$ of cochain maps, $(a,b)\mapsto(u(a),v(b))$ is a cochain map on the fiber models and commutes with their projections. It fits into a morphism of short exact sequences $0\to B[-1]\to F(f)\to A\to0$, where the first arrow is $b\mapsto(0,b)$. If $u,v$ are quasi-isomorphisms, so is $v[-1]$ since $H^n(B[-1])=H^{n-1}(B)$, and [F5] makes the fiber map a quasi-isomorphism. For an arbitrary derived restriction morphism, [F2] supplies a roof with actual cochain maps $s,g$; applying this same cone construction to $g$ and transporting its triangle along $Q(s):A'\to A$ gives the specified fiber triangle and support-to-global map. [F1, F2, F3, F5, given, construct, algebra]

2.1 For two such choices, rotate their fiber triangles to $A\xrightarrow{\alpha}B\to F[1]\to A[1]$ and $A\xrightarrow{\alpha}B\to F'[1]\to A[1]$. Apply [F4] with identities on $A,B$ to obtain an isomorphism $F[1]\to F'[1]$ of the third objects. Shifting back gives an isomorphism $F\to F'$ commuting with the projections to $A$, since the triangle morphism also commutes with the final maps to $A[1]$ and the same signed rotation is used in both triangles. The same argument with commuting isomorphisms on $A,B$ covers a change of the two derived objects themselves. It asserts existence of a compatible isomorphism, without asserting uniqueness or functoriality of cone choices. By [F3], applying cohomology gives isomorphic supported groups and compatible support-to-global homomorphisms. In the derived-sections application invoke [F6] under [A1] and its stated restriction and size data. Finally the fiber complex constructed in step 1.1 is an unbounded cochain complex of abelian groups, so [F7] under [A1] yields $\pi_i HC_{j,T}(X)=H^{-i}(C_{j,T}(X))$ up to its specified natural isomorphism and gives the second formula after spectral suspension by $2j$. These are precisely the two displayed indexing identifications; no comparison with the article's separately named object follows from them. [F2, F3, F4, F6, F7, A1, step 1.1] ∎
