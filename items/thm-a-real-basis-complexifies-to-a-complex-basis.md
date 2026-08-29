---
id: thm-a-real-basis-complexifies-to-a-complex-basis
kind: theorem
title: "A real basis becomes a complex basis after complexification, so $\\dim_{\\mathbb C}(\\mathbb C\\otimes_{\\mathbb R}V)=\\dim_{\\mathbb R}V$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complexification-of-a-real-vector-space, thm-tensor-and-direct-sum-models-of-complexification-agree, thm-tensor-product-basis-from-bases, def-linear-basis, def-dimension, cor-complex-numbers-are-a-quadratic-real-extension]
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
---

## Statement

Let $V$ be a real vector space with ordered basis $\mathcal B=(v_1,\ldots,v_n)$. Then $(\iota v_1,\ldots,\iota v_n)$ is an ordered complex basis of the complexification $V_{\mathbb C}$ of [[def-complexification-of-a-real-vector-space]]. In particular, if $V$ is finite-dimensional then

$$\dim_{\mathbb C}(\mathbb C\otimes_{\mathbb R}V)=\dim_{\mathbb R}V.$$

## Facts & Assumptions

**Given:** A real vector space $V$ with ordered basis $(v_1,\ldots,v_n)$.

[L1] If $M$ and $N$ are free with bases $(e_i)$ and $(f_j)$, then $M\otimes N$ is free with basis $(e_i\otimes f_j)$ ([[thm-tensor-product-basis-from-bases]]).

[L2] The power basis $1,i$ is an $\mathbb R$-basis of $\mathbb C$, and $\mathbb C=\mathbb R(i)$ ([[cor-complex-numbers-are-a-quadratic-real-extension]]).

[L3] The canonical isomorphism $\Phi:\mathbb C\otimes_{\mathbb R}V\to V\oplus iV$ sends $z\otimes v$ to $z(v,0)$, with inverse $\Psi(v+iw)=1\otimes v+i\otimes w$ ([[thm-tensor-and-direct-sum-models-of-complexification-agree]]).

[L4] A basis is a linearly independent spanning set ([[def-linear-basis]]).

[L5] The dimension of a finite-dimensional vector space is the size of any of its bases ([[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $\{1,i\}$ is an $\mathbb R$-basis of $\mathbb C$, and by hypothesis $(v_1,\ldots,v_n)$ is an $\mathbb R$-basis of $V$; hence [L1] makes $\{1\otimes v_j,\ i\otimes v_j:j\le n\}$ an $\mathbb R$-basis of $\mathbb C\otimes_{\mathbb R}V$. [L1, L2, L4]

1.2 Transporting through the inverse isomorphism $\Psi$ of [L3], which sends $1\otimes v_j$ to $v_j$ and $i\otimes v_j$ to $iv_j$, the set $\{v_j,\ iv_j:j\le n\}$ is an $\mathbb R$-basis of $V\oplus iV$. [L3, algebra]

2.1 The vectors $v_1,\ldots,v_n$ span $V\oplus iV$ over $\mathbb C$: every element $v+iw$ is $\sum_ja_jv_j+i\sum_jb_jv_j=\sum_j(a_j+ib_j)v_j$ by the real basis expansion of step 1.2. [step 1.2, L4, algebra]

2.2 The vectors $v_1,\ldots,v_n$ are complex-linearly independent: if $\sum_j(a_j+ib_j)v_j=0$, then $(\sum_ja_jv_j,\sum_jb_jv_j)=(0,0)$, so the real independence in step 1.2 forces every $a_j=b_j=0$. [step 1.2, algebra]

3.1 Steps 2.1 and 2.2 make $(v_1,\ldots,v_n)$ an ordered complex basis of the direct-sum model, and applying $\Phi$ of [L3] carries it to the ordered complex basis $(\iota v_1,\ldots,\iota v_n)$ of $V_{\mathbb C}$. [step 2.1, step 2.2, L3, L4]

4.1 Both bases have exactly $n$ elements, so by [L5] the complex dimension of $V_{\mathbb C}$ equals the real dimension of $V$. [step 3.1, L5] ∎
