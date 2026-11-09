---
id: lem-author-c5b0693f4fc3-top-torsion-primewise
kind: lemma
title: Primewise detection of torsion
status: draft
domain: mathematics
deps:
  - math:def-annihilator-and-torsion-of-a-module
dependency_roles:
  math:def-annihilator-and-torsion-of-a-module: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
An abelian group $M$ is torsion-free if multiplication by every prime is injective.

## Facts & Assumptions
[F1] Torsion means annihilation by some positive integer, as in [[math:def-annihilator-and-torsion-of-a-module]].

## Proof
**Given:** $M$ satisfying the stated injectivity.

**Goal:** Show every torsion element is zero.

1.1 For $nx=0$ with $n>0$, factor $n$ into primes. Multiplication by $n$ is the composition of the corresponding injective prime multiplication maps, hence is injective (the empty composition for $n=1$ is the identity). [given]

2.1 Thus $nx=0$ implies $x=0$, as required. [F1, step 1.1] ∎
