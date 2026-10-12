---
id: prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium
kind: proposition
title: "Linearisation of the mechanical system at an equilibrium: M(q_0) xi'' + D²U(q_0) xi = 0, and the small-oscillation quadratic model"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-mechanical-vector-field-and-energy-in-a-chart, lem-cm-strict-minimum-has-positive-semidefinite-hessian, thm-cm-quadratic-mode-decomposition, cor-hessian-is-symmetric, def-hessian-and-euclidean-critical-point, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, cor-inverse-matrix-by-adjugate, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-matrix-product-and-identity-matrix]
dependency_roles:
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  lem-cm-strict-minimum-has-positive-semidefinite-hessian: mathematical-premise
  thm-cm-quadratic-mode-decomposition: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 8.6, formulas (8.76)-(8.77): linearisation of the potential at a critical point, M q'' + W q = 0 with W the Hessian"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 2.6, equations (2.113)-(2.116): expansion of the equation of motion about an equilibrium"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, let $M:\Omega\to M_n(\mathbb R)$ be a $C^2$ field of symmetric positive definite matrices, let $U:\Omega\to\mathbb R$ be $C^2$, and let $q_0\in\Omega$ be a mechanical equilibrium, that is $\nabla U(q_0)=0$ ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]). Let $G$ be the mechanical vector field on $\Omega\times\mathbb R^n$. Then:

1. $G$ is totally differentiable at $(q_0,0)$ ([[def-total-derivative-in-euclidean-space]]) and, writing $D^2U(q_0)$ for the Hessian matrix ([[def-hessian-and-euclidean-critical-point]]),

$$DG(q_0,0)(\delta q,\delta v)=\Bigl(\delta v,\ -M(q_0)^{-1}D^2U(q_0)\,\delta q\Bigr)\qquad(\delta q,\delta v\in\mathbb R^n);$$

2. consequently the linearised equation at the equilibrium is

$$\xi''=-M(q_0)^{-1}D^2U(q_0)\,\xi,\qquad\text{equivalently}\qquad M(q_0)\xi''+D^2U(q_0)\,\xi=0,$$

a constant-coefficient system whose mass matrix $M(q_0)$ is symmetric positive definite and whose stiffness matrix $D^2U(q_0)$ is symmetric ([[cor-hessian-is-symmetric]]);
3. if in addition $q_0$ is a strict local minimum of $U$, then $K:=D^2U(q_0)$ is non-negative, so the hypotheses of [[thm-cm-quadratic-mode-decomposition]] are satisfied by $M(q_0)$ and $K$, and the linearised system is exactly the constant-coefficient quadratic system of that theorem with mass matrix $M(q_0)$ and stiffness $K$; its modes are the normal modes of the linearisation.

## Facts & Assumptions

**Given:** The $C^2$ kinetic metric field $M$, the $C^2$ potential $U$, the equilibrium $q_0$, and the vector field $G(q,v)=\bigl(v,H(q,v)\bigr)$ with $H(q,v)=M(q)^{-1}\bigl(\tfrac12\nabla_qf(q,v)-(D_qM(q)[v])v-\nabla U(q)\bigr)$, $f(q,v)=v^{\mathsf T}M(q)v$.

[F1] Regularity: under the stated hypotheses $G$ is of class $C^1$ on $\Omega\times\mathbb R^n$ (the inverse $M(q)^{-1}$ has entries polynomial in the entries of $M$ divided by the nonvanishing continuous function $\det M(q)$), hence totally differentiable at every point ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]], [[cor-inverse-matrix-by-adjugate]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] At $(q_0,0)$: $\nabla_qf(q_0,0)=0$ and its $q$-derivative vanishes, because $\partial_k(v^{\mathsf T}M(q)v)=v^{\mathsf T}\partial_kM(q)v$ is a quadratic form in $v$ vanishing identically at $v=0$; similarly $(D_qM(q)[v])v=\sum_kv_k\partial_kM(q)v$ is quadratic in $v$, so it and both of its first partial derivatives vanish at $v=0$ ([[def-jacobian-matrix-and-gradient]], [[def-euclidean-inner-product]], [[def-matrix-product-and-identity-matrix]]).

[F3] At the equilibrium $\nabla U(q_0)=0$ and the total derivative of $\nabla U$ is the Hessian matrix $D^2U(q_0)$, symmetric ([[def-hessian-and-euclidean-critical-point]], [[cor-hessian-is-symmetric]], [[def-total-derivative-in-euclidean-space]]).

[F4] At a strict local minimum, $\nabla U(q_0)=0$ and $D^2U(q_0)$ is non-negative ([[lem-cm-strict-minimum-has-positive-semidefinite-hessian]]); and the constant-coefficient system $M\xi''+K\xi=0$ with $M$ symmetric positive definite and $K$ symmetric non-negative is decoupled by [[thm-cm-quadratic-mode-decomposition]].

## Proof

**Proof technique:** direct; differentiate the explicit components of $G$ at the equilibrium and substitute.

1.1 The linearisation of $G$ at $(q_0,0)$ is $D G(q_0,0)(\delta q,\delta v)=\bigl(\delta v,\ D_qH(q_0,0)\delta q+D_vH(q_0,0)\delta v\bigr)$. We compute the two partial derivatives of $H=M^{-1}B$ with $B(q,v):=\tfrac12\nabla_qf(q,v)-(D_qM(q)[v])v-\nabla U(q)$. [given, F1, algebra]

2.1 At $(q_0,0)$, $B(q_0,0)=\tfrac12\nabla_qf(q_0,0)-0-\nabla U(q_0)=0$ by [F2] and the equilibrium condition. Hence $$D_qH(q_0,0)\delta q=D_q(M^{-1})(q_0)[\delta q]\,B(q_0,0)+M(q_0)^{-1}D_qB(q_0,0)\delta q=M(q_0)^{-1}D_qB(q_0,0)\delta q,$$ and by [F2] and [F3] the derivative of $B$ in $q$ at $(q_0,0)$ is $-\tfrac12\cdot0+0-D^2U(q_0)=-D^2U(q_0)$. Hence $D_qH(q_0,0)=-M(q_0)^{-1}D^2U(q_0)$. [step 1.1, F2, F3, algebra]

2.2 Similarly $D_vH(q_0,0)=M(q_0)^{-1}D_vB(q_0,0)$ because $B(q_0,0)=0$ again kills the derivative of $M^{-1}$ along $v$; and $D_vB(q_0,0)=0$ because both $\tfrac12\nabla_qf$ and $(D_qM(q)[v])v$ are quadratic in $v$ with vanishing first $v$-derivative at $v=0$ [F2]. Therefore $DG(q_0,0)(\delta q,\delta v)=(\delta v,-M(q_0)^{-1}D^2U(q_0)\delta q)$, which is clause 1. [step 1.1, 2.1, F2, algebra]

2.3 Clause 2: the linearised first-order system is $\xi'=\eta$, $\eta'=-M(q_0)^{-1}D^2U(q_0)\xi$; eliminating $\eta$ and multiplying by the invertible matrix $M(q_0)$ gives $M(q_0)\xi''+D^2U(q_0)\xi=0$. The matrix $D^2U(q_0)$ is symmetric by [F3], and $M(q_0)$ is symmetric positive definite by hypothesis; the stiffness $K:=D^2U(q_0)$ need not be non-negative, and no normal-mode conclusion is drawn at this point. [step 1.1, 2.2, F3, algebra]

3.1 Clause 3: if $q_0$ is a strict local minimum, [F4] shows that $K=D^2U(q_0)$ is non-negative; with $M=M(q_0)$ the hypotheses of the quadratic-mode theorem are exactly satisfied (symmetric positive definite mass and symmetric non-negative stiffness), and its clauses describe the normal modes of the linearisation. [step 2.3, F4] ∎

## Remarks

- The linearisation is a mathematical object: it is the derivative of the model field at the equilibrium, and the replacement of the nonlinear system by its linearisation is an approximation whose error is not controlled here. In particular clause 3 does not assert that the nonlinear system's solutions remain close to the normal modes for all time; the exact quadratic calculation alone gives no long-time error bound.

- If the equilibrium is not a minimum, $D^2U(q_0)$ may have positive and negative eigenvalues; the linearised modes then include real exponential directions. Stability conclusions from such a linearisation are the subject of [[thm-cm-exponential-stability-by-a-lyapunov-quadratic-form]] and [[thm-cm-instability-of-a-hyperbolic-saddle]], which require hyperbolicity and do not apply to the pure oscillation case of clause 3.
