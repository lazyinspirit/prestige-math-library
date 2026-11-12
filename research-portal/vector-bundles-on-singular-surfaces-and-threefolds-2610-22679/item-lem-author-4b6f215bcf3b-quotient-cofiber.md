---
title: Derived finite coefficients preserve mapping cones
status: published
research_item: lem-author-4b6f215bcf3b-quotient-cofiber
dependency_level: 1
---

PDF p. 6: Finite-coefficient comparison

## Prerequisites

- [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes)
- [math:lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category](https://alphabetamath.cc/item/lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category)
- [math:thm-the-calculus-of-fractions-constructs-the-localization](https://alphabetamath.cc/item/thm-the-calculus-of-fractions-constructs-the-localization)
- [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure)
- [math:prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third](https://alphabetamath.cc/item/prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third)
- [math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic](https://alphabetamath.cc/item/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic)


## Statement
For a morphism $f:A\to B$ in $D(\mathbb Z)$ and a positive integer $n$, there is an isomorphism
$$\operatorname{cofib}(f\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n)\cong\operatorname{cofib}(f)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n.$$
Here cofibers in the triangulated category $D(\mathbb Z)$ are considered up to isomorphism. More precisely, fix the complex $P=[\mathbb Z\xrightarrow{n}\mathbb Z]$ in degrees $-1$ and $0$. For every cochain map $g:A'\to B'$ representing a derived morphism, there is a chain isomorphism
$$\operatorname{Cone}(g)\otimes P\cong\operatorname{Cone}(g\otimes 1_P),$$
natural for strictly commutative squares of cochain maps. Naturality refers to this chain-level construction with fixed $n$ and $P$.

## Statement references

[lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes)

[math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure)

## Facts & Assumptions

**Given:** A morphism $f$ in $D(\mathbb Z)$ and $n>0$, with the conventions and size data below.

**Goal:** Identify the two indicated cofibers.

[F1] Use cochains with $d:C^i\to C^{i+1}$ and cochain maps as in [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category). Write $K(\mathbb Z)$ for their homotopy category and $Q:K(\mathbb Z)\to D(\mathbb Z)=K(\mathbb Z)[\mathrm{qis}^{-1}]$ for the unbounded localization from [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). All Hom-set assertions are under its standing size hypothesis: a small model of complexes or supplied small cofinal denominator families. Its conventions are $C[1]^i=C^{i+1}$, $d_{C[1]}=-d_C$, and $\operatorname{Cone}(g)^i=B'^i\oplus A'^{i+1}$ with differential $(b,a)\mapsto(d_{B'}b+g(a),-d_{A'}a)$. Here $H^i(C)=\ker d_C^i/\operatorname{im}d_C^{i-1}$; acyclic means all these groups vanish and a quasi-isomorphism induces isomorphisms on all these groups.

[F2] Cochain reindexing of [math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes) gives $\operatorname{Tot}(C\otimes E)^k=\bigoplus_{i+j=k}C^i\otimes_{\mathbb Z}E^j$ with $d(c\otimes e)=d_Cc\otimes e+(-1)^i c\otimes d_Ee$. Fix $P=[\mathbb Z\xrightarrow{n}\mathbb Z]$ in degrees $-1,0$, augmented to $\mathbb Z/n$ in degree zero, and put $T_n(C)=\operatorname{Tot}(C\otimes P)$, $T_n(g)=g\otimes1_P$. The unbounded finite-coefficient functor $C\mapsto C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$ is the descent of $QT_n$ to $D(\mathbb Z)$, as constructed in the coefficient-construction entry and first proof step of [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence). That supplier proves homotopy invariance and descent; the acyclicity and quasi-isomorphism preservation needed here are also verified below. K-flat means that tensoring with an arbitrary acyclic complex gives an acyclic total complex.

[F3] Quasi-isomorphisms admit the roof calculus in $K(\mathbb Z)$ by [math:lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category](https://alphabetamath.cc/item/lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category). Under the size data in [F1], [math:thm-the-calculus-of-fractions-constructs-the-localization](https://alphabetamath.cc/item/thm-the-calculus-of-fractions-constructs-the-localization) gives a roof $A\xleftarrow{s}A'\xrightarrow{g}B$ for every $f:A\to B$, with $s$ a quasi-isomorphism and $f=Q(g)Q(s)^{-1}$; choose cochain-map representatives of $s,g$. The localization is exact and its distinguished triangles are the isomorphic images of localized cone triangles by [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure). Here a cofiber of $f$ means the third object of a distinguished triangle beginning with $f$. Any two such triangles are isomorphic: TR3 extends identities on the first two objects, and [math:prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third](https://alphabetamath.cc/item/prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third) makes the third component invertible. No functorial choice of that component is asserted.

[F4] A cochain map is a quasi-isomorphism exactly when its cone is acyclic, by cochain reindexing of [math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic](https://alphabetamath.cc/item/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic).

## Proof

1.1 For any cochain map $g:A'\to B'$, regroup the target and shifted-source summands to obtain $T_n(\operatorname{Cone}(g))\to\operatorname{Cone}(T_n(g))$, sending $b\otimes p$ to the target summand and $a\otimes p$ to the shifted-source summand without changing either tensor. Each degree is a finite sum because $P$ has only two terms. For $a\in A'^{i+1}$ and $p\in P^j$, the differential on the latter summand has components $g(a)\otimes p$, $-d_{A'}a\otimes p$, and $(-1)^i a\otimes d_Pp$ on both sides. On the target summand it is the tensor differential on both sides. Thus this is a chain isomorphism. The cone map of a strictly commuting square acts separately on source and target tensors, so commutes with this regrouping, proving the stated chain-level naturality. We verify its unbounded use explicitly. In the two-summand coordinates, $T_n(C)^m=C^m\oplus C^{m+1}$ has differential $(y,z)\mapsto(d_Cy+(-1)^{m+1}nz,d_Cz)$; hence $(y,x)\mapsto(y,(-1)^{m+1}x)$ is a chain isomorphism $\operatorname{Cone}(n:C\to C)\to T_n(C)$. If $C$ is acyclic and $(y,x)$ is a degree-$m$ cone cocycle, write $x=du$ and then $y+nu=dv$; these equations follow successively from $dx=0$ and $d(y+nu)=0$. Then $(y,x)=d(v,-u)$, proving that $T_n(C)$ is acyclic without any bound on $C$. This proves K-flatness of $P$. Its augmentation to $\mathbb Z/n$ is a quasi-isomorphism since $n:\mathbb Z\to\mathbb Z$ is injective with cokernel $\mathbb Z/n$. If $h$ is any quasi-isomorphism, [F4] makes $\operatorname{Cone}(h)$ acyclic; the just-proved acyclicity and chain isomorphism make $\operatorname{Cone}(T_n(h))$ acyclic. Thus $T_n(h)$ is a quasi-isomorphism by [F4]. [given, F1, F2, F4, construct, algebra]

2.1 Choose the roof in [F3], taking its target representative to be $B$ itself. Transporting the localized cone triangle of $g$ along $Q(s):Q(A')\cong A$ gives a distinguished triangle starting with $f$, so $Q(\operatorname{Cone}(g))$ represents $\operatorname{cofib}(f)$. Applying the functor of [F2] to the roof gives $f\otimes^{\mathbf L}\mathbb Z/n=Q(T_n(g))Q(T_n(s))^{-1}$, where the denominator is invertible by step 1.1. The localized cone triangle of $T_n(g)$, transported along this denominator, therefore identifies $Q(\operatorname{Cone}(T_n(g)))$ with a cofiber of $f\otimes^{\mathbf L}\mathbb Z/n$. Meanwhile $Q(T_n(\operatorname{Cone}(g)))$ represents $\operatorname{cofib}(f)\otimes^{\mathbf L}\mathbb Z/n$, since the coefficient construction is a functor on $D(\mathbb Z)$. Step 1.1 identifies these objects. The uniqueness up to isomorphism in [F3] allows any choices of the indicated cofibers and proves the displayed derived isomorphism, while retaining precisely the asserted chain-level naturality. [F1, F2, F3, step 1.1, construct] ∎
