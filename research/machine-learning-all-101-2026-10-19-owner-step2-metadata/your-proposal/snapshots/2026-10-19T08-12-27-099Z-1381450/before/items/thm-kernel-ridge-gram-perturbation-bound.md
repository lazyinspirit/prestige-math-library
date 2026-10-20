---
id: thm-kernel-ridge-gram-perturbation-bound
kind: theorem
title: Kernel ridge predictions are stable under Gram-matrix perturbations
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-regularized-kernel-prediction-system
  - lem-regularized-gram-matrix-inverse-bound
  - def-psd-nystrom-approximation
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-psd-nystrom-order-and-exactness
  - thm-nystrom-deterministic-spectral-residual-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: 'Alex Gittens and Michael W. Mahoney, Revisiting the Nyström Method, §4.1.1'
      url: https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf
      locator: Theorem 2 and its full-rank leading-sketch hypothesis, printed pp. 42–43.
    - title: 'Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §14.2'
      url: https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf
      locator: Nyström's square-root projection identity, printed pp. 62–63.
---

## Statement

Let $K,\widetilde K\in\mathbb R^{n\times n}$ be symmetric matrices such that $x^TKx\ge0$ and $x^T\widetilde Kx\ge0$ for every $x\in\mathbb R^n$, with $n\ge1$, let $y\in\mathbb R^n$, and let $\tau>0$. Write $I_n$ for the identity matrix. For $G\in\{K,\widetilde K\}$ define $a_G=(G+\tau I_n)^{-1}y$ and $u_G=Ga_G$. Define $\lVert x\rVert_2=(\sum_i x_i^2)^{1/2}$ for vectors and $\lVert M\rVert_2=\sup_{\lVert x\rVert_2=1}\lVert Mx\rVert_2$ for matrices. If $\lVert K-\widetilde K\rVert_2\le\delta$ for some $\delta\ge0$, then

$$\lVert a_K-a_{\widetilde K}\rVert_2\le\frac{\delta\lVert y\rVert_2}{\tau^2},\qquad \lVert u_K-u_{\widetilde K}\rVert_2\le\frac{\delta\lVert y\rVert_2}{\tau}. $$

In particular, let $S\in\mathbb R^{n\times s}$ with $s\ge0$ and $\widetilde K=KS(S^TKS)^\dagger S^TK$, where $M^\dagger$ denotes the unique matrix satisfying the four Moore–Penrose equations. Choose $0\le r\le n$ and an orthogonal eigenbasis $K=U\operatorname{diag}(\lambda_1,\ldots,\lambda_n)U^T$ with $U^TU=I_n$ and $\lambda_1\ge\cdots\ge\lambda_n\ge0$. Write $U=(U_1\ U_2)$ with the first $r$ eigenvectors in $U_1$, let $\Lambda_2=\operatorname{diag}(\lambda_{r+1},\ldots,\lambda_n)$ and $\Lambda_2^{1/2}=\operatorname{diag}(\sqrt{\lambda_{r+1}},\ldots,\sqrt{\lambda_n})$, and set $\Omega_1=U_1^TS$ and $\Omega_2=U_2^TS$. If $\Omega_1$ has full row rank, meaning $\operatorname{rank}(\Omega_1)=r$, with the empty-row convention when $r=0$, then the same bounds hold with $\delta=\lambda_{r+1}+\lVert\Lambda_2^{1/2}\Omega_2\Omega_1^\dagger\rVert_2^2$, using $\lambda_{n+1}=0$ and zero norm for empty blocks.

## Statement references

[[def-regularized-kernel-prediction-system]]: The systems use $a_G=(G+\tau I)^{-1}y$ and $u_G=Ga_G=y-\tau a_G$.

[[def-psd-nystrom-approximation]]: The Nyström approximation is $KS(S^TKS)^\dagger S^TK$.

[[thm-psd-nystrom-order-and-exactness|The Nyström approximation is positive semidefinite.]]

[[thm-nystrom-deterministic-spectral-residual-bound|Under the full-row-rank leading-sketch hypothesis, the displayed deterministic spectral residual bound holds.]]

[[def-moore-penrose-pseudoinverse|The Moore–Penrose inverse is the unique matrix satisfying the four Penrose equations.]]

## Facts & Assumptions

**Given:** Positive-semidefinite matrices $K,\widetilde K$, vector $y$, scalar $\tau>0$, and the norm error $\lVert K-\widetilde K\rVert_2\le\delta$ in the Statement.

[F1] [[def-regularized-kernel-prediction-system]]: for a positive-semidefinite matrix $G$, $a_G=(G+\tau I_n)^{-1}y$ and $u_G=Ga_G=y-\tau a_G$.

[F2] [[lem-regularized-gram-matrix-inverse-bound]]: $G+\tau I_n$ is invertible, $\lVert(G+\tau I_n)^{-1}\rVert_2\le1/\tau$, and the two shifted inverses satisfy the resolvent identity.

[F3] [[def-psd-nystrom-approximation]]: for a positive-semidefinite $K$ and finite sketch $S$, $\widetilde K=KS(S^TKS)^\dagger S^TK$ is the Nyström matrix.

[F4] [[thm-psd-nystrom-order-and-exactness]]: every such $\widetilde K$ is positive semidefinite.

[F5] [[thm-nystrom-deterministic-spectral-residual-bound]]: if $\Omega_1$ has full row rank, then $\lVert K-\widetilde K\rVert_2\le\lambda_{r+1}+\lVert\Lambda_2^{1/2}\Omega_2\Omega_1^\dagger\rVert_2^2$ under the eigenbasis and block definitions in the Statement.

## Proof

1.1 Put $A=K+\tau I_n$ and $B=\widetilde K+\tau I_n$. By [F2], both inverses exist and have norm at most $1/\tau$. [given, F2, algebra]

2.1 The resolvent identity gives $a_K-a_{\widetilde K}=(A^{-1}-B^{-1})y=A^{-1}(\widetilde K-K)B^{-1}y$. Taking norms and applying the bounds from step 1.1 and the assumed Gram error gives $\lVert a_K-a_{\widetilde K}\rVert_2\le\delta\lVert y\rVert_2/\tau^2$. [given, F1, step 1.1, algebra]

3.1 By [F1], $u_K=y-\tau a_K$ and $u_{\widetilde K}=y-\tau a_{\widetilde K}$. Subtracting these equalities and using step 2.1 gives $\lVert u_K-u_{\widetilde K}\rVert_2=\tau\lVert a_K-a_{\widetilde K}\rVert_2\le\delta\lVert y\rVert_2/\tau$. [F1, step 2.1, algebra]

4.1 In the Nyström case, [F4] supplies positive semidefiniteness of $\widetilde K$, and [F5] supplies the stated value of $\delta$ whenever $\Omega_1$ has full row rank. Substituting that bound into steps 2.1 and 3.1 proves the conditional Nyström conclusion. [given, F3, F4, F5, step 2.1, step 3.1, algebra] ∎
