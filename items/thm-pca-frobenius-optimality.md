---
id: thm-pca-frobenius-optimality
kind: theorem
title: "The top right singular subspace minimizes rank-q PCA Frobenius reconstruction error"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rank-q-principal-component-analysis, lem-ky-fan-trace-maximization, thm-singular-value-decomposition, prop-standard-coordinate-inner-products, def-trace-of-a-square-matrix, thm-trace-of-ab-equals-trace-of-ba, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, def-frobenius-matrix-norm]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $X\in\mathbb R^{n\times p}$, $n,p\ge1$, let $X_c=(I_n-n^{-1}\mathbf1_n\mathbf1_n^T)X$, and let $1\le q\le p$. Write $\sigma_1\ge\cdots\ge\sigma_p\ge0$ for the singular values of $X_c$, padding by zeros after its rank. Among all $Q\in\mathbb R^{p\times q}$ with $Q^TQ=I_q$, the minimum of $\|X_c-X_cQQ^T\|_F^2$ is

$$\sum_{j=q+1}^{p}\sigma_j^2.$$

A frame is minimizing exactly when its column space contains every eigenspace of $X_c^TX_c$ with eigenvalue greater than $\sigma_q^2$, is orthogonal to every eigenspace with eigenvalue less than $\sigma_q^2$, and uses the remaining dimension inside the eigenspace with eigenvalue $\sigma_q^2$. In particular a choice of $q$ right singular vectors for the $q$ largest singular values is minimizing; ties can give different minimizing subspaces.

## Statement references

[Hastie, Tibshirani, and Friedman, ESL II, §14.5.1, printed pp. 534–541](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §§2.1–2.2, PDF pp. 2–4](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** $X\in\mathbb R^{n\times p}$, $n,p\ge1$, and $1\le q\le p$.

[F1] A rank-$q$ PCA frame satisfies $Q^TQ=I_q$, reconstructs $X_c$ by $X_cQQ^T$, and minimizes the displayed squared Frobenius error ([[def-rank-q-principal-component-analysis]]).

[F2] For a real matrix $A$, $\|A\|_F^2=\sum_{i,j}a_{ij}^2=\operatorname{tr}(A^TA)$ ([[def-frobenius-matrix-norm]]).

[F3] A finite-dimensional real linear map has orthonormal domain and codomain bases in which it maps each right singular basis vector to the corresponding singular value times a left singular basis vector, with zero action on the remaining domain basis vectors ([[thm-singular-value-decomposition]]).

[F4] The standard real coordinate pairing is $\langle x,y\rangle=\sum_jx_jy_j$ ([[prop-standard-coordinate-inner-products]]).

[F5] The trace of a square matrix is the sum of its diagonal entries ([[def-trace-of-a-square-matrix]]).

[F6] For conformable rectangular matrices $A,B$, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ ([[thm-trace-of-ab-equals-trace-of-ba]]).

[F7] The Frobenius norm satisfies $\|X_c\|_F^2=\sum_{j=1}^{p}\sigma_j^2$, with zero singular values appended after the rank ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F8] For a symmetric matrix, maximizing $\operatorname{tr}(Q^TAQ)$ over $Q^TQ=I_q$ gives the sum of the top $q$ eigenvalues, with the stated tie-space equality cases ([[lem-ky-fan-trace-maximization]]).

## Proof

1.1 Put $C=X_c$ and $P=QQ^T$. Since $Q^TQ=I_q$, $P^T=P$ and $P^2=P$, so $C-CQQ^T=C(I-P)$ and $(I-P)^2=I-P$. By [F2] and [F5], $\|C(I-P)\|_F^2=\operatorname{tr}((I-P)C^TC(I-P))$. Applying [F6] to cycle the first factor gives $\operatorname{tr}(C^TC(I-P)^2)=\operatorname{tr}(C^TC(I-P))$; then linearity gives $\operatorname{tr}(C^TC)-\operatorname{tr}(C^TCP)$. Applying [F6] again gives $\operatorname{tr}(C^TCP)=\operatorname{tr}(Q^TC^TCQ)$. Thus minimizing the reconstruction error is equivalent to maximizing $\operatorname{tr}(Q^TC^TCQ)$. [F1, F2, F5, F6, algebra]

2.1 By [F3], choose right singular vectors $v_1,\ldots,v_p$ and corresponding left vectors $u_1,\ldots,u_r$ such that $Cv_j=\sigma_j u_j$ for $j\le r$ and $Cv_j=0$ for $j>r$, where $r=\operatorname{rank}C$. For $i,j\le r$, [F4] gives $v_i^TC^TCv_j=(Cv_i)^T(Cv_j)=\sigma_i\sigma_j u_i^Tu_j$, which is $\sigma_j^2$ when $i=j$ and zero otherwise; for $j>r$ it is zero. Thus $C^TC$ has eigenvalues $\sigma_1^2\ge\cdots\ge\sigma_p^2\ge0$ in the basis $v_j$. Applying [F8] to $A=C^TC$ shows that the maximum trace is $\sum_{j=1}^q\sigma_j^2$, attained exactly by the top-eigenspace subspaces described in the statement. Therefore the minimum error is $\|C\|_F^2-\sum_{j=1}^q\sigma_j^2$. [step 1.1, F3, F4, F8]

3.1 Substituting [F7] into the last expression gives $\sum_{j=q+1}^p\sigma_j^2$. The SVD basis in [F3] supplies a feasible frame from the top $q$ right singular vectors, so the bound is attained. If $q=p$, the sum is empty and equals zero; if $\operatorname{rank}C\le q$, every term in the tail is zero. [step 2.1, F3, F7, algebra] ∎
