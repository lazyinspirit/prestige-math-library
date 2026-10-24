---
id: lem-right-trefoil-is-prime
kind: lemma
title: The right trefoil is prime
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-genus-zero-iff-unknot
  - thm-knot-genus-additive-under-connected-sum
  - lem-right-trefoil-has-genus-one
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Burde and Zieschang, Knots, 2nd revised and extended edition
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf
      locator: Chapter 7, Corollary 7.7, printed p.94
    - title: The right-trefoil genus-one proof in this batch
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf
      locator: Theorem 7.4 together with the local exact-genus argument
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. The standard right-handed trefoil is a prime oriented knot.

## Statement references

[[def-knot-connected-sum-and-prime-knot|Definition of a prime knot]]

[[lem-right-trefoil-has-genus-one|Exact genus of the right trefoil]]

## Facts & Assumptions

**Given:** Full AC and the standard right-handed trefoil $T$.

[F1] $g(T)=1$. ([[lem-right-trefoil-has-genus-one]])

[F2] Genus is additive under connected sum, and genus zero characterizes the unknot, under AC$_\omega$. ([[thm-knot-genus-additive-under-connected-sum]], [[lem-knot-genus-zero-iff-unknot]])

[F3] Full AC implies AC$_\omega$. ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

**Given:** Full AC and $T$.

1.1 By [F1] and [F2], $T$ is nontrivial. If $T=K\#J$ with both factors nontrivial, [F2] and [F3] make their genera positive integers, so $g(K)+g(J)\ge2$. [given, F1, F2, F3]

2.1 Additivity gives $1=g(T)=g(K)+g(J)\ge2$, a contradiction. Thus $T$ is nontrivial and has no connected-sum presentation with both factors nontrivial, exactly the definition of prime. [F1, F2, F3, step 1.1] ∎

## Sources

[[def-knot-connected-sum-and-prime-knot]]
