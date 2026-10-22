---
id: lem-mirroring-preserves-primality-of-a-knot
kind: lemma
title: "Mirroring preserves primeness of an oriented knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
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
      locator: "Chapter 7, §§7.1–7.3 and Definition 7.6, printed pp.91–94"
---

## Statement

Assume the Axiom of Countable Choice. If a smooth oriented knot $K$ is nontrivial and prime, then its mirror image under the fixed reflection from the connected-sum convention, with the image orientation, is also nontrivial and prime.

## Statement references

[[def-knot-connected-sum-and-prime-knot|Definitions of nontrivial and prime knots]]

## Facts & Assumptions

**Given:** AC$_\omega$, a nontrivial prime oriented knot $K$, and a fixed orientation-reversing reflection $r:S^3\to S^3$.

[F1] A prime knot is nontrivial and has no connected-sum presentation with both summands nontrivial. ([[def-knot-connected-sum-and-prime-knot]])

[F2] The connected-sum operation is well-defined, and its fixed gluing map commutes with the reflection in the standard model. ([[lem-knot-connected-sum-well-defined]], [[def-knot-connected-sum-and-prime-knot]])

[A1] AC$_\omega$ is the countable-choice hypothesis for the connected-sum choice-independence result. ([[def-countable-choice]])

## Proof

**Given:** AC$_\omega$, $K$, and $r$.

1.1 If $r(K)$ were ambient isotopic to the standard unknot, conjugating that isotopy by $r$ would give an orientation-preserving ambient isotopy from $K$ to $r^{-1}(U)$. The reflection image $r^{-1}(U)$ is a round circle and hence a standard unknot; if its orientation is reversed, a half-turn in its plane is an orientation-preserving isotopy to the chosen orientation. Thus $K$ would be trivial, contrary to [F1], and $r(K)$ is nontrivial. [given, F1, construct]

2.1 Suppose $r(K)=J\#L$ with both $J,L$ nontrivial. Reflect the connected-sum model. By [F2], its image is the connected sum of the reflected summands, $K=r^{-1}(J)\#r^{-1}(L)$ up to oriented ambient isotopy. Reflection preserves nontriviality by the argument in step 1.1, contradicting primeness of $K$. Hence $r(K)$ is prime. [given, F1, F2, A1, step 1.1, construct] ∎

## Proof references

[[def-knot-connected-sum-and-prime-knot]]

[[lem-knot-connected-sum-well-defined]]

[[thm-oriented-knot-connected-sum-is-a-commutative-monoid]]
