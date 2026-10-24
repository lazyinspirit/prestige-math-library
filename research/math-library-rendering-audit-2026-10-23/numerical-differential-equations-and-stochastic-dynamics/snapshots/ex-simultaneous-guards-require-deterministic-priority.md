---
id: ex-simultaneous-guards-require-deterministic-priority
kind: example
title: "Simultaneous guards need a deterministic priority rule"
status: published
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

Consider a one-dimensional transition specification with initial mode $I$, field $x'=1$, initial condition $x(0)=-1$, and two outgoing guards $g_1(x)=x$ and $g_2(x)=x$, both with positive crossing orientation. Transition $g_1$ resets to terminal mode $A$ with $x'=0$; transition $g_2$ resets to terminal mode $B$ with $x'=1$. Both reset maps set $x$ to $0$. This data is incomplete under [[def-hybrid-mode-guard-reset-system]] until a fixed total priority order on the outgoing transitions from $I$ is supplied.

## Facts & Assumptions

**Given:** The oriented-guard and fixed total event-priority conventions of [[def-hybrid-mode-guard-reset-system]].

[F1] [[def-hybrid-mode-guard-reset-system]]: an event occurs at a zero of an active guard, the reset is applied at that time, and a fixed priority selects among guards vanishing simultaneously.

## Verification

1.1 In mode $I$, the exact solution is $x(t)=-1+t$, so both guards first vanish at $t=1$ and have derivative $1>0$ there. Thus both transitions are enabled simultaneously. [given, F1, algebra]

2.1 Completing the specification with priority $g_1\prec g_2$ selects transition $g_1$ and the continuation in mode $A$ is $x(t)=0$ for $t\ge1$. Completing it instead with priority $g_2\prec g_1$ selects transition $g_2$ and the continuation in mode $B$ is $x(t)=t-1$ for $t\ge1$. Each completed system has a fixed priority and determines one continuation, but the incomplete specification alone does not determine which completion was intended. [given, F1, step 1.1, algebra] ∎
