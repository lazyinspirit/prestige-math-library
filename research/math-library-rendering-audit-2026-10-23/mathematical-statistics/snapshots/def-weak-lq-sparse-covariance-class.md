---
id: def-weak-lq-sparse-covariance-class
kind: definition
title: "Weak-lq covariance class with directional sub-Gaussian tails"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Definitions 1–2"
      url: "https://arxiv.org/pdf/1302.3030"
---

## Definition

Let $p\ge2$ be an integer, $0\le q<1$, $c_{n,p}\ge0$, and $\tau>0$. For a symmetric covariance matrix $\Sigma=(\sigma_{ij})_{1\le i,j\le p}$, write
$$|\sigma_{-j,j}|_{(1)}\ge\cdots\ge|\sigma_{-j,j}|_{(p-1)}$$
for the magnitudes of the off-diagonal entries in column $j$, arranged in nonincreasing order. Define
$$G_q(c_{n,p})=\left\{\Sigma:\max_{1\le j\le p}\max_{1\le k\le p-1} k|\sigma_{-j,j}|_{(k)}^q\le c_{n,p}\right\}\quad(0<q<1).$$
For $q=0$, define $G_0(c_{n,p})$ to be the symmetric covariance matrices with at most $c_{n,p}$ nonzero off-diagonal entries in each column. The corresponding law class $\mathcal P_q(\tau,c_{n,p})$ consists of iid laws of $X\in\mathbb R^p$ whose covariance lies in $G_q(c_{n,p})$ and which satisfy
$$P(|v^{\mathsf T}(X-\mathbb E X)|>t)\le e^{-t^2/(2\tau)}
$$
for every unit vector $v$ and every $t>0$. This is a clean sub-Gaussian model; it assumes neither coordinate independence nor robustness to contamination.
