---
id: ex-canonical-random-walk-from-product-increments
kind: example
title: "A canonical random walk from product increments"
status: published
origin: pipeline
deps: [thm-countable-product-of-probability-spaces, cor-coordinate-random-elements-on-a-countable-product-are-independent, def-stochastic-process-and-finite-dimensional-distributions, def-countable-choice, def-dependent-choice]
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
    - title: "Durrett, Probability: Theory and Examples, Section 2.1.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume countable choice and dependent choice. On the product space
$\Omega=\{0,1\}^{\mathbb N}$, give each coordinate the fair Bernoulli law
and use the product probability measure of
[[thm-countable-product-of-probability-spaces]]. Write $X_n(x)=x_n$, set
$\xi_n=2X_n-1\in\{-1,1\}$, and put $S_0=0$ and
$S_n=\sum_{r=0}^{n-1}\xi_r$ for $n\ge1$. The process $(S_n)_{n\ge0}$ is
the canonical simple random walk built from independent increments.

## Verification

**Given:** Countable choice, dependent choice, and the fair Bernoulli
coordinate laws.

[F1] The countable product theorem supplies the product probability measure
with its prescribed finite marginals
([[thm-countable-product-of-probability-spaces]]).

[F2] Its coordinate maps are independent
([[cor-coordinate-random-elements-on-a-countable-product-are-independent]]).

1.1 The countable product theorem gives the probability measure with fair Bernoulli coordinate marginals. The coordinate-independence corollary makes the $X_n$ independent. Thus the signs $\xi_n$ are independent, with $\mathbb P(\xi_n=1)=\mathbb P(\xi_n=-1)=1/2$. [F1, F2, given]

2.1 For any finite list of distinct increment times, their joint law is the uniform law on the corresponding sign vectors. The process coordinates are the partial sums of these increments, not the increments themselves. [step 1.1] ∎
