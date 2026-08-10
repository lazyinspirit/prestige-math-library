---
id: cex-naive-quaternion-determinant-is-not-row-alternating
kind: counterexample
title: 'The naive quaternionic formula $ad-bc$ is not row-alternating: a matrix with equal rows can have value $2k\ne0$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-quaternions, thm-quaternions-form-a-division-ring, ex-two-by-two-determinant-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Ch. 4"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Statement refuted

The commutative-ring formula $ad-bc$ does not define a row-alternating determinant for quaternionic $2\times2$ matrices. A matrix with two equal rows can have naive value $2k\ne0$.

## Facts & Assumptions

**Given:** The quaternionic matrix $A=\begin{pmatrix}i&j\\i&j\end{pmatrix}$ and the naive expression $D(A)=ad-bc$.

[L1] The quaternions have basis elements $i,j,k$ and real scalar multiplication ([[def-quaternions]]).

[L2] Quaternion multiplication satisfies $ij=k$, $ji=-k$, and $k\ne-k$ ([[thm-quaternions-form-a-division-ring]]).

[L3] Over a commutative ring the genuine $2\times2$ determinant formula is $ad-bc$ ([[ex-two-by-two-determinant-formula]]).

## Counterexample

**Proof technique:** direct.

1.1 The two rows of $A$ are both $(i,j)$, so a row-alternating function would vanish on $A$. [L1, L2, L3]

2.1 The naive expression instead gives $D(A)=ij-ji=k-(-k)=2k$. If $2k=0$, then $k=-k$, contrary to [L2]; hence $D(A)\ne0$. [step 1.1, L2, algebra] ∎
