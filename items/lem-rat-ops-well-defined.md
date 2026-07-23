---
id: lem-rat-ops-well-defined
kind: lemma
title: "Rational arithmetic is well defined"
status: published
origin: session
deps: [def-rationals, def-rat-operations, thm-int-comm-ring]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Sum, product, and negation of [[def-rat-operations]] are independent of the
chosen representatives.

## Facts & Assumptions

**Given:** Pairs with $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$ ([[def-rationals]]), all second components nonzero.

[L1] $\mathbb{Z}$ is a commutative ring ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis $ab' = a'b$ and $cd' = c'd$. [given]

2.1 Product: $(ac)(b'd') = (ab')(cd') = (a'b)(c'd) = (a'c')(bd)$, so $(ac,\, bd) \sim (a'c',\, b'd')$. [step 1.1, L1]

2.2 Sum: $(ad + cb)(b'd') = (ab')(dd') + (cd')(bb') = (a'b)(dd') + (c'd)(bb') = (a'd' + c'b')(bd)$, so $(ad+cb,\, bd) \sim (a'd'+c'b',\, b'd')$. [step 1.1, L1]

2.3 Negation: from $ab' = a'b$, $(-a)b' = (-a')b$, so $(-a, b) \sim (-a', b')$. [step 1.1, L1]

3.1 All three operations are independent of representatives. [step 2.1, step 2.2, step 2.3] ∎
