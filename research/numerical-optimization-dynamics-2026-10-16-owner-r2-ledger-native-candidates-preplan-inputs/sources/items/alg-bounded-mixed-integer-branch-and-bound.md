---
id: alg-bounded-mixed-integer-branch-and-bound
kind: algorithm
title: Bounded mixed-integer branch and bound with a finite enumeration fallback
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 7
deps: [alg-certified-spatial-branch-and-bound, alg-factorable-mccormick-box-relaxation, def-spatial-global-optimization-problem, thm-factorable-dual-certificate-is-valid-box-lower-bound]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§12 and 17–18"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "Thomas Hübner, Akshay Gupte, and Steffen Rebennack, Spatial branch-and-bound for nonconvex separable piecewise linear optimization, §2.1"
      url: "https://optimization-online.org/wp-content/uploads/2024/05/Spatial-branch-and-bound-Piecewise-Linear-IJOC-revisions.pdf"
---

## Definition

Input a finite-dimensional compact continuous box $X$, a finite integer box
$$Z=\prod_{j=1}^r\bigl([a_j,b_j]\cap\mathbb Z\bigr),\qquad r\ge0,\quad a_j,b_j\in\mathbb Z,\quad a_j\le b_j,$$
a continuous objective and feasible constraints on $X\times Z$ represented by finite factorable expression DAGs, tolerance $\varepsilon>0$, positive integer node budget $N$, a verified interval/relaxation rule table, and deterministic verified bound oracles. Every relaxation rule must meet [[alg-factorable-mccormick-box-relaxation]], and every bound used for pruning or a gap certificate must meet [[thm-factorable-dual-certificate-is-valid-box-lower-bound]] on a nonempty feasible node. The integer set $Z$ is finite by boundedness of every coordinate interval. Every main-tree node evaluation consumes one unit of the budget and each oracle call returns in finite time or gives an explicit unavailable status.

When $r=0$, the empty product defining $Z$ is the singleton assignment with no integer coordinates.

A main-tree node is $(J,B)$, where $J$ is a product of bounded integer intervals and $B\subseteq X$ is a continuous box. Relax each integer interval to its real hull and construct the node relaxation with [[alg-factorable-mccormick-box-relaxation]]; when it supplies a verified dual lower bound, its validity on the original integer-feasible node is covered by [[thm-factorable-dual-certificate-is-valid-box-lower-bound]]. The oracle may also return a feasible witness with a verified objective upper bound, an emptiness proof, or an unavailable status. The latter never supplies a finite lower bound. Store lower bounds for all nonempty terminal nodes; prune only certified-empty nodes, and close a node only when its lower bound is at least $U-\varepsilon$, retaining that bound in the global ledger.

Process pending nodes deterministically. Before an oracle evaluation, return the current ledger with `budget-exhausted` if no call remains. Among evaluated nonclosed nodes, select one with least lower bound, breaking ties by creation order. If an integer interval has at least two values, choose the least-index such coordinate and split at $m=\lfloor(a+b)/2\rfloor$ into the disjoint children $[a,m]\cap\mathbb Z$ and $[m+1,b]\cap\mathbb Z$. Otherwise, if a continuous width is positive, split a longest continuous side at its exact midpoint, using least coordinate index ties. A mixed singleton node is evaluated once; if the oracle does not certify it empty or close it with a valid gap, return `inconclusive` rather than trying to split it. Children replace their parent.

If a verified mixed relaxation bound is unavailable and the remaining budget can give every remaining integer assignment a positive continuous subproblem budget, invoke [[alg-certified-spatial-branch-and-bound]] once for each $z\in Z$ in lexicographic order. Allocate the remaining calls evenly, with the extra calls assigned to the first assignments. Aggregate only complete terminal lower-bound ledgers and feasible upper bounds. Return a global epsilon certificate only when their aggregate gap is at most $\varepsilon$; if any assignment has an incomplete ledger or oracle failure, return inconclusive. If enumeration does not fit in the remaining budget, return inconclusive. This fallback is finite because $Z$ is finite. The method makes no polynomial-complexity claim.

