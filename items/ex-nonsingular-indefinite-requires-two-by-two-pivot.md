---
id: ex-nonsingular-indefinite-requires-two-by-two-pivot
kind: example
title: A nonsingular indefinite matrix with no admissible one-by-one diagonal pivot
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-symmetric-indefinite-block-ldl-star
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 7, §§7.2.4 and 7.3"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §11"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Example

Take
$$A=\begin{pmatrix}0&1\\1&0\end{pmatrix}.$$
This Hermitian matrix is nonsingular and indefinite. Every one-by-one diagonal pivot test fails, while the declared two-by-two pivot passes and gives an exact block $LDL^*$ factorization.

## Facts & Assumptions


**Given:** The matrix $A$ above, threshold $\theta\in(0,1]$, identity permutation, and the single declared pivot block of size two.

[F1] [[alg-symmetric-indefinite-block-ldl-star]]: A one-by-one pivot must be nonzero and pass the stated column threshold; a two-by-two pivot must be nonsingular and pass the componentwise inverse-block test.

## Verification


1.1 The determinant of $A$ is $-1$, so $A$ is nonsingular. Its eigenvectors $(1,1)^T$ and $(1,-1)^T$ have eigenvalues $1$ and $-1$, respectively; therefore $A$ is indefinite. [given, algebra]

1.2 Both diagonal candidates have pivot $0$, while the other entry in each column has modulus $1$. Since $\theta^{-1}|0|=0$, neither one-by-one test in [F1] passes. [given, F1, algebra]

1.3 For the declared block $D=A$, $\det D=-1\ne0$ and $D^{-1}=A$. There are no external indices, so $c_1=c_2=0$ and the two-by-two threshold left side is zero; the test in [F1] passes. [given, F1, algebra]

2.1 The algorithm therefore returns $P=I$, $L=I$, and $D_{\rm blk}=A$. Direct multiplication gives $A=LD_{\rm blk}L^*$. Thus the block pivot succeeds where every one-by-one diagonal pivot fails. [step 1.3, algebra] ∎
