---
id: def-periodic-one-way-advection-schemes
kind: definition
title: Periodic advection schemes and the finite-interval upwind row
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-uniform-grid-and-difference-operators, def-linear-transport-equation-and-its-characteristic-flow]
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.5–§6.6, PDF pp. 97–104: linear transport, inflow boundary data, and explicit upwind rows."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 15, Finite Difference Methods for the One-Way Wave Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/286be9198204bea2f7e7d77f88e7b061_MIT18_336S09_lec15.pdf"
      locator: "Complete PDF pp. 1–4: five named advection stencils. Its $u_t=c u_x$ convention is reflected to $u_t+a u_x=0$."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 18, Boundary Conditions for Advection"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/3ed0b03979b2d5868bbf5f44fdc5f3a2_MIT18_336S09_lec18.pdf"
      locator: "Complete 3-page PDF, pp. 1–2: upwind inflow/outflow handling and separate numerical boundary data for Lax–Friedrichs/Lax–Wendroff."
verification:
  precheck: n/a
---

## Definition

Use the index sets and uniform spacings of [[def-uniform-grid-and-difference-operators]]: $x_j=jh$, $j\in\mathbb Z$, or $j$ reduced modulo $N$ in the periodic case. Fix $a>0$, $h,k>0$, and $\nu=ak/h$. The target equation is the one-dimensional constant-velocity transport equation $u_t+a u_x=0$, the constant-coefficient case of [[def-linear-transport-equation-and-its-characteristic-flow]]. Set $U_j^0=u_0(jh)$ and define, for $n\ge0$,
$$ \begin{aligned} \text{upwind: }&U_j^{n+1}=U_j^n-\nu(U_j^n-U_{j-1}^n),\\ \text{downwind: }&U_j^{n+1}=U_j^n-\nu(U_{j+1}^n-U_j^n),\\ \text{centered: }&U_j^{n+1}=U_j^n-\frac{\nu}{2}(U_{j+1}^n-U_{j-1}^n),\\ \text{Lax--Friedrichs: }&U_j^{n+1}=\frac{U_{j-1}^n+U_{j+1}^n}{2}-\frac{\nu}{2}(U_{j+1}^n-U_{j-1}^n),\\ \text{Lax--Wendroff: }&U_j^{n+1}=U_j^n-\frac{\nu}{2}(U_{j+1}^n-U_{j-1}^n)+\frac{\nu^2}{2}(U_{j+1}^n-2U_j^n+U_{j-1}^n). \end{aligned} $$
On a periodic grid, every index in these formulas is reduced modulo $N$; no physical boundary data are present. For $a<0$, reflect the stencil by $j\mapsto-j$ and replace $\nu$ by $|a|k/h$.

For a finite interval $[0,L]$ with $a>0$, the inflow boundary is $x=0$. The upwind initial/boundary rows are $U_j^0=u_0(jh)$ for $j=0,\ldots,N$, $U_0^n=g(t_n)$ with $u_0(0)=g(0)$, and
$$ U_j^{n+1}=(1-\nu)U_j^n+\nu U_{j-1}^n,\qquad j=1,\ldots,N,\quad n\ge0. $$
The outflow node $j=N$ is computed by this row and receives no prescribed value. This item supplies no finite-interval boundary closure or stability statement for centered, Lax--Friedrichs, or Lax--Wendroff updates.

