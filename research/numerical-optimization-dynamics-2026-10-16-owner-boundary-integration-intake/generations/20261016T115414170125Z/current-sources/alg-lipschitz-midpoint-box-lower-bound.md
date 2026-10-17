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

Input a compact-box instance $(D_0,C,f)$, a finite arithmetic expression DAG representing $f$, a closed box $B=\prod_{j=1}^n[a_j,b_j]\subseteq D_0$, a nonnegative certified constant $L$, a precision $p\ge2$, a dyadic interval format with fixed exponent bounds, a certificate that the midpoint $m$ is in $C$ (automatic when $C=D_0$), and a validated inequality
$$|f(x)-f(y)|\le L\max_j|x_j-y_j|\qquad(x,y\in B).$$
Let $m_j=(a_j+b_j)/2$ and $r=\max_j(b_j-a_j)/2$. Apply [[alg-interval-dag-box-enclosure-and-bound]] to the supplied DAG at the singleton $\{m\}$ with the supplied precision and format to obtain $I_p(\{m\})=[q_-,q_+]$; its endpoint-rounding rule encloses a possibly non-dyadic midpoint. Compute a directed-rounding upper bound $r^+\ge r$ and a downward-rounded lower endpoint $\ell_B\le q_- - Lr^+$. Return the pointwise lower-bound report $\ell_B$ and the feasible midpoint candidate $(m,q_+)$. If the feasibility certificate or either interval or arithmetic calculation is unavailable or non-finite, return inconclusive without a feasible-witness claim.

