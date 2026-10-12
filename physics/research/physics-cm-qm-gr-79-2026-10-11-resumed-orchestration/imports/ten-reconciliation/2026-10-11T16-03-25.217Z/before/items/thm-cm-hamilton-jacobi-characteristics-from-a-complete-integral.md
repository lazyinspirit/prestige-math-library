---
id: thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral
kind: theorem
title: "A complete integral produces Hamilton characteristics, the Jacobi constants, a local converse and canonical $(\\beta,\\alpha)$ labels"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-hamilton-jacobi-equation-and-complete-integral, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, thm-picard-lindelof-local-existence-and-uniqueness, def-first-order-ode-initial-value-problem-and-solution, thm-euclidean-inverse-function-theorem, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-squares-to-zero, def-smooth-differential-k-form, cor-hessian-is-symmetric, def-determinant-of-a-square-matrix, thm-determinant-of-transpose, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-invertible-euclidean-linear-map, def-matrix-product-and-identity-matrix, def-interval, def-metric-topology]
dependency_roles:
  def-cm-hamilton-jacobi-equation-and-complete-integral: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-interval: mathematical-premise
  def-metric-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.7 (from a solution W of the Hamilton-Jacobi equation, the equations q-dot = H_p with p = W_q reproduce Hamilton's second equation; the constants dW/dbeta), printed pages 121-126"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.4 (Hamilton-Jacobi theory: Jacobi's complete integral and its constants)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $J\subseteq\mathbb R$ be a nonempty open interval, let $U\subseteq\mathbb R^n$ and
$A\subseteq\mathbb R^n$ be nonempty open sets, let $H:J\times U\times\mathbb R^n\to\mathbb R$ be of
class $C^2$, and let $S:J\times U\times A\to\mathbb R$ be a $C^3$ complete integral of the
Hamilton-Jacobi equation associated with $H$ at $(t_0,q_0,\alpha_0)\in J\times U\times A$
([[def-cm-hamilton-jacobi-equation-and-complete-integral]]); write $\beta_0:=S_\alpha(t_0,q_0,\alpha_0)$.
Then:

1. (characteristics) for every $\alpha$ sufficiently close to $\alpha_0$ there is an open interval
   $I_\alpha\ni t_0$ and a curve $q:I_\alpha\to U$ with $q(t_0)=q_0$ solving
   $q'(t)=H_p\bigl(t,q(t),S_q(t,q(t),\alpha)\bigr)$, and with $p(t):=S_q(t,q(t),\alpha)$ the pair
   $(q,p)$ solves Hamilton's equations $q'=H_p$, $p'=-H_q$ on $I_\alpha$;
2. (Jacobi constants) $\beta(t):=S_\alpha(t,q(t),\alpha)$ is constant on $I_\alpha$, equal to
   $S_\alpha(t_0,q_0,\alpha)$;
3. (local converse) for $(\alpha,\beta)$ near $(\alpha_0,\beta_0)$ the equation
   $\beta=S_\alpha(t,q,\alpha)$ can be solved locally for $q=Q(t,\alpha,\beta)$, and with
   $p:=S_q(t,Q(t,\alpha,\beta),\alpha)$ the curve $t\mapsto(Q,p)$ solves Hamilton's equations;
4. (canonical labels) on the domain of the local diffeomorphism $(q,p)\mapsto(\beta,\alpha)$
   obtained by composing $(q,p)\mapsto(q,\alpha)$ with $(q,\alpha)\mapsto(\beta,\alpha)$, one has
   the two-form identity $dq\wedge dp=d\beta\wedge d\alpha$ at every fixed $t$; that is,
   $(\beta,\alpha)$ are local canonical coordinates, conjugate to $(q,p)$, in which the
   $\beta$ are constants of the motion of clause 2.

## Facts & Assumptions

**Given:** The open sets $J,U,A$, the $C^2$ Hamiltonian $H$, the $C^3$ complete integral $S$, the base point $(t_0,q_0,\alpha_0)$ and $\beta_0=S_\alpha(t_0,q_0,\alpha_0)$.

[F1] Definition of the data ([[def-cm-hamilton-jacobi-equation-and-complete-integral]]): on $J\times U\times A$, $S_t+H(t,q,S_q)=0$, $\det S_{q\alpha}(t_0,q_0,\alpha_0)\ne0$, and $S$ is $C^3$, so all second derivatives used below are continuous.

[F2] Local existence for the characteristic ODEs ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-first-order-ode-initial-value-problem-and-solution]]): the map $(t,q)\mapsto H_p(t,q,S_q(t,q,\alpha))$ is $C^1$ on a neighbourhood of $(t_0,q_0)$, so the initial value problem with $q(t_0)=q_0$ has a unique local solution on some interval $I_\alpha\ni t_0$.

[F3] Calculus ([[thm-local-coordinate-formula-for-the-exterior-derivative]], [[thm-the-exterior-derivative-squares-to-zero]], [[cor-hessian-is-symmetric]], [[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]]): for the $C^3$ function $S$ the mixed partials commute, so the second derivatives appearing in the chain-rule computations below are symmetric in their two differentiation variables; and $d(dS)=0$.

[F4] Inverse function theorem ([[thm-euclidean-inverse-function-theorem]], [[def-determinant-of-a-square-matrix]], [[thm-determinant-of-transpose]]): the mixed partials of the $C^3$ function $S$ commute, so $S_{\alpha q}=(S_{q\alpha})^{\mathsf T}$ and $\det S_{\alpha q}=\det S_{q\alpha}$ by $\det(A^{\mathsf T})=\det(A)$; since $\det S_{q\alpha}(t_0,q_0,\alpha_0)\ne0$, the map $(t,q,\alpha)\mapsto(t,S_\alpha(t,q,\alpha),\alpha)$ is a local $C^2$ diffeomorphism at the base point, so $\beta=S_\alpha(t,q,\alpha)$ can be solved locally for $q$; likewise the map $(q,p)\mapsto(q,\alpha)$ given by $p=S_q(t,q,\alpha)$ is a local diffeomorphism because its derivative is block triangular with invertible block $S_{q\alpha}$ ([[def-invertible-euclidean-linear-map]], [[def-matrix-product-and-identity-matrix]]).

## Proof

**Proof technique:** direct; differentiate the Hamilton-Jacobi equation in $q$ and in $\alpha$, use the inverse function theorem for the converse, and take $d$ of the identity $dS=p\,dq+\beta\,d\alpha-H\,dt$.

1.1 Clause 1: by [F2] take the local solution $q$ of the characteristic equation and set $p:=S_q(t,q,\alpha)$. Then $p'(t)=S_{tq}+S_{qq}q'$ by the chain rule; differentiating the Hamilton-Jacobi equation in $q$ gives $S_{tq}+H_q+H_pS_{qq}=0$ at $(t,q(t),\alpha)$; substituting $q'=H_p$ and using the symmetry of $S_{qq}$ from [F3] yields $p'=S_{tq}+S_{qq}H_p=-H_q$, while $q'=H_p$ holds by construction. Hence $(q,p)$ solves Hamilton's equations on $I_\alpha$. [F1, F2, F3, algebra]

1.2 Clause 4: from $dS=S_t\,dt+S_q\,dq+S_\alpha\,d\alpha=-H\,dt+p\,dq+\beta\,d\alpha$ and [F3], applying $d$ gives $0=dp\wedge dq+d\beta\wedge d\alpha-dH\wedge dt$ on $J\times U\times A$; pulling back along the inclusion of a time slice $\{t\}\times U\times A$ kills the $dt$ terms and yields $dq\wedge dp=d\beta\wedge d\alpha$ as forms on $U\times A$ at fixed $t$. By [F4] both $(q,\alpha)\mapsto(q,p)$ and $(q,\alpha)\mapsto(\beta,\alpha)$ are local diffeomorphisms (block triangular with invertible mixed block), so the composite $(q,p)\mapsto(\beta,\alpha)$ is a local diffeomorphism whose pullback of $d\beta\wedge d\alpha$ equals $dq\wedge dp$: $(\beta,\alpha)$ are local canonical coordinates. [F3, F4, algebra]

2.1 Clause 2: by the chain rule, $\frac{d}{dt}S_{\alpha_j}=S_{\alpha_jt}+\sum_iS_{\alpha_jq_i}q'_i =S_{t\alpha_j}+\sum_iH_{p_i}S_{q_i\alpha_j}$; differentiating the Hamilton-Jacobi equation in $\alpha_j$ gives exactly $S_{t\alpha_j}+\sum_iH_{p_i}S_{q_i\alpha_j}=0$, so $\frac{d}{dt}S_{\alpha_j}=0$ and $S_\alpha$ is constant on $I_\alpha$. [F1, F3, step 1.1, algebra]

2.2 Clause 3: by [F4], solve $\beta=S_\alpha(t,q,\alpha)$ locally as $q=Q(t,\alpha,\beta)$ near $(t_0,\alpha_0,\beta_0)$. Differentiating the identity $S_\alpha(t,Q,\alpha)=\beta$ in $t$ gives $S_{\alpha t}+S_{\alpha q}Q'=0$; differentiating the Hamilton-Jacobi equation in $\alpha$ gives $S_{\alpha t}+S_{\alpha q}H_p=0$; subtracting, $S_{\alpha q}(Q'-H_p)=0$, and $\det S_{\alpha q}\ne0$ gives $Q'=H_p$. With $p:=S_q(t,Q,\alpha)$, the computation of step 1.1 (which uses only $q'=H_p$ and the $q$-derivative of the Hamilton-Jacobi equation) gives $p'=-H_q$. [F1, F3, F4, step 1.1, algebra]

3.1 Clauses 1-4 are established; in particular a complete integral produces solutions of Hamilton's equations through its characteristics, its $\alpha$-derivatives are constants of those solutions, and its constants furnish local canonical coordinates. [step 1.1, step 2.1, step 2.2, step 1.2] ∎

## Remarks

- The mixed invertibility $\det S_{q\alpha}\ne0$ is the local no-caustic hypothesis: it is exactly what makes both the characteristic momentum map and the constants map local diffeomorphisms, and it excludes the caustics where the family of Jacobi constants fails to be a coordinate system.
- Nothing here asserts a global solution or global completeness: the theorem is local in $(t,q,\alpha)$, and the characteristic flow is only integrated on the interval supplied by [F2].
