---
id: ex-type-s-and-h-density-prior-contracts
kind: example
title: Uniform truth under type-S and type-H density priors
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-multiscale-coefficient-space-m0w
  - def-type-s-and-h-multiscale-density-priors
  - lem-type-s-h-prior-draws-are-l2-densities
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §3.2"
      url: https://arxiv.org/pdf/1310.2484
---

## Example

The uniform truth $f_0=1$ meets the truth-side smoothness and positive-bound conditions for both a type-S log-density prior and a type-H dyadic histogram prior. The weight sequence $w_l=\max(1,\sqrt l\log(l+1))$ is admissible and also satisfies the extra summability needed for the CDF map. This verifies prior-class inputs only; it does not assert the source-specific type-S/H multiscale BvM theorem.

## Facts & Assumptions

**Given:** The type-S/type-H definitions of [[def-type-s-and-h-multiscale-density-priors]] and the admissible multiscale space of [[def-multiscale-coefficient-space-m0w]].

[F1] [[def-type-s-and-h-multiscale-density-priors]]: both families require a density bounded above and bounded away from zero; type S additionally requires $\log f_0\in C^\alpha_\psi$ with $\alpha>1$, while type H requires $f_0\in C^\alpha_\psi$ for $1/2<\alpha\le1$ and the displayed Dirichlet-parameter bounds.

[F2] [[def-multiscale-coefficient-space-m0w]]: admissibility means $w_l/\sqrt l\to\infty$.

## Verification

**Given:** The prior families and $f_0(x)=1$ on $[0,1]$.

1.1 Since $\log f_0=0$ and $f_0=1$, its wavelet coefficient smoothness norm is finite at every order and it is bounded above and away from zero. For type S1 choose $\alpha=2$ and the Laplace density $\varphi_H(x)=\tfrac12e^{-|x|}$, whose logarithm is Lipschitz; its scales are $2^{-l(2+1/2)}$. For type S2 choose $\alpha=2$ and $r=1$, which satisfies $0<1<2-1/4$. [F1, given, algebra]

1.2 For type H choose truth smoothness $\alpha=1$, hyperparameters $a=c_1=c_2=1$, and $a_{k,L}=1$ for every cell. Then $2^{-L}\le a_{k,L}\le1$, and the uniform truth belongs to $C^1_\psi$. [F1, given, algebra]

2.1 The sequence $w_l=\max(1,\sqrt l\log(l+1))$ is nondecreasing, since both entries in the maximum are nondecreasing for $l\ge1$. It satisfies $w_l/\sqrt l\to\infty$. Also $\sum_lw_l2^{-l/2}<\infty$ because the ratio of successive terms $\sqrt l\log(l+1)2^{-l/2}$ tends to $2^{-1/2}<1$. Thus it is admissible and meets the CDF primitive summability condition. [F2, given, algebra] ∎
