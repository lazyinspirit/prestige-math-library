---
title: Factor two in the supported third Chern map
status: published
research_item: prop-smooth-point-third-chern-factor
dependency_level: 33
sources:
  references:
    - title: Fasel and Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 17, Corollary 6.9, first assertion and first paragraph of proof
      statement: The global composite of the third Chern class and third edge is
        multiplication by two on the third motivic image group. The proof
        reduces to smooth-point generators, states compatibility with supports
        and attributes the supported factor-two computation to Grothendieck via
        KM82, Section 1. The explicit positive-generator formulas and clopen
        nonpure extension below are local applications of the declared
        suppliers, not additional statements imported from this paragraph.
      hypotheses: X is a normal affine threefold over an algebraically closed field k.
        The proof uses smooth closed-point generators. The generated item
        retains Choice and compatible site/universe bounds and restricts its
        nonpure point calculation to points on three-dimensional components.
      reading_limits: "Current repair read the frozen article extraction at Corollary
        6.9 and its proof, the complete assigned proposition, all 23 direct
        supplier interfaces, the coefficient and RR/global-square arguments, the
        finite-type supplier Facts F1-F2 and Proof 1.1, the existing Math
        Noetherian-scheme definition, and the direct corollary consumer. No
        fresh KM82, Navarro or underlying coefficient-comparison source reading
        is claimed. Historical incoming reading record (retained, not fresh
        credit): Read Corollary 6.9 and its proof in the supplied frozen article
        extraction, PDF p. 17, lines 874-889 of article.txt. This documents the
        target and its stated support reduction only. KM82 was not read, and no
        proof or normalization is imported directly from it. The supplier
        interfaces and the point-coordinate, supported-Chern, coefficient, edge
        and RR/global-square arguments were inspected for the present
        application; their substantial imported constructions were not
        reconstructed. No independent acceptance or original-author defect is
        claimed."
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [lem-author-d026a7b99ace-positive-coordinates](item-lem-author-d026a7b99ace-positive-coordinates)
- [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map)
- [lem-author-d026a7b99ace-positive-rr-coefficient](item-lem-author-d026a7b99ace-positive-rr-coefficient)
- [lem-author-d026a7b99ace-actual-edge](item-lem-author-d026a7b99ace-actual-edge)
- [lem-author-d026a7b99ace-rr-and-global-square](item-lem-author-d026a7b99ace-rr-and-global-square)
- [def-third-edge-map](item-def-third-edge-map)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata)
- [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [` Fasel and Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 17, Corollary 6.9, first assertion and first paragraph of proof `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the motivic and support constructions. Let $X$ be a normal affine finite-type $k$-scheme of pure dimension three over an algebraically closed field $k$ of arbitrary characteristic, and let $x$ be a smooth closed point, with closed immersion $i:\operatorname{Spec}k(x)\hookrightarrow X$. With the actual support operations constructed above,
$$K_{0,x}(X)\xrightarrow{c_{3,x}}H^{6,3}_{\rm mot,x}(X,\mathbb Z)\xrightarrow{\epsilon_{3,x}}K_{0,x}(X)$$
is multiplication by $2$. More precisely, $c_{3,x}([i_*k(x)])=2\delta_x$ and $\epsilon_{3,x}(\delta_x)=[i_*k(x)]$, where $\delta_x$ is the positive fundamental motivic point class. These maps commute with support-to-global maps into the current global Chern class and third edge. Consequently the global composite $\epsilon_3c_3$ is multiplication by $2$ on each residue-sheaf point generator of the third image filtration. This conclusion also holds on a normal affine finite-type $k$-scheme of dimension three that has lower-dimensional components, for every smooth closed point on a three-dimensional component: its supported groups are those on the pure clopen union $X_3$ of the three-dimensional components, and its global point class is extended by zero.

## Facts & Assumptions
[F0] Algebraic closedness has the root-of-every-nonconstant-polynomial meaning of [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field). A $k$-scheme has its structure morphism to $\operatorname{Spec}k$ by [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base); affineness is the presentation as the spectrum of a ring in [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). Finite type and smoothness at $x$ concern this structure morphism, as in [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) and [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes). Closedness means that $\{x\}$ is closed, as in [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme). Write $k(x)=\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$ by [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point). The point immersion has the meaning of [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes); its existence and perfect residue object here are supplied by [F1]. Perfectness of a field means that each nonconstant irreducible polynomial is separable, as in [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field). Normal means that every local ring is an integrally closed domain: every element of its fraction field satisfying a monic polynomial with coefficients in that ring belongs to it. An irreducible closed subset is a nonempty closed subset that is not a union of two proper closed subsets. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets, and pure dimension three means that every maximal irreducible closed subset has dimension three. Clopen means both open and closed; $X_3$ carries its open subscheme structure.

[A1] The Choice assumption is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). The fixed size bounds mean compatible nested Grothendieck universes $\mathscr U\in\mathscr V\in\mathscr W$ with $\omega\in\mathscr U$, containing the scheme and site data and enlarged for the supplied enhanced categories as required. Their closure convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). Existence of these universes and compatibility of the sites are separate assumptions, not consequences of Choice. They are retained in every use of [F1]–[F6].

[F1] [lem-author-d026a7b99ace-positive-coordinates](item-lem-author-d026a7b99ace-positive-coordinates) fixes the positive supported generators; [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map) supplies actual Chern support compatibility.

[F2] [lem-author-d026a7b99ace-positive-rr-coefficient](item-lem-author-d026a7b99ace-positive-rr-coefficient) fixes the supported RR integer and sign; [lem-author-d026a7b99ace-actual-edge](item-lem-author-d026a7b99ace-actual-edge) supplies the actual supported edge and its normalization.

[F3] [lem-author-d026a7b99ace-rr-and-global-square](item-lem-author-d026a7b99ace-rr-and-global-square) gives the calculation on all integer multiples and the two actual support-to-global squares.

[F4] [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata) and [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products) give the pure clopen union $X_3$, its zero-extended point classes and the augmented product decompositions. The supported and global extension in [F3] uses these actual decompositions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is the inherited assumption used by the point-coordinate and edge suppliers.


[F5] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines a perfect object as a sheaf cochain complex locally equivalent to a bounded complex of finite locally free modules, and defines its support by its nonzero cohomology stalks. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) defines $K(X)$, $K_0(X)=\pi_0K(X)$ and the category-defined $K_{0,x}(X)=\pi_0K(\operatorname{Perf}_{\{x\}}(X))$, with its support-forgetting homomorphism. [def-cohomology-with-support](item-def-cohomology-with-support) fixes the restriction fibers and their motivic indexing: if $C_3(T)=\mathbb Z(3)_{\mathrm{mot}}(T)$, then $H^{6,3}_{\mathrm{mot},x}(X,\mathbb Z)=H^6(\operatorname{fib}(C_3(X)\to C_3(X\setminus\{x\})))$. Its support-to-global map is induced by the fiber projection. The category-to-fiber K-identification for this point is supplied by [F1], not inferred from notation. [def-third-edge-map](item-def-third-edge-map) defines the third image group as $\operatorname{im}(\pi_0F^3_{\mathrm{mot}}K(X)\to K_0(X))$, and the global edge as inverse stage-to-layer isomorphism followed by augmentation with codomain restricted to that image. The supported counterpart is the actual homomorphism of [F2]. The global $c_3$ is the operation of [F1] on the same perfect classes.

[F6] Under the stated Choice premise, [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs) makes a finite-type field-scheme and its open subschemes quasi-compact and quasi-separated (qcqs), with Noetherian underlying space. Its Facts [F1]–[F2] and Proof 1.1 construct a finite affine cover whose coordinate rings are Noetherian. By [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme), such a finite affine cover makes $X$ a Noetherian scheme. This is the scheme-level hypothesis of the global third-edge definition in [F5], in addition to the given dimension three; it is not inferred from topological Noetherianity alone. Here quasi-compact means every open cover has a finite subcover, and quasi-separated means intersections of affine opens are quasi-compact. Thus the support, K-theory and clopen-filtration constructions are evaluated on their supplied domains, including the punctured opens. The smooth affine neighbourhood, positive residue class and positive fundamental cycle are the actual ones of [F1]; no arbitrary identification of two cyclic groups is substituted.

## Proof
**Given:** The stated field, normal affine finite-type pure threefold, smooth closed point, Choice and size hypotheses; or the stated nonpure extension with $x$ on its three-dimensional clopen part.

**Goal:** Prove the precise factor and its global application.

1.1 Use the formulation and support conventions of [F0] and [F5] under [A1]. By [F6], the schemes and opens used here are qcqs, and $X$ is a Noetherian scheme of the given dimension three, so the global edge definition in [F5] applies. Every irreducible polynomial over the algebraically closed field $k$ is linear and hence separable, so $k$ is perfect in the sense of [F0], as needed for the stratum supplier in [F4]. Apply [F1] under these hypotheses and the stated Choice premise in [F4]. In the pure case every supported K-zero class is $nu_x$ for a unique integer $n$. By [F2]–[F3], $c_{3,x}(nu_x)=2n\delta_x$ and $\epsilon_{3,x}(\delta_x)=u_x$, and the supported edge is a homomorphism by [F5], so their composite is $nu_x\mapsto2nu_x$. This also fixes the two requested generator formulas with their positive signs. [A1, F0, F1, F2, F3, F4, F5, F6]

2.1 With the actual image-filtration and edge conventions of [F5], apply the commutative support-to-global squares in [F3]. The image of $u_x$ is the actual perfect residue-sheaf class in $K_0(X)$ and belongs to its third image filtration. Thus the global composite on that generator is twice the same class, even if its global image is zero. For a nonpure normal affine $X$ as stated, use [F4] and the extension in [F3]: the pure calculation on $X_3$ gives the same supported formula, and the global class is zero on the complementary clopen factors. Pointed Chern operations, the natural edge, and the augmented product decompositions transfer the same identity to $X$. Thus every smooth-point generator on a three-dimensional component has the asserted factor, with no purity restriction on the global normal affine scheme. [A1, F1, F3, F4, F5, F6, step 1.1] ∎

## Source scope
Corollary 6.9 and its proof on PDF p. 17 document the factor-two target and the reduction to a supported computation. Reference 0 records that precise source use and its reading limits. The positive generators, actual maps and nonpure clopen extension in this item are obtained from the declared suppliers in [F1]–[F6]; the local composition proof above does not claim to reconstruct KM82 or the substantial imported constructions behind those suppliers.
