---
id: "def-hausdorff-dimension"
kind: "definition"
title: "Hausdorff dimension"
deps: ["def-hausdorff-measure", "lem-extended-reals-complete"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Definition 1.2.1 and Proposition 1.2.6
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
justified_by: ["thm-hausdorff-dimension-critical-exponent"]
---

## Definition

For a subset $A$ of a metric space define

$$\dim_H A=\inf\{s\in[0,\infty):\mathcal H^s(A)=0\}\in[0,\infty].$$

Here $\mathcal H^s$ is [[def-hausdorff-measure]], $s$ always denotes a finite real exponent, and $\inf\varnothing=\infty$, in the extended order of [[lem-extended-reals-complete]]. Thus $\dim_H\varnothing=0$. Dimension itself may be infinite, but no measure with exponent $\infty$ is being defined. Any empty supremum over exponents below is taken in $[0,\infty]$ and equals zero, not the empty supremum in the whole extended real line.
