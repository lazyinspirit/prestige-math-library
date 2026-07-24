---
id: lem-nat-trichotomy
kind: lemma
title: "Trichotomy of the order on $\\mathbb{N}$"
status: published
origin: session
deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-successor-left, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, thm-omega-is-peano-system, thm-induction-principle]
aliases: []
landmark: false
short: "exactly one of $<,=,>$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $m > n$ holds. In particular the order ([[def-nat-order]]) is total.

## Facts & Assumptions

**Given:** The order on $\mathbb{N}$, where $m \le n$ means $\exists k\ (m + k = n)$ and $m < n$ means $m \le n$ with $m \ne n$ ([[def-nat-order]]), and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] $0 + k = k$ ([[lem-nat-add-identity]]).

[L2] Left successor law: $\sigma(a) + k = \sigma(a + k)$ ([[lem-nat-add-successor-left]]).

[L3] Addition is associative ([[lem-nat-add-associative]]).

[L4] Every nonzero natural is a successor: $n \ne 0 \Rightarrow n = \sigma(a)$ for some $a$ ([[lem-nat-nonzero-is-successor]]).

[L5] $\sigma(x) \ne 0$ for every $x$ (axiom P1 of [[thm-omega-is-peano-system]]).

[L6] Cancellation: $x + k = y + k \Rightarrow x = y$ ([[lem-nat-add-cancellative]]).

[L7] Addition is commutative ([[lem-nat-add-commutative]]).

## Proof

**Proof technique:** induction.

1.1 At most one of the three holds where equality is involved: $m < n$ forces $m \ne n$ and $m > n$ forces $n \ne m$, so $m = n$ is incompatible with either strict relation. [given]

1.2 The two strict relations are incompatible: if $m < n$ and $m > n$ then $m + j = n$ and $n + i = m$ with $i, j \ne 0$, so $m + (j + i) = (m + j) + i = n + i = m = m + 0$; by commutativity [L7], $(j + i) + m = 0 + m$, so $j + i = 0$ by cancellation [L6]; yet $j = \sigma(a)$ [L4] gives, by the left successor law [L2], $j + i = \sigma(a) + i = \sigma(a + i) \ne 0$ [L5], a contradiction. [given, L2, L3, L4, L5, L6, L7]

1.3 For every $n$ one has $n < \sigma(n)$, since $n + \sigma(0) = \sigma(n + 0) = \sigma(n)$ by the recursion, with $\sigma(0) \ne 0$ [L5]. [given, L5]

1.4 Base case $n = 0$: for arbitrary $m$, either $m = 0$, giving $m = n$, or $m \ne 0$ so $0 + m = m$ [L1] with $m \ne 0$ gives $0 < m$, that is $n < m$; so at least one of $m < n$, $m = n$, $m > n$ holds. [base, L1, L4]

1.5 Inductive hypothesis: fix $n$ and assume that for every $m$ at least one of $m < n$, $m = n$, $m > n$ holds. [ih]

2.1 Successor step: for arbitrary $m$, apply the hypothesis; if $m < n$ then $n = m + k$ with $k \ne 0$, and the recursion gives $m + \sigma(k) = \sigma(m + k) = \sigma(n)$, so $\sigma(n) = m + \sigma(k)$ with $\sigma(k) \ne 0$ [L5], giving $m < \sigma(n)$; if $m = n$ then $m + \sigma(0) = \sigma(m + 0) = \sigma(m) = \sigma(n)$, so $\sigma(n) = m + \sigma(0)$ with $\sigma(0) \ne 0$, giving $m < \sigma(n)$; if $m > n$ then $m = n + i$ with $i \ne 0$, so $i = \sigma(a)$ [L4], and the recursion gives $n + \sigma(a) = \sigma(n + a)$ while the left successor law [L2] gives $\sigma(n) + a = \sigma(n + a)$, so $m = n + \sigma(a) = \sigma(n + a) = \sigma(n) + a$, whence $a = 0$ gives $m = \sigma(n)$ and $a \ne 0$ gives $\sigma(n) < m$; in every case at least one of $m < \sigma(n)$, $m = \sigma(n)$, $m > \sigma(n)$ holds. [step 1.5, given, L2, L4, L5]

3.1 By the induction principle with base 1.4, hypothesis 1.5, and step 2.1, comparability holds for all $m, n$, and with the incompatibilities 1.1 and 1.2 exactly one of $m < n$, $m = n$, $m > n$ holds, so the order is total. [step 1.1, step 1.2, step 1.4, step 2.1, discharge-induction] ∎
