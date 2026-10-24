---
id: prop-qc-unitary-conjugation-global-phase-invariant
kind: proposition
title: "Unitary conjugation is invariant under a global phase"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, prop-adjoint-algebra, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous, def-linear-isometry-and-orthogonal-or-unitary-operator, def-qc-unitary-conjugation-channel, lem-qc-linear-isometry-adjoint-identities]
justified_by: []
proof_strategy: direct
dependency_level: 2
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §3.2.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K$ be nonzero finite-dimensional complex inner-product spaces of equal
dimension, let $U:H\to K$ be a unitary map, and let $z\in\mathbb C$ satisfy
$|z|=1$. Then $zU$ is unitary and
$$\operatorname{Ad}_{zU}=\operatorname{Ad}_{U}.$$
This equality concerns conjugation by a single unitary. It makes no assertion
about controlled uses, where a scalar on one control branch may be a relative
phase.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H,K$, a
surjective linear isometry $U:H\to K$, and a scalar $z$ with $|z|=1$.

[F1] [[def-qc-unitary-conjugation-channel]]: a unitary map is a surjective
linear isometry, and $\operatorname{Ad}_U(X)=UXU^\dagger$.

[F2] [[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]:
$\|\lambda x\|=|\lambda|\|x\|$.

[F3] [[prop-adjoint-algebra]]: $(zU)^\dagger=\overline z\,U^\dagger$.

[F4] [[lem-qc-linear-isometry-adjoint-identities]]: every surjective linear
isometry between finite-dimensional spaces satisfies both adjoint identities.

## Proof


1.1 For each $x\in H$, [F2] and $|z|=1$ give $\|zUx\|=|z|\|Ux\|=\|x\|$. The map $zU$ is surjective: for any $y\in K$, choose $x\in H$ with $Ux=\overline z\,y$, then $zUx=y$. Hence $zU$ is a surjective linear isometry and is unitary by [F1]; [F4] supplies its adjoint identities. [given, F1, F2, F4, choose, algebra]

2.1 For every $X\in\mathcal L(H)$, [F1] and [F3] give $\operatorname{Ad}_{zU}(X)=(zU)X(zU)^\dagger =z\overline z\,UXU^\dagger=|z|^2\operatorname{Ad}_U(X) =\operatorname{Ad}_U(X)$. This holds on every input operator, so the maps are equal. The proof concerns only a single conjugation map and yields no controlled-operation identity. [given, F1, F3, step 1.1, algebra] ∎

