---
id: lem-rbf-augmented-system-is-invertible
kind: lemma
title: "Strict positive and conditionally positive augmented interpolation
  systems are invertible"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - thm-rank-nullity
  - thm-reals-field
  - def-invertible-matrix-and-general-linear-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with
        scattered zeros, Math. Comp. 74 (2005), §3.1"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_func\
        tions_with_scattered_zeros_with_applications_to_radial_basis_function_s\
        urface_fitting"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 18–25"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $X=(x_1,\ldots,x_N)$ be a finite ordered list of distinct sites in $\mathbb R^d$. If $K$ is strictly positive definite, then $K_X$ is invertible and $K_Xa=y$ has a unique solution for every $y\in\mathbb R^N$. If $K$ is strictly conditionally positive definite of order $m$ and $X$ is $m$-unisolvent for $\Pi_{m-1}(\mathbb R^d)$, then the augmented matrix in [[def-rbf-kernels-sites-and-augmented-interpolation]] is invertible and its system has a unique solution for every right-hand side.

## Facts & Assumptions

**Given:** A finite distinct site list $X$, a real radial kernel, and either strict positive definiteness or strict conditional positive definiteness of order $m$ together with $m$-unisolvent sites.

[F1] Strict positive definiteness means $c^{\mathsf T}K_Xc>0$ for every nonzero $c$ on distinct sites. ([[def-rbf-kernels-sites-and-augmented-interpolation]])

[F2] Strict conditional positive definiteness means $c^{\mathsf T}K_Xc>0$ for each nonzero $c$ with $P_X^{\mathsf T}c=0$; $m$-unisolvence means $P_X$ has linearly independent columns. ([[def-rbf-kernels-sites-and-augmented-interpolation]])

[F3] For a linear map with finite-dimensional domain, dimension equals nullity plus rank. ([[thm-rank-nullity]])

[F4] The real numbers form a field. ([[thm-reals-field]])

[F5] A real square matrix is invertible when it has a two-sided matrix inverse. ([[def-invertible-matrix-and-general-linear-group]])

## Proof

**Given:** The hypotheses above, with $K_X\in\mathbb R^{N\times N}$ and, in the augmented case, $P_X\in\mathbb R^{N\times J}$.

1.1 In the strictly positive definite case, if $K_Xa=0$, then $a^{\mathsf T}K_Xa=0$, so [F1] forces $a=0$. Thus the linear map $a\mapsto K_Xa$ has zero kernel. [F1, algebra]

1.2 In the augmented case, put $M=\begin{bmatrix}K_X&P_X\\P_X^{\mathsf T}&0\end{bmatrix}$ and suppose $M\begin{bmatrix}a\\b\end{bmatrix}=0$. The lower block gives $P_X^{\mathsf T}a=0$, and multiplying the upper block by $a^{\mathsf T}$ gives $a^{\mathsf T}K_Xa+a^{\mathsf T}P_Xb=0$. Since $a^{\mathsf T}P_X=(P_X^{\mathsf T}a)^{\mathsf T}=0$, strict conditional positivity [F2] forces $a=0$. [F2, algebra]

2.1 By [F3], the map $a\mapsto K_Xa$ has rank $N$, so it is onto $\mathbb R^N$ as well as one-to-one. For the standard basis $e_1,\ldots,e_N$, choose $v_j$ with $K_Xv_j=e_j$ and let $B$ have columns $v_j$. Then $K_XB=I_N$; for every $x$, injectivity of $K_X$ applied to $K_X(BK_Xx-x)=0$ gives $BK_Xx=x$. Thus $B$ is a two-sided inverse by [F5], and every system $K_Xa=y$ has a unique solution. [step 1.1, F3, F4, F5, algebra, choose]

3.1 With $a=0$, the upper block reduces to $P_Xb=0$. The columns of $P_X$ are linearly independent by [F2], so $b=0$. The augmented square matrix therefore has zero kernel, and [F3] gives rank $N+J$ and surjectivity. For the standard basis of $\mathbb R^{N+J}$, choose the unique preimage of each basis vector and use those preimages as columns of a matrix $B$. Then $MB=I_{N+J}$; injectivity gives $BM=I_{N+J}$ by applying $M$ to $BMx-x$. Hence $M$ is invertible by [F5], and its system has a unique solution for every right-hand side. [step 1.2, F2, F3, F4, F5, algebra, choose] ∎
