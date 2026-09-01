---
id: ex-third-mertens-product-numerics
kind: example
title: "Numerics for the third Mertens theorem"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-euler-mascheroni-constant,
       thm-third-mertens-theorem-for-primes]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Terence Tao, Mertens' theorems"
      url: "https://terrytao.wordpress.com/2013/12/11/mertens-theorems/"
pipeline_run: null
---

## Example

For $x=10,30,100$ the finite Euler product and its main term $e^{-\gamma}/\log
x$ are

$$\begin{array}{c|c|c} x & \prod_{p\le x}(1-1/p) & e^{-\gamma}/\log x \\ \hline 10 & 0.228571 & 0.243839 \\ 30 & 0.157947 & 0.165077 \\ 100 & 0.120317 & 0.121919 \end{array}$$

## Facts & Assumptions

**Given:** The cutoffs $x=10,30,100$.

[L1] The third Mertens theorem gives
$$\prod_{p\le x}\left(1-\frac1p\right) =\frac{e^{-\gamma}}{\log x}\left(1+O(1/\log x)\right)$$
([[thm-third-mertens-theorem-for-primes]]).

[L2] The constant $\gamma$ is the Euler-Mascheroni constant
([[def-euler-mascheroni-constant]]).

## Verification

**Proof technique:** direct.

1.1 Multiplying the Euler factors over the primes up to each cutoff and evaluating the comparison term $e^{-\gamma}/\log x$ gives the displayed table. [L1, L2, given, algebra]

2.1 The agreement improves across this short range, but the table is numerical evidence only. The exact constant $e^{-\gamma}$ on the A page comes from the Gamma-side analytic computation, not from the data itself. [L1, step 1.1] ∎
