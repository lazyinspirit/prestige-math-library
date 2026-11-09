---
id: thm-author-e0b0bf18ed2b-stable-enhancement-input
kind: theorem
title: External stable enhancement and smash product of spectra
status: draft
domain: mathematics
deps: []
dependency_roles: {}
external_input: true
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Jacob Lurie, Higher Algebra
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definitions 1.4.2.8 and 1.4.3.1; Corollary 1.4.2.17; Notation 1.4.2.20;
        Proposition 1.4.2.24 and Remark 1.4.2.25; Proposition 1.4.3.6;
        Proposition 1.4.4.4; Proposition 1.1.3.4; Corollary 4.8.2.19
      statement: The infinity-category Sp of reduced excisive functors from finite
        pointed spaces to spaces is stable and presentable, is equivalent to the
        homotopy limit of the loop tower of pointed spaces, and has a separately
        colimit-preserving symmetric monoidal smash product with sphere unit.
      hypotheses: Use small spaces and diagrams in a fixed universe and a larger
        universe for their infinity-categories. The tower result requires a
        pointed infinity-category with finite limits; the stabilization
        adjunction requires presentability. Pointed spaces satisfy these
        hypotheses.
      reading_limits: The current author inspected the statement of Proposition
        1.4.2.24 and the statement and context of Corollary 4.8.2.19. The
        supplied authoring assistance reports reading the listed foundational
        passages more broadly. Their underlying infinity-category and
        tensor-product foundations are imported, not locally reconstructed.
dependency_level: 0
---

## Statement
Let S be the infinity-category of spaces and S_*^fin the infinity-category of finite pointed spaces. Let Sp=Exc_*(S_*^fin,S), the infinity-category of functors that take the point to a contractible space and pushout squares to pullback squares. Sp is stable and presentable, and is equivalent to the homotopy limit of the tower of pointed spaces under the loop functor Ω. An object of that limit is a coherent tower $Y_n$≃Ω$Y_{n+1}$, and its nth space is Ω∞(Y[n]), where [1] is suspension. Sp has all small limits and colimits; a square is a pushout exactly when it is a pullback. Evaluation Ω∞ has a left adjoint Σ∞, and the sphere spectrum is 𝕊=Σ∞S⁰. Sp has a symmetric monoidal smash product ∧ with unit 𝕊, preserving small colimits separately in each variable.

## Source contract
**Given:** Spaces and diagrams small in a fixed universe, with a larger universe containing their infinity-categories.

**Goal:** Supply the stable enhancement, coherent Omega-tower description and smash product.

[F1] Lurie's results at the cited locators give the stated stabilization, tower equivalence, adjunction and monoidal structure under the stated hypotheses.

## External input
Import [F1]. An infinity-category retains mapping spaces and coherent higher compositions. A coherent diagram is a functor from an indexing infinity-category; its limits and colimits have universal properties expressed by equivalences of mapping spaces. Stability includes a zero object and identifies pullback squares with pushout squares. The associativity, symmetry and unit laws of smash include their higher coherences. These foundations are external inputs, not locally reconstructed proofs.
