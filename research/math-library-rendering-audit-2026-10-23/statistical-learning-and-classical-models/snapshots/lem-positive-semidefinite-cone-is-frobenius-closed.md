---
id: lem-positive-semidefinite-cone-is-frobenius-closed
kind: lemma
title: "The real positive-semidefinite cone is closed in the Frobenius metric"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-frobenius-matrix-norm
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-triangle-inequality-for-inner-product-norm
  - def-norm-and-normed-space
  - def-metric-topology
  - def-metric-ball
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Nicholas J. Higham, Computing a Nearest Symmetric Positive Semidefinite Matrix, Linear Algebra and its Applications 103 (1988), 103–118"
      url: "https://nhigham.com/wp-content/uploads/2023/10/high88d.pdf"
    - title: "David Bindel, Matrix Computations, CS 6210, Matrix Nearness Problems, Fall 2022"
      url: "https://www.cs.cornell.edu/courses/cs6210/2022fa/lec/2022-10-06.pdf"
aliases: []
landmark: false
proof_strategy: direct
---

## Statement

For an integer $d\ge1$, let $\mathbb S^d$ be the real symmetric $d\times d$ matrices and let $\mathbb S_+^d=\{M\in\mathbb S^d:v^TMv\ge0\text{ for every }v\in\mathbb R^d\}$. With the Frobenius norm $\|A\|_F=(\sum_{i,j}A_{ij}^2)^{1/2}$, the set $\mathbb S_+^d$ is closed in $\mathbb S^d$.

## Statement references

[[def-frobenius-matrix-norm|Entry-sum Frobenius norm]]

[[def-euclidean-inner-product|Euclidean inner product on coordinate space]]

[[thm-cauchy-schwarz-and-the-euclidean-norm|Cauchy–Schwarz for the Euclidean inner product]]

[[def-metric-topology|Closed sets have open complements]]

[[def-metric-ball|Open balls in the Frobenius metric]]

[Higham, §2, Theorem 2.1, article pp. 105–106](https://nhigham.com/wp-content/uploads/2023/10/high88d.pdf)

[Bindel, §6, PDF p. 5](https://www.cs.cornell.edu/courses/cs6210/2022fa/lec/2022-10-06.pdf)

## Facts & Assumptions

**Given:** An integer $d\ge1$ and the real vector space $\mathbb S^d$ with the Frobenius metric.

[F1] The Frobenius norm is the Euclidean norm of the matrix-entry list ([[def-frobenius-matrix-norm]]).

[F2] The entry inner product is the Euclidean coordinate inner product, so it satisfies Cauchy–Schwarz; expanding entries gives $\|vv^T\|_F=\|v\|_2^2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] A set is closed when its complement is open, and an open set contains a positive-radius ball around each of its points ([[def-metric-topology]], [[def-metric-ball]]).

[F4] The Frobenius norm is an inner-product norm, so its restriction to $\mathbb S^d$ is a norm; the induced metric is $d_F(A,B):=\|A-B\|_F$ ([[def-frobenius-matrix-norm]], [[cor-triangle-inequality-for-inner-product-norm]], [[def-norm-and-normed-space]]).

## Proof

1.1 Let $A\in\mathbb S^d\setminus\mathbb S_+^d$. By the definition of $\mathbb S_+^d$, there is $v\in\mathbb R^d$ with $v^TAv<0$; necessarily $v\ne0$. Set $\rho=-v^TAv/(2\|v\|_2^2)>0$. [given, choose]

2.1 For any $Z\in\mathbb S^d$ with $\|Z-A\|_F<\rho$, the entry norm [F1], entry inner product, and Cauchy–Schwarz [F2] give $|v^T(Z-A)v|=|\langle Z-A,vv^T\rangle_F|\le\|Z-A\|_F\|vv^T\|_F<\rho\|v\|_2^2=-\tfrac12v^TAv$. Hence $v^TZv<v^TAv-\tfrac12v^TAv=\tfrac12v^TAv<0$, so $Z\notin\mathbb S_+^d$. [step 1.1, F1, F2, F4, algebra]

3.1 Step 2.1 shows that the open ball $B_F(A,\rho)$ in the metric $d_F$ is contained in the complement of $\mathbb S_+^d$. Since $A$ was arbitrary in that complement, every point of it has an open ball contained in it; the complement is open by [F3], and therefore $\mathbb S_+^d$ is closed. [step 1.1, step 2.1, F3, F4] ∎
