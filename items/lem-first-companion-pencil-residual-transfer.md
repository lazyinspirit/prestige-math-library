---
id: lem-first-companion-pencil-residual-transfer
kind: lemma
title: "A companion-pencil residual transfers to the polynomial residual through explicit block factors"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-first-frobenius-companion-pencil
  - def-matrix-polynomial-and-homogeneous-eigenpairs
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. Steven Mackey, Niloufer Mackey, and Françoise Tisseur, Polynomial Eigenvalue Problems: Theory, Computation, and Structure, §3"
      url: "https://eprints.maths.manchester.ac.uk/2293/1/VM60_review.pdf"
    - title: "Françoise Tisseur and Karl Meerbergen, The Quadratic Eigenvalue Problem, §§3.4 and 5.1"
      url: "https://eprints.maths.manchester.ac.uk/466/1/38198.pdf"
---

## Statement

Let $P(\lambda)=\sum_{j=0}^{m}A_j\lambda^j$ have grade $m\ge1$, and let $L(\lambda)$ be its first companion pencil. For any block vector $z=(z_1,\ldots,z_m)^T$, write its pencil residual as $e=L(\lambda)z=(e_1,\ldots,e_m)^T$ and put $x=z_m$. For $2\le k\le m$, set
$$Q_k(\lambda):=\sum_{j=m-k+1}^{m}A_j\lambda^{j-m+k-1}.$$
Then the exact identity and norm bound are
$$P(\lambda)x=e_1+\sum_{k=2}^{m}Q_k(\lambda)e_k,\qquad \|P(\lambda)x\|_2\le\|e_1\|_2+\sum_{k=2}^{m}\|Q_k(\lambda)\|_F\|e_k\|_2.$$
Empty sums are zero when $m=1$. In particular, the companion lift has $e_2=\cdots=e_m=0$ and $e_1=P(\lambda)x$. The displayed factors depend on $\lambda$ and the coefficients, so an unscaled pencil residual by itself supplies no uniform polynomial-residual bound and no polynomial conditioning claim.

## Facts & Assumptions

**Given:** A grade-$m$ matrix polynomial, a finite $\lambda\in\mathbb C$, and a block vector $z=(z_1,\ldots,z_m)^T$.

[F1] [[def-matrix-polynomial-and-homogeneous-eigenpairs]]: $P(\lambda)=\sum_{j=0}^{m}A_j\lambda^j$, $\|x\|_2=(x^*x)^{1/2}$, and $\|M\|_F^2=\sum_{r,s}|M_{rs}|^2$.

[F2] [[def-first-frobenius-companion-pencil]]: the top residual block is $(\lambda A_m+A_{m-1})z_1+A_{m-2}z_2+\cdots+A_0z_m$, and each lower residual is $e_k=-z_{k-1}+\lambda z_k$.

## Proof

**Proof technique:** direct block elimination.

1.1 From the lower residual equations in [F2], $z_{k-1}=\lambda z_k-e_k$. Back-substitution from $x=z_m$ gives $z_j=\lambda^{m-j}x-\sum_{k=j+1}^{m}\lambda^{k-j-1}e_k$ for $1\le j<m$; when $j=m$ the same formula has an empty sum. [given, F2, construct]

2.1 Substitute these expressions into the top row from [F2]. The terms containing $x$ sum to $\sum_{j=0}^{m}A_j\lambda^jx=P(\lambda)x$. For fixed $e_k$, its coefficient is the negative of $\sum_{j=m-k+1}^{m}A_j\lambda^{j-m+k-1}$: the $z_1$ term contributes $-(\lambda A_m+A_{m-1})\lambda^{k-2}e_k$, and each $z_j$ term for $2\le j<k$ contributes $-A_{m-j}\lambda^{k-j-1}e_k$. Thus $e_1=P(\lambda)x-\sum_{k=2}^{m}Q_k(\lambda)e_k$, which is the claimed identity. [F1, F2, step 1.1, algebra]

3.1 We first derive the finite-dimensional Euclidean estimates used here. For $u,v\in\mathbb C^d$ with $v\ne0$, set $c:=\langle u,v\rangle/\|v\|_2^2$. Direct expansion gives $\|u-cv\|_2^2=\|u\|_2^2-|\langle u,v\rangle|^2/\|v\|_2^2\ge0$, hence $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$; if $v=0$ the inequality is immediate. Since $\|u+v\|_2^2=\|u\|_2^2+\|v\|_2^2+2\operatorname{Re}\langle u,v\rangle\le(\|u\|_2+\|v\|_2)^2$, taking nonnegative square roots gives $\|u+v\|_2\le\|u\|_2+\|v\|_2$. For any matrix $M$ and vector $v$, apply the derived inner-product bound to each row of $M$ and $\bar v$ to obtain $|(Mv)_r|^2\le(\sum_s|M_{rs}|^2)\|v\|_2^2$; summing over rows gives $\|Mv\|_2\le\|M\|_F\|v\|_2$. Now put $y=e_1+\sum_{k=2}^mQ_ke_k=P(\lambda)x$. Repeated use of the derived triangle inequality gives $\|y\|_2\le\|e_1\|_2+\sum_{k=2}^m\|Q_ke_k\|_2$. Applying the rowwise matrix estimate to each $Q_k$ gives the claimed bound. For the companion lift, each lower row vanishes by construction and the top row is $P(\lambda)x$. [F1, step 2.1, algebra]

4.1 To see why no uniform unscaled transfer factor follows, take the fixed scalar polynomial $P(\lambda)=\lambda^2+1$. For any $t>0$, set $x=t/(t^2+1)$, $z_2=x$, and $z_1=tx-1$. Direct substitution into its first companion pencil gives $e_1=tz_1+z_2=0$ and $e_2=-z_1+tz_2=1$, while $P(t)x=t$. Hence the block-pencil residual norm is $1$ and the polynomial residual is $t$, which is unbounded as $t\to\infty$. Any error or conditioning comparison must retain the displayed coefficient and parameter scaling. [F1, F2, step 2.1, algebra] ∎
