---
id: thm-mfcq-linearized-cone-equals-bouligand-tangent-cone
kind: theorem
title: MFCQ identifies the linearized and Bouligand tangent cones
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - thm-differential-rank-is-lower-semicontinuous
  - cor-regular-level-set-local-graph-theorem
  - cor-second-order-taylor-expansion-with-the-hessian
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
      locator: Chapter 12, Sections 12.3 and 12.5, printed pp. 337–341 and 351–353; linearized feasible directions, LICQ and MFCQ convention.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 2, Section 2.5.1, printed pp. 50–51; the Euclidean projection framework is used for finite-dimensional geometric certificates.
---

## Statement

For the $C^2$ program of
[[def-inequality-constrained-program-and-kkt-geometry]], if MFCQ holds at a
feasible point $x$, then
$$T_C(x)=\mathcal L_C(x).$$

## Facts & Assumptions

**Given:** The feasible point, $C^2$ constraint maps, tangent and
linearized-cone definitions, and MFCQ at $x$.

[F1] Every vector in $T_C(x)$ satisfies $Dh(x)d=0$ and
$Dg_i(x)d\le0$ for active $i$, by the definitions and first-order
differentiability
([[def-inequality-constrained-program-and-kkt-geometry]]).

[F2] If $Dh(x)$ has full row rank, this rank persists on a neighborhood,
and after restriction to that neighborhood the level $h=h(x)$ has a local
$C^2$ graph over $\ker Dh(x)$ whose graph correction $\psi$ satisfies
$\psi(0)=0$ and $D\psi(0)=0$
([[thm-differential-rank-is-lower-semicontinuous]],
[[cor-regular-level-set-local-graph-theorem]]).

[F3] A $C^2$ map with zero value and zero derivative has a second-order
remainder of size $O(\|u\|^2)$ near the base point
([[cor-second-order-taylor-expansion-with-the-hessian]]).

## Proof

1.1 Take $d\in T_C(x)$ and use its defining feasible sequence $x+t_kd_k$, where $t_k\downarrow0$ and $d_k\to d$. For $h(x)=0$, Taylor expansion gives $0=h(x+t_kd_k)=t_kDh(x)d+o(t_k)$, hence $Dh(x)d=0$. For active $i$, feasibility gives $0\ge g_i(x+t_kd_k)=t_kDg_i(x)d+o(t_k)$, hence $Dg_i(x)d\le0$. Therefore $d\in\mathcal L_C(x)$. [given, F1, algebra]

1.2 Now take $d\in\mathcal L_C(x)$. Let $w$ be the MFCQ direction; if no inequality is active set $w=0$. Both $d$ and $w$ lie in $\ker Dh(x)$. When there are equality constraints, [F2] supplies a local graph $x+u+\psi(u)$ over this kernel; with no equalities use $\psi=0$. For $t>0$ small, define $u(t)=td+t^{3/2}w$ and $x(t)=x+u(t)+\psi(u(t))$. Then $h(x(t))=0$ and [F3] yields $x(t)-x=td+t^{3/2}w+O(t^2)$, so $(x(t)-x)/t\to d$. [given, F2, F3, construct]

2.1 If $i$ is active, Taylor expansion gives $g_i(x(t))=tDg_i(x)d+t^{3/2}Dg_i(x)w+O(t^2)+o(t^2)$. When $Dg_i(x)d<0$, its order-$t$ term makes this negative for all sufficiently small $t>0$. When $Dg_i(x)d=0$, MFCQ gives $Dg_i(x)w<0$, and its order-$t^{3/2}$ term dominates the remainder of order $t^2$. Inactive inequalities remain strict by continuity. Since there are finitely many inequalities, one positive $\tau$ works for all of them and every $0<t<\tau$. Thus $x(t)$ is feasible for such $t$. [step 1.2, given, algebra]

3.1 Taking $t_k=\tau/2^{k+1}$ gives feasible points with $t_k\downarrow0$ and $(x(t_k)-x)/t_k\to d$, so $d\in T_C(x)$. This proves $\mathcal L_C(x)\subseteq T_C(x)$; step 1.1 gives the reverse inclusion. [step 1.1, step 1.2, step 2.1, construct] ∎
