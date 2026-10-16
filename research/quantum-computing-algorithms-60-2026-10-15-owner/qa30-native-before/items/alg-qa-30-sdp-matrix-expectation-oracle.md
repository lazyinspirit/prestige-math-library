---
id: alg-qa-30-sdp-matrix-expectation-oracle
kind: algorithm
title: "Coherent SDP matrix-expectation oracle"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - thm-qa-30-sdp-gibbs-state-error-cost
  - alg-qa-29-quantum-expectation-estimation
  - def-qc-projective-measurement
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - lem-qa-30-normalized-hermitian-observable-effects
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
    - title: "https://arxiv.org/pdf/1504.06987v3"
      url: "https://arxiv.org/pdf/1504.06987v3"
verification:
  precheck: n/a
---

## Definition

Input an explicit finite purification circuit $V_\rho$ preparing a unit vector whose reduced state on register $S$ is $\rho$, together with its inverse and any controlled versions. Also supply a finite unitary dilation $W_M$ of the two-outcome POVM $E_\pm=(I\pm M)/2$ for a Hermitian contraction $M$, with an output bit and all work registers. Prepare the purification, apply $W_M$ to $S$, and keep the outcome bit coherent; the resulting finite sampler has values $+1$ and $-1$. Apply [[alg-qa-29-quantum-expectation-estimation]] to this sampler on $[-1,1]$. Supply its inverse, controlled calls, good and initial-state reflections, observable access, and all value/output encodings. No inverse preparation is inferred from a measured postselected Gibbs state.

This procedure is distinct from the flagged-trace ratio route inside the sparse SDP solver; that route is specified in the solver's OP8 operational definition. Every purification, observable, inverse, controlled call, dilation, measurement and compilation cost is separately charged.
