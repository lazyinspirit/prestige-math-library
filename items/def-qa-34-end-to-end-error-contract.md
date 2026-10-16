---
id: def-qa-34-end-to-end-error-contract
kind: definition
title: End-to-end channel and output error contract
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qc-quantum-channel
  - def-qc-diamond-norm
  - def-qc-trace-distance
  - def-qc-density-operator
  - def-qc-circuit-denotational-semantics
  - def-qc-circuit-cost-model
  - def-qa-34-output-and-cost-types
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Definition

A finite $L$-stage composition contract consists of nonzero finite-dimensional complex Hilbert spaces $H_0,\ldots,H_L$ and, for each $j=1,\ldots,L$, an ideal channel $\Phi_j:\mathcal L(H_{j-1})\to\mathcal L(H_j)$ and an implemented channel $\widetilde\Phi_j$ with the same domain and codomain. Channels are completely positive and trace-preserving on the full operator space, as in [[def-qc-quantum-channel]]. Products act right to left, so $\Phi_L\cdots\Phi_1$ applies stage $1$ first, following [[def-qc-circuit-denotational-semantics]].

For channels on the same nonzero finite-dimensional complex Hilbert input and output spaces define the **normalized diamond distance**
$$d_\diamond(\Psi,\Phi):=\tfrac12\|\Psi-\Phi\|_\diamond,$$
where $\|\cdot\|_\diamond$ is the unhalved supremum of induced trace norms over all finite reference spaces, as in [[def-qc-diamond-norm]]. For density operators $\rho,\sigma$ define $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$, as in [[def-qc-trace-distance]]. For probability distributions $p,q$ on a common finite output alphabet define $d_{\rm TV}(p,q)=\tfrac12\sum_a|p(a)-q(a)|$.

The **local channel error** at stage $j$ is $d_\diamond(\widetilde\Phi_j,\Phi_j)$. The **final channel error** is $d_\diamond(\widetilde\Phi_L\cdots\widetilde\Phi_1,\Phi_L\cdots\Phi_1)$. A **final output-distribution error** is total variation distance between the finite laws obtained by applying a declared final POVM to the two output states. A **failure probability** is the probability of a declared failure event in the finite execution history. These four quantities have different definitions and must be reported separately.

When an input is entangled with a finite reference register, include that reference in the density operator of [[def-qc-density-operator]] and retain it through the channel call; the diamond distance already takes the supremum over such references. Channel, state, and classical output contracts are distinct. Cost coordinates for input description and preprocessing, state preparation, gates, queries including controlled and inverse access, workspace, measurement, postprocessing, and classical output are specified separately by [[def-qa-34-output-and-cost-types]] and [[def-qc-circuit-cost-model]].
