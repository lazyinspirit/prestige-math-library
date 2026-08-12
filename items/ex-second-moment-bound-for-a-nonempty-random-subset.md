---
id: ex-second-moment-bound-for-a-nonempty-random-subset
kind: example
title: "First- and second-moment bounds for a nonempty Bernoulli random subset"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-bernoulli-and-binomial-random-variables, def-independence-of-finite-random-variables, lem-bernoulli-and-binomial-mean-and-variance, lem-variance-and-covariance-identities, thm-markov-inequality, thm-finite-second-moment-lower-bound]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
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

[L2] Its mean and variance are $np$ and $np(1-p)$ ([[lem-bernoulli-and-binomial-mean-and-variance]]).

[L3] $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2$ ([[lem-variance-and-covariance-identities]]).

[L4] Markov and the second-moment theorem give their respective upper and lower bounds ([[thm-markov-inequality]], [[thm-finite-second-moment-lower-bound]]).

## Verification

**Proof technique:** cases.

1.1 The event $X=0$ means every retention coordinate is zero, so $\mathbb P(X>0)=1-(1-p)^n$. [L1]

1.2 The identity [L3] and [L2] give $\mathbb E[X^2]=np(1-p)+n^2p^2$. [L2, L3, algebra]

1.3 If $np=0$, then $n=0$ or $p=0$, and $X=0$ almost surely; all three displayed exact formulas give zero where appropriate, while the second-moment ratio is not formed. [assume-case zero, L1, L2]

2.1 If $np>0$, Markov at threshold $1$ gives $\mathbb P(X>0)\le np$, and the second-moment bound with steps 1.1 and 1.2 gives $\mathbb P(X>0)\ge(np)^2/(np(1-p)+n^2p^2)=np/(1-p+np)$. [assume-case positive, step 1.1, step 1.2, L4, algebra]

3.1 The cases are exhaustive. At $p=1$ and $n>0$, the exact probability and both relevant bounds equal $1$. [step 1.3, step 2.1, cases-exhaustive] ∎
