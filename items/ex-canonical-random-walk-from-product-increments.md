---
id: ex-canonical-random-walk-from-product-increments
kind: example
title: "A canonical random walk from product increments"
status: published
origin: pipeline
deps: [ex-infinite-coin-toss-space, def-stochastic-process-and-finite-dimensional-distributions]
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
    - title: "Durrett, Probability: Theory and Examples, Section 2.1.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

On the fair-coin space set $\xi_n=2X_n-1\in\{-1,1\}$ and $S_0=0$, $S_n=\sum_{r=0}^{n-1}\xi_r$ for $n\ge1$. The process $(S_n)_{n\ge0}$ is the canonical simple random walk built from independent increments.

## Verification

**Given:** The fair-coin coordinate process.

1.1 The coin-toss example gives independent fair $X_n$, hence independent signs $\xi_n$ with $\mathbb P(\xi_n=1)=\mathbb P(\xi_n=-1)=1/2$. [given]

2.1 For any finite list of distinct increment times, their joint law is the uniform law on the corresponding sign vectors. The process coordinates are the partial sums of these increments, not the increments themselves. [step 1.1] ∎
