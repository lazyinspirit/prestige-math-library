---
id: def-weak-convergence-of-borel-probability-measures
kind: definition
title: Weak convergence of borel probability measures
deps: ["def-probability-measure", "def-borel-sigma-algebra", "def-metric-continuity", "def-integrable-real-and-complex-functions-and-their-integrals"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Definition 3.1, pp. 6–7
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: pipeline
---

## Definition

For Borel probability measures $\mu_n,\mu$ on a metric space S, write $\mu_n\Rightarrow\mu$ if $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function f on S. Continuity is [[def-metric-continuity]]. Such f is Borel measurable (inverse images of open sets are open) and $\int|f|\,d\mu\le\|f\|_\infty\mu(S)<\infty$, so the integrals are finite in [[def-integrable-real-and-complex-functions-and-their-integrals]]. No completeness or coupling is required.
