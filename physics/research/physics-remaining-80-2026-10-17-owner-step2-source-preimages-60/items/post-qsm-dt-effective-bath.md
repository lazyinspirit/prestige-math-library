---
id: post-qsm-dt-effective-bath
kind: postulate
title: Specified effective GKSL bath and instrument assumption
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
physical_scope: Adopted finite-dimensional effective thermal GKSL model and the explicitly selected energy-resolved instrument over a stated resolved time scale; no microscopic bath limit, calibrated rate, or reported measurement is asserted.
deps:
  - def-qsm-dt-gksl-definition
  - def-qsm-dt-monitored-chain
  - def-axiom-of-choice
dependency_roles:
  def-qsm-dt-gksl-definition: mathematical-premise
  def-qsm-dt-monitored-chain: mathematical-premise
  def-axiom-of-choice: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §§1.3.4 and 1.5.3
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative dynamics in quantum optics, §§I and IV.A
      url: https://arxiv.org/pdf/quant-ph/9702007
---

## Postulate

For the specified finite-dimensional subsystem, we adopt that during the declared resolved time scale its reduced state is described by a chosen finite GKSL generator $\mathcal L$ with Hamiltonian $H_{\rm s}$, coupling matrices, positive temperature $1/(k_{\rm B}\beta)$, and finite rates. The model uses the finite generator and units of [[def-qsm-dt-gksl-definition]]; for the Gibbs-jump specialization, $H_{\rm s}$, $\beta$, and $w_{ab}$ have the hypotheses and units in [[thm-qsm-dt-gibbs-jump]]. This is an effective model assumption for the selected subsystem, preparation, time window, and coarse observables. No microscopic derivation, weak-coupling error estimate, exact bath reset, or measured calibration is included.

For record predictions, we additionally adopt the particular ideal energy-resolved monitoring rule defined in [[def-qsm-dt-monitored-chain]]. It is one chosen instrument for the model; a one-time channel family alone does not select this record law. Full AC is retained as the formal set-theoretic premise in the monitored-chain supplier's construction of the joint path law; this is not a physical postulate about nature.

## Remarks

This postulate distinguishes the adopted effective bath model from derived finite-dimensional consequences. The postulate does not provide rates or uncertainties from an experiment. If rates later come from a measurement, their apparatus, calibration, sampling conditions, and uncertainty must be stated as empirical premises in a separate appropriately scoped item.
