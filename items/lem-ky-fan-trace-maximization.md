---
id: lem-ky-fan-trace-maximization
kind: lemma
title: "The maximum trace over q-dimensional orthonormal frames is the sum of the top q eigenvalues"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-standard-coordinate-inner-products, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-trace-of-a-square-matrix, thm-trace-of-ab-equals-trace-of-ba]
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $A\in\mathbb R^{p\times p}$ be symmetric with eigenvalues $\lambda_1\ge\cdots\ge\lambda_p$, counted with multiplicity. For $1\le q\le p$ and every $Q\in\mathbb R^{p\times q}$ satisfying $Q^TQ=I_q$,

$$\operatorname{tr}(Q^TAQ)\le\sum_{j=1}^q\lambda_j.$$

Equality is attained by taking the columns of $Q$ to be orthonormal eigenvectors for the $q$ largest eigenvalues. Equality holds exactly when the column space of $Q$ contains every eigenspace with eigenvalue greater than $\lambda_q$, is orthogonal to every eigenspace with eigenvalue less than $\lambda_q$, and uses a subspace of dimension $q-\#\{j:\lambda_j>\lambda_q\}$ from the eigenspace with eigenvalue $\lambda_q$.

## Statement references

[Cameron, Linear and Nonlinear Dimensionality Reduction, §2.1, PDF p. 3](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

[von Luxburg, A Tutorial on Spectral Clustering, §5.2, PDF pp. 11–12](https://arxiv.org/pdf/0711.0189)

## Facts & Assumptions

**Given:** A symmetric real matrix $A\in\mathbb R^{p\times p}$ and an integer $q$ with $1\le q\le p$.

[F1] In the standard real coordinate inner product, $\langle x,y\rangle=\sum_{i<p}x_i y_i$ ([[prop-standard-coordinate-inner-products]]).

[F2] In an orthonormal basis, a real endomorphism is self-adjoint exactly when its matrix is symmetric ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

[F3] Every self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F4] The trace of a square matrix is the sum of its diagonal entries ([[def-trace-of-a-square-matrix]]).

[F5] For conformable rectangular matrices $A,B$, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ ([[thm-trace-of-ab-equals-trace-of-ba]]).

## Proof

1.1 By [F1] and [F2], the matrix $A$ represents a self-adjoint map on $\mathbb R^p$ with its standard inner product; [F3] gives an orthonormal eigenbasis $u_1,\ldots,u_p$ ordered with eigenvalues $\lambda_1\ge\cdots\ge\lambda_p$. [given, F1, F2, F3]

2.1 For any feasible $Q$, put $P=QQ^T$. Since $Q^TQ=I_q$, $P^T=P$ and $P^2=P$, so $u_j=Pu_j+(I-P)u_j$ is an orthogonal decomposition and $a_j:=u_j^TPu_j=\|Q^Tu_j\|_2^2=\|Pu_j\|_2^2$ lies in $[0,1]$. This decomposition gives $a_j=0$ exactly when $Pu_j=0$, and $a_j=1$ exactly when $Pu_j=u_j$. Also $\sum_{j=1}^p a_j=\operatorname{tr}(P)=q$ by [F4]. The frame trace equals $\operatorname{tr}(PA)$ by [F5]. If $U$ has columns $u_j$ and $\Lambda=U^TAU=\operatorname{diag}(\lambda_j)$, [F5] and $UU^T=I$ give $\operatorname{tr}(PA)=\operatorname{tr}(U^TPAU)=\operatorname{tr}((U^TPU)\Lambda)=\sum_{j=1}^p\lambda_j a_j$. [step 1.1, F4, F5, algebra]

3.1 Because $\lambda_j\ge\lambda_q$ for $j\le q$ and $\lambda_j\le\lambda_q$ for $j>q$, $\sum_{j=1}^p\lambda_j a_j\le\sum_{j=1}^q(\lambda_j a_j+\lambda_q(1-a_j))\le\sum_{j=1}^q\lambda_j$. The first inequality uses $\sum_j a_j=q$; the second uses $0\le a_j\le1$ and $\lambda_j\ge\lambda_q$ for $j\le q$. [step 2.1, algebra]

4.1 The first inequality in step 3.1 has nonnegative difference $\sum_{j>q}(\lambda_q-\lambda_j)a_j$, so equality requires $a_j=0$ whenever $\lambda_j<\lambda_q$. The second has nonnegative difference $\sum_{j\le q}(\lambda_j-\lambda_q)(1-a_j)$, so equality requires $a_j=1$ whenever $\lambda_j>\lambda_q$. By step 2.1, these conditions say the chosen subspace contains all higher-eigenvalue eigenspaces, is orthogonal to all lower-eigenvalue eigenspaces, and takes its remaining dimension in the $\lambda_q$ eigenspace. Conversely, each such subspace makes both differences zero. If $A=0$, all eigenvalues are zero and both differences vanish for every feasible $Q$, as does the stated equality condition. [step 2.1, step 3.1, algebra]

5.1 Taking the first $q$ vectors of the eigenbasis from step 1.1 as the columns of $Q$ gives a feasible frame and makes the trace equal $\sum_{j=1}^q\lambda_j$. Thus the upper bound is the attained maximum, with the stated equality cases. [step 1.1, step 3.1, F3] ∎
