---
id: ex-certified-ill-conditioned-two-by-two-linear-solve
kind: example
title: A certified residual enclosure remains valid for an ill-conditioned 2 by 2 solve
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [thm-uniform-linear-residual-solution-enclosure, def-verified-linear-residual-certificate-data]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
---

## Example

Let
$$A=\begin{pmatrix}1&0\\0&2^{-20}\end{pmatrix},\quad b=\begin{pmatrix}1\\2^{-20}\end{pmatrix},\quad R=A^{-1}=\begin{pmatrix}1&0\\0&2^{20}\end{pmatrix},\quad \widehat x=\begin{pmatrix}1\\1+2^{-10}\end{pmatrix}.$$
These point data have a usable residual certificate with $q=0$ and $r=2^{-10}$. Its certified error radius equals the actual error even though the spectral condition number of $A$ is $2^{20}$.

## Facts & Assumptions

**Given:** The exact dyadic matrix, right-hand side, inverse candidate, and approximate solution displayed above.

[F1] A usable residual certificate gives a unique solution within $r/(1-q)$ ([[thm-uniform-linear-residual-solution-enclosure]]).

[F2] The point case of the residual certificate is specified by $\|I-RA\|_2\le q$ and $\|R(b-A\widehat x)\|_2\le r$ ([[def-verified-linear-residual-certificate-data]]).

## Verification

1.1 Direct multiplication gives $RA=I$, so $\|I-RA\|_2=0$. Also $A\widehat x=(1,2^{-20}+2^{-30})^{\mathsf T}$ and $R(b-A\widehat x)=(0,-2^{-10})^{\mathsf T}$, whose Euclidean norm is $2^{-10}$. Thus [F2] holds with $q=0,r=2^{-10}$. [given, F2, algebra]

2.1 The exact solution is $x=(1,1)^{\mathsf T}$, so $\|x-\widehat x\|_2=2^{-10}$. The singular values of this positive diagonal matrix are $1$ and $2^{-20}$, hence its condition number is $2^{20}$. Applying [F1] gives the same error radius $r/(1-q)=2^{-10}$, which contains the solution with equality. [given, F1, step 1.1, algebra] ∎

