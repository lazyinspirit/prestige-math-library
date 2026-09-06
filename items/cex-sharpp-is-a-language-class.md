---
id: cex-sharpp-is-a-language-class
kind: counterexample
title: "NumberSAT is not a Boolean membership predicate"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-number-sat, fs-sharpp-is-a-language-class]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

With declared variables $(x,y)$, let
$\varphi=x\lor y$ and
$\psi=(x\lor y)\land(\neg x\lor\neg y)$. Then NumberSAT returns $3$ and $2$,
respectively, although the SAT membership predicate returns yes on both.

## Facts & Assumptions

**Given:** the two displayed formulas and their declared-variable lists.

[L1] NumberSAT is a numerical function rather than a Boolean predicate. by [[def-number-sat]].

## Counterexample

**Proof technique:** direct.

1.1 Exactly three assignments satisfy $x\lor y$. Exactly the two assignments with unequal bits satisfy $(x\lor y)\land(\neg x\lor\neg y)$. Hence [L1] gives outputs $3$ and $2$, neither in the Boolean codomain $\{0,1\}$. [L1, given, algebra]

2.1 Both counts are positive, so the associated SAT predicate maps both inputs to yes. It therefore discards information that NumberSAT retains. [step 1.1]

3.1 These explicit values show that NumberSAT is a numerical function, not a Boolean membership predicate. [L1, step 1.1, step 2.1] ∎
