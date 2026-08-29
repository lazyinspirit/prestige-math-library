---
id: cor-logarithmic-derivative-of-a-normally-convergent-product
kind: corollary
title: "The logarithmic derivative of a normally convergent product"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-normal-convergence-of-holomorphic-products, thm-weierstrass-convergence-holomorphic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

Let $\prod_{n\ge0}f_n$ be a normally convergent holomorphic product on an open
set $\Omega$, and let $F$ be its holomorphic limit. On every compact set
$K\subseteq\Omega$ disjoint from the zero set of $F$, the series

$$\sum_{n\ge0}\frac{f_n'(z)}{f_n(z)}$$

converges uniformly on $K$ and

$$\frac{F'(z)}{F(z)}=\sum_{n\ge0}\frac{f_n'(z)}{f_n(z)}\qquad(z\in K).$$

## Facts & Assumptions

**Given:** A normally convergent product $\prod f_n$ on $\Omega$ with limit $F$.

[F1] A normally convergent product has a holomorphic limit, and on each compact
set only finitely many factors contribute zeros
([[thm-normal-convergence-of-holomorphic-products]]).

[F2] Locally uniform convergence of holomorphic functions carries locally
uniform derivative convergence ([[thm-weierstrass-convergence-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Fix a compact set $K\subseteq\Omega$ disjoint from the zero set of $F$. By [F1], choose $N$ so that $f_n$ has no zero on $K$ for $n\ge N$, and write $P_m=\prod_{n=0}^{m}f_n$. Then $P_m\to F$ uniformly on $K$, and for $m\ge N$ the functions $P_m$ are zero-free on $K$. [F1, given, choose]

2.1 By [F2], the derivatives $P_m'$ converge uniformly on $K$ to $F'$. Since $F$ has no zero on the compact set $K$, the uniform convergence of $P_m$ to $F$ makes $P_m$ uniformly bounded away from $0$ on $K$ for all large $m$, so $P_m'/P_m\to F'/F$ uniformly on $K$. [F2, step 1.1, algebra]

3.1 For each finite product, ordinary differentiation gives $P_m'/P_m=\sum_{n=0}^{m}f_n'/f_n$ on $K$. Passing to the uniform limit from step 2.1 yields the stated series identity and uniform convergence. [step 2.1, algebra] ∎
