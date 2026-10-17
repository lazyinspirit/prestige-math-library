---
id: thm-second-order-sufficient-condition-on-the-critical-cone
kind: theorem
title: Strict second-order positivity on the critical cone gives a strict local minimum
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - thm-critical-cone-equivalence-under-kkt
  - cor-second-order-taylor-expansion-with-the-hessian
  - thm-heine-borel-rn
  - thm-compact-iff-finite-intersection-property
  - thm-extreme-value-metric
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Section 12.4, Theorem 12.6 and its full proof, printed pp. 345–346; strict positivity on the critical cone needs no constraint qualification.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 3, Section 3.1.3, the second-order Taylor and convexity tools used in local optimality arguments.
---

## Statement

For the $C^2$ program of
[[def-inequality-constrained-program-and-kkt-geometry]], suppose $x_*$ is
feasible and has KKT multipliers $(\nu,\lambda)$. If
$$
d^T\nabla_{xx}^2L(x_*,\nu,\lambda)d>0\quad\text{for every nonzero }d\in\mathcal K(x_*,\nu,\lambda),
$$
then $x_*$ is a strict local minimizer. The condition is vacuous when the
critical cone is $\{0\}$; no constraint qualification is assumed.

## Facts & Assumptions

**Given:** The $C^2$ program, feasible KKT tuple $(x_*,\nu,\lambda)$, and
the strict positivity condition in the Statement.

[F1] A critical direction is in the linearized cone and satisfies
$Dg_i(x_*)d=0$ on every positively weighted active inequality
([[thm-critical-cone-equivalence-under-kkt]]).

[F2] The unit sphere in $\mathbb R^n$ is compact by Heine–Borel, and
continuous real functions attain their extrema on nonempty compact metric
spaces ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F3] A compact metric space has the finite-intersection property: nested
nonempty closed subsets have nonempty intersection
([[thm-compact-iff-finite-intersection-property]]).

[F4] A $C^2$ scalar function has the second-order Taylor expansion with
Peano remainder ([[cor-second-order-taylor-expansion-with-the-hessian]]).

## Proof

1.1 Write $Q(d)=d^T\nabla_{xx}^2L(x_*,\nu,\lambda)d$ and $S=\{d:\|d\|_2=1\}$. The critical cone intersected with $S$ is closed in $S$ by its linear equalities and inequalities. If this intersection is nonempty, it is compact by [F2], and [F2] gives a minimum $\gamma=\min Q(d)>0$ there. The relatively open set $N=\{u\in S:Q(u)>\gamma/2\}$ contains that intersection. If the intersection is empty, put $N=\varnothing$. [given, F1, F2, algebra]

1.2 For $k\ge1$, let $D_k$ be the set of unit directions $u=(x-x_*)/\|x-x_*\|_2$ for feasible $x\ne x_*$ with $\|x-x_*\|_2<1/k$ and $f(x)\le f(x_*)$. If $D_k$ is empty for some $k$, there is no such point in that neighborhood and strict local minimality holds. Otherwise, if bad points occur arbitrarily close with directions outside $N$, the nonempty nested closed sets $\overline{D_k\setminus N}$ have the finite-intersection property in the compact sphere $S$. By [F3] choose $d\in\bigcap_k\overline{D_k\setminus N}$; since $N$ is relatively open, $d\notin N$ and $\|d\|_2=1$. [F2, F3, construct]

2.1 For each $k$, the closure property in step 1.2 supplies a direction $u$ with $\|u-d\|_2<1/k$ from a feasible bad point $x=x_*+tu$, where $0<t<1/k$ and $f(x)\le f(x_*)$. Taylor expansion [F4] and equality feasibility imply $Dh(x_*)u=O(t)$; active inequality feasibility gives $Dg_i(x_*)u\le O(t)$ for every active $i$. The objective inequality gives $\nabla f(x_*)^Tu\le O(t)$. Letting $k$ grow in these bounds, using $\|u-d\|_2<1/k$ and $t<1/k$, shows $Dh(x_*)d=0$, $Dg_i(x_*)d\le0$ on the active set, and $\nabla f(x_*)^Td\le0$. KKT stationarity and [F1] also give $\nabla f(x_*)^Td\ge0$, so $d$ is a unit critical direction. This contradicts $d\notin N$: if the critical unit set is empty there is no such $d$, and otherwise every such $d$ belongs to $N$. Hence for some $k_0$, every feasible bad point with $0<\|x-x_*\|_2<1/k_0$ has direction in $N$. [F1, F3, F4, step 1.2, algebra]

3.1 If the critical unit set is empty, step 2.1 already excludes all bad points sufficiently near $x_*$, proving strict local minimality. Otherwise, let $\gamma>0$ be as in step 1.1. At a feasible $x=x_*+tu$, KKT gives $L(x_*,\nu,\lambda)=f(x_*)$, $\nabla_xL(x_*,\nu,\lambda)=0$, and $L(x,\nu,\lambda)\le f(x)$. For bad points sufficiently close, step 2.1 gives $u\in N$, so $Q(u)>\gamma/2$. The Taylor expansion [F4] of the $C^2$ Lagrangian has a remainder $o(t^2)$, uniformly as $x\to x_*$; after shrinking the neighborhood it yields $L(x,\nu,\lambda)>f(x_*)$. This contradicts $L(x,\nu,\lambda)\le f(x)\le f(x_*)$. Therefore no distinct feasible point sufficiently near $x_*$ has objective at most $f(x_*)$, proving that $x_*$ is a strict local minimizer. [F4, step 1.1, step 2.1, algebra] ∎
