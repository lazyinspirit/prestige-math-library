---
id: def-qft-minkowski-fourier-transform
kind: definition
title: Minkowski Fourier transform and forward-cone support convention
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-qft-poincare-test-action
  - def-countable-choice
  - def-tempered-distribution
  - def-fourier-transform-of-a-tempered-distribution
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - lem-invertible-linear-substitutions-preserve-schwartz-space
  - def-c-c-and-c-c-infinity-on-rn
  - lem-test-function-inclusion-in-schwartz-space-is-continuous
dependency_roles:
  def-qft-poincare-test-action: mathematical-premise
  def-countable-choice: mathematical-premise
  def-tempered-distribution: mathematical-premise
  def-fourier-transform-of-a-tempered-distribution: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  lem-invertible-linear-substitutions-preserve-schwartz-space: mathematical-premise
  def-c-c-and-c-c-infinity-on-rn: mathematical-premise
  lem-test-function-inclusion-in-schwartz-space-is-continuous: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, lecture notes, DF-UFJF (2012), §2.1 and proof of Theorem 2.6"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "PDF pp. 13–18: the Fourier-support spectrum condition and Poincaré convention; the transform convention below is stated explicitly to fix sign and normalization."
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as
required by the Fourier transform suppliers. With $p\cdot z$ from
[[def-qft-poincare-test-action]], for $\psi\in\mathcal S(\mathbb R^4)$ set
$$\mathcal F_M\psi(z):=\int_{\mathbb R^4}e^{-ip\cdot z}\psi(p)\,d^4p.$$
To see that this is a continuous automorphism of Schwartz space, write
$\mathcal F_{2\pi}$ for the Euclidean transform
$\mathcal F_{2\pi}\psi(x)=\int e^{-2\pi i x\cdot p}\psi(p)\,d^4p$,
as in [[def-fourier-transform-of-a-tempered-distribution]].
For $u,v\in\mathbb R^4$, write $u\cdot_{\mathrm E}v:=\sum_{\mu=0}^3u^\mu v^\mu$.
Since $p\cdot z=(\eta z)\cdot_{\mathrm E}p$, the same defining integral gives
$$\mathcal F_M\psi(z)=(\mathcal F_{2\pi}\psi)(\eta z/(2\pi)).$$
The map $z\mapsto\eta z/(2\pi)$ is an invertible real-linear substitution,
so output composition with it is a continuous automorphism of Schwartz space
by [[lem-invertible-linear-substitutions-preserve-schwartz-space]], and
$\mathcal F_{2\pi}$ is a topological automorphism by
[[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]].

For $D\in\mathcal S'(\mathbb R^4)$ define its Minkowski Fourier transform by
bilinear transposition,
$$\langle\widehat D_M,\psi\rangle:=\langle D,\mathcal F_M\psi\rangle\qquad(\psi\in\mathcal S(\mathbb R^4)).$$
For a closed set $C\subseteq\mathbb R^4$, the statement
$\operatorname{supp}\widehat D_M\subseteq C$ means
$\langle\widehat D_M,\psi\rangle=0$ for every compactly supported smooth
$\psi$ whose support is disjoint from $C$; the inclusion
$C_c^\infty(\mathbb R^4)\hookrightarrow\mathcal S(\mathbb R^4)$ is
[[lem-test-function-inclusion-in-schwartz-space-is-continuous]]. In particular,
the forward-cone condition means $C=\overline V_+$ with the definition in
[[def-qft-poincare-test-action]]. No joint self-adjoint energy-momentum
generators are included in this convention.
