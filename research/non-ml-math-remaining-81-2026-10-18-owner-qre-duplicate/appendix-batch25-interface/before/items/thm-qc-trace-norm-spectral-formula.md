---
id: thm-qc-trace-norm-spectral-formula
kind: theorem
title: Trace Norm Spectral Formula
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-linear-map
  - def-qc-trace-norm
  - def-singular-values-of-an-endomorphism
  - thm-non-negative-operator-characterisations
  - def-trace-of-an-endomorphism
justified_by: []
proof_strategy: direct
axiom_use: None; only finite-dimensional spectral and trace results are used.
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
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapter 1, §1.1.3, Eq. (1.181)
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendix A.5"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Statement

For every linear map $A:H\to K$ ([[def-linear-map]]) between finite-dimensional
complex inner-product spaces,

$$\|A\|_1=\operatorname{tr}_H\!\left(\sqrt{A^*A}\right).$$

Here $A^*A$ and its non-negative square root are endomorphisms of the domain
$H$; the trace is taken on $H$.

## Facts & Assumptions
**Given:** Finite-dimensional complex inner-product spaces $H,K$ and a linear
map $A:H\to K$.

[F1] The singular values of $A$ are the eigenvalues of
$|A|=\sqrt{A^*A}$, counted with multiplicity
([[def-singular-values-of-an-endomorphism]]).

[F2] A non-negative operator has an orthonormal eigenbasis with nonnegative
eigenvalues ([[thm-non-negative-operator-characterisations]]).

[F3] The trace of an endomorphism is the sum of its diagonal entries in any
ordered basis, and the trace on the zero space is $0$
([[def-trace-of-an-endomorphism]]).

[F4] The trace norm is the sum of the singular values on the domain, including
zeros ([[def-qc-trace-norm]]).

## Proof

1.1 The operator $|A|=\sqrt{A^*A}$ in [F1] is non-negative. By [F2], choose an orthonormal eigenbasis of $H$; its eigenvalues, with multiplicity, are exactly the singular values of $A$ by [F1]. In that basis [F3] gives $\operatorname{tr}_H(|A|)=\sum_{j<\dim H}s_j(A)$. [given, F1, F2, F3, choose]

2.1 The sum in step 1.1 is $\|A\|_1$ by [F4]. If $H=0$, both are the empty sum $0$ by [F3]–[F4]. This proves the formula for rectangular maps and all finite dimensions. [F3, F4, step 1.1] ∎
