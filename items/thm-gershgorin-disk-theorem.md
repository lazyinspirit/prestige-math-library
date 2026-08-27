---
id: thm-gershgorin-disk-theorem
kind: theorem
title: "Every eigenvalue lies in some Gershgorin disk"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-gershgorin-disks, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-coordinate-column-and-matrix-of-a-linear-map]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $T:V\to V$ be a linear endomorphism of a finite-dimensional complex vector
space, and let $\mathcal B$ be an ordered basis of $V$. Every eigenvalue of $T$
lies in at least one Gershgorin disk $D_i(T,\mathcal B)$.

## Facts & Assumptions

**Given:** A finite-dimensional complex vector space $V$, a linear endomorphism $T:V\to V$, an ordered basis $\mathcal B=(b_1,\dots,b_n)$, and the matrix $[T]_{\mathcal B}^{\mathcal B}=(a_{ij})$.

[L1] An eigenvalue $\lambda$ has a nonzero eigenvector $v$ with $Tv=\lambda v$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[L2] The columns of $[v]_{\mathcal B}$ are the coordinates of $v$ in the basis $\mathcal B$ ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 Let $\lambda$ be an eigenvalue. By [L1], choose a nonzero eigenvector $v$, and write its coordinate column as $[v]_{\mathcal B}=(x_1,\dots,x_n)^{\mathsf T}$. Choose $k$ with $|x_k|=\max_j |x_j|>0$. [L1, L2, choose]

2.1 The $k$-th row of the equation $[T]_{\mathcal B}^{\mathcal B}[v]_{\mathcal B}=\lambda [v]_{\mathcal B}$ is $\sum_j a_{kj}x_j=\lambda x_k$, so $(\lambda-a_{kk})x_k=\sum_{j\ne k} a_{kj}x_j$. Taking absolute values and using the maximality of $|x_k|$ yields $|\lambda-a_{kk}||x_k|\le \sum_{j\ne k}|a_{kj}||x_j|\le \left(\sum_{j\ne k}|a_{kj}|\right)|x_k|$. Because $x_k\ne0$, dividing by $|x_k|$ gives $|\lambda-a_{kk}|\le \sum_{j\ne k}|a_{kj}|$, so $\lambda\in D_k(T,\mathcal B)$. [step 1.1, algebra] ∎
