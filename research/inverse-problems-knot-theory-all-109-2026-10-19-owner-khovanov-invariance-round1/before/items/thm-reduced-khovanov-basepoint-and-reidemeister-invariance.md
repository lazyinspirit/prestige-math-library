---
id: thm-reduced-khovanov-basepoint-and-reidemeister-invariance
kind: theorem
title: "Reduced Khovanov cohomology is invariant under based moves and basepoint transport"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-countable-choice
  - def-reduced-khovanov-cohomology-of-a-knot
  - thm-oriented-reidemeister-equivalence-theorem
  - lem-khovanov-reidemeister-chain-homotopies
  - thm-isotopy-extension
  - lem-a-smooth-isotopy-of-links-can-be-put-in-general-position
  - lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times
  - def-chain-homotopy
  - def-chain-homotopy-equivalence
proof_strategy: direct
axiom_use: "Assumes ACω through ambient isotopy extension and oriented Reidemeister equivalence; the local based chain homotopies and quotient argument are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§8.1–8.4"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §§3.5.1–3.5.5"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §6.3.4"
      url: "https://arxiv.org/pdf/2501.03115v1"
---

## Statement

Assume the Axiom of Countable Choice. Let $K$ be an oriented knot and let $(D,p)$ and $(D',p')$ be finite regular oriented diagrams of $K$ with basepoints away from all crossings. Then the reduced integral groups $\widetilde{Kh}^{i,\widetilde j}(D,p)$ and $\widetilde{Kh}^{i,\widetilde j}(D',p')$ are isomorphic for every $(i,\widetilde j)$. In particular, they are invariant under Reidemeister moves supported away from the basepoint and under transport of the basepoint along the knot.

## Statement references

[[def-countable-choice|Countable choice axiom]]

[[def-reduced-khovanov-cohomology-of-a-knot|Reduced quotient and based interval module]]

[[thm-oriented-reidemeister-equivalence-theorem|Oriented Reidemeister equivalence]]

[[thm-isotopy-extension|Ambient extension of a marked-knot isotopy]]

[[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position|General-position link isotopy]]

[[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times|Finite Reidemeister event sequence]]

[[lem-khovanov-reidemeister-chain-homotopies|Local based chain homotopies]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§8.1–8.4](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §§3.5.1–3.5.5](https://arxiv.org/pdf/math/0201043)

[Zhang, *Notes on Khovanov homology* (2025), §6.3.4](https://arxiv.org/pdf/2501.03115v1)

## Facts & Assumptions
**Given:** AC$_\omega$, two finite regular based diagrams of the same oriented knot, and their reduced quotient complexes.

[F1] AC$_\omega$ is the axiom that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F2] An isotopy of smooth embeddings of a compact knot circle extends under AC$_\omega$ to an ambient isotopy ([[thm-isotopy-extension]]).

[F3] The available general-position and event-classification statements apply to link isotopies and give finitely many Reidemeister singular times; their statements do not supply the relative-endpoint general-position result for a cut one-interval tangle ([[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]], [[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times]]).

[F4] The current local-move carrier proves the type-I cancellations and their based quotient case, but explicitly leaves the type-II and type-III based chain homotopy equivalences unproved ([[lem-khovanov-reidemeister-chain-homotopies]]).

[F5] A cochain homotopy equivalence induces mutually inverse maps on cohomology ([[def-chain-homotopy]], [[def-chain-homotopy-equivalence]]).

## Proof

The steps below inspect the ambient-isotopy and relative-diagram reductions only; they do not prove the local RII/RIII or relative-endpoint claims needed for the Statement.

1.1 Under the AC$_\omega$ premise in [F1], since the diagrams represent the same oriented knot, choose a smooth isotopy of their knot embeddings. By [F2] it extends to an ambient isotopy of the unbased knots. Reparametrizing the circle can move the marked point along the oriented knot image, but the carrier has not constructed from this ambient isotopy an isotopy between the cut tangles that fixes the two chosen boundary endpoints throughout. [F1, F2, given, choose]

2.1 To obtain a finite Reidemeister sequence supported away from the marked interval, one needs general position relative to those fixed endpoints and collars. The suppliers in [F3] cover closed-link isotopies and do not state this relative-boundary conclusion, so the required sequence for basepoint transport has not been derived. [F3, step 1.1, algebra]

3.1 Even if such a relative tangle sequence were supplied, the based local equivalence is currently established only for type-I moves by [F4]; the type-II and type-III local equivalences remain unproved. Thus neither based-move invariance nor the asserted basepoint-transport invariance is proved by this carrier. [F4, F5, step 2.1, algebra] ∎
