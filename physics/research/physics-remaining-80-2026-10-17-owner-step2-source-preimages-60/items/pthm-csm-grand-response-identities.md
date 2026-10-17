---
id: pthm-csm-grand-response-identities
kind: physics-theorem
title: "Grand responses in beta and chemical potential"
status: draft
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
$$\Xi(\beta,\mu)=\sum_N\int e^{-\beta H_N+\beta\mu N}\,dm_N,$$
where $\beta>0$, $\mu$ has units J per particle, and the local envelopes of
[[thm-csm-exponential-normalization-covariance]] hold uniformly on the
disjoint-union reference space for the sufficient statistics $H$ and $N$.
Then
$$\partial_\eta\log\Xi=\langle N\rangle,\quad \partial_\eta^2\log\Xi=\operatorname{Var}(N),\quad \eta=\beta\mu,$$
and, at fixed $\mu$,
$$-\partial_\beta\log\Xi=\langle H-\mu N\rangle,\qquad \partial_\mu\langle N\rangle=\beta\operatorname{Var}(N),\qquad \partial_\beta\langle N\rangle|_\mu=-\operatorname{Cov}(N,H-\mu N).$$
The covariance is computed in the full number-exchanging state. No
fixed-$N$ derivative or thermodynamic-limit identification is implied.

## Facts & Assumptions

**Given:** A finite positive grand normalizer and uniform local exponential
moment bounds for the joint energy and number variables.

[A1] The adopted grand density is $\Xi^{-1}e^{-\beta(H-\mu N)}$ and its
normalizer and moments meet the stated envelope hypotheses
([[post-csm-grand-preparation]]).

[A2] $\beta=(k_BT)^{-1}>0$ and $\mu$ is held fixed in the $\beta$ response
([[def-td-si-quantities]]).

[F1] Under common envelopes, logarithmic derivatives are means and
covariances ([[thm-csm-exponential-normalization-covariance]]).

## Proof

**Given:** [A1]–[A2] and the grand-law and exponential-differentiation
interfaces [F1].

1.1 Set $\theta=(-\beta,\eta)$ and $X=(H,N)$ in [F1]. Its first and second derivatives give $\partial_\eta\log\Xi=\langle N\rangle$, $\partial_\eta^2\log\Xi=\operatorname{Var}(N)$, and $\partial_\beta\log\Xi|_\eta=-\langle H\rangle$. At fixed $\mu$, the coordinate relation $\eta=\beta\mu$ makes the derivative direction $(-1,\mu)$ in $(\theta_H,\theta_N)$ coordinates, so $\partial_\beta\log\Xi|_\mu=-\langle H-\mu N\rangle$. [A1, F1, algebra]

2.1 At fixed $\beta$, $\partial_\mu=\beta\partial_\eta$, so $\partial_\mu\langle N\rangle=\beta\partial_\eta^2\log\Xi =\beta\operatorname{Var}(N)$. At fixed $\mu$, differentiating the first mean along direction $(-1,\mu)$ gives $\partial_\beta\langle N\rangle|_\mu =-\operatorname{Cov}(N,H)+\mu\operatorname{Var}(N) =-\operatorname{Cov}(N,H-\mu N)$. All terms are finite by [A1], proving the responses. [A1, A2, F1, step 1.1, algebra] ∎

