---
id: ex-independent-but-not-identically-distributed-coordinate-sequence
kind: example
title: "Independent but non-identically distributed coordinates"
status: published
origin: pipeline
deps: [cor-coordinate-random-elements-on-a-countable-product-are-independent, def-law-or-distribution-of-a-random-element]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kajino, Probability Theory, Theorem 3.65"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
---

## Example

On $\{0,1\}^{\mathbb N}$ take the product whose $n$th coordinate has Bernoulli parameter $p_n=1/(n+2)$. Then the coordinates are independent but not identically distributed.

## Verification

**Given:** The stated Bernoulli product law.

1.1 The coordinate-independence corollary applies to this sequence of Bernoulli laws and gives independence. [given]

2.1 $\mathbb P(X_0=1)=1/2$ while $\mathbb P(X_1=1)=1/3$. Hence their laws differ, so the independent family is not identically distributed. [algebra] ∎
