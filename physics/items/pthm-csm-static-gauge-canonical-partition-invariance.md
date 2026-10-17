---
id: pthm-csm-static-gauge-canonical-partition-invariance
kind: physics-theorem
title: "Finite canonical partition is invariant under static electromagnetic gauge changes"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-csm-static-gauge-coupled-particle-model
  - post-csm-canonical-preparation
  - def-csm-phase-space-reference
  - post-csm-counting-and-physical-observables
  - def-em-gauge-transformation
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-gaussian-integral
  - def-cm01-units
dependency_roles:
  def-csm-static-gauge-coupled-particle-model: formulation-prerequisite
  post-csm-canonical-preparation: physical-assumption
  def-csm-phase-space-reference: formulation-prerequisite
  post-csm-counting-and-physical-observables: physical-assumption
  def-em-gauge-transformation: formulation-prerequisite
  def-countable-choice: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  def-cm01-units: formulation-prerequisite
physical_scope: "Finite one-particle canonical model on a bounded region with static smooth potentials and a fixed action reference; only time-independent gauge changes are covered, with no claim of field dynamics or empirical realization."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism, complete author-hosted lecture notes, §3.2.2"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
    - title: "David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.1.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
---

## Statement

Let $\Omega\subset\mathbb R^3$ be nonempty bounded open with compact
closure, $m>0$, and $q_{\rm p}\in\mathbb R$ the signed particle charge in
coulombs, as defined in [[def-csm-static-gauge-coupled-particle-model]] and
distinct from its exact elementary-charge constant $e$. Let $a_0>0$ be an
action reference and $\beta>0$ have units J$^{-1}$. Let $A,\varphi$ satisfy
the smoothness assumptions of
[[def-csm-static-gauge-coupled-particle-model]], with $\varphi$ bounded.
Adopt the canonical preparation
[[post-csm-canonical-preparation]] and the single-particle reference
convention [[post-csm-counting-and-physical-observables]] relative to
$dx\,dp/a_0^3$. Then
$$Z_\beta=\frac{1}{a_0^3}\int_\Omega\int_{\mathbb R^3}e^{-\beta H(x,p)}dp\,dx =\frac1{a_0^3}\left(\frac{2\pi m}{\beta}\right)^{3/2} \int_\Omega e^{-\beta q_{\rm p}\varphi(x)}dx$$
is finite and positive. If $\chi\in C^3$ is time-independent and
$A_\chi=A+\nabla\chi$, $\varphi_\chi=\varphi$, then the paired canonical
coordinate map $T_\chi(x,p)=(x,p+q_{\rm p}\nabla\chi(x))$ satisfies
$$Z_{\beta,\chi}=Z_\beta.$$
It carries the canonical probability to the transformed canonical
probability and leaves the expectation of every integrable measurable
observable of $(x,\pi)$ unchanged, where $\pi=p-q_{\rm p}A(x)$. The result is a
conditional prediction of the adopted static model, not an experimental
observation.

## Facts & Assumptions

**Given:** The static external-potential model, smooth time-independent gauge function, fixed action reference and canonical preparation.

[A1] $\Omega$ has finite positive volume, $\varphi$ is bounded, $m>0$, $\beta>0$, and the canonical density is the one adopted in [[post-csm-canonical-preparation]] relative to the stated phase reference ([[def-csm-phase-space-reference]]) and single-particle counting scale ([[post-csm-counting-and-physical-observables]]).

[A2] $A,\varphi$ obey the static coupling definition and gauge signs ([[def-csm-static-gauge-coupled-particle-model]], [[def-em-gauge-transformation]]); $\chi$ is time-independent $C^3$.

[F1] [[thm-gaussian-integral]] proves $\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$. Tonelli gives $\int_{\mathbb R^3}e^{-|x|^2}d^3x=\pi^{3/2}$. For $a=\beta/(2m)>0$, the linear map $u\mapsto\sqrt a\,u$ has Jacobian $a^{3/2}$, so the local scaling calculation gives $\int_{\mathbb R^3}e^{-\beta|u|^2/(2m)}d^3u=a^{-3/2}\pi^{3/2}=(2\pi m/\beta)^{3/2}$.

[F2] Tonelli permits the nonnegative position-momentum integration ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] The nonnegative change-of-variables theorem applies to a $C^1$ diffeomorphism with its absolute Jacobian under Countable Choice ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[def-countable-choice]]).

[F4] The fixed action reference $a_0$ has units of action ([[def-cm01-units]]).

## Proof

**Given:** [A1]–[A2] and the Gaussian, product-integration, unit and change-of-variables interfaces [F1]–[F4].

1.1 Put $u=p-q_{\rm p}A(x)$ in the inner integral. Translation preserves Lebesgue measure and $H=|u|^2/(2m)+q_{\rm p}\varphi(x)$. By [F1]–[F2], the displayed formula for $Z_\beta$ follows. Since $e^{-\beta q_{\rm p}\varphi}$ is bounded above and below by positive constants on finite positive-volume $\Omega$, the normalizer is finite and strictly positive. [A1, A2, F1, F2, F4, algebra]

2.1 The map $T_\chi$ has inverse $T_{-\chi}$ and derivative $$DT_\chi=\begin{pmatrix}I&0\\ q_{\rm p}D^2\chi&I\end{pmatrix},\qquad \det DT_\chi=1.$$ By the paired gauge transformation, $H_\chi(T_\chi(x,p))=|p+q_{\rm p}\nabla\chi-q_{\rm p}(A+\nabla\chi)|^2/(2m)+q_{\rm p}\varphi =H(x,p)$. Apply [F3] to the nonnegative integrand and this diffeomorphism; its unit Jacobian gives $Z_{\beta,\chi}=Z_\beta$. The same substitution carries normalized densities into one another. Moreover $(p+q_{\rm p}\nabla\chi)-q_{\rm p}(A+\nabla\chi)=p-q_{\rm p}A=\pi$, so any integrable function of $(x,\pi)$ has identical expectations in the paired states. [A2, F3, step 1.1, algebra] ∎

