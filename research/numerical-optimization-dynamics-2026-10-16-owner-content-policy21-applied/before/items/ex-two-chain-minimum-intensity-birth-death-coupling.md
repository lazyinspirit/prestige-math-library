---
id: ex-two-chain-minimum-intensity-birth-death-coupling
kind: example
title: "Minimum-intensity coupling of two birth-death chains"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-minimum-intensity-coupling-for-reaction-networks
  - def-reaction-network-propensity-system-and-generator
  - thm-minimum-intensity-coupling-preserves-exact-marginals
  - thm-dominating-thinning-exactly-simulates-reaction-rates
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
---

## Statement

On $E_X=E_Y=\{0,1,2\}$, let both chains have birth increment $+1$ and death increment $-1$. Set
$$a_+^X(x)=2-x,\quad a_-^X(x)=x,\qquad a_+^Y(y)=2-y,\quad a_-^Y(y)=2y.$$
Starting from $(1,1)$, the minimum-intensity coupling has at the first paired event three possibilities, each at rate $1$: shared birth to $(2,2)$, shared death to $(0,0)$, or $Y$-only death to $(1,0)$. Thus its first paired-event time is $\operatorname{Exp}(3)$ and each possibility has probability $1/3$. The coordinate path marginals remain the exact $X$ and $Y$ reaction laws.

## Facts & Assumptions

**Given:** The two finite-state birth-death systems, initial pair $(1,1)$, and the minimum-intensity coupling with unlimited candidate budget.

[F1] The propensity definition requires active poststates to lie in the finite state set, and rates determine the reaction generator. ([[def-reaction-network-propensity-system-and-generator]])

[F2] The coupling constructs shared events at the minimum channel rate and residual events at the positive rate differences. ([[alg-minimum-intensity-coupling-for-reaction-networks]])

[F3] Both coupled coordinate processes have the exact path laws of their respective Gillespie chains. ([[thm-minimum-intensity-coupling-preserves-exact-marginals]])

[F4] For a fixed state, disjoint accepted mark sets of total measure $r/M$ under a rate-$M$ candidate stream give first-event survival $e^{-rt}$ and channel-specific event probabilities proportional to the set measures. ([[thm-dominating-thinning-exactly-simulates-reaction-rates]])

## Proof

**Proof technique:** direct.

1.1 For both systems, a positive birth rate occurs only at $x<2$ and moves to $x+1\in E$; a positive death rate occurs only at $x>0$ and moves to $x-1\in E$. All rates are nonnegative and finite, so [F1] gives valid finite-state systems. [F1, given, algebra]

2.1 At $(1,1)$ the birth rates are $1,1$, hence [F2] gives shared birth rate $1$. The death rates are $1,2$, hence shared death rate $1$ and $Y$-only death rate $1$; the $X$-only death rate is $0$. There are no other event types, so the total paired-event rate is $3$. [F2, step 1.1, algebra]

3.1 The algorithm's birth envelope is $M_+=\max\{\max_xa_+^X(x),\max_ya_+^Y(y)\}=2$, and its death envelope is $M_-=\max\{\max_xa_-^X(x),\max_ya_-^Y(y)\}=4$, so the total candidate rate is $M=M_++M_-=6$. At the fixed pair $(1,1)$ the three disjoint event-mark portions have total length $3/6$; [F4] gives first-event survival $e^{-6(3/6)t}=e^{-3t}$ and assigns each equal-length portion probability $1/3$ conditional on an event. Their state updates are respectively $(2,2)$, $(0,0)$, and $(1,0)$. [F2, F4, step 2.1, algebra]

4.1 The marginal theorem [F3] applies because the budget is unlimited and the finite rates supply the bounds $M_+=2$ and $M_-=4$. It identifies each coordinate path with its own Gillespie reaction law, completing the example. [F1, F3, step 1.1, step 3.1, given] ∎