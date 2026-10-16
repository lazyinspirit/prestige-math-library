---
id: thm-qc-reversible-xor-oracle-unitary
kind: theorem
title: "A total Boolean XOR oracle is unitary and involutive"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qc-coherent-function-oracle
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2, equation (5.27), printed p.15: the one-bit reversible XOR embedding."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.4, printed p.17: the XOR query is a permutation and hence unitary."
---

## Statement

For every total Boolean function $f:\{0,1\}^n\to\{0,1\}^m$, including noninjective functions, the coherent XOR oracle $O_f|x,y\rangle=|x,y\oplus f(x)\rangle$ is unitary and satisfies $O_f^2=I$. Hence $O_f^{-1}=O_f$.

## Facts & Assumptions

**Given:** The basis action in [[def-qc-coherent-function-oracle]] on the finite ordered computational basis. Prove involutivity and unitarity without assuming $f$ injective.

[F1] [[def-qc-coherent-function-oracle]]: $O_f|x,y\rangle=|x,y\oplus f(x)\rangle$ for every ordered input and target string.

[F2] [[def-qc-ordered-bitstring-encoding]]: The big-endian index is $\operatorname{enc}_n(x)=\sum_{k<n}x_k2^{n-1-k}$, and the word $x$ occupies the basis slot numbered by that index.

[F3] [[def-qc-register-and-computational-basis]]: The $n$-qubit register is the ordered tensor product of $n$ copies of $Q_2$, with tuples in lexicographic order and the first wire most significant; for $n=0$ it is $\mathbb C$ with basis $\{1\}$.

[F4] [[thm-qc-computational-basis-orthonormal]]: The ordered computational basis of each $Q_d$ register is an orthonormal basis for its declared inner product.

[F5] [[thm-qc-bitstring-index-is-bijection]]: For every $n\ge0$, $\operatorname{enc}_n$ is a bijection from $\{0,1\}^n$ to $\{0,\ldots,2^n-1\}$.

[F6] [[lem-qc-tensor-product-basis-and-dimension]]: The lexicographically ordered elementary tensors of the factor bases form an orthonormal basis of the tensor register.

## Proof

1.1 Apply $O_f$ twice to a basis vector. The first application gives $|x,y\oplus f(x)\rangle$; the second gives $|x,(y\oplus f(x))\oplus f(x)\rangle=|x,y\rangle$ because every bit added modulo two twice is zero. The input $x$ is preserved throughout, so injectivity of $f$ is not needed. [given, F1, algebra]

2.1 By [F2]–[F6], the input and target strings label the entire finite orthonormal product basis in the declared order. Step 1.1 shows that the oracle map is a permutation of this basis, so its matrix has orthonormal columns and satisfies $O_f^\dagger O_f=I$. Therefore it is unitary, and Step 1.1 gives its inverse as itself. [F1, F2, F3, F4, F5, F6, step 1.1, algebra] ∎

