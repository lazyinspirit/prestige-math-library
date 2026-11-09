---
title: Exact arbitrary-field open-natural classical cycle interface
status: published
research_item: thm-author-149a02132c3b-open-natural-classical-input
dependency_level: 10
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and fixed site and universe bounds for the derived-category constructions. Let $r\in\mathbb Z_{\geq0}$, let $k$ be perfect, and let $F$ be its prime subfield, either $\mathbb Q$ or $\mathbb F_p$. Define $C_{r,F}$ to be the cdh sheafification of the left Kan extension of classical weight-$r$ motivic cohomology from smooth $F$-schemes to qcqs $F$-schemes. Restrict this functor to smooth separated finite-type $k$-schemes and open immersions. There is an equivalence of these diagrams with $z^r(-,\bullet)[-2r]$, where homological degree $n$ is cochain degree $-n$. Use the following actual route: the supplied canonical field-model equivalence identifies $C_{r,F}$ with the restriction of the absolute BEM cdh functor; its canonical comparison to the represented A¹ theory is an equivalence on these equicharacteristic schemes. Over the fixed $k$, smooth slice pullback identifies that represented functor with classical motivic cohomology. Finally use the MVW Zariski-sheaf zigzag and Bloch descent. Every arrow or inverse equivalence is taken as a map of diagrams. Thus for an open immersion its cycle arrow is the actual open restriction.

## External input
Import this restricted open-natural classical interface via the explicitly recorded zigzag. The base field k is fixed and perfect, with no finite-generation requirement over F. No separate construction of arbitrary nonflat cycle pullbacks is required. The completed field-model supplier states the canonical identification for any field B; its older application only used $B=Q$, whereas here $B=F$ can also be $F_p$. The new full source record explicitly retains that characteristic scope.

The global comparison is taken from the construction preceding BEM (6.4), supplemented by Levine's primary complex models, rather than inferred from (6.4) alone. Write $\mathrm{Sm}//k$ for Levine's category with all smooth separated finite-type $k$-schemes and smooth morphisms. His §6.5 supplies an isomorphism of derived sheaf objects on that whole category; BEM's proof of Theorem6.3 recalls its agreement in the homotopy category of presheaves. This is stronger than a natural isomorphism of cohomology groups, or a diagram in the homotopy category of the values. Only its restriction to open immersions and one fixed weight is used. The spectrum realization in Example8.2.2(3), together with the established classical slice identification recalled in BEM, supplies the represented-to-classical bridge. No compatibility between different weights or multiplicative comparison with cycles is claimed.

## Facts & Assumptions

**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[A1] The Axiom of Choice is the existing ambient assumption for the imported derived-category models and their fixed small sites in steps 1.1–3.1. It is not an additional field or finite-generation hypothesis. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The canonical field-model equivalence supplied by [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model), BEM Corollary1.11, and its represented-presheaf identification in Remark4.21.

[F2] The global classical comparison constructions in BEM's proof of Theorem6.3 before (6.4), Levine §6.5 and Example8.2.2(3), and the established slice equivalences recalled in BEM Remark4.12 and that proof. Use their sheaf/complex models, not only their cohomology-group consequences. Levine §§1.2–1.4 distinguish the homotopy category of presheaves from presheaves of homotopy-category values.

[F3] MVW Theorem16.7, Lemma19.4, Theorem19.8 and Proposition19.12 supply the classical-to-cycle sheaf zigzag, cycle homotopy invariance and descent. Definition19.13 and Example19.14 identify its flat maps, including open restriction.

## Proof

1.1 Apply the canonical field-model equivalence to $B=F$, and then restrict to $k$-schemes. Compose it with the canonical cdh-to-A¹ comparison, an equivalence here by equicharacteristic. Remark4.21 identifies the resulting restriction to smooth $k$-schemes with the presheaf represented by $s^r\mathrm{KGL}_k[-2r]$. All of these operations are on functors. This step uses neither finite generation of $k/F$ nor a choice of equivalence at each individual scheme. [A1, F1]

2.1 Use the established equivalences $s^0\mathrm{KGL}_k\simeq s^0(1_k)\simeq H\mathbb Z_k^{\mathrm{cl}}$ recalled in [F2], where the last object is the classical motivic spectrum with Levine's complex models. The Bott/slice identification $s^r\mathrm{KGL}_k\simeq\mathbb T_k^{\otimes r}\otimes s^0\mathrm{KGL}_k$ and the represented-presheaf functor produce the classical weight-$r$ functor on the entire smooth $k$-category. Use the complex realization of [F2]: Levine §6.5 supplies the comparison on the whole category $\mathrm{Sm}//k$ as a derived-sheaf isomorphism, and Example8.2.2(3) identifies the assembled spectrum with classical $H\mathbb Z$. Thus this is a comparison of the sheaf/presheaf objects before evaluation. The fixed-site statement (6.4) is a consequence of this construction, not a substitute for its global scope. The finite-field qualification causes no loss: the K-theory A3 hypothesis and the P¹-stable finite-field case are explicitly covered by the source contracts. [A1, F2, step 1.1]

3.1 The derived-sheaf and homotopy-presheaf comparisons just invoked can be represented by zigzags of maps between the corresponding models. Their isomorphisms become equivalences in the localized category of diagrams; they are not merely commuting squares after independently passing each value to its homotopy category. Restriction to the category of open immersions preserves those equivalences. Derived sections of the sheaf models and the source descent identifications supply the presheaf values. This is the coherence needed here: choose the global comparison once and then restrict it, rather than choosing unrelated comparisons on different small sites. [F2, F3, step 2.1]

4.1 Apply the actual MVW sheaf zigzag $\mathbb Z(r)\simeq\mathbb Z_{SF}(r)\to z^r(-\times\mathbb A^r,\bullet)[-2r]\leftarrow z^r(-,\bullet)[-2r]$. Its middle arrow is the cycle inclusion of Lemma19.4, a Zariski quasi-isomorphism by Theorem19.8. Its last arrow is projection flat pullback, a quasi-isomorphism by cycle homotopy invariance. Proposition19.12 identifies derived sections with cycle values. These are maps on the category of open immersions: the inclusion and projection pullback commute with restriction, and Example19.14 identifies the induced flat map with actual cycle pullback. They therefore give exactly the desired cycle arrows. [F3, step 3.1]

5.1 Compose the comparisons in steps 1.1–4.1 and invert only equivalences of the diagrams. An inverse of an equivalence in that functor category is again a map of diagrams, so the composite gives the asserted equivalence on all smooth separated finite-type $k$-schemes and open immersions. No uniqueness, canonicity across weights, arbitrary nonflat cycle pullback or multiplicative compatibility is inferred. In particular every open arrow is the actual cycle restriction, with the declared homological-to-cochain indexing. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Local application provenance
The numbered argument is a locally assembled, AI-altered application of the imported comparison constructions. The literature-derived proof provenance records those external inputs; it does not attribute this five-step assembly verbatim to a published source. The existing source-reading records are retained from earlier authoring and adjudication. This consumer maintenance inspected the current item and its supplier contracts, without rereading the primary papers or independently judging their deep inputs.
