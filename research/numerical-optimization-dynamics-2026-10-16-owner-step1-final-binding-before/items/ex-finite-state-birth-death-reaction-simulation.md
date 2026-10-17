---
id: ex-finite-state-birth-death-reaction-simulation
kind: example
title: "Gillespie simulation of a finite birth-death reaction network"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-reaction-network-propensity-system-and-generator
  - thm-finite-state-gillespie-and-next-reaction-exactness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
---

## Statement

Let $E=\{0,1,2\}$ with a birth channel $\nu_+=1$, $a_+(x)=2-x$, and a death channel $\nu_-=-1$, $a_-(x)=x$. From every state the total rate is $2$. Starting at $1$, the first holding time is $E_1/2$; the event is a birth if $U_1<1/2$ and a death otherwise. The direct method generates the exact finite-state reaction path law.

## Facts & Assumptions

**Given:** The finite state set, two reaction channels, initial state $1$, and independent exact exponential and uniform inputs.

[F1] Each active channel must have its poststate in $E$, and the generator is the finite rate-weighted increment sum on bounded functions. ([[def-reaction-network-propensity-system-and-generator]])

[F2] The direct and next-reaction methods have the recursively specified finite-state CTMC law; the generator is the reaction rate sum. ([[thm-finite-state-gillespie-and-next-reaction-exactness]])

## Proof

**Proof technique:** direct.

1.1 For $x<2$, the birth rate $2-x$ is positive and $x+1\in E$; at $x=2$ its rate is zero. For $x>0$, the death rate $x$ is positive and $x-1\in E$; at $x=0$ its rate is zero. Thus both channels are admissible, and $a_+(x)+a_-(x)=2$ for all $x\in E$. [F1, given, algebra]

2.1 At state $1$ the two propensities are each $1$. The direct method's waiting time is $E_1/2$, and its cumulative selection rule makes the first event a birth exactly when $0\le U_1<1/2$; after each event the same calculation applies at the new state. [F2, step 1.1, given, algebra]

3.1 The generator is $Qf(0)=2(f(1)-f(0))$, $Qf(1)=f(2)-2f(1)+f(0)$, and $Qf(2)=2(f(1)-f(2))$, obtained from the active channels without evaluating $f$ outside $E$. The rates are bounded by $\Lambda=2$, so the finite-state theorem identifies the direct method with the exact path law and gives $\mathbb E N(T)\le2T$. [F1, F2, step 1.1, step 2.1, algebra] ∎