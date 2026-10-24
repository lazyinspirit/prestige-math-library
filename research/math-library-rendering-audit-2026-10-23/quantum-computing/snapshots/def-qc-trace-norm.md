---
id: def-qc-trace-norm
kind: definition
title: Trace Norm
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-linear-map
  - def-singular-values-of-an-endomorphism
  - prop-singular-values-are-well-defined
justified_by:
  - thm-qc-trace-norm-spectral-formula
axiom_use: None; the finite singular-value list is obtained from the stated finite-dimensional suppliers.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapter 1, §1.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendix A.5"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Definition

Let $A:H\to K$ be a linear map ([[def-linear-map]]) between finite-dimensional
complex inner-product spaces. Its singular values are the eigenvalues of
$|A|:=\sqrt{A^*A}:H\to H$, counted with multiplicity, as defined in
[[def-singular-values-of-an-endomorphism]]. Define the **trace norm**, or
Schatten-$1$ norm, by

$$\|A\|_1:=\sum_{j<\dim H}s_j(A).$$

The sum includes zero singular values and is $0$ when $H$ is the zero space.
For this definition, $A$ may be rectangular; the singular values are those of
$|A|$ on the domain $H$. The spectral trace formula is proved in
[[thm-qc-trace-norm-spectral-formula]].
