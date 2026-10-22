---
id: lem-rat-inverse-well-defined
kind: lemma
title: "The reciprocal on the rationals is well-defined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rationals, def-rat-operations, thm-int-comm-ring]
aliases: []
landmark: false
short: "$[(a,b)]^{-1}:=[(b,a)]$ well-defined"
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
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
proof_strategy: direct
---

## Statement

On $\mathbb{Q} \setminus \{0\}$ the reciprocal $[(a,b)]^{-1} := [(b,a)]$
([[def-rat-operations]]) is independent of the chosen representative: if
$(a,b) \sim (a',b')$ with $a, a', b, b' \ne 0$, then $(b,a) \sim (b',a')$. Hence
the reciprocal is a well-defined function on $\mathbb{Q} \setminus \{0\}$.

## Facts & Assumptions

**Given:** Nonzero rationals represented by integer pairs $(a,b)$ and $(a',b')$ with $a, a', b, b' \ne 0$, where $(x,y) \sim (z,w) \iff x w = z y$ in $\mathbb{Z}$ ([[def-rationals]]).

[L1] Multiplication in $\mathbb{Z}$ is commutative ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis $(a,b) \sim (a',b')$, that is $a b' = a' b$ in $\mathbb{Z}$. [given]

2.1 Commuting each product by [L1], $b' a = b a'$, hence $b a' = b' a$. [step 1.1, L1]

3.1 The equation $b a' = b' a$ is exactly the defining relation $(b,a) \sim (b',a')$, and since $a, a' \ne 0$ the pairs $(b,a), (b',a')$ are legal rational representatives; therefore $[(a,b)]^{-1} = [(b,a)] = [(b',a')] = [(a',b')]^{-1}$, so the reciprocal is well-defined on $\mathbb{Q} \setminus \{0\}$. [step 2.1, given] ∎
