---
id: lem-weak-lq-thresholded-covariance-row-sum
kind: lemma
title: "Weak-lq thresholding error from an entrywise deviation event"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - alg-entrywise-thresholded-sample-covariance
  - def-weak-lq-sparse-covariance-class
  - lem-symmetric-matrix-operator-norm-rayleigh
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Section 4"
      url: "https://arxiv.org/pdf/1302.3030"
---

## Statement

Let $\Sigma\in G_q(c_{n,p})$ from [[def-weak-lq-sparse-covariance-class]], let $\widehat\Sigma$ be the output of [[alg-entrywise-thresholded-sample-covariance]] with threshold $\lambda>0$, and suppose
$$\max_{1\le j,k\le p}|\widehat\sigma^\ast_{jk}-\sigma_{jk}|\le\lambda/2.$$
Then
$$\|\widehat\Sigma-\Sigma\|_{\mathrm{op}}\le C_q\left(c_{n,p}\lambda^{1-q}+\lambda\right),$$
where $C_q<\infty$ depends only on $q$; for $q=0$, the class means at most $c_{n,p}$ nonzero off-diagonal entries per column and one may take $C_0=2$.

## Facts & Assumptions

**Given:** $p\ge2$, $\lambda>0$, a covariance matrix in the stated weak-lq class, and the entrywise event in the Statement.

[F1] The off-diagonal magnitudes sorted in column $j$ satisfy $k|\sigma_{-j,j}|_{(k)}^q\le c_{n,p}$ for $0<q<1$; for $q=0$ there are at most $c_{n,p}$ nonzero off-diagonal entries in each column ([[def-weak-lq-sparse-covariance-class]]).

[F2] The estimator keeps a diagonal entry and retains an off-diagonal sample entry exactly when its magnitude is at least $\lambda$ ([[alg-entrywise-thresholded-sample-covariance]]).

[F3] For a real symmetric matrix, the operator norm equals the maximum absolute Rayleigh quotient ([[lem-symmetric-matrix-operator-norm-rayleigh]]).

## Proof

1.1 On the event in the Statement, each diagonal error is at most $\lambda/2$. For an off-diagonal entry that is retained, $|\sigma_{jk}|\ge\lambda/2$ and $|\widehat\sigma_{jk}-\sigma_{jk}|\le\lambda/2\le\min\{|\sigma_{jk}|,\lambda\}$. If it is removed, then $|\sigma_{jk}|\le|\widehat\sigma^\ast_{jk}-\sigma_{jk}|+|\widehat\sigma^\ast_{jk}|<3\lambda/2$, and its error is $|\sigma_{jk}|\le(3/2)\min\{|\sigma_{jk}|,\lambda\}$. [given, F2, algebra]

2.1 For $q=0$, [F1] and step 1.1 bound every off-diagonal column error sum by $(3/2)c_{n,p}\lambda$. For $0<q<1$, fix a column, put $a_k=|\sigma_{-j,j}|_{(k)}$, $T=c_{n,p}\lambda^{-q}$, and $B_q:=\sum_{r=0}^{\infty}2^{r(1-1/q)}=\frac1{1-2^{1-1/q}}<\infty.$ The class bound in [F1] gives $a_k\le(c_{n,p}/k)^{1/q}$. If $T<1$, then $\sum_{k=1}^{p-1}\min(a_k,\lambda)\le c_{n,p}^{1/q}\sum_{k=1}^{\infty}k^{-1/q}\le B_qc_{n,p}^{1/q}\le B_qc_{n,p}\lambda^{1-q},$ because grouping $2^r\le k<2^{r+1}$ gives at most $2^r(2^r)^{-1/q}$ per block, and $c_{n,p}<\lambda^q$. If $T\ge1$, let $m=\lfloor T\rfloor\ge T/2$. The first $m$ terms contribute at most $m\lambda\le c_{n,p}\lambda^{1-q}$. Grouping the tail into blocks $2^rm<k\le2^{r+1}m$ gives $\sum_{k>m}k^{-1/q}\le B_qm^{1-1/q},$ so the tail contributes at most $B_qc_{n,p}^{1/q}m^{1-1/q}\le B_q2^{1/q-1}c_{n,p}\lambda^{1-q}$; here the exponent $1-1/q$ is negative and $m\ge T/2$. Thus for either case each off-diagonal column error sum is at most $C_qc_{n,p}\lambda^{1-q}$ for a finite constant $C_q$ depending only on $q$. Adding the diagonal error bound $\lambda/2$ from step 1.1 bounds every row sum by $C_q(c_{n,p}\lambda^{1-q}+\lambda)$. For $q=0$, the same total is at most $(3/2)c_{n,p}\lambda+\lambda/2\le2(c_{n,p}\lambda+\lambda)$. [F1, step 1.1, algebra]

3.1 For any unit vector $v$, [F3] identifies the operator norm with the maximum absolute Rayleigh quotient. With $A=\widehat\Sigma-\Sigma$, symmetry and $2|v_jv_k|\le v_j^2+v_k^2$ give $|v^{\mathsf T}(\widehat\Sigma-\Sigma)v| \le\sum_{j,k}|A_{jk}||v_j||v_k| \le\frac12\sum_{j,k}|A_{jk}|(v_j^2+v_k^2) \le\max_j\sum_k|A_{jk}|,$ because $A$ is symmetric, its absolute column sums equal its row sums, and $\sum_jv_j^2=1$. Taking the maximum over unit $v$ and using step 2.1 yields the claimed operator bound. [F3, step 2.1, algebra] ∎
