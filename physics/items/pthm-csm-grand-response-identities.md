---
id: pthm-csm-grand-response-identities
kind: physics-theorem
title: "Grand responses in beta and chemical potential"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-grand-preparation
  - thm-csm-exponential-normalization-covariance
  - def-td-si-quantities
dependency_roles:
  post-csm-grand-preparation: physical-assumption
  thm-csm-exponential-normalization-covariance: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
physical_scope: "Grand preparation on a countable disjoint union with local uniform exponential-moment envelopes for energy and particle number; all derivatives are finite-model derivatives."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.4"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

For the grand preparation [[post-csm-grand-preparation]], write
let $\mathcal G$ and $m^{\rm phys}$ be its disjoint-union state space and
reference, define $H(N,z):=H_N(z)$ on sector $\Gamma_N$, and define the
particle-number statistic $\mathsf N(N,z):=N$. Write $m_N$ for
$m_N^{\rm phys}$ in the sector sum, so
$$\Xi(\beta,\mu)=\sum_N\int e^{-\beta H_N+\beta\mu N}\,dm_N.$$
Here $\beta>0$ and $\mu$ has units J per particle. Let
$S_H:=\{(N,z)\in\mathcal G:H_N(z)<\infty\}$, restrict $m^{\rm phys}$ to this
measurable set, and compute energy moments there; the grand weight is zero
outside it and the restricted measure is sigma-finite. Assume the local
envelopes of [[thm-csm-exponential-normalization-covariance]] hold uniformly
on this restricted space for its finite-valued sufficient statistics $H$
and $\mathsf N$; expectations written $\langle N\rangle$ refer to
$\mathsf N$.
Then
$$\partial_\eta\log\Xi=\langle N\rangle,\quad \partial_\eta^2\log\Xi=\operatorname{Var}(N),\quad \eta=\beta\mu,$$
and, at fixed $\mu$,
$$-\partial_\beta\log\Xi=\langle H-\mu N\rangle,\qquad \partial_\mu\langle N\rangle=\beta\operatorname{Var}(N),\qquad \partial_\beta\langle N\rangle|_\mu=-\operatorname{Cov}(N,H-\mu N).$$
The covariance is computed in the full number-exchanging state. No
fixed-$N$ derivative or thermodynamic-limit identification is implied.

## Facts & Assumptions

**Given:** A finite positive grand normalizer and uniform local exponential moment bounds for the joint energy and number variables.

[A1] The adopted grand density is $\Xi^{-1}e^{-\beta(H-\mu N)}$ with positive finite normalizer ([[post-csm-grand-preparation]]). In addition, assume the local common exponential-moment envelopes on $S_H$ stated above; these are hypotheses of this theorem, not consequences of the preparation postulate.

[A2] $\beta=(k_BT)^{-1}>0$ and $\mu$ is held fixed in the $\beta$ response ([[def-td-si-quantities]]).

[F1] Under common envelopes, logarithmic derivatives are means and covariances ([[thm-csm-exponential-normalization-covariance]]).

## Proof

**Given:** [A1]–[A2] and the grand-law and exponential-differentiation interfaces [F1].

1.1 Set $\theta=(-\beta,\eta)$ and $X=(H|_{S_H},\mathsf N)$ in [F1] on the restricted reference space. Its first and second derivatives give $\partial_\eta\log\Xi=\langle N\rangle$, $\partial_\eta^2\log\Xi=\operatorname{Var}(N)$, and $\partial_\beta\log\Xi|_\eta=-\langle H\rangle$. At fixed $\mu$, the coordinate relation $\eta=\beta\mu$ makes the derivative direction $(-1,\mu)$ in $(\theta_H,\theta_N)$ coordinates, so $\partial_\beta\log\Xi|_\mu=-\langle H-\mu N\rangle$. [A1, F1, algebra]

2.1 At fixed $\beta$, $\partial_\mu=\beta\partial_\eta$, so $\partial_\mu\langle N\rangle=\beta\partial_\eta^2\log\Xi =\beta\operatorname{Var}(N)$. At fixed $\mu$, differentiating the first mean along direction $(-1,\mu)$ gives $\partial_\beta\langle N\rangle|_\mu =-\operatorname{Cov}(N,H)+\mu\operatorname{Var}(N) =-\operatorname{Cov}(N,H-\mu N)$. All terms are finite by [A1], proving the responses. [A1, A2, F1, step 1.1, algebra] ∎

