---
id: ex-qc-register-endian-partial-trace
kind: example
title: "Register endianness and a two-qubit partial trace"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
  - def-qc-dirac-notation-conversion
  - thm-qc-dirac-notation-coordinate-identity
justified_by: []
dependency_level: 4
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
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
---

## Example

Take two qubit factors with ordered bases $(e_0,e_1)$, and order the product
basis lexicographically as $(e_0\otimes e_0,e_0\otimes e_1,
e_1\otimes e_0,e_1\otimes e_1)$. Let
$|\Phi^+\rangle=(|00\rangle+|11\rangle)/\sqrt2$ and
$R=|\Phi^+\rangle\langle\Phi^+|$. Its matrix in this basis is
$$R=\frac12\begin{pmatrix}1&0&0&1\\0&0&0&0\\0&0&0&0\\1&0&0&1\end{pmatrix}.$$
The big-endian index of $101$ is $5$, and tracing out the second factor gives
$\operatorname{diag}(1/2,1/2)$, whose trace is $1$.

## Facts & Assumptions

**Given:** The big-endian encoding, the ordered product basis, the Bell vector
$|\Phi^+\rangle$, its outer-product operator $R$, and the coordinate definition
of partial trace.

[F1] $\operatorname{enc}_n(x)=\sum_{k<n}x_k2^{n-1-k}$, with the first bit
most significant ([[def-qc-ordered-bitstring-encoding]]).

[F2] The encoding is a bijection to the slots
$\{0,\ldots,2^n-1\}$ ([[thm-qc-bitstring-index-is-bijection]]).

[F3] The one-qubit computational basis is orthonormal and the two-factor
product basis uses the stated factor order
([[thm-qc-computational-basis-orthonormal]],
[[lem-qc-tensor-product-basis-and-dimension]]).

[F4] A ket is its vector and the outer product acts by
$|x\rangle\langle y|z=\langle z,y\rangle_{\rm root}x$
([[def-qc-dirac-notation-conversion]]).

[F5] In orthonormal coordinates, the matrix of $|x\rangle\langle y|$ is
$[x][y]^\dagger$ ([[thm-qc-dirac-notation-coordinate-identity]]).

[F6] In the ordered product basis,
$(\operatorname{Tr}_B R)_{aa'}=\sum_{b<2}R_{(a,b),(a',b)}$
([[def-qc-partial-trace]]).

[F7] This coordinate contraction is the unique trace-characterized partial
trace and is independent of the orthonormal basis of the second factor
([[thm-qc-partial-trace-characterization-and-basis-independence]]).

[F8] The trace is the sum of diagonal matrix entries
([[def-trace-of-an-endomorphism]], [[def-trace-of-a-square-matrix]]).

## Verification

1.1 By [F1], $\operatorname{enc}_3(1,0,1)=1\cdot2^2+0\cdot2^1+1\cdot2^0=5$. By [F2], $5$ is one of the eight three-bit register slots. [given, F1, F2, algebra]

1.2 In the ordered product basis, $|\Phi^+\rangle$ has coordinate column $v=(1,0,0,1)^{\mathsf T}/\sqrt2$. Orthonormality [F3] gives $\langle\Phi^+,\Phi^+\rangle=1$. [given, F3, algebra]

2.1 By [F4]–[F5], the coordinate matrix of $R$ is $vv^\dagger$. Its only nonzero entries are $1/2$ at $(00,00),(00,11),(11,00),(11,11)$, so it is the displayed matrix. [given, F4, F5, step 1.2, algebra]

3.1 By [F6] and this matrix, $(\operatorname{Tr}_B R)_{00}=R_{00,00}+R_{01,01}=1/2$ and $(\operatorname{Tr}_B R)_{01}=R_{00,10}+R_{01,11}=0$. [given, F6, step 2.1, algebra]

4.1 The other entries are $(\operatorname{Tr}_B R)_{10}=R_{10,00}+R_{11,01}=0$ and $(\operatorname{Tr}_B R)_{11}=R_{10,10}+R_{11,11}=1/2$. Hence $\operatorname{Tr}_B R=\operatorname{diag}(1/2,1/2)$. [given, F6, step 2.1, step 3.1, algebra]

5.1 By [F7], this contraction is the intrinsic partial trace, and [F8] gives the output trace $1/2+1/2=1$. [step 4.1, F7, F8, algebra] ∎
