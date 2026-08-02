---
id: cor-nat-addition-well-defined
kind: corollary
title: "Addition is a well-defined total operation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-recursion, def-natural-numbers, thm-omega-is-peano-system]
aliases: []
landmark: false
short: "$+$ total, well-defined"
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
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Statement

For each $m \in \mathbb{N}$ there is a unique function $s_m : \mathbb{N} \to \mathbb{N}$ with $s_m(0) = m$ and $s_m(\sigma(n)) = \sigma(s_m(n))$. Writing $m + n := s_m(n)$, addition $+ : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ is a well-defined total binary operation satisfying $m + 0 = m$ and $m + \sigma(n) = \sigma(m + n)$.

## Facts & Assumptions

**Given:** the natural numbers $\mathbb{N}$ with successor $\sigma$.

[L1] The recursion theorem: for a set $A$, an element $a \in A$, and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ ([[thm-recursion]]).

[L2] $(\mathbb{N}, 0, \sigma)$ is a Peano system ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 Fix $m \in \mathbb{N}$; since $(\mathbb{N}, 0, \sigma)$ is a Peano system [L2], apply the recursion theorem with $A = \mathbb{N}$, $a = m$, and $f = \sigma$: there is a unique function $s_m : \mathbb{N} \to \mathbb{N}$ with $s_m(0) = m$ and $s_m(\sigma(n)) = \sigma(s_m(n))$. [L1, L2]

2.1 Define $m + n := s_m(n)$; since $s_m$ is a total function on $\mathbb{N}$ for every $m \in \mathbb{N}$, the assignment $(m,n) \mapsto m + n$ is a well-defined function $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$. [step 1.1]

3.1 The recursion equations become $m + 0 = s_m(0) = m$ and $m + \sigma(n) = s_m(\sigma(n)) = \sigma(s_m(n)) = \sigma(m + n)$, the defining clauses of addition. [step 1.1, step 2.1] ∎
