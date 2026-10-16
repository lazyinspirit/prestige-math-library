---
id: thm-qc-partial-trace-positive-and-trace-preserving
kind: theorem
title: "The partial trace preserves non-negativity and total trace"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-partial-trace
  - def-qc-tensor-map
  - def-real-and-complex-inner-product-space
  - def-non-negative-and-positive-operator
  - def-self-adjoint-and-normal-endomorphism
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
  - lem-composition-and-identity-linear-maps
  - thm-qc-partial-trace-characterization-and-basis-independence
  - lem-qc-tensor-product-basis-and-dimension
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
dependency_level: 4
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
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
---

## Statement

For finite-dimensional complex inner-product spaces $H_A,H_B$ and a
non-negative operator $R\in\operatorname{End}(H_A\otimes H_B)$,
$\operatorname{Tr}_B(R)$ is non-negative and

$$\operatorname{tr}(\operatorname{Tr}_B(R))=\operatorname{tr}(R).$$

Here $\operatorname{End}(H)$ is the set of linear maps $H\to H$ as in
[[def-qc-partial-trace]], $I_H$ denotes the identity map $x\mapsto x$, and both
conclusions include zero-dimensional factors.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H_A,H_B$, a
non-negative operator $R$ on their ordered tensor product, and the partial
trace from [[def-qc-partial-trace]].

[F1] A non-negative operator is self-adjoint and has
$\langle Rv,v\rangle\ge0$ for every vector $v$
([[def-non-negative-and-positive-operator]],
[[def-self-adjoint-and-normal-endomorphism]]).

[F2] In orthonormal bases the adjoint matrix is the conjugate transpose
([[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]).

[F3] The partial-trace entries are
$(\operatorname{Tr}_B R)_{ii'}=\sum_jR_{(i,j),(i',j)}$
([[def-qc-partial-trace]]).

[F4] The partial trace satisfies
$\operatorname{tr}((\operatorname{Tr}_B R)\circ T)
=\operatorname{tr}(R\circ(T\otimes I_B))$
([[thm-qc-partial-trace-characterization-and-basis-independence]]).

[F5] The elementary product vectors form an orthonormal basis, including
empty and zero-dimensional cases
([[lem-qc-tensor-product-basis-and-dimension]]).

[F6] The root pairing is linear in its first argument and conjugate-linear in
its second ([[def-real-and-complex-inner-product-space]]).

[F7] The tensor map is the unique linear extension of its action on elementary
tensors ([[def-qc-tensor-map]]).

[F8] Composing a linear map with the identity map on either side leaves it
unchanged ([[lem-composition-and-identity-linear-maps]]).

[F9] The trace of a finite-dimensional endomorphism is the sum of its diagonal
matrix entries in any ordered basis ([[def-trace-of-an-endomorphism]],
[[def-trace-of-a-square-matrix]]).

[F10] Every finite-dimensional real or complex inner-product space has an
orthonormal basis, with the empty basis in dimension zero
([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

1.1 By [F10], choose ordered orthonormal bases $(e_i)$ and $(f_j)$ for $H_A,H_B$, and write $S=\operatorname{Tr}_B(R)$. Since $R$ is self-adjoint by [F1], [F2] gives $R_{(i,j),(i',j)}=\overline{R_{(i',j),(i,j)}}$. Summing over $j$ in [F3] yields $S_{ii'}=\overline{S_{i'i}}$, so $S$ is self-adjoint. The product basis is orthonormal by [F5]. [given, F1, F2, F3, F5, F10, choose]

2.1 For $x=\sum_i x_i e_i$, [F3] and [F6] give $\langle Sx,x\rangle=\sum_{i,i',j}R_{(i,j),(i',j)}x_{i'}\overline{x_i}$. For each fixed $j$, the coefficient of $e_i\otimes f_j$ in $R(x\otimes f_j)$ is $\sum_{i'}R_{(i,j),(i',j)}x_{i'}$; orthonormality [F5] therefore gives $\langle R(x\otimes f_j),x\otimes f_j\rangle=\sum_{i,i'}R_{(i,j),(i',j)}x_{i'}\overline{x_i}$. Summing these equalities over $j$ yields $\langle Sx,x\rangle=\sum_j\langle R(x\otimes f_j),x\otimes f_j\rangle$. Each summand is nonnegative by [F1], hence $\langle Sx,x\rangle\ge0$ for every $x$. Together with step 1.1, the definition in [F1] gives $S\ge0$. [step 1.1, F1, F3, F5, F6, algebra]

3.1 In [F4] set $T=I_{H_A}$. By [F7], $I_{H_A}\otimes I_{H_B}$ fixes every elementary tensor; these span by the product-basis result [F5], so it is $I_{H_A\otimes H_B}$. Therefore [F4] gives $\operatorname{tr}(S\circ I_{H_A})=\operatorname{tr}(R\circ I_{H_A\otimes H_B})$. By [F8] the composites are $S$ and $R$, so their traces are equal by [F9]. Empty bases give empty traces $0$ on zero-dimensional factors, so the equality holds there as well. [F4, F5, F7, F8, F9, algebra] ∎
