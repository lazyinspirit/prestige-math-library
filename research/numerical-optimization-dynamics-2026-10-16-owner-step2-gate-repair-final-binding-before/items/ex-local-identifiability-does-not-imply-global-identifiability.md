---
id: ex-local-identifiability-does-not-imply-global-identifiability
kind: example
title: "The observation theta squared is locally identifiable but globally aliased"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - thm-full-rank-sensitivity-implies-local-identifiability
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
      locator: "Full text §2.1 read for the distinction between local and global identifiability."
---

## Example

Let $\Theta=\mathbb R$ and $F(\theta)=\theta^2$. The parameter $\theta_0=1$ is locally identifiable, but the full parameter map is not globally identifiable on $\Theta$.

## Facts & Assumptions

**Given:** $F(\theta)=\theta^2$ on the open domain $\mathbb R$ and the parameter $\theta_0=1$.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]]: local identifiability means injectivity on a neighborhood, while global identifiability means injectivity on the full parameter domain.

[F2] [[thm-full-rank-sensitivity-implies-local-identifiability]]: a C1 scalar observation map with nonzero derivative at $\theta_0$ is locally identifiable there.

## Verification

1.1 The map is C1 and $F'(1)=2\ne0$, so its one-dimensional Jacobian has full column rank. By [F2], $F$ is injective on some open neighborhood of $1$, proving local identifiability. [given, F2, algebra]

2.1 The distinct parameters $1$ and $-1$ both lie in $\Theta$ and satisfy $F(1)=1=F(-1)$. Hence $F$ is not injective on all of $\Theta$, so it is not globally identifiable by [F1]. [given, F1, algebra] ∎
