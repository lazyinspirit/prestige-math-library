---
id: cor-covariance-vanishes-under-independence
kind: corollary
title: "Independence forces covariance to vanish"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-factorization-of-expectations-for-independent-variables, def-moments-variance-and-covariance, lem-variance-and-covariance-identities-for-random-variables]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.1.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

If $X$ and $Y$ are independent square-integrable real random variables, then
$$\operatorname{Cov}(X,Y)=0.$$

Thus independence implies zero covariance. The converse is false in general.

## Facts & Assumptions

**Given:** Independent square-integrable real random variables $X$ and $Y$.

[L1] Expectations factor for products of integrable independent random
variables. ([[thm-factorization-of-expectations-for-independent-variables]])

[L2] Covariance satisfies
$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$.
([[def-moments-variance-and-covariance]],
[[lem-variance-and-covariance-identities-for-random-variables]])

## Proof

**Proof technique:** direct.

1.1 Since $X$ and $Y$ are square-integrable, they are integrable. Applying [L1] with $g_0(x)=x$ and $g_1(y)=y$ gives $$\mathbb E[XY]=\mathbb E[X]\mathbb E[Y].$$ [given, L1]

2.1 Substituting step 1.1 into [L2] yields $$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]=0.$$ [step 1.1, L2] ∎
