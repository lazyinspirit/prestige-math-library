---
id: cor-nat-multiplication-well-defined
kind: corollary
title: "Multiplication is a well-defined total operation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-recursion, def-natural-numbers, def-nat-addition, thm-omega-is-peano-system]
aliases: []
landmark: false
short: "$\\cdot$ total, well-defined"
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

For each $m \in \mathbb{N}$ there is a unique function $p_m : \mathbb{N} \to \mathbb{N}$ with $p_m(0) = 0$ and $p_m(\sigma(n)) = p_m(n) + m$. Writing $m \cdot n := p_m(n)$, multiplication $\cdot : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ is a well-defined total binary operation satisfying $m \cdot 0 = 0$ and $m \cdot \sigma(n) = m \cdot n + m$.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with successor $\sigma$ and addition $+$ ([[def-nat-addition]]).

[L1] The recursion theorem ([[thm-recursion]]).

[L2] For fixed $m$, the map $\mathrm{add}_m : x \mapsto x + m$ is a function $\mathbb{N} \to \mathbb{N}$ ([[def-nat-addition]]).

[L3] $(\mathbb{N}, 0, \sigma)$ is a Peano system ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 Fix $m \in \mathbb{N}$; the map $\mathrm{add}_m : \mathbb{N} \to \mathbb{N}$, $\mathrm{add}_m(x) = x + m$, is a well-defined function. [L2]

2.1 Since $(\mathbb{N}, 0, \sigma)$ is a Peano system [L3], apply the recursion theorem with $A = \mathbb{N}$, $a = 0$, $f = \mathrm{add}_m$: there is a unique $p_m : \mathbb{N} \to \mathbb{N}$ with $p_m(0) = 0$ and $p_m(\sigma(n)) = \mathrm{add}_m(p_m(n)) = p_m(n) + m$. [L1, L3, step 1.1]

3.1 Define $m \cdot n := p_m(n)$; as $p_m$ is total for each $m \in \mathbb{N}$, the assignment $(m,n) \mapsto m \cdot n$ is a well-defined function $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$ with $m \cdot 0 = 0$ and $m \cdot \sigma(n) = m \cdot n + m$. [step 2.1] ∎
