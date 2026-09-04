---
id: lem-vanishing-set-of-an-arbitrary-sum
kind: lemma
title: "Vanishing sets of arbitrary sums"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-prime-spectrum-and-vanishing-sets, def-sum-and-product-of-ideals]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 The Spectrum of a Ring"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, and let $(I_\lambda)_{\lambda\in\Lambda}$ be a family of ideals of $R$. Write $\sum_{\lambda\in\Lambda} I_\lambda$ for the ideal of finite sums of elements drawn from the family, with the empty sum equal to $0$. Then
$$ V\!\left(\sum_{\lambda\in\Lambda} I_\lambda\right)=\bigcap_{\lambda\in\Lambda}V(I_\lambda). $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a family $(I_\lambda)_{\lambda\in\Lambda}$ of ideals of $R$.

[L1] $V(K)$ is the set of prime ideals containing the ideal $K$ ([[def-prime-spectrum-and-vanishing-sets]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak p\in V\!\left(\sum_{\lambda} I_\lambda\right)$, then $\sum_{\lambda} I_\lambda\subseteq\mathfrak p$. Since every $I_\lambda$ is contained in that sum, one has $I_\lambda\subseteq\mathfrak p$ for every $\lambda$, so $\mathfrak p\in V(I_\lambda)$ for all $\lambda$. [L1, given]

1.2 Conversely, if $\mathfrak p\in V(I_\lambda)$ for every $\lambda$, then each $I_\lambda$ lies in $\mathfrak p$. Because $\mathfrak p$ is an ideal, it contains every finite sum of elements coming from the family, hence it contains $\sum_{\lambda} I_\lambda$. Therefore $\mathfrak p\in V\!\left(\sum_{\lambda} I_\lambda\right)$. [L1, given, algebra]

2.1 Steps 1.1 and 1.2 prove the displayed equality. [step 1.1, step 1.2] ∎
