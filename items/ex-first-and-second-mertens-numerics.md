---
id: ex-first-and-second-mertens-numerics
kind: example
title: "Numerics for the first and second Mertens theorems"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-first-mertens-theorem-for-primes,
       thm-second-mertens-theorem-for-primes]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leo Goldmakher, A Quick Proof of Mertens' Theorem"
      url: "https://web.williams.edu/Mathematics/lg5/mertens.pdf"
pipeline_run: null
---

## Example

For $x=10,30,100$ the weighted and reciprocal prime sums compare with their
main terms as follows:

$$\begin{array}{c|c|c|c|c} x & \sum_{p\le x}\frac{\log p}{p} & \log x & \sum_{p\le x}\frac1p & \log\log x \\ \hline 10 & 1.312652 & 2.302585 & 1.176190 & 0.834032 \\ 30 & 2.302016 & 3.401197 & 1.533439 & 1.224128 \\ 100 & 3.369471 & 4.605170 & 1.802817 & 1.527180 \end{array}$$

## Facts & Assumptions

**Given:** The cutoffs $x=10,30,100$.

[L1] The first Mertens theorem controls $\sum_{p\le x}(\log p)/p$ by $\log x$
([[thm-first-mertens-theorem-for-primes]]).

[L2] The second Mertens theorem controls $\sum_{p\le x}1/p$ by $\log\log x$
([[thm-second-mertens-theorem-for-primes]]).

## Verification

**Proof technique:** direct.

1.1 Summing over the primes up to $10$, $30$, and $100$ gives the four numerical columns in the displayed table. [L1, L2, given, algebra]

2.1 At each of these three cutoffs, the reciprocal sum is numerically closer to $\log\log x$ than the weighted sum is to $\log x$. This small-range comparison is consistent with the nonzero bounded terms allowed by [L1] and [L2], but it is numerical evidence only and does not compare their asymptotic error strengths. [L1, L2, step 1.1] ∎
