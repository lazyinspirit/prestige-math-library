---
id: ex-qftx-adhm-zero-charge-framing-monad
kind: example
title: "The zero-charge framed monad"
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads-examples
dependency_level: 10
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - thm-qftx-framed-p2-monad-adhm-correspondence
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  thm-qftx-framed-p2-monad-adhm-correspondence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

For $k=0$ and any $N\ge1$, the ADHM vector space is zero, all four maps are the unique zero-dimensional maps, and both quotient presentations are a point. The monad is $0\to W\otimes\mathcal O_{\mathbb P^2}\to0$; its middle cohomology is the framed trivial bundle $W\otimes\mathcal O_{\mathbb P^2}$ and its Hilbert polynomial is $N\binom{m+2}{2}$.

## Example references

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[thm-qftx-framed-p2-monad-adhm-correspondence]]

## Facts & Assumptions

**Given:** $N\ge1$, $k=0$, and the local ADHM definitions.

[F1] For $V=0$, every endomorphism and map to or from $V$ is unique; stability and costability are vacuous, and $GL(0)$ and $U(0)$ are trivial. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] The ADHM-to-monad construction uses source $V\mathcal O(-1)$, middle $(V\oplus V\oplus W)\mathcal O$, target $V\mathcal O(1)$, and the displayed Hilbert polynomial. [[thm-qftx-framed-p2-monad-adhm-correspondence]]

## Proof

**Given:** The zero vector space $V=\mathbb C^0$.

1.1 There is exactly one linear map between any of the zero spaces, so $B_1,B_2,I,J$ are all zero maps. The complex and real equations are equalities between zero endomorphisms. The span of the empty family is $0=V$, and no nonzero subspace of $V$ exists; hence stability and costability hold. The gauge groups have one element, so each quotient consists of one point. [F1, algebra]

2.1 Substituting $V=0$ into the monad leaves $0\to W\mathcal O\to0$. Its kernel at the right is $W\mathcal O$ and the image at the left is zero, so the middle cohomology is canonically $W\mathcal O$. Restriction to $L_\infty$ is the identity framing on the prescribed basis of $W$. Since $\chi(\mathcal O(m))=\binom{m+2}{2}$, its Hilbert polynomial is $N\binom{m+2}{2}$, the case $k=0$ of [F2]. No Euler-block or empty-matrix convention changes these calculations. [F2, step 1.1, algebra] ∎
