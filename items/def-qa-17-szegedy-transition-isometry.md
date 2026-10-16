---
id: def-qa-17-szegedy-transition-isometry
kind: definition
title: "Szegedy row-preparation map and discriminant"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - thm-of-square-roots
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-qa-17-finite-stochastic-kernel
  - def-qc-dirac-notation-conversion
justified_by:
  - thm-qa-17-discriminant-self-adjoint
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
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §§18.2–18.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Definition

For a finite row-stochastic kernel $(X,P)$, let $\mathbb C^X$ and $\mathbb C^{X\times X}$ carry the standard orthonormal label and ordered-product bases. If $X\ne\varnothing$, these coordinate spaces are implemented as two ordered registers; if $X=\varnothing$, they are zero spaces and every map below is the unique zero-dimensional map. Define the row-preparation linear map $T:\mathbb C^X\to\mathbb C^{X\times X}$ and the swap $S$ on basis vectors by

$$T|x\rangle=|x\rangle\otimes\sum_{y\in X}\sqrt{P_{xy}}|y\rangle,\qquad S|x,y\rangle=|y,x\rangle.$$

Every scalar square root is the unique nonnegative real root. Define the **discriminant** by $D:=T^*ST$, using the adjoint characterized by $\langle Tv,w\rangle=\langle v,T^*w\rangle$ for the root inner product, which is linear in its first argument. The row-preparation map is an isometry; its complete verification is [[thm-qa-17-discriminant-self-adjoint]]. This is the general row-stochastic construction and assumes no reversibility.
