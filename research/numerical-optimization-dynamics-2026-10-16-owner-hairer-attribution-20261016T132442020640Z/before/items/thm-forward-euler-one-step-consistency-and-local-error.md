---
id: thm-forward-euler-one-step-consistency-and-local-error
kind: theorem
title: "Forward Euler has uniform local order one and a one-step Lipschitz bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-one-step-ode-method-local-defect-order-and-stability
  - def-convex-subset-of-euclidean-space
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-first-order-ode-initial-value-problem-and-solution
  - lem-time-along-ode-solution-derivative-bound
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - cor-mean-value-theorem
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
  - thm-mean-value-inequality-for-total-derivatives
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III, Sections III.2–III.3"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis (Spring 2012), Chapter 5, Sections 5.2.1–5.2.2"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Julia Edition, Sections 6.2.1–6.2.2"
      url: "https://fncbook.com/euler/"
dependency_level: 1
---

## Statement

Let $d\ge1$, $T>0$, and let $V\subseteq\mathbb R\times\mathbb R^d$ be an open time-state domain whose fibers $V_t:=\{z:(t,z)\in V\}$ are open and convex. Let $K\subset V$ be compact. Let $f:V\to\mathbb R^d$ have continuous first partial derivatives, and suppose $y$ is a solution of $y'=f(t,y)$, $y(0)=y_0$, on an open interval containing $[0,T]$, with graph on $[0,T]$ contained in $K$. For each local defect under consideration, require the Euler input and output time-state pairs to lie in $K$; the exact solution segment already lies in $K$.

For $1\le i,j\le d$, assume finite constants $F_j,M_{t,i},M_{ij},L\ge0$ satisfy throughout $V$

$$|f_j(t,z)|\le F_j,\qquad |\partial_t f_i(t,z)|\le M_{t,i},\qquad |\partial_{z_j}f_i(t,z)|\le M_{ij},\qquad \|D_yf(t,z)w\|_2\le L\|w\|_2\quad(w\in\mathbb R^d).$$

Here $D_yf$ is the matrix with entries $\partial_{z_j}f_i$, and the last inequality defines the operator bound used below. The forward Euler map is $\Psi_h(t,v)=v+h f(t,v)$. Then, with $B_i:=M_{t,i}+\sum_{j=1}^dM_{ij}F_j$, for every $t\in[0,T)$ and $h>0$ with $t+h\le T$ whose Euler input and output pairs lie in $K$, its local defect satisfies

$$\|\delta_h(t;y)\|_2\le \frac{h^2}{2}\left(\sum_{i=1}^d B_i^2\right)^{1/2},$$

so it has uniform local order one on $K$ along $y|_{[0,T]}$, with $h_0=T$. For every $t\in[0,T]$, every admitted $h>0$, and every $u,v\in V_t$,

$$\|\Psi_h(t,u)-\Psi_h(t,v)\|_2\le(1+Lh)\|u-v\|_2.$$

This is a local defect and one-step stability result. It does not assert a global error estimate or an order for any other named method.

## Facts & Assumptions

**Given:** The stated open ODE domain with open convex state fibers, continuous first partial derivatives and bounds, the solution through $(0,y_0)$ on an open interval containing $[0,T]$, the compact set $K$ containing its graph and the Euler time-state pairs under consideration, and the definition of uniform local order.

[F1] [[def-one-step-ode-method-local-defect-order-and-stability]]: $\delta_h(t;y)=\Psi_h(t,y(t))-y(t+h)$; uniform local order one means a uniform $O(h^2)$ defect; one-step Lipschitz stability is the displayed $1+Lh$ bound.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]]: an IVP has open time-state domain, and a solution is differentiable on an interval, has graph in the domain, and satisfies $y'=f(t,y)$ and its initial value.

[F3] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous first partial derivatives give a total derivative whose matrix is the Jacobian of those partials.

[F4] [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]: total differentiability implies continuity at each point.

[F5] [[def-convex-subset-of-euclidean-space]]: a convex set contains the segment between each pair of its points; each open convex state fiber has this property.

[F6] [[thm-mean-value-inequality-for-total-derivatives]]: on an open convex Euclidean set, a uniform derivative bound $M$ implies $\|g(u)-g(v)\|_2\le M\|u-v\|_2$.

[F7] [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]: a continuous vector field locally Lipschitz in the state variable has a unique maximal IVP solution. The given derivative bound and [F3]–[F6] provide that local Lipschitz condition on each state fiber.

[F8] [[lem-time-along-ode-solution-derivative-bound]]: along an exact solution, $g_i(s)=f_i(s,y(s))$ has derivative bounded by $B_i=M_{t,i}+\sum_{k=1}^dM_{ik}F_k$.

[F9] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: for any initial time $t$ on the solution interval, the solution satisfies $y(t+h)=y(t)+\int_t^{t+h}f(s,y(s))\,ds$.

[F10] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable in its interior, its endpoint difference is its derivative at an interior point times the interval length.

[F11] [[def-euclidean-inner-product]]: for $x\in\mathbb R^d$, $\|x\|_2^2=\sum_{i=1}^d x_i^2$.

[F12] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for $x,z\in\mathbb R^d$, the Euclidean norm satisfies $\|x+z\|_2\le\|x\|_2+\|z\|_2$.

## Proof

1.1 By [F3]–[F4], $f$ is totally differentiable and continuous on $V$, with state derivative matrix $D_yf$. On each open convex fiber $V_t$, the derivative bound and [F5]–[F6] make $f(t,\cdot)$ $L$-Lipschitz. Thus the hypotheses of [F7] hold and the IVP has a unique maximal solution; the given solution agrees with it throughout $[0,T]$. [given, F2, F3, F4, F5, F6, F7]

1.2 Fix any $t\in[0,T)$ and $h>0$ with $t+h\le T$ satisfying the stated compact-set condition, and fix a component $i$. Define $g_i(s):=f_i(t+s,y(t+s))$ for $0\le s\le h$. The exact path segment lies in $K\subset V$, so [F8] gives $|g_i'(s)|\le B_i$ on $(0,h)$. [given, F2, F3, F8]

2.1 For each $s\in(0,h]$, [F10] applied to $g_i$ on $[0,s]$ yields $|g_i(s)-g_i(0)|\le B_i s$; at $s=0$ the same inequality is equality. [step 1.2, F10]

3.1 Apply [F9] to the IVP restarted at $(t,y(t))$; then $y_i(t+h)-y_i(t)=\int_0^h g_i(s)\,ds$. Euler's output from the exact state is $y_i(t)+hg_i(0)$, so $\delta_{h,i}(t;y)=\int_0^h(g_i(0)-g_i(s))\,ds$. Using [step 2.1] gives $|\delta_{h,i}(t;y)|\le\int_0^h B_i s\,ds=B_i h^2/2$. Squaring the component bounds, summing, and using [F11] gives the asserted Euclidean norm estimate. Its constant is independent of $t$ and $h$, proving uniform local order one under [F1]. [F1, F9, F11, step 2.1, algebra]

4.1 For any admitted $t\in[0,T]$, $h>0$, and $u,v\in V_t$, [F3] identifies the derivative of $z\mapsto f(t,z)$ with $D_yf(t,z)$; [F5]–[F6] give $\|f(t,u)-f(t,v)\|_2\le L\|u-v\|_2$. Therefore [F12] gives $\|\Psi_h(t,u)-\Psi_h(t,v)\|_2\le\|u-v\|_2+h\|f(t,u)-f(t,v)\|_2\le(1+Lh)\|u-v\|_2$, which is the one-step stability bound in [F1] for inputs in $K$. [F1, F3, F5, F6, F12, algebra] ∎

## Remarks

The defect proof is choice-free and uses only the time-along-flow chain rule and the componentwise integral remainder. The Taylor supplier is used by the scalar linear example, not needed to prove this theorem. The global error recurrence in the cited numerical-analysis sources is outside this item.
