---
id: ex-nrqmx-driven-two-level-floquet
kind: example
domain: mathematics
library: mathematics
title: Commuting longitudinal drive
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - def-countable-choice
  - thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
  - thm-nrqmx-finite-floquet-normal-form
  - def-nrqmx-finite-hermitian-matrix-exponential
  - lem-nrqmx-finite-hermitian-matrix-exponential
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  thm-nrqmx-finite-floquet-normal-form: mathematical-premise
  def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  lem-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Sections II-III for the Floquet normal form and driven two-level examples, and Section IV for the Fourier-sector representation.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Sections 2.1-2.3 for Floquet states, period propagation, and quasienergy conventions; the commuting longitudinal calculation is supplied locally.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Assume Countable Choice. On $\mathbb C^2$ let $\sigma_z=\operatorname{diag}(1,-1)$, choose real $E_0,A$, and choose $\hbar>0$, $\omega>0$, and $T=2\pi/\omega$. For $H(t)=(E_0+A\cos(\omega t))\sigma_z$, the unique propagator from time $0$ is
$$U(t,0)=\exp\!\left[-\frac{i}{\hbar}\left(E_0t+\frac{A}{\omega}\sin(\omega t)\right)\sigma_z\right].$$
One Floquet normal form is $H_F=E_0\sigma_z$ and $P(t)=\exp[-iA\sin(\omega t)\sigma_z/(\hbar\omega)]$.

## Example references

[[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]

[[thm-nrqmx-finite-floquet-normal-form]]

[[def-nrqmx-finite-hermitian-matrix-exponential]]

## Facts & Assumptions

**Given:** Countable Choice, $E_0,A\in\mathbb R$, $\hbar>0$, $\omega>0$, $T=2\pi/\omega$, and $\sigma_z=\operatorname{diag}(1,-1)$.

[A1] Countable Choice is assumed by the bounded-dynamics theorem used for uniqueness ([[def-countable-choice]]).

[F1] The scalar derivatives are $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$, and sine and cosine have period $2\pi$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F2] [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]] gives uniqueness for a norm-continuous bounded Hermitian matrix family; [[def-nrqmx-finite-hermitian-matrix-exponential]] and [[lem-nrqmx-finite-hermitian-matrix-exponential]] give the finite exponential's definition, derivative, and group law.

[F3] [[thm-nrqmx-finite-floquet-normal-form]] defines the Floquet representation as $U(t,0)=P(t)e^{-itH_F/\hbar}$ with $P$ unitary and $T$-periodic.

[F4] The chain rule and the scalar sine derivative give $(\sin(\omega t))'=\omega\cos(\omega t)$ ([[thm-chain-rule-for-total-derivatives]], [[thm-sine-and-cosine-derivatives]]).

## Verification

**Given:** [A1], [F1]–[F4], and the matrices and parameters in the Statement.

1.1 Put $F(t)=E_0t+(A/\omega)\sin(\omega t)$. By [F1] and [F4], $F'(t)=E_0+A\cos(\omega t)$. The diagonal entries of $\exp[-iF(t)\sigma_z/\hbar]$ are $e^{-iF(t)/\hbar}$ and $e^{iF(t)/\hbar}$; differentiating them using [F2] gives $i\hbar\,\partial_tU(t,0)=F'(t)\sigma_zU(t,0)=H(t)U(t,0)$. At $t=0$ the exponential is $I_2$, so uniqueness in [F2] identifies it with the propagator. [A1, F1, F2, F4, algebra]

2.1 The finite exponential group law in [F2] splits $U(t,0)=e^{-iA\sin(\omega t)\sigma_z/(\hbar\omega)}e^{-itE_0\sigma_z/\hbar}$. Thus $H_F=E_0\sigma_z$ and the stated $P(t)$ give the required factorization. The matrix exponential is unitary by [F2], and $P(t+T)=P(t)$ by the $2\pi$ period in [F1]. Hence this is a Floquet normal form with quasienergies $E_0$ and $-E_0$, each understood modulo $\hbar\omega$. [F1, F2, F3, algebra] ∎
