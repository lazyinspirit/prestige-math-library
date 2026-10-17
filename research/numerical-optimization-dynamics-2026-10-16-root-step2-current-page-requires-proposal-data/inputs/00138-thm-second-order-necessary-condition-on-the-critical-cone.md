---
id: thm-second-order-necessary-condition-on-the-critical-cone
kind: theorem
title: Second-order necessity on the critical cone under LICQ
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - prop-licq-implies-mfcq-and-unique-kkt-multipliers
  - thm-critical-cone-equivalence-under-kkt
  - lem-second-order-jet-on-a-regular-level-set
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
      locator: Chapter 12, Section 12.4, Theorem 12.5 and its full proof, printed pp. 343–344; LICQ and critical-cone second-order necessity.
    - title: J. M. Lee, Introduction to Smooth Manifolds
      url: https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf
      locator: Regular-level local graph theorem, used to realize equality-feasible curves with a prescribed second-order jet.
---

## Statement

For the $C^2$ program of
[[def-inequality-constrained-program-and-kkt-geometry]], let $x_*$ be a
local minimizer satisfying LICQ, and let $(\nu,\lambda)$ be its KKT
multipliers. Then
$$
d^T\nabla_{xx}^2L(x_*,\nu,\lambda)d\ge0\qquad\text{for every }d\in\mathcal K(x_*,\nu,\lambda).
$$

## Facts & Assumptions

**Given:** The $C^2$ program, local minimizer $x_*$, LICQ, and a critical
direction $d$.

[F1] LICQ gives existence of KKT multipliers at a local minimizer
([[prop-licq-implies-mfcq-and-unique-kkt-multipliers]]).

[F2] A critical direction lies in the linearized cone and satisfies
$Dg_i(x_*)d=0$ for every active $i$ with $\lambda_i>0$
([[thm-critical-cone-equivalence-under-kkt]]).

[F3] A regular level set realizes any second-order jet satisfying
$DH(x_*)d=0$ and $DH(x_*)z+D^2H(x_*)[d,d]=0$
([[lem-second-order-jet-on-a-regular-level-set]]).

[F4] For a $C^2$ scalar function,
$f(x_*+s)=f(x_*)+\nabla f(x_*)^Ts+
\tfrac12s^T\nabla^2f(x_*)s+o(\|s\|^2)$
([[cor-second-order-taylor-expansion-with-the-hessian]]).

## Proof

1.1 If $d=0$ the result is immediate, so assume $d\ne0$. Let $P=\{i\in I(x_*):\lambda_i>0\}$ and $Z=\{i\in I(x_*):\lambda_i=0,\ Dg_i(x_*)d=0\}$. Put $H=(h,(g_i)_{i\in P})$. By LICQ the rows of $DH(x_*)$, together with the rows $Dg_i(x_*)$ for $i\in Z$, are independent. Thus the combined finite-dimensional linear map is onto. Choose $z$ solving $ Dh(x_*)z+D^2h(x_*)[d,d]=0,\quad Dg_i(x_*)z+D^2g_i(x_*)[d,d]=0\ (i\in P), $ and $ Dg_i(x_*)z+D^2g_i(x_*)[d,d]=-1\ (i\in Z). $ The first two groups say $DH(x_*)z+D^2H(x_*)[d,d]=0$. [given, F1, F2, construct]

2.1 By [F3] there is a $C^2$ curve $\gamma$ with $H(\gamma(t))=H(x_*)$, $\gamma(0)=x_*$, $\gamma'(0)=d$, and $\gamma''(0)=z$. For $i\in P$ the corresponding active inequality is exactly fixed at zero. An active $i\notin P$ has $\lambda_i=0$; by [F2], either $Dg_i(x_*)d<0$, giving $g_i(\gamma(t))=tDg_i(x_*)d+O(t^2)<0$, or $i\in Z$, giving $g_i(\gamma(t))=-t^2/2+o(t^2)<0$. Inactive inequalities remain strict by continuity. Hence $\gamma(t)$ is feasible for all sufficiently small $t>0$. [step 1.1, F2, F3, F4, algebra]

2.2 Taylor expansion [F4], criticality $\nabla f(x_*)^Td=0$, and $\gamma(t)=x_*+td+\tfrac12t^2z+o(t^2)$ give $ f(\gamma(t))-f(x_*)= \tfrac12t^2\bigl(\nabla f(x_*)^Tz+ d^T\nabla^2 f(x_*)d\bigr)+o(t^2). $ Stationarity gives $\nabla f(x_*)^Tz=-\nu^TDh(x_*)z-\sum_{i\in P}\lambda_iDg_i(x_*)z$. The jet equations in step 1.1 therefore make the coefficient in parentheses equal to $d^T\nabla_{xx}^2L(x_*,\nu,\lambda)d$. [F1, F2, step 1.1, F4, algebra]

3.1 Local minimality gives $f(\gamma(t))-f(x_*)\ge0$ for small $t>0$. If the displayed Lagrangian quadratic form were negative, step 2.2 would make this difference negative for all sufficiently small positive $t$, a contradiction. Thus the quadratic form is nonnegative, as claimed. [step 2.1, step 2.2, given, assume-contra, discharge-contradiction] ∎
