---
id: def-cm-mechanical-vector-field-and-energy-in-a-chart
kind: definition
title: "The mechanical first-order field, Lagrangian and energy of a configuration-dependent kinetic metric in a chart"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-invertible-matrix-and-general-linear-group, def-self-adjoint-and-normal-endomorphism]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 8.6, formulas (8.76)-(8.78): the harmonic oscillator with mass matrix M and stiffness W and the decoupled system after the substitution (P,Q)=(VM^{1/2}p, VM^{-1/2}q)"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 2.6 (small oscillations and the normal-mode equations), printed pages 37-45"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, let $M:\Omega\to M_n(\mathbb R)$ be of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) with $M(q)$ symmetric and positive definite for every $q\in\Omega$, that is $v^{\mathsf T}M(q)v>0$ for every nonzero $v\in\mathbb R^n$, and let $U:\Omega\to\mathbb R$ be of class $C^2$. The matrix field $M$ is the **kinetic metric field** and $U$ the **potential** of the data in the chart $\Omega$.

Define, for $(q,v)\in\Omega\times\mathbb R^n$, the **kinetic energy**, **Lagrangian** and **energy**

$$T(q,v):=\tfrac12v^{\mathsf T}M(q)v,\qquad L(q,v):=T(q,v)-U(q),\qquad E(q,v):=T(q,v)+U(q),$$

and, for $q\in\Omega$ and $v\in\mathbb R^n$, the matrix

$$D_qM(q)[v]:=\sum_{k=1}^nv_k\,\partial_kM(q),\qquad\bigl(\partial_kM(q)\bigr)_{ij}=\partial_kM_{ij}(q).$$

The **mechanical vector field** of the data is the map

$$G:\Omega\times\mathbb R^n\longrightarrow\mathbb R^n\times\mathbb R^n,\qquad G(q,v)=\Bigl(v,\ M(q)^{-1}\bigl(\tfrac12\nabla_q(v^{\mathsf T}M(q)v)-\bigl(D_qM(q)[v]\bigr)v-\nabla U(q)\bigr)\Bigr),$$

where $\nabla_q$ and $\nabla U$ are Euclidean gradients ([[def-jacobian-matrix-and-gradient]]) and $M(q)^{-1}$ is the inverse of the positive definite matrix $M(q)$ ([[def-invertible-matrix-and-general-linear-group]], [[def-matrix-product-and-identity-matrix]]). The **mechanical system** in the chart is the first-order system

$$q'(t)=v(t),\qquad v'(t)=M(q(t))^{-1}\Bigl(\tfrac12\nabla_qf\bigl(q(t),v(t)\bigr)-\bigl(D_qM(q(t))[v(t)]\bigr)v(t)-\nabla U(q(t))\Bigr),\qquad f(q,v):=v^{\mathsf T}M(q)v .$$

A point $q_* \in\Omega$ is a **mechanical equilibrium** when $\nabla U(q_*)=0$.

## Remarks

- **Equilibria.** If $q_*\in\Omega$ is a mechanical equilibrium, then $G(q_*,0)=(0,0)$: the first component is $0$, and in the second component $\nabla_qf(q_*,0)=0$ (a quadratic form in $v$ evaluated at $v=0$), $(D_qM(q_*)[0])0=0$ and $\nabla U(q_*)=0$. Thus $(q_*,0)$ is an equilibrium of $G$ in the sense of [[def-cm-equilibrium-and-lyapunov-stability]].

- **Equivalence with the Euler-Lagrange equation.** A $C^2$ curve $q:I\to\Omega$ with velocity $v:=q'$ satisfies the Euler-Lagrange equation $\frac{d}{dt}\nabla_vL=\nabla_qL$ of the Lagrangian above if and only if $(q,v)$ solves the system $q'=v$, $v'=G_2(q,v)$. Indeed $\nabla_vL=M(q)v$, so

$$\frac{d}{dt}\bigl(M(q)q'\bigr)=M(q)q''+\bigl(D_qM(q)[q']\bigr)q',\qquad \nabla_qL=\tfrac12\nabla_q\bigl(q'^{\mathsf T}M(q)q'\bigr)-\nabla U(q),$$

and multiplying the Euler-Lagrange equation by $M(q)^{-1}$ gives the displayed second component. The computation is linear algebra plus the product rule for the matrix-valued curve $t\mapsto M(q(t))$.

- **Regularity.** Under the stated hypotheses the map $G$ is of class $C^1$ on $\Omega\times\mathbb R^n$: $M$ is $C^2$, so the maps involving $\partial_kM$, $\nabla_qf$ and $D_qM[\cdot]\,\cdot$ are $C^1$; $\nabla U$ is $C^1$ because $U$ is $C^2$; and $q\mapsto M(q)^{-1}$ is $C^1$ wherever $\det M(q)\ne0$, since $M^{-1}=\det(M)^{-1}\mathrm{adj}(M)$ has entries that are polynomial in the entries of $M$ divided by the continuous nonvanishing function $\det M$. Hence the mechanical system satisfies the Picard-Lindelöf regularity hypotheses locally.

- **Scope.** This is a mathematical chart model: $M$ is an arbitrary $C^2$ positive definite symmetric matrix field and no physical law, identification with masses, units or empirical assertion is made by the definition. The constant case $M(q)\equiv M$ reduces to $Mq''=-\nabla U(q)$, and a mechanical equilibrium is a critical point of the potential.
