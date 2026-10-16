---
id: def-qa-29-coherent-sampler
kind: definition
title: "Coherent finite sampler and observable value"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-pure-state-and-ray
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-projective-measurement
  - def-qc-dirac-notation-conversion
  - def-qc-circuit-cost-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Sections 2–3"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Section 19.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $X$ be a finite nonempty set with probability law $p_x\ge0$, $\sum_{x\in X}p_x=1$, and let the value register contain an exact finite encoding of a real function $g:X\to[a,b]$, where $a\le b$ are finite rationals. A **coherent finite sampler** for $(X,p,g)$ is an explicitly supplied finite-dimensional unitary $V$ on ordered sample, value, and work registers such that
$$V|0\rangle=\sum_{x\in X}\sqrt{p_x}\,|x\rangle|g(x)\rangle|w_x\rangle,$$
where the sample labels $|x\rangle$ are distinct computational-basis vectors and each work state $|w_x\rangle$ has norm one. Zero-probability labels may occur and need no special branch. The registers and their order use [[def-qc-register-and-computational-basis]] and [[def-qc-tensor-register-and-permutation]]; each output is a pure state in the sense of [[def-qc-pure-state-and-ray]]. The separate item [[lem-qa-29-coherent-sampler-outcome-law]] verifies the induced measurement law.

The access contract lists the actual circuits or oracle interfaces for $V$, $V^\dagger$, controlled $V$ and controlled $V^\dagger$, value decoding, reversible arithmetic, any coherent predicate and controlled rotation, and the reflections used by the chosen estimator. Their availability is explicit under [[def-qc-controlled-unitary-access]] and [[def-qc-inverse-unitary-access]]. A forward unitary alone does not grant an inverse or a controlled call.

The resource record follows [[def-qc-circuit-cost-model]]: charge state preparation, inverse and controlled access, data loading, value comparison and arithmetic, controlled-rotation synthesis and precision, good-state and initial-state reflections, gates, width, ancillas, and classical postprocessing separately. The state-preparation circuit and its costs are inputs; a state description is not a free QRAM or preparation oracle.
