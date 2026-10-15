---
page: missingness-mechanisms-and-identification
title: "Missingness and nonidentification"
status: published
items:
  - def-full-observed-and-missing-data
  - def-mcar-mar-and-mnar
  - lem-observed-data-likelihood-under-response-model
  - thm-binary-outcome-mnar-nonidentification
  - thm-mar-ignorable-likelihood-factorization
examples: []
---

Missing-data analysis starts with a declared full-data target and an
observation-pattern law. MCAR, MAR, and MNAR describe how that law depends on
the full values relative to the chosen pattern-specific observed projection;
these are model assumptions, not empirical facts established by the observed
record alone.

For a finite-coordinate model dominated by a common sigma-finite measure, the
observed record has patternwise densities after replacing that measure by an
equivalent finite measure and pushing it forward through each observed
projection. With a coordinate-product reference, these densities are the
familiar missing-coordinate integrals. Under a supplied MAR response model
and a Cartesian full-data/response parameter space, a bounded observed-value
response factor separates from likelihood inference about the full-data
parameter. This factorization does not identify every target. In the binary
unrestricted-response example, if $a=P(R=1)$ and $b=P(R=1,Y=1)$, the
compatible population means are exactly $[b,b+1-a]$; MAR yields $b/a$ only
when $a>0$. If an outcome is not defined after death, its value is not merely
unrecorded.
