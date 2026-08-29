---
id: cor-realification-doubles-finite-dimension
kind: corollary
title: "Realification doubles finite dimension"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-realification-of-a-complex-vector-space, def-complex-numbers-and-arithmetic, def-linear-basis, def-dimension]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Statement

If $W$ is a finite-dimensional complex vector space with $\dim_{\mathbb C}W=n$, then its realification $W_{\mathbb R}$ of [[def-realification-of-a-complex-vector-space]] is finite-dimensional over $\mathbb R$ with

$$\dim_{\mathbb R}W_{\mathbb R}=2n.$$

## Facts & Assumptions

**Given:** A finite-dimensional complex vector space $W$ with $\dim_{\mathbb C}W=n$.

[L1] The realification $W_{\mathbb R}$ is the real vector space with the same underlying set and addition, and scalar multiplication restricted to $\mathbb R\subseteq\mathbb C$ ([[def-realification-of-a-complex-vector-space]]).

[L2] In $\mathbb C=\mathbb R[x]/(x^2+1)$ with $i=x+(x^2+1)$, every complex number is written uniquely as $a+bi$ with $a,b\in\mathbb R$ and $i^2=-1$ ([[def-complex-numbers-and-arithmetic]]).

[L3] A basis is a linearly independent spanning set ([[def-linear-basis]]).

[L4] The dimension of a finite-dimensional vector space is the size of any of its bases ([[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 Choose an ordered complex basis $(e_1,\ldots,e_n)$ of $W$, which exists because $W$ is finite-dimensional over $\mathbb C$ by [L4]. [L4, choose]

2.1 The list $(e_1,ie_1,\ldots,e_n,ie_n)$ spans $W_{\mathbb R}$: writing $w=\sum_jz_je_j$ and $z_j=a_j+ib_j$ by [L2], one has $w=\sum_ja_je_j+\sum_jb_j(ie_j)$ by the scalar-multiplication restriction of [L1]. [step 1.1, L1, L2, algebra]

2.2 The list is linearly independent over $\mathbb R$: if $\sum_ja_je_j+\sum_jb_j(ie_j)=0$ with real coefficients, then $\sum_j(a_j+ib_j)e_j=0$ in $W$, so the complex independence of $(e_1,\ldots,e_n)$ forces every $a_j+ib_j=0$ and hence every $a_j=b_j=0$; in particular the displayed entries are pairwise distinct. [step 1.1, L3, algebra]

3.1 By [L3], steps 2.1 and 2.2 make the displayed list a real basis of $W_{\mathbb R}$ with $2n$ entries, so [L4] gives $\dim_{\mathbb R}W_{\mathbb R}=2n$. [step 2.1, step 2.2, L3, L4] ∎
