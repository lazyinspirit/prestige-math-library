---
id: ex-one-lmnn-projected-step-is-not-convergence
kind: example
title: "One decreasing LMNN projection step is not a convergence certificate"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-lmnn-fixed-target-objective
  - lem-lmnn-explicit-subgradient-and-data-bound
  - alg-lmnn-finite-budget-projected-subgradient
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references: []
aliases: []
landmark: false
proof_strategy: direct
---

## Example

Take $d=1$, $n=2$, one class with labels $y_1=y_2=1$, sample points $x_1=0$, $x_2=1$, fixed target sets $N_1=\{2\}$ and $N_2=\{1\}$, and $\mu=0$. For every feasible scalar matrix $M=[m]$ with $m\ge0$, the fixed-target objective is $F_0([m])=2m$ and has minimum $0$ at $M=[0]$. Start from $M_0=[2]$, use one update $T=1$ and step size $\eta_0=\tfrac14$. The finite projected-subgradient method returns $M_1=[\tfrac32]$ and reduces the objective from $4$ to $3$, but the returned point is still strictly suboptimal. Thus a decreasing finite step does not certify convergence or optimality.

## Example references

[[def-lmnn-fixed-target-objective|Fixed-target LMNN objective]]

[[lem-lmnn-explicit-subgradient-and-data-bound|LMNN subgradient at the selected iterate]]

[[alg-lmnn-finite-budget-projected-subgradient|Finite projected-subgradient update]]

## Facts & Assumptions

**Given:** The two-point sample, the target sets, $\mu=0$, the initial matrix, and the single stepsize in the Example.

[F1] The pull term is the sum of squared Mahalanobis distances over fixed targets, the push term sums only over differently labeled impostors, and $F_\mu=(1-\mu)\epsilon_{\rm pull}+\mu\epsilon_{\rm push}$ ([[def-lmnn-fixed-target-objective]]).

[F2] At an exact projected-subgradient step, use the explicit formula for $G(M)$, taking hinge coefficient zero at a kink ([[lem-lmnn-explicit-subgradient-and-data-bound]]).

[F3] The update is $M_{t+1}$ equal to Frobenius projection of $M_t-\eta_tG_t$ onto the PSD cone, equivalently eigenvalue clipping ([[alg-lmnn-finite-budget-projected-subgradient]]).

## Verification

1.1 For a scalar feasible matrix $M=[m]$, $q_M(0,1)=q_M(1,0)=m$. Since the labels agree, there are no impostor terms; hence $F_0([m])=2m$, which is minimized over $m\ge0$ at $m=0$. Therefore $F_0(M_0)=4$. [given, F1, algebra]

1.2 The two pull matrices are both $[1]$, and $\mu=0$, so the selected subgradient is $G_0=[2]$ by [F2]. The update [F3] clips $M_0-\eta_0G_0=[2-\tfrac14\cdot2]=[\tfrac32]$ to the PSD cone, leaving $M_1=[\tfrac32]$. [given, F2, F3, algebra]

2.1 Then $F_0(M_1)=3<4=F_0(M_0)$, but $F_0(M_1)=3>0=F_0([0])$. Thus the step decreases the objective while the finite returned iterate is still suboptimal, so this step supplies no convergence or optimality certificate. [step 1.1, step 1.2, algebra] ∎
