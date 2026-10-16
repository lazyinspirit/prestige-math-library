---
id: lem-qc-instrument-output-space-is-nonzero
kind: lemma
title: "A finite instrument with nonzero input has nonzero output space"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-instrument-and-conditional-state
  - def-dimension
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-matrix-product-and-identity-matrix
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
justified_by: []
dependency_level: 6
proof_strategy: direct
axiom_use: "None; only a finite basis of the nonzero input space is chosen."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018 author-hosted draft), §2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.2.4"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space, let $K$ be a finite-dimensional complex inner-product space, and suppose a finite instrument $(\mathcal I_a)_{a\in\Omega}$ from $H$ to $K$ exists. Then $K$ is nonzero.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional input space $H$, a finite-dimensional output space $K$, and a finite instrument from $H$ to $K$.

[F1] [[def-qc-instrument-and-conditional-state]]: for every $X\in\mathcal L(H)$, $\sum_{a\in\Omega}\operatorname{tr}_K(\mathcal I_a(X))=\operatorname{tr}_H(X)$.

[F2] [[def-dimension]]: every finite-dimensional vector space has a finite basis, and dimension zero is equivalent to being the zero space.

[F3] [[def-coordinate-column-and-matrix-of-a-linear-map]], [[def-matrix-product-and-identity-matrix]], [[def-trace-of-an-endomorphism]], and [[def-trace-of-a-square-matrix]]: in an ordered basis of length $h$, the identity endomorphism has matrix $I_h$, and its trace is the sum of its $h$ diagonal ones.

## Proof

1.1 Put $h=\dim H$. By [F2] and $H\ne0$, $h\ge1$; choose an ordered basis of length $h$. The coordinate columns of the identity map give the matrix $I_h$ by [F3], so $\operatorname{tr}_H(I_H)=\operatorname{tr}(I_h)=h>0$. [given, F2, F3, choose, algebra]

2.1 Suppose $\dim K=0$. Then [F2] gives $K=\{0\}$, so every output endomorphism $\mathcal I_a(I_H)$ is the zero operator and has trace $0$. Applying [F1] to $I_H$ would give $0=\operatorname{tr}_H(I_H)$, contradicting step 1.1. Hence $\dim K>0$ and $K\ne0$. [given, step 1.1, F1, F2, discharge-contradiction] ∎
