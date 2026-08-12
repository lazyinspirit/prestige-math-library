---
id: thm-chernoff-bound-for-independent-random-signs
kind: theorem
title: "For $n\\ge1$ independent random signs, $\\mathbb P(|S|\\ge t)\\le2\\exp(-t^2/(2n))$ for $t>0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-independence-of-finite-random-variables, thm-markov-inequality, lem-mgf-of-independent-finite-sum, lem-moment-bound-for-a-random-sign, thm-exponential-is-strictly-increasing, thm-finite-union-bound]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

[L2] The MGF of an independent finite sum is the product of the individual MGFs ([[lem-mgf-of-independent-finite-sum]]).

[L3] A uniform sign satisfies $\mathbb E[\exp(u\varepsilon)]\le\exp(u^2/2)$ ([[lem-moment-bound-for-a-random-sign]]).

[L4] The exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

[L5] Probability of a finite union is at most the sum of the probabilities ([[thm-finite-union-bound]]).

[L6] Mutual independence is the factorization of all joint attained-value probabilities ([[def-independence-of-finite-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 For $u>0$, strict monotonicity gives $\{S\ge t\}=\{\exp(uS)\ge\exp(ut)\}$, so [L1] gives $\mathbb P(S\ge t)\le\exp(-ut)\mathbb E[\exp(uS)]$. [L1, L4]

1.2 By [L2] and [L3], $\mathbb E[\exp(uS)]\le\exp(nu^2/2)$. [L2, L3, algebra]

2.1 Choose $u=t/n>0$. Substitution in steps 1.1 and 1.2 gives $\mathbb P(S\ge t)\le\exp(-t^2/(2n))$. [step 1.1, step 1.2, choose, algebra]

3.1 Negation merely relabels the two attained values of each sign, so the joint-value factorization in [L6] shows that the variables $-\varepsilon_i$ are again mutually independent uniform signs. Step 2.1 applied to $-S$ gives the same bound for $\mathbb P(S\le-t)$. [step 2.1, L6, algebra]

4.1 Since $\{|S|\ge t\}=\{S\ge t\}\cup\{S\le-t\}$, [L5] and steps 2.1 and 3.1 give the result. The excluded boundary $t=0$ would only give the valid but uninformative bound $1\le2$. [step 2.1, step 3.1, L5] ∎
