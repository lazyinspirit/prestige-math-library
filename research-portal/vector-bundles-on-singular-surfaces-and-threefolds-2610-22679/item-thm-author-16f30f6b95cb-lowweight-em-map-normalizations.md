---
title: External EM low-weight maps with fixed positive normalization
status: published
research_item: thm-author-16f30f6b95cb-lowweight-em-map-normalizations
dependency_level: 12
---

PDF p. 9: Actual low-weight motivic projections and their normalization

## Prerequisites

- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · Theorem3.5(8) in weight zero; Examples 4.11/4.26 and Construction4.36; Construction 5.5; Lemmas 5.10 and 5.12, especially (5.8); Lemma 5.1/Definition 5.2; Theorem 5.3; Corollary 7.11](https://arxiv.org/pdf/2309.08463v1)

## Statement
For the filtration and $K$-space assertions in the selected local realization, assume the Axiom of Choice and its fixed compatible site and universe bounds.

For the actual EM filtration on qcqs prime-field schemes, use $q_j:\mathrm{Fil}^{j}K\to\mathrm{gr}^{j}K=\mathbb Z(j)_{\mathrm{mot}}[2j]$. The canonical weight-zero comparison, induced by the unital filtered map of Construction4.36, is gr⁰K≃RΓ_cdh(Z). On a smooth finite-type scheme over a field its H⁰ is the locally constant integer functions, compatibly with evaluation at field points; this is also the weight-zero case of Theorem3.5(8). There is a natural pointed map a:Pic→Ω∞Fil¹K lifting L↦1−[L]. Under the canonical comparison c₁:RΓ_Nis($G_m$)[−1]→Z(1)_mot, q₁(a(O(−1))) is +c₁(O(1)) on P¹, not its negative. The comparison c₁ is an equivalence through cohomological degree three; hence Ω∞gr¹K is the line-bundle stack $BG_m$, with π₀=Pic and π₁=units. The weight-one P¹-bundle formula uses +c₁(O(1)), so that this class generates Pic(P¹_k)=Z for a field k. On smooth prime-field schemes the proof of EM Lemma5.10 explicitly identifies q₀ with rank.

## Source contract
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed bounds discharge [def-motivic-filtration](item-def-motivic-filtration) when applying [F1] to the selected local perfect-$K$ tower and its maps. The underlying motivic-complex comparison and its source hypotheses are unchanged; this records the local realization contract rather than a new geometric hypothesis of the published result.

**Given:** Qcqs schemes over a prime field, the Axiom of Choice and fixed compatible bounds for the selected local filtration realization, the actual EM filtered spectrum and the cited canonical comparisons. Restricting these maps to Sm_k is allowed for any extension field k.

**Goal:** Import maps and their sign, not merely graded-group identifications.

[F1] EM Examples4.11/4.26, Construction5.5, Lemmas5.10/5.12, Lemma5.1/Definition5.2, Theorem5.3 and Corollary7.11 give these assertions with the source's distinctions between [L] in K-theory and motivic c₁(L).

## External input
Import [F1]. Define κ=−a, so κ(L) lifts [L]−1. Then q₁κ(O(−1))=−c₁(O(1))=c₁(O(−1)). This equation fixes the ensuing positive determinant normalization. The equivalence Ω∞gr¹K≃$BG_m$ comes from the ACTUAL c₁ comparison; it is not an independently chosen equivalence of Picard groups.
