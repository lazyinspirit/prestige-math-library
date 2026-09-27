---
id: fs-every-many-one-reduction-is-parsimonious
kind: false-statement
title: "Every decision many-one reduction is parsimonious"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-polynomial-time-many-one-reduction, def-parsimonious-reduction]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

Every polynomial-time many-one reduction between decision problems preserves
the exact number of witnesses.

## Facts & Assumptions

**Given:** On binary inputs $w$, let $f(w)$ count the sole witness $\varepsilon$ and let $g(w)$ count the two witnesses $0$ and $1$. These are counting functions with $f(w)=1$ and $g(w)=2$ for every $w$; their associated decision languages, defined by positive count, are both $\{0,1\}^*$.

[L1] A decision many-one reduction need preserve only membership, by [[def-polynomial-time-many-one-reduction]].

[L2] A parsimonious reduction preserves exact counts, by [[def-parsimonious-reduction]].

## Refutation

**Proof technique:** direct.

1.1 Let $r(w)=w$ for every binary word $w$. This is a total linear-time map. The two positive-count decision languages are both $\{0,1\}^*$, so $r$ is a many-one reduction between them by [L1]. [L1, given, construct]

2.1 For every $w$, the source has exactly one accepting witness $\varepsilon$, whereas the target has exactly the two accepting witnesses $0,1$. Hence $f(w)=1\ne2=g(r(w))$, so $r$ is not parsimonious under [L2]. Both witness relations are decidable in constant time once their witness is read. [L2, given, step 1.1]

3.1 This one polynomial-time decision reduction refutes the universal claim. [step 1.1, step 2.1] ∎
