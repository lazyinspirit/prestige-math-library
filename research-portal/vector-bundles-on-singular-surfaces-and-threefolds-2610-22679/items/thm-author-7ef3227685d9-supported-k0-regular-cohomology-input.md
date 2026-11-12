---
id: thm-author-7ef3227685d9-supported-k0-regular-cohomology-input
kind: theorem
title: External regular perfection and the standard derived t structure
status: published
domain: mathematics
deps:
  - def-scheme-perfect-complexes
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-regular-local-ring-geometric-point
  - math:def-coherent-module-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-grothendieck-universe-closure-convention
  - math:def-canonical-t-structure-on-a-derived-category
  - math:def-canonical-truncation-of-a-complex
  - math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology
  - math:def-abelian-category
  - math:def-kernel-cokernel-image-sheaves
dependency_roles:
  def-scheme-perfect-complexes: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-regular-local-ring-geometric-point: mathematical-premise
  math:def-coherent-module-scheme: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-canonical-t-structure-on-a-derived-category: mathematical-premise
  math:def-canonical-truncation-of-a-complex: mathematical-premise
  math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology: mathematical-premise
  math:def-abelian-category: mathematical-premise
  math:def-kernel-cokernel-image-sheaves: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: The Stacks Project, Derived Categories of Schemes
      url: https://stacks.math.columbia.edu/tag/08E0
      locator: §36.11 introduction; Lemma 36.11.6(1); Lemma 36.11.8 and its proof
      statement: On a regular scheme every object with bounded coherent cohomology is
        perfect. On a Noetherian regular scheme every perfect object has bounded
        coherent cohomology. Coherent sheaves form an abelian subcategory on a
        locally Noetherian scheme.
      hypotheses: The forward regularity statement is local; the converse assumes
        quasi-compactness/Noetherianity. Here U is regular Noetherian
        finite-dimensional, so both directions apply. Perfection is local
        bounded finite locally free representation, not a global vector-bundle
        resolution.
      reading_limits: For this repair, read the section introduction and the complete
        statements and proofs of Lemmas 36.11.6 and 36.11.8 on the full-text
        08E0 page. Only part (1) of 36.11.6 is used. The affine perfection
        results cited by 36.11.8 remain imported, not reconstructed. No global
        resolution or enhancement comparison with the derived category of
        coherent sheaves is used.
    - title: Jacob Lurie, Higher Algebra
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definitions 1.2.1.1 and 1.2.1.4, Proposition 1.2.1.5, Notation 1.2.1.7
        and Remark 1.2.1.8 (printed pp. 37–38); Definition 1.3.5.16 and
        Proposition 1.3.5.18 (p. 128); Remark 1.3.5.19 and Proposition
        1.3.5.21(2) (p. 129)
      statement: The derived infinity-category of a Grothendieck abelian category has
        the standard homology t-structure, with the original abelian category as
        heart and the usual derived truncations. A t-structure on a stable
        infinity-category is one on its homotopy category; it has adjoint
        truncation infinity-functors and truncation cofiber sequences.
      hypotheses: The derived t-structure requires a Grothendieck abelian category;
        the derived-enhancement supplier establishes this for all Zariski
        O_U-module sheaves. The general enhanced truncation assertion requires a
        stable infinity-category with a t-structure. Reverse homological
        indexing by H_n=H^{-n}, using the actual infinity-localization specified
        by that supplier and its Choice and universe assumptions.
      reading_limits: For this repair, inspected the listed definitions, statements
        and the proofs of Propositions 1.2.1.5, 1.3.5.18 and 1.3.5.21, and the
        arguments in Remarks 1.2.1.8 and 1.3.5.19. The unbounded localization
        and its Grothendieck hypothesis are taken from the declared
        derived-enhancement supplier; its foundational model constructions are
        not reconstructed here. Page numbers are printed pages.
dependency_level: 7
local_argument_provenance: ai-altered
---

## Statement
For the enhanced perfect-category assertion, assume the Axiom of Choice and fix suitable universes. Let $U$ be a regular Noetherian finite-dimensional scheme. Inside the specified sheaf-derived infinity-category, the full subcategory of perfect objects is precisely the full subcategory of objects with bounded coherent cohomology. The standard cohomological truncation functors $\tau_{\leq n},\tau_{\geq n}$ and their truncation cofiber sequences are those of the ambient derived t-structure, whose heart is ordinary sheaves of modules.

For a locally Noetherian scheme, coherent sheaves form an abelian full subcategory, with kernels, images and cokernels computed as module sheaves. A complex having coherent cohomology and only finitely many nonzero cohomology sheaves remains so under standard truncation.

Here a **regular scheme** means a locally Noetherian scheme every point of which is regular, that is, every local ring is regular local. Finite-dimensional refers to the chain dimension of the underlying space, with the empty-space convention. Bounded coherent cohomology means that every $H^i$ is coherent and $H^i=0$ outside some finite interval of integers, depending on the object.

## Source contract
[A1] The stated [[math:def-axiom-of-choice]] and universe bounds discharge the selected enhancement premises of [[def-scheme-perfect-complexes]] and the derived-enhancement input in [F2]. They apply to the enhanced perfect-category assertion. The coherent-sheaf assertion in the second paragraph is the ordinary local statement of [F1], and its truncation-of-cohomology assertion uses [F4]; neither invokes that enhanced realization.

**Given:** For the enhanced assertion, the Axiom of Choice, suitable universes, and the specified infinity-localization of Zariski module cochain complexes on $U$, and its underlying ordinary derived category.

**Goal:** Import local regular perfection and standard truncation, without asserting global vector-bundle resolutions.

[F1] Stacks Lemmas 36.11.6(1) and 36.11.8 establish exactly the equality of object conditions in the Statement; the introduction to §36.11 gives the coherent abelian subcategory. Reference 0 is the imported source.

[F2] Higher Algebra Proposition 1.3.5.21(2) with Definition 1.3.5.16 and Remark 1.3.5.19 supplies the ambient derived t-structure and its heart, with cochain index reversal. Definitions 1.2.1.1 and 1.2.1.4, Proposition 1.2.1.5, Notation 1.2.1.7 and Remark 1.2.1.8 supply its enhanced interpretation, truncation functors and truncation cofiber sequences. [[thm-author-4f716d60801a-derived-enhancement-input]] specifies this actual localization and establishes that its category of all module sheaves is Grothendieck abelian. Reference 1 is the imported source.

[F3] The formulation uses [[math:def-locally-noetherian-and-noetherian-scheme]], [[math:def-regular-local-ring-geometric-point]], [[math:def-coherent-module-scheme]] and [[math:def-dimension-noetherian-topological-space]]. A regular scheme is defined in the Statement using the regular-point supplier, without adding smoothness over a field. The suitable universes are the ones assumed by the enhanced suppliers, with the closure convention of [[math:def-grothendieck-universe-closure-convention]]; their existence is a standing size assumption, not a consequence of Choice.

[F4] [[math:def-canonical-t-structure-on-a-derived-category]] fixes the cohomological t-structure and heart terminology. [[math:def-canonical-truncation-of-a-complex]] fixes the kernel/cokernel truncations, and [[math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]] gives their cohomology identities and descent to the ordinary derived category: retained cohomology sheaves are unchanged and deleted ones are zero. These identities supply the truncation assertion in the second paragraph of the Statement; [F2] supplies the actual enhanced functors and cofiber sequences.

[F5] [[math:def-abelian-category]] specifies the abelian-category condition, and [[math:def-kernel-cokernel-image-sheaves]] specifies kernels, cokernels and images in module sheaves. Reference 0, via the coherent abelian subcategory in the introduction to Stacks §36.11, supplies closure under these ambient operations on a locally Noetherian scheme.

## External input
Import [F1]–[F2] under their exact hypotheses and reading limits. This is an equality of full subcategories defined by objects in the already specified enhancement; it is not an inference of an enhanced equivalence from an abstract triangulated equivalence. The regular-perfect result is local on affine neighbourhoods. Neither a global bounded locally free resolution nor an equivalence with $D^b(\mathrm{Coh}_T)$ is needed or asserted.
