---
id: lem-complex-norm-realification-is-a-real-norm
kind: lemma
title: "Realification preserves a complex norm and its metric"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-norm-and-complex-normed-space, def-realification-of-a-complex-vector-space, def-norm-and-normed-space, lem-complex-modulus-of-real-embedding-equals-real-absolute-value]
proof_strategy: direct
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1, Definition 1.1 and Example 1.2"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
---

## Statement

If $(V,N)$ is a complex normed space, then the same function $N$ is a real norm on $V_{\mathbb R}$. The underlying set, addition, norm values, and induced norm metric are unchanged.

## Facts & Assumptions

**Given:** A complex normed space $(V,N)$ as in [[def-complex-norm-and-complex-normed-space]].

[F1] Realification retains the set and addition and restricts scalar multiplication through the canonical real embedding ([[def-realification-of-a-complex-vector-space]]).

[F2] For real $r$, $|\iota(r)|_{\mathbb C}=|r|_{\mathbb R}$ ([[lem-complex-modulus-of-real-embedding-equals-real-absolute-value]]). The three real norm axioms and metric formula are those of [[def-norm-and-normed-space]].

## Proof

1.1 Separation and the triangle inequality for $N$ on $V_{\mathbb R}$ are the original complex norm axioms, since the zero vector and addition are unchanged. For $r\in\mathbb R$ and $v\in V$, $N(r\cdot v)=N(\iota(r)v)=|\iota(r)|_{\mathbb C}N(v)=|r|_{\mathbb R}N(v)$. Thus all real norm axioms hold. [given, F1, F2]

2.1 Realification leaves additive inverses unchanged, so its metric is exactly $N(u-v)$ on the same pairs $(u,v)$. This proves the claimed metric identity; in particular open sets, convergence, Cauchy sequences and completeness are unchanged. [F1, F2, step 1.1] ∎
