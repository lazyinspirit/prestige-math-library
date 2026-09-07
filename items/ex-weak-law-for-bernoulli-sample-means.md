---
id: ex-weak-law-for-bernoulli-sample-means
title: "Bernoulli sample frequencies"
kind: example
status: published
origin: pipeline
deps: ["cor-iid-finite-variance-weak-law", "def-bernoulli-and-binomial-random-variables", "lem-bernoulli-and-binomial-mean-and-variance", "cor-countable-independent-copies-exist"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Section 3.2 opening calculation, pp. 54\u201355"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Use the published Bernoulli moments and Chebyshev; the established countable product supplies a common-space infinite sequence."
---

## Example

Assume countable choice and dependent choice. For IID Bernoulli$(p)$ variables $(X_k)_{k\ge1}$, where $0\le p\le1$, let $S_n=\sum_{k=1}^nX_k$. Then $S_n/n\to p$ in probability and
$$\mathbb P(|S_n/n-p|\ge\varepsilon)\le\frac{p(1-p)}{n\varepsilon^2}\quad(\varepsilon>0).$$
The endpoint laws $p=0,1$ are included.

## Facts & Assumptions

[F1] [[cor-iid-finite-variance-weak-law]]: Let $(X_k)_{k\ge1}$ be IID square-integrable real random variables, with $\mu=\mathbb EX_1$ and $\sigma^2=\operatorname{Var}(X_1)$. For $S_n=\sum_{k=1}^nX_k$, $\mathbb E|S_n/n-\mu|^2=\sigma^2/n,$ and $S_n/n\to\mu$ in $L^2$ and in probability. Also $\mathbb P(|S_n/n-\mu|\ge\varepsilon)\le\sigma^2/(n\varepsilon^2)$ for $\varepsilon>0$.

[F2] [[def-bernoulli-and-binomial-random-variables]]: For $p\in[0,1]$, a **Bernoulli$(p)$ random variable** takes the value $1$ with probability $p$ and $0$ with probability $1-p$. For $n\in\mathbb N$, a **binomial$(n,p)$ random variable** is a sum $X=\sum_{i<n}X_i$ of $n$ mutually independent Bernoulli$(p)$ variables. When $n=0$, this is the constant zero random variable.

[F3] [[lem-bernoulli-and-binomial-mean-and-variance]]: If $X$ is Bernoulli$(p)$, then $\mathbb E[X]=p$ and $\operatorname{Var}(X)=p(1-p)$. If $S$ is binomial$(n,p)$, then $\mathbb E[S]=np,\qquad \operatorname{Var}(S)=np(1-p).$ These formulas include $p=0$, $p=1$, and $n=0$.

[F4] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$ on $(S,\Sigma)$ is the common law of a countable independent family of $S$-valued random elements.

## Verification

**Given:** The construction and assumptions above.

1.1 The Bernoulli law puts masses $p$ and $1-p$ at $1$ and $0$. Under countable choice and dependent choice, the countable-copy result constructs a common-space IID sequence with this law. Its mean is $p$ and variance $p(1-p)$, including both endpoints. [F2, F4, F3, given]

2.1 The finite-variance IID weak law and its probability bound apply with $\mu=p$ and $\sigma^2=p(1-p)$, giving the displayed estimate and convergence. If $p=0$ or $p=1$, all the variables equal $p$ on the intersection of their countably many probability-one events, so every sample mean equals $p$ there and the error probability is zero, even at $n=1$. [F1, step 1.1, algebra] ∎
