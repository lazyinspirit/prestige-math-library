---
id: pthm-emg-fx-conditional-model-flux
kind: physics-theorem
title: Conditional charged-scalar flux amplification
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 5
proof_strategy: direct
deps:
  - post-emg-fx-test-field-regime
  - def-emg-fx-charged-radial-scattering
  - prop-emg-fx-superradiant-wronskian
  - lem-emg-fx-asymptotic-scalar-energy-flux
dependency_roles:
  post-emg-fx-test-field-regime: physical-assumption
  def-emg-fx-charged-radial-scattering: mathematical-premise
  prop-emg-fx-superradiant-wronskian: mathematical-premise
  lem-emg-fx-asymptotic-scalar-energy-flux: mathematical-premise
physical_scope: >
  A conditional linear fixed-background statement for an admitted real-frequency
  massless charged-scalar scattering mode on the specified subextremal electric
  Reissner–Nordström exterior. It concerns only the declared asymptotic
  time-translation energy-flux normalization and makes no claim of mode
  existence, astrophysical efficiency, measured amplification, quantum
  pair-production, coupled evolution, or nonlinear instability.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, complete 281-page edition (2020)"
      url: "https://arxiv.org/pdf/1501.06570"
      locator: "§4.4, equation (4.53), and §4.6.1, equations (4.54)–(4.56), the fixed-background Wronskian identity and charged RN threshold. The local proof uses the exact Coulomb phase and gauge of the mathematical suppliers."
    - title: "Visakan Balakumar, Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation, PhD thesis, complete 307-page text (2022)"
      url: "https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0"
      locator: "Chapter 3, §§3.3.3–3.3.4, equations (3.72)–(3.84), the Wronskian reflection/transmission relations and classical charged-scalar amplification condition. The local proof supplies its own gauge and normalization."
---

## Statement

Within the adopted fixed-background charged-scalar model, consider any admitted real-frequency scattering mode on a subextremal electric Reissner–Nordström exterior with incident amplitude $A_{\mathrm{in}}\ne0$, reflection coefficient $R$, and transmission coefficient $T\ne0$. Let $\Phi_H=Q/r_+$ be the gauge-normalized potential difference and let $\mathcal P_{\mathrm{in}},\mathcal P_{\mathrm{ref}}$ be the positive incoming and reflected time-translation energy-flux magnitudes defined by the adopted stress tensor. If

$$0<\omega<e\Phi_H,$$

then

$$\frac{\mathcal P_{\mathrm{ref}}}{\mathcal P_{\mathrm{in}}}=|R|^2=1+\frac{e\Phi_H-\omega}{\omega}|T|^2>1.$$

Thus the reflected asymptotic mode flux magnitude exceeds the incident magnitude in this frequency band, conditional on an admitted scattering solution with nonzero transmission. The statement asserts neither existence nor uniqueness of such a solution.

## Statement references

[[post-emg-fx-test-field-regime]]

[[def-emg-fx-charged-radial-scattering]]

[[prop-emg-fx-superradiant-wronskian]]

[[lem-emg-fx-asymptotic-scalar-energy-flux]]

## Facts & Assumptions

**Given:** The adopted fixed-background scalar model, the exact subextremal electric RN scattering conventions, and an admitted mode with the stated coefficients and frequency conditions.

[A1] [[post-emg-fx-test-field-regime]]: the scalar is a classical massless minimally coupled field on prescribed RN-form background data, with its stress omitted from the background equations; its adopted energy tensor is the symmetric gauge-covariant tensor of the local mathematical definition.

[F1] [[def-emg-fx-charged-radial-scattering]]: $A_t=-Q/r$, $\Phi_H=A_t(\infty)-A_t(r_+)=Q/r_+$, $\omega_H=\omega-e\Phi_H$, and the normalized scattering mode has unit incoming radial amplitude with only the ingoing branch at the future horizon. The definition asserts no scattering-solution existence.

[F2] [[prop-emg-fx-superradiant-wronskian]]: for each admitted mode, $|R|^2=1-\frac{\omega-eQ/r_+}{\omega}|T|^2$.

[F3] [[lem-emg-fx-asymptotic-scalar-energy-flux]]: for these asymptotics, $\mathcal P_{\mathrm{ref}}/\mathcal P_{\mathrm{in}}=|R|^2$ and $\mathcal P_{\mathrm{in}}=2\omega^2|A_{\mathrm{in}}|^2>0$.

[A2] The mode is admitted, $\omega>0$, $0<\omega<e\Phi_H$, and $T\ne0$. These are conditional inputs, not an existence or empirical claim.

## Proof

1.1 By [F2] and $\Phi_H=Q/r_+$ from [F1],
$$|R|^2=1-\frac{\omega-e\Phi_H}{\omega}|T|^2=1+\frac{e\Phi_H-\omega}{\omega}|T|^2.$$
The band condition in [A2] makes both $(e\Phi_H-\omega)/\omega$ and $|T|^2$ strictly positive, so $|R|^2>1$. [given, F1, F2, A2, algebra]

2.1 By [F3], $\mathcal P_{\mathrm{ref}}/\mathcal P_{\mathrm{in}}=|R|^2>1$ and $\mathcal P_{\mathrm{in}}>0$. Multiplying by the positive incident flux gives $\mathcal P_{\mathrm{ref}}>\mathcal P_{\mathrm{in}}$. This is a deduction in the stated fixed-background model. [given, A1, F3, step 1.1, algebra] ∎
