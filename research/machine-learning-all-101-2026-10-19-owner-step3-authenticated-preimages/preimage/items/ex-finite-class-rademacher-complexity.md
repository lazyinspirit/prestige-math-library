---
id: ex-finite-class-rademacher-complexity
kind: example
title: "A two-function loss class has explicit Rademacher complexity"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-rademacher-complexity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
---

## Example

Let $\mathcal Z=\{a,b\}$ with the discrete sigma-algebra, let $P(\{a\})=p$ and $P(\{b\})=1-p$ for $p\in[0,1]$, and let $\mathcal G=\{g_0,g_1\}$ where $g_0$ is identically zero and $g_1(z)=1$ for $z=a$ and $g_1(z)=0$ for $z=b$. For a one-observation sample ($m=1$), $\widehat{\mathfrak R}_S(\mathcal G)=1/2$ when $Z_1=a$ and $0$ when $Z_1=b$, so $\mathfrak R_1(\mathcal G)=p/2$.

## Example references

[[def-rademacher-complexity]]: defines the empirical sign supremum and its expectation over the sample.

## Facts & Assumptions

**Given:** The two-point probability law, the finite class $\mathcal G$, and sample size $m=1$.

[F1] $\widehat{\mathfrak R}_S(\mathcal G)=\mathbb E_\sigma\sup_{g\in\mathcal G}m^{-1}\sum_i\sigma_i g(Z_i)$ and $\mathfrak R_m(\mathcal G)=\mathbb E_S\widehat{\mathfrak R}_S(\mathcal G)$. [[def-rademacher-complexity]]

## Verification

**Given:** The objects and hypotheses in the Example.

1.1 If $Z_1=a$, then for sign $\sigma_1=1$ the supremum of $\sigma_1g(Z_1)$ over $\mathcal G$ is $1$, and for $\sigma_1=-1$ it is $0$. Thus $\widehat{\mathfrak R}_S(\mathcal G)=\tfrac12(1+0)=\tfrac12$. If $Z_1=b$, both functions vanish at the observation, so $\widehat{\mathfrak R}_S(\mathcal G)=0$. [F1, given, algebra]

2.1 The two sample outcomes have probabilities $p$ and $1-p$. Averaging the values from step 1.1 gives $\mathfrak R_1(\mathcal G)=p(\tfrac12)+(1-p)0=p/2$. [F1, step 1.1, algebra] ∎
