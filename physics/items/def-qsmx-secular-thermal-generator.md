---
id: def-qsmx-secular-thermal-generator
kind: definition
title: Finite energy-resolved GKSL thermal model
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - lem-qsm-matrix-state-calculus
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ángel Rivas and Susana F. Huelga, Open Quantum Systems: An Introduction, Springer Briefs in Physics, arXiv:1104.5242v2, §§6.2.3, 6.2.8"
      url: https://arxiv.org/pdf/1104.5242
    - title: "Lin Lin, Notes on Lindblad Equations and Davies Generator, §3"
      url: https://ruizhezhang.com/teaching_2025/Lindblad_Notes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $d\geq1$ and let $\mathcal H=\mathbb C^d$ with its standard complex inner product. Let $H=H^*$ on $\mathcal H$ be a Hamiltonian matrix with entries in joules, let $\hbar>0$ have units joule-seconds, and let $S_1,\ldots,S_m$ be a finite family of dimensionless Hermitian matrices, where $m\geq0$. Write the finite spectral decomposition $H=\sum_{E\in\operatorname{spec}(H)} E P_E$, where $P_E$ are pairwise orthogonal spectral projections and $\sum_E P_E=I_d$. The Bohr-frequency set is

$$\Omega_H:=\{(E'-E)/\hbar:E,E'\in\operatorname{spec}(H)\}\subset\mathbb R,$$

whose frequencies have units seconds$^{-1}$. For each $\omega\in\Omega_H$ and $1\leq a\leq m$, define the dimensionless energy-resolved coupling

$$S_a(\omega):=\sum_{\substack{E,E'\in\operatorname{spec}(H)\\E'-E=\hbar\omega}}P_E S_a P_{E'}.$$

Let $\beta\in\mathbb R$ have units joules$^{-1}$. For each $\omega\in\Omega_H$, choose a finite rate matrix $\Gamma(\omega)=(\gamma_{ab}(\omega))_{a,b=1}^m$, with entries in seconds$^{-1}$, that is positive semidefinite in the explicit sense that $\Gamma(\omega)=\Gamma(\omega)^*$ and $v^*\Gamma(\omega)v\geq0$ for every $v\in\mathbb C^m$, and require the thermal balance relation

$$\gamma_{ab}(-\omega)=e^{-\beta\hbar\omega}\gamma_{ba}(\omega).$$

Let $H_{\rm LS}=H_{\rm LS}^*$ be a Hermitian matrix with units joules satisfying $[H_{\rm LS},H]=0$. For dimensionless $X\in M_d(\mathbb C)$, the finite energy-resolved generator is the linear map

$$\mathcal L(X)=-\frac{i}{\hbar}[H+H_{\rm LS},X]+\sum_{\omega\in\Omega_H}\sum_{a,b=1}^{m}\gamma_{ab}(\omega)\left(S_b(\omega)X S_a(\omega)^*-\frac12\{S_a(\omega)^*S_b(\omega),X\}\right),$$

where $[A,B]=AB-BA$, $\{A,B\}=AB+BA$, and $A^*$ is the conjugate transpose. The finite sums define a linear map with units seconds$^{-1}$. This is an adopted finite effective model specification; the definition asserts no microscopic weak-coupling convergence or physical applicability.

## Definition references

[[lem-qsm-matrix-state-calculus]]

## Facts & Assumptions

**Given:** $d$, $H$, $\hbar$, the finite Hermitian family $(S_a)$, real inverse-energy parameter $\beta$, finite positive rate matrices $\Gamma(\omega)$ obeying the displayed balance relation, and commuting Hermitian $H_{\rm LS}$, all with the types and units specified in the Definition.

[F1] [[lem-qsm-matrix-state-calculus]]: a finite Hermitian matrix has finitely many real eigenvalues and pairwise orthogonal spectral projections summing to the identity; finite spectral functions are basis-independent.

## Proof

1.1 By [F1], $\operatorname{spec}(H)$ is finite and the projections $P_E$ are well-defined, pairwise orthogonal, and sum to $I_d$. Therefore $\Omega_H$ is finite and symmetric, and each $S_a(\omega)$ is a finite sum of endomorphisms of $\mathcal H$; when $m=0$ or a frequency block is empty, the corresponding sum is the zero matrix. [given, F1, algebra]

2.1 Every term in the displayed formula is a product and finite sum of matrices on $\mathcal H$, so $\mathcal L$ is a complex-linear endomorphism of $M_d(\mathbb C)$. The Hamiltonian coefficient has units joules/(joule-seconds) = seconds$^{-1}$; each dissipative term has units $\gamma_{ab}=\mathrm{s}^{-1}$ times dimensionless matrices. Thus the formula is a well-defined finite linear map with the stated units. [given, step 1.1, algebra] ∎

## Remarks

The sign convention makes $S_a(\omega)$ lower the system energy by $\hbar\omega$ when $\omega>0$: it maps the $E'$ eigenspace to the $E$ eigenspace with $E'-E=\hbar\omega$. The rate-matrix transpose in the thermal balance relation is tied to the displayed placement of $S_b(\omega)$ and $S_a(\omega)^*$ in the generator. No bath limit is part of this mathematical definition.
