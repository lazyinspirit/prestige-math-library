---
id: thm-implicit-midpoint-branch-symplectic-order-and-error
kind: theorem
title: The admitted implicit midpoint branch is symplectic and second order
status: draft
origin: pipeline
dependency_level: 2
deps:
  - alg-implicit-midpoint-hamiltonian-step
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - thm-banach-fixed-point
  - thm-euclidean-implicit-function-theorem
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-chain-rule-for-total-derivatives
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-symmetry-of-higher-mixed-partials
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 2: Symplectic integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "PDF pp. 1–2"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 40–41"
---

## Statement

Let $U\subseteq\mathbb R^{2d}$ be open, $H\in C^3(U)$, and $F=J\nabla H$. Suppose, uniformly for initial values $z$ in a compact convex tube, that $\overline B(z,\rho)\subset U$, $\|F\|\le M$, $\|DF\|\le L_0$ on these balls, and $|h|M/2\le\rho$, $|h|L_0/2<1$. The exact implicit midpoint branch [[alg-implicit-midpoint-hamiltonian-step]] then exists uniquely in each ball. Its local map $\Psi_h(z)=2Z-z$ is $C^1$ and satisfies $D\Psi_h(z)^TJ D\Psi_h(z)=J$.

Assume also that the exact and numerical trajectories, the branch balls, and the segments used in comparison lie in a compact convex subset of $U$ for $nh\le T$, with the displayed derivatives uniformly bounded. Then for some constants $C,L_1$ independent of $h,n$,
$$\|\Psi_h(z)-\varphi_h(z)\|\le Ch^3,\qquad e_n\le e^{L_1T}e_0+CTe^{L_1T}h^2,$$
where $\varphi_h$ is the exact Hamiltonian flow and $e_n=\|z_n-\varphi_{nh}(z_0)\|$.

## Facts & Assumptions

**Given:** The stated local Hamiltonian field, compact branch balls, bounds, small-step inequalities, and controlled finite-time tube.

[A1] The field and selected branch obey the domain, closed-ball, bound, and step-size conditions in the Statement. [[alg-implicit-midpoint-hamiltonian-step]]

[F1] On a complete metric space, a contraction has a unique fixed point and its iterates converge with tail bound $d(Z_k,Z)\le q^k d(Z_1,Z_0)/(1-q)$. [[thm-banach-fixed-point]]

[F2] A $C^1$ finite-dimensional equation with invertible derivative in the unknown has a locally unique $C^1$ solution branch with the implicit derivative formula. [[thm-euclidean-implicit-function-theorem]]

[F3] For a $C^1$ vector field, the local flow is $C^1$ in the initial state and its derivative solves the variational equation; a $C^2$ field gives the needed finite $C^2$ flow regularity. [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]

[F4] Taylor's formula with bounded derivatives controls the remainders uniformly on a compact convex tube. [[thm-multivariable-taylor-formula-with-lagrange-remainder]]

[F5] The Hamiltonian vector field has $DF=J\nabla^2H$ and the Hessian is symmetric. [[def-hamiltonian-vector-field-and-hamiltonian-function]], [[thm-symmetry-of-higher-mixed-partials]]

[F6] Derivatives of compositions and products obey the total-derivative chain rule. [[thm-chain-rule-for-total-derivatives]]

## Proof

**Proof technique:** contraction branch, Cayley-transform pullback, and a finite-time defect recurrence.

1.1 On each closed ball, $T_z(Z)=z+(h/2)F(Z)$ maps the ball into itself because $\|T_z(Z)-z\|\le |h|M/2\le\rho$. The mean-value estimate on the convex ball gives $\|T_z(Z)-T_z(W)\|\le q\|Z-W\|$ with $q=|h|L_0/2<1$. The ball is complete, so [F1] gives a unique fixed point $Z$ and the stated convergent iteration. [A1, F1, given]

1.2 Set $G(z,Z)=Z-z-(h/2)F(Z)$. At the selected branch, $D_ZG=I-(h/2)A$ with $A=DF(Z)$. Since $\|(h/2)A\|<1$, its inverse is the convergent Neumann series; [F2] therefore makes $Z$ a local $C^1$ function of $z$. Differentiating $G=0$ gives $D_zZ=(I-(h/2)A)^{-1}$ and hence $S:=D\Psi_h=(I-B)^{-1}(I+B),\qquad B=(h/2)A.$ [A1, F2, F6, algebra]

1.3 By [F5], $A=J\nabla^2H(Z)$ and $A^TJ+JA=0$; therefore $B^TJ+JB=0$. Expanding both products gives $(I+B)^TJ(I+B)-(I-B)^TJ(I-B)=2(B^TJ+JB)=0$. Thus $(I-B)^TJ(I-B)=(I+B)^TJ(I+B)$. [F5, algebra]

1.4 The fixed-point equation and [F4] give $Z=z+(h/2)F(z)+(h^2/4)DF(z)F(z)+O(h^3)$ uniformly on the tube: first $Z-z=O(h)$ by the ball bound, then Taylor-expand $F(Z)$ at $z$ and substitute once. Consequently $2Z-z=z+hF(z)+(h^2/2)DF(z)F(z)+O(h^3)$. The exact flow has the same expansion by [F3], [F4], and [F6], so its one-step defect is at most $Ch^3$. [A1, F3, F4, F6, given]

2.1 The matrices $I-B$ and $I+B$ commute. Multiplying the equality in step 1.3 on the left by $(I-B)^{-T}$ and on the right by $(I-B)^{-1}$ yields $J=(I-B)^{-T}(I+B)^TJ(I+B)(I-B)^{-1}=S^TJS$. This proves the exact branch is symplectic. [A1, step 1.2, step 1.3, algebra]

2.2 Differentiating the fixed-point relation shows $D\Psi_h=I+hDF(z)+O(h^2)$ uniformly on the tube; bounded derivatives make $\|D\Psi_h\|\le1+L_1h$ after decreasing $h_0$. The mean-value theorem on the stipulated convex comparison segments gives $e_{n+1}\le(1+L_1h)e_n+Ch^3$. Iteration and $(1+L_1h)^n\le e^{L_1T}$ give $e_n\le e^{L_1T}e_0+CTe^{L_1T}h^2$. [A1, F4, F6, step 1.4, algebra]

3.1 Steps 1.1–2.2 prove the unique admitted branch, symplecticity, local second order, and the stated finite-time error. [A1, step 1.1, step 2.1, step 1.4, step 2.2] ∎
