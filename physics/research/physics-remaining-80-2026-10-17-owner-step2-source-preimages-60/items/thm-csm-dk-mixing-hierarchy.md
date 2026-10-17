---
id: thm-csm-dk-mixing-hierarchy
kind: theorem
title: Mixing hierarchy for a selected probability-preserving map
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-ergodic-and-mixing-notions
  - thm-mixing-implies-weak-mixing-implies-ergodicity
dependency_roles:
  def-csm-dk-ergodic-and-mixing-notions: mathematical-premise
  thm-mixing-implies-weak-mixing-implies-ergodicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: E. H. El Abdalaoui and F. Vivaldi, Ergodic Theory and Dynamical Systems, §2.7
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    - title: Peter Sarig, Lecture Notes on Ergodic Theory, Proposition 1.2
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
---

## Statement

For one fixed probability-preserving map $T$, strong mixing implies weak
mixing, and weak mixing implies ergodicity, under the exact definitions in
[[def-csm-dk-ergodic-and-mixing-notions]]. No converse is asserted.

## Facts & Assumptions

**Given:** One probability-preserving system $(X,\mathcal A,\mu,T)$ and the
definitions of strong mixing, weak mixing, and ergodicity for this same map.

[F1] [[def-csm-dk-ergodic-and-mixing-notions]]: strong mixing means
$d_n(E,F)\to0$ for each measurable pair; weak mixing means the Cesàro
averages of $|d_n(E,F)|$ tend to zero; ergodicity means invariant-modulo-null
sets have probability zero or one.

[F2] [[thm-mixing-implies-weak-mixing-implies-ergodicity]]: in a
probability-preserving system, strong mixing implies weak mixing and weak
mixing implies ergodicity. Its complete proof uses the Cesàro estimate and
tests weak mixing on a strictly invariant set.

## Proof

**Given:** [F1], [F2], and the system in the statement.

1.1 Apply the first implication of [F2] to the fixed system. Strong mixing
therefore implies weak mixing with the absolute value inside the Cesàro
average. [F1, F2, given]

2.1 Apply the second implication of [F2] to that same map and probability.
Weak mixing therefore implies ergodicity for this map. This proves the stated
chain without asserting a converse or a property of every Hamiltonian flow.
[F1, F2, step 1.1] ∎

## Remarks

The implications concern only the selected probability-preserving map.
Hamiltonian volume preservation by itself does not supply either mixing
hypothesis.
