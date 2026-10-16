---
id: lem-qa-30-positive-product-trace-nonnegative
kind: lemma
title: "Trace of a product of positive semidefinite matrices is nonnegative"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-non-negative-and-positive-operator
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-trace-of-ab-equals-trace-of-ba
  - def-trace-of-a-square-matrix
  - def-real-and-complex-inner-product-space
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joran van Apeldoorn et al., Quantum SDP-solvers: Better upper and lower bounds"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

If $P,Q\in\mathbb C^{n\times n}$ are positive semidefinite, then $\operatorname{tr}(PQ)\ge0$ for every $n\ge0$.

## Facts & Assumptions

**Given:** $P,Q$ are self-adjoint and have nonnegative quadratic forms on a finite-dimensional complex inner-product space.

[F1] [[def-non-negative-and-positive-operator]]: nonnegative means self-adjoint and $\langle Tx,x\rangle\ge0$ for every vector $x$.

[F2] [[thm-non-negative-square-root-exists-and-is-unique]]: a nonnegative finite-dimensional operator has a nonnegative square root $R$ satisfying $R^2=P$.

[F3] [[thm-trace-of-ab-equals-trace-of-ba]]: $\operatorname{tr}(UV)=\operatorname{tr}(VU)$ for compatible finite matrices.

[F4] [[def-trace-of-a-square-matrix]]: trace is the finite diagonal sum, with the empty sum equal to zero.

[F5] [[def-real-and-complex-inner-product-space]]: the inner product is linear in the first argument, conjugate-linear in the second, and the quadratic form of a nonnegative operator is nonnegative real.

## Proof

**Proof technique:** direct.

1.1 Let $R=P^{1/2}$ from [F2] and put $T=RQR$. Since $Q$ is nonnegative by [F1], self-adjointness of $R$ and the inner-product identity [F5] give $\langle Tx,x\rangle=\langle QRx,Rx\rangle\ge0$ for every $x$. Thus every diagonal entry $\langle Te_j,e_j\rangle$ in an orthonormal coordinate basis is nonnegative real; summing by [F4] gives $\operatorname{tr}(T)\ge0$. This also holds in dimension zero because the trace is the empty sum. [given, F1, F2, F4, F5, algebra]

2.1 Since $P=R^2$, [F3] applied to $U=R$ and $V=RQ$ gives $\operatorname{tr}(PQ)=\operatorname{tr}(R(RQ))=\operatorname{tr}((RQ)R)=\operatorname{tr}(RQR)=\operatorname{tr}(T)\ge0$ by step 1.1. [given, F3, step 1.1, algebra] ∎
