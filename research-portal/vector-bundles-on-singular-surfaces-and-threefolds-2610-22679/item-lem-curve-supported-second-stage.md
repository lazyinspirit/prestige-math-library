---
title: Second stage with integral curve support
status: draft
research_item: lem-curve-supported-second-stage
dependency_level: 19
---

PDF p. 16: Proof of Theorem 6.7, supported second-stage exact sequence

## Prerequisites

- [lem-smooth-leading-cycle-normalization](item-lem-smooth-leading-cycle-normalization)
- [lem-filtered-support-exactness](item-lem-filtered-support-exactness)
- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice and the fixed universe bounds of the completed comparison suppliers. Let $k$ be a perfect field, $U$ a smooth finite-type $k$-scheme of pure dimension three, and $C\subset U$ an integral closed curve of codimension two. In particular, this includes the curve in the smooth locus used in Theorem 6.7 over an algebraically closed field. Neither smoothness nor normality of $C$ is assumed.

Use the actual Elmanto–Morrow motivic filtration $F^\bullet K$ and write
$$K_C(U)=\operatorname{fib}(K(U)\to K(U\setminus C)),\qquad F_C^jK(U)=\operatorname{fib}(F^jK(U)\to F^jK(U\setminus C)).$$
Here $\operatorname{fib}$ is the homotopy fiber of the restriction map, and $K_0(U/(U\setminus C))$ means $\pi_0K_C(U)$. The actual augmentation $\epsilon_2:F_C^2K(U)\to K_C(U)$ is an equivalence. Thus its induced isomorphism identifies $\pi_0F_C^2K(U)$ with $K_0(U/(U\setminus C))$, as in the article. Under this identification there is an exact sequence
$$\pi_0F_C^3K(U)\longrightarrow K_0(U/(U\setminus C))\longrightarrow H^{4,2}_{\mathrm{mot},C}(U,\mathbb Z)\cong\mathbb Z[C]\cong\mathbb Z.$$
The second arrow is the actual stage-to-layer projection composed with $(\pi_0\epsilon_2)^{-1}$. The generator $[C]$ is the positive fundamental cycle in the supported cycle group. On a supported perfect complex $E$, the arrow sends its class to $\sum_n(-1)^n\ell_{\mathcal O_{U,\eta}}H^n(E)_\eta$ times $[C]$, where $\eta$ is the generic point of $C$ and $\ell$ denotes module length. It extends additively to virtual classes. This group is supported cohomology, not the image of $[C]$ in the Chow group of $U$.

## Facts & Assumptions

**Given:** The field, smooth threefold, integral closed curve, choice and universe hypotheses in the statement, and the actual augmented motivic tower and restriction maps.

**Goal:** Identify the second supported stage with supported $K$-theory and prove the displayed exact sequence, including the actual map and its positive generator.

[F1] [lem-smooth-leading-cycle-normalization](item-lem-smooth-leading-cycle-normalization) applies to this perfect-field smooth pair with AC. It supplies the actual equivalence $\epsilon_2$, identifies $\pi_0\operatorname{gr}_C^2K(U)$ with $H^{4,2}_{\mathrm{mot},C}(U,\mathbb Z)=\mathbb Z[C]$, and identifies the actual projection after inverse augmentation with the alternating generic-length map and positive generator. Its proof uses AC and the stated fixed universe bounds.

[F2] [lem-filtered-support-exactness](item-lem-filtered-support-exactness) constructs the supported filtered tower by restriction fibers and its graded cofiber sequence. [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) supplies the natural actual motivic graded triangle; [def-cohomology-with-support](item-def-cohomology-with-support) fixes its supported cohomological indexing.

## Proof

**Proof technique:** Apply the homotopy exact sequence of the supported graded cofiber sequence and transport it along the actual augmentation.

1.1 The hypotheses of [F1] hold: $k$ is perfect, $U$ is smooth finite type and pure three-dimensional, and $C$ is integral, closed and codimension two. Therefore the actual augmentation $\epsilon_2$ is an equivalence and induces an isomorphism on $\pi_0$. This identifies the second supported stage with $K_0(U/(U\setminus C))$; the identification is the map induced by $\epsilon_2$, not an equality inferred from abstract group isomorphism. [F1, given]

2.1 By [F2], taking restriction fibers of the actual weight-two graded triangle gives the cofiber sequence $F_C^3K(U)\longrightarrow F_C^2K(U)\longrightarrow\operatorname{gr}_C^2K(U).$ Its long exact homotopy sequence is exact at $\pi_0F_C^2K(U)$. By [F1] and the indexing in [F2], the last term on $\pi_0$ is $H^{4,2}_{\mathrm{mot},C}(U,\mathbb Z)=\mathbb Z[C]$. Transporting the middle term along the isomorphism in step 1.1 gives the displayed exact sequence. [F1, F2, step 1.1]

3.1 The transported second arrow is precisely the actual projection after $(\pi_0\epsilon_2)^{-1}$. The normalization in [F1] computes it as alternating generic length times the positive supported cycle $[C]$; the isomorphism $\mathbb Z[C]\cong\mathbb Z$ sends $[C]$ to $1$. This identifies the arrow and sign, and completes the proof without requiring purity for the possibly singular curve. [F1, step 2.1] ∎
