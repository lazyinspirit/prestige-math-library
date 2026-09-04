---
id: cor-expectation-agrees-with-the-finite-weighted-sum
kind: corollary
title: "Expectation agrees with the published finite weighted sum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-change-of-variables-for-expectation, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, lem-finite-random-variables-are-measurable, def-expectation-on-a-finite-probability-space, lem-expectation-by-distribution]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $(\Omega,w)$ be a finite probability space and let $X:\Omega\to\mathbb R$.
After identifying $(\Omega,w)$ with the full-power-set probability space of
[[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]],
the expectation defined by
[[def-expectation-of-a-nonnegative-or-integrable-random-variable]] agrees with
the published finite formulas:
$$\mathbb E[X]=\sum_{\omega\in\Omega}X(\omega)w(\omega)=\sum_{x\in X(\Omega)}x\,\mathbb P(X=x).$$

## Facts & Assumptions

**Given:** A finite probability space $(\Omega,w)$ and a real-valued function
$X:\Omega\to\mathbb R$.

[L1] Finite probability spaces are exactly full-power-set probability spaces, and
every finite real random variable is measurable there
([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]],
[[lem-finite-random-variables-are-measurable]]).

[L2] Change of variables for expectation identifies $\mathbb E[X]$ with the
integral of the identity function against the law of $X$
([[thm-change-of-variables-for-expectation]]).

[L3] The published finite expectation is $\sum_{\omega\in\Omega}X(\omega)w(\omega)$,
and it is also the sum over attained values weighted by their probabilities
([[def-expectation-on-a-finite-probability-space]],
[[lem-expectation-by-distribution]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the general expectation and the law of $X$ are defined on the same full-power-set probability space attached to $(\Omega,w)$. [L1]

2.1 Applying [L2] to the identity map on $\mathbb R$ gives $$\mathbb E[X]=\int_{\mathbb R} x\,d\mathbb P_X.$$ For a finite random variable, [L3] identifies this quantity with both $$\sum_{\omega\in\Omega}X(\omega)w(\omega)\quad\text{and}\quad \sum_{x\in X(\Omega)}x\,\mathbb P(X=x).$$ [step 1.1, L2, L3]

3.1 Thus the general expectation is exactly the published finite weighted-sum expectation and its finite-distribution reformulation. [step 2.1] ∎
