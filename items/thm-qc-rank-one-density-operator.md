---
id: thm-qc-rank-one-density-operator
kind: theorem
title: Rank-one density operators are pure-state projectors
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-qc-pure-state-and-ray, def-qc-density-operator, thm-qc-ray-projector-well-defined-and-bijective, thm-qc-density-spectral-ensemble, def-trace-of-an-endomorphism, prop-trace-is-linear, def-rank-and-nullity]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §15.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Every pure-state ray projector on a nonzero finite-dimensional complex-inner-product space is a density operator. Conversely, every rank-one density operator is the projector of a unique pure-state ray.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex-inner-product space $H$.

[F1] [[def-qc-pure-state-and-ray]]: a pure state is a ray represented by a unit vector's rank-one projector.

[F2] [[def-qc-density-operator]]: a density operator is non-negative with trace one.

[F3] [[thm-qc-ray-projector-well-defined-and-bijective]]: unit-vector rays correspond bijectively to rank-one orthogonal projectors, each non-negative and trace one.

[F4] [[thm-qc-density-spectral-ensemble]]: a density operator is a positive-weight sum of orthogonal unit-ray projectors, with one term per positive eigenvalue and number of terms equal to its rank.

[F5] [[def-rank-and-nullity]]: rank is the dimension of the image of a finite-dimensional linear map.

[F6] [[def-trace-of-an-endomorphism]] and [[prop-trace-is-linear]]: endomorphism trace is matrix trace in a basis, and trace is linear under scalar multiplication.

## Proof

1.1 For any pure-state ray, [F1] gives a unit representative and [F3] makes its projector non-negative with trace one. By [F2] it is a density operator. [F1, F2, F3, given]

2.1 Let $\rho$ be a density operator whose image has dimension one by [F5]. By [F4] its spectral ensemble has exactly one positive term, so $\rho=\lambda|u\rangle\langle u|$ for a unit $u$ and $\lambda>0$. The trace-one condition in [F2] gives $1=\operatorname{tr}(\rho)=\lambda\operatorname{tr}(|u\rangle\langle u|)=\lambda$, by [F3] and linearity [F6]. Hence $\rho$ is the projector of $[u]$, and the bijection in [F3] makes that ray unique. [F2, F3, F4, F5, F6, algebra] ∎

## Remarks

The spectral-ensemble route uses a finite-dimensional eigenbasis and a finite positive-eigenvalue list; no arbitrary-index choice is used.
