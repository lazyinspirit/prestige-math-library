---
id: lem-fem-control-gradient-residual-bound
kind: lemma
title: State and adjoint Strang bounds give a reduced-gradient error certificate
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-countable-choice
  - def-linear-elliptic-pde-constrained-control-problem
  - thm-first-strang-lemma-for-conforming-perturbed-galerkin
  - thm-linear-elliptic-reduced-control-gradient-and-hessian
  - thm-linear-elliptic-control-state-and-adjoint-wellposedness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems"
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–4: reduced gradient through the adjoint equation; the local norm bound combines it with the full Strang residual estimates."
    - title: "Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization"
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
      locator: "§§2–3, printed pp. 3–7: adjoint-consistent reduced-gradient discretization and control error context; the local carrier retains every Strang defect."
---

## Statement

Assume the continuous problem of [[def-linear-elliptic-pde-constrained-control-problem]], Countable Choice, and a finite-dimensional conforming subspace $V_h\subset V$. Let $u=u(q)$ and $p=p(q)$ be the exact state and adjoint. Let $\tilde u,\tilde p\in V_h$ be computed state and adjoint, where $\tilde p$ uses $\tilde u$ in its right-hand side. Suppose the primal and transposed discrete variational problems meet the form-linearity, load-linearity, boundedness and coercivity hypotheses of [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]. Let $\varepsilon_u$ be the first-Strang right-hand side for the primal problem, and let $\varepsilon_p$ be that right-hand side for the adjoint problem when its load defect includes the additional term $\|J\|^2\varepsilon_u$. Then
$$
\|u-\tilde u\|_V\le\varepsilon_u,\qquad \|p-\tilde p\|_V\le\varepsilon_p,\qquad \|\nabla\widehat J(q)-(B^*\tilde p+\alpha q)\|_U\le\|B\|\,\varepsilon_p.
$$
The Strang terms retain best-approximation, quadrature/geometry form defects, and load defects; no defect is silently set to zero.

## Facts & Assumptions
**Given:** The exact state and adjoint; the perturbed conforming state and adjoint equations; uniform discrete coercivity; and the primal/adjoint Strang bounds defined in the Statement.

[F1] The exact state and adjoint satisfy the equations in [[def-linear-elliptic-pde-constrained-control-problem]] and [[thm-linear-elliptic-control-state-and-adjoint-wellposedness]].

[F2] The first Strang estimate is $\|w-w_h\|_V\le\inf_{v_h}\left((1+M/\beta_h)\|w-v_h\|_V+\frac{\delta_{a,h}(v_h)+\delta_{F,h}}{\beta_h}\right)$ for each bounded coercive real bilinear exact form and its bounded coercive conforming real bilinear discrete form, with bounded linear loads ([[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]).

[F3] The reduced gradient is $B^*p+\alpha q$ and $\|B^*\|\le\|B\|$ ([[thm-linear-elliptic-reduced-control-gradient-and-hessian]]).

## Proof

1.1 Apply [F2] to the exact state equation and the computed state equation. By the definition of $\varepsilon_u$, this gives $\|u-\tilde u\|_V\le\varepsilon_u$. The adjoint load formed with $\tilde u$ differs from the exact adjoint load by the functional $v\longmapsto (J(\tilde u-u),Jv)_H,$ whose norm is at most $\|J\|^2\|\tilde u-u\|_V\le\|J\|^2\varepsilon_u$. Including this term in the adjoint load defect and applying [F2] to the transposed form gives $\|p-\tilde p\|_V\le\varepsilon_p$. [F1, F2, given, algebra]

2.1 The exact reduced gradient is $B^*p+\alpha q$ by [F3], and the computed one is $B^*\tilde p+\alpha q$. Therefore $\|\nabla\widehat J(q)-(B^*\tilde p+\alpha q)\|_U =\|B^*(p-\tilde p)\|_U \le\|B\|\,\|p-\tilde p\|_V \le\|B\|\,\varepsilon_p.$ The displayed certificate includes every Strang approximation and consistency term used to form $\varepsilon_p$. [F3, step 1.1, algebra] ∎

## Remarks

For exact conforming Galerkin equations, the form and load defects vanish and the Strang bounds reduce to the matching Céa estimates. For quadrature or geometry approximations, the corresponding defects remain in $\varepsilon_u$ and $\varepsilon_p$.
