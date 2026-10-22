---
id: ex-ip-finite-score-guidance-laws-converge-without-finite-exactness
kind: example
title: Weakly convergent finite-step output laws need not be exact
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - alg-ip-measurement-guided-diffusion-reconstruction
  - def-weak-convergence-of-borel-probability-measures
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
generation:
  role: example
sources:
  references:
    - title: Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems (2024), arXiv:2410.00083
      url: https://arxiv.org/pdf/2410.00083
---

## Example

For each integer $m\ge1$, let $\mu_m=(1-2^{-m})\delta_0+2^{-m}\delta_1$ on $\{0,1\}\subset\mathbb R$, where $\delta_a$ is unit mass at $a$, and let the target posterior be $\pi=\delta_0$. For example, this target is the posterior from prior $\delta_0$ and the one-point observation model with likelihood one. The $m$th output law is realized by a one-step instance of the reverse-kernel interface with $N=1$, terminal law $\nu_1=\delta_0$, zero Borel score field, a constant correction into a singleton space, the constant kernel $Q_m(B\mid x,y,a)=\mu_m(B)$, and no projection. Its exact kernel sampler uses at most $m$ independent Bernoulli$(1/2)$ draws and returns $1$ exactly when all draws equal $1$, so it has finite budget for every $m$. The output laws $\mu_m$ converge weakly to $\pi$, yet $\mu_m\ne\pi$ at every finite $m$ because $\mu_m(\{1\})=2^{-m}$. This finite-kernel example illustrates the distinction between asymptotic weak convergence and exact posterior sampling; it is not a performance claim about a trained diffusion model.

## Example references

[[alg-ip-measurement-guided-diffusion-reconstruction]]

[[def-weak-convergence-of-borel-probability-measures]]

## Facts & Assumptions

**Given:** The distributions and one-step reverse-kernel procedure in the Example.

[A1] For each integer $m\ge1$, $\mu_m=(1-2^{-m})\delta_0+2^{-m}\delta_1$ is a probability measure on $\{0,1\}$, and the target is $\pi=\delta_0$.

[F1] Weak convergence of Borel probabilities is convergence of integrals against every bounded continuous real test function. [[def-weak-convergence-of-borel-probability-measures]]

[F2] The reverse-kernel procedure accepts a terminal probability law and Borel transition kernels whose samplers return a draw from the supplied law or a failure status. [[alg-ip-measurement-guided-diffusion-reconstruction]]

## Verification

**Given:** The distributions and procedure in the Example. The weak-convergence and non-equality claims are to be established below.

1.1 Choose $N=1$, $t_0=0$, $t_1=1$, terminal law $\nu_1=\delta_0$, zero score field, a singleton correction space with constant correction, the Borel constant kernel $Q_m(B\mid x,y,a)=\mu_m(B)$, and no projection. The kernel is a probability kernel because $\mu_m$ has total mass one. If $\xi_1,\ldots,\xi_m$ are independent fair coin flips, the sampler that returns $1$ exactly when every $\xi_i=1$ and returns $0$ otherwise has law $\mu_m$ and uses at most $m$ flips. Thus [F2] permits the one-step instance and its returned state has law $\mu_m$. [A1, F2, construct]

1.2 For every bounded continuous $f:\mathbb R\to\mathbb R$, $\displaystyle\int f\,d\mu_m-\int f\,d\pi=2^{-m}(f(1)-f(0))\longrightarrow0$. Thus the defining test integrals converge, so $\mu_m\Rightarrow\pi$ by [F1]. [A1, F1, algebra]

1.3 For each finite integer $m\ge1$, $\mu_m(\{1\})=2^{-m}>0=\pi(\{1\})$, hence $\mu_m\ne\pi$. In particular this holds at the first index $m=1$ as well as every later finite index. [A1, algebra]

2.1 The output laws therefore converge weakly to the target but are not equal to it at any finite index, so this convergence statement supplies no finite-index exactness claim. [step 1.2, step 1.3] ∎
