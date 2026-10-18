---
id: thm-rk4-global-error-for-regularized-vortex-particles
kind: theorem
title: Fourth-order global error for RK4 on a regularized vortex particle tube
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-mean-field-and-weighted-vortex-particle-systems
  - def-one-step-ode-method-local-defect-order-and-stability
  - def-euler-midpoint-rk4-tableaus
  - prop-euler-midpoint-rk4-orders-and-stability-functions
  - lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube
  - lem-discrete-one-step-error-recurrence-bound
  - thm-chain-rule-for-total-derivatives
  - thm-mean-value-inequality
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Tobias Embree, Lecture Notes on Numerical Analysis, Sections 5.2.3-5.3
      url: https://personal.math.vt.edu/embree/math5466/nanotes.pdf
    - title: MIT OpenCourseWare 18.330, Introduction to Numerical Analysis, Chapter 5
      url: https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf
---

## Statement

Fix $\varepsilon>0$, finitely many vortex weights, $T>0$, and the regularized finite-particle vector field of [[def-mean-field-and-weighted-vortex-particle-systems]], possibly with an added common smooth force correction $g_q(t,X,x_i)$ for spatial force quadrature. Suppose the resulting nonautonomous state field $f(t,X)$ is jointly $C^4$ on an open time-state domain, with derivatives through order four bounded on a common compact convex tube $\mathcal T$ compactly contained in that domain. Assume the exact path, RK4 grid states, and every RK4 stage lie in that tube for $h=T/N\le h_0$, and the common force correction is included in these bounds. Let $C_4$ be a uniform exact-start defect constant, so the local defect is at most $C_4h^5$ as in [[def-one-step-ode-method-local-defect-order-and-stability]]. Let $L_*$ be the stability constant from [[lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube]], so the one-step factor is $1+L_*h$. For exact initialization, the state errors $E_k$ satisfy
$$\max_{0\le k\le N}E_k\le \begin{cases} C_4\dfrac{e^{L_*T}-1}{L_*}h^4,&L_*>0,\\ C_4Th^4,&L_*=0. \end{cases}$$
The tube and stage-admissibility assumptions are conditional; no invariance or global numerical-domain claim is made. The constant $C_4$ may depend on $\varepsilon$, particle count, the quadrature field, and the tube.

For every step $k$, assume all RK4 stages generated from both the exact start $x(t_k)$ and the numerical start $X_k$ lie in $\mathcal T$, and both one-step maps are defined. Let $L$ be a uniform operator-norm bound for $D_Xf$ on $\mathcal T$ and set $L_*=Le^{Lh_0}$, as in the stability lemma. The only admitted start pair used in the stability estimate at step $k$ is $(x(t_k),X_k)$.

## Facts & Assumptions

**Given:** The smooth nonautonomous finite-particle field, the common tube, bounded derivatives through order four, exact initialization, and admitted RK4 stages from both the exact and numerical starts at each step.

[F1] Classical RK4 has local order at least four for a $C^4$ autonomous field with bounded derivatives and exact-start stages in a compact convex tube; adjoining the time equation $t'=1$ gives the same local order for the stated nonautonomous field ([[prop-euler-midpoint-rk4-orders-and-stability-functions]]).

[F2] The one-step defect is measured from the exact starting state, and local order four means a uniform $O(h^5)$ bound ([[def-one-step-ode-method-local-defect-order-and-stability]]).

[F3] For the exact/numerical start pair at each grid step, the RK4 map is Lipschitz with factor at most $1+L_*h$ when all stages from both starts are admitted ([[lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube]]).

[F4] The finite recurrence $e_{k+1}\le(1+Lh)e_k+Ch^{p+1}$ has the stated exponential bound ([[lem-discrete-one-step-error-recurrence-bound]]).

[F5] The Euclidean state-error norm and its triangle inequality have the conventions in [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]].

[F6] A uniform operator-norm bound on the state derivative makes each fixed-stage-time restriction $L$-Lipschitz along line segments contained in the convex tube: the chain rule differentiates the restriction to the segment, and the vector mean-value inequality bounds its endpoint difference ([[thm-chain-rule-for-total-derivatives]], [[thm-mean-value-inequality]]).

## Proof
1.1 Apply [F1] to the autonomous augmentation $(t,X)'=(1,f(t,X))$. The time component is integrated exactly by RK4 because its weights sum to one; the state component therefore has the same exact-start defect order. The tube and derivative assumptions in the Given clause make the defect uniform, so [F2] gives the bound $C_4h^5$. [given, F1, F2]

2.1 Put $E_k=|X_k-x(t_k)|$ for the numerical and exact grid states. Applying [F3] to the admitted exact/numerical start pair, using [F6] for the state Lipschitz premise, bounds the one-step map difference by $(1+L_*h)E_k$. The exact-start local defect is at most $C_4h^5$ by step 1.1 and [F2]. The Euclidean triangle inequality [F5] therefore gives $E_{k+1}\le(1+L_*h)E_k+C_4h^5$, with $E_0=0$. [F2, F3, F5, F6, step 1.1, algebra]

3.1 Apply [F4] with $p=4$, $C_0=0$, $C=C_4$, $L=L_*$, and the recurrence from step 2.1. Its $L_*>0$ and $L_*=0$ cases are exactly the displayed bound. [F4, step 2.1] ∎
