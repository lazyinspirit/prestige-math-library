---
id: rem-qa-34-dequantization-scope
kind: remark
title: Dequantization is relative to the input access and output task
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - thm-qa-34-tang-recommendation-sampler
  - def-qa-34-output-and-cost-types
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
---

## Remarks

Under the nonzero-row promise and countable-product sampling model stated in the theorem, Tang's real-matrix result matches a particular input structure: entry queries together with efficient row/column ℓ2-norm sampling, including the preprocessing and storage that provide those samplers. Its task is to sample from a specified recommendation row derived from a thresholded low-rank approximation, and its output is a sample rather than a full matrix or a classical list of amplitudes. It therefore establishes a classical counterpart for that access/task/output contract. It does not assert efficient classical simulation of arbitrary quantum circuits, arbitrary quantum-state output, or algorithms whose input model lacks the required ℓ2 samplers. Compare algorithms only after matching input access, output type, approximation metric, and charged preprocessing.
