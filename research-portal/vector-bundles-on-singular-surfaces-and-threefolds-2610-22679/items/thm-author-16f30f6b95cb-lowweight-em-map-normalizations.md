---
id: thm-author-16f30f6b95cb-lowweight-em-map-normalizations
kind: theorem
title: External EM low-weight maps with fixed positive normalization
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - def-motivic-cohomology
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem3.5(8) in weight zero; Examples 4.11/4.26 and Construction4.36;
        Construction 5.5; Lemmas 5.10 and 5.12, especially (5.8); Lemma
        5.1/Definition 5.2; Theorem 5.3; Corollary 7.11
      statement: The canonical weight-zero comparison is to RΓ_cdh(−,Z). The
        line-bundle K-class map has a canonical lift 1−[L] to Fil¹ K. The SAME
        graded projection carries 1−[O(−1)] to +c₁(O(1)), via Lemma 5.12’s
        homotopy with (5.2). The weight-one comparison RΓ_Nis(G_m)[−1]→Z(1)_mot
        is an equivalence in degrees ≤3.
      hypotheses: Qcqs schemes over a prime field F=Q or F_p for the motivic
        construction; Lemma 5.12 and Corollary 7.11 have this qcqs scope.
        Restriction to smooth finite-type schemes over any extension field k⊇F
        is allowed. The symbol c₁:Pic→K in Construction 5.5 denotes the K-class
        [L], whereas Definition 5.2 denotes the motivic first Chern comparison;
        these are kept distinct below.
      reading_limits: Read the full displayed statements/proofs of Examples 4.11/4.26,
        Lemma 5.1, Lemmas 5.10/5.12 and Corollary 7.11, the full Construction
        5.5/5.11 formulas and the statement of Theorem 5.3. Did not reconstruct
        trace filtrations, the projective-bundle proof, or the earlier
        Hilbert-90/rigidity inputs of Corollary 7.11. Lemma 5.12 itself recalls
        its classical normalization rather than proving all of classical slice
        theory.
dependency_level: 12
local_argument_provenance: ai-altered
---

## Statement
For the filtration and $K$-space assertions in the selected local realization, assume the Axiom of Choice and its fixed compatible site and universe bounds.

For the actual EM filtration on qcqs prime-field schemes, use $q_j:\mathrm{Fil}^{j}K\to\mathrm{gr}^{j}K=\mathbb Z(j)_{\mathrm{mot}}[2j]$. The canonical weight-zero comparison, induced by the unital filtered map of Construction4.36, is gr⁰K≃RΓ_cdh(Z). On a smooth finite-type scheme over a field its H⁰ is the locally constant integer functions, compatibly with evaluation at field points; this is also the weight-zero case of Theorem3.5(8). There is a natural pointed map a:Pic→Ω∞Fil¹K lifting L↦1−[L]. Under the canonical comparison c₁:RΓ_Nis($G_m$)[−1]→Z(1)_mot, q₁(a(O(−1))) is +c₁(O(1)) on P¹, not its negative. The comparison c₁ is an equivalence through cohomological degree three; hence Ω∞gr¹K is the line-bundle stack $BG_m$, with π₀=Pic and π₁=units. The weight-one P¹-bundle formula uses +c₁(O(1)), so that this class generates Pic(P¹_k)=Z for a field k. On smooth prime-field schemes the proof of EM Lemma5.10 explicitly identifies q₀ with rank.

## Source contract
[A1] The assumed [[math:def-axiom-of-choice]] and fixed bounds discharge [[def-motivic-filtration]] when applying [F1] to the selected local perfect-$K$ tower and its maps. The underlying motivic-complex comparison and its source hypotheses are unchanged; this records the local realization contract rather than a new geometric hypothesis of the published result.

**Given:** Qcqs schemes over a prime field, the Axiom of Choice and fixed compatible bounds for the selected local filtration realization, the actual EM filtered spectrum and the cited canonical comparisons. Restricting these maps to Sm_k is allowed for any extension field k.

**Goal:** Import maps and their sign, not merely graded-group identifications.

[F1] EM Examples4.11/4.26, Construction5.5, Lemmas5.10/5.12, Lemma5.1/Definition5.2, Theorem5.3 and Corollary7.11 give these assertions with the source's distinctions between [L] in K-theory and motivic c₁(L).

## External input
Import [F1]. Define κ=−a, so κ(L) lifts [L]−1. Then q₁κ(O(−1))=−c₁(O(1))=c₁(O(−1)). This equation fixes the ensuing positive determinant normalization. The equivalence Ω∞gr¹K≃$BG_m$ comes from the ACTUAL c₁ comparison; it is not an independently chosen equivalence of Picard groups.
