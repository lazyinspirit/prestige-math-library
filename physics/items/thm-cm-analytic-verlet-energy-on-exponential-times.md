---
id: thm-cm-analytic-verlet-energy-on-exponential-times
kind: theorem
title: Analytic Verlet retains order-two energy accuracy on exponential times
status: published
origin: pipeline
domain: mathematics
dependency_level: 16
deps:
  - def-cm-analytic-splitting-data-and-exact-splitting-map
  - def-cm-splitting-hamiltonian-and-verlet-map
  - lem-cm-optimal-truncation-gives-exponential-local-defect
  - lem-cm-modified-energy-differs-by-order-two
  - lem-cm-complex-analytic-flow-existence-and-holomorphy
  - prop-cm-drift-kick-and-verlet-preserve-the-canonical-form
  - def-real-exponential-function-and-e
dependency_roles:
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  lem-cm-optimal-truncation-gives-exponential-local-defect: mathematical-premise
  lem-cm-modified-energy-differs-by-order-two: mathematical-premise
  lem-cm-complex-analytic-flow-existence-and-holomorphy: mathematical-premise
  prop-cm-drift-kick-and-verlet-preserve-the-canonical-form: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: 'Hairer, Geometric Numerical Integration, Lecture 3: backward error
        analysis, Sections 1–3 and 5; local analytic estimates supplied here'
      url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
verification:
  precheck: pass
---

## Statement

For analytic splitting data, let $0<h\le h_0$ be sufficiently small as in [[lem-cm-optimal-truncation-gives-exponential-local-defect]], and let $z_j=\Psi_h^j(z_0)\in K$ for $0\le j\le n$. Here $e=\exp(1)$ and $e^x$ denotes $\exp(x)$ ([[def-real-exponential-function-and-e]]). There are constants $C,c,h_0>0$, independent of $h,n$, such that

$$|H_h(z_n)-H_h(z_0)|\le Cnh\,e^{-c/h},\qquad |H(z_n)-H(z_0)|\le Ch^2\quad\text{if }nh\le e^{c/(2h)}.$$

Here $H_h$ is the finite optimally truncated Hamiltonian with $|H_h-H|\le Ch^2$ on a neighbourhood of $K$. For kinetic-plus-potential data, choose the analytic labels $\tilde A=V$, $\tilde B=\tfrac12p^{\mathsf T}\mathsf M^{-1}p$ to obtain the velocity-Verlet map $K_{h/2}\circ D_h\circ K_{h/2}$; the other order is the position-Verlet variant. Each variant has the stated energy estimate. Compact retention of numerical iterates is assumed; no original-trajectory accuracy on exponential times is asserted.

## Facts & Assumptions

**Given:** The splitting data, compact retention and small positive constant step.

[F1] [[lem-cm-optimal-truncation-gives-exponential-local-defect]] gives a time-$h$ modified flow with state defect at most $Ch e^{-c/h}$ and uniformly bounded displacement on $D(\rho/8)$.

[F2] [[lem-cm-modified-energy-differs-by-order-two]] gives uniform gradient and order-two energy bounds. The analytic splitting and mechanical-map definitions fix the map order.

[F3] Uniform mechanical-stage admissibility. The datum supplies $\delta=\operatorname{dist}(K,\mathbb R^{2d}\setminus U)>0$ and $\|X_{\tilde A}\|,\|X_{\tilde B}\|\le M$ on $U_\rho$. The holomorphic flow supplier [[lem-cm-complex-analytic-flow-existence-and-holomorphy]] gives each subflow displacement at most $M$ times its elapsed time. The real drift/kick identification under full segment containment is [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]].

[F4] For $x>0$, the power series defining $\exp(x)$ has nonnegative terms and includes $x^2/2$, hence $\exp(x)\ge x^2/2$ ([[def-real-exponential-function-and-e]]).

## Proof

1.1 Mechanical identification with a uniform smaller step. Decrease the existing positive $h_0$, independently of $n$, so that $h_0\le\delta/(4M)$ and $h_0\le\rho/(64d\sqrt{2d}M)$. Starting at any $z\in K$, construct the three subflows successively using polydiscs of radius $\rho/(4\sqrt{2d})$ at their initial points. By [F3] their accumulated displacement, including every partial subflow time, is at most $(1/2+1+1/2)Mh=2Mh\le\delta/2$. These polydiscs lie in $U_\rho$, as in the distance-domain construction of the flow supplier, after further decreasing $h_0$ to ensure $2Mh_0\le\rho/16$. For real mechanical initial data each subflow is real: on the real neighbourhood inside $U$ its vector field is real, and uniqueness makes its local solution equal to its complex conjugate. If this real continuation reached the boundary of $U$ before a factor ended, the accumulated displacement bound would put that boundary point within $\delta/2$ of the starting point in $K$, contradicting the definition of $\delta$. Local uniqueness therefore continues the real solution through every factor inside $U$. The mechanical fields integrate to affine drift and kick paths there, so [F3] identifies every complete internal segment and its endpoint with the corresponding real factor. Thus $\Psi_h=K_{h/2}\circ D_h\circ K_{h/2}$ in the potential-first order, and equals the position-Verlet variant in the other order, uniformly for every starting point in $K$. Retention of step endpoints in $K$ lets this same argument apply at every step. All original energy estimates remain valid after decreasing $h_0$. [given, F3, construct]

1.2 Modified conservation and local comparison. Along the modified flow, differentiation gives $dH_h(X_{H_h})=\nabla H_h^{\mathsf T}J\nabla H_h=0$ by skew symmetry. For $z_j\in K$, the splitting displacement is at most $2Mh$ by [F3], and the modified-flow displacement is at most $C_Gh$ by [F2], since $J$ is an isometry and integration of $\dot Y=X_{H_h}(Y)$ bounds displacement by the supremum of $\lVert X_{H_h}\rVert$ times elapsed time. Put $C_*:=\max\{2M,C_G\}$ and decrease $h_0$ so that $C_*h_0\le\rho/16$. Every point of the segment joining the two endpoints is then within $\rho/16$ of $z_j\in U$, hence in $D(\rho/8)$. Integrating the bounded gradient along this segment and using [F1] gives $|H_h(z_{j+1})-H_h(z_j)|\le Ch e^{-c/h}$. [given, F1, F2, F3, algebra]

2.1 Telescoping and original energy. Summing step 1.2 over the finite $n$ steps gives $|H_h(z_n)-H_h(z_0)|\le Cnh e^{-c/h}$. By [F2], $|H(z_n)-H(z_0)|\le2C_Eh^2+Cnh e^{-c/h}$. If $nh\le e^{c/(2h)}$, the last term is at most $Ce^{-c/(2h)}$. Applying [F4] to $x=c/(2h)>0$ gives $e^{-c/(2h)}\le8h^2/c^2$. Enlarging $C$ proves the asserted order-two estimate for both splitting orders. [step 1.2, F2, F4, algebra] ∎
