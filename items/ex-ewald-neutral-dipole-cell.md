---
id: ex-ewald-neutral-dipole-cell
kind: example
title: "A neutral dipole cell and its reciprocal modes"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-countable-choice, def-ewald-three-dimensional-periodic-source-data, thm-ewald-alpha-independent-energy-and-potential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Take the unit cubic torus $\mathbb R^3/\mathbb Z^3$, with charges $q_1=1$ at
$x_1=(0,0,0)$ and $q_2=-1$ at $x_2=(1/2,0,0)$. The dipole is neutral and its
Fourier structure factor vanishes on every even first-coordinate mode and is
equal to $2$ on every odd first-coordinate mode.

## Facts & Assumptions

**Given:** Countable Choice, $\alpha>0$, the unit cell, these two charges and positions, and the Fourier
coefficient and reciprocal-energy conventions for neutral periodic data.

[A1] The Gaussian Ewald formula uses Countable Choice ([[def-countable-choice]]).

[F1] $\rho_k=\sum_iq_ie^{-2\pi i k\cdot x_i}$ and neutral data have zero coefficient at $k=0$ ([[def-ewald-three-dimensional-periodic-source-data]]).

[F2] The reciprocal Ewald energy is $\frac12\sum_{k\ne0}c_k|\rho_k|^2$ with $c_k=4\pi e^{-|\kappa_k|^2/(4\alpha^2)}/(V|\kappa_k|^2)$, and the full renormalized energy adds the real-space and self terms ([[thm-ewald-alpha-independent-energy-and-potential]]).

## Verification

**Proof technique:** direct.

1.1 The two positions are distinct in $\mathbb R^3/\mathbb Z^3$ and $q_1+q_2=0$. For $k\in\mathbb Z^3$, [F1] gives $\rho_k=1-e^{-2\pi i k_1/2}=1-(-1)^{k_1}$; hence $\rho_0=0$, $\rho_k=0$ when $k_1$ is even, and $\rho_k=2$ when $k_1$ is odd. [given, F1, algebra]

2.1 For any finite symmetric reciprocal mode set $\mathcal K\subset\mathbb Z^3\setminus\{0\}$, the dipole contributes $\frac12\sum_{k\in\mathcal K}c_k|\rho_k|^2=2\sum_{k\in\mathcal K,\,k_1\text{ odd}}c_k$ to the retained reciprocal energy. The remaining real-space and self contributions are exactly the terms in [F2], under its neutrality, positive-parameter and Countable Choice hypotheses [A1]. Thus the zero mode is absent and the reciprocal selection is precisely the odd-$k_1$ subset, not an assumed continuum average. [given, A1, F2, step 1.1, algebra] ∎

