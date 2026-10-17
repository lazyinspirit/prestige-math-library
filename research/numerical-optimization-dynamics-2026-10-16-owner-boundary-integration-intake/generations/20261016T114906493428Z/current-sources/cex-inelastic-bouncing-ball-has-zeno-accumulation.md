---
id: cex-inelastic-bouncing-ball-has-zeno-accumulation
kind: counterexample
title: "Inelastic bouncing-ball impacts can accumulate in finite time"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-hybrid-mode-guard-reset-system
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
---

## Statement refuted

Every hybrid ODE trajectory whose individual impacts are transverse has only finitely many events on every bounded time interval.

## Facts & Assumptions

**Given:** A rigid ball moves vertically under constant downward acceleration $g>0$, with height $q$ and velocity $v$; the impact guard is $q=0$ with downward crossing orientation, and the reset is $(q,v)^+=(0,-e v^-)$ for a fixed restitution coefficient $0<e<1$.

[F1] [[def-hybrid-mode-guard-reset-system]]: a guard crossing applies its reset and restarts the outgoing smooth mode.

## Counterexample

1.1 Start immediately after a bounce with upward velocity $v_0>0$. Under $q'=v$, $v'=-g$, the next impact occurs after $2v_0/g$, and the incoming impact velocity is $-v_0$. Its guard derivative is $q'=v^-=-v_0<0$, so it has the declared downward orientation; the reset produces upward velocity $e v_0$ and does not immediately re-trigger that oriented guard. [given, F1, algebra]

2.1 Repeating the calculation, the time between the $k$th and $(k+1)$st impacts is $2e^k v_0/g$ for $k=0,1,2,\ldots$. Every such interval is positive, so the impacts are distinct; at each one the incoming guard derivative is $q'=v^-=-e^k v_0\ne0$, so each crossing is transverse and has the declared orientation. [given, step 1.1, induction, algebra]

3.1 The total time after the initial state to all subsequent impacts is $\sum_{k=0}^{\infty}2e^k v_0/g=2v_0/(g(1-e))<\infty$. Thus infinitely many transverse events accumulate at a finite time, refuting the statement. The event separations tend to zero, so the finite separated-event theorem does not apply. [step 2.1, algebra] ∎
