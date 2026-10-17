---
id: ex-zero-total-hazard-state-is-absorbing
kind: example
title: "A zero-total-hazard state is absorbing"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-gillespie-direct-method-for-reaction-networks
  - def-countable-choice
  - def-dependent-choice
  - def-reaction-network-propensity-system-and-generator
  - thm-finite-state-gillespie-and-next-reaction-exactness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Daniel T. Gillespie, Exact Stochastic Simulation of Coupled Chemical Reactions (1977)"
      url: "https://www.ma.imperial.ac.uk/~nsjones/gillespie_1977.pdf"
      locator: "§§II.B–III.C: event-time/channel law and direct simulation; the zero-total-propensity branch is verified locally."
---

## Statement

Assume Countable Choice and Dependent Choice. Let $E=\{0,1\}$ with one death channel of increment $-1$, propensity $a(1)=1$, and $a(0)=0$. Starting from $1$, the process waits an $\operatorname{Exp}(1)$ time $W$, moves to $0$, and remains there forever. In particular, state $0$ has total hazard zero and is absorbing.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), Dependent Choice ([[def-dependent-choice]]), the finite-state reaction system above and the exact Gillespie method with unlimited event budget.

[F1] Positive propensity requires the poststate $x+\nu$ to lie in the state set; the reaction event and generator use the stated increment and rate. ([[def-reaction-network-propensity-system-and-generator]])

[F2] Under Countable Choice and Dependent Choice, at positive total rate the finite-state Gillespie process with a fixed initial state and unlimited event budget has exponential holding time and the channel probabilities are propensity divided by total rate; zero total rate is absorbing. ([[thm-finite-state-gillespie-and-next-reaction-exactness]])

[F3] If the direct method reaches its zero-propensity test before the horizon, it returns the constant continuation with status `absorbed`; a proposed event at or beyond the horizon instead gives status `horizon` without recording that event. ([[alg-gillespie-direct-method-for-reaction-networks]])

## Proof

**Proof technique:** direct.

1.1 The only positive rate is $a(1)=1$, and its poststate $1+(-1)=0$ lies in $E$, so the system is admissible. At $1$, [F2] gives $W\sim\operatorname{Exp}(1)$; at $0$, the total rate is $0$. [F1, F2, given, algebra]

2.1 Once the first event occurs, the state is $0$ and every propensity is zero. By [F2] the process remains at $0$ at all later times. In an unlimited-budget call with finite horizon $T$, if $W<T$, the event is recorded and the next zero-propensity test returns status absorbed; if $W\ge T$, [F3] returns status horizon without recording the event. The underlying process therefore satisfies $\mathbb P(X_t=1)=e^{-t}$ and $\mathbb P(X_t=0)=1-e^{-t}$ for $t\ge0$, independently of the call's horizon censoring. [F2, F3, step 1.1, algebra]

3.1 The generator is $(Qf)(1)=f(0)-f(1)$ and $(Qf)(0)=0$ for every bounded $f:E\to\mathbb R$, so the zero-hazard state has no outgoing transition and the example satisfies the operator convention. [F1, step 1.1, algebra] ∎
