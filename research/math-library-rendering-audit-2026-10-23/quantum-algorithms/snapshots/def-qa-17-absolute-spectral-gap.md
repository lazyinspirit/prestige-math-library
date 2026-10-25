---
id: def-qa-17-absolute-spectral-gap
kind: definition
title: "Absolute spectral gap of a finite reversible chain"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-17-finite-reversible-chain
  - lem-qa-17-reversible-transition-self-adjoint-on-l2-pi
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
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
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §18.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.1"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Definition

For a finite reversible chain $(X,P,\pi)$, let $H_0=\{f:\sum_x\pi_xf_x=0\}$ with the weighted inner product from [[lem-qa-17-reversible-transition-self-adjoint-on-l2-pi]]. Define its **absolute spectral gap** by

$$\delta_{\mathrm{abs}}(P):=1-\|P|_{H_0}\|_{2,\pi}.$$

The norm of the restriction to the zero subspace is $0$ by [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], so a one-state chain has absolute gap $1$. No irreducibility or aperiodicity is built into this definition: a reducible chain with a nonconstant stationary vector in $H_0$ can have gap $0$, and a periodic chain can have gap $0$ because of an eigenvalue $-1$. The eigenvalue form of the definition is proved in [[thm-qa-17-absolute-gap-eigenvalue-characterization]].
