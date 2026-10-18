---
id: lem-full-column-rank-matrix-least-squares-solution
kind: lemma
title: Full-column-rank matrix least squares has a unique minimizer
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product]
aliases: []
verification:
  precheck: pass
sources:
  references:
    - title: "ACM 270-1, Complete Lecture Notes, Caltech, Spring 2019, Lecture 13, §4.3"
      url: "https://iqim.caltech.edu/wp-content/uploads/2019/08/ACM270_complete_lecture_notes.pdf"
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §3.4"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
---

## Statement

Let $p,r,s\ge1$, let $M\in\mathbb F^{p\times r}$ have full column rank, and let $Y\in\mathbb F^{p\times s}$. Among all $W\in\mathbb F^{r\times s}$, the function $W\mapsto\|Y-MW\|_F$ has the unique minimizer
$$ W_*=(M^*M)^{-1}M^*Y. $$

## Facts & Assumptions

**Given:** A full-column-rank matrix $M$ and a target matrix $Y$ with the same row count.

[F1] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the Frobenius inner product is the sum of conjugate-entry times entry, so orthogonal matrix residuals have squared norms that add.

## Proof

1.1 The Gram matrix $G=M^*M$ is invertible: if $Gx=0$, then $0=x^*Gx=\|Mx\|_2^2$, so $Mx=0$; full column rank forces $x=0$. Thus the square map $G:\mathbb F^r\to\mathbb F^r$ is injective and therefore bijective in finite dimension. Define $W_*=G^{-1}M^*Y$. [given, construct, algebra]

2.1 Set $R=Y-MW_*$. Then $M^*R=M^*Y-M^*MW_*=0$. For every $W$, write $Y-MW=R+M(W_*-W)$. The two summands are Frobenius-orthogonal because $M^*R=0$, so $\|Y-MW\|_F^2=\|R\|_F^2+\|M(W-W_*)\|_F^2\ge\|R\|_F^2$. [F1, step 1.1, algebra]

3.1 Equality in step 2.1 requires $M(W-W_*)=0$. Full column rank implies each column of $W-W_*$ is zero, hence $W=W_*$. Therefore $W_*$ is the unique minimizer. [given, step 2.1, algebra] ∎
