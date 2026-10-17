---
id: alg-certified-constraint-emptiness-search
kind: algorithm
title: Certified constraint-emptiness search with a finite query budget
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 7
deps: [def-spatial-global-optimization-problem, thm-interval-lipschitz-bound-sound-consistent]
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

Input a nonempty box $D_0$ from [[def-spatial-global-optimization-problem]], a finite nonempty list of constraints $g_i(x)\le0$, a positive integer query budget $N$, and a deterministic oracle returning a sound lower bound $\ell_i(B)\le\inf_{x\in B}g_i(x)$ for every queried box. The oracle returns explicit unavailable or non-finite statuses when it cannot certify a finite bound. For a valid arithmetic-DAG oracle as in [[thm-interval-lipschitz-bound-sound-consistent]], choose one fixed exponent range large enough to avoid overflow and set the initial precision on a box of split depth $d$ to $p_0+d$, where $p_0\ge2$.

Initialize a FIFO queue with $(D_0,0)$ and an empty ledger. Each oracle query consumes one unit, including a singleton precision refinement. Before a query, if the budget is exhausted, return the current queue and ledger with `budget-exhausted`. Query all $g_i$ on the box at its scheduled precision and record the returned lower bounds. If some $\ell_i(B)>0$, record the box as certified empty and remove it from the queue. If no lower bound is positive and $B$ has positive width, bisect a longest coordinate at its exact midpoint, using the least coordinate index to break ties, and enqueue the two closed children at depth $d+1$. If $B$ is a singleton with no positive lower bound, enqueue the same point with the next precision and count this as a new query when processed. An unavailable report returns `inconclusive` without an emptiness claim. When the queue is empty, return `infeasible` with the complete ledger. This procedure has no termination claim without an additional separation condition; it returns infeasible only from a finite cover by certified-empty boxes.
