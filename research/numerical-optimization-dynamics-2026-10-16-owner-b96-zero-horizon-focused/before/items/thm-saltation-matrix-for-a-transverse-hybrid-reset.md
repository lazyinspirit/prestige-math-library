---
id: thm-saltation-matrix-for-a-transverse-hybrid-reset
kind: theorem
title: "The saltation matrix gives the first-order variation across a transverse hybrid reset"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-hybrid-mode-guard-reset-system
  - lem-hybrid-guard-derivative-along-mode
  - lem-parameter-ode-flow-tangent-on-common-tube
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-chain-rule-for-total-derivatives
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
    - title: "Nathan J. Kong, J. Joe Payne, James Zhu, and Aaron M. Johnson, Saltation Matrices: The Essential Tool for Linearizing Hybrid Dynamical Systems"
      url: "https://arxiv.org/pdf/2306.06862"
---

## Statement

Consider a transition in [[def-hybrid-mode-guard-reset-system]] with state dimension $d\ge1$, from mode $m^-$ to mode $m^+$ at $(\tau,x^-)$. Let $g(t,x)=0$ be its $C^1$ guard, let $R(t,x)$ be its $C^1$ reset, and write $f^-=f_{m^-}(\tau,x^-)$ and $f^+=f_{m^+}(\tau,R(\tau,x^-))$. For each incoming and outgoing mode, assume its IVPs initialized at time $\tau$ from states near $x^-$ and $R(\tau,x^-)$, respectively, have unique solutions on a common finite interval and remain in a bounded convex open tube whose compact closure lies inside the open ODE domain. Use the initial state as the parameter and the identity as its $C^1$ initial map in [[lem-parameter-ode-flow-tangent-on-common-tube]]. For event-time variations to the left of $\tau$, impose the same tube hypothesis on the time-reversed incoming field. Thus the relevant mode flows are $C^1$ in initial state, and the incoming flow is jointly $C^1$ in time and initial state near $(\tau,x^-)$. Assume also that
$$d:=\partial_tg(\tau,x^-)+D_xg(\tau,x^-)f^-\ne0,$$
and the nominal event crosses in its declared orientation. For every sufficiently small incoming perturbation $\delta x^-$ at the common pre-event time $\tau$, initialize the perturbed incoming mode at $x^-+\delta x^-$, and let $\tau_\delta$ be its local guard root near $\tau$; assume this root is the selected transition. Put $t_0=\max\{\tau,\tau_\delta\}$, and define $\delta x^+$ as the right-limit difference $\lim_{t\downarrow t_0}(x_\delta^+(t)-x^+(t))$, with both outgoing trajectories evaluated at the same clock time $t>t_0$. Then
$$\delta x^+=S\,\delta x^-+o(\|\delta x^-\|_2),\qquad S=D_xR+\frac{(f^+-D_xR f^- -\partial_tR)D_xg}{\partial_tg+D_xg f^-},$$
where all derivatives and vector fields are evaluated at the nominal event and the matrix product in the numerator is a column times a row. No claim is made when the crossing derivative vanishes or a nearby trajectory follows a different transition.

## Facts & Assumptions

**Given:** A $C^1$ incoming mode, $C^1$ guard and reset, a $C^1$ outgoing mode flow on a common tube, and a nominal event with $|d|>0$.

[F1] [[def-hybrid-mode-guard-reset-system]]: each transition has a $C^1$ guard with declared orientation and a $C^1$ reset, and a mode trajectory solves its mode ODE until the selected event.

[F2] [[lem-hybrid-guard-derivative-along-mode]]: along the incoming flow, $\frac{d}{dt}g(t,x(t))=\partial_tg+D_xg f^-$. Thus the event equation has nonzero derivative in its time variable at the nominal event.

[F3] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: a $C^1$ scalar equation with nonzero derivative in the scalar unknown has a local $C^1$ solution, whose derivative is obtained by implicit differentiation.

[F4] [[lem-parameter-ode-flow-tangent-on-common-tube]]: for a $C^1$ parameterized ODE with a $C^1$ initial map and solutions in a common compact tube, the solution map into continuous trajectories is $C^1$ in the parameter and its tangent solves the variational IVP.

[F5] [[thm-chain-rule-for-total-derivatives]]: the derivative of a $C^1$ composition is the composition of the derivatives.

## Proof

1.1 Let $H(s,x)=g(s,\phi^-(s;\tau,x))$, where $\phi^-$ is the incoming mode flow initialized at the nominal pre-event time. The stated common-tube hypothesis and [F4], applied to the field and to its time reversal on the left interval, give the required $C^1$ flow dependence near $(\tau,x^-)$. By [F5], $H$ is $C^1$. At $(s,x)=(\tau,x^-)$, [F2] gives $\partial_sH=d\ne0$. By [F3], the nearby event time $s=\tau(x)$ is $C^1$. Since $\phi^-(\tau;\tau,x)=x$, its initial-state derivative at $s=\tau$ is the identity. Differentiating $H(\tau(x),x)=0$ in the direction $\delta x^-$ gives $0=D_xg\,\delta x^-+d\,\delta\tau$, hence $\delta\tau=-D_xg\,\delta x^-/d$. [given, F2, F3, F4, F5, algebra]

2.1 At the perturbed event, [F4] gives incoming state $x^-+\delta x^-+f^-\delta\tau+o(\|\delta x^-\|_2)$. By [F5], the reset-state variation is $D_xR\,\delta x^-+(D_xR f^-+\partial_tR)\delta\tau+o(\|\delta x^-\|_2)$. Compare at $t_0=\max\{\tau,\tau+\delta\tau\}$. If $\delta\tau\ge0$, the nominal outgoing state advances from $\tau$ to $t_0$ by $f^+\delta\tau+o(|\delta\tau|)$, while the perturbed state has just reset. If $\delta\tau<0$, the perturbed outgoing state advances from its reset at $\tau+\delta\tau$ to $t_0=\tau$ by $f^+(-\delta\tau)+o(|\delta\tau|)$, while the nominal state has just reset. In both cases the same-clock difference is $D_xR\,\delta x^-+(D_xR f^-+\partial_tR-f^+)\delta\tau+o(\|\delta x^-\|_2)$, since step 1.1 gives $\delta\tau=O(\|\delta x^-\|_2)$. [given, F1, F4, F5, step 1.1, algebra]

3.1 Substitute the expression for $\delta\tau$ from step 1.1 into step 2.1 and factor $\delta x^-$. The resulting linear map is $D_xR+(f^+-D_xR f^- -\partial_tR)D_xg/d$, which is the stated matrix $S$. The remainder remains $o(\|\delta x^-\|_2)$ because the event-time variation is linear to first order by step 1.1. [step 1.1, step 2.1, algebra] ∎

## Remarks

The batch-96 supplier [[lem-parameter-ode-flow-tangent-on-common-tube]] is present on `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/discrete-continuous-and-pde-adjoint-sensitivities.md`, with its companion page at the same canonical category. The earlier missing-page observation checked the different dynamics-category path. The exact common-tube interface and identity-initial-map/time-reversal specialization above are retained; this placement reconciliation grants no independent proof acceptance.
