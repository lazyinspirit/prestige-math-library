---
id: prop-linearity-of-complex-line-integrals
kind: proposition
title: "Complex line integrals are linear in the integrand"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-line-integral-over-a-rectifiable-path, thm-riemann-stieltjes-linearity-and-additivity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

For continuous $f,g$ on the trace of a rectifiable contour $\gamma$ and $\alpha,\beta\in\mathbb C$,
$$\int_\gamma(\alpha f+\beta g)\,dz=\alpha\int_\gamma f\,dz+\beta\int_\gamma g\,dz.$$

## Facts & Assumptions

**Given:** A rectifiable contour, continuous $f,g$, and complex scalars $\alpha,\beta$.

[L1] The complex line integral is the stated combination of four real Riemann–Stieltjes integrals ([[def-complex-line-integral-over-a-rectifiable-path]]).

[L2] Riemann–Stieltjes integrals are linear in the integrand and integrator whenever the displayed integrals exist ([[thm-riemann-stieltjes-linearity-and-additivity]]).

## Proof

**Proof technique:** direct.

1.1 Expand the real and imaginary parts of $\alpha f+\beta g$ and apply [L2] to each component integral in [L1]. [L1, L2, algebra]

2.1 Recombining the real and imaginary identities gives the displayed complex linearity. Zero scalars and singleton paths are included. [step 1.1, L1] ∎
