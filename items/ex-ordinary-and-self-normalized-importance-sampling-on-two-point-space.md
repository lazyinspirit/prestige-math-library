---
id: ex-ordinary-and-self-normalized-importance-sampling-on-two-point-space
kind: example
title: Ordinary and self-normalized importance sampling on a two-point space
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-importance-sampling
  - thm-ordinary-importance-sampling-is-unbiased
  - alg-self-normalized-importance-sampling
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $\mathsf X=\{a,b\}$ with counting measure, unnormalized target density $\tilde p(a)=\tilde p(b)=1$, proposal probabilities $Q(a)=3/4$ and $Q(b)=1/4$, and integrand $f=\mathbf 1_{\{b\}}$. Then $Z_p=2$, the target probabilities are $\pi(a)=\pi(b)=1/2$, and $\theta=\int f\,d\pi=1/2$. The proposal has full target support.

## Facts & Assumptions

**Given:** The finite space, target, proposal, integrand, and normalizer in the Example.

[F1] [[alg-importance-sampling]]: For each proposal draw, ordinary importance sampling uses $Y_i=f(X_i)\tilde p(X_i)/(Z_pq(X_i))$ and returns their sample mean.

[F2] [[alg-self-normalized-importance-sampling]]: When the sum of the nonnegative weights $W_i=\tilde p(X_i)/q(X_i)$ is positive, the self-normalized estimate is $\sum_iW_if(X_i)/\sum_iW_i$.

[F3] [[thm-ordinary-importance-sampling-is-unbiased]]: Under the stated support and integrability assumptions, the ordinary importance sampling estimate has expectation $\int f\,d\pi$.

## Verification

**Given:** Use one proposal draw $X\sim Q$ and the definitions in [F1] and [F2].

1.1 The target normalizer is $Z_p=\tilde p(a)+\tilde p(b)=2$, so $\pi(a)=\pi(b)=1/2$ and $\theta=\mathbb E_\pi f=1/2$. Since both proposal probabilities are positive and $\mathsf X$ is finite, the support and integrability assumptions of [F3] hold. [given, F3, algebra]

2.1 The ordinary weighted value is $0$ at $a$ and $2$ at $b$. Its expectation is $(3/4)0+(1/4)2=1/2=\theta$, as also guaranteed by [F3]. [F1, F3, step 1.1, algebra]

3.1 The self-normalized weights are $4/3$ at $a$ and $4$ at $b$, so the single-draw ratio in [F2] equals $f(X)$. Its expectation is $Q(X=b)=1/4$, and its bias for $\theta$ is $1/4-1/2=-1/4$. This verifies that self-normalization need not be unbiased at finite sample size. [F2, step 1.1, algebra] ∎
