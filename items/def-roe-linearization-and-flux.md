---
id: def-roe-linearization-and-flux
kind: definition
title: "Roe linearization and Roe numerical flux"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-hyperbolic-system-and-characteristic-families]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 14 §14.2, printed pp. 148–151: Roe matrix, jump property, and numerical flux"
---

## Definition

For states $u_L,u_R$ in the open state domain $G$ of
[[def-hyperbolic-system-and-characteristic-families]], a **Roe matrix** is a map
$\widetilde A:G\times G\to\mathbb R^{m\times m}$ such that, for all
$u,u_L,u_R\in G$,
$$\widetilde A(u,u)=Df(u),\qquad \widetilde A(u_L,u_R)(u_R-u_L)=f(u_R)-f(u_L),$$
and $\widetilde A(u_L,u_R)$ is diagonalizable over $\mathbb R$ with real
eigenvalues. The map $\widetilde A$ is also continuous at each diagonal pair
$(u,u)$. If $\widetilde A=R\Lambda R^{-1}$, define
$|\widetilde A|=R|\Lambda|R^{-1}$ by replacing each diagonal eigenvalue with
its absolute value. The **Roe flux associated with this matrix** is
$$\widehat f_{\rm Roe}(u_L,u_R)=\tfrac12(f(u_L)+f(u_R))-\tfrac12|\widetilde A(u_L,u_R)|(u_R-u_L).$$
The jump identity is an algebraic conservation property. This definition does
not assert entropy admissibility of the approximate wave pattern.
