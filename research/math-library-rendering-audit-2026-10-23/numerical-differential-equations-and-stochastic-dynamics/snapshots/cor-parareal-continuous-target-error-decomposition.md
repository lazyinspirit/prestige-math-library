---
id: cor-parareal-continuous-target-error-decomposition
kind: corollary
title: "Separate Parareal iteration error from fine-method error"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - thm-parareal-inexact-sweep-error-ledger
  - def-parareal-propagator-pair
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Martin J. Gander, 50 Years of Time Parallel Time Integration"
      url: "https://unige.ch/~gander/Preprints/50YearsTimeParallel.pdf"
      locator: "PDF pp. 14–16: the distinction between the fine-propagator trajectory and a continuous reference."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 2: Methods Based on Multiple Shooting"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/07/cbms-pint-day-2.pdf"
      locator: "Slides 23–29: fine propagator trajectory and its separate continuous-time approximation."
---

## Statement

Let $y:[0,T]\to\mathbb R^d$ solve a first-order initial-value problem as in [[def-first-order-ode-initial-value-problem-and-solution]], and let $x_n$ be the sequential fine trajectory from [[def-parareal-propagator-pair]] on a grid $0=t_0<\cdots<t_N=T$. Suppose the inexact Parareal ledger gives $\|V_n^K-x_n\|\le P_n^K+R_n^K$, and suppose a separately established fine-method estimate gives $\|x_n-y(t_n)\|\le\delta_F$ for some $\delta_F\ge0$ and every node. Then
$$\|V_n^K-y(t_n)\|\le P_n^K+R_n^K+\delta_F.$$
The quantity $\delta_F$ must come from an independent analysis of the selected fine method and its hypotheses; this corollary does not prove a local defect, stability, or continuous-time error estimate.

## Facts & Assumptions

**Given:** A continuous reference solution, the sequential fine trajectory, the Parareal update-defect ledger, and a separate uniform bound for the fine trajectory.

[F1] [[def-first-order-ode-initial-value-problem-and-solution]]: an ODE solution is defined on an interval, stays in its open time-state domain, and satisfies the differential equation there.

[F2] [[def-parareal-propagator-pair]]: the sequential fine trajectory is $x_{n+1}=F_n(x_n)$ from $x_0$.

[F3] [[thm-parareal-inexact-sweep-error-ledger]]: $\|V_n^K-x_n\|\le P_n^K+R_n^K$.

[A1] The separate fine-method estimate is $\|x_n-y(t_n)\|\le\delta_F$ for every grid node.

## Proof

1.1 By [F2], $x_n$ is the sequential fine node; since $t_n\in[0,T]$, [F1] gives the solution value $y(t_n)$. Insert and subtract $x_n$ and apply the norm triangle inequality: $\|V_n^K-y(t_n)\|\le\|V_n^K-x_n\|+\|x_n-y(t_n)\|$. [F1, F2, A1, F3, algebra]

2.1 Substitute the two given bounds from [A1] and [F3]. This gives the displayed conclusion, while leaving $\delta_F$ as a separate fine-method obligation. [given, A1, F3, step 1.1, algebra] ∎

