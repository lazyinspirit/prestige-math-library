---
id: ex-equivariant-index-on-a-zero-manifold
kind: example
title: "A nontrivial virtual character on a two-point manifold"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-index-examples
dependency_level: 1
deps:
  - def-equivariant-elliptic-complex-index
dependency_roles:
  def-equivariant-elliptic-complex-index: mathematical-premise
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
sources:
  references: []
---

## Example

Let $T=\mathbb R/\mathbb Z$ and let $M=\{p,q\}$ be a two-point smooth $0$-manifold with trivial $T$-action. For $k\in\mathbb Z$, let $\mathbb C_k$ be the one-dimensional representation $[s]\mapsto e^{2\pi i k s}$. Take the zero-differential complex whose fibers are $E_p^0=\mathbb C_0\oplus\mathbb C_1$, $E_p^1=\mathbb C_2$, $E_q^0=\mathbb C_1$, and $E_q^1=\mathbb C_0$, with all other fibers zero. Its equivariant index is $2[\mathbb C_1]-[\mathbb C_2]$, with character $2z-z^2$ at $z=e^{2\pi i s}$. Every point is fixed, the tangent determinant is the empty determinant $1$, and the fixed-point sum is also $2z-z^2$.

## Facts & Assumptions

**Given:** The two-point compact smooth manifold, the trivial base action, the displayed fiber representations, and zero differential.

[F1] The equivariant index is the alternating class of finite-dimensional cohomology representations and its character is the alternating trace. [[def-equivariant-elliptic-complex-index]]

## Verification

1.1 Since $M$ is $0$-dimensional, there is no nonzero cotangent vector at any point, so the symbol exactness condition is vacuous. The zero maps form a complex, and its cohomology in each degree is the displayed fiber representation. By [F1], its index is $[\mathbb C_0]+[\mathbb C_1]-[\mathbb C_2]+[\mathbb C_1]-[\mathbb C_0]=2[\mathbb C_1]-[\mathbb C_2]$, whose character is $2z-z^2$. [given, F1, algebra]

2.1 Every $g\in T$ fixes $p$ and $q$. The tangent space at either point is the zero vector space, so $I-dg$ is its unique invertible endomorphism and has determinant $1$. The local fiber supertraces are $1+z-z^2$ at $p$ and $z-1$ at $q$. Their sum is $2z-z^2$, agreeing with the index character. [given, F1, step 1.1, algebra] ∎
