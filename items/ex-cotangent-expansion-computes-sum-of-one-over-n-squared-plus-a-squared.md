---
id: ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared
kind: example
title: "The cotangent expansion computes $\\sum_{n\\in\\mathbb Z} 1/(n^2+a^2)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-mittag-leffler-expansion-of-pi-cotangent]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Weber, Complex Analysis, Example 3.3.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Example

If $a\in\mathbb C$ and $a\notin i\mathbb Z$, then

$$\sum_{n\in\mathbb Z}\frac1{n^2+a^2}=\frac{\pi}{a}\coth(\pi a).$$

## Facts & Assumptions

**Given:** A complex number $a\notin i\mathbb Z$.

[L1] For $z\notin\mathbb Z$,
$\pi\cot(\pi z)=\sum_{n\in\mathbb Z}1/(z-n)$ in the symmetric Mittag-Leffler
sense ([[thm-mittag-leffler-expansion-of-pi-cotangent]]).

## Verification

**Proof technique:** direct.

1.1 Substitute $z=ia$ into [L1]. Since $$\frac1{ia-n}=\frac{-ia-n}{n^2+a^2},$$ the terms for $n$ and $-n$ combine to $-2ia/(n^2+a^2)$, while the $n=0$ term is $1/(ia)$. [L1, given, algebra]

2.1 Thus $$\pi\cot(\pi ia)=\frac1{ia}-2ia\sum_{n\ge1}\frac1{n^2+a^2} =-ia\sum_{n\in\mathbb Z}\frac1{n^2+a^2}.$$ Using $\cot(iw)=-i\coth(w)$ and dividing by $-ia$ gives the displayed closed form. [step 1.1, algebra] ∎
