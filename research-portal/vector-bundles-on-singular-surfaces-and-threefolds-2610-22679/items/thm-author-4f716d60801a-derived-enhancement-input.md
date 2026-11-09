---
id: thm-author-4f716d60801a-derived-enhancement-input
kind: theorem
title: External input on derived enhancements
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: The Stacks Project, Injectives, Remark 19.13.3
      url: https://stacks.math.columbia.edu/tag/079Q
      locator: Remark 19.13.3
      statement: Sheaves of modules on a ringed site and modules over a ring form
        Grothendieck abelian categories; derived Hom sets can be calculated
        using K-injective resolutions.
      hypotheses: A ringed site or a ring, with the relevant categories taken in a
        fixed universe.
      reading_limits: Read the displayed remark; its referenced K-injective existence
        theorem was not reconstructed.
    - title: Jacob Lurie, Higher Algebra
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Propositions 1.3.5.13–15 and 1.3.5.21; Lemma 1.2.4.6
      statement: For a Grothendieck abelian category, the derived infinity-category is
        the localization of complexes at quasi-isomorphisms, is stable and
        presentable, and has the classical derived category as homotopy
        category. A stable infinity-category is idempotent complete exactly when
        its homotopy category is.
      hypotheses: A Grothendieck abelian category in a fixed universe.
      reading_limits: Inspected the cited localization and presentability passages and
        the statement of Lemma 1.2.4.6; the model-category construction and its
        prerequisites were not reconstructed.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Corollary 4.4.5.15, Proposition 4.4.5.17 and Remark 4.4.5.18
      statement: A coherent idempotent splits when its associated idempotent diagram
        has a colimit; the associated retract can be formed using the sequential
        diagram of repeated endomorphisms.
      hypotheses: An infinity-category with the indicated colimit, in particular one
        with all small colimits.
      reading_limits: Inspected the cited statements and displayed argument around
        Proposition 4.4.5.17; the surrounding theory is imported.
dependency_level: 0
---

## Statement
Assume the Axiom of Choice and fix suitable universes. For a scheme $X$, let $\mathcal D(X)$ be the infinity-localization of cochain complexes of Zariski $\mathcal O_X$-modules at quasi-isomorphisms. For a ring $A$, define $\mathcal D(A)$ similarly using $A$-modules. These are stable presentable infinity-categories, with ordinary unbounded derived categories as their homotopy categories. Degreewise exact additive functors induce exact functors on these localizations. Mapping cones represent cofibers. Both the enhanced categories and their homotopy categories are idempotent complete.

## Source contract
**Given:** A scheme or ring, the Axiom of Choice, and a universe containing the relevant modules.

**Goal:** Record the ambient derived enhancements and their relation to ordinary derived categories.

[F1] The cited Stacks remark supplies the Grothendieck property; the cited Higher Algebra results supply the derived localization and presentability.

[F2] The cited Higher Topos Theory and Higher Algebra results supply enhanced and homotopy-category idempotent completeness.

## External input
Import [F1] and [F2] with the stated reading limits. A quasi-isomorphism induces isomorphisms on all cohomology objects. Stable means having a zero object and finite limits and colimits, with pushout squares also pullback squares. Exact functors preserve these finite operations. No identification of $D(\mathrm{QCoh}(X))$ with the quasi-coherent-cohomology subcategory is asserted for arbitrary $X$.
