---
id: def-fixed-shift-liouville-correlation-average
kind: definition
title: "Fixed-shift Liouville correlation average"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-liouville-function
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Kaisa Matomäki, Maksym Radziwiłł, and Terence Tao, An averaged form of Chowla's conjecture, §1"
      url: "https://arxiv.org/pdf/1503.05121v3"
    - title: "Terence Tao, Correlations of multiplicative functions, slides 9–12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf"
---

## Definition

Let $\lambda$ be the Liouville function, so for $n\ge1$,
$\lambda(n)=(-1)^{\Omega(n)}$, where $\Omega(n)$ is the number of prime
factors of $n$, counted with multiplicity, and $\Omega(1)=0$. Let $k\ge2$ be
an integer, and let $h_1,\ldots,h_k$ be pairwise distinct integers. Put
$$
n_0(\mathbf h):=\max\bigl(1,1-\min_{1\le j\le k}h_j\bigr).
$$
For real $X\ge1$, the **fixed-shift Liouville correlation average** is
$$
C_{k,\mathbf h}(X):=\frac1X\sum_{\substack{n\in\mathbb Z_{>0}\\ n_0(\mathbf h)\le n\le X}}\prod_{j=1}^k\lambda(n+h_j).
$$
An empty sum has value $0$. The lower cutoff ensures every Liouville value in
the product has a positive integer argument; the normalization is by $X$, not
by the number of terms.

## Definition references

[[def-liouville-function|Liouville function and its positive-integer domain]]

[Matomäki, Radziwiłł, and Tao, Chowla formulation and fixed-shift convention, §1](https://arxiv.org/pdf/1503.05121v3)

[Tao, Chowla formulation and ordinary averaging, slides 9–11](https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf)
