---
id: thm-adjudicate-1ef158934564-ringed-derived-enhancement
kind: theorem
title: Derived enhancements of module sheaves on ringed spaces
status: published
domain: mathematics
external_input: true
deps:
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: The Stacks Project, Remark 19.13.3 (079Q)
      url: https://stacks.math.columbia.edu/tag/079Q
      locator: Remark 19.13.3, final paragraph
      statement: Module sheaves on a ringed site form a Grothendieck abelian category.
      hypotheses: A ringed site in fixed suitable universes.
      reading_limits: Read the complete displayed remark, accessed 2026-11-09; the
        cited K-injective existence theorem was not reconstructed.
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.3.5.8; Propositions 1.3.5.9, 1.3.5.13–15 and 1.3.5.21
      statement: For a Grothendieck abelian category, the unbounded derived
        infinity-category is stable and presentable and is obtained from
        complexes by inverting quasi-isomorphisms.
      hypotheses: A Grothendieck abelian category, with a larger universe for its
        derived category.
      reading_limits: Read these statements, the localization discussion preceding
        1.3.5.15, and the displayed proofs of 1.3.5.13–15 and 1.3.5.21;
        model-category foundations were not reconstructed.
dependency_level: 0
---

## Statement
Assume the Axiom of Choice and fix suitable universes. For any ringed space $(X,\mathcal O_X)$, the category $\mathrm{Mod}(\mathcal O_X)$ of all module sheaves is Grothendieck abelian. Its unbounded derived infinity-category $\mathcal D(X)$ is stable and presentable and is the infinity-localization of complexes at quasi-isomorphisms. Its homotopy category is the ordinary unbounded derived category.

## External input
Import the Grothendieck-category assertion from Stacks 079Q and the derived construction from Higher Algebra at the exact locators above. A ringed space is a ringed site via its category of opens, so the hypothesis applies without quasi-coherence or finiteness. Choice is retained for these resolution/model-category inputs. Their foundational constructions are imported, not reconstructed. The universal property of localization carries degreewise exact additive functors and their natural transformations to the derived localizations; zero objects and mapping cones give exactness. This last application uses the actual functors, rather than only functors on homotopy categories.
