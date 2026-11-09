---
id: thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input
kind: theorem
title: External K-flat sheaf resolution and pullback input
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
    - title: The Stacks Project, Cohomology of Sheaves, Flat resolutions
      url: https://stacks.math.columbia.edu/tag/06Y7
      locator: §20.26, Definition 20.26.2; Lemmas 20.26.3–6, 20.26.8–13 and 20.26.17;
        PDF chapter cohomology, pp. 55–59
      statement: Every sheaf complex on a ringed space has a quasi-isomorphism from a
        K-flat complex. K-flatness is stalkwise, closed under shifts, cones and
        tensor products; tensoring with K-flat complexes preserves
        quasi-isomorphisms.
      hypotheses: Arbitrary ringed spaces; K-flat means tensor with every acyclic
        complex is acyclic. The tensor unit O_X[0] and bounded-above complexes
        of flat sheaves are K-flat. No field or noetherian assumption.
      reading_limits: Read the displayed definition, full statements and proofs of the
        enumerated lemmas in the full chapter PDF, including the
        finite/stalkwise reductions. Did not reconstruct the cited
        module-algebra or resolution-construction prerequisites. Lemma 20.26.7
        is not used; its displayed-proof typo is separately recorded.
    - title: The Stacks Project, Cohomology of Sheaves, Derived pullback
      url: https://stacks.math.columbia.edu/tag/06YI
      locator: §20.27, Lemmas 20.27.1–3 (tags 06YJ, 0D5S, 079U); §20.26 Lemma 20.26.8
        (06YC)
      statement: Degreewise f* takes K-flat complexes to K-flat complexes and
        quasi-isomorphisms between them to quasi-isomorphisms. Lf* is computed
        this way, commutes with derived tensor, and is compatible with
        composition.
      hypotheses: Any morphism of ringed spaces. For schemes no flatness, finite Tor
        dimension, properness or finite-type assumption is required for pullback
        of perfect complexes.
      reading_limits: Read all three statements and their displayed proofs, and the
        proof of 20.26.8, in the full chapter PDF. These statements are
        classical-derived statements; enhanced coherence is supplied by the
        actual K-flat functors and the separate localization input, not inferred
        from their triangulated isomorphisms.
dependency_level: 0
---

## Statement
Assume AC. On an arbitrary ringed space, call a cochain complex P K-flat when Tot(N⊗P) is acyclic for every acyclic N. Every complex admits a quasi-isomorphism from a K-flat complex with flat terms. K-flatness is stalkwise, is closed under shifts, cones and total tensor, and includes bounded-above flat complexes. Tensor with a K-flat complex preserves quasi-isomorphisms. For every morphism of ringed spaces, degreewise pullback preserves K-flatness and quasi-isomorphisms between K-flat complexes; its derived functor is computed there by degreewise pullback. The classical derived pullback has the usual composition and tensor comparison isomorphisms.

## Source contract
**Given:** Ringed spaces, cochain complexes, morphisms of ringed spaces, and AC.

**Goal:** Import exactly the resolution machinery for an actual enhanced construction.

[F1] Stacks §20.26, the enumerated lemmas in sources.references, gives K-flat existence and tensor stability.

[F2] Stacks §20.27, Lemmas 20.27.1–3, gives the pullback construction and comparison formulas.

## External input
Import [F1] and [F2] with their stated limits. Tensor is direct-sum totalization with d(p⊗q)=d(p)⊗q+(−1)^deg(p)p⊗d(q); its symmetry uses the Koszul sign. The ringed-space hypotheses include all ordinary schemes. The classical comparison formulas alone do not assert an infinity-coherent enhancement; that is constructed in the local helper using the next imported localization input.
