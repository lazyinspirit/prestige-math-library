---
id: lem-cm-energy-conservation-for-the-mechanical-system
kind: lemma
title: "Energy is conserved along solutions of the mechanical system with a configuration-dependent kinetic metric"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-mechanical-vector-field-and-energy-in-a-chart, thm-chain-rule-for-total-derivatives, def-vector-valued-derivative-and-integral, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, lem-finite-sum-laws, thm-algebra-of-derivatives, def-interval, cor-zero-derivative-implies-constant]
dependency_roles:
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.7, formula (6.47) and Theorem 6.16: the energy E = (1/2)v^T M v + U(q) as a constant of the motion"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 1.2.3 (energy conservation), printed pages 4-5"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, let $M:\Omega\to M_n(\mathbb R)$ be a $C^2$ field of symmetric positive definite matrices, let $U:\Omega\to\mathbb R$ be $C^2$, and let $E(q,v)=\tfrac12v^{\mathsf T}M(q)v+U(q)$ be the energy of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]]. If $q:I\to\Omega$ is a $C^2$ solution of the mechanical system $M(q)q''=\tfrac12\nabla_q(q'^{\mathsf T}M(q)q')-(D_qM(q)[q'])q'-\nabla U(q)$ on the interval $I$, then

$$\frac{d}{dt}E\bigl(q(t),q'(t)\bigr)=0\qquad(t\in I);$$

that is, the energy is constant along every solution.

## Facts & Assumptions

**Given:** The kinetic metric field $M$, the potential $U$, and a $C^2$ solution $q$ of the mechanical system, with $v:=q'$.

[F1] The mechanical system is equivalent to the Euler-Lagrange equation of $L=T-U$ and reads $M(q)q''=\tfrac12g(q,v)-(D_qM(q)[v])v-\nabla U(q)$ with $g(q,v):=\nabla_q(v^{\mathsf T}M(q)v)$ and $D_qM(q)[v]=\sum_kv_k\partial_kM(q)$ ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]).

[F2] Chain rule and product rule: for differentiable curves and differentiable functions the usual chain and product rules hold; finite sums may be differentiated termwise, and a $C^1$ map of several variables is totally differentiable ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[lem-finite-sum-laws]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-vector-valued-derivative-and-integral]]).

[F3] Gradient and inner product: $\nabla_q(v^{\mathsf T}M(q)v)$ has components $\partial_k(v^{\mathsf T}M(q)v)=v^{\mathsf T}\partial_kM(q)v$, so that

$$\bigl(\nabla_q(v^{\mathsf T}M(q)v)\bigr)\cdot v=\sum_kv_k\,v^{\mathsf T}\partial_kM(q)v=v^{\mathsf T}\bigl(\textstyle\sum_kv_k\partial_kM(q)\bigr)v=v^{\mathsf T}\bigl(D_qM(q)[v]\bigr)v$$

([[def-jacobian-matrix-and-gradient]], [[def-euclidean-inner-product]], [[lem-finite-sum-laws]], [[def-interval]]).

[F4] A continuous scalar function on an order-convex interval whose derivative vanishes at interior points is constant ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct; differentiate the energy along the solution and substitute the equation of motion.

1.1 The map $t\mapsto M(q(t))$ is $C^1$ with derivative $\frac{d}{dt}M(q(t))=\sum_kq_k'(t)\partial_kM(q(t))=D_qM(q(t))[v(t)]$, by the chain rule applied to each entry and the definition of $D_qM[q']$ [F1, F2]. [given, F1, F2]

1.2 Differentiating the potential: $\frac{d}{dt}U(q(t))=\nabla U(q(t))\cdot v(t)$ by the chain rule. [F2, F3]

2.1 Differentiating the kinetic energy: $$\frac{d}{dt}\Bigl(\tfrac12v(t)^{\mathsf T}M(q(t))v(t)\Bigr)=v^{\mathsf T}M(q)v'+\tfrac12v^{\mathsf T}\bigl(D_qM(q)[v]\bigr)v,$$ using the product rule, symmetry of $M(q)$, and step 1.1; here and below all functions are evaluated at $t$. [step 1.1, F1, F2, algebra]

3.1 Substituting the equation of motion $v'=M(q)^{-1}\bigl(\tfrac12\nabla_q(v^{\mathsf T}M(q)v)-(D_qM(q)[v])v-\nabla U(q)\bigr)$ of [F1] into step 2.1 gives $$\frac{d}{dt}\Bigl(\tfrac12v^{\mathsf T}M(q)v\Bigr)=\tfrac12v^{\mathsf T}\nabla_q\bigl(v^{\mathsf T}M(q)v\bigr)-v^{\mathsf T}\bigl(D_qM(q)[v]\bigr)v-v^{\mathsf T}\nabla U(q)+\tfrac12v^{\mathsf T}\bigl(D_qM(q)[v]\bigr)v .$$ [step 1.1, 2.1, F1, algebra]

4.1 By [F3] the first and the last terms combine as $\tfrac12v^{\mathsf T}\nabla_q(v^{\mathsf T}M(q)v)+\tfrac12v^{\mathsf T}(D_qM[v])v=v^{\mathsf T}(D_qM[v])v$, cancelling the middle term; hence $\frac{d}{dt}(\tfrac12v^{\mathsf T}M(q)v)=-v^{\mathsf T}\nabla U(q)$. Adding step 1.2, $\frac{d}{dt}E(q(t),v(t))=-v^{\mathsf T}\nabla U(q)+v^{\mathsf T}\nabla U(q)=0$ on $I$. The continuous scalar energy is constant on the interval $I$ by [F4]. [step 2.1, 1.2, 3.1, F3, F4, algebra] ∎

## Remarks

- The cancellation uses exactly the two terms produced by the configuration dependence of $M$: the derivative of the kinetic energy along the flow produces $v^{\mathsf T}(D_qM[v])v$, and substitution of the two configuration-dependent acceleration terms gives $\tfrac12v^{\mathsf T}\nabla_q(v^{\mathsf T}Mv)-v^{\mathsf T}(D_qM[v])v=-\tfrac12v^{\mathsf T}(D_qM[v])v$, cancelling the kinetic derivative term $\tfrac12v^{\mathsf T}(D_qM[v])v$. For constant $M$ the statement reduces to the familiar $\frac{d}{dt}(\tfrac12v^{\mathsf T}Mv+U)=0$.

- The lemma is a statement about the model: it does not assert that any physical system conserves energy, nor that solutions exist globally, nor that the energy is a Liapunov function for any equilibrium; those uses are made in [[thm-cm-energy-stability-of-a-strict-minimum]] under their own hypotheses.
