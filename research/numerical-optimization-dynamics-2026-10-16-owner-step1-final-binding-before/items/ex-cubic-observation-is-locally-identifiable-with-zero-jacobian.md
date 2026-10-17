---
id: ex-cubic-observation-is-locally-identifiable-with-zero-jacobian
kind: example
title: "A zero Jacobian does not prevent local identifiability of the cubic map"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology, §2.1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "Full text §2.1 read; it states that full rank of a linearized model is sufficient but not necessary for nonlinear local identifiability."
---

## Example

Let $\Theta=\mathbb R$ and $F(\theta)=\theta^3$. At $\theta_0=0$, the Jacobian has rank zero, yet the observation map is injective on every neighborhood of $0$.

## Facts & Assumptions

**Given:** The map $F(\theta)=\theta^3$ on $\Theta=\mathbb R$, with $\theta_0=0$.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]]: local identifiability at $\theta_0$ means injectivity on some open neighborhood; the scalar Jacobian is $F'(\theta_0)$.

## Verification

1.1 Differentiation gives $F'(\theta)=3\theta^2$, so $F'(0)=0$ and the Jacobian has rank $0<1$. [given, algebra]

2.1 If $u^3=v^3$, then $(u-v)(u^2+uv+v^2)=0$. The second factor is $(u+v/2)^2+3v^2/4$, which is nonnegative and vanishes only when $u=v=0$. Hence either $u=v$ directly or the second factor vanishes and again $u=v=0$. Thus $F$ is injective on $\mathbb R$, in particular on a neighborhood of $0$, so local identifiability holds despite the rank-deficient Jacobian. [given, F1, algebra] ∎
