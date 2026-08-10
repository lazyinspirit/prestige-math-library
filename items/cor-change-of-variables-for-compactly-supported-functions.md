---
id: cor-change-of-variables-for-compactly-supported-functions
kind: corollary
title: "A compactly supported Riemann integrand admits the global change-of-variables formula from a diffeomorphism near the relevant compact preimage"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-change-of-variables-for-compact-jordan-sets, thm-injective-c-one-images-of-compact-jordan-sets-are-jordan, lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set, def-support-and-compactly-supported-riemann-integral-in-rn, lem-compactly-supported-riemann-integral-is-well-defined]
justified_by: []
aliases: []
landmark: false
proof_strategy: reduction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Theorem 6.1.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and let $g:U\to\mathbb R^n$ be injective and $C^1$, with $Dg(x)$ invertible on $U$. Let $f:\mathbb R^n\to\mathbb R$ be compactly supported Riemann integrable and suppose $\operatorname{supp}f\subseteq g(U)$. Define
$$h(x)=\begin{cases}f(g(x))|\det Dg(x)|,&x\in U,\\0,&x\notin U.\end{cases}$$
Then $h$ is compactly supported Riemann integrable and
$$\int_{\mathbb R^n}f(y)\,dy=\int_{\mathbb R^n}h(x)\,dx.$$

## Facts & Assumptions

**Given:** The local diffeomorphism data and compactly supported $f$ in the statement.

[L1] A compact subset of an open Euclidean set lies in the interior of a compact Jordan neighborhood contained in that open set ([[lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set]]).

[L2] Compact-Jordan change of variables gives the integral formula on such a neighborhood ([[thm-change-of-variables-for-compact-jordan-sets]]).

[L3] Compactly supported integrals are independent of their bounding rectangles ([[lem-compactly-supported-riemann-integral-is-well-defined]]).

## Proof

**Proof technique:** reduction.

1.1 The inverse on $g(U)$ is continuous, so $C=g^{-1}(\operatorname{supp}f)$ is compact and lies in $U$. By [L1], choose compact Jordan $K$ with $C\subseteq\operatorname{int}K\subseteq K\subseteq U$. [L1, given]

2.1 The function $f$ vanishes outside $g(K)$, while $h$ vanishes outside $K$. Apply [L2] to $f|_{g(K)}$; its transformed integrand is $h|_K$, giving the following identity. [L2, step 1.1]
$$\int_{g(K)}f=\int_Kh.$$

3.1 The support of $h$ is contained in the compact set $C$, because $f(g(x))=0$ away from its preimage. Thus $h$ is compactly supported and [L3] identifies the two integrals in step 2.1 with the corresponding integrals over $\mathbb R^n$. [L3, step 2.1] ∎
