---
id: thm-cm-analytic-verlet-energy-on-exponential-times
kind: theorem
title: Analytic Verlet retains order-two energy accuracy on exponential times
status: draft
origin: pipeline
domain: mathematics
dependency_level: 16
deps:
- def-cm-analytic-splitting-data-and-exact-splitting-map
- def-cm-splitting-hamiltonian-and-verlet-map
- lem-cm-optimal-truncation-gives-exponential-local-defect
- lem-cm-modified-energy-differs-by-order-two
dependency_roles:
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  lem-cm-optimal-truncation-gives-exponential-local-defect: mathematical-premise
  lem-cm-modified-energy-differs-by-order-two: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'Hairer, Geometric Numerical Integration, Lecture 3: backward error analysis, Sections 1–3 and 5; local analytic estimates supplied here'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
verification:
  precheck: pass
---

## Statement

For analytic splitting data, let $0<h\le h_0$ be sufficiently small as in [[lem-cm-optimal-truncation-gives-exponential-local-defect]], and let $z_j=\Psi_h^j(z_0)\in K$ for $0\le j\le n$. There are constants $C,c,h_0>0$, independent of $h,n$, such that

$$|H_h(z_n)-H_h(z_0)|\le Cnh\,e^{-c/h},\qquad |H(z_n)-H(z_0)|\le Ch^2\quad\text{if }nh\le e^{c/(2h)}.$$

Here $H_h$ is the finite optimally truncated Hamiltonian with $|H_h-H|\le Ch^2$ on a neighbourhood of $K$. For kinetic-plus-potential data, choose the analytic labels $\tilde A=V$, $\tilde B=\tfrac12p^{\mathsf T}\mathsf M^{-1}p$ to obtain the velocity-Verlet map $K_{h/2}\circ D_h\circ K_{h/2}$; the other order is the position-Verlet variant. Each variant has the stated energy estimate. Compact retention of numerical iterates is assumed; no original-trajectory accuracy on exponential times is asserted.

## Facts & Assumptions

**Given:** The splitting data, compact retention and small positive constant step.

[F1] [[lem-cm-optimal-truncation-gives-exponential-local-defect]] gives a time-$h$ modified flow with state defect at most $Ch e^{-c/h}$ and uniformly bounded displacement on $D(\rho/8)$.

[F2] [[lem-cm-modified-energy-differs-by-order-two]] gives uniform gradient and order-two energy bounds. The analytic splitting and mechanical-map definitions fix the map order.

## Proof

1.1 Modified conservation and local comparison. Along the real modified flow, differentiation gives $dH_h(X_{H_h})=\nabla H_h^{\mathsf T}J\nabla H_h=0$ by skew symmetry. For initial data $z_j\in K$, both the splitting endpoint and modified-flow endpoint are within $C h$ of $z_j$. For smaller $h_0$, their connecting segment lies in $D(\rho/8)$: every point on it is within $Ch$ of $K\subseteq\overline U$. Integrating the bounded gradient along this segment and using [F1] gives $|H_h(z_{j+1})-H_h(z_j)|\le Ch e^{-c/h}$. [given, F1, F2, algebra]

2.1 Telescoping and original energy. Summing step 1.1 over the finite $n$ steps gives $|H_h(z_n)-H_h(z_0)|\le Cnh e^{-c/h}$. By [F2], $|H(z_n)-H(z_0)|\le2C_Eh^2+Cnh e^{-c/h}$. If $nh\le e^{c/(2h)}$, the last term is at most $Ce^{-c/(2h)}$. The inequality $e^x\ge x^2/2$ for $x>0$ gives $e^{-c/(2h)}\le8h^2/c^2$. Enlarging $C$ proves the asserted order-two estimate for both splitting orders. [step 1.1, F2, algebra] ∎
