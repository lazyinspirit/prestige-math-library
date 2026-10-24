---
id: ex-infinite-coin-toss-space
kind: example
title: "The infinite fair-coin-toss space"
status: published
origin: pipeline
deps: [thm-countable-product-of-probability-spaces, cor-coordinate-random-elements-on-a-countable-product-are-independent, def-countable-choice, def-dependent-choice]
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
    - title: "Kajino, Probability Theory, Example 3.66"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
---

## Example

Assume countable choice and dependent choice. Take $E_n=\{0,1\}$ with
$\mu_n(\{0\})=\mu_n(\{1\})=1/2$. On $\{0,1\}^{\mathbb N}$ with its
cylinder measure, $X_n(x)=x_n$ is the $n$th fair toss; for distinct
$n_1,\ldots,n_k$ and $a_j\in\{0,1\}$,

$$\mathbb P(X_{n_1}=a_1,\ldots,X_{n_k}=a_k)=2^{-k}.$$

## Verification

**Given:** Countable choice, dependent choice, and the fair Bernoulli laws.

1.1 The countable product theorem supplies the measure with the displayed finite product marginals. [given]

2.1 Each specified coordinate atom has mass $1/2$, so the finite rectangle has mass $\prod_{j=1}^k(1/2)=2^{-k}$; the coordinates are independent by the coordinate-independence corollary. [algebra] ∎
