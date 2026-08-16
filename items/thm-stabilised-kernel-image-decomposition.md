---
id: thm-stabilised-kernel-image-decomposition
kind: theorem
title: "A stabilised power splits the space into its kernel and image"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-kernel-and-rank-sequences-of-powers, thm-rank-nullity, def-internal-direct-sum]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Result 8.4"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism of a finite-dimensional vector space $V$. If $m\ge0$ and $\ker T^m=\ker T^{m+1}$, then
$$V=\ker T^m\oplus\operatorname{im}T^m.$$

## Facts & Assumptions

**Given:** An endomorphism $T$ of a finite-dimensional vector space $V$ and $m\ge0$ with $\ker T^m=\ker T^{m+1}$.

[L1] Once consecutive kernels agree at $m$, every later kernel equals $\ker T^m$ ([[lem-kernel-and-rank-sequences-of-powers]]).

[L2] Rank-nullity gives $\dim V=\dim\ker S+\dim\operatorname{im}S$ for an endomorphism $S$ ([[thm-rank-nullity]]).

[L3] For two subspaces, $V=U\oplus W$ exactly when $V=U+W$ and $U\cap W=\{0\}$ ([[def-internal-direct-sum]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in\ker T^m\cap\operatorname{im}T^m$, write $x=T^my$; then $T^{2m}y=0$, so [L1] gives $y\in\ker T^m$ and hence $x=0$. [L1, algebra]

2.1 By [L2] applied to $T^m$, the dimensions of $\ker T^m$ and $\operatorname{im}T^m$ sum to $\dim V$; with the zero intersection from step 1.1, their sum is therefore all of $V$. [step 1.1, L2, algebra]

3.1 Fact [L3] now gives the asserted internal direct sum, including $m=0$ and $V=0$. [step 1.1, step 2.1, L3] ∎
