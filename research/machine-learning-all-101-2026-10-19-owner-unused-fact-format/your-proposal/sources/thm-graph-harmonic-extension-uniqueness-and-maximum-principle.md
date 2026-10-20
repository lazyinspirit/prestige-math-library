---
id: thm-graph-harmonic-extension-uniqueness-and-maximum-principle
kind: theorem
title: "Anchored graph-harmonic extensions are unique and obey a maximum principle"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-weighted-graph-laplacian
  - def-graph-harmonic-label-extension
  - lem-weighted-graph-laplacian-quadratic-form-and-kernel
  - def-cholesky-factorisation-with-positive-diagonal
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
  - thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Xiaojin Zhu, Zoubin Ghahramani, and John Lafferty, Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions, ICML 2003"
      url: "https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf"
    - title: "Olivier Chapelle, Bernhard Schölkopf, and Alexander Zien (editors), Semi-Supervised Learning, MIT Press, 2006"
      url: "https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $V=\{1,\ldots,n\}$, and let $W=(w_{ij})\in\mathbb R^{n\times n}$ be symmetric, entrywise nonnegative, and zero-diagonal. Put $d_i=\sum_jw_{ij}$, $D=\operatorname{diag}(d_1,\ldots,d_n)$, and $L=D-W$. The support graph has edge $\{i,j\}$ exactly when $w_{ij}>0$. Two vertices lie in the same connected component exactly when a finite path of support edges joins them. Let $B\subseteq V$ be nonempty, $U=V\setminus B$, and prescribe $y_B\in\mathbb R^B$. For index sets $S,T\subseteq V$, let $L_{ST}$ denote the submatrix with rows in $S$ and columns in $T$, in increasing index order. Assume every support-graph component meeting $U$ also meets $B$. Then the energy $E(f)=\tfrac12 f^TLf$, minimized over $f|_B=y_B$, has exactly one minimizer. If $U=\varnothing$, it is $f=y_B$. If $U\ne\varnothing$, the principal block $L_{UU}$ is real symmetric positive definite, meaning $v^TL_{UU}v>0$ for every nonzero $v\in\mathbb R^U$, and the minimizer is $f_U=-L_{UU}^{-1}L_{UB}y_B$. Each $u\in U$ has $d_u>0$ and $f_u=\sum_jw_{uj}f_j/d_u$; hence $\min_{b\in B}y_b\le f_u\le\max_{b\in B}y_b$. For $C\ge2$, if each boundary value is one-hot (one coordinate equals 1 and all others equal 0) in $\mathbb R^C$, the coordinatewise energy minimizers have every row in the probability simplex $\Delta_C=\{p\in[0,1]^C:\sum_{c=1}^Cp_c=1\}$.

## Statement references

[Zhu, Ghahramani, and Lafferty, Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions, §2](https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf)

[Chapelle, Schölkopf, and Zien, Semi-Supervised Learning, Chapter 11 §§11.2–11.3](https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf)

## Facts & Assumptions

**Given:** A finite symmetric nonnegative zero-diagonal weight matrix $W$, its support graph and Laplacian $L$, a nonempty boundary $B$ with prescribed values $y_B$, and the assumption that every support component meeting $U=V\setminus B$ meets $B$. Prove the energy minimizer is unique, satisfies the block formula and maximum principle, and has the stated one-hot multiclass consequence.

[F1] [[def-finite-weighted-graph-laplacian]]: $d_i=\sum_jw_{ij}$, $D=\operatorname{diag}(d_i)$, $L=D-W$, and the support graph has edge $\{i,j\}$ exactly when $w_{ij}>0$.

[F2] [[def-graph-harmonic-label-extension]]: the admissible extensions satisfy $f|_B=y_B$, their energy is $E(f)=\tfrac12 f^TLf$, and an anchored boundary means each support component meeting $U$ meets $B$.

[F3] [[lem-weighted-graph-laplacian-quadratic-form-and-kernel]]: for every $g\in\mathbb R^V$, $g^TLg=\tfrac12\sum_{i,j}w_{ij}(g_i-g_j)^2$; this quantity vanishes exactly when $g$ is constant on each support component.

[F4] [[def-cholesky-factorisation-with-positive-diagonal]]: over the real numbers, a Cholesky factorization of $M$ means $M=RR^T$ with $R$ lower triangular and positive diagonal; this definition does not assert that a factorization exists.

[F5] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: every finite real symmetric positive-definite matrix has a unique Cholesky factorization with positive diagonal.

[F6] [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]: forward substitution solves a lower-triangular system with nonzero diagonal uniquely, and backward substitution solves an upper-triangular system with nonzero diagonal uniquely.

[F7] [[thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost]]: with that factorization, forward and backward triangular substitution solve every right-hand side in finitely many scalar operations.

## Proof

1.1 If $U=\varnothing$, then $B=V$ and the affine set of extensions contains only $f=y_B$. It is therefore the unique minimizer; the maximum and minimum assertions over $U$ are vacuous, and the one-hot boundary rows are in $\Delta_C$. [given, F1, F2, algebra]

1.2 Suppose $U\ne\varnothing$ and put $M=L_{UU}$. For nonzero $v\in\mathbb R^U$, extend $v$ by zero on $B$ to $\widetilde v\in\mathbb R^V$. By [F3], $v^TMv=\widetilde v^TL\widetilde v=\tfrac12\sum_{i,j}w_{ij}(\widetilde v_i-\widetilde v_j)^2$. If this sum were zero, every positive-weight edge would have equal endpoint values, so $\widetilde v$ would be constant on each support component. Every component meeting $U$ meets $B$, where $\widetilde v=0$, forcing $v=0$, a contradiction. Thus $M$ is positive definite; it is symmetric as a principal block of the symmetric matrix $L$. [given, F1, F3, algebra]

2.1 By [F5], $M$ has a Cholesky factorization $M=RR^T$ with positive diagonal. By [F6] and [F7], solving $Rv=-L_{UB}y_B$ and then $R^Tz=v$ gives a unique vector $z=-M^{-1}L_{UB}y_B$ in finitely many scalar operations. [step 1.2, F5, F6, F7, F4]

3.1 Let $f_B=y_B$ and $f_U=z$. For any $h\in\mathbb R^U$, block expansion and $Mz+L_{UB}y_B=0$ give $E(f+h)-E(f)=h^T(Mz+L_{UB}y_B)+\tfrac12h^TMh=\tfrac12h^TMh$. This is positive for $h\ne0$ by step 1.2, so $f$ is the unique minimizer and has the stated block formula. [step 1.2, step 2.1, F2, algebra]

3.2 The equation solved in step 2.1 gives $(Lf)_u=0$ for every $u\in U$. If $d_u=0$, then $u$ is an isolated support component contained in $U$, contradicting anchoring; hence $d_u>0$ and $f_u=\sum_jw_{uj}f_j/d_u$, a weighted average of neighboring values. [step 2.1, F1, F2, algebra]

4.1 Let $m=\max_{i\in V}f_i$. If $m>\max_{b\in B}y_b$, then no maximizing vertex lies in $B$, so choose a maximizing vertex $u_0\in U$. At $u_0$, the weighted-average equation in step 3.2 and $f_j\le m$ force $f_j=m$ for each neighbor with positive weight. Choose a shortest finite path in its support component to $B$; every interior vertex lies in $U$, so applying the same argument successively forces the boundary value at the end of the path to equal $m$, a contradiction. Therefore $\max_{i\in V}f_i\le\max_{b\in B}y_b$. [given, F1, step 3.2, choose]

5.1 Apply step 4.1 to $-f$, whose boundary values are $-y_B$ and whose unlabeled coordinates satisfy the same weighted-average equations. This yields $\min_{b\in B}y_b\le f_u$ for every $u\in U$, completing the maximum-principle bounds. [step 4.1, algebra]

6.1 For one-hot boundary data, let $f^{(c)}$ be the minimizer for coordinate $c$ and put $g=\sum_{c=1}^C f^{(c)}$. By step 2.1 each coordinate satisfies $(Lf^{(c)})_u=0$, and by steps 4.1 and 5.1 each $f^{(c)}_u$ is between 0 and 1. Linearity gives $(Lg)_u=0$ on $U$, while the one-hot boundary data give $g|_B=1$. The constant-one function also has these properties because every row sum of $L=D-W$ is zero. The difference $h=g-\mathbf1$ therefore has $h|_B=0$ and $L_{UU}h_U=0$; positive definiteness from step 1.2 forces $h_U=0$. Thus $g$ is identically 1, so every unlabeled row lies in $\Delta_C$. [step 1.2, step 2.1, step 4.1, step 5.1, F1, algebra] ∎
