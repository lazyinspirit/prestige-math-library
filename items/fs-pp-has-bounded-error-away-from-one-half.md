---
id: fs-pp-has-bounded-error-away-from-one-half
kind: false-statement
title: "FALSE: every PP algorithm has bounded error separated from one half by a fixed constant"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rp-corp-zpp-bpp-and-pp]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Every PP algorithm has bounded error separated from one half by a fixed constant.

## Facts & Assumptions

**Given:** the class PP.

[L1] A PP machine need only accept yes-instances with probability strictly greater than $1/2$ and no-instances with probability at most $1/2$ ([[def-rp-corp-zpp-bpp-and-pp]]).

## Refutation

**Proof technique:** direct.

1.1 Let $A:=\{x\in\{0,1\}^*: x\text{ begins with }1\}$. Its deterministic membership test $D(x)$ is computable in linear time. Consider the probabilistic machine that uses one fair bit $b$ and an independent string $r\in\{0,1\}^{n+1}$, accepts when $D(x)=1$ and either $b=1$ or $r=0^{n+1}$, and accepts when $D(x)=0$ exactly if $b=1$ and $r\ne 0^{n+1}$. Then yes-instances are accepted with probability $1/2+2^{-(n+2)}$, while no-instances are accepted with probability $1/2-2^{-(n+2)}$. [L1, given, construct]

2.1 Step 1.1 still satisfies the PP threshold condition [L1], but the gap from $1/2$ shrinks with $n$ and is not bounded below by any fixed positive constant. So the statement is false. [L1, step 1.1, algebra] ∎
