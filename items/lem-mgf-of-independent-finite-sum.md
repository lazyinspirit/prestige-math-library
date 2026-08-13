---
id: lem-mgf-of-independent-finite-sum
kind: lemma
title: "The moment generating function of a finite sum of independent variables is the product of their moment generating functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-moment-generating-function, def-independence-of-finite-random-variables, thm-finite-additivity-of-probability, lem-finite-sum-reindexing-and-fubini, thm-expectation-of-products-of-independent-random-variables, thm-exponential-addition-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 4.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

If $(X_i)_{i\in I}$ is a finite mutually independent family, then for every real $t$,
$$M_{\sum_{i\in I}X_i}(t)=\prod_{i\in I}M_{X_i}(t).$$
For $I=\varnothing$, both sides equal $1$.

## Facts & Assumptions

**Given:** A finite mutually independent family $(X_i)_{i\in I}$ and $t\in\mathbb R$.

[L1] $M_X(t)=\mathbb E[\exp(tX)]$ ([[def-moment-generating-function]]).

[L2] Expectation factors over finite products of mutually independent random variables ([[thm-expectation-of-products-of-independent-random-variables]]).

[L3] $\exp(x+y)=\exp(x)\exp(y)$ for all reals $x,y$ ([[thm-exponential-addition-formula]]).

[L4] Mutual independence factors every joint attained-value probability ([[def-independence-of-finite-random-variables]]).

[L5] Probability is additive on finite disjoint unions, and finite sums may be regrouped and interchanged ([[thm-finite-additivity-of-probability]], [[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Iterating [L3] gives $\exp(t\sum_iX_i)=\prod_i\exp(tX_i)$ pointwise. For any joint values of the transformed variables, each corresponding event is a disjoint union of joint-value events of the $X_i$; summing the products supplied by [L4] and factoring the finite sums with [L5] proves that the transformed variables remain mutually independent. [L3, L4, L5, algebra]

2.1 Apply [L2] to step 1.1 and use [L1] in each factor to obtain the formula. [step 1.1, L1, L2]

3.1 For $I=\varnothing$, the sum is zero, $M_0(t)=\exp(0)=1$, and the product is empty and equals $1$. [step 2.1, L1, L3] ∎
