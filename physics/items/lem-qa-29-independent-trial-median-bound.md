---
id: lem-qa-29-independent-trial-median-bound
kind: lemma
title: "One-sided concentration bound for independent median trials"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-finite-probability-space-and-event
  - def-bernoulli-and-binomial-random-variables
  - def-independent-random-elements
  - thm-expectation-of-products-of-independent-random-variables
  - thm-markov-inequality
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - def-expectation-on-a-finite-probability-space
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-differentiable-implies-continuous
  - def-natural-logarithm
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - cor-expectation-agrees-with-the-finite-weighted-sum
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; only a finite family of independent Bernoulli variables is considered."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Lemma 1 and Theorems 3 and 5"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Section 19.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $R\ge1$ be an integer, let $Z_1,\ldots,Z_R$ be independent Bernoulli random variables on a finite probability space with $\mathbb E[Z_i]\le p<1/2$, and put $S=\sum_{i=1}^RZ_i$. For every $t\ge0$,
$$\Pr(S-\mathbb E S\ge t)\le e^{-2t^2/R}.$$
Consequently, let $R$ be odd and let $T_1,\ldots,T_R$ be independent finite-valued real estimates on a finite probability space. If $I\subseteq\mathbb R$ is an interval and $\Pr(T_i\in I)\ge1-p$ for every $i$, then their median (the middle order statistic) lies in $I$ except with probability at most
$$\exp\bigl(-2R(1/2-p)^2\bigr).$$

## Facts & Assumptions

**Given:** A finite probability space, an integer $R\ge1$, and an independent Bernoulli family $Z_1,\ldots,Z_R$ with means $p_i=\mathbb E Z_i\le p<1/2$. For the median consequence, also the independent finite-valued estimates $T_1,\ldots,T_R$, the interval $I$, and $\Pr(T_i\in I)\ge1-p$ for each $i$.

[F1] [[def-bernoulli-and-binomial-random-variables]]: a Bernoulli variable takes values $0,1$ with probabilities $1-p_i,p_i$.

[F2] [[def-independent-random-elements]]: mutual independence means the generated event sigma-algebras factor on finite intersections.

[F3] [[thm-expectation-of-products-of-independent-random-variables]]: expectations of finite products of independent finite-valued real variables factor.

[F4] [[thm-markov-inequality]]: for nonnegative $W$ and $c>0$, $\Pr(W\ge c)\le\mathbb E[W]/c$.

[F5] [[def-real-exponential-function-and-e]] fixes $\exp$ and $e=\exp(1)$; [[cor-exponential-reciprocal-and-positivity]] gives $\exp(x)>0$; [[thm-exponential-addition-formula]] gives $\exp(x+y)=\exp(x)\exp(y)$; [[thm-exponential-is-strictly-increasing]] makes $\exp$ order preserving; and [[def-natural-logarithm]] defines $\ln$ as its inverse.

[F6] [[thm-derivative-of-exponential]], [[thm-logarithm-derivative-and-integral]], [[thm-chain-rule]], and [[thm-algebra-of-derivatives]] give the derivative rules for the positive exponential, logarithm, sums, products, and quotients used below.

[F7] [[cor-mean-value-theorem]]: if a function is continuous on $[a,b]$ and differentiable on $(a,b)$, then its endpoint increment is its derivative at some interior point times $b-a$.

[F8] [[def-expectation-on-a-finite-probability-space]]: the expectation of a finite-valued variable is the finite weighted sum of its values, including the Bernoulli formula.

[F9] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear for the finite-valued real random variables below.

[F10] [[cor-differentiable-implies-continuous]]: a function differentiable at a point is continuous there.

[F11] [[cor-expectation-agrees-with-the-finite-weighted-sum]] identifies general expectations of finite random variables on this probability space with the finite weighted sums in [F8].

## Proof
1.1 For one Bernoulli variable $Z_i$, [F1] and [F8] give $\mathbb E Z_i=p_i$. Define $M_i(\lambda)=\mathbb E[\exp(\lambda(Z_i-p_i))]=\exp(-\lambda p_i)(1-p_i+p_i\exp(\lambda))>0$ by its two possible values and [F5], and put $G_i(\lambda)=\ln M_i(\lambda)$. Set $q_i(\lambda)=p_i\exp(\lambda)/(1-p_i+p_i\exp(\lambda))\in[0,1]$. Differentiating by [F6] gives $G_i(0)=G_i'(0)=0$ and $G_i''(\lambda)=q_i(\lambda)(1-q_i(\lambda))\le1/4$, including $p_i=0$ and $p_i=1$. [given, F1, F5, F6, F8, algebra]

2.1 At $\lambda=0$ the desired bound is equality. For $\lambda>0$, put $H_i(t)=G_i(t)-t^2/8$ on $[0,\lambda]$. By step 1.1, $H_i''(t)\le0$. The functions $H_i$ and $H_i'$ are continuous by [F10], so the hypotheses of [F7] apply. For any $0<v\le\lambda$, [F7] applied to $H_i'$ on $[0,v]$ gives $H_i'(v)-H_i'(0)=H_i''(c)v\le0$ for some $c\in(0,v)$; since $H_i'(0)=0$, this shows $H_i'(v)\le0$. Applying [F7] to $H_i$ on $[0,\lambda]$ then gives $H_i(\lambda)-H_i(0)=H_i'(d)\lambda\le0$ for some $d\in(0,\lambda)$. As $H_i(0)=0$, $G_i(\lambda)\le\lambda^2/8$. Therefore $\mathbb E[\exp(\lambda(Z_i-p_i))]\le\exp(\lambda^2/8)$ for every $\lambda\ge0$. [step 1.1, F5, F6, F7, F10, algebra]

3.1 By [F11], the general expectations in [F3] and [F9] agree with the finite weighted sums in [F8]. Thus [F8]–[F9] give $\mathbb E S=\sum_i p_i$ and $S-\mathbb E S=\sum_i(Z_i-p_i)$. For $\lambda\ge0$, put $W_i=\exp(\lambda(Z_i-p_i))$. Since each $Z_i$ is finite-valued, every event defined by $W_i$ is a union of level sets of $Z_i$, so $\sigma(W_i)\subseteq\sigma(Z_i)$; the independence in [F2] therefore makes the $W_i$ independent. The exponential addition law [F5] and finite product factorization [F3] now give $\mathbb E[\exp(\lambda(S-\mathbb ES))]=\prod_i\mathbb E[W_i]\le \exp(R\lambda^2/8)$ by step 2.1. [given, F2, F3, F5, F8, F9, F11, step 2.1, algebra]

4.1 For $t>0$, choose $\lambda=4t/R>0$ and apply [F4] to the nonnegative variable $e^{\lambda(S-\mathbb ES)}$ at threshold $e^{\lambda t}$. Step 3.1 gives $\Pr(S-\mathbb ES\ge t)\le e^{-\lambda t+R\lambda^2/8}=e^{-2t^2/R}$. For $t=0$, the probability is at most one, equal to the stated bound. [given, F4, step 3.1, algebra]

5.1 Let $Y_i$ indicate the event $T_i\notin I$. Each $Y_i$ is Bernoulli with mean at most $p$ by [F1], [F8], and the interval-success hypothesis. Each $Y_i$ is a function of the finite-valued $T_i$, so every event defined by $Y_i$ is a union of level sets of $T_i$; hence $\sigma(Y_i)\subseteq\sigma(T_i)$ and [F2] makes the $Y_i$ independent. By [F11], [F9] applies to the same finite weighted-sum expectations as [F8], so $\mathbb E S=\sum_i\mathbb E Y_i\le pR$. If the odd median is outside $I$, at least $(R+1)/2$ estimates lie on one side of $I$ and fail, so $S=\sum_iY_i\ge R/2$ and $S-\mathbb E S\ge R(1/2-p)$. Apply step 4.1 with this $t$ to get the stated median bound. [given, F1, F2, F8, F9, F11, step 4.1, algebra] ∎
