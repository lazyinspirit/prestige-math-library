---
title: Second Chern class need not be additive on the first piece
status: published
research_item: rem-second-chern-nonadditive
dependency_level: 25
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 11, Remark 5.4
      reading_limits: Read the frozen article text and PDF extraction at printed p. 3,
        Notation and conventions, and p. 11, Remark 5.4 and the neighboring
        Lemma 5.3 calculation; inspected the page-11 PDF image. The remark gives
        no example. The example and actual perfect-K-zero calculation here are
        local applications of declared suppliers.
      statement: Remark 5.4 states that the second motivic Chern class on the first
        image-filtration group need not be a group homomorphism.
      hypotheses: Qcqs schemes over the standing algebraically closed field k; the
        article additionally assumes finite type for schemes called affine. The
        projective-plane example and any-field perfect-K-zero calculation here
        are local elaborations using the declared suppliers.
    - title: Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory
        without Homotopy Invariance, 2019 journal version
      url: https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf
      locator: Definition 5.1 and Section 5 Steps 1–3, Proposition 5.3 and formula
        (5.3.1), printed pp. 269–271
      reading_limits: Read the live primary PDF extraction at Definition 5.1, all
        three Section 5 Steps, Proposition 5.3 and (5.3.1), printed pp. 269–271,
        and the category conventions on pp. 250–251. Completion foundations and
        full coefficient admissibility are not reconstructed.
      statement: Definition 5.1 specifies the small-Zariski Q-space and derived
        simplicial abelian target. Proposition 5.3 gives the looped sheaf
        Q-space as the integer-rank factor times integral completion of stable
        BGL. Steps 1–3 and (5.3.1) construct positive pointed universal classes
        by stability, completion and projection away from rank; index zero is
        separately the unpointed constant one.
      hypotheses: The source category consists of separated, Noetherian, universally
        catenary, finite-dimensional schemes, with its specified coefficient
        theory and stable universal bundle classes. Its local construction does
        not itself supply the arbitrary-qcqs perfect-K-space extension; that
        extension is a separate declared local premise.
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated April 14, 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition 4.4.1 and Lemma 4.4.3 with its displayed proof, printed pp.
        30–31
      reading_limits: Read the primary PDF dated April 14, 2025, Definition 4.4.1 and
        Lemma 4.4.3 with its displayed proof on printed pp. 30–31. Checked
        orientation, projective-bundle and smooth-over-base hypotheses. The
        splitting trick, surrounding model theory and EM realization are not
        reconstructed.
      statement: Definition 4.4.1 defines Chern classes by the projective relation.
        Lemma 4.4.3(ii) expresses the class of a bundle filtered by lines as the
        product of their first-class factors; (iii) gives multiplicativity for a
        fiber sequence of vector bundles.
      hypotheses: A qcqs derived base S and an oriented motivic ring spectrum
        satisfying the projective bundle formula; homotopy commutativity is
        required for Lemma 4.4.3, whose bundle assertions use X smooth over S.
        The actual perfect-K-zero extension in this remark comes from the
        declared local operations and Cartan suppliers.
---

PDF p. 11: Remark 5.4: second Chern nonadditivity

## Prerequisites

- [def-motivic-filtration](item-def-motivic-filtration)
- [lem-smooth-leading-cycle-normalization](item-lem-smooth-leading-cycle-normalization)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)
- [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)
- [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [lem-author-9b6cb358ddc9-actual-cartan](item-lem-author-9b6cb358ddc9-actual-cartan)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)
- [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)
- [math:lem-projective-space-finite-type-over-base](https://alphabetamath.cc/item/lem-projective-space-finite-type-over-base)
- [math:thm-jacobian-criterion-smooth-morphism](https://alphabetamath.cc/item/thm-jacobian-criterion-smooth-morphism)
- [math:def-ag-standard-smooth-algebra](https://alphabetamath.cc/item/def-ag-standard-smooth-algebra)
- [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [lem-adjudicate-d6ce097ccb62-finite-type-qcqs](item-lem-adjudicate-d6ce097ccb62-finite-type-qcqs)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory without Homotopy Invariance, 2019 journal version · Definition 5.1 and Section 5 Steps 1–3, Proposition 5.3 and formula (5.3.1), printed pp. 269–271 `](https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf)
- [` Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF dated April 14, 2025 · Definition 4.4.1 and Lemma 4.4.3 with its displayed proof, printed pp. 30–31 `](https://ryomei.com/papers/MotSp.pdf)


## Remark
Assume the Axiom of Choice and fix compatible Grothendieck universes, with $\omega$ in the scheme-data universe, and the site-size bounds required by the supplied constructions. Universe existence is a separate assumption. Let $k$ be a field and $X$ a quasi-compact quasi-separated $k$-scheme. The second motivic Chern class need not be a group homomorphism on the first image-filtration group $F^1_{\mathrm{mot}}K_0(X)$. In fact, for virtual vector-bundle classes $x,y$ the Whitney identity gives
$$c_2(x+y)=c_2(x)+c_2(y)+c_1(x)c_1(y).$$
Here $K_0(X)=\pi_0K(X)$ is the degree-zero group of the supplied nonconnective perfect-complex $K$-theory spectrum, and $F^1_{\mathrm{mot}}K_0(X)$ is the image of the first filtration stage in it. The classes $c_i$ lie in integral motivic cohomology $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$, and the product is its cup product. A virtual vector-bundle class is a difference of classes of finite locally free sheaves; its Chern series is the quotient of their total Chern series.

For a concrete example, take $k$ algebraically closed (every nonconstant polynomial over $k$ has a root in $k$), $X=\mathbb P^2_k$, $L=\mathcal O_X(1)$ and $x=[L]-[\mathcal O_X]$. The class $x$ belongs to $F^1_{\mathrm{mot}}K_0(X)$, while $c_2(x)=0$ and $c_2(2x)=c_1(L)^2\ne0$.

## Facts & Assumptions

[A1] The stated Choice, universe and site-size assumptions are inherited from the smooth first-stage comparison in [F1], used in step 1.2; the actual and virtual bundle constructions in [F2] and perfect-K-space constructions in [F5], used in steps 1.1 and 2.1; the projective-bundle and derived coefficient constructions in [F3]–[F4], used in step 3.1; and the projective-bundle identification and polynomial-chart smoothness in [F6], used in steps 1.2 and 3.1. Use the closure convention for Grothendieck universes in the stated compatible hierarchy, including $\omega$ in the scheme-data universe. Universe existence and site-size bounds are separate assumptions from Choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

**Given:** The Axiom of Choice, the supplied compatible universe and site-size bounds, a field $k$ and a qcqs $k$-scheme $X$ for the general identity. For the example specialize to an algebraically closed field $k$, $X=\mathbb P^2_k$ and its quotient-tautological line bundle $L=\mathcal O_X(1)$.

**Goal:** Establish the cross-term identity and the example, using the actual first image filtration and the supplied motivic product.

[F1] The first image filtration is the image of the first stage in perfect-complex $K_0$. For a smooth finite-type scheme over a field, that image is the kernel of the locally constant rank map, via the actual first-stage augmentation. [def-motivic-filtration](item-def-motivic-filtration), [lem-smooth-leading-cycle-normalization](item-lem-smooth-leading-cycle-normalization)

[F2] Actual Chern series satisfy Whitney's identity and extend multiplicatively to the vector-bundle Grothendieck group. Their degree-two coefficient obeys the displayed cross-term formula. A line bundle has no Chern classes above degree one, and the trivial line has total series $1$. These assertions concern the vector-bundle group; they do not require a general identification of that group with perfect $K_0$. [prop-chern-whitney-identities](item-prop-chern-whitney-identities), [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface), [def-motivic-chern-classes](item-def-motivic-chern-classes)

[F3] Under the identification of [F6], apply the projective-bundle formula to the rank-three trivial bundle over $\operatorname{Spec}k$ in bidegree $(4,2)$. With $H^{a,b}(T)=H^{a,b}_{\mathrm{mot}}(T,\mathbb Z)$, $\pi:\mathbb P^2_k\to\operatorname{Spec}k$ and $h=c_1(\mathcal O(1))$, it gives the isomorphism
$$H^{4,2}(\operatorname{Spec}k)\oplus H^{2,1}(\operatorname{Spec}k)\oplus H^{0,0}(\operatorname{Spec}k)\longrightarrow H^{4,2}(\mathbb P^2_k),\qquad(a_0,a_1,a_2)\longmapsto\pi^*a_0+\pi^*a_1h+\pi^*a_2h^2.$$
Pullback preserves the unit and products. [prop-motivic-projective-bundle-formula](item-prop-motivic-projective-bundle-formula)

[F4] For a smooth finite-type scheme, $H^{0,0}_{\mathrm{mot}}$ is isomorphic as an abelian group to its codimension-zero Chow group. [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison) The spectrum of a field has exactly one point: a proper ideal cannot contain a nonzero element, since multiplying that element by its inverse would put $1$ in the ideal; and the zero ideal is prime since $ab=0$ with $a\ne0$ forces $b=0$. [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) Its codimension-zero cycle group is therefore $\mathbb Z$. There is no integral closed subscheme of dimension one to supply a principal-divisor relation, so its codimension-zero Chow group is also $\mathbb Z$. This uses precisely the cycle-modulo-rational-equivalence definition, not a multiplicative compatibility assertion for the smooth comparison. [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence)

[F5] The actual universal perfect-K-space construction supplies natural pointed operations $c_i:K_0(X)\to H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ for $i\geq1$ on every qcqs field-scheme, retaining the given Chern classes on actual bundle object classes. Its full affine-to-local perfect-K-space comparison includes components and the actual bundle object map. The actual perfect Cartan lemma supplies coefficientwise multiplicativity and inversion through degree two, with $c_0=1$ and $c_i(0)=0$ for $i>0$. Thus $c_{\leq2}(u)=1+c_1(u)t+c_2(u)t^2$ is multiplicative modulo $t^3$ on actual perfect $K_0$, and agrees there with the virtual bundle series through this degree. Neither premise requires global bundle-difference representatives for arbitrary perfect classes. [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space), [lem-author-9b6cb358ddc9-actual-cartan](item-lem-author-9b6cb358ddc9-actual-cartan)

[F6] Projective space has its standard charts; over $k$, the three charts of $\mathbb P^2_k$ are $\operatorname{Spec}k[u,v]$. [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts) The quotient projective bundle of the free rank-three module is this projective plane, with the same tautological quotient line $\mathcal O(1)$: apply the frame description on the whole base in the projective-bundle definition. [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme) The structure morphism of $\mathbb P^n_S$ is finite type for every $n\geq0$ and base $S$. [math:lem-projective-space-finite-type-over-base](https://alphabetamath.cc/item/lem-projective-space-finite-type-over-base) For $n\geq0$, a polynomial algebra $A[T_1,\ldots,T_n]$ has finitely many generators and no defining relations, so its affine structure map is locally of finite presentation. [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism) The empty equation list, with localization element $1$, is a standard smooth presentation with an invertible empty Jacobian minor. [math:def-ag-standard-smooth-algebra](https://alphabetamath.cc/item/def-ag-standard-smooth-algebra) Thus under AC the Jacobian criterion makes $\operatorname{Spec}A[T_1,\ldots,T_n]\to\operatorname{Spec}A$ smooth for every commutative ring $A$ and $n\geq0$. [math:thm-jacobian-criterion-smooth-morphism](https://alphabetamath.cc/item/thm-jacobian-criterion-smooth-morphism) Smoothness is a pointwise condition on the germ of the morphism, and can therefore be checked on these open charts. [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) Thus the plane is smooth finite type over $k$. For $\operatorname{Spec}k$ itself, the same empty-equation argument at $n=0$ gives smoothness of its identity, and the finite-type statement at $n=0$, using $\mathbb P^0_k=\operatorname{Spec}k$, gives finite type. Both schemes are qcqs by the finite-type field-scheme result. [lem-adjudicate-d6ce097ccb62-finite-type-qcqs](item-lem-adjudicate-d6ce097ccb62-finite-type-qcqs)

[F7] A field and a $k$-scheme use the field axioms and the specified structure morphism $X\to\operatorname{Spec}k$. [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) Here qcqs means quasi-compact with quasi-compact intersections of affine opens, and finite type refers to the structure morphism. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) The bundle, Chern coefficient, cup-product and perfect-$K$ object conventions in the Remark are those of [F1]–[F3] and [F5]. All series are formal: multiplication uses the finite coefficient sums $[t^n](ab)=\sum_{i=0}^n a_i b_{n-i}$; no analytic convergence is asserted.


## Proof
1.1 For virtual vector-bundle classes the multiplicative series in [F2] satisfies $c_t(u+v)=c_t(u)c_t(v)$. Comparing coefficients of $t^2$ gives $c_2(u+v)=c_2(u)+c_1(u)c_1(v)+c_2(v)$. Independently, the actual operations in [F5] satisfy the same coefficient identity for every $u,v\in K_0(X)$, by their Cartan formula in degree two. These are the operations on perfect $K_0$ whose restriction to the first image filtration is at issue. [F2, F5, given, A1]

1.2 By [F6], the three standard charts of $X=\mathbb P^2_k$ are polynomial affine planes. Their polynomial algebras have finite presentations with no relations and the invertible empty Jacobian minor. The Jacobian criterion therefore proves their smoothness over $k$ under [A1]. Smoothness is checked on their germs, and the projective-space finite-type result applies. Thus $X$ is smooth finite type and qcqs over $k$, with the tautological line specified in [F6]. The vector bundles $L$ and $\mathcal O_X$ each have rank one, so the perfect-complex class $x=[L]-[\mathcal O_X]$ has rank zero. Applying [F1] places this actual class in $F^1_{\mathrm{mot}}K_0(X)$. This uses the canonical map sending a vector bundle to its degree-zero perfect complex, not a general vector-bundle-to-perfect $K_0$ isomorphism. [F1, F6, F7, given, A1]

2.1 Put $h=c_1(L)$. By [F2], the actual bundle series are $c_t(L)=1+ht$ and $c_t(\mathcal O_X)=1$. Their virtual quotient is $1+ht$. By [F5], the actual perfect operations have precisely these values on the bundle object classes and are multiplicative with inverses modulo $t^3$. Consequently, on the perfect class $x=[L]-[\mathcal O_X]$ of step 1.2, they give $c_{\leq2}(x)=(1+ht)\cdot1^{-1}=1+ht\pmod{t^3}$. Thus the actual values are $c_1(x)=h$ and $c_2(x)=0$. Apply the perfect-class identity from step 1.1 with both arguments equal to $x$ to obtain $c_2(2x)=h^2$. This proves compatibility for the displayed virtual representatives using the supplied operation itself. [F2, F5, step 1.1, step 1.2, A1]

3.1 The scheme $\operatorname{Spec}k$ is smooth finite type and qcqs by [F6], so [F4] applies. By [F4], the underlying abelian group $H^{0,0}_{\mathrm{mot}}(\operatorname{Spec}k,\mathbb Z)$ is nonzero. Its ring unit is therefore nonzero: a unital ring whose unit is zero is the zero ring. In [F3], the element with this unit in the third summand and zero in the others maps to $h^2$. Since the displayed projective-bundle map is injective, $h^2\ne0$. Thus $c_2(2x)\ne2c_2(x)$, proving the example and the claimed failure of additivity. [F3, F4, F6, step 2.1, A1] ∎


## External input
Reference 0 records the original nonadditivity assertion. Reference 1 records the formal local completion of stable positive universal classes in its stated geometric setting. Reference 2 records projective-relation classes and bundle Whitney for an oriented projective-bundle theory, with its smooth-over-base hypothesis. These restricted literature inputs underlie [F2] and [F5]; the arbitrary-qcqs actual perfect-$K_0$ operations and Cartan identity used here are supplied by the declared local results in [F5]. The coefficient calculation and the projective-plane application are local arguments, not imported proofs of this whole remark.
