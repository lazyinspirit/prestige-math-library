---
id: thm-author-7ef3227685d9-supported-k0-regular-cohomology-input
kind: theorem
title: External regular perfection and the standard derived t structure
status: draft
domain: mathematics
deps:
  - def-scheme-perfect-complexes
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
dependency_roles:
  def-scheme-perfect-complexes: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
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
      reading_limits: Read the full introduction and Lemmas 36.11.6(1) and 36.11.8
        with their proofs on the full-text 08E0 page. Affine
        regular-ring/perfect prerequisites cited by the short proof remain
        imported; no global resolution theorem or D^b(Coh)-enhancement
        comparison is invoked.
    - title: Jacob Lurie, Higher Algebra
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.3.5.16 and Proposition 1.3.5.18 p. 128; Remark 1.3.5.19
        and Proposition 1.3.5.21(2) p. 129
      statement: The derived infinity-category of a Grothendieck abelian category has
        the standard homology t-structure; its heart is the original abelian
        category and its truncations are the usual derived truncations.
      hypotheses: Grothendieck abelian category, here Zariski sheaves of O_U-modules.
        Homological indexing in HA is reversed to cochain H^n. Use the same
        infinity-localization already supplied by the completed
        derived-enhancement interface.
      reading_limits: Read pp. 125–130, specifically the displayed t-structure
        definitions, Remark 1.3.5.19 and Proposition 1.3.5.21 with its proof.
        The underlying model/localization construction remains the existing
        completed supplier; only the t-structure and heart statements are
        imported here.
dependency_level: 5
local_argument_provenance: ai-altered
---

## Statement
For the enhanced perfect-category assertion, assume the Axiom of Choice and fix suitable universes. Let $U$ be a regular Noetherian finite-dimensional scheme. Inside the specified sheaf-derived infinity-category, the full subcategory of perfect objects is precisely the full subcategory of objects with bounded coherent cohomology. The standard cohomological truncation functors $\tau_{\leq n},\tau_{\geq n}$ and their truncation cofiber sequences are those of the ambient derived t-structure, whose heart is ordinary sheaves of modules.

For a locally Noetherian scheme, coherent sheaves form an abelian full subcategory, with kernels, images and cokernels computed as module sheaves. A complex having coherent cohomology and only finitely many nonzero cohomology sheaves remains so under standard truncation.

## Source contract
[A1] The stated [[math:def-axiom-of-choice]] and universe bounds discharge the selected enhancement premises of [[def-scheme-perfect-complexes]] and the derived-enhancement input in [F2]. They apply to the enhanced perfect-category assertion. The coherent-sheaf and truncation-of-cohomology assertions in the second paragraph are the ordinary local statements of [F1] and do not invoke that enhanced realization.

**Given:** For the enhanced assertion, the Axiom of Choice, suitable universes, and the specified infinity-localization of Zariski module cochain complexes on $U$, and its underlying ordinary derived category.

**Goal:** Import local regular perfection and standard truncation, without asserting global vector-bundle resolutions.

[F1] Stacks Lemmas 36.11.6(1) and 36.11.8 establish exactly the equality of object conditions in the Statement; the introduction to §36.11 gives the coherent abelian subcategory.

[F2] Higher Algebra Proposition 1.3.5.21(2) with Definition 1.3.5.16 and Remark 1.3.5.19 supplies the ambient derived t-structure, with cochain index reversal. [[thm-author-4f716d60801a-derived-enhancement-input]] has already specified this actual localization.

## External input
Import [F1]–[F2] under their exact hypotheses and reading limits. This is an equality of full subcategories defined by objects in the already specified enhancement; it is not an inference of an enhanced equivalence from an abstract triangulated equivalence. The regular-perfect result is local on affine neighbourhoods. Neither a global bounded locally free resolution nor an equivalence with $D^b(\mathrm{Coh}_T)$ is needed or asserted.
