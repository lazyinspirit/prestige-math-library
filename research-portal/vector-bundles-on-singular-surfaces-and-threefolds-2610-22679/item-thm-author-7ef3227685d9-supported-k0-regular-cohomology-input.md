---
title: External regular perfection and the standard derived t structure
status: published
research_item: thm-author-7ef3227685d9-supported-k0-regular-cohomology-input
dependency_level: 5
---

PDF p. 15: Supported degree-zero dévissage

## Prerequisites

- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
For the enhanced perfect-category assertion, assume the Axiom of Choice and fix suitable universes. Let $U$ be a regular Noetherian finite-dimensional scheme. Inside the specified sheaf-derived infinity-category, the full subcategory of perfect objects is precisely the full subcategory of objects with bounded coherent cohomology. The standard cohomological truncation functors $\tau_{\leq n},\tau_{\geq n}$ and their truncation cofiber sequences are those of the ambient derived t-structure, whose heart is ordinary sheaves of modules.

For a locally Noetherian scheme, coherent sheaves form an abelian full subcategory, with kernels, images and cokernels computed as module sheaves. A complex having coherent cohomology and only finitely many nonzero cohomology sheaves remains so under standard truncation.

## Source contract
[A1] The stated [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and universe bounds discharge the selected enhancement premises of [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) and the derived-enhancement input in [F2]. They apply to the enhanced perfect-category assertion. The coherent-sheaf and truncation-of-cohomology assertions in the second paragraph are the ordinary local statements of [F1] and do not invoke that enhanced realization.

**Given:** For the enhanced assertion, the Axiom of Choice, suitable universes, and the specified infinity-localization of Zariski module cochain complexes on $U$, and its underlying ordinary derived category.

**Goal:** Import local regular perfection and standard truncation, without asserting global vector-bundle resolutions.

[F1] Stacks Lemmas 36.11.6(1) and 36.11.8 establish exactly the equality of object conditions in the Statement; the introduction to §36.11 gives the coherent abelian subcategory.

[F2] Higher Algebra Proposition 1.3.5.21(2) with Definition 1.3.5.16 and Remark 1.3.5.19 supplies the ambient derived t-structure, with cochain index reversal. [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) has already specified this actual localization.

## External input
Import [F1]–[F2] under their exact hypotheses and reading limits. This is an equality of full subcategories defined by objects in the already specified enhancement; it is not an inference of an enhanced equivalence from an abstract triangulated equivalence. The regular-perfect result is local on affine neighbourhoods. Neither a global bounded locally free resolution nor an equivalence with $D^b(\mathrm{Coh}_T)$ is needed or asserted.
