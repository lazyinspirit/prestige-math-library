---
title: Torsion freeness after removing a smooth-locus integral curve
status: published
research_item: prop-curve-complement-torsion-free
dependency_level: 21
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 13, Proposition 6.1 and proof
      reading_limits: Read the complete Proposition 6.1 statement and proof in the
        frozen article text and inspected supplied PDF image page-13.png for
        this repair. This reference attributes the formulation and argument
        pattern; it is not a new imported proof premise. The actual support
        calculations and characteristic-independent top torsion-freeness are
        used through the declared local suppliers. Their underlying external
        comparison, normalization and Picard-divisibility sources were not
        freshly reconstructed or source-audited in this assignment.
      statement: Proposition 6.1 asserts torsion-freeness of integral motivic
        cohomology in degree six and weight three on the complement of an
        integral curve in the smooth locus of an affine threefold over an
        algebraically closed field. Its proof uses the support exact sequence,
        degree-seven supported vanishing, divisibility of the degree-six
        support-to-global image, and the divisible-subgroup quotient argument.
      hypotheses: X is an affine threefold over an algebraically closed field k and T
        is an integral curve in its smooth locus. The local item explicitly
        takes T closed in X, makes the standing finite-type convention explicit,
        and carries Choice and compatible size bounds from its declared
        suppliers. The proposition imposes no normality, irreducibility,
        reducedness or smoothness hypothesis on X.
---

PDF p. 13: Proposition 6.1 and proof

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)
- [prop-top-motivic-torsion-free](item-prop-top-motivic-torsion-free)
- [lem-curve-supported-degree-seven-vanishing](item-lem-curve-supported-degree-seven-vanishing)
- [lem-curve-supported-degree-six-divisible](item-lem-curve-supported-degree-six-divisible)
- [lem-divisible-quotient-torsion-free](item-lem-divisible-quotient-torsion-free)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-article-conventions](item-def-article-conventions)
- [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry)


## Statement
Assume the Axiom of Choice and the size conventions of [def-cohomology-with-support](item-def-cohomology-with-support). Let $X$ be an affine finite-type threefold over an algebraically closed field $k$, and let $T\subset X$ be a closed integral curve contained in the smooth locus $X_{\mathrm{smooth}}$. Then
$$H^{6,3}_{\mathrm{mot}}(X\setminus T,\mathbb Z)$$
is torsion-free.

A threefold here is a finite-type $k$-scheme of dimension three; no reducedness, irreducibility, normality, or smoothness of $X$ is assumed. An integral curve is a reduced irreducible scheme of dimension one. The smooth locus consists of the points at which $X\to\operatorname{Spec}k$ is smooth. A group is torsion-free if $na=0$ for a positive integer $n$ implies $a=0$. The motivic cohomology group is the degree-six cohomology of the weight-three motivic complex, as defined in [def-motivic-cohomology](item-def-motivic-cohomology). The Axiom of Choice is used through the two supported-cohomology suppliers, including their size and comparison constructions.

## Facts & Assumptions

**Given:** An affine finite-type threefold $X$ over an algebraically closed field $k$, a closed integral curve $T\subset X_{\mathrm{smooth}}$, the Axiom of Choice, and the size conventions of [def-cohomology-with-support](item-def-cohomology-with-support).

**Goal:** Prove that $H^{6,3}_{\mathrm{mot}}(X\setminus T,\mathbb Z)$ is torsion-free.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible size bounds of [def-cohomology-with-support](item-def-cohomology-with-support). These discharge the inherited Choice and size premises of the support construction in [F1], the top torsion-freeness supplier in [F2], the supported-cohomology suppliers in [F3], and the geometry supplier in [F5]. No additional choice is made in the exact-sequence deduction.

[F0] [def-article-conventions](item-def-article-conventions) supplies the $k$-scheme, algebraically closed field, affine finite-type and chain-dimension conventions. Quasi-compact means that every open cover has a finite subcover, and quasi-separated means that intersections of two affine open subschemes are quasi-compact; qcqs means both.

[F1] [def-cohomology-with-support](item-def-cohomology-with-support) defines the weight-three support spectrum as the fiber of restriction from $X$ to $X\setminus T$, with supported cohomology $H^{a,3}_{\mathrm{mot},T}(X,\mathbb Z)=\pi_{-a}M_3(X/(X\setminus T))$. On the qcqs schemes in this statement, [def-motivic-cohomology](item-def-motivic-cohomology) identifies the corresponding ordinary groups with cohomology of the evaluated motivic complexes. [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness) supplies the long exact homotopy sequence of this actual fiber sequence.

[F2] [prop-top-motivic-torsion-free](item-prop-top-motivic-torsion-free) says that $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is torsion-free for an affine finite-type threefold over an algebraically closed field, without extra hypotheses on $X$.

[F3] Under the given field, geometry, choice and size hypotheses, [lem-curve-supported-degree-six-divisible](item-lem-curve-supported-degree-six-divisible) says that the image of the actual support-to-global map in degree six is divisible, and [lem-curve-supported-degree-seven-vanishing](item-lem-curve-supported-degree-seven-vanishing) says that the supported group in degree seven is zero. A group is divisible when multiplication by every positive integer is surjective.

[F4] [lem-divisible-quotient-torsion-free](item-lem-divisible-quotient-torsion-free) says that in a short exact sequence $0\to D\to G\to A\to0$ of abelian groups, if $D$ is divisible and $G$ is torsion-free, then $A$ is torsion-free. Short exact means that the first map is injective, the second is surjective, and the image of the first equals the kernel of the second.

[F5] Under the given hypotheses and [A1], [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry) supplies the smooth locus with its open subscheme structure and proves that $X$ and $X\setminus T$, with its open subscheme structure, are qcqs. Its closed-support convention is the reduced induced structure, which agrees with the given integral curve. Only this open-pair conclusion is needed here.

## Proof

**Proof technique:** Apply the support long exact sequence and the divisible-quotient lemma.

1.1 Put $V=X\setminus T$. Apply [F5] under [A1] to the given $X$, $k$ and $T$: both $X$ and $V$, with its open subscheme structure, are qcqs. Thus the actual fiber sequence and the global-group identifications of [F1] apply to this pair. The fiber sequence of [F1], followed by its long exact homotopy sequence with the given indexing, yields the exact segment $H^{6,3}_{\mathrm{mot},T}(X,\mathbb Z)\longrightarrow H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)\xrightarrow{\rho}H^{6,3}_{\mathrm{mot}}(V,\mathbb Z)\longrightarrow H^{7,3}_{\mathrm{mot},T}(X,\mathbb Z).$ The first map is support-to-global and $\rho$ is restriction. [A1, F0, F1, F5, given]

2.1 The hypotheses of both suppliers in [F3] hold for the given $X$, $k$ and $T$, with the stated choice and size conventions. Thus the last group in step 1.1 is zero, and the image $D$ of the first map is divisible. Exactness makes $\rho$ surjective and identifies its kernel with $D$. [F3, step 1.1, given]

3.1 Write $G=H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ and $A=H^{6,3}_{\mathrm{mot}}(V,\mathbb Z)$. The inclusion of $D$ into $G$ and $\rho$ form a short exact sequence $0\to D\to G\to A\to0$. By [F2], $G$ is torsion-free; by step 2.1, $D$ is divisible. Applying [F4] proves that $A$ is torsion-free, as required. [F2, F4, step 2.1] ∎
