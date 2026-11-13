---
id: lem-author-5d47c15147c9-logarithmic-boundary-mass
title: Exact logarithmic binomial masses at bounded distance from an entropy root
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:lem-binomial-count-law
  - math:thm-real-stirling-formula
  - math:thm-logarithm-derivative-and-integral
  - math:thm-logarithm-slower-than-every-positive-power
  - math:thm-natural-logarithm-laws
  - math:def-bernoulli-and-binomial-random-variables
  - math:thm-binomial-closed-formula
  - math:def-real-power
dependency_roles:
  math:lem-binomial-count-law: mathematical-premise
  math:thm-real-stirling-formula: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:thm-logarithm-slower-than-every-positive-power: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
  math:thm-binomial-closed-formula: mathematical-premise
  math:def-real-power: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Fix real $\gamma>0$ and $a>0$. Put $\mu=\gamma\log n$, $p=\mu/n$, and $N=n-j$, where $j$ is a fixed positive integer. For any integer sequence $k=a\mu+O(1)$, with the bounded error independent of $n$, let $q_n=\mathbb P(\operatorname{Bin}(N,p)=k)$ and $I(a)=a\log a-a+1$. Then
$$\log q_n=-\mu I(a)-\tfrac12\log(2\pi k)-(k-a\mu)\log a+o(1).$$
In particular $q_n=\Theta(n^{-\gamma I(a)}/\sqrt{\log n})$: the ratio lies between positive constants for all sufficiently large integers $n$. All constants may depend on the fixed parameters and the error bound.

## Facts & Assumptions

[F1] A binomial$(N,p)$ variable is a sum of $N$ independent Bernoulli$(p)$ variables ([[math:def-bernoulli-and-binomial-random-variables]]). For $N\in\mathbb N_0$, $0<p<1$ and integer $0\le k\le N$, its mass at $k$ is $\binom Nk p^k(1-p)^{N-k}$ ([[math:lem-binomial-count-law]]).

[F2] Stirling's formula gives $k!=\sqrt{2\pi k}(k/e)^k(1+o(1))$ ([[math:thm-real-stirling-formula]]).

[F3] The derivative of $\log x$ is $1/x$ ([[math:thm-logarithm-derivative-and-integral]]).

[F4] The natural logarithm is strictly increasing and onto the real line, hence grows without bound, and grows more slowly than any positive power ([[math:thm-natural-logarithm-laws]], [[math:thm-logarithm-slower-than-every-positive-power]]).

[F5] For integers $0\le k\le N$, $\binom Nk k!=N^{\underline k}=\prod_{i=0}^{k-1}(N-i)$ ([[math:thm-binomial-closed-formula]]).

[F6] For a positive real base $x$ and real exponent $r$, $x^r:=\exp(r\log x)$ ([[math:def-real-power]]).

## Proof

**Given:** The fixed parameters and integer sequences in the Statement.

**Goal:** Prove the mass expansion with its bounded rounding error.

1.1 Eventually $N$ and $k$ are positive integers with $0<p<1$ and $1\le k<N$, by [F4] and the fixed positive integer $j$. Combining the binomial definition and mass formula in [F1] with the falling factorial identity in [F5] gives $\log q_n=\sum_{i=0}^{k-1}\log(N-i)+k\log p-\log(k!)+(N-k)\log(1-p)$. Integrating the derivative in [F3] on an interval bounded away from zero gives $\log(1-x)=-x+O(x^2)$ for $0\le x\le1/2$. Since $k=O(\log n)$ and $j$ is fixed, $\sum_{i=0}^{k-1}\log(N-i)=k\log n+O((jk+k^2)/n)$, and $(N-k)\log(1-p)=-\mu+O((j+k)p+np^2)$. Each error tends to zero by [F4]. Thus [F2] yields $\log q_n=-\mu+k\log\mu-k\log k+k-\tfrac12\log(2\pi k)+o(1)$. [F1, F2, F3, F4, F5, given, algebra]

2.1 Set $t=k-a\mu$, which is bounded. The derivative in $k$ of $k\log(\mu/k)+k$ is $\log(\mu/k)$; integrating it between $a\mu$ and $a\mu+t$ gives the change $-t\log a+O(t^2/\mu)$. The value at $a\mu$ is $a\mu(1-\log a)$. Substitution in step 1.1 proves the displayed expansion. Since $k/(\log n)\to a\gamma>0$ and $t$ remains bounded, exponentiation, with $\exp(-\gamma I(a)\log n)=n^{-\gamma I(a)}$ by [F6], gives both positive constant bounds in the Statement. [F3, F4, F6, step 1.1, algebra] ∎
