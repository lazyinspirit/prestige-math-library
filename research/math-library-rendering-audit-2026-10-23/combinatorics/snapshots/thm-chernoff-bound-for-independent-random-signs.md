---
id: thm-chernoff-bound-for-independent-random-signs
kind: theorem
title: "For $n\\ge1$ independent random signs, $\\mathbb P(|S|\\ge t)\\le2\\exp(-t^2/(2n))$ for $t>0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-independence-of-finite-random-variables, thm-markov-inequality, lem-expectation-by-distribution, lem-finite-sum-reindexing-and-fubini, thm-exponential-addition-formula, lem-moment-bound-for-a-random-sign, thm-exponential-is-strictly-increasing, thm-finite-union-bound]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  repair: research/mathematical-statistics-foundations-37-owner-e28-thm-chernoff-bound-for-independent-random-signs-repair.json
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 7.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 4.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

Let $\varepsilon_0,\ldots,\varepsilon_{n-1}$ be mutually independent uniform random signs, where $n\ge1$, and put $S=\sum_{i<n}\varepsilon_i$. For every $t>0$,
$$\mathbb P(|S|\ge t)\le2\exp\!\left(-\frac{t^2}{2n}\right).$$

## Facts & Assumptions

**Given:** Independent random signs, $n\ge1$, their sum $S$, and $t>0$.

[L1] Markov gives $\mathbb P(Y\ge a)\le\mathbb E[Y]/a$ for nonnegative $Y$ and $a>0$ ([[thm-markov-inequality]]).

[L2] On the finite probability space, expectations can be computed by grouping the attained values. ([[lem-expectation-by-distribution]])

[L3] A uniform sign satisfies $\mathbb E[\exp(u\varepsilon)]\le\exp(u^2/2)$ ([[lem-moment-bound-for-a-random-sign]]).

[L4] The exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

[L5] Probability of a finite union is at most the sum of the probabilities ([[thm-finite-union-bound]]).

[L6] Mutual independence is the factorization of all joint attained-value probabilities ([[def-independence-of-finite-random-variables]]).

[L7] Finite sums can be reindexed and factored over finite Cartesian products. ([[lem-finite-sum-reindexing-and-fubini]])

[L8] $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$. ([[thm-exponential-addition-formula]])

## Proof

**Proof technique:** direct.

1.1 For every real $u$, [L2] groups the finite outcome sum by the sign tuple $a\in\{-1,1\}^n$. Mutual atom independence [L6] and exponential addition [L8] give
$$\mathbb E e^{uS}=\sum_{a\in\{-1,1\}^n}\prod_{i<n}\left(e^{ua_i}\mathbb P(\varepsilon_i=a_i)\right)=\prod_{i<n}\sum_{a_i\in\{-1,1\}}e^{ua_i}\mathbb P(\varepsilon_i=a_i)=\prod_{i<n}\mathbb E e^{u\varepsilon_i},$$
where finite Fubini [L7] justifies the middle equality. All sums and factors are finite. [L2, L6, L7, L8, algebra]

1.2 For $u>0$, strict monotonicity gives $\{S\ge t\}=\{\exp(uS)\ge\exp(ut)\}$, so [L1] gives $\mathbb P(S\ge t)\le\exp(-ut)\mathbb E[\exp(uS)]$. [L1, L4]

2.1 By step 1.1 and [L3], $\mathbb E[\exp(uS)]\le\exp(nu^2/2)$. [L3, step 1.1, algebra]

3.1 Choose $u=t/n>0$. Substitution in steps 1.2 and 2.1 gives $\mathbb P(S\ge t)\le\exp(-t^2/(2n))$. [step 1.2, step 2.1, choose, algebra]

4.1 Negation merely relabels the two attained values of each sign, so the joint-value factorization in [L6] shows that the variables $-\varepsilon_i$ are again mutually independent uniform signs. Step 3.1 applied to $-S$ gives the same bound for $\mathbb P(S\le-t)$. [step 3.1, L6, algebra]

5.1 Since $\{|S|\ge t\}=\{S\ge t\}\cup\{S\le-t\}$, [L5] and steps 3.1 and 4.1 give the result. The excluded boundary $t=0$ would only give the valid but uninformative bound $1\le2$. [step 3.1, step 4.1, L5] ∎
