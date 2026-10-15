---
id: ex-poisson-overdispersion
kind: example
title: A mean-matched count law can be overdispersed relative to Poisson
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-generalized-linear-model
  - lem-glm-mean-and-variance-identities
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - def-factorial-and-falling-factorial
  - thm-derivative-of-exponential
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Let a count response $Y$ have mass $1/2$ at $0$ and mass $1/2$ at $20$. This law has the same mean as a Poisson response with mean $10$, but a much larger variance.

## Facts & Assumptions

**Given:** The two-point count law in the Example and a comparison Poisson GLM with $a(\phi)=1$, $b(\theta)=e^\theta$, and $\theta=\log 10$.

[F1] [[def-generalized-linear-model]]: a GLM pairs a response family with a link $g(\mu_i)=\eta_i=x_i^\mathsf T\beta$ and a natural parameter map satisfying $b'(\theta_i)=\mu_i$.

[F2] [[lem-glm-mean-and-variance-identities]]: for the stated family, mean is $b'(\theta)$ and variance is $a(\phi)b''(\theta)$.

[F3] For the comparison Poisson response, the support is $\mathbb N_0$, the base measure is counting measure, and $f(k;\theta)=e^{-e^\theta}e^{k\theta}/k!$. The exponential series and addition formula normalize these masses. Its first two parameter derivatives are $\partial_\theta f(k;\theta)=f(k;\theta)\,(k-e^\theta)$ and $\partial_\theta^2 f(k;\theta)=f(k;\theta)\,\{(k-e^\theta)^2-e^\theta\}$. On any compact interval $[u,v]$ they are dominated by the summable sequence $e^{vk}\{1+(k+e^v)^2+e^v\}/k!$; the ratio test gives summability. Reindexing the same exponential series gives $\mathbb E[Y^2]=\lambda^2+\lambda<\infty$ for $\lambda=e^\theta$, so the family satisfies the fixed-support, moment, and derivative-envelope hypotheses. ([[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[def-factorial-and-falling-factorial]], [[thm-derivative-of-exponential]])

## Verification

1.1 For the two-point law, $\mathbb E[Y]=(0+20)/2=10$ and $\mathbb E[Y^2]=(0^2+20^2)/2=200$, so $\operatorname{Var}(Y)=200-10^2=100$. [given, algebra]

2.1 For the comparison Poisson model, $\theta=\log10$ gives $b'(\theta)=b''(\theta)=10$, so [F2] gives mean and variance both equal to $10$. Since the constructed law has the same mean and variance $100>10$, it is overdispersed relative to this Poisson variance specification and is not a Poisson response law. [F1, F2, F3, step 1.1, algebra] ∎
