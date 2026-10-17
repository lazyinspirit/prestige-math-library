---
id: cex-unrestricted-variable-step-ratios-amplify-bdf2-starter-error
kind: counterexample
title: "Unrestricted variable-step ratios amplify a vanishing BDF2 starter error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - lem-variable-step-bdf2-increment-ratio-recurrence
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
dependency_level: 4
---

## Statement refuted

For every family of variable-step grids with maximum step tending to zero, applying BDF2 to $y'=0$ with any starter errors tending to zero produces maximum grid error tending to zero, without any bound on adjacent step ratios.

## Facts & Assumptions

**Given:** The variable-step BDF2 procedure [[alg-variable-step-bdf2-with-selected-implicit-branch]] applied to $y'=0$, and its homogeneous increment recurrence [[lem-variable-step-bdf2-increment-ratio-recurrence]].

[L1] [[lem-variable-step-bdf2-increment-ratio-recurrence]] gives $\Delta_{n+1}=\frac{r_n^2}{1+2r_n}\Delta_n$ for $f=0$ and every positive ratio.

## Counterexample

For each integer $m\ge2$, take $T=1$ and grid increments

$$h_0=m^{-2},\qquad h_1=m^{-1},\qquad h_2=\cdots=h_{m-1}=m^{-1},\qquad h_m=m^{-1}-m^{-2}.$$

They sum to one and have maximum $H_m=1/m\to0$, but the first adjacent ratio is $r_1=m$. For the exact solution $y=0$, use starters $Y_0=0$, $Y_1=1/m$, whose error tends to zero.

For the branch input in [[alg-variable-step-bdf2-with-selected-implicit-branch]], prescribe every ball to be the closed radius-two ball centered at zero.

1.1 Summing the increments gives $m^{-2}+m^{-1}+(m-2)m^{-1}+m^{-1}-m^{-2}=1$, and every increment is positive for $m\ge2$. The maximum is $H_m=m^{-1}$. [given, algebra]

1.2 The first ratio is $r_1=h_1/h_0=m$ and the starter increment is $\Delta_1=1/m\to0$. [given, algebra]

2.1 For $n\ge2$ the grid has $r_n\le1$, so [L1] gives $0<q(r_n)=r_n^2/(1+2r_n)\le r_n/2\le1/2$. The increments from $\Delta_2$ onward are positive and their total is at most $\Delta_2\sum_{j\ge0}2^{-j}=2\Delta_2<1$. Since $Y_1=1/m\le1/2$, every computed value is less than $3/2$. For $f=0$ the step equation has exactly one root because its coefficient $1+2r_n$ is positive, so all roots lie in the prescribed balls and the algorithm completes. [L1, step 1.1, step 1.2, algebra]

2.2 By [L1], $\Delta_2=\frac{m^2}{1+2m}\frac1m=\frac{m}{1+2m}\to\tfrac12$. Therefore $Y_2=Y_1+\Delta_2\to\tfrac12$, while $t_2=h_0+h_1\to0$ and the exact solution remains zero. [L1, step 1.2, algebra]

3.1 Thus a vanishing starter perturbation produces an error bounded away from zero even though $H_m\to0$. The claimed ratio-free uniform zero-stability fails. [step 1.1, step 2.1, step 2.2] ∎
