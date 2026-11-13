---
id: def-expander-prereq-gradient-trajectories
kind: definition
title: Gradient trajectories and complete compact phase dynamics
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-phase-torus
  - math:def-riemannian-gradient-of-a-smooth-function
  - math:def-integral-curve-of-a-vector-field
  - math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete
  - math:def-countable-choice
  - math:lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - math:def-c-r-and-smooth-maps-between-smooth-manifolds
dependency_roles:
  def-expander-prereq-phase-torus: mathematical-premise
  math:def-riemannian-gradient-of-a-smooth-function: mathematical-premise
  math:def-integral-curve-of-a-vector-field: mathematical-premise
  math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:lem-c1-euclidean-maximal-flow-with-c2-upgrade: mathematical-premise
  math:def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Definition

Assume countable choice. Let $V$ be a nonempty finite set, let $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ have its flat metric, and let $U:T_V\to\mathbb R$ be smooth, meaning that its expressions in angular charts have derivatives of every order. Its gradient $\operatorname{grad}U$ is the vector field satisfying $\langle\operatorname{grad}U(q),v\rangle=dU_q(v)$ for every tangent vector $v$ at $q$.

Equip $\mathbb R\times T_V$ with the product smooth structure: for an angular chart $\kappa:O\to B$ and an open interval $J\subseteq\mathbb R$, its product chart on $J\times O$ is $(t,p)\mapsto(t,\kappa(p))\in J\times B$. A map between smooth manifolds is $C^2$ when it is continuous and its coordinate representatives in source and target charts have continuous partial derivatives of all orders at most two. Joint $C^2$ regularity of a map on $\mathbb R\times T_V$ uses these product charts. A $C^2$ diffeomorphism is a bijection whose map and inverse are both $C^2$.

A downward gradient trajectory through $q_0\in T_V$ is the maximal integral curve $q:I\to T_V$ satisfying $q(0)=q_0$ and $\dot q(t)=-\operatorname{grad}U(q(t))$. Here an integral curve is a differentiable curve whose velocity equals the indicated vector field, and maximal means that it has no extension as such a curve to a strictly larger interval. In this setting $I=\mathbb R$. Define $\Phi(t,q_0)=\Phi_t(q_0)=q(t)$. The map $\Phi:\mathbb R\times T_V\to T_V$ is jointly $C^2$, $\Phi_0$ is the identity, and $\Phi_{t+s}=\Phi_t\circ\Phi_s$; consequently each $\Phi_t$ is a $C^2$ diffeomorphism with inverse $\Phi_{-t}$. These are properties of the mathematical ODE.

## Facts & Assumptions

**Given:** Countable choice, a nonempty finite set $V$, the flat phase torus $T_V$, and a smooth real potential $U$ as above.

[F1] The phase torus is a compact smooth manifold with angular charts whose transitions are locally translations, and the metric is Euclidean in these charts ([[def-expander-prereq-phase-torus]]).

[F2] The Riemannian gradient of a smooth function is a smooth vector field, characterized as the metric dual of its differential ([[math:def-riemannian-gradient-of-a-smooth-function]]). Integral curves satisfy the vector-field equation ([[math:def-integral-curve-of-a-vector-field]]).

[F3] Under countable choice, every smooth vector field on a compact manifold is complete: its maximal integral curves exist for all real times ([[math:def-countable-choice]], [[math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]).

[F4] For a $C^2$ vector field on an open Euclidean set, the unique maximal local flow is jointly $C^2$ and its time slices have the corresponding inverse-time local flow ([[math:lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F5] The $C^2$ condition for a continuous map between smooth manifolds is the $C^2$ condition on its coordinate representatives, independently of the charts used ([[math:def-c-r-and-smooth-maps-between-smooth-manifolds]]). For $\mathbb R\times T_V$ we use the product charts specified in the Definition; a $C^2$ diffeomorphism means a bijection with $C^2$ map and inverse.

## Justification

**Given:** The data in Facts & Assumptions.

**Goal:** Establish that the trajectory and flow in the definition are well defined and have the stated regularity and group law.

1.1 By [F1] and [F2], $X=-\operatorname{grad}U$ is a smooth vector field on the compact smooth manifold $T_V$. In an angular chart its coordinate field is $C^2$. By [F4], local solutions exist uniquely and depend jointly $C^2$ on time and initial coordinates. On chart overlaps the coordinate descriptions represent the same vector field, so uniqueness makes these local solutions agree wherever their domains overlap. [F1, F2, F4, given]

2.1 By [F3], each maximal integral curve of $X$ has domain $\mathbb R$; uniqueness in step 1.1 makes the curve through each $q_0$ unique. Thus $\Phi$ is well defined. To see joint $C^2$ regularity near any $(t_0,q_0)$, cover the compact trajectory segment between times $0$ and $t_0$ by finitely many chart neighborhoods and subdivide the segment into finitely many short intervals on which [F4] applies. For initial points near $q_0$ and times near $t_0$, the resulting local flow maps compose to give $\Phi$; their chart transitions and compositions are $C^2$. The product-chart transitions are locally $(t,u)\mapsto(t,u+\lambda)$ for a fixed $\lambda\in(2\pi\mathbb Z)^V$, hence are smooth. Thus the local representatives just constructed give continuity and joint $C^2$ regularity on the product manifold in the sense of [F5]. The same argument applies for negative $t_0$. [F1, F3, F4, F5, step 1.1]

3.1 The curve $t\mapsto\Phi_t(\Phi_s(q))$ and the curve $t\mapsto\Phi_{t+s}(q)$ both solve the autonomous equation and agree at $t=0$. Local uniqueness, applied along their common real time interval, makes them equal. Hence $\Phi_{t+s}=\Phi_t\circ\Phi_s$ and $\Phi_0$ is the identity. Taking $s=-t$ in both orders gives inverse maps $\Phi_t$ and $\Phi_{-t}$; their $C^2$ regularity follows from step 2.1. Hence they are $C^2$ diffeomorphisms in the sense of [F5]. [F4, F5, step 1.1, step 2.1] ∎
