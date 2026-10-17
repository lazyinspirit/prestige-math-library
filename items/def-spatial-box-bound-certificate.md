---
id: def-spatial-box-bound-certificate
kind: definition
title: Certified lower, upper, and emptiness bounds on a box
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 1
deps: [def-spatial-global-optimization-problem, def-infimum]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "Thomas Hübner, Akshay Gupte, and Steffen Rebennack, Spatial branch-and-bound for nonconvex separable piecewise linear optimization, §4"
      url: "https://optimization-online.org/wp-content/uploads/2024/05/Spatial-branch-and-bound-Piecewise-Linear-IJOC-revisions.pdf"
---

## Definition

Fix an instance $(D_0,C,f)$ from [[def-spatial-global-optimization-problem]] and a closed subbox $B\subseteq D_0$. A **certified box report** may contain any combination of the following fields:

- A **feasible witness** $(x_B,U_B)$, with $x_B\in B\cap C$ and a verified upper bound $f(x_B)\le U_B$.
- A **lower bound** $\ell_B\in\mathbb R$ satisfying $\ell_B\le f(x)$ for every $x\in B\cap C$. This pointwise condition is vacuous when $B\cap C=\emptyset$; when $B\cap C\ne\emptyset$, it is equivalent to $\ell_B\le\inf_{x\in B\cap C}f(x)$.
- An **empty-box proof** establishing $B\cap C=\emptyset$.
- A non-finite or unavailable status, which makes no feasibility, lower-bound, or optimality claim.

A box is **closed** for a requested tolerance $\varepsilon>0$ only when it has a lower bound and $\ell_B\ge U-\varepsilon$, where $U$ is the best currently verified feasible upper bound. Closing a box stops further subdivision but retains its lower bound in the global ledger. A report lacking a required field is not repaired by a numerical guess.

