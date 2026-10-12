---
id: prop-cm-quaternion-angular-velocity-reconstruction
kind: proposition
title: "Angular-velocity reconstruction from a unit-quaternion path: for $C^1$ $q:I\\to S^3$ the body angular velocity of $\\rho\\circ q$ is $\\omega=2\\varphi^{-1}(q^{-1}q')$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-cm-quaternion-rotation-map-and-cover, lem-cm-quaternion-product-rule-and-conjugation-formula, lem-cm-body-angular-velocity-of-a-rotation-path, lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity, def-quaternions, thm-quaternions-form-a-division-ring, def-euclidean-inner-product]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  lem-cm-quaternion-product-rule-and-conjugation-formula: mathematical-premise
  lem-cm-body-angular-velocity-of-a-rotation-path: mathematical-premise
  lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity: mathematical-premise
  def-quaternions: mathematical-premise
  thm-quaternions-form-a-division-ring: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.4.1, equation (91)-(92): q* (x) qdot is a pure quaternion, q* (x) qdot = Omega; Section 2.4.2, equation (99): omega = 2 Omega and qdot = (1/2) q (x) omega"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "N. Trawny and S. I. Roumeliotis, Indirect Kalman Filter for 3D Attitude Estimation (University of Minnesota, TR-2005-002), Section 1.5, equations (80)-(89): qdot = (1/2) [omega;0] (x) q for a unit quaternion and the local (body) angular rate omega"
      url: "http://mars.cs.umn.edu/tr/reports/Trawny05b.pdf"
verification:
  precheck: pass
---

## Statement

Let $I\subseteq\mathbb R$ be a nondegenerate open interval, let $q:I\to S^3$ be of class $C^1$, and let

$$R:I\longrightarrow SO(3),\qquad R(t):=\rho(q(t)),$$

be the associated rotation path, the matrix being taken in the basis $(i,j,k)$ of $\operatorname{Im}\mathbb H$ ([[def-cm-quaternion-rotation-map-and-cover]]). Then:

1. $q(t)^{-1}q'(t)=\bar q(t)q'(t)$ has real part $0$ for every $t\in I$, so it lies in $\operatorname{Im}\mathbb H$ and there is a unique vector $\omega(t)\in\mathbb R^3$ with

$$q(t)^{-1}q'(t)=\tfrac12\,\varphi\bigl(\omega(t)\bigr),$$

namely $\omega(t)=2\varphi^{-1}\bigl(q(t)^{-1}q'(t)\bigr)$, where $\varphi^{-1}:\operatorname{Im}\mathbb H\to\mathbb R^3$ is the inverse of the isomorphism in [[def-cm-quaternion-rotation-map-and-cover]]; $t\mapsto\omega(t)$ is continuous.
2. The curve $q$ solves $q'(t)=\tfrac12q(t)\,\varphi(\omega(t))$ on $I$, the matrix curve $R$ is of class $C^1$, and $R'(t)=R(t)\,\Omega_{\omega(t)}$ for every $t\in I$, where $\Omega_{\omega(t)}$ is the matrix $z\mapsto\omega(t)\times z$.
3. Consequently $\omega$ is the body angular velocity of $R$ in the sense of [[lem-cm-body-angular-velocity-of-a-rotation-path]]: $R$ is a $C^1$ rotation path whose body angular velocity is $\omega$.

## Facts & Assumptions

**Given:** The interval $I$, the $C^1$ curve $q:I\to S^3$, and the objects $\varphi,S^3,\rho$ of [[def-cm-quaternion-rotation-map-and-cover]].

[F1] $\mathbb H$ is $\mathbb R^4$ with the quaternion product; every quaternion has a unique decomposition $x=\operatorname{Re}(x)+\varphi(w)$ with $\operatorname{Re}(x)=x_0$ and $w\in\mathbb R^3$, and $\varphi$ is a linear isomorphism $\mathbb R^3\to\operatorname{Im}\mathbb H$ ([[def-quaternions]], [[def-cm-quaternion-rotation-map-and-cover]]).

[F2] For $C^1$ curves $p,q:I\to\mathbb H$ the product $pq$ is $C^1$ with $(pq)'=p'q+pq'$; for all $p,q\in\mathbb H$ one has $N(pq)=N(p)N(q)$, $\operatorname{Re}(p\bar q)=\langle p,q\rangle_2$, and $(N\circ q)'=2\operatorname{Re}(q'\bar q)$; also $\widehat{N(q)}=q\bar q=\bar q q$. Thus for $q\in S^3$ one has $q^{-1}=\bar q$ and $q\bar q=\bar q q=1_{\mathbb H}$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clauses 1-2, [[def-quaternions]], [[thm-quaternions-form-a-division-ring]]).

[F3] $q_0\in S^3$ implies $\rho(q_0)\in SO(3)$, and $\rho$ is a homomorphism on $S^3$ ([[def-cm-quaternion-rotation-map-and-cover]]).

[F4] If $\omega:I\to\mathbb R^3$ is continuous and $q:I\to\mathbb H$ is a $C^1$ solution of $q'=\tfrac12q\,\varphi(\omega(t))$ with $q(t_0)\in S^3$, then $q(I)\subseteq S^3$, $R=\rho\circ q$ is $C^1$ with $R'=R\,\Omega_\omega$, and $\omega$ is the body angular velocity of $R$ ([[lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity]] clause 1).

[F5] A $C^1$ rotation path has exactly one body angular velocity, characterized by $R'=R\,\Omega_\omega$ ([[lem-cm-body-angular-velocity-of-a-rotation-path]] clauses 2-3).

## Proof

**Proof technique:** direct; the product $q^{-1}q'$ is forced to be pure by the unit constraint, and the lift lemma of the previous item applies.

1.1 By [F2], $(N\circ q)'=2\operatorname{Re}(q'\bar q)$; since $N(q(t))=1$ for all $t$, the left side vanishes, so $\operatorname{Re}(q'\bar q)=0$. By [F1] the scalar part of a product is $\operatorname{Re}(xy)=\sum_jx_jy_j$, symmetric in the two factors, and $q^{-1}=\bar q$ on $S^3$ by [F2]; hence $\operatorname{Re}(q^{-1}q')=\operatorname{Re}(\bar qq')=\operatorname{Re}(q'\bar q)=0$, so $q^{-1}q'$ is imaginary. By the unique decomposition of [F1] there is exactly one $w(t)\in\mathbb R^3$ with $q(t)^{-1}q'(t)=\varphi(w(t))$; setting $\omega(t):=2w(t)$ gives $q^{-1}q'=\tfrac12\varphi(\omega)$ on $I$. The components of $q^{-1}q'$ are finite sums of products of the continuous components of $q,q'$, so $t\mapsto\omega(t)$ is continuous. This proves clause 1. [F1, F2, algebra]

2.1 Multiplying $q^{-1}q'=\tfrac12\varphi(\omega(t))$ on the left by $q(t)$ and using $qq^{-1}=1$ gives $q'=\tfrac12q\,\varphi(\omega(t))$ on $I$, and $\omega$ is continuous by [step 1.1]. [step 1.1, F2, algebra]

3.1 The curve $q$ satisfies the hypotheses of [F4] with the continuous $\omega$ of [step 1.1] and with $q(t_0)\in S^3$ for any fixed $t_0\in I$; the curve $R=\rho\circ q$ takes values in $SO(3)$ by [F3] and is $C^1$ with $R'=R\,\Omega_\omega$ by [F4]. By [F5] the body angular velocity of $R$ is unique, so it equals this $\omega$, which proves clauses 2 and 3. [step 2.1, F3, F4, F5] ∎

## Remarks

- The formula $\omega=2\varphi^{-1}(q^{-1}q')$ is the reconstruction formula used by the examples: from a $C^1$ path in $S^3$ one reads off the angular velocity of the associated rotation path, with no additional data and no choice of sign — replacing $q$ by $-q$ multiplies $q^{-1}q'$ by $(-1)^{-1}(-1)=1$ and leaves $\omega$ unchanged.

- The proposition only computes the body angular velocity; the spatial angular velocity belongs to the other convention recorded in [[lem-cm-body-angular-velocity-of-a-rotation-path]] and is not asserted here.
