---
id: cor-kirchhoff-eigenvalue-product-formula
kind: corollary
title: "The matrix-tree theorem becomes an eigenvalue product formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-spectrum-spectral-radius-and-cospectrality, def-laplacian-matrix-of-a-finite-simple-graph, thm-determinant-is-product-of-eigenvalues, thm-matrix-tree-theorem, thm-spectral-mapping-for-polynomials]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, Corollary 1.10"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

Let $G$ be a finite simple graph on $n\ge2$ vertices, and let

$$0=\mu_1\le\mu_2\le\cdots\le\mu_n$$

be the eigenvalues of its Laplacian matrix. Then

$$\tau(G)=\frac1n\prod_{j=2}^n \mu_j.$$

If $G$ is $d$-regular with adjacency eigenvalues
$d=\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_n$, then

$$\tau(G)=\frac1n\prod_{j=2}^n (d-\lambda_j).$$

## Facts & Assumptions

**Given:** A finite simple graph $G$ on $n\ge2$ vertices with Laplacian $L$ and spanning-tree count $\tau(G)$.

[L1] Every principal cofactor of $L$ equals $\tau(G)$ ([[thm-matrix-tree-theorem]]).

[L2] The determinant of a square matrix is the product of its eigenvalues, counted with multiplicity ([[thm-determinant-is-product-of-eigenvalues]]).

[L3] If $p$ is a polynomial and $\lambda$ is an eigenvalue of $A$, then $p(\lambda)$ is an eigenvalue of $p(A)$ with the same eigenvectors ([[thm-spectral-mapping-for-polynomials]]).

[F1] The adjacency spectrum records the eigenvalues of the adjacency matrix ([[def-graph-spectrum-spectral-radius-and-cospectrality]]).

## Proof

**Proof technique:** direct.

1.1 Expanding the characteristic polynomial $\det(tI-L)$ at $t=0$ shows that the coefficient of $t$ is $(-1)^{n-1}\sum_{i=1}^n \det L^{(i)}$. By [L1], this is $(-1)^{n-1}n\tau(G)$. On the other hand, [L2] gives $\det(tI-L)=\prod_{j=1}^n (t-\mu_j)=t\prod_{j=2}^n (t-\mu_j)$, so the same coefficient of $t$ is $(-1)^{n-1}\prod_{j=2}^n \mu_j$. Therefore $n\tau(G)=\prod_{j=2}^n \mu_j$. [L1, L2, algebra]

2.1 If $G$ is $d$-regular, then $L=dI-A$. Applying [L3] to the polynomial $p(x)=d-x$ shows that the Laplacian eigenvalues are $d-\lambda_1,\dots,d-\lambda_n$. Since $\lambda_1=d$, the zero Laplacian eigenvalue is $d-\lambda_1$, and substituting the others into step 1.1 gives $\tau(G)=\frac1n\prod_{j=2}^n (d-\lambda_j)$. [step 1.1, L3, F1]

3.1 Steps 1.1 and 2.1 are exactly the two displayed formulas. [step 1.1, step 2.1] ∎
