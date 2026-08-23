---
id: lem-artin-fixed-field-upper-degree-bound
kind: lemma
title: "Artin's fixed-field upper bound $[K:K^G]\\le |G|$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fixed-field-of-an-automorphism-group, thm-rank-nullity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 3.4"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]\le |G|$.

## Facts & Assumptions

**Given:** A field $K$, a finite group $G=\{\sigma_1,\ldots,\sigma_m\}$ of automorphisms of $K$ with $\sigma_1$ the identity, and arbitrary elements $x_1,\ldots,x_{m+1}\in K$.

[L1] If $T:V\to W$ is linear and $V$ is finite-dimensional, then $\dim V=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]).

## Proof

**Proof technique:** direct.

1.1 Define the $K$-linear map $T:K^{m+1}\to K^m$ by $T(c_1,\ldots,c_{m+1})=(\sum_jc_j\sigma_i(x_j))_{i=1}^m$. Since the domain has dimension $m+1$ and the codomain dimension $m$, [L1] gives a nonzero vector in $\ker T$. [L1]

2.1 Among nonzero vectors in $\ker T$, choose $c=(c_j)$ with least support and scale it so its first supported coordinate is $1$. For $\tau\in G$, applying $\tau$ to all equations $T(c)=0$ and reindexing the rows by $\sigma_i\mapsto\tau\sigma_i$ shows that $\tau(c)=(\tau(c_j))$ also lies in $\ker T$. The vector $\tau(c)-c$ has a zero in the normalized coordinate and support strictly smaller than that of $c$ unless it vanishes; minimality therefore gives $\tau(c_j)=c_j$ for every $j$ and every $\tau\in G$, so all $c_j$ lie in $K^G$. [step 1.1, choose, algebra]

3.1 The identity row of $T(c)=0$ is $\sum_jc_jx_j=0$, a nontrivial $K^G$-linear dependence among the arbitrary $m+1$ elements. Thus no $m+1$ elements of $K$ are linearly independent over $K^G$, and $[K:K^G]\le m=|G|$. This includes $m=1$ and also covers repeated or zero $x_j$. [step 2.1] ∎
