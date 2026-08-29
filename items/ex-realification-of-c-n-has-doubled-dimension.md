---
id: ex-realification-of-c-n-has-doubled-dimension
kind: example
title: "Realifying $\\mathbb C^n$ gives $\\mathbb R^{2n}$ with basis $e_1,ie_1,\\dots,e_n,ie_n$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-realification-of-a-complex-vector-space, cor-realification-doubles-finite-dimension]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Example

The realification $(\mathbb C^n)_{\mathbb R}$ of the complex coordinate space has real dimension $2n$. Writing the standard complex basis vectors as $e_1,\ldots,e_n$, an explicit real basis is

$$e_1,\ ie_1,\ e_2,\ ie_2,\ \ldots,\ e_n,\ ie_n,$$

so $(\mathbb C^n)_{\mathbb R}\cong\mathbb R^{2n}$ by sending $e_j$ to $e_{2j-1}$ and $ie_j$ to $e_{2j}$ of $\mathbb R^{2n}$.

## Facts & Assumptions

**Given:** The complex vector space $\mathbb C^n$ with standard basis $e_1,\ldots,e_n$.

[L1] The realification $W_{\mathbb R}$ is the real vector space with the same underlying set and addition as $W$, and scalar multiplication restricted to $\mathbb R\subseteq\mathbb C$ ([[def-realification-of-a-complex-vector-space]]).

[L2] If $W$ is finite-dimensional over $\mathbb C$ with $\dim_{\mathbb C}W=n$, then $\dim_{\mathbb R}W_{\mathbb R}=2n$ ([[cor-realification-doubles-finite-dimension]]).

## Verification

**Proof technique:** direct.

1.1 The standard basis has $n$ elements, so $\dim_{\mathbb C}\mathbb C^n=n$. [given]

1.2 The displayed list spans $(\mathbb C^n)_{\mathbb R}$: every $w=\sum_jz_je_j$ writes $z_j=a_j+ib_j$ with real $a_j,b_j$, and by [L1] scalar multiplication by the real parts is real scalar multiplication, giving $w=\sum_ja_je_j+\sum_jb_j(ie_j)$. [L1, algebra]

2.1 By [L2], $\dim_{\mathbb R}(\mathbb C^n)_{\mathbb R}=2n$. [L2, step 1.1]

2.2 The list is real-linearly independent: $\sum_ja_je_j+\sum_jb_j(ie_j)=0$ means $\sum_j(a_j+ib_j)e_j=0$ in $\mathbb C^n$, so complex independence of $(e_1,\ldots,e_n)$ forces every $a_j=b_j=0$. [step 1.2, algebra]

3.1 Steps 1.2 and 2.2 exhibit the displayed list as a real basis with $2n$ entries, matching the dimension of step 2.1; the coordinate map identifies it with $\mathbb R^{2n}$. [step 1.2, step 2.1, step 2.2] ∎
