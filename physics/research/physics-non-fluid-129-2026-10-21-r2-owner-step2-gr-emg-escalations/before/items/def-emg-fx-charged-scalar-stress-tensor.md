---
id: def-emg-fx-charged-scalar-stress-tensor
kind: definition
title: Gauge-covariant stress tensor of a complex scalar
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-emg-lorentzian-forms
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, complete 281-page edition (2020)"
      url: "https://arxiv.org/pdf/1501.06570"
      locator: "§4.4, equation (4.53), and §4.6.1, equations (4.54)–(4.56), classical charged-scalar mode flux context; the exact tensor normalization is stated locally."
    - title: "Visakan Balakumar, Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation, PhD thesis, complete text (2022)"
      url: "https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0"
      locator: "Chapter 3, §3.1 equations (3.1)–(3.8), charged scalar action, covariant derivative and Hilbert stress context; only the classical minimal-coupling tensor formula is used."
---

## Definition

Let $(M,g,N,o)$ have the smooth, boundaryless, oriented and time-oriented Lorentzian four-manifold structure, signature $(-,+,+,+)$, metric-selected connection $\nabla^g$, and length-coordinate convention of [[def-emg-lorentzian-forms]]. Let $A\in\Omega^1(M)$ be a supplied smooth real one-form, let $e\in\mathbb R$ be a fixed real coupling, and let $\psi\in C^\infty(M,\mathbb C)$ be a smooth complex-valued function. In the length-coordinate convention, assign dimensionless components to $A_a$ and unit $\mathrm m^{-1}$ to $e$, so $eA_a$ has derivative unit $\mathrm m^{-1}$; assign $\psi$ an arbitrary fixed unit $[\psi]$. Define the complex covector

$$D_a\psi:=\nabla^g_a\psi-ieA_a\psi.$$

Since $\psi$ is a scalar, $\nabla^g_a\psi=\partial_a\psi$. Define the real symmetric covariant tensor

$$\mathsf T_{ab}[\psi;g,A,e]:=\overline{D_a\psi}\,D_b\psi+\overline{D_b\psi}\,D_a\psi-g_{ab}g^{cd}\overline{D_c\psi}\,D_d\psi,$$

with indices raised using $g^{-1}$. Its covariant components have unit $[\psi]^2\mathrm m^{-2}$. This is a mathematical tensor assignment. Its interpretation as a stress-energy tensor, and any field equation or conservation law, require a separate physical model.

## Definition references

[[def-emg-lorentzian-forms]]

## Remarks

The definition uses a globally supplied real one-form $A$ and a chosen complex trivialization. It asserts no global-bundle trivialization for a general charged field.
