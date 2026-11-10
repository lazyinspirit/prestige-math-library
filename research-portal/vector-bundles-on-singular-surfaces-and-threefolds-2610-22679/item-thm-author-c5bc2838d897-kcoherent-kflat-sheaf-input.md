---
title: External K-flat sheaf resolution and pullback input
status: published
research_item: thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input
dependency_level: 0
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [The Stacks Project, Cohomology of Sheaves, Flat resolutions · §20.26, Definition 20.26.2; Lemmas 20.26.3–6, 20.26.8–13 and 20.26.17; PDF chapter cohomology, pp. 55–59](https://stacks.math.columbia.edu/tag/06Y7)
- [The Stacks Project, Cohomology of Sheaves, Derived pullback · §20.27, Lemmas 20.27.1–3 (tags 06YJ, 0D5S, 079U); §20.26 Lemma 20.26.8 (06YC)](https://stacks.math.columbia.edu/tag/06YI)

## Statement
Assume AC. On an arbitrary ringed space, call a cochain complex P K-flat when Tot(N⊗P) is acyclic for every acyclic N. Every complex admits a quasi-isomorphism from a K-flat complex with flat terms. K-flatness is stalkwise, is closed under shifts, cones and total tensor, and includes bounded-above flat complexes. Tensor with a K-flat complex preserves quasi-isomorphisms. For every morphism of ringed spaces, degreewise pullback preserves K-flatness and quasi-isomorphisms between K-flat complexes; its derived functor is computed there by degreewise pullback. The classical derived pullback has the usual composition and tensor comparison isomorphisms.

## Source contract
**Given:** Ringed spaces, cochain complexes, morphisms of ringed spaces, and AC.

**Goal:** Import exactly the resolution machinery for an actual enhanced construction.

[F1] Stacks §20.26, the enumerated lemmas in sources.references, gives K-flat existence and tensor stability.

[F2] Stacks §20.27, Lemmas 20.27.1–3, gives the pullback construction and comparison formulas.

## External input
Import [F1] and [F2] with their stated limits. Tensor is direct-sum totalization with d(p⊗q)=d(p)⊗q+(−1)^deg(p)p⊗d(q); its symmetry uses the Koszul sign. The ringed-space hypotheses include all ordinary schemes. The classical comparison formulas alone do not assert an infinity-coherent enhancement; that is constructed in the local helper using the next imported localization input.
