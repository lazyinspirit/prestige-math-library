---
id: post-qsm-infinite-spin-equilibrium
kind: postulate
title: KMS equilibrium and local Born quantum spin model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
physical_scope: >-
  An adopted model for bounded finite-dimensional quantum spins on Gamma=Z^d
  with a specified finite-range interaction, local measurements, and T>0.
  Actual materials, calibration, thermalization, and empirical uncertainty are
  outside the postulate.
deps:
  - def-qsm-infinite-algebraic-state
  - def-qsm-infinite-spin-physical-quantities
  - def-qsm-kms-state
  - def-qsm-local-spin-algebras
dependency_roles:
  def-qsm-infinite-algebraic-state: formulation-prerequisite
  def-qsm-infinite-spin-physical-quantities: formulation-prerequisite
  def-qsm-kms-state: formulation-prerequisite
  def-qsm-local-spin-algebras: formulation-prerequisite
dependency_level: 11
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §2.6, Born rule, printed pp. 45–46
      url: https://arxiv.org/pdf/1311.2717
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, Definition 3.4.4 and thermal-equilibrium discussion, printed pp. 74–77
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7 and Chapter 2 §6, printed pp. 13–14 and 24–25
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Postulate

Adopt, for this bounded finite-dimensional quantum spin model, the following physical interpretation and equilibrium rule. A prepared state is a positive normalized functional $\omega$ on the quasi-local observable algebra of [[def-qsm-infinite-algebraic-state]]. The model assigns the Born probability $\omega(P)$ to a local projective-measurement outcome represented by a projection $P\in\mathcal A_\Lambda$; the probabilities of the mutually orthogonal spectral projections of a finite-region self-adjoint observable sum to one. For a physical equilibrium preparation at temperature $T>0$, adopt as the model's equilibrium criterion that $\omega$ is a $\beta$-KMS state for the thermodynamic dynamics $\alpha_t$, with $\beta=(k_BT)^{-1}$ and the physical-time strip of width $\beta\hbar$ seconds as in [[def-qsm-kms-state]]. This is an adopted model postulate, not a deduction from the algebraic state definition or from the finite-volume Gibbs identity.

The postulate does not claim that an actual material has the specified interaction parameters, that a system dynamically relaxes to a KMS state, that equilibrium is unique, or that an apparatus realizes a specified projective measurement. It reports no experiment or measured value. Finite-volume approximations, when used, remain distinct from the infinite-volume state and its local restrictions.


## Remarks

The entropy-density construction in the physical-quantities definition is a separate conditional quantity under its stated Countable Choice and full Axiom of Choice hypotheses. This postulate uses only the model state, local measurement and KMS/unit conventions; it does not assume an entropy limit or assert that a material realizes the model.
