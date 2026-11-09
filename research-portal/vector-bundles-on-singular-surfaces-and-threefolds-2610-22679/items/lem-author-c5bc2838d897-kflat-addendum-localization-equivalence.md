---
id: lem-author-c5bc2838d897-kflat-addendum-localization-equivalence
kind: lemma
title: K-flat roofs give the full derived localization
status: draft
domain: mathematics
deps:
  - thm-author-c5bc2838d897-kflat-addendum-verdier-criterion
  - thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input
  - thm-author-c5bc2838d897-kcoherent-enhanced-localization-input
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-c5bc2838d897-kflat-addendum-verdier-criterion: mathematical-premise
  thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input: mathematical-premise
  thm-author-c5bc2838d897-kcoherent-enhanced-localization-input: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
Assume AC. For any scheme X let A=Mod($O_X$), the abelian category of all Zariski module sheaves, $K=K$(A) its cochain homotopy category, and H⊆K the full subcategory on K-flat complexes. Let S be the quasi-isomorphisms in K and $S_H$=S∩Arrows(H). Then the functor induced by actual inclusion

$$(S_H)^{-1}H\longrightarrow S^{-1}K=D(\mathcal O_X)$$

is an exact equivalence, including full faithfulness. Consequently the actual inclusion induces an exact equivalence F(X)[$W_X$⁻¹]→𝒟(X) of stable infinity-localizations, with F(X) the ordinary category of K-flat complexes and $W_X$ its quasi-isomorphisms, and 𝒟(X) the supplied derived enhancement. The ordinary-localization assertion holds for any ringed space. No K-flat complex is assumed K-projective, and morphisms in these localizations are not replaced by chain maps without denominators.

## Facts & Assumptions
**Given:** X, all unbounded sheaf complexes, AC and fixed universes. Use a larger universe to form their homotopy categories and localizations.

**Goal:** Prove essential surjectivity, fullness and faithfulness of this actual localization functor, then its stable enhanced upgrade.

[F1] [[thm-author-c5bc2838d897-kflat-addendum-verdier-criterion]] gives Stacks Lemma 13.5.8 and the quasi-isomorphism multiplicative system, with the precise right-roof/common-refinement calculus.

[F2] [[thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input]] includes Stacks Lemma 20.26.12 (06YF), providing R→M K-flat and quasi-isomorphic for every complex M, and Lemma 20.26.6 (079S), providing shift/cone closure.

[F3] [[thm-author-c5bc2838d897-kcoherent-enhanced-localization-input]] supplies HA Proposition 1.3.4.5 (chain-interval localization and dg nerve) and Drew Theorem 1.3 (stable Verdier localization). [[thm-author-4f716d60801a-derived-enhancement-input]] identifies 𝒟(X) as localization of all complexes, with h𝒟(X)=D($O_X$).

[F4] [[thm-author-c5bc2838d897-kflat-addendum-verdier-criterion]] records the exact h/ordinary-nerve adjunction of HTT Proposition 1.2.3.1. Applying that adjunction to the localization universal property identifies h(C[W⁻¹]) with the ordinary localization (hC)[(hW)⁻¹].

## Proof
1.1 The subcategory H is full because between K-flat complexes it keeps all chain maps modulo all chain homotopies. K-flatness is invariant under chain homotopy equivalence: tensoring preserves homotopies, hence preserves contractibility and the acyclicity test defining K-flatness. Zero and shifts are K-flat, and the cone of a map between K-flat complexes is K-flat by [F2]. Distinguished triangles inherited from K therefore make H a full pretriangulated subcategory. By [F1], S is saturated and compatible with the triangulated structure, and S⁻¹$K=D$($O_X$). [F1, F2, given]

2.1 Every M∈K receives a quasi-isomorphism R→M with R K-flat by [F2]. This verifies the replacement hypothesis of Stacks Lemma 13.5.8 for every ambient object, without boundedness or global scheme hypotheses. Together with step 1.1 all its hypotheses hold. Thus $S_H$ is a saturated compatible multiplicative system and ($S_H$)⁻¹H→S⁻¹K is an exact equivalence by [F1]. The following two steps make the full-faithfulness content explicit. [F1, F2, step 1.1]

2.2 For fullness, let P,Q∈H and represent a derived morphism by the right roof $P\xleftarrow{s}M\xrightarrow{a}Q$ in K, with s∈S, using [F1]. Choose r:R→M as in [F2]. Then $P\xleftarrow{sr}R\xrightarrow{ar}Q$ is a roof in H with denominator sr∈$S_H$ and represents the same ambient derived morphism. Thus the map on each localized Hom set is surjective. Essential surjectivity on objects follows from the same replacement R→M. [F1, F2, step 1.1]

2.3 For faithfulness, let roofs $P\xleftarrow{s_i}R_i\xrightarrow{a_i}Q$ in H, for $i=1,2$, have equal images in S⁻¹K. The right-calculus equivalence relation in [F1] provides a common refining roof $P\xleftarrow{t}M\xrightarrow{b}Q$ in K and maps $u_i$:M→$R_i$ in K with $s_i$ $u_i$=t∈S and $a_i$ $u_i$=b. Choose a K-flat quasi-isomorphism r:R→M. Then $u_i$ r:R→$R_i$ are morphisms of the full subcategory H, the common denominator tr belongs to $S_H$, and $s_i$ $u_i$ r=tr and $a_i$ $u_i$ r=br as equalities in H. They are equalities of homotopy classes; any witnessing chain homotopies are the same homotopies in the full complex subcategory, so no lifting of homotopies is needed. Hence $P\xleftarrow{tr}R\xrightarrow{br}Q$ is a common refining roof in H. The two original roofs are equal in ($S_H$)⁻¹H by the same [F1] equivalence relation. Thus the map on Hom sets is injective. [F1, F2, step 1.1]

3.1 Let $C_X$=F(X)[$W_X$⁻¹] denote the common model's fiber. K-flat complexes are closed under the finite chain interval because it is built from finite sums, shifts and cones. By [F3], first localizing F(X) at chain homotopy equivalences gives its stable dg nerve; localizing further at quasi-isomorphisms is the stable Verdier localization by acyclic objects. Thus $C_X$ is stable. Actual inclusion into all complexes induces $I_X$:$C_X$→𝒟(X), and $I_X$ is exact: zero and the cofiber cone diagrams are preserved by inclusion and the exact localizations. By [F4], the homotopy category of this localization is precisely ($S_H$)⁻¹H, so hI_X is the functor proved fully faithful and essentially surjective in steps 2.1 through 2.3. [F3, F4, step 1.1, step 2.1, step 2.2, step 2.3]

4.1 For P,Q∈$C_X$ and m≥0, the homotopy group at zero of its stable mapping space is Hom_{hC_X}(P[m],Q), and similarly in 𝒟(X). Exactness of $I_X$ identifies the shift comparison, so hI_X being fully faithful identifies these homotopy groups and the sets of components. Stable mapping spaces are grouplike; translation by any component reduces its basepoint to zero. Hence every Map(P,Q)→Map($I_X P$,$I_X Q$) is an equivalence of spaces. Essential surjectivity follows from hI_X, so $I_X$ is an exact equivalence of the actual stable enhancements. This proves exactly the missing fiber comparison for the unchanged coherent-family construction. [F3, step 3.1] ∎
