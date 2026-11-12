---
title: Admissible face restrictions and their cycle identities
status: published
research_item: lem-author-89250b1d710c-admissible-face-identities
dependency_level: 2
sources:
  references:
    - title: The Stacks Project, Lemma 29.15.6
      url: https://stacks.math.columbia.edu/tag/01T6
      locator: Lemma 29.15.6, complete statement and short displayed proof.
      statement: A finite-type morphism to a Noetherian scheme has Noetherian source;
        the corresponding local assertion also holds.
      hypotheses: A morphism of schemes, with the indicated finite-type and Noetherian
        hypotheses; here the target is Spec(k).
      reading_limits: Read the live statement and proof in this repair. The cited
        Hilbert basis theorem and quasi-compactness inputs were not
        reconstructed.
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Section 28.5, Lemmas 28.5.2, 28.5.6 and 28.5.7, displayed statements,
        proofs and proof hint.
      statement: Affine open coordinate rings in a locally Noetherian scheme are
        Noetherian. Locally closed subschemes preserve Noetherianity. A
        Noetherian scheme has finitely many irreducible components.
      hypotheses: For the affine-ring assertion, a locally Noetherian scheme; for the
        other assertions, a Noetherian ambient scheme and a locally closed
        immersion where applicable.
      reading_limits: Read these statements and their displayed arguments in this
        repair. Lemma 28.5.6 supplies only a proof hint. Linked ring-locality
        and topological results were not independently reconstructed.
    - title: The Stacks Project, Lemma 28.10.3
      url: https://stacks.math.columbia.edu/tag/02IZ
      locator: Lemma 28.10.3, complete statement and displayed proof.
      statement: For an irreducible closed subset with generic point xi in a scheme Y,
        its chain codimension is dim(O_{Y,xi}).
      hypotheses: Any scheme and an irreducible closed subset with its generic point;
        no separation or equidimensionality hypothesis.
      reading_limits: Read the live statement and short proof in this repair. Its
        cited topological localization and affine algebra lemmas were not
        reconstructed. Only the codimension identity is imported.
---

PDF p. 4: Smooth comparison with Bloch cycles

## Prerequisites

- [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry)
- [lem-author-89250b1d710c-cartier-face-length](item-lem-author-89250b1d710c-cartier-face-length)
- [lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality)
- [thm-author-89250b1d710c-bloch-simplicial-cycle-input](item-thm-author-89250b1d710c-bloch-simplicial-cycle-input)
- [thm-author-89250b1d710c-smooth-local-geometry-input](item-thm-author-89250b1d710c-smooth-local-geometry-input)
- [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:cor-base-change-finite-type-and-products](https://alphabetamath.cc/item/cor-base-change-finite-type-and-products)
- [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)
- [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:thm-affine-closed-immersions-quotient-rings](https://alphabetamath.cc/item/thm-affine-closed-immersions-quotient-rings)
- [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)
- [math:thm-localisation-commutes-with-quotients](https://alphabetamath.cc/item/thm-localisation-commutes-with-quotients)
- [math:thm-localisation-at-a-prime-is-local](https://alphabetamath.cc/item/thm-localisation-at-a-prime-is-local)
- [math:thm-prime-spectrum-of-a-localisation-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-localisation-bijection)
- [math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection)
- [math:thm-radical-as-intersection-of-primes](https://alphabetamath.cc/item/thm-radical-as-intersection-of-primes)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)
- [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring)
- [math:thm-localisation-and-flat-base-change-of-regular-sequences](https://alphabetamath.cc/item/thm-localisation-and-flat-base-change-of-regular-sequences)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)
- [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)
- [` The Stacks Project, Lemma 29.15.6 · Lemma 29.15.6, complete statement and short displayed proof. `](https://stacks.math.columbia.edu/tag/01T6)
- [` The Stacks Project, Noetherian schemes · Section 28.5, Lemmas 28.5.2, 28.5.6 and 28.5.7, displayed statements, proofs and proof hint. `](https://stacks.math.columbia.edu/tag/01OU)
- [` The Stacks Project, Lemma 28.10.3 · Lemma 28.10.3, complete statement and displayed proof. `](https://stacks.math.columbia.edu/tag/02IZ)


## Statement

Assume the Axiom of Choice. Let $k$ be a field, $X$ smooth of finite type over $k$, and $r,n\geq0$ integers. A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; smoothness and finite type refer to this morphism. All products below are over $\operatorname{Spec}k$. Put $\Delta^m=\operatorname{Spec}(k[t_0,\ldots,t_m]/(\sum_{a=0}^m t_a-1))$ for integers $m\geq0$. For a proper subset $J\subsetneq\{0,\ldots,m\}$, the nonempty coordinate face $F_J\subset\Delta^m$ is cut out by $t_j=0$ for $j\in J$, with the remaining coordinates in increasing order; the empty subset gives the whole simplex. Imposing all coordinates gives the empty scheme.

An integral scheme is nonempty, reduced and irreducible. Closed subschemes are specified by closed immersions, and intersections below are scheme-theoretic intersections. Components, when used as cycle generators, have their reduced induced closed structures. Write $\eta_T$ for the generic point of an irreducible component $T$, and $\mathcal O_{Y,y}$ for the stalk of the structure sheaf of $Y$ at $y$. For an integral closed subscheme $T\subset Y$, use the convention $\operatorname{codim}_Y(T)=\dim\mathcal O_{Y,\eta_T}$, where ring dimension is the supremum of lengths of strict chains of prime ideals. This convention applies without a pure-dimension assumption on $Y$.

Write $z^r(X,n)$ for the free abelian group on integral closed subschemes $W\subset X\times\Delta^n$ of codimension $r$ meeting every nonempty coordinate face properly: every irreducible component of $W\cap(X\times F_J)$ has codimension $r$ in $X\times F_J$, and an empty intersection is allowed. Cycles are finite integral linear combinations of these generators. For $n\geq1$ and $0\leq i\leq n$, define
$$d_i^n[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T],$$
where $T$ runs over the components of $W\cap\{t_i=0\}$, $t_i$ denotes the pulled-back coordinate, and the target face is identified with $X\times\Delta^{n-1}$ in increasing coordinate order. Here $\ell_R(M)$ is the number of simple factors of a finite composition series of the $R$-module $M$, independent of the series, with $\ell_R(0)=0$. The sum is zero if the intersection is empty. These formulas have finite coefficients, give homomorphisms $d_i^n:z^r(X,n)\to z^r(X,n-1)$ and, for $n\geq2$ and $0\leq i<j\leq n$, satisfy $d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$ as equalities of integral cycles. Neither separatedness nor pure dimension is assumed for $X$. For $X=\varnothing$, all the groups and maps are zero.

## Facts & Assumptions

**Given:** Choice and $k,X,r,n$, the coordinate faces, codimension convention and groups in the Statement.

**Goal:** Establish finite coefficients, admissibility and the cycle-level face identities with the stated non-separated, non-pure-dimensional scope.

[A1] Choice is assumed for the affine-cover supplier and the Choice-conditional algebraic suppliers below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The simplex, ordered faces, affine product charts and coordinate identities are supplied by [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry). In particular a single face coordinate is a nonzerodivisor on its affine ambient chart.

[F2] For a Noetherian local ring $A$, a nonzerodivisor $t$, and a prime $I$ with $t\notin I$ and $\sqrt{I+(t)}$ the maximal ideal, the specified two-term tensor resolution has only degree-zero homology $A/(I,t)$ and gives its finite length. [lem-author-89250b1d710c-cartier-face-length](item-lem-author-89250b1d710c-cartier-face-length)

[F3] Cycle restriction, detection of equality and codimension, generic points and reduced component structures, and compatibility of the conditional face lengths with open restriction are supplied by [lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality).

[F4] The separated equidimensional smooth finite-type case, including admissibility of face images and the simplicial identity with local Tor intersection multiplicities, is the explicit imported input [thm-author-89250b1d710c-bloch-simplicial-cycle-input](item-thm-author-89250b1d710c-bloch-simplicial-cycle-input).

[F5] Under Choice, a smooth finite-type scheme admits a cover by integral smooth affine opens, each separated and equidimensional. [thm-author-89250b1d710c-smooth-local-geometry-input](item-thm-author-89250b1d710c-smooth-local-geometry-input)

[F6] Generator images extend uniquely to homomorphisms from free abelian groups. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[F7] A commutative ring is Noetherian when every ideal is finitely generated. Products of finite-type $k$-schemes are of finite type. Reference 0 gives Noetherianity over $\operatorname{Spec}k$; reference 1 gives Noetherian affine coordinate rings, Noetherianity of locally closed subschemes, and finiteness of components. Stalks on affine charts are prime localizations, and quotients and localizations of Noetherian rings are Noetherian. [math:cor-base-change-finite-type-and-products](https://alphabetamath.cc/item/cor-base-change-finite-type-and-products) [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization) [math:thm-noetherian-ring-quotients-and-localisations](https://alphabetamath.cc/item/thm-noetherian-ring-quotients-and-localisations) [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[F8] Reference 2 identifies chain codimension with the dimension of the ambient stalk at the generic point. For integral finite-type schemes, chain codimension is the difference of dimensions, and nonempty opens preserve dimension. [thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input](item-thm-adjudicate-16c74c1a77ef-finite-type-cycle-geometry-input) Ring dimension uses [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring).

[F9] A local ring is a nonzero commutative ring with a unique maximal ideal. An ideal $I$ is prime when it is proper and $ab\in I$ implies $a\in I$ or $b\in I$; write $\sqrt J=\{a:a^e\in J\text{ for some integer }e\geq1\}$. A closed subscheme of an affine chart is a quotient spectrum, intersections are cut out by ideal sums, and localization commutes with quotients. Prime localization is local; its prime ideals correspond to primes contained in the localized prime. Primes of a quotient correspond to primes containing its ideal. Under Choice the radical of an ideal is the intersection of the primes containing it. [math:thm-affine-closed-immersions-quotient-rings](https://alphabetamath.cc/item/thm-affine-closed-immersions-quotient-rings) [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product) [math:thm-localisation-commutes-with-quotients](https://alphabetamath.cc/item/thm-localisation-commutes-with-quotients) [math:thm-localisation-at-a-prime-is-local](https://alphabetamath.cc/item/thm-localisation-at-a-prime-is-local) [math:thm-prime-spectrum-of-a-localisation-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-localisation-bijection) [math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection) [math:thm-radical-as-intersection-of-primes](https://alphabetamath.cc/item/thm-radical-as-intersection-of-primes)

[F10] Composition-series length and its independence are supplied by [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module) and [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules).

[F11] Under Choice, adjoining one polynomial variable to a finite-dimensional Noetherian ring raises its dimension by one. Regular sequences remain regular under localization when their terminal quotient remains nonzero. [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring) [math:thm-localisation-and-flat-base-change-of-regular-sequences](https://alphabetamath.cc/item/thm-localisation-and-flat-base-change-of-regular-sequences)

[F12] The formulation uses the scheme-over-base, smoothness, finite-type, integral-scheme, closed-immersion, component, generic-point and stalk interfaces. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme) [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes) [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme) [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset) [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) Affine schemes are quasi-compact under Choice. [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[F13] Being locally of finite type is affine-local on source and target: for a locally finite-type morphism, every affine source open mapping into an affine target open has a finite-type coordinate algebra over that target ring. Restriction to a source open remains locally of finite type, and a quasi-compact locally finite-type morphism is of finite type. [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)

## External input

Reference 0 imports the finite-type Noetherianity implication, applied to the structure map of $Y=X\times\Delta^n$ to $\operatorname{Spec}k$. Its hypotheses are checked in step 1.1.

Reference 1 imports the affine-ring criterion, preservation under locally closed subschemes, and finiteness of components. Local-ring Noetherianity then follows from the stated affine-stalk and ring-localization suppliers; no local proof of the imported scheme results is claimed.

Reference 2 identifies stalk-dimension codimension with chain codimension. The existing finite-type dimension supplier then identifies it with dimension difference on each integral affine product chart and face, exactly where the separated Bloch-cycle input is applied.

## Proof

1.1 The simplex is affine of finite type by its displayed coordinate presentation and [F12]. Thus $Y=X\times\Delta^n$ is finite type by [F7]. A field is Noetherian because its only ideals are $0$ and $k$, so $\operatorname{Spec}k$ is Noetherian. References 0 and 1 in [F7] show that $Y$, its faces, $W$ and their intersections are Noetherian, with finitely many components. Every local ring needed below is Noetherian: choose an affine neighbourhood with Noetherian coordinate ring and use its localization description in [F7]. By [F5], cover $X$ by integral smooth affine opens $U$. By the affine-local criterion [F13], the restricted structure morphism $U\to\operatorname{Spec}k$ is locally of finite type. It is quasi-compact because $U$ is affine and $\operatorname{Spec}k$ has only the empty open and itself, so [F12, F13] make it of finite type. Each is separated and equidimensional, as required by [F4]. The empty $X$ has no generators and gives zero groups and maps. [A1, F1, F4, F5, F7, F12, F13, given, construct]

2.1 For each nonempty $U=\operatorname{Spec}B$ in step 1.1, the affine-local criterion [F13] makes $B$ a finite-type $k$-algebra; integrality of $U$ makes $B$ a domain by [F12]. By [F1], $U\times\Delta^m$ and all its nonempty coordinate faces are affine with polynomial coordinate rings over $B$. These are domains: in a product of two nonzero polynomials the product of the leading coefficients is nonzero. Hence these schemes are integral and finite type. By [F8], our stalk-dimension codimension on them equals the dimension-difference convention in [F4]. Restrictions of admissible generators remain admissible by [F3], so [F4] applies with exactly the same notion of proper face intersection. A single face has ambient dimension one less by [F11], applied repeatedly to the finite-dimensional Noetherian ring $B$ (finite dimensionality follows from [F8]). If the nonempty restriction $W_U$ were contained in that face, its codimensions in the ambient scheme and in the face would differ by one by [F8], contradicting the requirement that both equal $r$. Thus no such $W_U$ is contained in a single face. [A1, F1, F3, F4, F8, F11, F12, F13, step 1.1, algebra]

3.1 At a component $T$ of a single-face intersection put $A=\mathcal O_{Y,\eta_T}$, and let $I$ be the ideal defining $W$ there. By [F9] and the affine stalk description, $A/I=\mathcal O_{W,\eta_T}$; it is a domain, since it is a localization of an affine domain of the integral scheme $W$. Thus $I$ is prime. The image of $t_i$ is nonzero in this domain by step 2.1: a nonzero element of a domain remains nonzero in a prime localization. Moreover $A$ is Noetherian by step 1.1. The coordinate $t_i$ is a nonzerodivisor in $A$ by [F1, F11], since at this point its localized quotient is nonzero. The prime corresponding to $\eta_T$ in an affine chart is minimal over the intersection ideal: a strictly smaller prime over that ideal would give a strictly larger irreducible closed subset of the intersection, contradicting that $T$ is a component. The prime correspondences in [F9] therefore show that the maximal ideal of $A$ is its only prime containing $I+(t_i)$. The radical formula in [F9] gives $\sqrt{I+(t_i)}=\mathfrak m_A$. All hypotheses of [F2] hold, so the local Tor coefficient in [F4] is the finite length of $A/(I,t_i)$. Its length over $A$ equals its length over $A/I$, because an additive subgroup is stable under one scalar action exactly when it is stable under the other; their composition series and simple factors coincide. This gives precisely the coefficient in the Statement by [F10]. [A1, F1, F2, F4, F7, F9, F10, F11, F12, step 1.1, step 2.1, algebra]

4.1 There are finitely many intersection components by step 1.1, and step 3.1 gives finite coefficients. The global sum consequently defines a finite cycle and restricts to the local face cycles by [F3]. Those local cycles are admissible by [F4] and the codimension agreement in step 2.1; [F3] detects these codimension conditions globally. Hence every generator has an image in $z^r(X,n-1)$, including the zero image for an empty intersection. Extend uniquely to a homomorphism by [F6]. [F3, F4, F6, step 1.1, step 2.1, step 3.1, construct]

5.1 Restrict the two sides of the claimed identity to the integral smooth affine opens of step 1.1. Both successive face operations commute with restriction by [F3] and step 3.1. On each open they agree by [F4], with the same final target face identified in increasing coordinate order by [F1]. Detection of cycle equality in [F3] gives equality globally with all coefficients. This proves the lemma; compatibility of intersection multiplicities is imported in [F4]. [F1, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎
