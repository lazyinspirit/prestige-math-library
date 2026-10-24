---
id: thm-finite-products-of-banach-spaces-are-banach
kind: theorem
title: "Finite products of Banach spaces are Banach"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space, def-product-norms-on-finitely-many-normed-spaces,
       lem-finite-product-norms-are-equivalent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Statement

Let $n\ge 1$, and let $E_0,\dots,E_{n-1}$ be Banach spaces. Then their finite
product $\prod_{k<n}E_k$ is a Banach space for each of the standard product
norms $\|\cdot\|_{\max}$, $\|\cdot\|_2$, and $\|\cdot\|_1$.

## Facts & Assumptions

**Given:** A natural number $n\ge 1$, Banach spaces $E_0,\dots,E_{n-1}$, and a Cauchy sequence $x^{(m)}=(x^{(m)}_0,\dots,x^{(m)}_{n-1})$ in the product for the maximum norm.

[L1] A Banach space is complete for its norm metric ([[def-banach-space]]).

[L2] The maximum, Euclidean, and sum product norms are defined on the finite product ([[def-product-norms-on-finitely-many-normed-spaces]]).

[L3] These three product norms satisfy $\|x\|_{\max}\le \|x\|_2\le \|x\|_1\le n\|x\|_{\max}$ ([[lem-finite-product-norms-are-equivalent]]).

## Proof

**Proof technique:** direct.

1.1 If $x^{(m)}$ is Cauchy for $\|\cdot\|_{\max}$, then each coordinate sequence $(x^{(m)}_k)_m$ is Cauchy in $E_k$, because $\|x^{(m)}_k-x^{(\ell)}_k\|\le \|x^{(m)}-x^{(\ell)}\|_{\max}$ for every $k<n$. [L2, given]

2.1 Since each $E_k$ is Banach, [L1] gives a point $x_k\in E_k$ with $x^{(m)}_k\to x_k$. Put $x:=(x_0,\dots,x_{n-1})$. [step 1.1, L1, construct]

3.1 Given $\varepsilon>0$, choose $M_0$ so that $\|x^{(m)}-x^{(\ell)}\|_{\max}<\varepsilon/2$ for $m,\ell\ge M_0$, and for each $k<n$ choose $M_k$ so that $\|x^{(m)}_k-x_k\|<\varepsilon/2$ for $m\ge M_k$. For $M:=\max\{M_0,M_1,\dots,M_{n-1}\}$ and $m\ge M$, taking $\ell\to\infty$ in a fixed coordinate gives $\|x^{(m)}_k-x_k\|\le \varepsilon/2$ for every $k<n$, hence $\|x^{(m)}-x\|_{\max}\le \varepsilon/2<\varepsilon$. [step 2.1, given, choose]

4.1 Thus the product is complete for the maximum norm, hence Banach for that norm by [L1]. [step 3.1, L1]

5.1 The inequalities in [L3] show that a sequence is Cauchy or convergent for one standard product norm exactly when it is so for the others. Therefore completeness for $\|\cdot\|_{\max}$ is equivalent to completeness for $\|\cdot\|_2$ and for $\|\cdot\|_1$, so the product is Banach for all three norms. [step 4.1, L3] ∎
