---
id: ex-poisson-overdispersion
kind: example
title: A mean-matched count law can be overdispersed relative to Poisson
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-generalized-linear-model
  - lem-glm-mean-and-variance-identities
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

## Verification

1.1 For the two-point law, $\mathbb E[Y]=(0+20)/2=10$ and $\mathbb E[Y^2]=(0^2+20^2)/2=200$, so $\operatorname{Var}(Y)=200-10^2=100$. [given, algebra]

2.1 For the comparison Poisson model, $\theta=\log10$ gives $b'(\theta)=b''(\theta)=10$, so [F2] gives mean and variance both equal to $10$. Since the constructed law has the same mean and variance $100>10$, it is overdispersed relative to this Poisson variance specification and is not a Poisson response law. [F1, F2, step 1.1, algebra] ∎
