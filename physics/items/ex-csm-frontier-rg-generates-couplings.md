---
id: ex-csm-frontier-rg-generates-couplings
kind: example
title: Exact elimination of a Gaussian star generates pair couplings
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - thm-csm-frontier-gaussian-block-rg-correct
  - def-csm-frontier-finite-gaussian-precision
  - def-countable-choice
dependency_roles:
  thm-csm-frontier-gaussian-block-rg-correct: mathematical-premise
  def-csm-frontier-finite-gaussian-precision: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Uses the Axiom of Countable Choice through the finite Gaussian and block-elimination theorems."
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §3.2, printed pp. 63–69 / PDF pp. 67–73, integration of Gaussian modes and induced effective couplings.
    - title: MIT OpenCourseWare, 2.154 Maneuvering and Control, lecture notes
      url: https://ocw.mit.edu/courses/2-154-maneuvering-and-control-of-surface-and-underwater-vehicles-13-49-fall-2004/2609f8b1bdebe4566891080afe007f51_1349_notes.pdf
      locator: §§25.1.4–25.1.5, printed pp. 135–136 / PDF pp. 141–142, Schur-complement formula.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume $\mathrm{AC}_\omega$ and let integer $n\ge2$. Let $\mathbf1_n\in\mathbb R^n$ have every coordinate equal to $1$, and define the precision matrix on $n$ leaf variables and one central variable by

$$K_n:=\begin{pmatrix}2nI_n&\mathbf1_n\\\mathbf1_n^{\mathsf T}&1\end{pmatrix}.$$

This matrix is positive definite, so it defines a finite centered Gaussian law with precision $K_n$. Its leaf-to-leaf precision entries are initially zero for distinct leaves. Eliminating the central coordinate exactly gives leaf precision

$$K_{\mathrm{leaf}}=2nI_n-\mathbf1_n\mathbf1_n^{\mathsf T},$$

whose off-diagonal entry is $-1$ for every pair of distinct leaves. Thus one exact Gaussian block step creates a nonzero pair interaction between every two leaves, even though those pairs had no direct precision entry in the original star.

## Statement references

[[thm-csm-frontier-gaussian-block-rg-correct]]

[[def-csm-frontier-finite-gaussian-precision]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, integer $n\ge2$, and the matrix $K_n$ in the Statement.

[F1] Under $\mathrm{AC}_\omega$, the finite exact block algorithm returns the retained Gaussian precision and normalization after any finite sequence of eliminations ([[thm-csm-frontier-gaussian-block-rg-correct]]).

[F2] A real symmetric positive-definite precision defines the centered finite Gaussian law with covariance its inverse ([[def-csm-frontier-finite-gaussian-precision]]).

## Proof

1.1 For $x\in\mathbb R^n$ and $y\in\mathbb R$, expansion and completion of the scalar square give
$$\begin{pmatrix}x\\y\end{pmatrix}^{\mathsf T}K_n\begin{pmatrix}x\\y\end{pmatrix} =(y+\mathbf1_n^{\mathsf T}x)^2+2n\sum_{i=1}^nx_i^2-\left(\sum_{i=1}^nx_i\right)^2.$$
Expanding the finite sum shows
$$n\sum_{i=1}^nx_i^2-\left(\sum_{i=1}^nx_i\right)^2 =\sum_{1\le i<j\le n}(x_i-x_j)^2\ge0.$$
Consequently the remaining part is $n\sum_i x_i^2+\sum_{i<j}(x_i-x_j)^2$, which is positive when $x\ne0$; when $x=0$ and $(x,y)\ne0$, the first square is $y^2>0$. Hence $K_n$ is symmetric positive definite and the Gaussian law is defined by [F2]. [given, F2, algebra]

2.1 Use one retained set consisting of the $n$ leaves and eliminate the final central coordinate. The eliminated block is $C=[1]$, and the cross block is $B=\mathbf1_n$. The algorithm and its correctness theorem [F1] therefore return
$$2nI_n-\mathbf1_n[1]^{-1}\mathbf1_n^{\mathsf T}=2nI_n-\mathbf1_n\mathbf1_n^{\mathsf T}.$$
For $i\ne j$, the identity matrix contributes zero and $(\mathbf1_n\mathbf1_n^{\mathsf T})_{ij}=1$, so the resulting precision entry is $-1$. In the original $K_n$, the leaf block is $2nI_n$ and its distinct-leaf entries are zero. This verifies the stated generation of all pair couplings. [F1, step 1.1, algebra] ∎
