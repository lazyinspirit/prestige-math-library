---
id: ex-hermitian-toeplitz-nonpositive-pivot-failure
kind: example
title: "An invertible indefinite Toeplitz matrix triggers the pivot-failure branch"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve
  - def-toeplitz-circulant-and-displacement-notation
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ralf Hiptmair, Numerical Methods for Computational Science and
        Engineering, Lecture Document, §4.5.3"
      url: "https://www.sam.math.ethz.ch/~grsam/NumMeth/NumCSE_Lecture_Document.pdf"
    - title: "MIT OpenCourseWare 6.341, Discrete-Time Signal Processing, Lecture 13:
        The Levinson-Durbin Recursion"
      url: "https://users.utcluj.ro/~cmuresan/PSM/6-341-fall-2005/contents/lecture-no\
        tes/lec13.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For the Hermitian Toeplitz matrix
$$T=\begin{pmatrix}1&2\\2&1\end{pmatrix},$$
the general-RHS solver reports a nonpositive second pivot, even though $T$ is invertible. The status records that the solver's HPD domain condition failed; it does not claim that the indefinite system has no solution.

## Facts & Assumptions

**Given:** The matrix $T$ above and the exact-arithmetic failure rules of [[alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve]].

[F1] A square Toeplitz matrix has entries constant on each diagonal, and Hermitian positive definiteness requires $x^*Tx>0$ for every nonzero $x$. [[def-toeplitz-circulant-and-displacement-notation]]

[F2] The algorithm initializes $\nu_0=t_0$ and returns nonpositive-pivot$(k)$ when a computed pivot is nonpositive. [[alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve]]

## Proof
1.1 The matrix is Hermitian Toeplitz with $t_0=1$ and $t_1=t_{-1}=2$. Direct multiplication gives $$T\left(-\frac13\begin{pmatrix}1&-2\\-2&1\end{pmatrix}\right)=I_2,$$ so $T$ is invertible. For $z=(1,-1)^T$, $z^*Tz=-2<0$, hence it is not positive definite by [F1]. [given, F1, algebra]

2.1 The solver starts with $\nu_0=1$, computes $\alpha_1=t_1/\nu_0=2$ and then $\nu_1=\nu_0(1-|\alpha_1|^2)=-3$. Since this pivot is nonpositive, [F2] returns nonpositive-pivot$(1)$ before constructing an inverse-column denominator. [given, F2, step 1.1, algebra] ∎
