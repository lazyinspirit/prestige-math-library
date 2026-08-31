---
id: ex-k-to-the-minus-a-membership-in-ell-p
kind: example
title: "$k^{-a}$ membership in $\\ell^p$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-ell-p-is-l-p-of-counting-measure, thm-p-series-real-exponents]
proof_strategy: "Apply the real p-series test to the series sum k^(-ap) and read off the threshold ap > 1."
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorems 8.12 and 8.13"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, Chapter 17"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

For $a>0$, define a sequence on $\mathbb N$ by
$a_0:=0$ and $a_k:=k^{-a}$ for $k\ge1$. Then $(a_k)_{k\ge0}$ belongs to
$\ell^p$ exactly when

$$ap>1.$$

## Facts & Assumptions

**Given:** Real numbers $a>0$ and $p>0$.

[L1] $\ell^p$ is the counting-measure version of $L^p$
([[rem-ell-p-is-l-p-of-counting-measure]]).

[L2] The real $p$-series $\sum_{k\ge1} k^{-s}$ converges exactly when $s>1$
([[thm-p-series-real-exponents]]).

## Verification

**Proof technique:** Apply the real $p$-series test to the series
$\sum k^{-ap}$ and read off the threshold $ap>1$.

1.1 By [L1], the sequence $(a_k)$ lies in $\ell^p$ exactly when [L1, given]
$$\sum_{k=0}^\infty |a_k|^p=\sum_{k=1}^\infty k^{-ap}$$
converges.

2.1 By [L2], that series converges exactly when $ap>1$. [L2, step 1.1] ∎
