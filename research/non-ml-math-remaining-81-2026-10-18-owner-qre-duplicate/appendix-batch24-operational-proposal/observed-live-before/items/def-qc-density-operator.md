---
id: def-qc-density-operator
kind: definition
title: Density operator
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-non-negative-and-positive-operator
  - def-trace-of-an-endomorphism
  - def-real-and-complex-inner-product-space
  - def-dimension
  - def-kernel-and-image-of-a-linear-map
  - def-linear-subspace
justified_by:
  - thm-qc-density-operator-existence
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2–2.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and
        Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
forward_refs:
  - ex-qc-bell-state-schmidt-reduction
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space, with the root library's convention that the inner product is linear in its first argument. A **density operator** on $H$ is a non-negative endomorphism $\rho:H\to H$ with $\operatorname{tr}(\rho)=1$; non-negative and trace have the meanings of [[def-non-negative-and-positive-operator]] and [[def-trace-of-an-endomorphism]]. The zero-dimensional space is excluded: its only endomorphism has trace $0$.

Here $\ker\rho=\{x\in H:\rho x=0\}$, using the kernel of a linear map from [[def-kernel-and-image-of-a-linear-map]]. The **support** of $\rho$ is the orthogonal complement of its kernel in the root convention:

$$\operatorname{supp}(\rho):=\{x\in H: \langle x,y\rangle=0\text{ for every }y\in\ker\rho\}.$$

For a subspace $S\subseteq H$, $\rho$ is **faithful on $S$** when $\operatorname{supp}(\rho)=S$ and the restriction $\rho|_S:S\to S$ is positive definite in the sense of [[def-non-negative-and-positive-operator]]. This restriction is an endomorphism: if $x\in S$ and $y\in\ker\rho$, self-adjointness gives $\langle\rho x,y\rangle=\langle x,\rho y\rangle=0$, so $\rho x\in(\ker\rho)^\perp=S$.

## Remarks

The definition separates the finite-dimensional mathematical object from any preparation story. An ensemble representation of a density operator is additional data and need not be unique: [[ex-qc-bell-state-schmidt-reduction]] gives two distinct equal-weight decompositions of $I_2/2$, using the computational and $\{|+\rangle,|-\rangle\}$ bases. No measurement or physical postulate is part of this definition.
