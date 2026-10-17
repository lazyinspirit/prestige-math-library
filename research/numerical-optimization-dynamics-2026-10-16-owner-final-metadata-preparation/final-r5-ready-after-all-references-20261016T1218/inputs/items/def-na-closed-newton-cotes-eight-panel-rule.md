---
id: def-na-closed-newton-cotes-eight-panel-rule
kind: definition
title: "Closed Newton–Cotes rule on eight equal panels"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 0
deps: [def-finite-sum, thm-reals-field]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.1.1"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed pp. 217–219, interpolatory Newton–Cotes rules, exactness, and coefficient signs."
    - title: "NIST Digital Library of Mathematical Functions, §3.5(iv), Interpolatory Quadrature Rules"
      url: "https://dlmf.nist.gov/3.5"
      locator: "Full-text section §3.5(iv), equation 3.5.15 and accompanying text on integrated Lagrange interpolants and closed Newton–Cotes rules."
verification:
  precheck: n/a
---

## Definition

For $j=0,\ldots,8$, set $x_j=-1+j/4$ and
$$w_j:=\frac{1}{14175}(989,5888,-928,10496,-4540,10496,-928,5888,989)_j.$$
For any real-valued function $f$ on $[-1,1]$, define the closed nine-node rule
$$Q_8(f):=\sum_{j=0}^{8}w_j f(x_j),$$
where the sum is finite. The nodes are equally spaced and include both endpoints; the subsequent weight and exactness lemma verifies that these coefficients are the integrated Lagrange-cardinal weights.
