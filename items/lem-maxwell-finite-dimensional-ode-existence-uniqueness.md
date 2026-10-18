---
id: lem-maxwell-finite-dimensional-ode-existence-uniqueness
kind: lemma
title: Existence and uniqueness for the finite-dimensional Maxwell ODE
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-maxwell-edge-fem-semidiscretization
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§2, printed pp. 6–8: finite-dimensional edge-element Maxwell systems. The continuous-load ODE construction is reduced to the local matrix-ODE supplier."
verification:
  precheck: pass
---

## Statement

Assume the Countable Choice branch inherited from [[def-maxwell-edge-fem-semidiscretization]]. Let $T\ge0$. For any finite matching mesh, initial edge and face coefficients $(e_0,b_0)$, and continuous load vector $j:[0,T]\to\mathbb R^{N_e}$, the source-driven semidiscrete Maxwell system
$$M_e\dot e-C^TM_bb=-j(t),\qquad \dot b+Ce=0,\qquad (e(0),b(0))=(e_0,b_0)$$
has one and only one global $C^1$ solution on $[0,T]$ when $T>0$, with domain-relative one-sided endpoint derivatives. When $T=0$, there is exactly one map with the prescribed initial value; it extends locally to the same coefficient ODE with the load held constant at $j(0)$, and any two such continuations agree on their common interval containing zero. No derivative or IVP solution on the singleton itself is asserted. The construction and uniqueness argument use finite-dimensional linear algebra and the matrix-ODE supplier; no choice axiom stronger than the inherited Countable Choice branch is used.

## Facts & Assumptions


**Given:** The real FE matrices and curl map from the semidiscretization, initial coefficients, and a continuous load vector on $[0,T]$, $T\ge0$.

[A1] Countable Choice is inherited from the $H(\operatorname{div})$/Piola space definitions used to form the FE spaces; the local ODE argument makes no further choice. ([[def-countable-choice]], [[def-maxwell-edge-fem-semidiscretization]])

[F1] For a continuous matrix field $C(t)$ on a nondegenerate compact interval, the matrix IVP $Y'=C(t)Y$, $Y(t_0)=Y_0$, has a unique global solution, with domain-relative endpoint derivatives. On a singleton the prescribed initial value determines only a map, with a unique local continuation for the constant coefficient field. ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]])

[F2] $M_e$ is invertible, and the semidiscrete rows are $\dot e=M_e^{-1}C^TM_bb-M_e^{-1}j(t)$ and $\dot b=-Ce$. ([[def-maxwell-edge-fem-semidiscretization]])

## Proof

1.1 Put $x=(e,b)\in\mathbb R^N$, $N=N_e+N_f$, and $A=\begin{pmatrix}0&M_e^{-1}C^TM_b\\-C&0\end{pmatrix}$, $f(t)=(-M_e^{-1}j(t),0)$. By [F2], $x'=Ax+f(t)$. Form the continuous $(N+1)\times(N+1)$ matrix $\mathcal A(t)=\begin{pmatrix}A&f(t)\\0&0\end{pmatrix}$ and the initial matrix $Y_0$ whose last column is $(x_0,1)^T$ and whose other columns are zero. [A1, F2, given, construct]

2.1 If $T=0$, the prescribed initial coefficients determine the unique singleton map. Hold $j$ constant at $j(0)$ and use the matrix $\mathcal A$ of step 1.1 on $[-1,1]$. By [F1] it has a unique matrix solution there through $Y_0$ at zero. Its last column has last entry one and its top block solves the constant-load coefficient ODE, giving the asserted continuation. Uniqueness on any common interval containing zero follows by applying [F1] to each compact subinterval joining zero to a point of overlap. No singleton derivative is taken. [F1, step 1.1, algebra]

3.1 Now assume $T>0$. By [F1], $Y'=\mathcal A(t)Y$, $Y(0)=Y_0$ has a unique global solution. Its last column $(x(t),s(t))^T$ satisfies $s'(t)=0$ and $s(0)=1$, so $s(t)=1$, while the top block satisfies $x'=Ax+f(t)$ and $x(0)=x_0$. Thus it gives a global solution of the Maxwell coefficient system. Any two such coefficient solutions yield two matrix solutions with the same last-column initial data; uniqueness in [F1] forces their last columns to agree. [F1, step 1.1, algebra] ∎
