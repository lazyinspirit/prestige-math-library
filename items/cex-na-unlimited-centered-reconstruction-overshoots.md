---
id: cex-na-unlimited-centered-reconstruction-overshoots
kind: counterexample
title: Unlimited centered reconstruction creates new extrema on a step
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps:
  - def-na-high-resolution-reconstruction
justified_by: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement refuted

An unlimited centered-slope reconstruction with the reconstructed upwind forward-Euler update is TVD and range-preserving for every scalar grid sequence whenever $|a|\Delta t/h\le1$.

## Facts & Assumptions

**Given:** Cells $I_i=[ih,(i+1)h)$, $h=a=1$, $\Delta t=1/2$, initial averages $U_i=1$ for $i\le-1$ and $U_i=0$ for $i\ge0$, and unlimited centered increments $\sigma_i=(U_{i+1}-U_{i-1})/2$.

[F1] [[def-na-high-resolution-reconstruction]]: for $a>0$, the direct update uses $F_{i+1/2}=U_i+\sigma_i/2$ and $U_i^{n+1}=U_i^n-(\Delta t/h)(F_{i+1/2}-F_{i-1/2})$.

## Counterexample

1.1 The initial sequence has one jump from $1$ to $0$, so $\operatorname{TV}(U^0)=1$. The centered increments are $\sigma_{-1}=(U_0-U_{-2})/2=-1/2$ and $\sigma_0=(U_1-U_{-1})/2=-1/2$; all other increments vanish. [given, F1, algebra]

2.1 The relevant upwind fluxes are $F_{-3/2}=1$, $F_{-1/2}=3/4$, $F_{1/2}=-1/4$, and $F_{3/2}=0$. With $\Delta t/h=1/2$, the update gives $U_{-1}^{1}=9/8$, $U_0^1=1/2$, and $U_1^1=-1/8$, with the adjacent exterior states still $1$ and $0$. [F1, step 1.1, algebra]

3.1 The new variation is $|9/8-1|+|1/2-9/8|+|-1/8-1/2|+|0-(-1/8)|=3/2>1$. The method creates both an overshoot and an undershoot at a CFL number of one half, refuting the statement. [step 1.1, step 2.1, algebra] ∎

