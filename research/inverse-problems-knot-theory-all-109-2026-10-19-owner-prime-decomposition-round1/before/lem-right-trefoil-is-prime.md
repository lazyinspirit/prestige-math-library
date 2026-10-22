---
id: lem-right-trefoil-is-prime
kind: lemma
title: "The right trefoil is prime"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
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
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, Corollary 7.7, printed p.94"
    - title: "The right-trefoil genus-one proof in this batch"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Theorem 7.4 together with the local exact-genus argument"
---

## Statement

Assume full AC. The standard right-handed trefoil is a prime oriented knot.

## Statement references

[[def-knot-connected-sum-and-prime-knot|Definition of a prime knot]]

[[lem-right-trefoil-has-genus-one|Exact genus of the right trefoil]]

## Facts & Assumptions

**Given:** Full AC and the standard right-handed trefoil $T$.

[F1] $g(T)=1$. ([[lem-right-trefoil-has-genus-one]])

[L1] The draft genus-additivity statement has the required formula, but its lower-bound proof remains escalated. ([[thm-knot-genus-additive-under-connected-sum]])

[L2] The draft genus-zero statement has the required implication, but its smooth disk-to-unknot proof remains escalated. ([[lem-knot-genus-zero-iff-unknot]])

[A1] Full AC is the choice-function axiom. ([[def-axiom-of-choice]])

[A2] Full AC implies AC$_\omega$. ([[thm-choice-implies-dependent-implies-countable-choice]])

[A3] The proof uses the reverse direction of [F3], whose smooth Schoenflies prerequisite remains unresolved. ([[lem-knot-genus-zero-iff-unknot]])

## Proof

**Given:** Full AC and $T$.

1.1 Suppose $T=K\#J$ with both $K$ and $J$ nontrivial. Conditional on [L2], each has positive integer genus, so $g(K)+g(J)\ge2$. [given, L2, A2]

2.1 Conditional on [L1], $g(T)=g(K)+g(J)\ge2$, contradicting [F1]. Hence no such connected-sum presentation exists, and the nontrivial knot $T$ is prime by definition. The conclusion is conditional on the unresolved suppliers in [A3]. [given, F1, L1, L2, A1, A2, A3, step 1.1]

## Owner escalation

This proof is complete once `lem-knot-genus-zero-iff-unknot` is proved; its exact missing prerequisite is the smooth disk-to-unknot/Schoenflies result.

## Proof references

[[def-knot-connected-sum-and-prime-knot]]

[[lem-knot-genus-zero-iff-unknot]]

[[thm-knot-genus-additive-under-connected-sum]]
