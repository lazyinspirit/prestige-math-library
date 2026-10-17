---
id: lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence
kind: lemma
title: "Weakly convergent bounded controls have uniformly convergent states"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-ctrl1-linear-lqr-control-problem, lem-ctrl1-measurable-linear-ode-state-map, def-weak-convergence-of-nets-and-sequences, thm-cauchy-schwarz-and-the-euclidean-norm, thm-integral-triangle-inequality, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.5.1"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 22–23: weakly convergent controls, the linear state formula, and passage to a state limit; the uniform-convergence argument is proved here."
---

## Statement

For the data of [[def-ctrl1-linear-lqr-control-problem]], if $u_k,u\in\mathcal U_c$ and $u_k\rightharpoonup u$ weakly in $L^2(0,T;\mathbb R^m)$, then $x_{u_k}\to x_u$ uniformly on $[0,T]$.

## Facts & Assumptions

**Given:** The bounded measurable linear state equation, the compact control set $U_c$, and a sequence $u_k\rightharpoonup u$ in the pointwise admissible set.

[F1] The state map has a unique continuous solution and its zero-initial-state part is bounded and linear from $L^2$ to $C([0,T];\mathbb R^n)$ ([[lem-ctrl1-measurable-linear-ode-state-map]]).

[F2] Every control in $\mathcal U_c$ satisfies $\|u_k(t)\|_2\le M_c:=\sup_{v\in U_c}\|v\|_2<\infty$ almost everywhere ([[def-ctrl1-linear-lqr-control-problem]] and compactness of $U_c$).

[F3] Weak convergence means convergence under every bounded linear functional on $L^2$ ([[def-weak-convergence-of-nets-and-sequences]]).

[F4] For a Lebesgue-integrable vector function $h$, the componentwise integral obeys $\|\int h\|_2\le\int\|h\|_2$: if $I=\int h\ne0$, test the integral against $I/\|I\|_2$ and use componentwise linearity, Euclidean Cauchy--Schwarz, scalar integral monotonicity, and $|\int q^Th|\le\int|q^Th|$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]); if $I=0$ the bound is immediate.

## Proof

1.1 By [F1] and [F2], the states have a common bound $M_x$ in supremum norm. For $s,t\in[0,T]$, the integral equation and [F4] give $\|x_{u_k}(t)-x_{u_k}(s)\|_2\le L|t-s|$, where $L:=\|A\|_\infty M_x+\|B\|_\infty M_c$. The same bound holds for $x_u$. [F1, F2, F4, algebra]

1.2 For each fixed $t$, evaluation at $t$ composed with the bounded linear zero-initial-state map in [F1] is a bounded linear functional on $L^2$. Thus [F3] gives $x_{u_k}(t)\to x_u(t)$ coordinatewise. [F1, F3]

2.1 If $L=0$, step 1.1 makes each state constant, and step 1.2 gives uniform convergence. If $L>0$, fix $\varepsilon>0$ and choose a finite partition of $[0,T]$ with mesh smaller than $\varepsilon/(3L)$. By step 1.2 and finiteness of its nodes, there is an index after which $\|x_{u_k}-x_u\|_2<\varepsilon/3$ at every node. Any $t$ is within the mesh of a node, so step 1.1 gives $\|x_{u_k}(t)-x_u(t)\|_2\le L|t-t_j|+\|x_{u_k}(t_j)-x_u(t_j)\|_2+L|t-t_j|<\varepsilon$. Hence the convergence is uniform. [step 1.1, step 1.2, choose, algebra] ∎
