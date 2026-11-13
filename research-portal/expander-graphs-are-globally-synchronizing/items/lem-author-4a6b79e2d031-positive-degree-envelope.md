---
id: lem-author-4a6b79e2d031-positive-degree-envelope
title: A positive minimum degree envelope at every fixed supercritical ratio
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - prop-expander-prereq-degree-law-and-dependence
  - math:thm-markov-inequality
  - math:thm-expectation-of-products-of-independent-random-variables
  - math:thm-finite-union-bound
  - math:def-natural-logarithm
  - math:def-real-exponential-function-and-e
  - math:thm-logarithm-slower-than-every-positive-power
  - math:thm-exponential-addition-formula
  - math:thm-derivative-of-exponential
  - math:thm-exponential-is-strictly-increasing
  - math:thm-logarithm-derivative-and-integral
  - math:def-erdos-renyi-random-graph
  - math:lem-bernoulli-and-binomial-mean-and-variance
  - math:def-real-power
  - math:def-independence-of-finite-random-variables
  - math:def-bernoulli-and-binomial-random-variables
dependency_roles:
  prop-expander-prereq-degree-law-and-dependence: mathematical-premise
  math:thm-markov-inequality: mathematical-premise
  math:thm-expectation-of-products-of-independent-random-variables: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  math:thm-logarithm-slower-than-every-positive-power: mathematical-premise
  math:thm-exponential-addition-formula: mathematical-premise
  math:thm-derivative-of-exponential: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:lem-bernoulli-and-binomial-mean-and-variance: mathematical-premise
  math:def-real-power: mathematical-premise
  math:def-independence-of-finite-random-variables: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
formulation_deps:
  - prop-expander-prereq-degree-law-and-dependence
  - math:def-erdos-renyi-random-graph
  - math:def-bernoulli-and-binomial-random-variables
  - math:def-independence-of-finite-random-variables
  - math:def-natural-logarithm
  - math:def-real-power
argument_deps:
  - prop-expander-prereq-degree-law-and-dependence
  - math:thm-markov-inequality
  - math:thm-expectation-of-products-of-independent-random-variables
  - math:thm-finite-union-bound
  - math:def-natural-logarithm
  - math:def-real-exponential-function-and-e
  - math:thm-logarithm-slower-than-every-positive-power
  - math:thm-exponential-addition-formula
  - math:thm-derivative-of-exponential
  - math:thm-exponential-is-strictly-increasing
  - math:thm-logarithm-derivative-and-integral
  - math:def-erdos-renyi-random-graph
  - math:lem-bernoulli-and-binomial-mean-and-variance
  - math:def-real-power
  - math:def-independence-of-finite-random-variables
  - math:def-bernoulli-and-binomial-random-variables
---

## Statement

Fix $\gamma_0>1$. There are constants $a\in(0,1/2)$, $b=4/\log2>1$ and $\eta>0$, depending only on $\gamma_0$, such that for all sufficiently large positive integers $n$ and all $p\in[0,1]$ with $d=np\ge\gamma_0\log n$, a random graph $G\sim G(n,p)$ on $[n]$, whose unordered pairs of distinct vertices have mutually independent Bernoulli$(p)$ edge indicators, satisfies
$$\mathbb P(\text{some vertex of }G\text{ has degree outside }[ad,bd])\le n^{-\eta}+n^{-2}.$$
The cutoff is uniform over those $p$.

## Statement references

[[math:def-erdos-renyi-random-graph]]

[[prop-expander-prereq-degree-law-and-dependence]]

[[math:def-natural-logarithm]]

[[math:def-real-power]]

[[math:def-bernoulli-and-binomial-random-variables]]

## Facts & Assumptions

[F1] The graph $G\sim G(n,p)$ has one mutually independent Bernoulli$(p)$ edge indicator for each unordered pair of distinct vertices, on the finite product probability space of [[math:def-erdos-renyi-random-graph]]. The Bernoulli and binomial laws use [[math:def-bernoulli-and-binomial-random-variables]]. Each degree has law $\operatorname{Bin}(n-1,p)$ by [[prop-expander-prereq-degree-law-and-dependence]], and therefore mean $\mu=(n-1)p$ by [[math:lem-bernoulli-and-binomial-mean-and-variance]]. Markov's inequality, product factorization of expectation and the union bound are [[math:thm-markov-inequality]], [[math:thm-expectation-of-products-of-independent-random-variables]] and [[math:thm-finite-union-bound]].

[F2] The exponential and logarithm have their ordinary inverse identities ([[math:def-natural-logarithm]], [[math:def-real-exponential-function-and-e]]). Positive-base real powers mean $x^y=\exp(y\log x)$ for $x>0$ and $y\in\mathbb R$ ([[math:def-real-power]]). Their derivative, monotonicity and product/integral identities follow from [[math:thm-exponential-addition-formula]], [[math:thm-derivative-of-exponential]], [[math:thm-exponential-is-strictly-increasing]] and [[math:thm-logarithm-derivative-and-integral]]. The limit $\log t/t\to0$ is supplied by [[math:thm-logarithm-slower-than-every-positive-power]].

[F3] For a finite family of finite-valued random variables, mutual independence means that probabilities of prescribed attained values factor over every nonempty subfamily ([[math:def-independence-of-finite-random-variables]]); the empty family is independent.

## Proof

**Given:** A fixed $\gamma_0>1$, a positive integer $n$, and the random graph $G\sim G(n,p)$ with the parameters and independent edge indicators in the Statement.

**Goal:** Choose constants and establish the simultaneous envelope uniformly.

1.1 Write a degree as $S=\sum_{i=1}^{n-1}X_i$ using its incident edge indicators. For fixed real $t\ne0$, the map $x\mapsto e^{tx}$ is injective on $\{0,1\}$ by [F2]; every joint atom for any subfamily of $(e^{tX_i})_i$ is therefore the corresponding joint atom for $(X_i)_i$. Its probability factors by [F3], proving mutual independence of the transformed variables. For $t=0$ they are all constant $1$, so their joint atom probabilities also factor. All factors are finite-valued on the finite graph probability space, so their expectations are finite. Product factorization in [F1] and the exponential addition formula in [F2] now give $\mathbb E e^{tS}=(1+p(e^t-1))^{n-1}\le\exp(\mu(e^t-1))$. The elementary bound $1+x\le e^x$ follows from the derivative of $e^x-1-x$, whose minimum is at zero. For $0<r<1$, apply Markov to $r^S$ on $S\le r\mu$ and obtain $\mathbb P(S\le r\mu)\le\exp(-\mu h(r)),\qquad h(r)=1-r+r\log r.$ Indeed $\mathbb Er^S\le e^{\mu(r-1)}$ and the threshold is $r^{r\mu}$. [F1, F2, F3]

2.1 As $r\downarrow0$, $r\log r\to0$ by substituting $t=1/r$ in [F2], so $h(r)\to1$. Choose $r\in(0,1)$ with $\gamma_0h(r)>1$ and set $a=r/2$, $\eta=(\gamma_0h(r)-1)/2>0$. For $n\ge2$, $ad\le r\mu$; eventually $(1-1/n)\gamma_0h(r)\ge1+\eta$. A union bound then gives $\mathbb P(\exists v:S_v<ad)\le n e^{-\mu h(r)}\le n^{-\eta}.$ The cutoff depends on $\gamma_0,r$ only, since $\mu\ge(1-1/n)\gamma_0\log n$. [F1, F2, step 1.1]

3.1 Take $t=\log2>0$, $b=4/\log2$. The same moment bound gives $\mathbb P(S\ge bd)\le e^{\mu-bd\log2}\le e^{-3d}$. The union probability for $S_v>bd$ is therefore at most $ne^{-3d}\le n^{1-3\gamma_0}\le n^{-2}$. Positivity of $b-1$ follows from $0<\log2<1$, for example by integrating $1/x$ from 1 to 2. Add the two exceptional probabilities. No independence between different degrees is used. [F1, F2, step 1.1, step 2.1] ∎
