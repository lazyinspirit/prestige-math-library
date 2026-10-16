---
id: thm-qc-tableau-measurement-update
kind: theorem
title: Phase-aware tableau measurement agrees with the projective instrument
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-pauli-measurement-branch-semantics
  - lem-qc-pauli-measurement-projectors
  - lem-qc-zero-probability-branch
  - lem-qc-deterministic-stabilizer-measurement
  - lem-qc-anticommuting-stabilizer-measurement-is-fair
  - lem-qc-random-measurement-stabilizer-update
  - lem-qc-pauli-measurement-positive-branch-is-density
  - lem-qc-pure-projective-branch-norm
  - thm-qc-ray-projector-well-defined-and-bijective
  - def-qc-stabilizer-tableau
  - lem-qc-tableau-clifford-update
  - lem-qc-tableau-deterministic-sign
justified_by: []
dependency_level: 17
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §III
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Statement

For a rank-$n$ stabilizer tableau and a Hermitian Pauli measurement $M$, the
tableau measurement rule returns exactly the projective instrument branches:
if some stabilizer row anticommutes with $M$, both bits occur with probability
$1/2$ and the pivot update represents each conditional state; if every row
commutes with $M$, the signed row product returns the unique probability-one
bit, leaves the state unchanged, and the opposite zero-probability branch has
no normalized state.

## Facts & Assumptions

**Given:** A valid rank-$n$ stabilizer tableau, a Hermitian Pauli $M$, and the
measurement projectors and instrument from the Statement.

[F1] [[lem-qc-anticommuting-stabilizer-measurement-is-fair]]: an
anticommuting row makes both branch probabilities $1/2$.

[F2] [[lem-qc-random-measurement-stabilizer-update]]: the pivot and row
replacement represent the normalized conditional state in either branch.

[F3] [[lem-qc-deterministic-stabilizer-measurement]]: when all rows commute,
exactly one outcome has probability one.

[F4] [[lem-qc-tableau-deterministic-sign]]: the phase-aware row product
computes that deterministic bit.

[F5] [[lem-qc-zero-probability-branch]]: the opposite branch map is zero and
has no normalized state.

[F6] [[lem-qc-pauli-measurement-positive-branch-is-density]]: every
positive-probability Pauli branch has a normalized density operator.

[F7] [[lem-qc-pure-projective-branch-norm]]: for a pure input, the normalized
branch density is the rank-one projector of the normalized branch vector.

[F8] [[thm-qc-ray-projector-well-defined-and-bijective]]: a pure-state ray
determines a unique rank-one projector.

## Proof

**Given:** The data in the Statement.

1.1 If some row anticommutes with $M$, [F1] gives probability $1/2$ to each bit. For either sampled bit, [F2] proves the updated rows are a rank-$n$ stabilizer for the normalized state obtained by applying $P_b$. Thus the tableau state is the ray of that branch vector. [F6] defines the instrument's normalized branch density, and [F7] identifies it with the vector's rank-one projector; [F8] makes that projector independent of the chosen unit representative. Therefore the tableau and instrument have the same two branch states and probabilities. [F1, F2, F6, F7, F8, given]

1.2 If every row commutes with $M$, [F3] gives one deterministic outcome and [F4] computes its bit from the signed row product. The post-measurement state for that bit is unchanged because it is already in the eigenspace. Facts F6, F7, and F8 identify its probability-one branch density with the rank-one projector of the same ray; [F5] says the other branch is impossible and has no normalized state. Hence the tableau output agrees with the instrument in this case as well. [F3, F4, F5, F6, F7, F8, given]

2.1 Every Hermitian Pauli either commutes or anticommutes with each stabilizer row, so the two cases above exhaust all measurements. Therefore the tableau rule agrees with every defined branch of the projective instrument, including its zero-probability boundary. [step 1.1, step 1.2, algebra] ∎

## Sources

The two cases and their state updates are given in de Wolf §20.3, PDF
pp. 187–188. Aaronson–Gottesman §III, PDF pp. 4–5, provides the extended
tableau version and deterministic sign calculation.
