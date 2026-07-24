---
id: lem-nat-mult-cancellative
kind: lemma
title: "Cancellation for multiplication by a nonzero factor"
deps: [def-nat-order, def-nat-multiplication, lem-nat-trichotomy, lem-nat-order-mult-compatible]
aliases: []
landmark: false
short: "$mk=nk,\\ k\\neq0\\Rightarrow m=n$"
status: published
origin: session
proof_strategy: contradiction
sources:
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
pipeline_run: null
---

## Statement

For all $m,n,k\in\mathbb{N}$ with $k\ne 0$: if $m\cdot k=n\cdot k$ then $m=n$.

## Facts & Assumptions

**Given:** multiplication defined by $m\cdot 0=0$ and $m\cdot\sigma(j)=m\cdot j+m$; the strict order $m<n\iff\exists j\ne 0\ (m+j=n)$.

[L1] Trichotomy: for all $m,n\in\mathbb{N}$ exactly one of $m<n$, $m=n$, $m>n$ holds ([[lem-nat-trichotomy]]).

[L2] Strict monotonicity: if $k\ne 0$ and $m<n$ then $m\cdot k<n\cdot k$ ([[lem-nat-order-mult-compatible]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $m\cdot k=n\cdot k$ with $k\ne 0$ but $m\ne n$. [assume-contra]

2.1 By trichotomy [L1], $m\ne n$ forces $m<n$ or $n<m$. [step 1.1, L1]

3.1 If $m<n$ then $m\cdot k<n\cdot k$ by [L2] (since $k\ne 0$); if $n<m$ then $n\cdot k<m\cdot k$ by [L2]; either way $m\cdot k\ne n\cdot k$. [step 2.1, L2]

4.1 This contradicts $m\cdot k=n\cdot k$, so the assumption $m\ne n$ is impossible and $m=n$. [step 1.1, step 3.1, discharge-contradiction] ∎
