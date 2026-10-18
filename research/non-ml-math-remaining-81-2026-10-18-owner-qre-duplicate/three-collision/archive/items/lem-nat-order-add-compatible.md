---
id: lem-nat-order-add-compatible
kind: lemma
title: "Order is compatible with addition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative]
aliases: []
landmark: false
short: "$m\\le n\\iff m+k\\le n+k$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Statement

For all $m, n, k \in \mathbb{N}$: $m \le n \iff m + k \le n + k$; and $m < n \iff m + k < n + k$ ([[def-nat-order]]).

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists j\ (m + j = n)$ ([[def-nat-order]]) and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] Addition is associative and commutative ([[lem-nat-add-associative]], [[lem-nat-add-commutative]]).

[L2] Cancellation: $m + k = n + k \Rightarrow m = n$ ([[lem-nat-add-cancellative]]).

## Proof

**Proof technique:** direct.

1.1 Forward: if $m \le n$, say $m + j = n$, then $(m + k) + j = (m + j) + k = n + k$, so $m + k \le n + k$. [given, L1]

1.2 Backward: if $m + k \le n + k$, say $(m + k) + j = n + k$, then $(m + j) + k = n + k$, so $m + j = n$ by cancellation, giving $m \le n$. [given, L1, L2]

2.1 The strict forms follow: $m < n$ means $m \le n$ and $m \ne n$, while $m + k = n + k \iff m = n$ by cancellation, so $m < n \iff m + k < n + k$. [step 1.1, step 1.2, L2] ∎
