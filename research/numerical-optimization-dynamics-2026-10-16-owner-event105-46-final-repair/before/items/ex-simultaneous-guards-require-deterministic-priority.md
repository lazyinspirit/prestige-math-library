---
id: ex-simultaneous-guards-require-deterministic-priority
kind: example
title: "Simultaneous guards need a deterministic priority rule"
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
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Nathan J. Kong, J. Joe Payne, James Zhu, and Aaron M. Johnson, Saltation Matrices: The Essential Tool for Linearizing Hybrid Dynamical Systems"
      url: "https://arxiv.org/pdf/2306.06862"
---

## Example

A one-dimensional hybrid system has an initial mode $I$ with $x'=1$ and two outgoing guards $g_1(x)=x$ and $g_2(x)=x$, both with positive crossing orientation. Guard $g_1$ resets to terminal mode $A$ with $x'=0$; guard $g_2$ resets to terminal mode $B$ with $x'=1$. Both reset maps set $x$ to $0$. The initial condition is $x(0)=-1$ in mode $I$.

## Facts & Assumptions

**Given:** The mode, guard, reset, and event-priority conventions of [[def-hybrid-mode-guard-reset-system]].

[F1] [[def-hybrid-mode-guard-reset-system]]: an event occurs at a zero of an active guard, the reset is applied at that time, and a fixed priority selects among guards vanishing simultaneously.

## Verification

1.1 In mode $I$, the exact solution is $x(t)=-1+t$, so both guards first vanish at the same time $t=1$. [given, F1, algebra]

2.1 Without a priority rule, the two transitions lead to different continuations: mode $A$ keeps $x=0$, while mode $B$ gives $x(t)=t-1$ for $t>1$. If the priority order places $g_1$ first, the trajectory is uniquely selected to follow mode $A$. [given, F1, step 1.1, algebra] ∎
