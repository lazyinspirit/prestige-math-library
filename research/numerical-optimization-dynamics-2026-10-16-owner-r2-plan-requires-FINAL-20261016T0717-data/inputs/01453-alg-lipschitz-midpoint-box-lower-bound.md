---
id: alg-lipschitz-midpoint-box-lower-bound
kind: algorithm
title: Validated Lipschitz midpoint lower bounds on boxes
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 5
deps: [alg-interval-dag-box-enclosure-and-bound, def-spatial-box-bound-certificate]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§11–12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "Thomas Hübner, Akshay Gupte, and Steffen Rebennack, Spatial branch-and-bound for nonconvex separable piecewise linear optimization, §4"
      url: "https://optimization-online.org/wp-content/uploads/2024/05/Spatial-branch-and-bound-Piecewise-Linear-IJOC-revisions.pdf"
---

## Definition

Input a box $B=\prod_{j=1}^n[a_j,b_j]$, a nonnegative certified constant $L$, and a validated inequality
$$|f(x)-f(y)|\le L\max_j|x_j-y_j|\qquad(x,y\in B).$$
Let $m_j=(a_j+b_j)/2$ and $r=\max_j(b_j-a_j)/2$. Use [[alg-interval-dag-box-enclosure-and-bound]] at the singleton $\{m\}$ to obtain $I_p(\{m\})=[q_-,q_+]$. Compute a directed-rounding upper bound $r^+\ge r$ and a downward-rounded lower endpoint $\ell_B\le q_- - Lr^+$. Return the lower-bound report $\ell_B$ and the feasible midpoint candidate $(m,q_+)$. If either interval or arithmetic calculation is non-finite, return inconclusive.

