---
id: lem-complex-norm-realification-is-a-real-norm
kind: lemma
title: "Realification preserves a complex norm and its metric"
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-norm-and-complex-normed-space, def-realification-of-a-complex-vector-space, def-norm-and-normed-space, lem-complex-modulus-of-real-embedding-equals-real-absolute-value]
justified_by: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1 (complete five-page lecture notes)"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
    - title: "M. Winklmeier, Functional Analysis lecture notes (complete 140-page lecture notes)"
      url: "https://math.uniandes.edu.co/~mwinklme/teaching/FuncAna/FA-lecture_notes.pdf"
---

## Statement

Let $(V,N)$ be a complex normed space and define $d_N(u,v):=N(u-v)$ for $u,v\in V$. On the realification $V_{\mathbb R}$, the same function $N$ is a real norm. The underlying set, addition, norm values, and induced metric $d_N$ are unchanged.

## Facts & Assumptions

**Given:** A complex normed space $(V,N)$ and its realification $V_{\mathbb R}$. For each $r\in\mathbb R$, write $\lambda_r$ for its canonical complex image.

[F1] $N:V\to\mathbb R$ separates zero, is homogeneous for every complex scalar by the complex modulus, and satisfies the triangle inequality ([[def-complex-norm-and-complex-normed-space]]).

[F2] Realification has the same underlying set and addition, and its real scalar action is the complex scalar action restricted along the canonical real embedding ([[def-realification-of-a-complex-vector-space]]).

[F3] For every real $r$, the complex modulus of its canonical image $\lambda_r$ is $|r|_{\mathbb R}$ ([[lem-complex-modulus-of-real-embedding-equals-real-absolute-value]]).

[F4] A real norm separates zero, is absolutely homogeneous for real scalars, and satisfies the triangle inequality ([[def-norm-and-normed-space]]).

[F5] The induced real norm metric is the function $d_N(u,v)=N(u-v)$, which is a metric ([[def-norm-and-normed-space]]).

## Proof

1.1 Since realification preserves the set, zero vector, and addition, the separation and triangle conditions in [F1] hold unchanged on $V_{\mathbb R}$. The codomain remains $\mathbb R$. [F1, F2]

2.1 For $r\in\mathbb R$ and $v\in V$, [F2] gives $r\cdot_{V_{\mathbb R}}v=\lambda_r v$. Hence [F1] and [F3] give $N(r\cdot_{V_{\mathbb R}}v)=N(\lambda_r v)=|\lambda_r|_{\mathbb C}N(v)=|r|_{\mathbb R}N(v)$. Together with step 1.1, this is exactly the real norm criterion [F4]. [F1, F2, F3, F4, step 1.1]

3.1 The set and addition are unchanged by [F2], so additive inverses and differences are unchanged as well. The realified norm's induced metric is therefore $N(u-v)$ by [F5], the same function $d_N$ defined in the statement, with the same values on the same pairs. [F2, F5, step 2.1] ∎
