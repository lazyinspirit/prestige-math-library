---
id: cor-nat-addition-well-defined
kind: corollary
title: "Addition is a well-defined total operation"
status: published
origin: session
deps: [thm-recursion, def-natural-numbers]
aliases: []
landmark: false
short: "$+$ total, well-defined"
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
pipeline_run: null
---

## Statement

For each $m \in \mathbb{N}$ there is a unique function $s_m : \mathbb{N} \to \mathbb{N}$ with $s_m(0) = m$ and $s_m(\sigma(n)) = \sigma(s_m(n))$. Writing $m + n := s_m(n)$, addition $+ : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ is a well-defined total binary operation satisfying $m + 0 = m$ and $m + \sigma(n) = \sigma(m + n)$.

## Facts & Assumptions

**Given:** the natural numbers $\mathbb{N}$ with successor $\sigma$.

[L1] The recursion theorem: for a set $A$, an element $a \in A$, and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ ([[thm-recursion]]).

## Proof

**Proof technique:** direct.

1.1 Fix $m \in \mathbb{N}$ and apply the recursion theorem with $A = \mathbb{N}$, $a = m$, and $f = \sigma$: there is a unique function $s_m : \mathbb{N} \to \mathbb{N}$ with $s_m(0) = m$ and $s_m(\sigma(n)) = \sigma(s_m(n))$. [L1]

2.1 Define $m + n := s_m(n)$; since $s_m$ is a total function on $\mathbb{N}$ for every $m \in \mathbb{N}$, the assignment $(m,n) \mapsto m + n$ is a well-defined function $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$. [step 1.1]

3.1 The recursion equations become $m + 0 = s_m(0) = m$ and $m + \sigma(n) = s_m(\sigma(n)) = \sigma(s_m(n)) = \sigma(m + n)$, the defining clauses of addition. [step 1.1, step 2.1] ∎
