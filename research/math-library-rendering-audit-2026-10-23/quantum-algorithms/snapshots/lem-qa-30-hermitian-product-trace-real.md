---
id: lem-qa-30-hermitian-product-trace-real
kind: lemma
title: "Trace of a product of Hermitian matrices is real"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-self-adjoint-and-normal-endomorphism
  - def-trace-of-a-square-matrix
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - prop-adjoint-algebra
  - thm-trace-of-ab-equals-trace-of-ba
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

For Hermitian matrices $A,B\in\mathbb C^{n\times n}$, $n\ge0$, the trace $\operatorname{tr}(AB)$ is real.

## Facts & Assumptions

**Given:** $A^*=A$ and $B^*=B$ in an orthonormal coordinate basis; trace is the diagonal sum, including the empty sum when $n=0$.

[F1] [[def-self-adjoint-and-normal-endomorphism]]: self-adjoint means $T^*=T$.

[F2] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: the matrix of an adjoint in orthonormal bases is the conjugate transpose.

[F3] [[prop-adjoint-algebra]]: $(ST)^*=T^*S^*$ for compatible finite-dimensional maps.

[F4] [[thm-trace-of-ab-equals-trace-of-ba]]: for compatible rectangular matrices, $\operatorname{tr}(UV)=\operatorname{tr}(VU)$.

[F5] [[def-trace-of-a-square-matrix]]: trace is the sum of the diagonal entries, and the empty diagonal sum is zero.

## Proof

**Proof technique:** direct.

1.1 Conjugating the diagonal sum in [F5] entry by entry and using [F2] gives $\overline{\operatorname{tr}(AB)}=\operatorname{tr}((AB)^*)$. For $n=0$, both sides are the empty sum $0$. [given, F2, F5, algebra]

2.1 By [F1] and [F3], $(AB)^*=B^*A^*=BA$. Then [F4] gives $\operatorname{tr}(BA)=\operatorname{tr}(AB)$, so step 1.1 says $\operatorname{tr}(AB)$ equals its conjugate and is real. [given, F1, F3, F4, step 1.1, algebra] ∎
