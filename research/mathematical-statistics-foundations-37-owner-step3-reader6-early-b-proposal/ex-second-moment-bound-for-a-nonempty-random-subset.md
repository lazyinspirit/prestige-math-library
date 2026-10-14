---
id: ex-second-moment-bound-for-a-nonempty-random-subset
kind: example
title: "First- and second-moment bounds for a nonempty Bernoulli random subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-bernoulli-and-binomial-random-variables, def-independence-of-finite-random-variables, thm-linearity-of-expectation, lem-indicator-expectation-and-products, thm-markov-inequality, thm-finite-second-moment-lower-bound]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Chapter 3"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Example

Retain each element of $[n]$ independently with probability $p$, and let $X$ be the size of the random subset. Then
$$\mathbb E[X]=np,\quad \mathbb E[X^2]=np(1-p)+n^2p^2,\quad \mathbb P(X>0)=1-(1-p)^n.$$
When $np>0$, the first- and second-moment bounds give
$$\mathbb P(X>0)\le np,\qquad \mathbb P(X>0)\ge\frac{np}{1-p+np}.$$

## Facts & Assumptions

**Given:** Naturals $n$ and a real $p\in[0,1]$.

[L1] $X$ is a sum of $n$ mutually independent Bernoulli$(p)$ variables, and mutual independence factors their joint attained-value probabilities ([[def-bernoulli-and-binomial-random-variables]], [[def-independence-of-finite-random-variables]]).

[L2] Expectation is linear on finite sums on the finite retention probability space. ([[thm-linearity-of-expectation]])

[L3] Each retention indicator has expectation equal to its event probability; the product of two indicators is the indicator of their intersection. ([[lem-indicator-expectation-and-products]])

[L4] Markov and the second-moment theorem give their respective upper and lower bounds ([[thm-markov-inequality]], [[thm-finite-second-moment-lower-bound]]).

## Verification

**Proof technique:** cases.

1.1 The event $X=0$ means every retention coordinate is zero, so $\mathbb P(X>0)=1-(1-p)^n$. [L1]

1.2 Write $I_i$ for the indicator that element $i$ is retained, so $X=\sum_{i<n}I_i$. By [L3], $I_i^2=I_i$ and $\mathbb E I_i=p$; for distinct $i,j$, [L1] and [L3] give $\mathbb E[I_iI_j]=\mathbb P(I_i=I_j=1)=p^2$. Finite linearity [L2] therefore gives $\mathbb EX=np$, and expanding the finite square gives
$$\mathbb E[X^2]=\sum_{i<n}\mathbb EI_i+\sum_{i\ne j}\mathbb E[I_iI_j]=np+n(n-1)p^2=np(1-p)+n^2p^2.$$
There are $n(n-1)$ ordered distinct pairs; when $n=0$ or $n=1$ that pair sum is empty. [L1, L2, L3, algebra]

1.3 If $np=0$, then $n=0$ or $p=0$, and $X=0$ almost surely; all three displayed exact formulas give zero where appropriate, while the second-moment ratio is not formed. [assume-case zero, L1, step 1.2]

2.1 If $np>0$, Markov at threshold $1$ gives $\mathbb P(X>0)\le np$, and the second-moment bound with steps 1.1 and 1.2 gives $\mathbb P(X>0)\ge(np)^2/(np(1-p)+n^2p^2)=np/(1-p+np)$. [assume-case positive, step 1.1, step 1.2, L4, algebra]

3.1 The cases are exhaustive. At $p=1$ and $n>0$, the exact probability is $1$ and the second-moment lower bound is $np/(1-p+np)=1$, while the Markov upper bound is $np=n$ and is vacuous for $n\ge2$. [step 1.3, step 2.1, cases-exhaustive] ∎
