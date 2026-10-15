---
id: def-spatial-window-average
kind: definition
title: "Spatial window average"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-van-hove-window-sequence
  - def-borel-sigma-algebra
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-random-field-stationarity-covariance-and-variogram
justified_by:
  - thm-van-hove-window-average-l2-consistency
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Section 2.1, Example 2.1"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(W_n)$ be a Van Hove sequence in $\mathbb R^d$ as in
[[def-van-hove-window-sequence]]. On a probability space
$(\Omega,\mathcal F,\mathbb P)$ ([[def-probability-measure]]), let
$(X(s))_{s\in\mathbb R^d}$ be a real random field in the coordinatewise
sense of [[def-random-field-stationarity-covariance-and-variogram]]; its
coordinates are real random variables
([[def-random-element-and-real-random-variable]]) such that the map
$(s,\omega)\mapsto X(s,\omega)$ is measurable for
$\mathcal B(\mathbb R^d)\otimes\mathcal F$
([[def-borel-sigma-algebra]]). For $W_n$, assume that
$\int_{W_n}|X(s,\omega)|\,ds<\infty$ for almost every $\omega$. Define the
**spatial window average** on that full-measure event by
$$\bar X_{W_n}(\omega):=\frac1{|W_n|}\int_{W_n}X(s,\omega)\,ds,$$
and set it to $0$ on the measurable exceptional null set. Here $|W_n|$ and
the integral use $d$-dimensional Lebesgue measure, and a sample path means the
function $s\mapsto X(s,\omega)$. The theorem
[[thm-van-hove-window-average-l2-consistency]] establishes this integrability
and measurability from its stated second-moment hypotheses.
