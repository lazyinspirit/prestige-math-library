---
id: cex-fd-spin-sensitive-stress
kind: counterexample
title: Spin-sensitive velocity-gradient stress violates objectivity
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-quantity-and-frame-conventions
  - lem-fd-observer-calculus
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-observer-calculus: mathematical-premise
physical_scope: >-
  Smooth Newtonian spatial kinematics used to test a tensor-valued constitutive
  response under time-dependent rigid observer changes. The candidate law is
  not asserted to be an admissible or empirically realized fluid stress.
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "MIT OpenCourseWare 8.09, Advanced Classical Mechanics, full lecture notes"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
proof_strategy: direct
verification:
  precheck: pending
---

## Statement refuted

For every smooth velocity field $u:I\times\mathbb R^3\to\mathbb R^3$ and every constant dynamic-viscosity coefficient $\mu>0$ in Pa s, the candidate tensor response $\tau=\mu L$, where $L_{ij}=\partial_j u_i$, is objective under every $C^2$ rigid observer change $t^*=t,\ x^*=Q(t)x+c(t)$. Here objectivity requires the responses at corresponding events to satisfy $\tau^*(t,x^*)=Q(t)\tau(t,x)Q(t)^T$, with $\tau^*=\mu L^*$ computed from the transformed velocity.

## Statement references

[MIT OpenCourseWare 8.09, full lecture notes, §1.1 (inertial and rotating observers)](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[David Tong, Fluid Mechanics, Part II, §§3.1–3.1.1 (stress tensor and Newtonian rate-of-strain models)](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Facts & Assumptions

**Given:** The stated tensor transformation criterion, the velocity-gradient convention $L_{ij}=\partial_j u_i$, and the stated observer transformation.

[F1] [[def-fd-quantity-and-frame-conventions]]: a rigid observer has $x^*=Q(t)x+c(t)$ with $Q(t)\in\mathrm{SO}(3)$; spatial tensor components must transform by $S^*=QSQ^T$ for an objective response. The velocity-gradient components are $L_{ij}=\partial_j u_i$, and $\mu$ has units Pa s.

[F2] [[lem-fd-observer-calculus]]: for $C^2$ $Q(t)\in\mathrm{SO}(3)$ and $c(t)$, the transformed velocity at corresponding points is $u^*(t,x^*)=Q'(t)x+Q(t)u(t,x)+c'(t)$, and $L^*=QLQ^T+Q'Q^T$; the complete statement also gives the objective transformation of $D$ and the observer-spin term in $W$. The live draft carrier and complete proof are present and were inspected; its Step-1 readiness record is missing, so the formula is used conditionally.

## Counterexample

**Given:** Choose a nonzero constant skew-symmetric matrix $\Omega\in\mathbb R^{3\times3}$, with units s$^{-1}$, and the smooth rigid-rotation field $u(t,x)=\Omega x$. Let $\mu>0$ be constant.

1.1 By the velocity-gradient convention [F1], in the original observer $L=\nabla u=\Omega$, so the candidate response is $\tau=\mu\Omega\ne0$. Define $Q(t)=\exp(-\Omega t)$. The matrix-exponential power series and $\Omega^T=-\Omega$ give $Q'=-\Omega Q=-Q\Omega$, $Q^T=Q^{-1}$, and $Q(0)=I_3$. The matrix $Q(t)$ is continuous and orthogonal, so $\det Q(t)\in\{-1,1\}$ is continuous; since $I=\mathbb R$ is connected and $\det Q(0)=1$, $\det Q(t)=1$ for all $t$. Thus $Q(t)\in\mathrm{SO}(3)$. [F1, given, algebra]

2.1 Take the rigid observer $x^*=Q(t)x$, $c=0$. By [F2], its velocity is $u^*=Qu+Q'x=Q\Omega x-\Omega Qx=0$, because $Q\Omega=\Omega Q$. Thus $L^*=0$ and the same candidate law gives $\tau^*=0$. [F2, step 1.1, algebra]

3.1 Objectivity from [F1] would instead require $\tau^*=Q\tau Q^T=\mu Q\Omega Q^T=\mu\Omega\ne0$, since $Q$ commutes with $\Omega$. This contradicts step 2.1, so the candidate $\tau=\mu L$ is not objective. The example tests a tensor law and makes no claim that it satisfies a separate angular-momentum or empirical admissibility condition. [F1, step 1.1, step 2.1, algebra] ∎
