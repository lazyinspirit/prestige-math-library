---
id: lem-central-binomial-coefficient-bounds
kind: lemma
title: "Central binomial coefficient bounds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-binomial-coefficient,
       thm-binomial-theorem,
       lem-binomial-coefficients-symmetric-and-unimodal]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every natural number $n$,

$$
\frac{4^n}{2n+1}\le\binom{2n}{n}\le4^n.
$$

## Facts & Assumptions

**Given:** A natural number $n$.

[L1] The binomial theorem gives
$$
\sum_{k=0}^{2n}\binom{2n}{k}=(1+1)^{2n}=4^n
$$
([[thm-binomial-theorem]], [[def-binomial-coefficient]]).

[L2] The binomial coefficients in the $2n$th row are symmetric and unimodal, so
their maximum occurs at the central term $\binom{2n}{n}$
([[lem-binomial-coefficients-symmetric-and-unimodal]]).

## Proof

**Proof technique:** direct.

1.1 The upper bound is immediate from [L1], since $\binom{2n}{n}$ is one nonnegative term in a sum equal to $4^n$. [L1]

1.2 There are exactly $2n+1$ terms in the sum of [L1], and [L2] says that each of them is at most the central term $\binom{2n}{n}$. Therefore $ 4^n=\sum_{k=0}^{2n}\binom{2n}{k}\le(2n+1)\binom{2n}{n}. $ [L1, L2, algebra]

2.1 Rearranging step 1.2 gives the lower bound $ \frac{4^n}{2n+1}\le\binom{2n}{n}. $ Together with step 1.1 this proves the lemma. [step 1.1, step 1.2, algebra] ∎
