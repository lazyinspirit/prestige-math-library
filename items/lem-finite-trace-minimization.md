---
id: lem-finite-trace-minimization
kind: lemma
title: "Finite-dimensional trace minimization under orthonormal constraints"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - cor-rayleigh-quotient-extreme-eigenvalue-characterisation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007"
      url: "https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf"
    - title: "Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013"
      url: "https://arxiv.org/pdf/1311.2492"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $A\in\mathbb R^{n\times n}$ be symmetric, let $\lambda_1\le\cdots\le\lambda_n$ be its real eigenvalues repeated with multiplicity, and define $\operatorname{tr}(B)=\sum_i B_{ii}$ for square $B$. For $1\le k\le n$, $$\min_{Q\in\mathbb R^{n\times k},\ Q^TQ=I_k}\operatorname{tr}(Q^TAQ)=\sum_{i=1}^k\lambda_i.$$ The minimum is attained by taking the columns of $Q$ to be orthonormal eigenvectors for the $k$ smallest eigenvalues, counted with multiplicity; when an eigenvalue at the cutoff is repeated, the minimizer need not be unique.

## Statement references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

## Facts & Assumptions

**Given:** A real symmetric matrix $A\in\mathbb R^{n\times n}$ and an integer $1\le k\le n$.

[F1] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F2] [[cor-rayleigh-quotient-extreme-eigenvalue-characterisation]]: for a self-adjoint endomorphism with eigenvalues ordered decreasingly, the minimum nonzero-vector Rayleigh quotient is the smallest eigenvalue.

## Proof

1.1 If $k=1$, every feasible $Q$ is a unit column $q$, so $\operatorname{tr}(Q^TAQ)=q^TAq=R_A(q)$. By [F2], its minimum is the smallest eigenvalue, which is $\lambda_1$ in the increasing order of the Statement. [given, F2, algebra]

1.2 Suppose $k\ge2$. By [F1], choose an orthonormal eigenbasis $u_1,\ldots,u_n$ with eigenvalues $\lambda_1\le\cdots\le\lambda_n$, and let $U$ be the matrix with these columns. For any feasible $Q$, put $C=U^TQ$; then $C^TC=I_k$ and $Q^TAQ=C^T\operatorname{diag}(\lambda_1,\ldots,\lambda_n)C$. Writing $c_{ij}$ for the entries of $C$ and $p_i=\sum_{j=1}^k c_{ij}^2$, direct expansion of the diagonal sum gives $\operatorname{tr}(Q^TAQ)=\sum_{i=1}^n\lambda_i p_i$. [given, F1, algebra, choose]

2.1 The matrix $P=CC^T$ is symmetric and idempotent because $C^TC=I_k$. Hence it is the orthogonal projection onto the column space of $C$, and $p_i=e_i^TPe_i=\|Pe_i\|_2^2$ lies in $[0,1]$. Also $\sum_i p_i=\sum_{i,j}c_{ij}^2=\sum_j(C^TC)_{jj}=k$. [given, step 1.2, algebra]

3.1 Using $\sum_i p_i=k$, subtract the bottom-$k$ eigenvalue sum to obtain $$\sum_i\lambda_i p_i-\sum_{i=1}^k\lambda_i=\sum_{i=1}^k(\lambda_k-\lambda_i)(1-p_i)+\sum_{i=k+1}^n(\lambda_i-\lambda_k)p_i\ge0.$$ Every term on the right is nonnegative. Taking $Q=(u_1,\ldots,u_k)$ gives equality, so the stated minimum is attained. This proves the claim for $k\ge2$ as well as the $k=1$ case of step 1.1. [step 1.1, step 1.2, step 2.1, algebra, construct] ∎
