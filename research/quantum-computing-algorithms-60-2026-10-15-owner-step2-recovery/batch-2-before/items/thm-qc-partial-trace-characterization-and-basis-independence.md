---
id: thm-qc-partial-trace-characterization-and-basis-independence
kind: theorem
title: "The partial trace is characterized by the trace pairing and is basis-independent"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-partial-trace
  - def-qc-tensor-map
  - lem-qc-tensor-product-basis-and-dimension
  - def-linear-map
  - def-trace-of-an-endomorphism
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - thm-matrix-of-a-composite-is-the-product
  - lem-qc-trace-pairing-nondegenerate
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
---

## Statement

For finite-dimensional complex inner-product spaces $H_A,H_B$, the partial
trace $\operatorname{Tr}_B:\operatorname{End}(H_A\otimes H_B)\to
\operatorname{End}(H_A)$ is the unique linear map satisfying

$$\operatorname{tr}\bigl((\operatorname{Tr}_B R)\circ T\bigr)=\operatorname{tr}\bigl(R\circ(T\otimes I_{H_B})\bigr)\quad\text{for every }R\in\operatorname{End}(H_A\otimes H_B)\text{ and }T\in\operatorname{End}(H_A).$$

Here $I_{H_B}$ is the identity map $y\mapsto y$ on $H_B$; $\operatorname{End}$
is the notation defined in [[def-qc-partial-trace]].

Its coordinate formula is independent of the chosen ordered orthonormal basis
of $H_B$. The assertion includes zero-dimensional factors.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H_A,H_B$, an
operator $R\in\operatorname{End}(H_A\otimes H_B)$, and the partial trace from
[[def-qc-partial-trace]].

[F1] In ordered orthonormal bases,
$(\operatorname{Tr}_B R)_{i i'}=\sum_j R_{(i,j),(i',j)}$, with an empty sum
equal to $0$ ([[def-qc-partial-trace]]).

[F2] The tensor map $T\otimes I_{H_B}$ sends each elementary tensor
$e_i\otimes f_j$ to $(Te_i)\otimes f_j$
([[def-qc-tensor-map]]).

[F3] The product basis is an orthonormal basis and spans the tensor space,
including the empty-basis cases
([[lem-qc-tensor-product-basis-and-dimension]]).

[F4] The trace of a finite-dimensional endomorphism is the sum of its
diagonal matrix entries in any ordered basis, including the zero-dimensional
case ([[def-trace-of-an-endomorphism]], [[def-trace-of-a-square-matrix]]).

[F5] If $\operatorname{tr}(DA)=0$ for every endomorphism $A$ of a
finite-dimensional complex vector space, then $D=0$
([[lem-qc-trace-pairing-nondegenerate]]).

[F6] The matrix of a composite is the product of the matrices in matching
ordered bases ([[thm-matrix-of-a-composite-is-the-product]]).

[F7] Matrix products are row-by-column finite sums and trace is the sum of
diagonal entries ([[def-matrix-product-and-identity-matrix]],
[[def-trace-of-a-square-matrix]]).

[F8] Every finite-dimensional real or complex inner-product space has an
orthonormal basis, with the empty basis in dimension zero
([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

1.1 By [F8], choose ordered orthonormal bases $(e_i)_{i<a}$ of $H_A$ and $(f_j)_{j<b}$ of $H_B$, and set $S=\operatorname{Tr}_B(R)$. For any $T\in\operatorname{End}(H_A)$, [F1], [F6] and [F7] give $\operatorname{tr}(S\circ T)=\sum_{i,i'<a}\sum_{j<b} R_{(i,j),(i',j)}T_{i'i}$. [given, F1, F4, F6, F7, F8, choose, algebra]

2.1 In the product basis, [F2] gives the matrix entry $T_{i'i}\delta_{j'j}$ of $T\otimes I$. By [F6] and [F7], $\operatorname{tr}(R\circ(T\otimes I))=\sum_{i,j}\sum_{i',j'}R_{(i,j),(i',j')}T_{i'i}\delta_{j'j}=\sum_{i,i',j}R_{(i,j),(i',j)}T_{i'i}$, which is the same finite sum as in step 1.1. Thus $S$ satisfies the displayed trace identity. [step 1.1, F2, F3, F6, F7, algebra]

3.1 If $S'$ is any other map value at $R$ satisfying the identity for every $T$, then $\operatorname{tr}((S-S')\circ T)=0$ for every $T$. Apply [F5] on $H_A$ to obtain $S=S'$. Since this holds for every $R$, the trace identity characterizes the partial-trace map uniquely. [step 2.1, F5]

4.1 Repeat steps 1.1 and 2.1 with any other ordered orthonormal basis of $H_B$. The right-hand side is the trace of the same endomorphism $R\circ(T\otimes I_{H_B})$, and [F4] makes that trace basis-independent. Step 3.1 then forces the resulting partial-trace operator to equal $S$. [step 1.1, step 2.1, step 3.1, F4]

5.1 If $H_B=0$, the product space and $R$ are zero, [F1] is the empty sum, and both sides of the trace identity are $0$. If $H_A=0$, the input and output endomorphism spaces contain only the zero map, so the same identity and uniqueness hold. [F1, F3, F4, algebra] ∎
