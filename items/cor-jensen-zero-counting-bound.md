---
id: cor-jensen-zero-counting-bound
kind: corollary
title: "Jensen's formula bounds the number of zeros in a smaller disc"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-jensen-formula-on-a-disc]
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
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let $f$ be holomorphic on a neighbourhood of the closed disc $\{|z|\le R\}$,
assume $f(0)\ne0$, and let $n(r)$ denote the number of zeros of $f$ in
$|z|\le r$, counted with multiplicity, for $0<r<R$. Then

$$n(r)\log\frac{R}{r}\le\frac{1}{2\pi}\int_0^{2\pi}\log|f(Re^{it})|\,dt-\log|f(0)|.$$

## Facts & Assumptions

**Given:** A holomorphic function $f$ on a neighbourhood of the closed disc $\{|z|\le R\}$ with $f(0)\ne0$, and a radius $0<r<R$.

[F1] Jensen's formula gives
$$\log|f(0)|=\frac{1}{2\pi}\int_0^{2\pi}\log|f(Re^{it})|\,dt-\sum_{k=1}^{N}\log\frac{R}{|a_k|}$$
for the zeros $a_k$ of $f$ in $|z|<R$
([[thm-jensen-formula-on-a-disc]]).

## Proof

**Proof technique:** direct.

1.1 If $a_k$ is a zero with $|a_k|\le r$, then $\log(R/|a_k|)\ge\log(R/r)$. There are exactly $n(r)$ such zeros, counted with multiplicity. [given, algebra]

2.1 Therefore the Jensen sum in [F1] satisfies $\sum_{k=1}^{N}\log(R/|a_k|)\ge n(r)\log(R/r)$. Substituting this lower bound into [F1] and rearranging gives the stated inequality. [F1, step 1.1, algebra] ∎
