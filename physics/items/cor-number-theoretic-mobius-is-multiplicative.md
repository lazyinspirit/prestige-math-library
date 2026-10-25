---
id: cor-number-theoretic-mobius-is-multiplicative
kind: corollary
title: "The number-theoretic Möbius function is multiplicative on coprime positive integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-number-theoretic-and-poset-mobius-agree, thm-mobius-function-of-a-product-poset, def-coprime, thm-fundamental-theorem-of-arithmetic, lem-poset-mobius-recurrence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Stanford Pairing-Based Cryptography notes, Möbius inversion"
      url: "https://crypto.stanford.edu/pbc/notes/numbertheory/mobius.html"
pipeline_run: null
---

## Statement

If $m,n$ are coprime positive integers, then

$$\mu(mn)=\mu(m)\mu(n).$$

## Facts & Assumptions

**Given:** Coprime positive integers $m,n$ ([[def-coprime]]).

[L1] Unique prime factorisation implies that coprime positive integers have disjoint prime supports, and every divisor of $mn$ has a unique product form $ab$ with $a\mid m$ and $b\mid n$ ([[thm-fundamental-theorem-of-arithmetic]]).

[L2] Möbius functions multiply on product posets ([[thm-mobius-function-of-a-product-poset]]).

[L3] $\mu(k)=\mu_{\mid}(1,k)$ for every positive integer $k$ ([[thm-number-theoretic-and-poset-mobius-agree]]).

[L4] Möbius values transport through poset isomorphisms because the diagonal and recurrence conditions uniquely determine them ([[lem-poset-mobius-recurrence]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $(a,b)\mapsto ab$ is a bijection from $[1,m]_{\mid}\times[1,n]_{\mid}$ to $[1,mn]_{\mid}$. It preserves and reflects divisibility coordinatewise, again by the disjoint prime supports, so it is a poset isomorphism. [L1, construct]

2.1 Apply the product theorem at the endpoints and transfer along the isomorphism by [L4]: $\mu_{\mid}(1,mn)=\mu_{\mid}(1,m)\mu_{\mid}(1,n)$. [step 1.1, L2, L4]

3.1 Replacing each poset value in step 2.1 by its number-theoretic value using [L3] yields $\mu(mn)=\mu(m)\mu(n)$. [step 2.1, L3] ∎
