---
id: prop-se-real-duality
kind: proposition
domain: mathematics
title: Real pairing cancellation for the linearized-adjoint pair
status: draft
deps:
  - def-se-linearized-pair
  - def-se-dirichlet-scale
  - def-se-dirichlet-laplacian
  - lem-se-real-hilbert-dualization
  - math:lem-inner-product-is-jointly-continuous
  - math:def-axiom-of-choice
  - math:lem-axiom-of-choice-implies-countable-choice
dependency_roles:
  def-se-linearized-pair: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-dirichlet-laplacian: mathematical-premise
  lem-se-real-hilbert-dualization: mathematical-premise
  math:lem-inner-product-is-jointly-continuous: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:lem-axiom-of-choice-implies-countable-choice: mathematical-premise
formulation_deps:
  - def-se-linearized-pair
  - def-se-dirichlet-scale
  - def-se-dirichlet-laplacian
  - math:def-axiom-of-choice
argument_deps:
  - def-se-linearized-pair
  - def-se-dirichlet-scale
  - def-se-dirichlet-laplacian
  - lem-se-real-hilbert-dualization
  - math:lem-inner-product-is-jointly-continuous
  - math:def-axiom-of-choice
  - math:lem-axiom-of-choice-implies-countable-choice
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 19, proof of Theorem 1.4
dependency_level: 10
---

## Statement

Assume the Axiom of Choice and the geometry, trajectory $w$, real cutoff $\varphi$, coefficients $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$, and linearized and adjoint equations specified in the linearized-pair definition. Write $\Delta_D$ for the Dirichlet Laplacian on $L^2(\Omega)$, and $(f,g)_{\mathbb R}=\operatorname{Re}\int_\Omega f\overline g\,dx$.

Let $z,v\in C^1((0,T);L^2(\Omega))\cap C((0,T);D(\Delta_D))$, where the latter space has the graph norm $\|u\|_{D(\Delta_D)}=(\|u\|_2^2+\|\Delta_Du\|_2^2)^{1/2}$. Suppose that $h(t)\in L^2(\Omega)$ and that, for every $t\in(0,T)$, the two equations hold in $L^2(\Omega)$ with control $h(t)$. Then

$$\frac{d}{dt}(z(t),v(t))_{\mathbb R}=(-i\varphi h(t),v(t))_{\mathbb R}\quad(0<t<T).$$

In particular the Laplacian and both potential contributions cancel. The displayed minus sign on the conjugate-potential term in the adjoint equation supplies the sign needed for this cancellation.

## Statement references

[[def-se-linearized-pair]]

[[def-se-dirichlet-scale]]

[[def-se-dirichlet-laplacian]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

[F1] The systems in [[def-se-linearized-pair]] have $i z_t+\Delta_Dz+V_1z+V_2\overline z=\varphi h$ and $i v_t+\Delta_Dv+V_1v-V_2\overline v=0$. The same definition supplies real $V_1$, essentially bounded $V_1,V_2$ at each time, and the stated real pairing.

[F2] Under the stated Choice assumption [[math:def-axiom-of-choice]], [[def-se-dirichlet-laplacian]] supplies the self-adjoint Dirichlet realization on $D(\Delta_D)=H^2(\Omega)\cap H^1_0(\Omega)$; [[def-se-dirichlet-scale]] fixes the first-variable-linear $L^2$ pairing. Hence $\langle\Delta_D f,g\rangle=\langle f,\Delta_D g\rangle$ for $f,g\in D(\Delta_D)$.

[F3] The assumed full Axiom of Choice implies Countable Choice by [[math:lem-axiom-of-choice-implies-countable-choice]], so the Countable Choice hypothesis of [[lem-se-real-hilbert-dualization]] is satisfied. For real essentially bounded $a$ and complex essentially bounded $b$, [[lem-se-real-hilbert-dualization]] gives the real adjoint of $L:f\mapsto i(af+b\overline f)$ as $L^*_{\mathbb R}g=-iag+ib\overline g$, so $(Lf,g)_{\mathbb R}+(f,-L^*_{\mathbb R}g)_{\mathbb R}=0$.

[F4] The inner-product continuity estimate of [[math:lem-inner-product-is-jointly-continuous]] implies continuity of the $L^2$ pairing under norm convergence in each argument.

## Proof

[F1] The systems in [[def-se-linearized-pair]] have $i z_t+\Delta_Dz+V_1z+V_2\overline z=\varphi h$ and $i v_t+\Delta_Dv+V_1v-V_2\overline v=0$. The same definition supplies real $V_1$, essentially bounded $V_1,V_2$ at each time, and the stated real pairing.

[F2] Under the stated Choice assumption [[math:def-axiom-of-choice]], [[def-se-dirichlet-laplacian]] supplies the self-adjoint Dirichlet realization on $D(\Delta_D)=H^2(\Omega)\cap H^1_0(\Omega)$; [[def-se-dirichlet-scale]] fixes the first-variable-linear $L^2$ pairing. Hence $\langle\Delta_D f,g\rangle=\langle f,\Delta_D g\rangle$ for $f,g\in D(\Delta_D)$.

[F3] The assumed full Axiom of Choice implies Countable Choice by [[math:lem-axiom-of-choice-implies-countable-choice]], so the Countable Choice hypothesis of [[lem-se-real-hilbert-dualization]] is satisfied. For real essentially bounded $a$ and complex essentially bounded $b$, [[lem-se-real-hilbert-dualization]] gives the real adjoint of $L:f\mapsto i(af+b\overline f)$ as $L^*_{\mathbb R}g=-iag+ib\overline g$, so $(Lf,g)_{\mathbb R}+(f,-L^*_{\mathbb R}g)_{\mathbb R}=0$.

[F4] The inner-product continuity estimate of [[math:lem-inner-product-is-jointly-continuous]] implies continuity of the $L^2$ pairing under norm convergence in each argument.



**Given:** The stated Choice assumption, geometry, trajectory, coefficients, control, and strong solutions $z,v$ satisfying the two equations in $L^2$ at every time.

**Goal:** Prove the displayed derivative identity for each $t\in(0,T)$.

1.1 Fix $t\in(0,T)$. The equations give $z_t=i\Delta_Dz+i(V_1z+V_2\overline z)-i\varphi h$ and $v_t=i\Delta_Dv+iV_1v-iV_2\overline v$ in $L^2$, all evaluated at $t$. Set $L_t f=i(V_1f+V_2\overline f)$; then the potential term in $v_t$ is $-L^*_{t,\mathbb R}v$. The boundedness and reality hypotheses needed for this real adjoint hold at the fixed time. The Choice implication in F3 supplies the Countable Choice hypothesis required for this application of the dualization lemma. [F1, F3, algebra]

1.2 The difference quotient of the pairing is $(\frac{z(t+s)-z(t)}s,v(t+s))_{\mathbb R}+(z(t),\frac{v(t+s)-v(t)}s)_{\mathbb R}$. The difference quotients converge in $L^2$ to $z_t(t)$ and $v_t(t)$, and $v(t+s)\to v(t)$ in $L^2$; pairing continuity therefore gives $\frac d{dt}(z,v)_{\mathbb R}=(z_t,v)_{\mathbb R}+(z,v_t)_{\mathbb R}$. [F4, given]

1.3 Self-adjointness and the first-variable-linear convention give $\langle i\Delta_Dz,v\rangle=i\langle\Delta_Dz,v\rangle$ and $\langle z,i\Delta_Dv\rangle=-i\langle z,\Delta_Dv\rangle$; their sum is zero. Thus the two Laplacian terms have zero sum also after taking real parts. [F2, algebra]

2.1 The two potential terms sum to $(L_tz,v)_{\mathbb R}+(z,-L^*_{t,\mathbb R}v)_{\mathbb R}=0$. Substituting the equations into the product rule and using the Laplacian cancellation leaves exactly $(-i\varphi h,v)_{\mathbb R}$. Since $t$ was arbitrary, the identity holds throughout $(0,T)$. [F3, step 1.1, step 1.2, step 1.3] ∎

## Source notes

The frozen article is cited for attribution of the smooth-data identity in the proof of Theorem 1.4. The argument above uses the independent mathematical suppliers and proves the identity in the stated strong $L^2$ class. It does not assert an extension to negative-order pivot pairings or establish existence of solutions.
