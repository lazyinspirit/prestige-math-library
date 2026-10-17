---
id: ex-qsm-interacting-dimer-gibbs
kind: example
title: "Entanglement threshold versus thermodynamic singularity"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-qsm-interacting-dimer-gibbs
dependency_roles:
  pthm-qsm-interacting-dimer-gibbs: physical-result
physical_scope: "The zero-field, antiferromagnetic finite Pauli dimer at its exact thermal separability boundary. It distinguishes a state-property threshold from a thermodynamic singularity and makes no experimental claim."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Damian Markham, Janet Anders, Vlatko Vedral, Mio Murao, and Akimasa Miyake, Survival of entanglement in thermal states, Example 1"
      url: "https://arxiv.org/pdf/quant-ph/0606103"
---

## Example

For the zero-field dimer of [[pthm-qsm-interacting-dimer-gibbs]] with $J>0$, the equality point $\beta J=(\log3)/4$ gives a separable Gibbs density matrix, and every larger $\beta J$ gives an entangled one. Nevertheless $Z=e^{3\beta J}+3e^{-\beta J}$ and the free energy remain analytic at this threshold. The threshold changes the separability classification without producing a finite-temperature thermodynamic singularity.

## Facts & Assumptions

**Given:** $J>0$, $h=0$, $\beta>0$, and the exact finite dimer result.

[F1] [[pthm-qsm-interacting-dimer-gibbs]]: at zero field the Gibbs state is separable for $\beta J\le(\log3)/4$ and entangled above, while its finite partition and free energy are analytic for positive $\beta$.

## Verification

1.1 Substituting $\beta J=(\log3)/4$ into [F1] gives the separable equality state; taking any $\beta J>(\log3)/4$ gives the entangled branch. These are conclusions about the defined two-qubit density matrix. [given, F1, algebra]

2.1 At $h=0$, $Z=e^{3\beta J}+3e^{-\beta J}$ is a finite positive sum of exponentials, so $-\beta^{-1}\log Z$ is analytic for $\beta>0$, including at the separability threshold. Therefore this state-property boundary is not a thermodynamic singularity of the finite dimer. [given, F1, step 1.1, algebra] ∎
