---
id: cor-primitive-sums-of-two-squares-closed-under-products
kind: corollary
title: "Primitive sums of two squares are closed under products unless both factors are even"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primitive-sum-of-two-squares-characterisation, lem-p-adic-valuation-additive, lem-p-adic-valuation-basic]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Corollary E.II.8(a)"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $m,n$ be positive integers that have primitive two-square representations. If $m$ and $n$ are not both even, then $mn$ has a primitive two-square representation.

## Facts & Assumptions

**Given:** Positive primitively represented integers $m,n$.

[L1] A positive integer $n$ has a primitive two-square representation if and only if $v_2(n)\le1$ and no prime $q\equiv3\pmod4$ divides $n$ ([[thm-primitive-sum-of-two-squares-characterisation]]).

[L2] For nonzero integers $a,b$, $v_p(ab)=v_p(a)+v_p(b)$ ([[lem-p-adic-valuation-additive]]).

[L3] For a prime $p$ and a nonzero integer $a$, $v_p(a)\ge1$ if and only if $p\mid a$ ([[lem-p-adic-valuation-basic]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L3], every prime congruent to three modulo four has valuation zero in each factor. By [L2], its valuation in the product is zero, so [L3] shows that it does not divide the product. [given, L1, L2, L3]

1.2 Again by [L1]–[L3], $v_2(mn)=v_2(m)+v_2(n)\le1$ because at least one of $m,n$ is odd and therefore has $2$-adic valuation zero. [given, L1, L2, L3, algebra]

2.1 The two conditions in [L1] hold for $mn$, so the product has a primitive two-square representation. [step 1.1, step 1.2, L1] ∎
