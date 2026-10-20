---
id: lem-ica-whitening-reduces-mixing-to-orthogonal
kind: lemma
title: "Whitening a square ICA model gives orthogonal mixing"
status: draft
dependency_level: 1
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-square-ica-model, thm-singular-value-decomposition, cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
      locator: "§14.7.2, printed p. 561"
    - title: "Aapo Hyvärinen, Juha Karhunen, and Erkki Oja, Independent Component Analysis"
      url: "https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf"
      locator: "§7.2.2, printed pp. 152–154"
---

## Statement

Let $X\overset d=AS$ be a square independent-component representation with $A\in GL_p(\mathbb R)$ and centered unit-variance independent sources, so $\operatorname{Cov}(S)=I_p$. Put $C=\operatorname{Cov}(X)=AA^T$. Choose a real singular value decomposition $A=U\Sigma V^T$ with positive diagonal $\Sigma$ and orthogonal $U,V$, and define the symmetric inverse square root of $C$ by $C^{-1/2}=U\Sigma^{-1}U^T$. This matrix is the unique positive-definite symmetric matrix whose square is $C^{-1}$. The whitened mixing matrix is

$$C^{-1/2}A=UV^T,$$

which is orthogonal. Thus whitening reduces the square mixing ambiguity to an orthogonal transformation.

## Statement references

[Hastie, Tibshirani, and Friedman, §14.7.2](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[[thm-singular-value-decomposition]]

[[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

## Facts & Assumptions

**Given:** A square ICA representation $X\overset d=AS$ with $A$ invertible and $\operatorname{Cov}(S)=I_p$.

[F1] [[def-square-ica-model]]: the source components are centered with variance one and $A$ is invertible.

[F2] [[thm-singular-value-decomposition]]: every finite-dimensional real linear map has a singular value decomposition with orthonormal left and right bases and nonnegative singular values.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a finite-dimensional real self-adjoint endomorphism has an orthonormal eigenbasis.

## Proof

1.1 By [F1], $C=\operatorname{Cov}(X)=A I_p A^T=AA^T$. For every nonzero $v\in\mathbb R^p$, $v^TCv=\lVert A^Tv\rVert^2>0$ because $A$ is invertible; hence $C$ is symmetric positive definite. [F1, given, algebra]

2.1 By [F2], write $A=U\Sigma V^T$ with $U,V$ orthogonal. Since $A$ is invertible, every diagonal entry of $\Sigma$ is positive. Thus $C=U\Sigma^2U^T$, and $B=U\Sigma^{-1}U^T$ is symmetric positive definite with $B^2=C^{-1}$. [F2, step 1.1, algebra]

3.1 If $K$ is another symmetric positive-definite matrix with $K^2=C^{-1}$, then $K$ commutes with $C^{-1}$ and preserves each eigenspace $E_\lambda$ of $C^{-1}$. On each such subspace, [F3] gives an orthonormal eigenbasis for $K|_{E_\lambda}$. Its eigenvalues $\mu$ are positive and satisfy $\mu^2=\lambda$, so $K|_{E_\lambda}=\sqrt\lambda I$. This determines $K$ uniquely and agrees with $B$. [F3, step 2.1, algebra]

4.1 Therefore $C^{-1/2}=B$ and $C^{-1/2}A=U\Sigma^{-1}U^TU\Sigma V^T=UV^T$. Since $(UV^T)^T(UV^T)=I_p$, the whitened mixing is orthogonal and $C^{-1/2}X\overset d=(UV^T)S$. [given, step 2.1, step 3.1, algebra] ∎
