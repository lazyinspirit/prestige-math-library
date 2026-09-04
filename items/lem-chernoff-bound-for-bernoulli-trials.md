---
id: lem-chernoff-bound-for-bernoulli-trials
kind: lemma
title: "A Chernoff bound for sums of independent Bernoulli trials"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-independence-of-finite-random-variables, thm-markov-inequality, lem-bernoulli-and-binomial-mean-and-variance, thm-expectation-of-products-of-independent-random-variables]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
---

## Statement

Let $X_1,\dots,X_k$ be independent Bernoulli$(p)$ random variables, let $S:=X_1+\cdots+X_k$, let $\mu:=pk$, and let $0<\alpha<1$. Then

$$\mathbb P\!\left(S\le (1-\alpha)\mu\right)\le \exp\!\left(-\frac{\alpha^2\mu}{2}\right).$$

## Facts & Assumptions

**Given:** independent Bernoulli$(p)$ variables $X_1,\dots,X_k$, their sum
$S$, and a parameter $0<\alpha<1$.

[L1] Markov's inequality applies to every nonnegative random variable ([[thm-markov-inequality]]).

[L2] Bernoulli$(p)$ means $\mathbb P(X_i=1)=p$ and $\mathbb P(X_i=0)=1-p$ ([[lem-bernoulli-and-binomial-mean-and-variance]]).

[L3] The expectation of a product factors over finite independent families ([[thm-expectation-of-products-of-independent-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\lambda>0$ and apply [L1] to the nonnegative variable $e^{-\lambda S}$. Because $e^{-\lambda t}$ decreases with $t$, we get $\mathbb P(S\le (1-\alpha)\mu)\le e^{\lambda(1-\alpha)\mu}\,\mathbb E[e^{-\lambda S}]$. [L1, given]

1.2 Since $S=\sum_i X_i$, we have $e^{-\lambda S}=\prod_i e^{-\lambda X_i}$. The family $(e^{-\lambda X_i})_i$ is still independent, so [L3] and [L2] give $\mathbb E[e^{-\lambda S}]=\prod_{i=1}^k\mathbb E[e^{-\lambda X_i}]=((1-p)+pe^{-\lambda})^k\le \exp(-\mu(1-e^{-\lambda}))$, using $1-u\le e^{-u}$ with $u=p(1-e^{-\lambda})$. [L2, L3, algebra]

2.1 Combine steps 1.1 and 1.2, and choose $\lambda$ so that $e^{-\lambda}=1-\alpha$. Then $\mathbb P(S\le (1-\alpha)\mu)\le \exp(\mu(-( \alpha)+(1-\alpha)\log\frac{1}{1-\alpha}))$. [step 1.1, step 1.2, choose, algebra]

3.1 Define $g(\alpha):=-( \alpha)+(1-\alpha)\log\frac{1}{1-\alpha}+\alpha^2/2$. Then $g(0)=0$ and $g'(\alpha)=\alpha+\log(1-\alpha)\le 0$ because $\log(1-\alpha)\le -\alpha$ for $0<\alpha<1$. Hence $g(\alpha)\le 0$, which is exactly $-( \alpha)+(1-\alpha)\log\frac{1}{1-\alpha}\le -\alpha^2/2$. Substituting this into step 2.1 gives the claimed bound. [step 2.1, algebra] ∎
