---
id: thm-krull-schmidt-for-finite-dimensional-kg-modules
kind: theorem
title: "Finite-dimensional kG-modules decompose as finite direct sums of indecomposables uniquely up to order and isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module, thm-composition-series-iff-noetherian-and-artinian]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Every finite-dimensional module over a finite-dimensional algebra is a finite
direct sum of indecomposable modules, and the multiset of indecomposable
summands is unique up to isomorphism and permutation.

## Facts & Assumptions

**Given:** A finite-dimensional left module $M$ over a finite-dimensional algebra.

[F1] A composition series is a finite chain of simple factors
([[def-composition-series-and-length-of-a-module]]).

[L1] Finite-dimensional modules have finite length
([[thm-composition-series-iff-noetherian-and-artinian]]).

## Proof

**Proof technique:** direct.

1.1 We prove existence by induction on the composition length from [F1]. If $M=0$ or $M$ is indecomposable, there is nothing to do. Otherwise $M=M_1\oplus M_2$ with both summands nonzero and of strictly smaller length than $M$. Applying the induction hypothesis to $M_1$ and $M_2$ yields a finite decomposition of $M$ into indecomposable summands. [F1, L1, given, induction]

2.1 Let $X$ be an indecomposable finite-length module and $f\in\operatorname{End}(X)$. Since $X$ has finite length, the ascending chain of kernels and descending chain of images of the powers of $f$ stabilize. For large $n$ one has $X=\ker(f^n)\oplus\operatorname{im}(f^n)$. Because $X$ is indecomposable, either $\ker(f^n)=0$ and $f$ is invertible, or $\operatorname{im}(f^n)=0$ and $f$ is nilpotent. In the second case $1_X-f$ is invertible by the finite geometric series. So the endomorphism ring of an indecomposable finite-length module is local. [L1, step 1.1, given, algebra]

3.1 Suppose $M\cong X_1\oplus\cdots\oplus X_r\cong Y_1\oplus\cdots\oplus Y_s$ with all $X_i$ and $Y_j$ indecomposable. Restrict the identity of $M$ to $X_1$ and write it as the sum of the composites $X_1\to Y_j\to X_1$. Because $\operatorname{End}(X_1)$ is local by step 2.1, one of these composites is invertible; therefore the corresponding map $X_1\to Y_j$ is an isomorphism. Cancel that isomorphic summand from both decompositions and apply induction on the composition length of the complement. This proves $r=s$ and uniqueness up to permutation and isomorphism. [F1, step 1.1, step 2.1, induction, algebra] ∎
