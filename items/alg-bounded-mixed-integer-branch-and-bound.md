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

Input a finite-dimensional compact continuous box $X=\prod_{j=1}^n[\alpha_j,\beta_j]$ with $n\ge0$ and finite ordered endpoints, a finite integer box
$$Z=\prod_{j=1}^r\bigl([a_j,b_j]\cap\mathbb Z\bigr),\qquad r\ge0,\quad a_j,b_j\in\mathbb Z,\quad a_j\le b_j,$$
a continuous objective and its inequality constraints on $X\times Z$ represented by finite factorable expression DAGs, tolerance $\varepsilon>0$, positive integer node budget $N$, a verified interval/relaxation rule table, precision $p\ge2$, a dyadic interval format with fixed exponent bounds, and deterministic verified bound oracles. Every relaxation rule must meet [[alg-factorable-mccormick-box-relaxation]], and every bound used for pruning or a gap certificate must satisfy [[thm-factorable-dual-certificate-is-valid-box-lower-bound]] on each nonempty feasible node. The integer set $Z$ is finite by boundedness of every coordinate interval. Every main-tree node evaluation consumes one unit of the budget and each oracle call returns in finite time or gives an explicit unavailable status.

When $r=0$, the empty product defining $Z$ is the singleton assignment with no integer coordinates. When $n=0$, $X$ is the singleton empty tuple. Before any oracle or supplier call, represent it instead by a dummy continuous coordinate in $[0,0]$ and make every objective and constraint DAG ignore that coordinate. Run all instructions below on this one-dimensional box; on return, delete the dummy coordinate from every witness and ledger box. This bijective representation preserves all objective and constraint values and admits every spatial subcall without excluding purely integer inputs.

A main-tree node is $(J,B)$, where $J$ is a product of bounded integer intervals and $B\subseteq X$ is a continuous box. Relax each integer interval to its real hull and call [[alg-factorable-mccormick-box-relaxation]] on the objective DAG and all constraint DAGs over $B$ times those hulls, passing the declared precision and interval format. A verified dual lower bound is valid on the original integer-feasible node by [[thm-factorable-dual-certificate-is-valid-box-lower-bound]]. The oracle may also return a feasible mixed-integer witness with a verified objective upper bound, a proof of emptiness, or an unavailable status. The latter never supplies a finite lower bound. Store lower bounds for terminal nodes. Retain certified-empty nodes and their proofs in the terminal ledger, excluding them from lower-bound comparisons, closure tests, and split selection; they require no lower bound. Close a node not certified empty only when its lower bound is at least $U-\varepsilon$, retaining that bound in the global ledger.

Initialize the terminal ledger with the root $(Z,X)$, a FIFO queue containing that unevaluated root, remaining budget $N$, incumbent $U=+\infty$, and no incumbent witness. Each returned feasible witness with verified upper bound $U_x<U$ replaces the incumbent and sets $U=U_x$; retain the earlier witness on an equal bound. Keep unevaluated nodes in the FIFO queue ordered by creation. Generate lower integer children before upper integer children, and lower-half continuous children before upper-half children, appending children in this order. Before each node evaluation, if no call remains, return the current ledger with `budget-exhausted`; otherwise evaluate the oldest pending node and charge one call. When no node is pending, return infeasible if every terminal node is certified empty. If every terminal node not certified empty has a valid lower bound, let $L$ be the least such bound; when $U$ is finite and $U-L\le\varepsilon$, return the feasible witness and global epsilon certificate. Retain bounds for closed nodes in this calculation. Otherwise choose an evaluated nonclosed node not certified empty with least lower bound, breaking ties by creation order. If an integer interval has at least two values, choose the least-index such coordinate and split at $m=\lfloor(a+b)/2\rfloor$ into the disjoint children $[a,m]\cap\mathbb Z$ and $[m+1,b]\cap\mathbb Z$. Otherwise, if a continuous width is positive, split a longest continuous side at its exact midpoint, using least coordinate index ties. Children replace the parent in the coverage frontier and are evaluated before another split. A mixed singleton node that is neither certified empty nor closed by the gap test returns `inconclusive`.

If a mixed relaxation bound is unavailable or non-finite on a node not certified empty, stop the main tree and, if at least one call remains for each assignment, enumerate every $z\in Z$ in lexicographic order. Substitute $z$ into the objective and constraint DAGs to form $f_z$ and $C_z=\{x\in X:g_i(x,z)\le0\text{ for all }i\}$, then invoke [[alg-certified-spatial-branch-and-bound]] on $(X,C_z,f_z)$ with the continuous budget allocated to that assignment. Explicitly, with $M=|Z|$ and remaining integer budget $R\ge M$, set $q=\lfloor R/M\rfloor$ and $h=R-Mq$. Give the first $h$ assignments $q+1$ calls each and the remaining $M-h$ assignments $q$ calls each. These are positive integer budgets summing to $R$. If any assignment has an oracle failure, a pending or missing report, or a terminal leaf not certified empty without a valid finite lower bound, return inconclusive. If every assignment is certified infeasible, return infeasible before taking any minimum. Otherwise the complete assignment ledgers have a nonempty finite collection of terminal leaves not certified empty. Let $L$ be the minimum of their lower bounds. Let $U$ be the minimum of the feasible upper bounds returned by these ledgers if there are any, and set $U=+\infty$ if there is no feasible witness. Return a global epsilon certificate only when $U$ is finite and $U-L\le\varepsilon$; otherwise return inconclusive. If enumeration does not fit in the remaining budget, return inconclusive. This fallback is finite because $Z$ is finite. The method makes no polynomial-complexity claim.

