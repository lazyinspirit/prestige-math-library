---
id: thm-qc-bitstring-index-is-bijection
kind: theorem
title: "Big-endian bit-string indices are bijective"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-ordered-bitstring-encoding
  - def-qc-register-and-computational-basis
  - lem-qc-tensor-product-basis-and-dimension
  - thm-qc-computational-basis-orthonormal
  - thm-induction-principle
  - def-natural-numbers
justified_by: []
dependency_level: 3
proof_strategy: induction
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For every $n\ge0$, the map
$\operatorname{enc}_n:\{0,1\}^n\to\{0,\ldots,2^n-1\}$ of
[[def-qc-ordered-bitstring-encoding]] is a bijection. Any permutation of the
$n$ bit positions therefore induces a permutation of the corresponding
computational basis.

## Facts & Assumptions

**Given:** A natural number $n$ and the big-endian index from
[[def-qc-ordered-bitstring-encoding]].

[F1] The encoding is $\operatorname{enc}_n(x)=\sum_{k<n}x_k2^{n-1-k}$, with
$\operatorname{enc}_0(())=0$ ([[def-qc-ordered-bitstring-encoding]]).

[F2] An $n$-qubit register is the ordered tensor product of $n$ copies of
$Q_2$, with bit positions in lexicographic order and the first wire most
significant ([[def-qc-register-and-computational-basis]]).

[F3] The computational basis of $Q_2$ is an orthonormal basis for its declared
inner product ([[thm-qc-computational-basis-orthonormal]]).

[F4] Given specified ordered orthonormal bases on a finite ordered list of
finite-dimensional complex inner-product spaces, the elementary tensors in
lexicographic order form the product basis, including the empty product
([[lem-qc-tensor-product-basis-and-dimension]]). Applied to the factors in
[F2], this gives the computational basis of the $n$-qubit register.

[F5] Mathematical induction applies to natural numbers, starting at $0$
([[thm-induction-principle]], [[def-natural-numbers]]).

## Proof

1.1 At $n=0$, the domain has just the empty word and the codomain is $\{0,\ldots,2^0-1\}=\{0\}$. By [F1], its index is $0$, so the map is bijective. [given, F1, base]

1.2 Assume the result for $n$. For a word of length $n+1$, write its first bit as $b\in\{0,1\}$ and its remaining word as $y\in\{0,1\}^n$. Splitting the first term from the sum in [F1] gives $\operatorname{enc}_{n+1}(b,y)=b2^n+\operatorname{enc}_n(y)$. By the induction hypothesis, the tail index ranges bijectively over $\{0,\ldots,2^n-1\}$. [given, F1, ih, algebra]

2.1 If $b=0$, the resulting indices are exactly $0,\ldots,2^n-1$. If $b=1$, they are exactly $2^n,\ldots,2^{n+1}-1$. The two intervals are disjoint and their union is the full target, so equality of two encoded indices forces the first bits to agree and every target index is attained. For either fixed first bit, injectivity and surjectivity of the tail encoding give the corresponding claims for the remaining word. [step 1.2, ih, algebra]

3.1 By [F5], the base case and induction step prove bijectivity for all $n\ge0$. A permutation $\sigma$ of the bit positions is a bijection on words, with inverse the permutation $\sigma^{-1}$; composing it with the basis labeling in [F2] therefore permutes the basis [F3, F4]. [step 1.1, step 1.2, step 2.1, F2, F3, F4, F5, discharge-induction] ∎
