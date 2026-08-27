---
id: lem-vanishing-set-identities
kind: lemma
title: "Vanishing-set identities"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-prime-spectrum-and-vanishing-sets, lem-vanishing-set-of-an-arbitrary-sum, lem-vanishing-set-of-a-finite-product]
justified_by: []
aliases: []
landmark: true
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
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring.

1. $V((0))=\operatorname{Spec}(R)$.
2. $V(R)=\varnothing$.
3. For every family $(I_\lambda)_{\lambda\in\Lambda}$ of ideals,
   $$
   V\!\left(\sum_{\lambda\in\Lambda} I_\lambda\right)=\bigcap_{\lambda\in\Lambda}V(I_\lambda).
   $$
4. For every finite family $I_1,\dots,I_n$ of ideals with $n\ge 1$,
   $$
   V(I_1\cdots I_n)=V(I_1)\cup\cdots\cup V(I_n).
   $$

## Facts & Assumptions

**Given:** A commutative ring $R$.

[L1] $V(K)$ is the set of prime ideals containing $K$ ([[def-prime-spectrum-and-vanishing-sets]]).

[L2] Vanishing sets turn arbitrary sums into intersections ([[lem-vanishing-set-of-an-arbitrary-sum]]).

[L3] Vanishing sets turn finite products into unions ([[lem-vanishing-set-of-a-finite-product]]).

## Proof

**Proof technique:** direct.

1.1 Every prime ideal contains $0$, so $V((0))=\operatorname{Spec}(R)$. No prime ideal equals the whole ring, so no prime ideal contains $R$; hence $V(R)=\varnothing$. [L1, given]

1.2 The arbitrary-sum identity is exactly [L2], and the finite-product identity is exactly [L3]. [L2, L3]

2.1 Steps 1.1 and 1.2 supply the four listed vanishing-set identities. [step 1.1, step 1.2] ∎
