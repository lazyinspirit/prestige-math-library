---
id: ex-dimension-dependent-empirical-w1-error
kind: example
title: A dimension-dependent lower bound for empirical W1 error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-p-one-wasserstein-one]
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Example

Let $M\in\mathbb N$ with $M\ge1$, set $V_M=\{0,1\}^M\subset\mathbb R^M$, and let $\mu_M$ be uniform on its $2^M$ vertices. For any empirical measure $\nu_N=N^{-1}\sum_{j=1}^N\delta_{Y_j}$ obtained from $N$ samples $Y_j\in V_M$, the 1-Wasserstein error has the deterministic lower bound
$$W_1(\mu_M,\nu_N)\ge1-\frac{N}{2^M}.$$
Thus no dimension-free bound $W_1(\mu,\mu_N)\le C N^{-1/2}$ can hold uniformly over all dimensions and all empirical samples.

## Facts & Assumptions

**Given:** The uniform probability on $V_M$, an integer $N\ge1$, and any list of sample vertices $Y_1,\ldots,Y_N\in V_M$.

[F1] $W_1$ is the infimum of mean Euclidean transport costs over probability couplings ([[def-p-one-wasserstein-one]]).

## Verification

**Given:** The data in the Example.

1.1 Let $S=\{Y_1,\ldots,Y_N\}$ be the empirical support. It contains at most $N$ vertices, so $\mu_M(V_M\setminus S)\ge1-N/2^M$. Distinct vertices of $V_M$ have Euclidean distance at least one. [given, algebra]

2.1 In any coupling of $\mu_M$ to $\nu_N$, every point of $V_M\setminus S$ must send its mass to a point of $S$, at cost at least one per unit mass. Hence every coupling costs at least $1-N/2^M$, and taking the infimum in [F1] proves the bound. If $2^M\ge2N$, it is at least $1/2$; choosing $N$ arbitrarily large and then such an $M$ rules out a uniform dimension-free $C N^{-1/2}$ bound. [F1, step 1.1, algebra] ∎
