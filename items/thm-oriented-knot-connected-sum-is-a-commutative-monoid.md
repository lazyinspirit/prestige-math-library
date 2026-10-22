---
id: thm-oriented-knot-connected-sum-is-a-commutative-monoid
kind: theorem
title: "Oriented knot connected sum is a commutative monoid"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, Lemma 7.3 and surrounding construction, printed pp.92–93"
    - title: "Stefan Friedl, Introduction to Knots and Links, 2024 lecture notes"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Proposition 2.14, printed pp.24–25"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Countable Choice. On oriented ambient-isotopy classes of smooth knots in $S^3$, the connected-sum operation is associative and commutative, and the standard unknot is a two-sided identity. Here “commutative monoid” means a set with an associative binary operation, a two-sided identity, and equality after interchanging the two inputs.

## Statement references

[[def-knot-connected-sum-and-prime-knot|Connected-sum construction and standard unknot]]

## Facts & Assumptions

**Given:** AC$_\omega$ and the oriented connected-sum construction.

[F1] The connected sum is formed by gluing the complements of trivial ball-arc pairs with a fixed standard orientation-reversing map, chosen symmetrically in the two-ball model. ([[def-knot-connected-sum-and-prime-knot]])

[F2] Changing the local representatives, charts, and sufficiently small ball-arc choices does not change the resulting oriented knot class. ([[lem-knot-connected-sum-well-defined]])

[A1] AC$_\omega$ is the countable-choice hypothesis used by the local-choice lemma. ([[def-countable-choice]])

## Proof

**Given:** AC$_\omega$ and oriented knot classes $[K],[J],[L]$.

1.1 For commutativity, choose the symmetric standard two-ball model in [F1]. The orientation-preserving half-turn exchanging its two lobes carries each oriented knot tangle to the corresponding tangle in the swapped model and carries the fixed joining map to itself. It therefore gives an orientation-preserving ambient isotopy between the model outputs for $K\#J$ and $J\#K$; [F2] transfers this equality to arbitrary connected-sum data. [given, F1, F2, A1, construct]

1.2 For associativity, place representatives of $K,J,L$ in three disjoint standard ball-arc pieces in a row and join consecutive pieces by the same fixed gluing. The constructions $(K\#J)\#L$ and $K\#(J\#L)$ then use the same three pieces and the same two joining maps; only the order in which the two gluings are performed differs. Since the gluings have disjoint boundary spheres, their order does not change the resulting oriented manifold or knot. By [F2], this common model represents both bracketings for arbitrary data. [given, F1, F2, A1, construct]

2.1 For the identity, choose the standard unknot summand with a small ball meeting it in a trivial arc. Its spanning disk shows that the complementary arc is boundary-parallel and hence trivial. The connected-sum gluing replaces a short trivial arc of $K$ by another standard trivial arc. The ball-arc isotopy of [F2] identifies the output with $K$. Reversing the order gives the same argument for the left identity. [given, F1, F2, A1, construct] ∎

## Sources

[[def-knot-connected-sum-and-prime-knot]]

[[lem-knot-connected-sum-well-defined]]

[[def-countable-choice]]
