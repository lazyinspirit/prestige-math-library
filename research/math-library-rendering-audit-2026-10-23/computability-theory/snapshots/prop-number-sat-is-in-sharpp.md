---
id: prop-number-sat-is-in-sharpp
kind: proposition
title: "NumberSAT belongs to Sharp-P"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sharpp-and-gap-p-functions, def-number-sat]
proof_strategy: direct
verification:
  audited: 2026-09-07
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

$\mathrm{NumberSAT}$ belongs to $\#\mathrm P$.

## Facts & Assumptions

**Given:** an encoded formula with its ordered declared-variable list.

[L1] #P counts accepting paths of a binary nondeterministic polynomial-time machine. by [[def-sharpp-and-gap-p-functions]].

## Proof

**Proof technique:** direct.

1.1 First check the formula syntax and declared-variable list deterministically; on malformed input reject without making a nondeterministic choice. On a valid input with $n$ declared variables, make exactly $n$ binary choices, interpret them in the declared order as an assignment, evaluate the formula, and accept exactly when it is true. [L1, given, construct]

2.1 The $2^n$ computation paths are in bijection with the $2^n$ declared assignments, and a path accepts exactly when its assignment satisfies the formula. At $n=0$ there is one path, corresponding to the empty assignment; malformed input has no accepting path. Thus the accepting-path count is exactly $\mathrm{NumberSAT}(\varphi)$. [L1, step 1.1]

3.1 The machine runs in polynomial time, so its counting function belongs to $\#\mathrm P$ by [L1]. [L1, step 2.1] ∎
