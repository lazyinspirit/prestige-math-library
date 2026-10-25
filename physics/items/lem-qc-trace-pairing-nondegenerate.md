---
id: lem-qc-trace-pairing-nondegenerate
kind: lemma
title: "The trace pairing on a finite endomorphism space is nondegenerate"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-dimension
  - def-linear-map
  - def-coordinate-column-and-matrix-of-a-linear-map
  - thm-unique-coordinates-with-respect-to-an-ordered-basis
  - thm-matrix-of-a-composite-is-the-product
  - def-matrix-units
  - def-matrix-product-and-identity-matrix
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
justified_by: []
dependency_level: 0
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Appendix A.7"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $V$ be a finite-dimensional complex vector space. If $D:V\to V$ is linear
and $\operatorname{tr}(D\circ A)=0$ for every linear map $A:V\to V$, then $D=0$.
Equivalently, the trace pairing $(D,A)\mapsto\operatorname{tr}(D\circ A)$
has the property that its only first input pairing to zero with every second
input is $D=0$. This includes the zero space.

## Facts & Assumptions

**Given:** A finite-dimensional complex vector space $V$ and an endomorphism
$D:V\to V$.

[F1] A finite-dimensional vector space has a finite ordered basis; dimension
zero means the space is the zero space ([[def-dimension]]).

[F2] An endomorphism is a linear map $V\to V$, and its matrix records the
coordinates of its images on an ordered basis ([[def-linear-map]],
[[def-coordinate-column-and-matrix-of-a-linear-map]]).

[F3] A matrix unit $E_{ji}$ has its only nonzero entry, $1$, at row $j$ and
column $i$ ([[def-matrix-units]]).

[F4] The matrix of a composite is the product of the matrices in matching
ordered bases ([[thm-matrix-of-a-composite-is-the-product]]).

[F5] Matrix multiplication is row-by-column and the matrix trace is the sum of
diagonal entries ([[def-matrix-product-and-identity-matrix]],
[[def-trace-of-a-square-matrix]]).

[F6] The trace of an endomorphism is the matrix trace in any ordered basis,
including trace $0$ on the zero space ([[def-trace-of-an-endomorphism]]).

[F7] Every vector has a unique coordinate list in an ordered basis
([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

## Proof

1.1 If $\dim V=0$, [F1] gives $V=\{0\}$, so its only endomorphism is $D=0$. Assume henceforth $\dim V=m>0$ and choose an ordered basis. [given, F1, algebra, choose]

2.1 If every entry of the matrix of $D$ were zero, [F2] would make $D$ vanish on every basis vector and hence on every vector. Thus if $D\ne0$ there are indices $i,j<m$ with matrix entry $D_{ij}\ne0$. Define $A(\sum_{k<m}a_kb_k):=a_i b_j$ using the ordered basis chosen in step 1.1. Unique coordinates [F7] make this well-defined; for scalars $\alpha,\beta$ and vectors with coordinate lists $(a_k)$ and $(c_k)$, the coordinate list of their linear combination is $(\alpha a_k+\beta c_k)$, so the formula gives $A(\alpha x+\beta y)=\alpha A(x)+\beta A(y)$. Thus $A$ is an endomorphism. Its matrix sends $b_i$ to $b_j$ and every other basis vector to $0$, so that matrix is $E_{ji}$. [step 1.1, F2, F3, F7, choose, algebra]

3.1 By [F4], the matrix of $D\circ A$ is $[D][A]=[D]E_{ji}$. Row-by-column multiplication [F5] gives $([D]E_{ji})_{kk}=D_{kj}\delta_{ik}$, so every diagonal entry is $0$ except the $(i,i)$ entry, which is $D_{ij}$. By [F6], $\operatorname{tr}(D\circ A)=D_{ij}\ne0$. This contradicts the hypothesis for every $A$. Therefore $D=0$, including the zero-dimensional case from step 1.1. [step 1.1, step 2.1, F4, F5, F6, discharge-contradiction] ∎
