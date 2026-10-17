---
id: thm-empirical-measures-solve-mean-field-equation-exactly
kind: theorem
title: Exact weak mean-field identity for empirical particle measures
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-mean-field-and-weighted-vortex-particle-systems
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
axiom_use: No choice principle is used; only a finite sum and the chain rule occur.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Statement

Let $x_1,\ldots,x_N$ solve the equal-probability system of [[def-mean-field-and-weighted-vortex-particle-systems]] on $[0,T]$, and put $\mu_N(t)=N^{-1}\sum_i\delta_{x_i(t)}$. Then for every $\varphi\in C_c^1(\mathbb R^d)$,
$$\int\varphi d\mu_N(t)-\int\varphi d\mu_N(0) =\int_0^t\int\nabla\varphi(x)\cdot\left(\int K(x,y)d\mu_N(s)(y)\right)d\mu_N(s)(x)ds.$$
Thus the empirical measure satisfies the same weak transport equation exactly, with no particle quadrature error in this identity.

## Facts & Assumptions

**Given:** A classical particle solution, the particle equations, and a test function $\varphi\in C_c^1(\mathbb R^d)$.

[F1] The equal-probability particle system is $\dot x_i=N^{-1}\sum_jK(x_i,x_j)$ and its empirical law is $N^{-1}\sum_i\delta_{x_i}$ ([[def-mean-field-and-weighted-vortex-particle-systems]]).

[F2] The chain rule differentiates $t\mapsto\varphi(x_i(t))$ ([[thm-chain-rule-for-total-derivatives]]).

## Proof
1.1 By [F2] and [F1], $\frac{d}{dt}\frac1N\sum_i\varphi(x_i(t))=\frac1{N^2}\sum_{i,j}\nabla\varphi(x_i(t))\cdot K(x_i(t),x_j(t)).$ The double sum is finite, so integration in time gives the left side of the Statement as its time integral. [F1, F2, algebra]

2.1 Expanding both empirical integrals on the right of the Statement gives exactly the same finite double sum as in step 1.1. This proves the identity for every $t$ and includes repeated particle positions without a distinctness assumption. [F1, step 1.1, algebra] ∎
