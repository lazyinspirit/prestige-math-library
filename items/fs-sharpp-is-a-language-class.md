---
id: fs-sharpp-is-a-language-class
kind: false-statement
title: "Sharp-P is a language class"
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
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

$\#\mathrm P$ is a class of languages, so every member has only a Boolean
yes/no value on each input.

## Facts & Assumptions

**Given:** formulas $\varphi(x,y)=x\lor y$ and $\psi(x,y)=(x\lor y)\land(\neg x\lor\neg y)$, each with declared list $(x,y)$.

[L1] #P is defined as a class of numerical functions. by [[def-sharpp-and-gap-p-functions]].

## Refutation

**Proof technique:** direct.

1.1 By direct enumeration, $\mathrm{NumberSAT}(\varphi)=3$ and $\mathrm{NumberSAT}(\psi)=2$. NumberSAT is a $\#\mathrm P$ function, while neither $2$ nor $3$ is a Boolean membership value. [L1, given, algebra]

2.1 The associated decision language SAT retains only the predicate $\mathrm{NumberSAT}(\theta)>0$; it answers yes on both displayed formulas and forgets their distinct counts. [step 1.1]

3.1 Thus, under [L1], $\#\mathrm P$ is a numerical function class rather than a language class. [L1, step 1.1, step 2.1] ∎
