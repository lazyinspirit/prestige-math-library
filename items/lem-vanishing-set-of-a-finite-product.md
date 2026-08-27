---
id: lem-vanishing-set-of-a-finite-product
kind: lemma
title: "Vanishing sets of finite products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-prime-spectrum-and-vanishing-sets, def-sum-and-product-of-ideals, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, and let $I_1,\dots,I_n\trianglelefteq R$ with $n\ge 1$. Then $V(I_1\cdots I_n)=V(I_1)\cup\cdots\cup V(I_n)$.

## Facts & Assumptions

**Given:** A commutative ring $R$, ideals $I_1,\dots,I_n\trianglelefteq R$, and an integer $n\ge 1$.

[L1] $V(K)$ is the set of prime ideals containing $K$ ([[def-prime-spectrum-and-vanishing-sets]]).

[L2] A prime ideal contains a factor whenever it contains a product ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak p\in V(I_j)$ for some $j$, then $I_j\subseteq\mathfrak p$. Every element of $I_1\cdots I_n$ lies in $I_j$, so $I_1\cdots I_n\subseteq\mathfrak p$, and therefore $\mathfrak p\in V(I_1\cdots I_n)$. This proves $V(I_1)\cup\cdots\cup V(I_n)\subseteq V(I_1\cdots I_n)$. [L1, given, algebra]

1.2 Conversely, let $\mathfrak p\in V(I_1\cdots I_n)$ and suppose that no $I_j$ is contained in $\mathfrak p$. For each $j$, choose $a_j\in I_j\setminus\mathfrak p$. Then $a_1\cdots a_n\in I_1\cdots I_n\subseteq\mathfrak p$, so repeated use of [L2] forces some $a_j\in\mathfrak p$, a contradiction. Hence $I_j\subseteq\mathfrak p$ for some $j$, and $\mathfrak p\in V(I_j)$. [L1, L2, choose, algebra]

2.1 The two inclusions prove $V(I_1\cdots I_n)=V(I_1)\cup\cdots\cup V(I_n)$. [step 1.1, step 1.2] ∎
