---
id: def-qc-quantum-channel
kind: definition
title: "Finite-dimensional quantum channel"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-real-and-complex-inner-product-space, def-dimension, def-linear-map, def-qc-completely-positive-map, def-trace-of-an-endomorphism]
justified_by: []
dependency_level: 5
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §§3.2.1 and 3.2.6"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Definition

Let $H$ and $K$ be finite-dimensional (have finite bases by [[def-dimension]])
complex inner-product spaces. A
**quantum channel** from $H$ to $K$ is a complex-linear map
$\Phi:\mathcal L(H)\to\mathcal L(K)$ ([[def-linear-map]]) that is completely
positive ([[def-qc-completely-positive-map]]) and trace-preserving, meaning

$$\operatorname{tr}(\Phi(X))=\operatorname{tr}(X)\qquad\text{for every }X\in\mathcal L(H),$$

where trace is the basis-independent trace of a finite-dimensional
endomorphism ([[def-trace-of-an-endomorphism]]). Trace preservation is
required on the full operator space, not only on density operators. This
definition is mathematical and assumes no physical realization.
