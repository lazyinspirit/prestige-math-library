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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Input rational parameters $0<\tau\le2$ and $0<\delta<1$, a choice of repeated controlled-$Q$ or supplied controlled-power QA13 access with its declared costs, and an explicit finite purification circuit $V_\rho$ preparing a unit vector whose reduced state on register $S$ is $\rho$, together with its inverse and any controlled versions. Also supply a finite unitary dilation $W_M$ of the two-outcome POVM $E_\pm=(I\pm M)/2$ for a Hermitian contraction $M$, with an output bit and all work registers. Prepare the purification, apply $W_M$ to $S$, and keep the outcome bit coherent; the resulting finite sampler has values $+1$ and $-1$. Supply this signed sampler’s inverse, controlled calls, good and initial-state reflections, observable access, and all value/output encodings. Apply [[alg-qa-29-quantum-expectation-estimation]] to this sampler on $[-1,1]$ with rational target $\varepsilon=\tau/2$ and failure probability $\delta$, using the selected access mode. Return its classical estimate $\widetilde\mu$ together with the constructed coherent signed-sampler circuit and its declared access/cost description. The sampling tolerance $\tau/2$ reserves the other half of the requested tolerance $\tau$ for a purification-bias allowance in the consuming theorem. No inverse preparation is inferred from a measured postselected Gibbs state.

This procedure is distinct from the flagged-trace ratio route inside the sparse SDP solver; that route is specified by the solver's frozen round factory and trace-label construction. Every purification, observable, inverse, controlled call, dilation, measurement and compilation cost is separately charged.
