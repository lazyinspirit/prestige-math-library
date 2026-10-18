---
id: lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation
kind: lemma
title: "Framed oriented tangles have the ribbon generator-and-relation presentation"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-the-framed-oriented-tangle-category, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I Lemma 3.1.1 (generators), relations (3.2.a)--(3.2.h), and Lemma 3.3 (completeness), printed pp. 49--51; proof of Lemma 3.3 in §§4.1--4.9, printed pp. 57--70"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10 Remark 8.10.3 (framed tangles as the free ribbon category), printed pp. 216--217"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Every morphism of the
framed oriented tangle category $\mathcal T$ of
[[def-the-framed-oriented-tangle-category]] is a finite composite of tensor
products of identities, crossings, cups, caps and full twists.

A complete presentation on this elementary family is Turaev's reduced
presentation (3.1.a), (3.2.a)--(3.2.h), **together with** the expressions
(2.5.d)--(2.5.e) and (3.1.b)--(3.1.c) defining its additional orientation
variants. Thus two elementary words represent the same framed tangle exactly
when these relations and the strict monoidal axioms relate them.

Here the source's $X^\delta$ denotes our $X^\delta_{+,+}$, its
$Z^\delta$ denotes our $X^{-\delta}_{+,-}$, and its $Y^\delta$ denotes our
$X^{-\delta}_{-,+}$; its $T^\delta$ denotes our $X^\delta_{-,-}$.
The source's positive cup and cap are $\cup_+$ and $\cap_+$, and its
$\varphi,\varphi'$ are $\varphi_+^+,\varphi_+^-$.
The reduced generators are therefore $X^\delta_{+,+}$,
$X^{-\delta}_{+,-}$, $\varphi_+^{\pm1}$, $\cup_+$ and $\cap_+$.
The other cups, caps and crossings are the expressions above; a twist on a
negative strand is obtained by bending the corresponding twisted positive
strand with a cup and cap. Turaev's convention that a positive strand points
downwards is transported to ours by reversing all strand orientations; this
preserves composition, tensor product and framed isotopy. Crossing
superscripts in his mixed-orientation pictures are oriented signs, explaining
the minus signs in the dictionary.

The reduced relations are Yang--Baxter, the two zig-zags, inverse crossings
and twists, curl slide, the bent-crossing inverse relation (3.2.g), and the
twist-square relation (3.2.h). For example, the latter has the well-typed form

$$(\varphi_+^+)^2=(\cap_+\otimes1_+)(1_-\otimes X^+_{+,+})(X^-_{+,-}\otimes1_+)(\cup_+\otimes1_+).$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the category $\mathcal T$ with its fixed framing and crossing conventions.

[L1] The objects, elementary tangles, composition, tensor product and boundary-relative framed isotopies are those of [[def-the-framed-oriented-tangle-category]].

[F1] Turaev, Chapter I, Lemma 3.1.1 and formulas (2.5.d)--(2.5.e), (3.1.b)--(3.1.c), printed pp. 40, 49--50, express every elementary orientation variant in the reduced generators (3.1.a). Lemma 3.3, printed p. 51, proves completeness of (3.2.a)--(3.2.h) for that reduced family. Its proof in §§4.1--4.8, printed pp. 57--69, treats diagrams in the strip **relative to its boundary**: it checks the oriented second and third Reidemeister moves, changes of height position, and insertion/deletion of a positive-negative curl pair. It does not allow deletion of a single curl.

[F2] Turaev, Chapter I §2.1, printed pp. 34--35, identifies ribbon bands and annuli with homotopy classes of normal framings; Figure 2.3 turns a signed full twist into the corresponding blackboard curl.

## Proof

**Proof technique:** direct.

1.1 **Match the models.** Thicken a framed core to a sufficiently narrow band, choosing the transverse band direction from its oriented tangent and normal framing. Conversely take the oriented core and surface normal of a band. Homotopies of the framing give isotopies of the narrow bands, relative to the collars; taking cores reverses this construction on isotopy classes. The compact tangle lies a positive distance from the side faces, so the thickness can be chosen uniformly small. This is the ribbon/framing correspondence of [F2], with fixed collars at open ends. Reverse all strand orientations to match the source's endpoint convention and use the displayed crossing dictionary. It identifies our model with the single-color, coupon-free case of [F1]. [L1, F1, F2, given, construct]

2.1 **Generate and remove redundant generators.** By [F1], a generic diagram has finitely many crossing and extremum levels. Cutting between them gives a word in elementary tangles; the source's formulas express its orientation variants in the reduced family. Conversely these formulas represent the indicated elementary tangles by boundary-relative band isotopies. Thus every elementary word can be replaced by a reduced word without changing its morphism. [F1, step 1.1, construct]

3.1 **Soundness and completeness.** The source checks each reduced relation by a band isotopy, and its complete boundary-relative proof in [F1] shows that equal reduced words are related by those relations and the strict monoidal axioms. Apply step 2.1 to any two equal elementary words, apply that completeness theorem to the resulting reduced words, and undo the replacements. This proves completeness for the enlarged family; soundness follows from the same isotopies. The assumed countable choice is available for the generic-position input. No inference from an unframed closed-link move theorem to a framed boundary-relative theorem is required. [F1, F2, step 1.1, step 2.1] ∎

