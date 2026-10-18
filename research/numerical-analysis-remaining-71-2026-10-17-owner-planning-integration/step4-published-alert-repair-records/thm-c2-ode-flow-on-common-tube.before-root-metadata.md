---
id: thm-c2-ode-flow-on-common-tube
kind: theorem
title: "A $C^2$ vector field has a $C^2$ flow on a common compact tube"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-c1-ode-flow-on-common-tube
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-autonomous-ordinary-differential-equation
  - def-first-order-ode-initial-value-problem-and-solution
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
  - thm-gronwall-integral-inequality
  - thm-chain-rule-for-total-derivatives
  - thm-ftc-second-part
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-heine-cantor-metric
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Printed pp. 26–30: variational equations and smooth flow dependence near a periodic trajectory."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Source lines 587–645: periodic flow, variational equation, and Floquet data."
---

## Statement

Let $f:U\to\mathbb R^n$ be $C^2$ on an open set $U$. Let $T_+>0$, let $W\subset U$ be open, and suppose every solution from $x\in W$ exists on an open time interval containing $[0,T_+]$ and stays in one compact convex set $K\subset U$ for all $t\in[0,T_+]$. Write $\Phi(t,x)=\phi_t(x)$. Then $\Phi$ is $C^2$ jointly in $(t,x)$ on $(0,T_+)\times W$, locally on every common-tube neighborhood in $W$, and its derivatives extend continuously in time to $[0,T_+]$. Its first state derivative $S(t,x)=D_x\Phi(t,x)$ solves
$$
\partial_t S=Df(\Phi)S,\qquad S(0,x)=I_n,
$$
and its second state derivative is the bilinear map $H(t,x)$ determined by
$$
\partial_t H[u,v]=Df(\Phi)H[u,v]+D^2f(\Phi)[S u,S v],\qquad H(0,x)[u,v]=0.
$$
In particular $\partial_t\Phi=f(\Phi)$, $\partial_{tx}\Phi=Df(\Phi)S$, and $\partial_{tt}\Phi=Df(\Phi)f(\Phi)$. The assertion is local to the stated common tube.

## Facts & Assumptions

**Given:** The $C^2$ vector field, $T_+$, open initial-state set $W$, and a common compact convex tube containing all solution graphs on $[0,T_+]$.

[F1] On a common compact tube the flow is $C^1$ in its initial state, and $S=D_x\Phi$ is the unique solution of the variational equation ([[lem-c1-ode-flow-on-common-tube]]). Its proof's difference-quotient estimate is uniform over the compact time interval.

[F2] A classical solution of the autonomous IVP is differentiable in time and satisfies $\partial_t\Phi=f(\Phi)$ ([[def-autonomous-ordinary-differential-equation]], [[def-first-order-ode-initial-value-problem-and-solution]]).

[F3] The $C^2$ convention supplies continuous first and second total derivatives; on compact $K$, $Df$ and $D^2f$ are bounded and $D^2f$ is uniformly continuous ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-heine-cantor-metric]]).

[F4] A continuous-coefficient linear matrix IVP has a unique solution on the compact interval; adjoining a constant coordinate also solves an affine linear equation ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[F5] A nonnegative solution of $u(t)\le A+L\int_a^t u(s)\,ds$ is bounded by $Ae^{L(t-a)}$ ([[thm-gronwall-integral-inequality]]).

[F6] Integrating a differentiable curve recovers its endpoint difference, coordinatewise for vector-valued curves, and the norm of a vector integral is at most the integral of its norm ([[thm-ftc-second-part]], [[thm-norm-inequality-for-the-vector-valued-integral]]).

[F7] Derivatives of compositions obey the chain rule ([[thm-chain-rule-for-total-derivatives]]).

## Proof
1.1 Fix a base state $x\in W$. By [F1], $\Phi$ is $C^1$ in $x$ and $S$ solves $S'=A S$, where $A(t)=Df(\Phi(t,x))$. The coefficient is bounded on $[0,T_+]$ by [F3]; integrating the variational equation by [F6] and applying [F5] bounds $S$ uniformly in $t$. The flow itself is jointly continuous in $(t,x)$ on the common tube by [F1] and the ODE relation [F2]. [F1, F2, F3, F5, F6, given]

2.1 For a direction $h\in\mathbb R^n$, define a matrix $B_h(t)$ by $B_h(t)v=D^2f(\Phi(t,x))[S(t,x)h,S(t,x)v]$. It is continuous and has norm at most $C\|h\|_2$ for a finite constant $C$, by [F3] and the bound on $S$. Let $H_h$ solve $H_h'=AH_h+B_h$, $H_h(0)=0$. For each column, adjoining a constant coordinate turns its inhomogeneous linear IVP into a homogeneous linear system; applying [F4] to the augmented matrix gives a unique solution on $[0,T_+]$. Its integral equation from [F6] and [F5] give $\|H_h\|_\infty\le C'\|h\|_2$ for a finite constant $C'$. [F3, F4, F5, F6, step 1.1, algebra]

2.2 For small $h$ with $x+h\in W$, put $\Delta(t)=\Phi(t,x+h)-\Phi(t,x)$, $S_h(t)=S(t,x+h)$, and $A_h(t)=Df(\Phi(t,x+h))$. The uniform remainder in [F1] gives $\Delta=S h+o(\|h\|_2)$ uniformly on $[0,T_+]$. On each segment between $\Phi(t,x)$ and $\Phi(t,x+h)$, the chain rule [F7] and [F6] applied coordinatewise to $Df$ give $ A_h-A=\int_0^1 D^2f(\Phi+s\Delta)[\Delta,\cdot] ds. $ Uniform continuity of $D^2f$ on $K$ [F3] and $\Delta=S h+o(\|h\|)$ therefore imply $A_h-A=D^2f(\Phi)[S h,\cdot]+o(\|h\|_2)$ uniformly in $t$. [F1, F3, F6, F7, step 1.1, algebra]

3.1 The variational equations give $S_h'=A_hS_h$ and $S'=AS$. Subtract these and the equation for $H_h$ from step 2.1, setting $R_h=S_h-S-H_h$, to obtain $ R_h'=A_hR_h+(A_h-A)S+(A_h-A)H_h-B_h,\qquad R_h(0)=0. $ By step 2.2, $(A_h-A)S-B_h=o(\|h\|)$ uniformly; also $A_h-A=O(\|h\|)$ and $H_h=O(\|h\|)$ by steps 2.2 and 2.1. Thus the forcing after $A_hR_h$ is $o(\|h\|)$ uniformly. The coefficients $A_h$ are uniformly bounded on $K$, so [F5] applied to the integral equation for $R_h$ from [F6] gives $\|R_h\|_\infty=o(\|h\|_2)$. Therefore $D_xS(t,x)[h]=H_h(t)$, proving existence of the second state derivative. [F1, F3, F5, F6, step 2.1, step 2.2, algebra]

4.1 If $x_j\to x$, [F1] gives uniform convergence of $\Phi(\cdot,x_j)$ and $S(\cdot,x_j)$ on $[0,T_+]$. Continuity of $D^2f$ on $K$ then gives uniform convergence of the coefficients and forcing in the linear equations for $H_h$; subtracting their integral equations and applying [F5] proves $H_h(\cdot,x_j)\to H_h(\cdot,x)$ uniformly. Thus the second state derivative is continuous in $(t,x)$. [F1, F3, F5, F6, step 2.1, step 3.1]

5.1 By [F2], $\partial_t\Phi=f(\Phi)$. Differentiating this identity in $x$ and in $t$ using [F7] gives $\partial_{tx}\Phi=Df(\Phi)S$ and $\partial_{tt}\Phi=Df(\Phi)f(\Phi)$. These derivatives and $D_x^2\Phi=H$ are continuous by steps 1.1 and 4.1, so $\Phi$ is jointly $C^2$ on the stated tube. [F2, F7, step 1.1, step 4.1] ∎
