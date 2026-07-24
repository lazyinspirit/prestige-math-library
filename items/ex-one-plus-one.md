---
id: ex-one-plus-one
kind: example
title: "$1+1=2$ from the recursion"
status: published
origin: session
deps: [def-nat-addition, def-natural-numbers]
aliases: []
landmark: false
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

## Example

With $1 = \sigma(0)$ and $2 = \sigma(1) = \sigma(\sigma(0))$, the recursive
definition of addition gives $1 + 1 = 2$. This is the archetypal proof by
unfolding a recursive definition.

## Facts & Assumptions

**Given:** addition $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]); numerals $1 = \sigma(0)$, $2 = \sigma(1)$ ([[def-natural-numbers]]).

## Verification

**Proof technique:** direct.

1.1 By definition $1 = \sigma(0)$ and $2 = \sigma(1) = \sigma(\sigma(0))$. [given]

1.2 $1 + 0 = 1$, by $m + 0 = m$ with $m = 1$. [given]

2.1 $1 + 1 = 1 + \sigma(0) = \sigma(1 + 0)$, by $m + \sigma(n) = \sigma(m + n)$ with $m = 1$, $n = 0$. [step 1.1, given]

3.1 Hence $1 + 1 = \sigma(1 + 0) = \sigma(1) = 2$. [step 2.1, step 1.2] ∎
