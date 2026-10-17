---
id: alg-ctrl1-indirect-shooting-for-the-ode-optimality-system
kind: algorithm
title: "Finite-budget indirect shooting for an interior-control ODE optimality system"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-ctrl1-smooth-transcription-data, def-ck-euclidean-maps-and-diffeomorphisms, def-nonlinear-two-point-bvp-and-boundary-residual, def-certified-ivp-approximation-and-sensitivity-interface, prop-shooting-residual-derivative, alg-single-shooting-for-nonlinear-bvps]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.4"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–248: indirect optimality systems, single and multiple shooting, collocation, and finite-dimensional nonlinear programs."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–257, §§2–3: Hamiltonian adjoint system, stationarity, shooting and discrete adjoints."
---

## Definition

This procedure is restricted to a smooth, unconstrained-interior control branch. Let the smooth data be those of [[def-ctrl1-smooth-transcription-data]], with no active path or endpoint constraints apart from the prescribed initial state. Any optional inequality constraints must remain strictly inactive throughout the branch; additional endpoint equalities or active endpoint inequalities require an augmented boundary residual and are outside this procedure. Let $H(t,x,p,u)=L(t,x,u)+p^Tf(t,x,u)$. Supply a pointwise-defined twice continuously differentiable feedback $\psi(t,x,p)$ on an open tube such that $H_u(t,x,p,\psi(t,x,p))=0$ and $\psi(t,x,p)\in\operatorname{int}U_c$ throughout that tube; differentiability uses the convention of [[def-ck-euclidean-maps-and-diffeomorphisms]]. Every successful IVP evaluation must keep its trajectory in this tube. If the evaluator cannot certify that condition for a queried trajectory, return `inadmissible-interior-branch` with no shooting result. Define $H_x^{\mathrm{fix}}(t,x,p,u):=D_x[L(t,x,u)+p^Tf(t,x,u)]$, with the derivative taken holding $u$ fixed, and only then substitute $u=\psi(t,x,p)$. Define $z=(x,p)\in\mathbb R^{2n}$ and
$$G(t,z)=\begin{pmatrix} f(t,x,\psi(t,x,p))\\-H_x^{\mathrm{fix}}(t,x,p,\psi(t,x,p))\end{pmatrix},\qquad B(z_{\mathrm{init}},z_{\mathrm{term}})=\begin{pmatrix}x_{\mathrm{init}}-x_0\\p_{\mathrm{term}}-\phi_x(x_{\mathrm{term}})\end{pmatrix},$$
where $z_{\mathrm{init}}=(x_{\mathrm{init}},p_{\mathrm{init}})$ and $z_{\mathrm{term}}=(x_{\mathrm{term}},p_{\mathrm{term}})$.
The **indirect shooting procedure** takes a certified differentiable IVP evaluator for $z'=G(t,z)$, an initial trial $z_0$, residual tolerance $\tau\ge0$, and correction cap $M\in\mathbb N_0$, and calls [[alg-single-shooting-for-nonlinear-bvps]] on the square BVP $(G,B)$. It returns that algorithm's trajectory and status without changing the root-tolerance meaning. In particular, `root-tolerance-met` certifies only the computed boundary residual for the numerical IVP map; it is not an exact BVP, optimality, global-optimality, or discretization-error certificate. If the control is on a boundary or no such smooth feedback is supplied, this procedure is inapplicable.
