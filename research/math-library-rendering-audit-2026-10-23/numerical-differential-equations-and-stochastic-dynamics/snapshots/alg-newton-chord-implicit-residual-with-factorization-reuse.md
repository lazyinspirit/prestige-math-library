---
id: alg-newton-chord-implicit-residual-with-factorization-reuse
title: "Finite-budget Newton and chord solves with scheduled factorization reuse"
kind: algorithm
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - def-implicit-residual-and-algebraic-error-units
  - alg-finite-budget-newton-for-vector-residuals
  - alg-newton-correction-for-vector-residuals
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF pp. 21–25: diagonally implicit stages and modified Newton with a reused factorized matrix."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §4.5.2 Newton’s method for systems"
      url: "https://fncbook.com/newtonsys/"
      locator: "§4.5.2: finite-dimensional system Newton corrections and residual-based stopping."
---

## Definition

Let $m\ge1$, let $U\subseteq\mathbb R^m$ be open, and let $G:U\to\mathbb R^m$ be $C^1$, $z_0\in U$, residual tolerance $\varepsilon\ge0$, correction budget $N\in\mathbb N_0$, and refresh period $q\in\mathbb N$, $q\ge1$. Use the coordinate Jacobian convention of [[def-jacobian-matrix-and-gradient]]. Since $G$ is $C^1$, [[thm-total-derivative-computes-directional-and-partial-derivatives]] identifies this Jacobian with the matrix of $DG(z)$; write it as $J(z)$. Residual and Jacobian evaluations, norm comparisons and domain tests are returning primitives; no bound on their internal cost is specified. In chord mode also supply a terminating exact linear-system backend: on each square Jacobian it reports singularity if the matrix is singular, and otherwise returns a retained factor object, and each solve on that object terminates with the exact unique solution for its right-hand side. Factorization and solve work are charged individually. The output is a last valid iterate $z\in U$, a status, and the actual residual norm $\|G(z)\|_2$.

In **updated-Newton mode**, invoke [[alg-finite-budget-newton-for-vector-residuals]] with $G,z_0,\varepsilon,N$. It recomputes the Jacobian at every correction and returns its stated residual/budget/failure status. Re-evaluate $G$ at the returned iterate to provide the output residual norm. Count each Jacobian assembly, factorization attempt, and linear solve actually performed.

In **chord mode**, for $k=0,1,\ldots,N$, first evaluate $G(z_k)$ and put $r_k=\|G(z_k)\|_2$. If $r_k\le\varepsilon$, return $(z_k,\texttt{root},r_k)$; this status means only that the residual tolerance was met. If $k=N$, return $(z_k,\texttt{iteration-budget-exhausted},r_k)$. Otherwise, at $k=0,q,2q,\ldots$, refresh by forming $J_k=DG(z_k)$, attempting to factor it, and retaining the factorization until the next scheduled refresh. The factorization backend must either report singularity or return a factor object whose solve operation gives the exact unique solution of $J_k s=-G(z_k)$. If it reports singularity, return $(z_k,\texttt{singular-jacobian},r_k)$. At each correction obtain $s_k$ by calling the solve operation on that retained factor object with right-hand side $-G(z_k)$; do not refactor or invoke a fresh matrix-only solve. The exact-solve backend contract makes this the mathematical correction in [[alg-newton-correction-for-vector-residuals]]. If the correction $s_k$ has $z_k+s_k\notin U$, return $(z_k,\texttt{invalid-trial},r_k)$; otherwise set $z_{k+1}=z_k+s_k$ and continue. A refresh period $q=1$ updates the Jacobian every correction; $q>1$ is a chord iteration.

Both modes make no claim that a finite budget reaches an exact root or that a small residual is a forward-error bound. Record the number of Jacobian assemblies, factorization attempts, and linear solves actually performed; a dense LU correction uses one forward and one backward triangular solve. Sparse cost depends on the actual stage matrix and factorization backend and is not bounded here.
