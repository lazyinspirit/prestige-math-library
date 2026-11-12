---
title: Smooth adjunction identifies the absolute and relative augmented slice towers
status: published
research_item: lem-adjudicate-3b3fcff266fc-smooth-relative-slice-transport
dependency_level: 16
sources:
  references:
    - title: Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes,
        served v1 HTML
      url: https://arxiv.org/html/2508.09915v1
      locator: §3.2.1 (3.29) and its following smooth-adjunction paragraph; §3.3
        (3.36)–(3.43), especially Remark 3.41; Definition 4.2, Remark 4.3 and
        Remark 4.21.
      statement: Smooth pullback commutes with effective covers via the canonical
        augmented filtered map (3.42), and its cofiber map is (3.43). KGL is
        absolute. Smooth adjunction identifies relative evaluation with absolute
        evaluation; Remark 4.21 uses these same slice maps.
      hypotheses: Qcqs schemes and smooth structure maps; arbitrary field base. Apply
        only to smooth finite-type schemes over the fixed perfect field.
      reading_limits: Read these served HTML passages, including the smooth-adjunction
        argument. The v1 URL labels August 2025 while its title dates August
        2026; no immutable 2025 snapshot is claimed. Motivic foundations and KGL
        representability remain imported.
---

## Prerequisites

- [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)
- [lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers](item-lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers)
- [lem-author-16f30f6b95cb-augmented-filtered-support-transport](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [` Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes, served v1 HTML · §3.2.1 (3.29) and its following smooth-adjunction paragraph; §3.3 (3.36)–(3.43), especially Remark 3.41; Definition 4.2, Remark 4.3 and Remark 4.21. `](https://arxiv.org/html/2508.09915v1)


## Statement
Assume AC and fixed compatible nested Grothendieck universes containing $\omega$, the fields, schemes and diagrams below, with the site-size bounds of the supplied EM and perfect-$K$ constructions. Universe existence is a separate hypothesis. Let $k$ be a perfect field, let $W\hookrightarrow Y$ be an open immersion, and suppose that $Y$ and $W$ are smooth finite-type $k$-schemes. Put $T=|Y|\setminus|W|$. For any spectrum-valued presheaf $A$, write $A_T(Y)=\operatorname{fib}(A(Y)\to A(W))$.

Use the imported stable infinity-category $\mathrm{SH}(k)$ of motivic spectra, its unit $1_k$, and the suspension motive $M_k(Y)$ of $Y$. The functor $f_q$ is the right-adjoint $q$-effective cover, including its counit to the original spectrum; $s_q=\operatorname{cofib}(f_{q+1}\to f_q)$. Define the relative tower, with its actual augmentation, by
$$R_k^q(Y)=\operatorname{map}_{\mathrm{SH}(k)}(M_k(Y),f_q\mathrm{KGL}_k)\longrightarrow\operatorname{map}_{\mathrm{SH}(k)}(M_k(Y),\mathrm{KGL}_k)=KH(Y),\qquad q\geq0.$$
Here $\operatorname{map}$ denotes the mapping spectrum and $KH$ is homotopy invariant $K$-theory. The relative tower means this fixed-base construction, whereas the absolute tower evaluates the slice filtration of $\mathrm{KGL}_Y$ in $\mathrm{SH}(Y)$.

The actual EM-to-cdh augmented comparison and the canonical smooth-pullback comparison give an open-natural augmented filtered equivalence
$$F^\bullet_{\mathrm{mot}}K(Y)\simeq R_k^\bullet(Y)$$
over the canonical $K(Y)\to KH(Y)$. Consequently the supported towers on $(Y,W)$ are equivalent, commuting with their augmentations and all stage-to-layer maps. On graded pieces use the fixed ordinary cycle comparison of the supplied open-natural layer interface. The equivalence just displayed induces its represented relative-slice leg, so the supported graded comparison is that same comparison, with its original positive cycle convention. In particular, whenever the supported stage-$q$ augmentations are equivalences, their inverse-augmentation leading maps commute under this comparison. No smoothness or finite-type hypothesis on $k$ over its prime subfield is imposed.

## Facts & Assumptions
**Given:** AC, the stated universe and site bounds, the perfect field $k$, and the smooth finite-type open pair $(Y,W)$.

**Goal:** Supply the augmented comparison needed before a classical relative-slice projection can normalize the actual EM supported projection.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specify the inherited foundational premises. All functors, their mapping spectra and the restriction diagram use compatible universe enlargements; no pointwise choice of inverses is made.

[F1] [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison) supplies the actual augmented EM-to-cdh equivalence on these regular Noetherian schemes and identifies the latter with the absolute evaluated KGL slice tower. Its geometric argument checks the qcqs domain for smooth finite-type schemes over any field. Its EM v1 Remark 3.6 source-version qualification remains binding. In particular, its prime-field classical-to-EM assertion alone is not used as a relative-$k$ comparison.

[F2] Reference 0 imports $\mathrm{SH}$, effective covers, their canonical filtered base-change map, smooth adjunction and the absolute KGL spectrum. For $g:Y\to\operatorname{Spec}k$, write $g_\sharp\dashv g^*$ with $g_\sharp1_Y=M_k(Y)$. These are coherent adjunctions; mapping spectra and counits are used before taking homotopy groups. The pullback comparison $g^*\mathrm{KGL}_k\simeq\mathrm{KGL}_Y$ is the canonical one representing $KH$.

[F3] [lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers](item-lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers) fixes the standard cycle comparison on the whole open-restriction diagram. In its separated comparison, the represented-spectrum identification is BEM Remark 4.21, which explicitly uses Remark 3.41's smooth base-change maps. We use this very identification on the graded cofibers below and the same ordinary cycle leg; neither an independent cycle equivalence nor a sign automorphism is substituted. The nonseparated extension agrees with that comparison on separated opens.

[F4] [lem-author-16f30f6b95cb-augmented-filtered-support-transport](item-lem-author-16f30f6b95cb-augmented-filtered-support-transport) transports natural augmented filtered equivalences to support fibers and their graded projections, and to inverse-augmentation maps whenever the corresponding augmentation is invertible. [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) and [def-stable-spectra-interface](item-def-stable-spectra-interface) specify the coherent tower, cofiber, fiber and homotopy-group conventions. [def-motivic-filtration](item-def-motivic-filtration) fixes the actual EM tower; [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) fixes the current perfect-$K$ model in [F1].

[F5] [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) specify the field and structure morphisms. Smoothness and finite type refer to those morphisms as in [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) and [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). The arrow $W\hookrightarrow Y$ is the open-subscheme inclusion of [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes). The closed support here is the set-theoretic complement of this specified open; no additional scheme structure is used.

## External input
Reference 0 supplies the motivic categories, smooth adjunction, effective covers and canonical smooth base-change equivalence used in [F2]. These substantial constructions are imported. The current EM-to-absolute-tower comparison is used through [F1], with its existing source qualification. The fixed classical cycle realization and its normalization are used through [F3]. The following proof composes these specified maps and checks their application to the open pair; the whole result is not marked external_input.

## Proof
1.1 For $g:Y\to\operatorname{Spec}k$, [F2] gives the canonical equivalence $a_g^q:g^*f_q\mathrm{KGL}_k\to f_q\mathrm{KGL}_Y$. It is the map obtained by factoring the pulled-back counit through the $q$-effective cover, as in (3.42); it is an equivalence because $g$ is smooth. Apply smooth adjunction and then this map to form $\theta_Y^q:R_k^q(Y)\simeq\operatorname{map}_{\mathrm{SH}(Y)}(1_Y,g^*f_q\mathrm{KGL}_k)\xrightarrow{\operatorname{map}(1_Y,a_g^q)}\operatorname{map}_{\mathrm{SH}(Y)}(1_Y,f_q\mathrm{KGL}_Y)$. This is an equivalence of augmented towers, not only of layers: $a_g^q$ was obtained over $g^*\mathrm{KGL}_k\simeq\mathrm{KGL}_Y$, and the compatible right adjoints give all transitions. For an open immersion $h:W\hookrightarrow Y$, the composites $h^*a_g^q$ followed by $a_h^q$ and $a_{gh}^q$ are the same canonical comparison: both factor the same pulled-back counit through its effective cover. Its universal mapping-space property supplies their compatibility and higher coherences. Adjunction respects this composition, so $\theta$ is natural for the actual restriction arrow. The same argument applies to $W$, which is in the stipulated domain. Its cofiber transformation is precisely (3.43), since cofibers are functorial in this coherent filtered map. [A1, F2, F4, F5, given, construct]

2.1 Apply [F1] simultaneously to $Y$ and $W$, whose regular Noetherian qcqs hypotheses it verifies from [F5]. Compose its EM-to-absolute-tower equivalence with the inverse of $\theta$ from step 1.1. These are equivalences of entire coherent diagrams, so this gives the asserted augmented relative-$k$ comparison over the original $K\to KH$ map. Its graded relative-slice identification is the smooth-adjunction and (3.43) identification just constructed, namely Remark 4.21's identification used in [F3]. Composing with [F3]'s already fixed ordinary cycle leg therefore retains that very layer comparison and its positive convention on separated opens. Taking the restriction fiber retains it on the pair. Now apply [F4] to obtain the supported stage, augmentation and projection squares. If the augmentations are equivalences, invert their induced isomorphisms in those same squares to obtain the inverse-augmentation identity. This proves the comparison needed for the relative classical projection without applying smooth base change to $\operatorname{Spec}k\to\operatorname{Spec}F$, where $F$ is the prime subfield; the only base-change maps used are the stipulated smooth maps over $k$ and their open restrictions. [A1, F1, F3, F4, F5, step 1.1] ∎

## Reading limits
The cited BEM passages were read in the primary served HTML. Its canonical smooth-base-change and adjunction interfaces, rather than a reconstruction of motivic homotopy theory, are the imported premises. The EM tower, open-natural cycle-layer and support-transport suppliers were inspected in their current mathematical bodies. EM v1's then-in-preparation qualification and the served BEM version/date discrepancy remain explicit. This local composition claims no independent review, publication or library audit.
