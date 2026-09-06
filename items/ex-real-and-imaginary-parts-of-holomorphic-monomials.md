---
id: ex-real-and-imaginary-parts-of-holomorphic-monomials
kind: example
title: "Real and imaginary parts of holomorphic monomials"
status: draft
origin: pipeline
deps: [thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-c2-holomorphic-components-are-harmonic]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Example

For $z=x+iy$, the components $\operatorname{Re}z^2=x^2-y^2$ and $\operatorname{Im}z^2=2xy$, and likewise those of every $z^m$, are harmonic on $\mathbb R^2$.

## Verification

**Given:** $m\ge0$.

1.1 [[thm-complex-polynomials-and-rational-functions-are-holomorphic]] makes $z^m$ entire [given].

2.1 [[thm-c2-holomorphic-components-are-harmonic]] makes its two components harmonic [step 1.1]. ∎
