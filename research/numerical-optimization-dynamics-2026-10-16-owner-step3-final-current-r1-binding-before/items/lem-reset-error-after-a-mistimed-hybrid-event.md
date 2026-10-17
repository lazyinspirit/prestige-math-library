---
id: lem-reset-error-after-a-mistimed-hybrid-event
kind: lemma
title: "Reset and smooth-mode flow propagate a transverse event-time error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-hybrid-mode-guard-reset-system
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-norm-inequality-for-the-vector-valued-integral
  - lem-ode-flow-lipschitz-on-a-tube
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
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
---

## Statement

Let $\tau$ be an exact event time and $\widehat\tau$ its reported time, with $\Delta=|\widehat\tau-\tau|$. On the interval $J$ between these times, suppose the incoming exact mode extension $y^-$ and dense reconstruction $U^-$ satisfy $\|U^-(t)-y^-(t)\|_2\le\eta$, and $\|f^-(t,y^-(t))\|_2\le M^-$. Assume $\eta,M^-,M^+,L_R,L_{R,t},L^+\ge0$. Suppose the reset is defined on a neighborhood containing $(\tau,y^-(\tau))$, $(\widehat\tau,U^-(\widehat\tau))$, and the coordinate segments joining them, with Lipschitz bounds $L_R$ in state and $L_{R,t}$ in time there. Let $y^+$ start from $R(\tau,y^-(\tau))$ at time $\tau$, and let $\widetilde y^+$ start from $R(\widehat\tau,U^-(\widehat\tau))$ at time $\widehat\tau$. Assume both outgoing solution pieces through $t_0=\max\{\tau,\widehat\tau\}$ lie in a common convex tube where the outgoing field is bounded by $M^+$ and is $L^+$-Lipschitz in state. For $s\ge t_0$ while both outgoing solutions remain in a common convex tube on which the field is $L^+$-Lipschitz, we have
$$\|\widetilde y^+(t_0)-y^+(t_0)\|_2\le L_R\eta+(L_RM^-+L_{R,t}+M^+)\Delta.$$
For $s\ge t_0$ while both outgoing solutions remain in the tube,
$$\|\widetilde y^+(s)-y^+(s)\|_2\le e^{L^+(s-t_0)}\bigl[L_R\eta+(L_RM^-+L_{R,t}+M^+)\Delta\bigr].$$

## Facts & Assumptions

**Given:** The exact and reported event times, incoming tube/error and field bounds, reset Lipschitz bounds, and a common outgoing mode tube.

[F1] [[def-hybrid-mode-guard-reset-system]]: the incoming and outgoing pieces solve their mode ODEs and the state is reset by $R(t,x)$ at the event.

[F2] [[lem-ode-flow-lipschitz-on-a-tube]]: same-mode solutions with initial error $e$ at a common time differ later by at most $e^{L^+\Delta t}e$.

[F3] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: a mode solution's state increment equals the oriented integral of its vector field.

[F4] [[thm-norm-inequality-for-the-vector-valued-integral]]: the norm of a vector integral is at most the integral of the norm.

## Proof

1.1 If $a=b$, the state increment and its oriented integral are both zero. If $a\ne b$, the incoming mode extension satisfies $y^-(b)-y^-(a)=\int_a^b f^-(t,y^-(t))\,dt$ by [F3] on the nondegenerate interval between them. For either order of $a,b$, orientation and [F4] give $\|y^-(b)-y^-(a)\|_2\le M^-|b-a|$. Hence $\|U^-(\widehat\tau)-y^-(\tau)\|_2\le\|U^-(\widehat\tau)-y^-(\widehat\tau)\|_2+\|y^-(\widehat\tau)-y^-(\tau)\|_2\le\eta+M^-\Delta$. [given, F1, F3, F4, algebra]

2.1 Apply the reset's state and time Lipschitz bounds to the two reset inputs in step 1.1. The reset states differ by at most $L_R\eta+(L_RM^-+L_{R,t})\Delta$. [given, F1, step 1.1, algebra]

3.1 If $\Delta=0$, the earlier-reset displacement is zero. Otherwise, at $t_0$, the trajectory that reset earlier has followed the outgoing field for at most $\Delta$ time. By [F3] and [F4], its displacement is at most $M^+\Delta$. Adding this to step 2.1 gives the first displayed inequality. [given, F1, F3, F4, step 2.1, algebra]

4.1 From the common time $t_0$ onward, both curves solve the same outgoing mode ODE and remain in the common tube. Apply [F2] with the initial error from step 3.1 to obtain the second displayed inequality. [given, F2, step 3.1] ∎
