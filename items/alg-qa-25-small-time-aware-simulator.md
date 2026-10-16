---
id: alg-qa-25-small-time-aware-simulator
kind: algorithm
title: Small-time-aware qubitized simulator
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-25-qubitized-hamiltonian-simulation
  - def-qa-25-qubitization-access-model
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Theorem 58 and Lemma 59"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

**Input.** An exact Hermitian block encoding of $H/\alpha$, $\alpha>0$, a rational time $t$, rational $0<\epsilon<1$, and a terminating certified comparison of $\tau=\alpha|t|$ with $\epsilon$, charged under the access model. For the $\tau>\epsilon$ branch, supply all exact-block-mode inputs of [[alg-qa-25-qubitized-hamiltonian-simulation]]: the certified norm promise $\|H\|_{\rm op}\le\alpha$, clean embedding, declared forward, inverse and controlled signal access, projector-phase circuits, coefficient preparation, SELECT, OAA reflections, phase synthesis, data access and classical arithmetic with their costs, and terminating certified scalar comparisons and rational-interval evaluations for every arithmetic test in that procedure. These capabilities must be supplied, not inferred from the block matrix or the single comparison of $\tau$ with $\epsilon$.

**Instructions.**

1. If $\tau\le\epsilon$, return the identity circuit on the system, with every work register left at zero. The query, gate, and bit costs of this branch are zero.
2. If $\tau>\epsilon$, invoke [[alg-qa-25-qubitized-hamiltonian-simulation]] with $t,\epsilon$, and return its circuit and error certificate. Propagate any INVALID, CERTIFICATE_ERROR, or IMPLEMENTATION_ERROR result without labeling it a successful simulation.

The comparison cost is recorded separately. The second branch is exactly the OP4 procedure; this wrapper does not modify OP4 or infer inverse, controlled, state-preparation, or phase-synthesis access.
