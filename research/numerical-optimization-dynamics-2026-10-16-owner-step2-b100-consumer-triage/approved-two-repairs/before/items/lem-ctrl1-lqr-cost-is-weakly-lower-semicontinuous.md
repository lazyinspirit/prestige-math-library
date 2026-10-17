---
id: lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous
kind: lemma
title: "The LQR objective is weakly lower semicontinuous"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence, thm-cauchy-schwarz-and-the-euclidean-norm, cor-cauchy-schwarz-inequality-for-l-two]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §§2.4–2.5"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 21–23, §2.5.1: quadratic LQ objective and the direct-method existence argument. The present proof supplies the weak-lower-semicontinuity detail explicitly."
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–230: continuous objective, ODE state constraint, and direct finite-dimensional approximation context."
---

## Statement

For the data of [[def-ctrl1-linear-lqr-control-problem]], if $u_k\in\mathcal U_c$ and $u_k\rightharpoonup u$ weakly in $L^2(0,T;\mathbb R^m)$, then $J(u)\le\liminf_{k\to\infty}J(u_k)$.

## Facts & Assumptions

**Given:** The LQR data, the associated costs and states, and a weakly convergent sequence $u_k\rightharpoonup u$ in real $L^2$.

[F1] The state and cost are those of [[def-ctrl1-linear-lqr-control-problem]]; $Q(t)\succeq0$, $P\succeq0$, and $R(t)\succeq rI$ almost everywhere.

[F2] Weak convergence of controls in $\mathcal U_c$ implies uniform convergence of their states ([[lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence]]).

[F3] The pairing $\langle v,w\rangle=\int_0^T v(t)^Tw(t)dt$ is well-defined on vector-valued $L^2$ classes. Pointwise Euclidean Cauchy--Schwarz followed by scalar $L^2$ Cauchy--Schwarz gives $|\langle v,w\rangle|\le\|v\|_2\|w\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

## Proof

1.1 Put $e_k=x_{u_k}-x_d$ and $e=x_u-x_d$. By [F2], $e_k\to e$ uniformly. Since $Q$ is essentially bounded, the estimate $|a^TQ(t)a-b^TQ(t)b|\le\|Q(t)\|_2(\|a\|_2+\|b\|_2)\|a-b\|_2$ shows that $\int_0^T e_k^TQe_k\,dt\to\int_0^T e^TQe\,dt$. The terminal terms converge by the same estimate with $P$ and $x_{u_k}(T)\to x_u(T)$. [F1, F2, algebra]

1.2 Let $\mathscr Rv=R(\cdot)v(\cdot)$. The bounds on $R$ imply $\|\mathscr Rv\|_2\le M\|v\|_2$ and $\langle\mathscr Rv,v\rangle\ge0$; symmetry gives $\langle\mathscr Rv,w\rangle=\langle v,\mathscr Rw\rangle$. For every fixed $w\in L^2$, $\langle\mathscr Ru_k,u_k\rangle\ge2\langle\mathscr Ru_k,w\rangle-\langle\mathscr Rw,w\rangle$, because the difference is $\langle\mathscr R(u_k-w),u_k-w\rangle\ge0$. The right-hand side converges to $2\langle\mathscr Ru,w\rangle-\langle\mathscr Rw,w\rangle$ by weak convergence, as [F3] makes $v\mapsto\langle\mathscr Rv,w\rangle=\langle v,\mathscr Rw\rangle$ bounded. Taking the supremum over $w$ gives $\liminf_k\langle\mathscr Ru_k,u_k\rangle\ge\langle\mathscr Ru,u\rangle$, with equality in the supremum at $w=u$. [F1, F3, given, algebra]

2.1 The state and terminal cost terms converge by step 1.1, while the control quadratic term is lower semicontinuous by step 1.2. Multiplying by $1/2$ and adding these three terms gives $J(u)\le\liminf_k J(u_k)$. [step 1.1, step 1.2, algebra] ∎
