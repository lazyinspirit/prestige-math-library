---
id: ex-residue-of-exp-over-z-cubed-by-derivative-formula
kind: example
title: "The residue of e^z/z^3 from the pole-derivative formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-residue-pole-derivative-formula, thm-complex-exponential-is-entire-with-derivative-itself]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
pipeline_run: null
---

## Example

At $0$, the function $e^z/z^3$ has residue $1/2$.

## Facts & Assumptions

**Given:** The function $f(z)=e^z/z^3$.

[L1] For a pole of order $m$, the residue is $\frac{1}{(m-1)!}$ times the $(m-1)$st derivative of $(z-a)^mf(z)$ at the pole ([[thm-residue-pole-derivative-formula]]).

[L2] The complex exponential is entire and equals its own derivative, so all derivatives of $e^z$ are again $e^z$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

## Verification

**Proof technique:** direct.

1.1 At $0$, the factor $z^3f(z)$ is $e^z$, so $f$ has a pole of order $3$ there. [given, algebra]

2.1 Applying [L1] with $m=3$ gives $$\operatorname{Res}\!\left(\frac{e^z}{z^3},0\right)=\frac{1}{2!}\frac{d^2}{dz^2}(e^z)\bigg|_{z=0}.$$ [step 1.1, L1]

3.1 By [L2], the second derivative of $e^z$ is still $e^z$, so the right-hand side of step 2.1 is $\frac{1}{2}\,e^0=\frac12$. [step 2.1, L2, algebra] ∎
