---
id: lem-nat-order-mult-compatible
kind: lemma
title: "Order is compatible with multiplication"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, def-nat-multiplication, lem-nat-mult-distributive, lem-nat-mult-commutative, lem-nat-no-zero-divisors, lem-nat-add-cancellative, lem-nat-add-commutative]
aliases: []
landmark: false
short: "$m\\le n\\Rightarrow mk\\le nk$; strict if $k\\neq0$"
proof_strategy: direct
verification:
  precheck: pass
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

For all $m, n, k \in \mathbb{N}$: if $m \le n$ then $m \cdot k \le n \cdot k$; and if in addition $k \ne 0$ and $m < n$, then $m \cdot k < n \cdot k$ ([[def-nat-order]]).

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists d\ (m + d = n)$, with $m < n$ meaning $m \le n$ and $m \ne n$ ([[def-nat-order]]); addition with $m + 0 = m$ ([[def-nat-addition]]); and multiplication with $m \cdot 0 = 0$, $m \cdot \sigma(n) = m \cdot n + m$ ([[def-nat-multiplication]]).

[L1] Right distributivity $(m + d) \cdot k = m \cdot k + d \cdot k$, from left distributivity and commutativity ([[lem-nat-mult-distributive]], [[lem-nat-mult-commutative]]).

[L2] No zero divisors: $d \ne 0$ and $k \ne 0 \Rightarrow d \cdot k \ne 0$ ([[lem-nat-no-zero-divisors]]).

[L3] Cancellation for addition: $x + k = y + k \Rightarrow x = y$ ([[lem-nat-add-cancellative]]).

[L4] Addition is commutative: $x + y = y + x$ ([[lem-nat-add-commutative]]).

## Proof

**Proof technique:** direct.

1.1 If $m \le n$, write $m + d = n$; then $n \cdot k = (m + d) \cdot k = m \cdot k + d \cdot k$ by right distributivity, so $m \cdot k \le n \cdot k$. [given, L1]

2.1 If moreover $m < n$ then $d \ne 0$, for $d = 0$ would give $n = m + 0 = m$, contradicting $m \ne n$; then with $k \ne 0$ we get $d \cdot k \ne 0$ by [L2], so $m \cdot k + d \cdot k = n \cdot k$ with $d \cdot k \ne 0$; and $m \cdot k \ne n \cdot k$, since equality would give $m \cdot k + d \cdot k = m \cdot k + 0$, hence $d \cdot k + m \cdot k = 0 + m \cdot k$ by [L4] and $d \cdot k = 0$ by [L3], a contradiction; therefore $m \cdot k < n \cdot k$. [step 1.1, given, L2, L3, L4] ∎
