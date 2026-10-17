---
id: lem-finite-modified-hamiltonian-exists
kind: lemma
title: A finite formal logarithm has Hamiltonian coefficients on a star-shaped domain
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-local-leapfrog-domain-on-an-open-configuration-set
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - alg-local-symplectic-euler-step
  - alg-implicit-midpoint-hamiltonian-step
  - thm-implicit-midpoint-branch-symplectic-order-and-error
  - prop-local-leapfrog-and-symplectic-euler-are-symplectic
  - thm-local-symplectic-euler-and-leapfrog-trajectory-errors
  - lem-local-hamiltonian-flow-preserves-symplectic-matrix
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-extreme-value-metric
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
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 3: Backward error analysis"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
      locator: "PDF pp. 1–6 and 13"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 40–44"
---

## Statement

Let $Q\subseteq\mathbb R^d$ be open and star-shaped about a point $q_*\in Q$, meaning $q_*+t(q-q_*)\in Q$ for every $q\in Q$ and $t\in[0,1]$. Let $M$ be real symmetric positive-definite, $U=Q\times\mathbb R^d$, and equip $U$ with the canonical form $\omega=\sum_{i=1}^d dq_i\wedge dp_i$ and matrix $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$. Set $H(q,p)=\tfrac12p^TM^{-1}p+V(q)$ with $V\in C^\infty(Q)$. Let $\Phi_h$ be the kick-then-drift symplectic-Euler map, the local leapfrog map, or an admitted implicit-midpoint branch, on a compact subset where the chosen map is defined. Write $r=1$ for the kick-then-drift symplectic-Euler map and $r=2$ for leapfrog or implicit midpoint, as proved in [[thm-local-symplectic-euler-and-leapfrog-trajectory-errors]] and [[thm-implicit-midpoint-branch-symplectic-order-and-error]]. For a smooth test function $f$, define the pullback $P_hf=f\circ\Phi_h$ by its Taylor coefficients at $h=0$. For fixed finite $N\ge r$, its truncated logarithm is the polynomial
$$\log_N(P_h)=\sum_{k=1}^{N+1}\frac{(-1)^{k+1}}{k}(P_h-I)^k,$$
computed modulo terms of order $h^{N+2}$. There are smooth vector fields $X_r,\ldots,X_N$ and globally defined functions $H_r,\ldots,H_N$ on $U$ such that
$$h^{-1}\log_N(P_h)=\mathcal L_{X_H}+\sum_{j=r}^Nh^j\mathcal L_{X_j}\pmod{h^{N+1}},\qquad \iota_{X_j}\omega=dH_j,$$
where $\mathcal L_Xf:=Df[X]$. Thus $H_h^{[N]}=H+\sum_{j=r}^Nh^jH_j$ is a globally defined finite modified Hamiltonian. The logarithm is a finite formal polynomial for each fixed $N$; no convergence of an infinite series is asserted.

## Facts & Assumptions

**Given:** The smooth Hamiltonian on the star-shaped phase domain, a local step map from this page, and a fixed finite order $N$.

[A1] $Q$ is star-shaped and method stages are admitted on a compact subset of $U$.

[F1] Under their compact convex comparison-tube hypotheses, the local symplectic-Euler and leapfrog defects are respectively $O(h^2)$ and $O(h^3)$, and both maps satisfy the local symplectic matrix identity. [[alg-local-symplectic-euler-step]], [[def-local-leapfrog-domain-on-an-open-configuration-set]], [[prop-local-leapfrog-and-symplectic-euler-are-symplectic]], [[thm-local-symplectic-euler-and-leapfrog-trajectory-errors]]

[F2] Under the stated uniform closed-ball hypotheses the exact implicit midpoint branch is symplectic; its order-two estimate additionally requires the stated compact convex comparison tube. These hypotheses will be supplied locally in step 1.1. [[alg-implicit-midpoint-hamiltonian-step]], [[thm-implicit-midpoint-branch-symplectic-order-and-error]]

[F3] Every local Hamiltonian flow considered below preserves the canonical symplectic matrix. [[lem-local-hamiltonian-flow-preserves-symplectic-matrix]]

[F4] A smooth finite-dimensional implicit branch remains smooth to each fixed finite order when the defining equation is smooth and its derivative in the unknown is invertible. [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]

[F5] The Hamiltonian convention is $\iota_{X_H}\omega=dH$ for the canonical form specified in the Statement. [[def-hamiltonian-vector-field-and-hamiltonian-function]]

[F6] Taylor expansion along a segment gives a uniform finite-order remainder on a compact convex subset of $U$. [[thm-multivariable-taylor-formula-with-lagrange-remainder]]

[F7] A smooth Euclidean vector field has a local flow on an open time-state domain, with the variational equation and compact continuation. [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]

[F8] Continuous coefficient and derivative norms are bounded on a nonempty compact set. [[thm-extreme-value-metric]]

## Proof

**Proof technique:** finite formal logarithm, symplectic coefficient comparison, and the Poincaré formula on a star-shaped set.

1.1 Fix $a\in U$ and $\varepsilon>0$ with $\overline B(a,4\varepsilon)\subset U$. On this ball, [F8] bounds each required derivative of $F=X_H$. Choose $B\ge1$ bounding the norms of $F$ and the kick and drift fields, and $L\ge1$ bounding $\|DF\|$. For centers in $\overline B(a,3\varepsilon)$ use midpoint stage radius $\rho=\varepsilon$. Choose $h_0>0$ with $h_0B/2<\varepsilon$ and $h_0L/2\le1/2$; all these balls then satisfy the uniform branch conditions of [F2]. Any other admitted midpoint ball gives the same root: its Picard iterates start at the same $z$ and obey the same recurrence, so their limit is also the limit for the ball of radius $\varepsilon$. Choose $T>0$ with $2BT<\varepsilon$ and decrease $h_0$ to at most $T$. Starting in $\overline B(a,2\varepsilon)$, exact trajectories stay in $\overline B(a,3\varepsilon)$ for $|t|\le T$ by the speed bound and [F7]. Numerical endpoints and kick/drift stages also stay there for $n|h|\le T$: each explicit step has total substep displacement at most $2B|h|$, and a midpoint step has displacement at most $B|h|$. The branch balls and every comparison segment therefore lie in the compact convex ball $\overline B(a,4\varepsilon)$. All hypotheses needed for the local symplecticity and order conclusions of [F1] and [F2] hold on these smaller neighborhoods. No single convex tube covering all of $U$ is needed. [A1, F1, F2, F7, F8, choose]

2.1 Fix $N$. Smooth kick and drift formulas give smooth step germs at $h=0$ throughout $U$. For midpoint apply [F4] to $G(z,Z,h)=Z-z-(h/2)F(Z)$ at $(z,z,0)$, where $D_ZG=I$. Its smooth solution germ is the exact root in step 1.1, and uniqueness identifies these germs on overlaps. Thus the Taylor coefficients $d_k$ are smooth on all of $U$, and on any fixed compact subset a finite cover by the neighborhoods of step 1.1 gives $\Phi_h(z)=z+\sum_{k=1}^{N+1}h^kd_k(z)+O(h^{N+2})$, also with a uniform first-state-derivative remainder by smoothness. Consistency gives $d_1=X_H$; the verified local order estimates of [F1] and [F2] identify the coefficients through degree $r$ with those of the exact flow. [F1, F2, F4, F6, step 1.1]

3.1 Seek $Y_h=X_H+\sum_{m=1}^Nh^mX_m$. The time-$h$ flow expansion is $z+\sum_{k=1}^{N+1}\frac{h^k}{k!}(Y_h\cdot\nabla)^{k-1}Y_h(z)+O(h^{N+2})$. At coefficient $h^{m+1}$, the first term $hY_h$ contributes $X_m$; every term with $k\ge2$ can involve only $X_1,\ldots,X_{m-1}$ at that degree. Thus set $X_m=d_{m+1}-P_m$, where $P_m$ is the already determined coefficient from those higher flow terms. This finite recursion gives smooth fields on $U$ and matches coefficients through degree $N+1$. Since step 2.1 identifies the exact-flow coefficients through degree $r$, it gives $X_1=\cdots=X_{r-1}=0$. [F6, F7, step 2.1, algebra]

4.1 For fixed parameter $h$, the pullback $Q_{h,t}$ of the time-$t$ flow of $Y_h$ obeys $\partial_t(Q_{h,t}f)=Q_{h,t}(\mathcal L_{Y_h}f)$ and $Q_{h,0}=I$. Coefficient recursion in $t$ therefore gives $Q_{h,t}=\sum_{k=0}^{N+1}t^k\mathcal L_{Y_h}^k/k!$ modulo terms of total order $N+2$; at $t=h$, this is $\exp(h\mathcal L_{Y_h})$. Step 3.1 gives $\Phi_h$ and its comparison flow equal Taylor coefficients through degree $N+1$, so [F6] makes their pullbacks equal modulo $h^{N+2}$. Since $P_h-I=O(h)$, the finite polynomial logarithm in the Statement is valid modulo $h^{N+2}$. The formal identity $\log(\exp A)=A$ in the truncated algebra then gives $\log_N(P_h)=h\mathcal L_{Y_h}$ modulo $h^{N+2}$. [F6, step 3.1, algebra]

4.2 Fix $m\in\{r,\ldots,N\}$ and assume $X_r,\ldots,X_{m-1}$ are Hamiltonian. The truncated field $Y_h^{[m-1]}=X_H+\sum_{j=r}^{m-1}h^jX_j$ is Hamiltonian, so by [F3] its time-$h$ flow $\psi_h$ is symplectic. Step 3.1 gives $\Phi_h-\psi_h=h^{m+1}X_m+O(h^{m+2})$ and, after differentiating the smooth expansions, $D\Phi_h-D\psi_h=h^{m+1}DX_m+O(h^{m+2})$. [F3, step 3.1]

5.1 The symplectic matrix identity for both maps and $D\psi_h=I+O(h)$ imply $0=h^{m+1}(DX_m^TJ+JDX_m)+O(h^{m+2})$. Divide by $h^{m+1}$ and take $h\to0$ to obtain $DX_m^TJ+JDX_m=0$. [F1, F2, F3, step 4.2, algebra]

6.1 The one-form $\alpha_m=\iota_{X_m}\omega$ has coefficient column $-JX_m$, so its derivative matrix is $-JDX_m$. Step 5.1 says this matrix is symmetric; hence $\alpha_m$ is closed. Fix a star center $z_*$ and define $H_m(z)=\int_0^1\alpha_m(z_*+t(z-z_*))[z-z_*]dt$. For any direction $v$, differentiation under the integral gives $t(D\alpha_m(z_*+t(z-z_*))[v])[z-z_*]+\alpha_m(z_*+t(z-z_*))[v]$. Closedness swaps the two arguments in the first term, making the integrand $\frac d{dt}(t\alpha_m(z_*+t(z-z_*))[v])$. Integration yields $DH_m(z)[v]=\alpha_m(z)[v]$. Thus $dH_m=\alpha_m$ and [F5] makes $X_m$ Hamiltonian on all of $U$. [A1, F5, step 5.1, construct]

7.1 Applying the coefficient induction in step 4.2, the matrix consequence in step 5.1, and the primitive construction in step 6.1 successively for $m=r,\ldots,N$ supplies all finite Hamiltonians $H_j$. Step 4.1 identifies the resulting vector-field coefficients with the truncated formal logarithm. The construction makes no assertion about convergence as $N\to\infty$. [step 3.1, step 4.1, step 4.2, step 5.1, step 6.1] ∎
