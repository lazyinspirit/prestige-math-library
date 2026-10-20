---
id: thm-equal-spherical-mixture-low-variance-kmeans-limit
kind: theorem
title: "Equal-spherical mixture assignments and objective converge to k-means"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - thm-exponential-limits-and-range
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, Exercise 13.1"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning, §9.3.2 and Exercise 9.11"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
---

## Statement

Let $n,p,K$ be positive integers, let $x_1,\ldots,x_n,\mu_1,\ldots,\mu_K\in\mathbb R^p$, and fix positive weights $\pi_1,\ldots,\pi_K$ with $\sum_{k=1}^K\pi_k=1$. Put $d_{ik}:=\|x_i-\mu_k\|_2^2$, $d_i^*:=\min_{1\le k\le K}d_{ik}$, and $M_i:=\{k:d_{ik}=d_i^*\}$. For every $\sigma>0$, define the normalized soft-assignment weights

$$\rho_{ik}^{(\sigma)}:=\frac{\pi_k\exp(-d_{ik}/(2\sigma^2))}{\sum_{j=1}^K\pi_j\exp(-d_{ij}/(2\sigma^2))}$$

and the finite-data objective

$$\Psi_\sigma:=-2\sigma^2\sum_{i=1}^n\log\left(\sum_{k=1}^K\pi_k\exp(-d_{ik}/(2\sigma^2))\right).$$

As $\sigma\downarrow0$, for each $i$ and $k$,

$$\rho_{ik}^{(\sigma)}\longrightarrow\begin{cases}\displaystyle\frac{\pi_k}{\sum_{j\in M_i}\pi_j},&k\in M_i,\\[6pt]0,&k\notin M_i,\end{cases}$$

and

$$\Psi_\sigma\longrightarrow\sum_{i=1}^n d_i^*=\min_{z\in\{1,\ldots,K\}^n}\sum_{i=1}^n d_{i,z_i}.$$

Thus a unique nearest center receives limiting weight one, while tied nearest centers divide limiting weight in proportion to their fixed mixture weights. This is a fixed-parameter finite-data limit and asserts no convergence of EM iterates.

## Facts & Assumptions

**Given:** Finite positive integers $n,p,K$, fixed vectors $x_i,\mu_k\in\mathbb R^p$, and fixed positive weights $\pi_k$ summing to one.

[A1] All indices range over finite sets and all data, centers, and weights are fixed; no probability-space assumption or choice axiom is used.

[F1] [[thm-exponential-limits-and-range]]: $\exp(u)\to0$ as $u\to-\infty$.

## Proof
1.1 Fix $i$ and write $R_i(\sigma):=\sum_{k\in M_i}\pi_k+\sum_{k\notin M_i}\pi_k\exp(-(d_{ik}-d_i^*)/(2\sigma^2))$. Every difference in the second sum is strictly positive, so each exponential there tends to zero by [F1], since its exponent tends to $-\infty$ as $\sigma\downarrow0$; the sum is finite. Hence $R_i(\sigma)\to\sum_{k\in M_i}\pi_k>0$. [given, A1, F1, algebra]

2.1 Factoring $\exp(-d_i^*/(2\sigma^2))$ from the denominator of $\rho_{ik}^{(\sigma)}$ gives $\rho_{ik}^{(\sigma)}=\pi_k\exp(-(d_{ik}-d_i^*)/(2\sigma^2))/R_i(\sigma)$. If $k\in M_i$, its exponential is one and the limit is $\pi_k/\sum_{j\in M_i}\pi_j$; if $k\notin M_i$, its positive distance gap makes the numerator tend to zero while the denominator tends to a positive number. This proves the stated responsibility limits. [given, A1, step 1.1, algebra]

2.2 The same factorization gives $-2\sigma^2\log\sum_k\pi_k e^{-d_{ik}/(2\sigma^2)}=d_i^*-2\sigma^2\log R_i(\sigma)$. The nearest terms give $R_i(\sigma)\ge\sum_{k\in M_i}\pi_k>0$, while $d_{ik}-d_i^*\ge0$ and $\sum_k\pi_k=1$ give $R_i(\sigma)\le1$. Thus $\log R_i(\sigma)$ stays between two finite constants, so the second term tends to zero. Summing over the finite set of observations gives $\Psi_\sigma\to\sum_i d_i^*$. [given, A1, step 1.1, algebra]

3.1 For each labeling $z\in\{1,\ldots,K\}^n$, $d_{i,z_i}\ge d_i^*$ for every $i$, so $\sum_i d_{i,z_i}\ge\sum_i d_i^*$. Define $z_i:=\min M_i$, which exists because $M_i$ is a nonempty finite subset of $\{1,\ldots,K\}$. This labeling attains equality, proving the displayed minimum without any choice principle. [given, A1, step 2.2, construct, algebra] ∎
