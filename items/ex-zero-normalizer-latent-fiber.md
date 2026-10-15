---
id: ex-zero-normalizer-latent-fiber
kind: example
title: "A zero-normalizer latent fiber"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-latent-variable-joint-and-observed-data-factorization
  - thm-observed-density-is-latent-marginal-under-tonelli
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§1, equation (1), PDF pp. 1–2; zero-fibre calculation supplied locally"
---
## Example

Take $\mathsf X=\mathsf Z=\{0,1\}$ with counting measure and a singleton
parameter. Define the joint density by $p(0,0)=1$ and $p(x,z)=0$ for the
other three pairs. The complete-data law is normalized, but the observed
fibre at $x=1$ has marginal zero.

## Facts & Assumptions

**Given:** The finite observation and latent spaces with counting reference
measures, a singleton parameter space, and the stated function $p$.

[F1] [[def-latent-variable-joint-and-observed-data-factorization]]: a
complete-data density must integrate to one; the ratio $p(x,z)/m(x)$ is
defined as a conditional density only when $0<m(x)<\infty$.

[F2] [[thm-observed-density-is-latent-marginal-under-tonelli]]: the observed
marginal is $m(x)=\sum_zp(x,z)$.

## Verification

1.1 The only nonzero summand is $p(0,0)=1$, so $\sum_{x,z}p(x,z)=1$; this is a normalized joint density on the finite product space. [given, F1, algebra]

1.2 Summing over $z$ gives $m(0)=1$ and $m(1)=0$. At $x=1$, both $p(1,z)$ and $m(1)$ are zero, so the quotient $p(1,z)/m(1)$ is undefined. [F2, given, algebra]

2.1 Since $m(1)=0$, the observation $x=1$ is outside the positive finite fibre set in [F1]. The formula supplies no pointwise conditional latent density there. [F1, step 1.2] ∎
