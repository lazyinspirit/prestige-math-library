---
id: lem-nat-discrete
kind: lemma
title: "Discreteness: $\\sigma(n)$ is the immediate successor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-nonzero-is-successor, lem-nat-add-successor-left, lem-nat-add-cancellative, lem-nat-add-commutative, thm-omega-is-peano-system]
aliases: []
landmark: false
short: "$m<n\\iff\\sigma(m)\\le n$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

For all $m, n \in \mathbb{N}$: $m < n \iff \sigma(m) \le n$ ([[def-nat-order]]). Consequently there is no $k$ with $n < k < \sigma(n)$: the successor $\sigma(n)$ is the immediate successor of $n$.

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists j\ (m + j = n)$, with $m < n$ meaning $m \le n$ and $m \ne n$ ([[def-nat-order]]), and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] Every nonzero natural is a successor: $j \ne 0 \Rightarrow j = \sigma(i)$ ([[lem-nat-nonzero-is-successor]]).

[L2] $\sigma(m) + i = \sigma(m + i)$ (the left successor law, [[lem-nat-add-successor-left]]) and $m + \sigma(i) = \sigma(m + i)$ (the addition recursion).

[L3] Cancellation: $x + k = y + k \Rightarrow x = y$ ([[lem-nat-add-cancellative]]).

[L4] $\sigma(x) \ne 0$ for every $x$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).

[L5] Addition is commutative: $x + y = y + x$ ([[lem-nat-add-commutative]]).

## Proof

**Proof technique:** direct.

1.1 Forward: if $m < n$ then $m \le n$ and $m \ne n$, so $m + j = n$ for some $j$, with $j \ne 0$ since $j = 0$ would give $m = n$; then $j = \sigma(i)$ [L1] and $n = m + \sigma(i) = \sigma(m + i) = \sigma(m) + i$ [L2], hence $\sigma(m) \le n$. [given, L1, L2]

1.2 Backward: if $\sigma(m) \le n$ then $\sigma(m) + i = n$, so $n = \sigma(m) + i = \sigma(m + i) = m + \sigma(i)$ [L2], hence $m \le n$; and $m \ne n$, since $m = n$ would give $m + \sigma(i) = m = m + 0$, so $\sigma(i) + m = 0 + m$ by [L5] and $\sigma(i) = 0$ by [L3], contradicting [L4]; therefore $m < n$. [given, L2, L3, L4, L5]

2.1 No $k$ satisfies $n < k < \sigma(n)$: if $n < k$ then $\sigma(n) \le k$ by the equivalence, so $k \ge \sigma(n)$, contradicting $k < \sigma(n)$; thus $\sigma(n)$ is the immediate successor. [step 1.1, step 1.2] ∎
