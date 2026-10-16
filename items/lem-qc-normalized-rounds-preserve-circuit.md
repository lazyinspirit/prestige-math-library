---
id: lem-qc-normalized-rounds-preserve-circuit
kind: lemma
title: "Normalized transport rounds preserve the circuit up to a recorded phase"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-normalized-transport-schedule, def-qc-circuit-denotational-semantics, lem-qc-j-basis-and-phase-identities]
justified_by: []
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §§II D–F"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

For a circuit $C$ as in [[def-qc-normalized-transport-schedule]], let
$U_C$ be its denotation and let $\widetilde U_C$ be the chronological product
of the normalized rounds. Then

$$\widetilde U_C=\sigma_C U_C.$$

## Facts & Assumptions

**Given:** A finite ordered J/CZ circuit with layers and normalized rounds as
defined in [[def-qc-normalized-transport-schedule]].

[F1] $J(0)^2=I$ and $J(\pi/2)^3=e^{i\pi/4}I$
([[lem-qc-j-basis-and-phase-identities]]).

[F2] The schedule processes the finite circuit layers chronologically and
forms each round by applying its matching before its listed one-qubit gates
([[def-qc-normalized-transport-schedule]]).

[F3] The current circuit denotation defines
$U_C=U_{L_d}\cdots U_{L_1}$ for chronological layers and assigns the identity
to an empty circuit or layer ([[def-qc-circuit-denotational-semantics]]).

## Proof


1.1 In an all-$J$ layer, the schedule appends exactly the original matching and original one-qubit gates, so that layer's round operator equals the original layer operator. In a layer with no $J$ gates and nonempty matching, the two round operators compose as $(J(0)^{\otimes n})(J(0)^{\otimes n})CZ_{M_r}=CZ_{M_r}$ by [F1]. An empty layer contributes the identity and is omitted. [F1, F2, F3, cases]

1.2 In a mixed layer, the three rounds compose with the original matching first. On every active wire the later two factors are $J(0)J(0)=I$, leaving the original $J(\alpha_{rj})$. On every idle wire the three factors are $J(\pi/2)^3=e^{i\pi/4}I$. Since these idle factors are scalar identities, they commute with the matching and all active-wire gates. Thus the round product is $e^{i\pi(n-|J_r|)/4}$ times the original layer operator. [F1, F2, F3, algebra]

2.1 Multiplying the equalities from step 1.1 and step 1.2 in chronological layer order gives $\widetilde U_C=\sigma_C U_C$, because $\sigma_C$ is the product of exactly the mixed-layer scalars and no other layer contributes a scalar. This includes zero layers and zero wires, where both products are empty. [step 1.1, step 1.2, F2, induction, cases] ∎

