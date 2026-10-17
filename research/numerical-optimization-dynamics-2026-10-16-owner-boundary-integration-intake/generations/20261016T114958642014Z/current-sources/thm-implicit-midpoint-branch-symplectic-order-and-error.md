---
id: thm-implicit-midpoint-branch-symplectic-order-and-error
kind: theorem
title: The admitted implicit midpoint branch is symplectic and second order
status: draft
origin: pipeline
dependency_level: 2
deps:
  - alg-implicit-midpoint-hamiltonian-step
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

Let $U\subseteq\mathbb R^{2d}$ be open, $H\in C^2(U)$, $z=(q,p)$, and $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$; define $F(q,p)=(\nabla_pH(q,p),-\nabla_qH(q,p))=J\nabla H(q,p)$. For a signed step $h$, suppose a declared closed ball $\overline B(z,\rho)\subset U$ has bounds $\|F\|\le M$ and $\|DF\|\le L$ satisfying $|h|M/2\le\rho$ and $\theta:=|h|L/2<1$. The exact implicit midpoint branch [[alg-implicit-midpoint-hamiltonian-step]] then has a unique stage root $Z$ in this ball. The exact iterates $Z_0=z$, $Z_{k+1}=z+(h/2)F(Z_k)$ stay in the ball, converge to $Z$, and for every $k\in\mathbb N_0$ satisfy
$$\|Z_k-Z\|\le b_k:=\frac{\theta^k\|Z_1-Z_0\|}{1-\theta},\qquad \|(2Z_k-z)-(2Z-z)\|\le2b_k.$$
Here $\theta^0=1$, including when $\theta=0$; if $\theta=0$, the first update equals $Z$ and $b_k=0$ for $k\ge1$. Also $\|(2Z-z)-z\|\le2\rho$, which supplies an output-error bound when no update is computed.

Assume additionally $H\in C^3(U)$ and that these ball hypotheses hold uniformly for initial values $z$ in a compact convex tube, with common $\rho,M,L$. At every admitted initial value the selected branch is locally the restriction of a $C^1$ solution branch, and its exact local map $\Psi_h(z)=2Z-z$ satisfies $D\Psi_h(z)^TJ D\Psi_h(z)=J$.

Under these additional $C^3$ and uniform branch hypotheses, assume also that the exact and numerical trajectories, the branch balls, and the segments used in comparison lie in a compact convex subset of $U$ whenever $n|h|\le T$, with the displayed derivatives uniformly bounded. Then for some constants $C,L_1$ independent of $h,n$,
$$\|\Psi_h(z)-\varphi_h(z)\|\le C|h|^3,\qquad e_n\le e^{L_1T}e_0+CTe^{L_1T}|h|^2,$$
where $\varphi_h$ is the exact Hamiltonian flow and $e_n=\|z_n-\varphi_{nh}(z_0)\|$. These symplecticity and trajectory-error conclusions concern the exact selected map; no such conclusion is asserted here for a finite iteration output.

## Facts & Assumptions

**Given:** For the contraction and iteration estimates, the stated $C^2$ Hamiltonian, admitted closed ball, bounds, and signed-step inequalities. For the symplecticity and trajectory-error claims, assume additionally the stated $C^3$ regularity, uniform branch hypotheses, and controlled finite-time tube.

[A1] The field and selected branch obey the domain, closed-ball, bound, and step-size conditions in the Statement. [[alg-implicit-midpoint-hamiltonian-step]]

[F1] On a complete metric space, a contraction has a unique fixed point and its iterates converge with tail bound $d(Z_k,Z)\le q^k d(Z_1,Z_0)/(1-q)$. [[thm-banach-fixed-point]]

[F2] A $C^1$ finite-dimensional equation with invertible derivative in the unknown has a locally unique $C^1$ solution branch with the implicit derivative formula. [[thm-euclidean-implicit-function-theorem]]

[F3] For a $C^1$ vector field, the local flow is $C^1$ in the initial state and its derivative solves the variational equation; a $C^2$ field gives the needed finite $C^2$ flow regularity. [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]

[F4] The cited Taylor theorem is scalar. A compact convex tube $K\Subset U$ has an open convex neighborhood contained in $U$, so the theorem can be applied separately to each scalar coordinate function on the stipulated segments; it can also be applied to each scalar coordinate of a trajectory on its local time interval. Intermediate points may depend on the coordinate. If the coordinate remainders satisfy $|R_i|\le C_i r^s$, their vector satisfies $\|R\|_2\le(\sum_i C_i^2)^{1/2}r^s$. [[thm-multivariable-taylor-formula-with-lagrange-remainder]]

[F5] Under the additional $C^3$ hypotheses, differentiating the explicit coordinate field in the Statement gives $DF=J\nabla^2H$, and the Hessian is symmetric. [[thm-symmetry-of-higher-mixed-partials]]

[F6] Derivatives of compositions and products obey the total-derivative chain rule. [[thm-chain-rule-for-total-derivatives]]

## Proof

**Proof technique:** contraction branch, Cayley-transform pullback, and a finite-time defect recurrence.

1.1 Since $H\in C^2(U)$, the coordinate field $F$ is $C^1$. On the admitted closed ball, $T_z(W)=z+(h/2)F(W)$ maps the ball into itself because $\|T_z(W)-z\|\le |h|M/2\le\rho$. The mean-value estimate on this convex ball gives $\|T_z(W)-T_z(V)\|\le\theta\|W-V\|$ with $\theta=|h|L/2<1$. The ball is nonempty and complete, so [F1] gives a unique fixed point $Z$, keeps all iterates in the ball, and gives $\|Z_k-Z\|\le b_k=\theta^k\|Z_1-Z_0\|/(1-\theta)$. Multiplication by two gives $\|(2Z_k-z)-(2Z-z)\|=2\|Z_k-Z\|\le2b_k$, and $Z\in\overline B(z,\rho)$ gives $\|(2Z-z)-z\|\le2\rho$. The convention $\theta^0=1$ makes the bound valid at $k=0$. If $\theta=0$, $T_z$ is constant on the ball, hence $Z_1=T_z(z)=T_z(Z)=Z$ and every later iterate equals $Z$; thus $b_k=0$ for $k\ge1$. These assertions require only the $C^2$ hypotheses. [A1, F1, given, algebra]

2.1 For the remaining claims, assume the additional $C^3$ and uniform branch hypotheses. Fix an admitted initial value $z$ and let $z_j\to z$ through admitted initial values with selected roots $Z_j$. Since $\|Z_j-z_j\|\le\rho$, the sequence is bounded; every convergent subsequence has a limit $Z_*\in\overline B(z,\rho)\subset U$, and continuity of $F$ in $Z_j=z_j+(h/2)F(Z_j)$ shows $Z_*=z+(h/2)F(Z_*)$. The contraction in step 1.1 gives uniqueness of this fixed point in $\overline B(z,\rho)$, so every convergent subsequence has limit $Z$ and therefore $Z_j\to Z$. Now put $G(z,Z)=Z-z-(h/2)F(Z)$. At the selected root, $D_ZG=I-(h/2)A$ with $A=DF(Z)$. Since $\|(h/2)A\|<1$, this matrix is invertible by the Neumann series, and [F2] supplies a local $C^1$ root branch. The continuity just proved and the IFT's local uniqueness identify the selected roots with this branch at every nearby admitted initial value. Differentiating $G=0$ gives $D_zZ=(I-(h/2)A)^{-1}$ and hence $S:=D\Psi_h=(I-B)^{-1}(I+B),\qquad B=(h/2)A.$ [A1, F2, F6, algebra]

2.2 Put $m=2d$ and $\delta=Z-z$. The admitted fixed-point equation gives $\|\delta\|\le |h|\|F(Z)\|/2\le |h|M/2$, hence $\delta=O(|h|)$ uniformly. Since $H\in C^3$, $F\in C^2$. Apply the scalar theorem [F4] to each $F_i$ along $[z,Z]$: $F_i(z+\delta)=F_i(z)+DF_i(z)\delta+R_i$, where $R_i=\tfrac12D^2F_i(z+\vartheta_i\delta)[\delta,\delta]$ for some $\vartheta_i\in(0,1)$. These points may differ with $i$. Bounded second derivatives on the tube give $|R_i|\le C_i\|\delta\|^2$, hence $\|R\|_2\le(\sum_{i=1}^m C_i^2)^{1/2}\|\delta\|^2$. Substitution into $\delta=(h/2)F(z+\delta)$ first gives $\delta=(h/2)F(z)+O(h^2)$ and then $\delta=(h/2)F(z)+(h^2/4)DF(z)F(z)+O(|h|^3)$. Thus $2Z-z=z+hF(z)+(h^2/2)DF(z)F(z)+O(|h|^3)$. For the exact flow, write $g_i(t)=(\varphi_t(z))_i$. By [F3] and [F6], $g_i^{(1)}=F_i(\varphi_t(z))$, $g_i^{(2)}=DF_i(\varphi_t(z))F(\varphi_t(z))$, and $g_i^{(3)}=D^2F_i(\varphi_t(z))[F(\varphi_t(z)),F(\varphi_t(z))]+DF_i(\varphi_t(z))DF(\varphi_t(z))F(\varphi_t(z))$ are defined, with the third derivative uniformly bounded on the controlled trajectories. Scalar Taylor in time gives $g_i(h)=z_i+hF_i(z)+(h^2/2)(DF(z)F(z))_i+(h^3/6)g_i^{(3)}(\eta_i h)$ for $h\ne0$, with possibly distinct $\eta_i\in(0,1)$. Each last term is bounded by $C_i'|h|^3$; summing their squares gives a Euclidean remainder bound $(\sum_{i=1}^m(C_i')^2)^{1/2}|h|^3$. The case $h=0$ is immediate. The exact flow therefore has the same terms through degree two as $2Z-z$, giving the uniform one-step defect $C|h|^3$ for either sign of $h$. No common Lagrange intermediate point for the vector is used. [A1, F3, F4, F6, step 1.1, given, algebra]

3.1 By [F5], $A=J\nabla^2H(Z)$ and $A^TJ+JA=0$; therefore $B^TJ+JB=0$. Expanding both products gives $(I+B)^TJ(I+B)-(I-B)^TJ(I-B)=2(B^TJ+JB)=0$. Thus $(I-B)^TJ(I-B)=(I+B)^TJ(I+B)$. [F5, step 2.1, algebra]

3.2 Differentiating the fixed-point relation shows $D\Psi_h=I+hDF(z)+O(h^2)$ uniformly on the tube; bounded derivatives make $\|D\Psi_h\|\le1+L_1|h|$ after decreasing $h_0$. The mean-value theorem on the stipulated convex comparison segments gives $e_{n+1}\le(1+L_1|h|)e_n+C|h|^3$. Iteration and $(1+L_1|h|)^n\le e^{L_1T}$ when $n|h|\le T$ give $e_n\le e^{L_1T}e_0+CTe^{L_1T}|h|^2$. [A1, F4, F6, step 2.1, step 2.2, algebra]

4.1 The matrices $I-B$ and $I+B$ commute. Multiplying the equality in step 3.1 on the left by $(I-B)^{-T}$ and on the right by $(I-B)^{-1}$ yields $J=(I-B)^{-T}(I+B)^TJ(I+B)(I-B)^{-1}=S^TJS$. This proves the exact branch is symplectic. [A1, step 2.1, step 3.1, algebra]

5.1 Step 1.1 proves existence, uniqueness, convergence, and the stage and output certificates under the $C^2$ hypotheses. Under the additional $C^3$ and tube hypotheses, step 2.1 proves the exact branch's stated regularity, step 4.1 proves symplecticity, and steps 2.2 and 3.2 prove local second order and the finite-time error. [A1, step 1.1, step 2.1, step 4.1, step 2.2, step 3.2] ∎
