---
id: cor-distinct-partitions-have-product-generating-function
kind: corollary
title: "Distinct-part product generating function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-partition-counting-functions-and-restricted-families,
       thm-powerset-product-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

$$\sum_{n \ge 0} p_{\mathrm{dist}}(n)x^n = \prod_{m \ge 1}(1+x^m).$$

## Facts & Assumptions

**Given:** one abstract object $u_m$ of size $m$ for each integer $m \ge 1$.

[F1] The empty partition has distinct parts, and a nonempty partition into
distinct parts chooses each positive part size at most once
([[def-partition-counting-functions-and-restricted-families]]).

[L1] If a combinatorial class has one object of each positive size $m$ in a permitted layer, then its powerset construction contributes the factor $(1+x^m)$ at size $m$ ([[thm-powerset-product-formula]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], a partition into distinct parts is exactly a subset of the set $\{u_1,u_2,\dots\}$: include $u_m$ when the part $m$ occurs, and omit it otherwise. The total size of the chosen subset is the sum of the selected part sizes. [F1, construct]

2.1 Applying [L1] to the class with one object $u_m$ in each positive size $m$ gives one factor $(1+x^m)$ for every $m \ge 1$. Step 1.1 identifies the resulting powerset objects with distinct-part partitions, so their generating function is $\prod_{m \ge 1}(1+x^m)$. [step 1.1, L1] ∎
