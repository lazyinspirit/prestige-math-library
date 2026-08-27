---
id: cor-odd-partitions-have-product-generating-function
kind: corollary
title: "Odd-part product generating function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-partition-counting-functions-and-restricted-families,
       thm-multiset-product-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Statement

In $\mathbb{Z}\llbracket x\rrbracket$,

$$\sum_{n \ge 0} p_{\mathrm{odd}}(n)x^n = \prod_{m \ge 1}(1-x^{2m-1})^{-1}.$$

## Facts & Assumptions

**Given:** one abstract object $v_m$ of size $2m-1$ for each integer $m \ge 1$.

[F1] The empty partition has odd parts, and a nonempty partition into odd parts
may use each odd part size with arbitrary multiplicity and uses no even part
size ([[def-partition-counting-functions-and-restricted-families]]).

[L1] If a combinatorial class has one object in each permitted positive size, its multiset construction contributes the geometric factor $(1-x^d)^{-1}$ for each allowed size $d$ ([[thm-multiset-product-formula]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], a partition into odd parts is exactly a multiset of the objects $v_1,v_2,\dots$: the multiplicity of $v_m$ records how often the odd part $2m-1$ occurs. The total size of the multiset is the sum of the odd parts. [F1, construct]

2.1 Applying [L1] to the class $\{v_1,v_2,\dots\}$ gives the product $\prod_{m \ge 1}(1-x^{2m-1})^{-1}$. Step 1.1 identifies its multiset objects with partitions into odd parts, so this is the generating function for $p_{\mathrm{odd}}(n)$. [step 1.1, L1] ∎
