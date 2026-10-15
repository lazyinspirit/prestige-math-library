---
id: ex-identity-link-bernoulli-boundary
kind: example
title: The Bernoulli identity-link boundary leaves the regular family
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-generalized-linear-model
  - thm-glm-general-link-score-and-information
  - alg-fisher-scoring-irls
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

For one Bernoulli response take $x_1=1$, identity link $g(\mu)=\mu$, and $a(\phi)=1$. The admissible interior parameter is $\beta=\eta=\mu\in(0,1)$. The boundary value $\mu=0$ is a valid degenerate Bernoulli law in the closure, but it is not represented by a finite natural parameter.

## Facts & Assumptions

**Given:** The Bernoulli cumulant $b(\theta)=\log(1+e^\theta)$, $x_1=1$, identity link $\eta=\mu=\beta$, and the closure boundary $\mu\downarrow0$.

[F1] [[def-generalized-linear-model]]: $\mu_i=g^{-1}(\eta_i)$ and $\theta_i=\tau(\mu_i)$, where $\tau$ satisfies $b'(\tau(\mu))=\mu$.

[F2] [[thm-glm-general-link-score-and-information]]: $w=\dot\mu^2/(a(\phi)V(\mu))$ where $V=b''(\theta)$.

[F3] [[alg-fisher-scoring-irls]]: the scoring step requires finite positive weights and a finite nonzero link derivative at the current iterate.

## Verification

1.1 For Bernoulli, $b'(\theta)=e^\theta/(1+e^\theta)$, so the finite natural parameter corresponding to $\mu\in(0,1)$ is $\theta=\log(\mu/(1-\mu))$. Under the identity link, $\eta=\mu=\beta$; as $\mu\downarrow0$, $\theta\to-\infty$, so $\mu=0$ is outside the finite-natural-parameter interior. [F1, given, algebra]

2.1 On the interior, $\dot\mu=d\mu/d\eta=1$ and $V(\mu)=b''(\theta)=\mu(1-\mu)$. Hence [F2] gives $w=1/\{\mu(1-\mu)\}\to+\infty$ as $\mu\downarrow0$. The boundary therefore violates the finite-weight admissibility in [F3], even though the limiting Bernoulli law itself is a probability measure. [F2, F3, step 1.1, algebra] ∎