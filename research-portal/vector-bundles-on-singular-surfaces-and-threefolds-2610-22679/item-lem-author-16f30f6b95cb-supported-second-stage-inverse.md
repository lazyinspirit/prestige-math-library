---
title: The supported second stage has the actual augmentation inverse
status: published
research_item: lem-author-16f30f6b95cb-supported-second-stage-inverse
dependency_level: 15
---

PDF p. 16: Supported leading weight two

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom)
- [lem-author-16f30f6b95cb-augmented-filtered-support-transport](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport)
- [lem-filtered-support-exactness](item-lem-filtered-support-exactness)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-motivic-filtration](item-def-motivic-filtration)


## Statement
Assume the Axiom of Choice. Let $U$ be a smooth finite-type scheme of pure dimension three over a field $k$, and let $C\subset U$ be an integral closed curve of codimension two. Let $F^\bullet K$ be the specified motivic filtration. Assume its actual smooth comparison supplies natural graded identifications with Bloch cycle spectra on both $U$ and $U\setminus C$, compatible with restriction. Then the supported graded spectra in weights zero and one are zero, and the augmentations
$$F^2_CK(U)\longrightarrow F^1_CK(U)\longrightarrow F^0_CK(U)=K_C(U)$$
are equivalences. Thus its supported leading weight-two homomorphism is unambiguously
$$\pi_0K_C(U)\xrightarrow{(\pi_0\epsilon_2)^{-1}}\pi_0F^2_CK(U)\longrightarrow\pi_0\operatorname{gr}^2_CK(U),$$
where $\epsilon_2$ is the actual stage-to-zero augmentation. Under the same comparison the target is $H_0z_C^2(U,\bullet)=\mathbb Z[C]$. For any specified natural augmented tower comparison, the leading maps commute with the induced maps on support fibers and supported graded spectra provided the target supported stage-two augmentation is also an equivalence. In particular, this condition holds for comparisons which are equivalences on all stages and on the underlying spectra on both $U$ and $U\setminus C$. Its generator value remains a separate normalization input; it is not implied by the equivalence alone.

## Facts & Assumptions
**Given:** AC, $U,C,k$ as stated, the specified filtration and the explicit natural smooth/Bloch graded comparison, including the supported Bloch fiber comparison. For inverse-augmentation transport the target supported stage-two augmentation is also an equivalence; equivalences on all stages and underlying spectra on both schemes are a sufficient condition.

**Goal:** Justify the domain, target and exact meaning of the leading supported map before its generator is computed.

[F1] Under AC and the stated smooth finite-type pure-three-dimensional and integral codimension-two curve hypotheses, the two lower supported cycle complexes vanish and the bottom weight-two group is $\mathbb Z[C]$. [lem-author-16f30f6b95cb-curve-supported-bloch-bottom](item-lem-author-16f30f6b95cb-curve-supported-bloch-bottom)

[F2] The support construction preserves the graded cofiber sequences. [lem-filtered-support-exactness](item-lem-filtered-support-exactness)

[F3] The stage-zero filtration is naturally $K$, and the supported spectra are formed by taking fibers of its restriction maps. The assumed AC discharges the Choice hypotheses of these K-theory/filtration interfaces and of the supported Bloch supplier in [F1]. [def-motivic-filtration](item-def-motivic-filtration), [def-cohomology-with-support](item-def-cohomology-with-support), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] A specified natural augmented filtered comparison which is an equivalence on all stages and underlying spectra on a scheme and its open complement induces supported stage, underlying and graded equivalences, preserving augmentations and graded projections. [lem-author-16f30f6b95cb-augmented-filtered-support-transport](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport)

## Proof
1.1 By the assumed compatible graded comparison, forming its support fiber identifies each supported layer with the supported cycle spectrum in that weight. By [F1] the layers at weights zero and one are zero. In the stable category a map with zero cofiber is an equivalence; applying this to the two supported transition maps furnished by [F2] gives both displayed equivalences. Their composite is the specified augmentation because the original tower is augmented coherently. [F1, F2, F3, given]

2.1 Inverting that equivalence on $\pi_0$ and then taking the weight-two graded projection gives the displayed homomorphism. Its target, under the same comparison, is the zeroth homology of the weight-two supported cycle complex and equals $\mathbb Z[C]$ by [F1]. The cohomological convention is $\pi_0\operatorname{gr}^2_C=H^{4,2}_C$, since the actual motivic layer has its $[4]$ shift. [F1, F3, step 1.1]

3.1 Let a specified natural augmented comparison have target supported stage-two augmentation $\epsilon'_2$ which is an equivalence. Write $\phi_K$, $\phi_2$ and $\phi_{\mathrm{gr}^2}$ for its maps on underlying support fibers, supported second stages and supported second layers, and write $q_2,q'_2$ for the stage-to-layer projections. Functoriality of support fibers and graded cofibers gives $\epsilon'_2\phi_2=\phi_K\epsilon_2$ and $q'_2\phi_2=\phi_{\mathrm{gr}^2}q_2$ in the homotopy category. Since both augmentations are invertible, these identities imply $q'_2(\epsilon'_2)^{-1}\phi_K=\phi_{\mathrm{gr}^2}q_2\epsilon_2^{-1}$. Taking $\pi_0$ proves commutation of the leading homomorphisms, without requiring the comparison maps themselves to be equivalences. [F2, F3, step 1.1, step 2.1, given, algebra]

4.1 Under the stronger equivalence hypotheses of [F4] on $U$ and $U\setminus C$, the induced maps $\phi_K$ and $\phi_2$ are equivalences. Their commuting augmentation square and step 1.1 imply that $\epsilon'_2$ is an equivalence. Step 3.1 therefore applies, in particular to any specified classical slice/coniveau comparison satisfying those hypotheses. This preserves the actual leading map; its generator value still requires the separate normalization input. [F4, step 1.1, step 3.1] ∎
