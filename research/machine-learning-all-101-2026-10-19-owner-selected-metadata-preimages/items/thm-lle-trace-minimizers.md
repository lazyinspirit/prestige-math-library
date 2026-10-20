---
id: thm-lle-trace-minimizers
kind: theorem
title: "Under the simple constant-kernel condition, LLE trace minimizers are bottom positive eigenvectors"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-locally-linear-embedding, lem-ky-fan-trace-maximization, prop-standard-coordinate-inner-products, def-trace-of-a-square-matrix, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-finite-dimensional-orthogonal-decomposition]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering"
      url: "https://arxiv.org/pdf/0711.0189"
verification:
  precheck: pass
---

## Statement

Let $W\in\mathbb R^{n\times n}$ satisfy $W\mathbf1_n=\mathbf1_n$, put $M=(I_n-W)^T(I_n-W)$, and assume $\ker(I_n-W)=\operatorname{span}\{\mathbf1_n\}$. Let $0<\mu_1\le\cdots\le\mu_{n-1}$ be the eigenvalues of $M$ restricted to the zero-sum subspace $\mathbf1_n^\perp$. For $1\le q<n$, the minimum of $\operatorname{tr}(Y^TMY)$ over $Y\in\mathbb R^{n\times q}$ with $Y^T\mathbf1_n=0$ and $Y^TY=I_q$ is $\sum_{j=1}^q\mu_j$. The minimum is attained by taking the columns of $Y$ to be orthonormal eigenvectors for the $q$ smallest positive eigenvalues; when eigenvalues tie, the minimizing subspace may vary inside the tied eigenspace. The trace is the sum of diagonal entries.

## Statement references

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 573–574](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §7, PDF pp. 15–16](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

[von Luxburg, A Tutorial on Spectral Clustering, §5.2, PDF pp. 11–12](https://arxiv.org/pdf/0711.0189)

## Facts & Assumptions

**Given:** A real matrix $W$ with row sums one, so $W\mathbf1_n=\mathbf1_n$, the matrix $M=(I_n-W)^T(I_n-W)$, the simple-kernel hypothesis $\ker(I_n-W)=\operatorname{span}\{\mathbf1_n\}$, and $1\le q<n$.

[F1] LLE forms $M=(I_n-W)^T(I_n-W)$ from a matrix $W$ whose rows sum to one and minimizes $\operatorname{tr}(Y^TMY)$ subject to $Y^T\mathbf1_n=0$ and $Y^TY=I_q$ ([[alg-locally-linear-embedding]]).

[F2] The standard real coordinate inner product is $\langle a,b\rangle=\sum_{i<n}a_ib_i$ ([[prop-standard-coordinate-inner-products]]).

[F3] The subspace $\mathbf1_n^\perp$ has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F4] The space decomposes as $\mathbb R^n=\operatorname{span}\{\mathbf1_n\}\oplus\mathbf1_n^\perp$ ([[thm-finite-dimensional-orthogonal-decomposition]]).

[F5] For a real symmetric matrix, maximizing $\operatorname{tr}(Q^TAQ)$ over orthonormal q-frames gives the sum of its q largest eigenvalues, with the stated tie-space equality cases ([[lem-ky-fan-trace-maximization]]).

[F6] The trace of a square matrix is the sum of its diagonal entries ([[def-trace-of-a-square-matrix]]).

## Proof

1.1 Put $A=I_n-W$. Then $A\mathbf1_n=0$ by [F1], and $M=A^TA$ is symmetric with $M\mathbf1_n=0$. For every $v$, $v^TMv=(Av)^T(Av)=\sum_r(Av)_r^2\ge0$ by [F2]. Also $Mv=0$ implies $0=v^TMv=\sum_r(Av)_r^2$, hence $Av=0$; conversely $Av=0$ implies $Mv=0$. Therefore $\ker M=\ker A=\operatorname{span}\{\mathbf1_n\}$. [given, F1, F2, algebra]

2.1 By [F4], $\mathbb R^n=\operatorname{span}\{\mathbf1_n\}\oplus S$ for $S=\mathbf1_n^\perp$, and [F3] gives an orthonormal basis matrix $E\in\mathbb R^{n\times(n-1)}$ for $S$. Symmetry and $M\mathbf1_n=0$ imply $M(S)\subseteq S$, because $\mathbf1_n^TMv=(M\mathbf1_n)^Tv=0$ for $v\in S$. The restriction has matrix $R=E^TME$, which is symmetric and positive definite: if $c\ne0$, then $Ec\in S\setminus\{0\}$, so $Ec\notin\ker M$ by step 1.1 and $c^TRc=(Ec)^TM(Ec)=\sum_r(AEc)_r^2>0$. Its eigenvalues are therefore $0<\mu_1\le\cdots\le\mu_{n-1}$. [step 1.1, F2, F3, F4, algebra]

3.1 For every feasible $Y$, its columns lie in $S$, so $Y=EQ$ with $Q=E^TY$ and $Q^TQ=I_q$. Substitution gives $Y^TMY=Q^TRQ$, hence $\operatorname{tr}(Y^TMY)=\operatorname{tr}(Q^TRQ)$ by [F6]. Apply [F5] to $-R$, whose eigenvalues in descending order are $-\mu_1\ge\cdots\ge-\mu_{n-1}$. It follows that $\operatorname{tr}(Q^TRQ)\ge\sum_{j=1}^q\mu_j$, with equality exactly for the q-dimensional bottom eigenspaces, including arbitrary choices inside a tie. [step 2.1, F5, F6, algebra]

4.1 Taking $Q$ to have orthonormal columns spanning q bottom eigendirections of $R$ and setting $Y=EQ$ satisfies both constraints and attains the bound in step 3.1. This proves the minimum and its equality cases. [step 2.1, step 3.1, F3, F5] ∎
