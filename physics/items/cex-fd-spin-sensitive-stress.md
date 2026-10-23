---
id: cex-fd-spin-sensitive-stress
kind: counterexample
title: Spin-sensitive velocity-gradient stress violates objectivity
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-quantity-and-frame-conventions
  - lem-fd-observer-calculus
  - lem-exponential-series-of-a-bounded-operator
  - thm-euclidean-space-complete
  - thm-cauchy-schwarz-and-the-euclidean-norm
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-observer-calculus: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement refuted

For every smooth velocity field $u:I\times\mathbb R^3\to\mathbb R^3$ and every constant dynamic-viscosity coefficient $\mu>0$ in Pa s, the candidate tensor response $\tau=\mu L$, where $L_{ij}=\partial_j u_i$, is objective under every $C^2$ rigid observer change $t^*=t,\ x^*=Q(t)x+c(t)$. Here objectivity requires the responses at corresponding events to satisfy $\tau^*(t,x^*)=Q(t)\tau(t,x)Q(t)^T$, with $\tau^*=\mu L^*$ computed from the transformed velocity.

## Statement references

[MIT OpenCourseWare 8.09, full lecture notes, §1.1 (inertial and rotating observers)](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[David Tong, Fluid Mechanics, Part II, §§3.1–3.1.1 (stress tensor and Newtonian rate-of-strain models)](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

## Facts & Assumptions

**Given:** The stated tensor transformation criterion, the velocity-gradient convention $L_{ij}=\partial_j u_i$, and the stated observer transformation.

[F1] [[def-fd-quantity-and-frame-conventions]]: a rigid observer has $x^*=Q(t)x+c(t)$ with $Q(t)\in\mathrm{SO}(3)$; spatial tensor components must transform by $S^*=QSQ^T$ for an objective response. The velocity-gradient components are $L_{ij}=\partial_j u_i$, and $\mu$ has units Pa s.

[F2] [[lem-fd-observer-calculus]]: let $I$ be a nonempty open interval, $U\subseteq\mathbb R^3$ open, and $\chi\in C^2(I\times U,\mathbb R^3)$ have bijective slices onto open images, $C^2$ slice inverses and positive Jacobian. For its induced velocity $u(t,\chi(t,a))=\partial_t\chi(t,a)$, and $Q\in C^2(I,\mathrm{SO}(3))$, $c\in C^2(I,\mathbb R^3)$, the transformed motion $\chi^*=Q\chi+c$ induces $u^*(t,x^*)=Q'(t)x+Q(t)u(t,x)+c'(t)$ at corresponding points, and $L^*=QLQ^T+Q'Q^T$. This remains a draft mathematical supplier used as a mathematical premise.

[F3] [[thm-euclidean-space-complete]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: Euclidean $\mathbb R^3$ is a Banach space, and rowwise Cauchy–Schwarz gives $|Mx|_2^2\le(\sum_{i,j}M_{ij}^2)|x|_2^2$, so every real $3\times3$ matrix is a bounded linear operator. [[lem-exponential-series-of-a-bounded-operator]]: for such a matrix $M$, the series $\exp(tM)=\sum_{n=0}^{\infty}t^nM^n/n!$ converges in operator norm and is $C^\infty$ in $t$, with $\exp(0M)=I_3$, $\exp((s+t)M)=\exp(sM)\exp(tM)$ and $\frac d{dt}\exp(tM)=M\exp(tM)=\exp(tM)M$.

## Counterexample

**Given:** Choose a nonzero constant skew-symmetric matrix $\Omega\in\mathbb R^{3\times3}$, with units s$^{-1}$, and the smooth rigid-rotation field $u(t,x)=\Omega x$. Let $\mu>0$ be constant.

1.1 Work on $I=\mathbb R$ and $U=\mathbb R^3$. By [F3], define $R(t)=\exp(t\Omega)$ and $Q(t)=R(-t)$. They are $C^\infty$, $Q'=-\Omega Q=-Q\Omega$, and $RQ=QR=I_3$. Transpose the convergent series term by term: transposition is continuous in operator norm since each entry obeys $|N_{ij}|\le\|N\|_{\rm op}$ and [F3] gives $\|N^T\|_{\rm op}\le3\|N\|_{\rm op}$. As $\Omega^T=-\Omega$, this yields $R^T=Q$. Thus $R,Q$ are orthogonal; their continuous determinants lie in $\{-1,1\}$ and equal $1$ at zero, so connectedness of $\mathbb R$ makes them $1$ everywhere. Define $\chi(t,a)=R(t)a$. This is $C^2$, each slice is a bijection of $U$ onto $\mathbb R^3$ with $C^2$ inverse $x\mapsto Q(t)x$, $J=\det R=1>0$, and $\chi(0,a)=a$. Moreover $\partial_t\chi=\Omega R(t)a=u(t,\chi(t,a))$, so this motion induces the stated velocity and satisfies every motion hypothesis of [F2]. By [F1], $L=\Omega$ and $\tau=\mu\Omega\ne0$. [F1, F2, F3, given, algebra]

2.1 Take the rigid observer $x^*=Q(t)x$, $c=0$. By [F2], its velocity is $u^*=Qu+Q'x=Q\Omega x-\Omega Qx=0$, because $Q\Omega=\Omega Q$. Thus $L^*=0$ and the same candidate law gives $\tau^*=0$. [F2, step 1.1, algebra]

3.1 Objectivity from [F1] would instead require $\tau^*=Q\tau Q^T=\mu Q\Omega Q^T=\mu\Omega\ne0$, since $Q$ commutes with $\Omega$. This contradicts step 2.1, so the candidate $\tau=\mu L$ is not objective. The example tests a tensor law and makes no claim that it satisfies a separate angular-momentum or empirical admissibility condition. [F1, step 1.1, step 2.1, algebra] ∎
