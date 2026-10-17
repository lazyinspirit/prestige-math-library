---
id: pthm-csm-harmonic-ensemble
kind: physics-theorem
title: "Confined coupled quadratic canonical systems"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-examples-ensemble-preparations
  - thm-csm-examples-quadratic-covariance
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  thm-csm-examples-quadratic-covariance: mathematical-premise
physical_scope: "Finite classical continuous canonical model with positive diagonal mass matrix, strictly positive stiffness matrix, fixed positive action reference and beta>0; no unpinned zero mode or empirical equilibration claim."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §2.2.1, equipartition of quadratic degrees of freedom"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 14, IV.G (Fall 2013)"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/89259a8fd183acfaec06922c88a6024b_MIT8_333F13_Lec14.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $M=\operatorname{diag}(m_1,\ldots,m_n)$ with $m_i>0$ in kg, and let $K$ be a real symmetric positive-definite stiffness matrix with entries in J m$^{-2}$. For displacement $q\in\mathbb R^n$ in metres and momentum $p\in\mathbb R^n$ in kg m s$^{-1}$, define
$$H(q,p)=\tfrac12p^{\mathsf T}M^{-1}p+\tfrac12q^{\mathsf T}Kq.$$
Adopt the canonical probability density proportional to $e^{-\beta H}$ relative to $dq\,dp/h_0^n$, where $\beta>0$ has units J$^{-1}$ and the fixed action reference $h_0>0$ has units J s. Under the preparation of [[post-csm-examples-ensemble-preparations]], the dimensionless partition function and moments are
$$Z=\left(\frac{2\pi}{\beta h_0}\right)^n\sqrt{\frac{\det M}{\det K}},\quad \mathbb E[q]=\mathbb E[p]=0,\quad \mathbb E[qq^{\mathsf T}]=\beta^{-1}K^{-1},\quad \mathbb E[pp^{\mathsf T}]=\beta^{-1}M,\quad \mathbb E[qp^{\mathsf T}]=0.$$
The model mean energy is $U=\mathbb E[H]=n/\beta$ and, with $\beta=(k_BT)^{-1}$, its fixed-volume heat capacity is $C_V=nk_B$.

## Facts & Assumptions

**Given:** $n\ge1$, $M$ positive diagonal, $K$ symmetric positive definite, $\beta>0$, fixed $h_0>0$, and the displayed continuous-coordinate canonical model.

[F1] [[post-csm-examples-ensemble-preparations]]: in each named model with finite positive $Z$, the canonical probability is $Z^{-1}e^{-\beta H}$ relative to the specified reference; $U=\mathbb E H$ and the fixed-reference thermodynamic interpretation is adopted separately from the probability preparation.

[F2] [[thm-csm-examples-quadratic-covariance]]: for a symmetric positive-definite quadratic form on $\mathbb R^n$, the normalized Gaussian integral is $(2\pi/\beta)^{n/2}(\det K)^{-1/2}$, with mean zero and covariance $\beta^{-1}K^{-1}$.

[A1] The canonical density is a model preparation, not a claim that an isolated trajectory equilibrates or that a laboratory realizes this law.

## Proof
1.1 By the preparation [F1], the phase-space weight is $e^{-\beta p^{\mathsf T}M^{-1}p/2}e^{-\beta q^{\mathsf T}Kq/2}$. Applying [F2] to the $q$ factor gives normalization $(2\pi/\beta)^{n/2}(\det K)^{-1/2}$ and covariance $\beta^{-1}K^{-1}$. [given, F1, F2, algebra]



1.2 Since $M$ is positive diagonal, the substitution $u=M^{-1/2}p$ has Jacobian $dp=(\det M)^{1/2}du$ and transforms $p^{\mathsf T}M^{-1}p$ to $|u|^2$. Applying [F2] with $K=I$ gives the momentum integral $(2\pi/\beta)^{n/2}(\det M)^{1/2}$ and covariance of $p$ equal to $\beta^{-1}M$. [given, F2, algebra]



2.1 Multiplying the two integrals from steps 1.1–1.2 and dividing by the reference factor $h_0^n$ gives $Z=(2\pi/(\beta h_0))^n\sqrt{\det M/\det K}$. The normalized factors are independent; each is even, so their means and cross covariance vanish, while their individual covariances are those in steps 1.1–1.2. [A1, step 1.1, step 1.2, algebra]



3.1 By [F1], taking the expectation of $H$ and summing the diagonal traces of the two covariance identities gives $$U=\tfrac12\mathbb E[p^{\mathsf T}M^{-1}p]+\tfrac12\mathbb E[q^{\mathsf T}Kq]=\frac{n}{2\beta}+\frac{n}{2\beta}=\frac{n}{\beta}.$$ The adopted relation $\beta^{-1}=k_BT$ makes $U=nk_BT$, hence $C_V=(\partial U/\partial T)_{V,M,K}=nk_B$. [A1, F1, step 1.1, step 1.2, algebra] ∎

## Remarks

Positive definiteness is a confinement condition. If $K$ has a translation zero mode, the full-space configurational integral diverges and this normalized ensemble does not exist without an additional constraint or confinement.

