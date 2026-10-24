---
id: thm-godunov-flux-is-consistent-and-conservative
kind: theorem
title: "The local Godunov flux is consistent and conservative"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  - def-godunov-flux-from-a-local-riemann-solver
  - thm-local-small-data-riemann-solver
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 13 §13.2, printed pp. 138–140: interface flux and finite-volume conservation"
---

## Statement

For all equal states $u$ in the local solver neighborhood,
$G(u,u)=f(u)$. For any finite periodic array of length $n\ge1$ whose adjacent pairs lie in the
local flux domain, define the update (indices modulo $n$)
$$U_j^{new}=U_j-\nu\bigl(G(U_j,U_{j+1})-G(U_{j-1},U_j)\bigr).$$
For any scalar $\nu$, this update using one two-state flux at each interface
preserves the sum of cell states.

## Facts & Assumptions

**Given:** The local Riemann solver and Godunov flux definition on a neighborhood of states.

[F1] [[def-godunov-flux-from-a-local-riemann-solver]]: $G(u_L,u_R)$ is the
physical flux at $\xi=0$ of the local self-similar profile, defined by its
common one-sided flux if the profile jumps there.

[F2] [[thm-local-small-data-riemann-solver]]: equal left/right data have the constant profile $u(\xi)=u$.

## Proof

1.1 With equal data, uniqueness of the local strength vector gives $\sigma=0$, so [F2] makes the profile constant. Evaluating it at $\xi=0$ in [F1] gives $G(u,u)=f(u)$. [F1, F2, algebra]

2.1 The periodic update in the statement sums to $\sum_jU_j-\nu\sum_j(G(U_j,U_{j+1})-G(U_{j-1},U_j))$; each shared interface flux appears once with coefficient $-\nu$ and once with $+\nu$, so the second sum is zero. This uses the same oriented two-state flux at each interface and asserts no stability or CFL condition. [given, F1, algebra] ∎
