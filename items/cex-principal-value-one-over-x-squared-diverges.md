---
id: cex-principal-value-one-over-x-squared-diverges
kind: counterexample
title: "$1/x^2$ has no finite Cauchy principal value at zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cauchy-principal-value,
       lem-truncated-integrals-of-rational-powers,
       def-one-sided-limits, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 8.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

Symmetry does not rescue the nonnegative singularity $1/x^2$:
$$\operatorname{PV}\!\int_{-1}^1\frac{dx}{x^2}$$
does not exist as a finite real number.

## Facts & Assumptions

**Given:** The function $x^{-2}$ away from zero.

[L1] Principal value uses the sum of the two symmetric truncations ([[def-cauchy-principal-value]]).

[L2] The rational-power formula evaluates each proper truncation ([[lem-truncated-integrals-of-rational-powers]]).

## Verification

**Proof technique:** computation.

1.1 For $0<\varepsilon<1$, symmetry and [L2] give [L2]
$$\int_{-1}^{-\varepsilon}\frac{dx}{x^2}+
\int_\varepsilon^1\frac{dx}{x^2}
=2\left(\frac1\varepsilon-1\right).$$

2.1 This tends to $+\infty$ as $\varepsilon\downarrow0$, not to a finite real. Therefore the principal value in [L1] diverges. [L1] ∎
