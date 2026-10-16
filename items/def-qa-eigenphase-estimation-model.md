---
id: def-qa-eigenphase-estimation-model
kind: definition
title: Eigenphase estimation access model
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-dirac-notation-conversion
  - def-qc-pure-state-and-ray
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-projective-measurement
  - def-qc-tensor-register-and-permutation
  - def-complex-exponential
justified_by: []
axiom_use: "None; the definition fixes finite-dimensional input data and access capabilities."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Let $H$ be a finite-dimensional complex inner-product space, $U:H\to H$ a unitary, and $\psi\in H$ a unit vector with a promised phase $\theta\in[0,1)$ such that
$$U\psi=\exp(2\pi i\theta)\psi.$$
For an integer $m\ge1$, let $Q=2^m$. The phase register is $(\mathbb C^2)^{\otimes m}$ with ordered computational basis indexed big-endian by
$x=\sum_{k=0}^{m-1}b_k2^{m-1-k}$, where $b_k\in\{0,1\}$ ([[def-qc-register-and-computational-basis]], [[def-qc-ordered-bitstring-encoding]]).
Thus the wire of weight $2^j$ is $q_{m-1-j}$.

There are distinct forward-access options:

1. **Controlled-power access.** The model explicitly supplies one controlled $U^{2^j}$ operation for each $j=0,\ldots,m-1$. Each use is counted as one controlled-power query; an implementation's ordinary gate cost is recorded separately.
2. **Single controlled-unitary access.** The model supplies calls to $C(U)=\operatorname{diag}(I_H,U)$ in the control-first order of [[def-qc-controlled-unitary-access]]. A controlled $U^{2^j}$ may be implemented by $2^j$ sequential calls to $C(U)$; those calls are charged individually.

Optional **controlled inverse-power access** is a separate capability that explicitly supplies $C(U^{-2^j})$ for each required $j$. It is not implied by either forward option. It is needed only by a consuming procedure that reverses the controlled-power portion of a coherent QPE prefix. Reversing the inverse-QFT gate list does not use $U^{-1}$.

Finite ordered-register syntax is specified by [[def-qc-circuit-syntax-and-register-order]], gate action by [[def-qc-circuit-denotational-semantics]], and projective measurement outcomes by [[def-qc-projective-measurement]]. The definition is an access-model promise: it does not assert that the supplied controlled powers have an efficient construction or that $\theta$ has an exact $m$-bit expansion.
