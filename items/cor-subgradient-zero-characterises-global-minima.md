---
id: cor-subgradient-zero-characterises-global-minima
kind: corollary
title: "Zero is a subgradient exactly at a global minimum"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subgradient-and-subdifferential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 12"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
    - title: "D. Drusvyatskiy, Convex Analysis and Nonsmooth Optimization, Corollary 3.35"
      url: "https://sites.math.washington.edu/~ddrusv/crs/Math_516_2020/curr_notes.pdf"
pipeline_run: null
---

## Statement

Let $f:C\to\mathbb R$ be convex and let $a\in C$. Then $0\in\partial f(a)$ if and only if $f(a)\le f(y)$ for every $y\in C$.

## Facts & Assumptions

**Given:** The function and point in the Statement.

[F1] A vector $v$ is a subgradient of $f$ at $a$ when $f(y)\ge f(a)+\langle v,y-a\rangle$ for every $y$ in the domain ([[def-subgradient-and-subdifferential]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication, put $v=0$ in [F1]. The result is $f(y)\ge f(a)$ for every $y\in C$, exactly the global-minimum condition. [F1, algebra]

2.1 For the reverse implication, if $a$ is a global minimizer then $f(y)\ge f(a)=f(a)+\langle0,y-a\rangle$ for every $y$. This is [F1] with $v=0$, so $0\in\partial f(a)$. [F1, assume-hyp] ∎
