---
id: ex-independent-but-not-identically-distributed-coordinate-sequence
kind: example
title: "Independent but non-identically distributed coordinates"
status: published
origin: pipeline
deps: [thm-countable-product-of-probability-spaces, cor-coordinate-random-elements-on-a-countable-product-are-independent, def-law-or-distribution-of-a-random-element, def-countable-choice, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Kajino, Probability Theory, Theorem 3.65"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
---

## Example

Assume countable choice and dependent choice. On $\{0,1\}^{\mathbb N}$ take the product whose $n$th coordinate has Bernoulli parameter $p_n=1/(n+2)$. Then the coordinates are independent but not identically distributed.

## Verification

**Given:** Countable choice, dependent choice, and the stated Bernoulli laws.

1.1 The countable-product theorem supplies the product probability under the stated choice principles. The coordinate-independence corollary applies to this sequence of Bernoulli laws and gives independence. [given]

2.1 $\mathbb P(X_0=1)=1/2$ while $\mathbb P(X_1=1)=1/3$. Hence their laws differ, so the independent family is not identically distributed. [algebra] ∎
