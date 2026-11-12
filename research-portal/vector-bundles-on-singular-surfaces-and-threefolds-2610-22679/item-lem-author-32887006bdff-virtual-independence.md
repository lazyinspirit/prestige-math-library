---
title: Clopen rank extension and genuine representative independence
status: published
research_item: lem-author-32887006bdff-virtual-independence
dependency_level: 22
sources:
  references:
    - title: Elmanto and Morrow, Motivic cohomology of equicharacteristic schemes,
        arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1 opening, printed p. 3; prime-field convention, p. 2;
        Section 2.1, p. 11
      statement: For a prime field F and nonnegative weight j, the actual motivic
        complex is a finitary Nisnevich sheaf on qcqs F-schemes valued in D(Z).
      hypotheses: F is Q or F_p; the schemes are qcqs; j is nonnegative.
      reading_limits: Freshly checked the versioned primary PDF text at the
        prime-field convention on printed p. 2, the opening of Theorem 1.1 on p.
        3, and the complete Section 2.1 on p. 11 for this repair. Import only
        existence, functoriality and derived Nisnevich sheafhood of the
        nonnegative-weight complexes. No visual page inspection, reconstruction
        of Section 4, or fresh review of the upstream foundational literature is
        claimed. Read the current local complex, clopen-descent, finite-product,
        Chern-class, Whitney, projective-bundle and virtual-extension suppliers.
        The nonadditivity example uses the current smooth-comparison proposition
        and the exact published mathematical interfaces declared in F6; its
        deduction is local.
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [lem-author-32887006bdff-actual-whitney](item-lem-author-32887006bdff-actual-whitney)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent)
- [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)
- [math:ex-spectrum-field-one-point](https://alphabetamath.cc/item/ex-spectrum-field-one-point)
- [math:ex-polynomial-ring-flat-smooth](https://alphabetamath.cc/item/ex-polynomial-ring-flat-smooth)
- [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence)
- [` Elmanto and Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 · Theorem 1.1 opening, printed p. 3; prime-field convention, p. 2; Section 2.1, p. 11 `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice and the compatible universe and site-size bounds of the supplied motivic constructions. Let $k$ be a field and $X$ any qcqs $k$-scheme. For arbitrary finite locally free bundles on $X$, extend the supplied classes from constant-rank clopen strata by their unique finite-clopen gluing. The actual series are natural and satisfy Whitney for every exact sequence. Consequently they define a unique natural homomorphism $c_t:K^0_{\rm vb}(X)\to 1+\prod_{i\geq1}H^{2i,i}(X)t^i$ with multiplicative-series target, and $c_t([V]-[W])=c_t(V)c_t(W)^{-1}$ independently of the representative. No identification of $K^0_{\rm vb}$ with perfect $K_0$ on general schemes is asserted.

## Facts & Assumptions

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated size bounds. These are inherited from the actual Whitney, motivic-class, derived-sheaf and virtual-extension constructions in [F1]–[F4] when invoked in steps 1.1–7.1. The same assumptions are retained for the smooth comparison and polynomial-smoothness inputs in [F6], used in step 7.1. Universe existence is a separate size assumption; retain the suppliers' fixed compatible nested universes, with $\omega$ in the scheme-data universe. The finite common rank partition requires no additional arbitrary choice.

[F1] [lem-author-32887006bdff-actual-whitney](item-lem-author-32887006bdff-actual-whitney) proves actual Whitney and root factorization at constant rank; [def-motivic-chern-classes](item-def-motivic-chern-classes) gives naturality.

[F2] For every field $k$, the actual weight-$j$ motivic complex, $j\geq0$, is the restriction of a homotopy-coherent derived Nisnevich sheaf on qcqs schemes over the prime subfield. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) Finite clopen descent identifies such a sheaf with the product of its values on the pieces, including zero on the empty scheme. [lem-author-ab0a6fc202cb-clopen-derived-descent](item-lem-author-ab0a6fc202cb-clopen-derived-descent) Cohomology commutes with finite derived products, and motivic cohomology is cohomology of the actual complexes. [lem-author-ab0a6fc202cb-finite-derived-products](item-lem-author-ab0a6fc202cb-finite-derived-products), [def-motivic-cohomology](item-def-motivic-cohomology)

[F3] [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface) fixes $K^0_{\rm vb}(X)$ as the abelian group generated by bundle isomorphism classes with $[E]=[E^{\prime}]+[E^{\prime\prime}]$ for every short exact sequence $0\to E^{\prime}\to E\to E^{\prime\prime}\to0$, and gives the unique extension under its stated theory, naturality and Whitney hypotheses. Its target consists of formal series with constant coefficient one and degree-$i$ coefficient in $H^{2i,i}(X)$; multiplication is finite convolution in each degree. [lem-third-order-chern-inversion](item-lem-third-order-chern-inversion) gives formal coefficient arithmetic.

[F4] Under [A1], [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula) supplies the actual motivic cohomology on qcqs schemes over any field as an additively oriented bigraded theory satisfying the projective bundle contract, with functorial unital ring pullbacks and graded commutativity in the first degree. Negative weights are extended by zero. This is the theory required by the virtual-extension interface in [F3]. Its projective bundle contract includes closure of the qcqs category under positive-rank quotient projective bundles, the tautological quotient line, and the class-power projective bundle isomorphism in every bidegree.

[F5] A finite locally free bundle is locally a finite free $\mathcal O_X$-module; its chart ranks define a well-defined locally constant function $X\to\mathbb N$, unchanged under open restriction. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) A scheme is qcqs when its underlying space is quasi-compact and intersections of affine opens are quasi-compact. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) Here quasi-compact means that every open cover has a finite subcover; a clopen locus has the restricted open-subscheme structure. A $k$-scheme has a specified structure morphism to $\operatorname{Spec}k$. An exact sequence of bundles means a sequence of their module sheaves with zero end terms and image equal to kernel at every term, as in [F1] and [F3]. Restricting to an open subscheme preserves this condition because the sheaf kernels and images restrict to the corresponding kernels and images.

[F6] For the example, [math:ex-spectrum-field-one-point](https://alphabetamath.cc/item/ex-spectrum-field-one-point) gives the one-point affine scheme $S=\operatorname{Spec}k$. Under [A1], the $n=0$ case of [math:ex-polynomial-ring-flat-smooth](https://alphabetamath.cc/item/ex-polynomial-ring-flat-smooth) gives smoothness of its identity structure morphism. Here finite type means quasi-compact and, locally on affine charts, having a coordinate algebra generated by finitely many elements over the base algebra; the identity of $S$ has its single affine chart with the empty generator list. For a smooth finite-type field-scheme, [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison) gives $H^{0,0}(S)\cong CH^0(S)$ as abelian groups. Use the codimension-zero Chow group of [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence): it is the free abelian group on integral codimension-zero closed subschemes modulo principal-divisor cycles from integral closed subschemes of one greater dimension. Here a closed subscheme is specified by a sheaf of ideals and its quotient structure sheaf, and integral means nonempty with domain coordinate rings on affine opens. Only the group comparison is needed, not multiplicative compatibility.

**Given:** A field $k$, a qcqs $k$-scheme $X$, AC and the stated compatible universe and site-size bounds.

**Goal:** Close every hypothesis of virtual extension without circularity.

## External input

Reference 0 supplies the existence of the nonnegative-weight motivic complexes as finitary Nisnevich sheaves over a prime field, with the enhanced derived target convention of Section 2.1. Field restriction is supplied by [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes). The clopen gluing and virtual extension below are local applications of the declared suppliers; the published motivic-complex construction is not reconstructed.

## Proof

1.1 By [F5], each bundle has a well-defined locally constant rank function, so the common rank loci for a finite bundle family are pairwise disjoint open-and-closed subschemes covering $X$. Quasi-compactness gives a finite subcover, which contains every nonempty locus by disjointness. Each locus is quasi-compact: extend any open cover by its open complement in $X$ and take a finite subcover. Its affine opens are affine opens of $X$, so their intersections are quasi-compact by [F5]; hence the locus is quasi-separated. Thus this is a finite clopen partition by qcqs $k$-schemes. For empty $X$ use the empty partition. [given, F5, construct]

2.1 Let $F$ be the prime subfield of $k$. Forgetting to $F$ changes neither the underlying qcqs schemes nor the clopen cover and its fiber products. The iterated intersections of these pieces are the pieces themselves or the empty scheme, so all the cover objects and fiber products remain qcqs. The category in [F2] contains all prime-field morphisms between these schemes. It therefore contains every augmentation, face and degeneracy map of this cover, and both directions of the canonical intersection isomorphisms required by the clopen-descent supplier. For every $j\geq0$, [F2] therefore supplies the actual derived Nisnevich sheaf and applies finite-clopen descent to exactly this cover. It gives $\mathbb Z(j)_{\mathrm{mot}}(X)\simeq\prod_\alpha\mathbb Z(j)_{\mathrm{mot}}(X_\alpha)$ by restriction. Taking cohomology and using finite-product compatibility in [F2] gives $H^{a,j}(X)\cong\prod_\alpha H^{a,j}(X_\alpha)$ for every integer $a$. The same holds for every finite clopen refinement. Empty covers give the zero complex and zero groups. This argument imposes no algebraic-closure assumption. [A1, F2, step 1.1]

3.1 For each $i\geq1$, use the isomorphism of step 2.1 in bidegree $(2i,i)$ to define $c_i$ as the unique class restricting to the constant-rank values from [F1]. Refinement leaves this class unchanged by uniqueness and naturality of those values. Use the unit for $c_0$. For nonempty $X$ the rank has a finite maximum, so coefficients above that maximum vanish by injectivity of restriction; on empty $X$ all coefficient groups are zero and the series is the prescribed unit. Thus the actual series is a polynomial in every case. [A1, F1, step 1.1, step 2.1, construct]

4.1 For a morphism $f:Y\to X$ of qcqs $k$-schemes, the inverse-image clopen partition of $Y$ is again finite, and the pulled-back bundles have the same constant ranks on its pieces by [F4]. The pieces are qcqs by the argument of step 1.1 applied to $Y$. Pullback preserves the constant-rank classes by [F1], so the restriction isomorphism of step 2.1 on $Y$ identifies the pullback of each glued class with the class glued for the pulled-back bundle. For an exact sequence, use a common rank partition and restrict the exact sequence using [F5]. On each component apply actual Whitney [F1]; joint injectivity from step 2.1 gives the global identity coefficient by coefficient. The same argument preserves isomorphism invariance. [A1, F1, F4, F5, step 1.1, step 2.1, step 3.1]

5.1 By [F4], the actual motivic groups have the additively oriented bigraded theory and projective bundle contract required by [F3]. Step 4.1 supplies its remaining hypotheses: isomorphism invariance, naturality and exact-sequence Whitney for every finite locally free bundle. All hypotheses of [F3] therefore hold. Its construction kills every exact-sequence relation in the presentation of $K^0_{\rm vb}(X)$, so descends to a unique homomorphism. Its value on any difference is the stated quotient, with the inverse defined recursively in formal series, not by convergence. Two differences representing the same class have the same image because this is a map on the presented group. Its naturality also follows from [F3]. Thus this is genuine representative independence. [A1, F3, F4, step 4.1]

6.1 The multiplicative series group is commutative because [F4] gives graded commutativity and all coefficient first degrees are even. The product and inverse formulas through degree three in [F3] therefore apply. Thus $c_1$ is additive on virtual sums and $c_2(x+y)=c_2(x)+c_1(x)c_1(y)+c_2(y)$. [A1, F3, F4, step 5.1]

7.1 To witness the failure of higher-coefficient additivity, take $S=\operatorname{Spec}k$ as in [F6]. Its one-point topology makes it quasi-compact, and every intersection of affine opens is empty or that point, hence quasi-compact; thus [F5] makes $S$ qcqs. Its identity is smooth under [A1] and finite type by the single-chart empty-generator calculation in [F6]. The smooth comparison therefore gives $H^{0,0}(S)\cong CH^0(S)$. The only integral closed subscheme of $S$ is $S$ itself: the only proper ideal of the field is zero. It has dimension zero, so the Chow presentation in [F6] has one generator and no dimension-one subscheme giving a relation. Thus $CH^0(S)\cong\mathbb Z$, and $H^{0,0}(S)$ is nonzero. Its ring unit is nonzero, since $1=0$ would force $a=1a=0a=0$ for every element. Put $Y=\mathbb P_S(\mathcal O_S^{\oplus3})$, the quotient projective bundle in [F4], with projection $\pi:Y\to S$, and $L=\mathcal O_Y(1)$, $h=c_1(L)$. Here $\mathcal O_S^{\oplus3}$ is the free rank-three module sheaf with componentwise sections, so [F5] makes it a bundle; [F4] makes $Y$ a qcqs $k$-scheme. In bidegree $(4,2)$ its projective bundle isomorphism is $(a_0,a_1,a_2)\mapsto\pi^*a_0+\pi^*a_1h+\pi^*a_2h^2$ from $H^{4,2}(S)\oplus H^{2,1}(S)\oplus H^{0,0}(S)$ to $H^{4,2}(Y)$. It sends the nonzero vector $(0,0,1)$ to $h^2$, by unital pullback, so $h^2\ne0$. By [F1], the line has $c_t(L)=1+ht$. For $u=[L]\in K^0_{\rm vb}(Y)$, step 5.1 gives $c_t(2u)=(1+ht)^2$, whence $c_2(u)=0$ and $c_2(2u)=h^2\ne0=2c_2(u)$. Thus higher coefficients need not be additive even for the actual motivic theory. [A1, F1, F3, F4, F5, F6, step 5.1, step 6.1, algebra] ∎
