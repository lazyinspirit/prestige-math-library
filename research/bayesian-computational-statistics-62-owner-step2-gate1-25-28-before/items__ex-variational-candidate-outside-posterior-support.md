---
id: ex-variational-candidate-outside-posterior-support
kind: example
title: "A candidate outside posterior support is not admissible"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-variational-family-and-elbo
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

On $\Omega=\{0,1\}$ with counting measure, take $\gamma=(1,0)$. Then $Z=1$ and $\pi=(1,0)$. The probability density $q=(0,1)$ is supported entirely outside the target support, so it is not admissible and has no finite ELBO.

## Facts & Assumptions

**Given:** The two-point counting space, target density $\gamma=(1,0)$, and candidate $q=(0,1)$.

[F1] [[def-variational-family-and-elbo]]: admissibility requires $q=0$ on $\{\pi=0\}$ and $\int q(|\log\gamma|+|\log q|)<\infty$.


## Verification

**Given:** The data in the Example.

1.1 Counting measure gives $Z=1$ and $\pi=(1,0)$. At the point $1$, $q(1)=1$ but $\pi(1)=0$, so the support condition in [F1] fails. [F1, algebra]

2.1 Also $\gamma(1)=0$ and $q(1)=1$, so $q(1)|\log\gamma(1)|=+\infty$. The absolute-integrability condition in [F1] fails as well; the finite-ELBO identity is not applicable to this candidate. [F1, step 1.1, algebra] ∎
