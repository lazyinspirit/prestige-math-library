---
id: thm-qc-wire-permutation-is-unitary
kind: theorem
title: "Finite wire permutations are unitary basis permutations"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-tensor-register-and-permutation
  - lem-qc-tensor-product-basis-and-dimension
  - def-linear-isometry-and-orthogonal-or-unitary-operator
justified_by: []
dependency_level: 3
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

Let $H_0,\ldots,H_{n-1}$ be a finite ordered family of finite-dimensional
complex inner-product spaces, with the product bases of
[[def-qc-tensor-register-and-permutation]]. For a permutation $\sigma$ of the
factor positions, the map $P_\sigma$ that reorders the factors is a bijective
linear isometry from $H_0\otimes\cdots\otimes H_{n-1}$ to
$H_{\sigma(0)}\otimes\cdots\otimes H_{\sigma(n-1)}$. When source and target
are identified as the same register, $P_\sigma$ is a unitary operator in the
sense of [[def-linear-isometry-and-orthogonal-or-unitary-operator]].

## Facts & Assumptions

**Given:** The ordered factors, their specified orthonormal bases, and a
permutation $\sigma$ of the factor positions.

[F1] $P_\sigma$ sends a product-basis vector to the product-basis vector with
the same factor labels in permuted order
([[def-qc-tensor-register-and-permutation]]).

[F2] The ordered product vectors form an orthonormal basis, including the
empty and zero-dimensional cases
([[lem-qc-tensor-product-basis-and-dimension]]).

[F3] A linear isometry preserves vector norms; an invertible linear isometry
of a finite-dimensional complex inner-product space to itself is unitary
([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

## Proof

1.1 By [F1], $P_\sigma$ sends each product-basis vector to exactly one product-basis vector, and the inverse permutation sends it back. Thus the basis assignment extends to a bijective linear map whose inverse is $P_{\sigma^{-1}}$. The empty list gives the identity on $\mathbb C$. [given, F1, algebra]

2.1 Write an arbitrary vector as $\sum_\alpha c_\alpha e_\alpha$ in the orthonormal product basis from [F2]. Its squared norm is $\sum_\alpha|c_\alpha|^2$. The map permutes that basis, so its image has the same coefficients in a permuted orthonormal basis and the same squared norm. Thus $P_\sigma$ is a linear isometry. If a factor is zero-dimensional, both tensor spaces are zero and the unique map between them is bijective and isometric. [step 1.1, F2, algebra]

3.1 When the source and target are the same register, steps 1.1 and 2.1 give an invertible linear isometry of that space, hence a unitary operator by [F3]. [step 1.1, step 2.1, F3] ∎

