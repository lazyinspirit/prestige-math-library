---
id: lem-majority-error-bound-from-chebyshev
kind: lemma
title: "Chebyshev bounds the majority error of repeated Bernoulli trials"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-linearity-of-expectation, lem-bernoulli-and-binomial-mean-and-variance, cor-variance-adds-for-pairwise-independent-random-variables, thm-chebyshev-inequality]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $k\ge 1$, let $X_1,\dots,X_k$ be independent Bernoulli random variables
with $\mathbb P(X_i=1)\ge 2/3$ for every $i$, and put
$S:=X_1+\cdots+X_k$. Then

$$\mathbb P\!\left(S\le \frac{k}{2}\right)\le \frac{9}{k}.$$

Thus the probability that a majority vote is wrong decays like $O(1/k)$.

## Facts & Assumptions

**Given:** an integer $k\ge 1$ and independent Bernoulli variables
$X_1,\dots,X_k$ with $\mathbb P(X_i=1)\ge 2/3$.

[L1] Expectation is linear over finite sums ([[thm-linearity-of-expectation]]).

[L2] Bernoulli mean and variance satisfy $\mathbb E[X_i]=p_i$ and $\operatorname{Var}(X_i)=p_i(1-p_i)\le 1/4$ ([[lem-bernoulli-and-binomial-mean-and-variance]]).

[L3] Variance adds for pairwise-independent finite families ([[cor-variance-adds-for-pairwise-independent-random-variables]]).

[L4] Chebyshev's inequality bounds $\mathbb P(|Y-\mathbb E[Y]|\ge t)$ by $\operatorname{Var}(Y)/t^2$ ([[thm-chebyshev-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mu:=\mathbb E[S]$. By [L1] and [L2], $\mu=\sum_{i=1}^k\mathbb E[X_i]\ge 2k/3$. Also [L2] and [L3] give $\operatorname{Var}(S)=\sum_{i=1}^k\operatorname{Var}(X_i)\le k/4$. [L1, L2, L3, given]

2.1 If $S\le k/2$, then since $\mu\ge 2k/3$ we have $\mu-S\ge k/6$, so $\{S\le k/2\}\subseteq \{|S-\mu|\ge k/6\}$. Applying [L4] with $Y=S$ and $t=k/6$ yields $\mathbb P(S\le k/2)\le \operatorname{Var}(S)/(k/6)^2\le (k/4)/(k^2/36)=9/k$. [L4, step 1.1, algebra]

3.1 The event $S\le k/2$ is exactly the event that at most half the trials are correct, so the same bound controls majority-vote error. [step 2.1] ∎
