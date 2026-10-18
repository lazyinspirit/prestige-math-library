---
id: lem-qc-tensor-product-basis-and-dimension
kind: lemma
title: "The product basis is orthonormal and tensor dimensions multiply"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-tensor-register-and-permutation
  - thm-tensor-product-basis-from-bases
  - cor-tensor-products-of-finite-free-modules-and-dimension
  - cor-finite-iterated-tensor-products-represent-multilinear-maps
justified_by: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Appendix A.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $H_0,\ldots,H_{n-1}$ be a finite ordered list of finite-dimensional
complex inner-product spaces with specified ordered orthonormal bases of
sizes $d_0,\ldots,d_{n-1}$, allowing $d_k=0$. The elementary tensors of the
factor bases, ordered lexicographically, form an orthonormal basis of the
tensor register, and

$$\dim(H_0\otimes\cdots\otimes H_{n-1})=\prod_{k<n}d_k.$$

For the empty list the product is $1$ and the tensor space is $\mathbb C$; if
any $d_k=0$, the tensor space is zero and the product basis is empty.

## Facts & Assumptions

**Given:** A finite ordered list of finite-dimensional complex inner-product
spaces and their specified ordered orthonormal bases.

[F1] The tensor register's pairing is the product of the factor pairings and
its ordered basis is the lexicographic product basis
([[def-qc-tensor-register-and-permutation]]).

[F2] For two free modules, elementary tensors of basis vectors form a basis,
including an empty basis in a factor ([[thm-tensor-product-basis-from-bases]]).

[F3] The dimension of a tensor product of two finite-dimensional free modules
is the product of their dimensions, including dimension zero
([[cor-tensor-products-of-finite-free-modules-and-dimension]]).

[F4] Finite iterated tensor products are identified across parenthesizations
by the canonical maps preserving elementary tensors, and the empty product
is the scalar module
([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

## Proof

1.1 If $n=0$, the declared tensor space is $\mathbb C$, its product basis is $\{1\}$, and its dimension is $1$, the empty product. If $n=1$, the statement is exactly the supplied orthonormal basis of that factor. [given, F1, algebra]

1.2 For $n\ge2$, repeated application of [F2] and the parenthesization identifications in [F4] shows that the elementary tensors of the factor bases form a basis indexed by the Cartesian product of their index sets. By [F1], the inner product of two such basis tensors is the product of their factor inner products; it is $1$ for equal tuples and $0$ for unequal tuples. Therefore this basis is orthonormal. [given, F1, F2, F4, algebra]

2.1 Repeated application of [F3] gives the product of the factor dimensions. If any $d_k=0$, [F2] makes the product basis empty and both sides are zero; the empty and one-factor cases were handled in step 1.1. Thus the formula holds in every finite case. [step 1.1, step 1.2, F2, F3, algebra] ∎

