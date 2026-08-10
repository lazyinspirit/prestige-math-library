---
id: ex-riemann-stieltjes-polynomial-computation
kind: example
title: "$\int_0^1 x\,d(x^2)=2/3$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-stieltjes-c1-integrator-reduction, def-derivative,
       thm-ftc-second-part, thm-linearity-of-the-integral,
       def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.17"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Example

The reduction for a differentiable integrator gives
$$\int_0^1x\,d(x^2)=\frac23.$$

## Facts & Assumptions

**Given:** $f(x)=x$ and $\alpha(x)=x^2$ on $[0,1]$.

[L1] A $C^1$ integrator satisfies $\int f\,d\alpha=\int f\alpha'$ ([[thm-riemann-stieltjes-c1-integrator-reduction]]).

[L2] The working FTC evaluates an integral from an antiderivative ([[thm-ftc-second-part]]).

## Verification

**Proof technique:** computation.

1.1 Directly from the difference quotient, [given]
$$\frac{(x+h)^2-x^2}{h}=2x+h\longrightarrow2x,$$
so $\alpha'(x)=2x$. Likewise, $(2x^3/3)'=2x^2$ by expanding the difference quotient.

1.2 Therefore [L1] and [L2] give [L1, L2]
$$\int_0^1x\,d(x^2)=\int_0^1 2x^2\,dx=\left[\frac{2x^3}{3}\right]_0^1=\frac23.$$ ∎
