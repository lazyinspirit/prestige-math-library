---
id: ex-negative-entropy-mirror-descent-on-simplex
kind: example
title: Negative entropy gives normalized multiplicative weights
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - lem-bregman-divergence-nonnegative
  - alg-online-mirror-descent
  - lem-mirror-descent-bregman-projection-exists
  - lem-negative-entropy-geometry-of-simplex
  - def-mirror-map-and-bregman-divergence
  - alg-hedge
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-real-exponential-function-and-e
  - def-euclidean-inner-product
  - thm-algebra-of-derivatives
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.4.2, derivation of exponentiated-gradient/Hedge from negative entropy, PDF pp. 103–105 (printed pp. 81–83)."
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
      locator: "Exponential weights as mirror descent, PDF p. 26."
    - title: "Francesco Orabona, Online Mirror Descent III: Examples and Learning with Expert Advice"
      url: "https://parameterfree.com/2019/10/03/online-mirror-descent-iii-examples-and-learning-with-expert-advice/"
      locator: "Negative-entropy mirror map and normalized expert weights, full post."
verification:
  precheck: n/a
---

## Example

Let $n\ge2$, let $K_n$ be the probability simplex represented by independent coordinates $q_1,\ldots,q_{n-1}$ with $p_i=q_i$ and $p_n=1-\sum_{i<n}q_i$, and use $R(p)=\sum_{i=1}^np_i\log p_i$. Initialize at the uniform distribution. At each round use the linear loss $f_t(p)=\sum_{i=1}^np_i\ell_{t,i}$ for a full-information vector $\ell_t\in[0,1]^n$ and a fixed step size $\eta>0$. In full probability coordinates, agile mirror descent updates

$$p_{t+1,i}=\frac{p_{t,i}\exp(-\eta\ell_{t,i})}{\sum_{j=1}^np_{t,j}\exp(-\eta\ell_{t,j})},\qquad i=1,\ldots,n.$$

Consequently its distribution sequence equals the normalized weight distributions of Hedge initialized at unit weights and using learning rate $\epsilon=\eta$. Hedge then samples an expert from each shared distribution; mirror descent outputs the distributions themselves.

## Example references

[[alg-online-mirror-descent]]: defines the agile gradient update and Bregman projection.

[[lem-mirror-descent-bregman-projection-exists]]: establishes existence, uniqueness, and the Pythagorean property of the Bregman projection.

[[lem-negative-entropy-geometry-of-simplex]]: proves continuity, strong convexity, and the entropy range for this regularizer.

[[def-mirror-map-and-bregman-divergence]]: defines the Hessian geometry and Bregman divergence.

[[alg-hedge]]: defines Hedge's unit initial weights, normalization, full-information loss update, and sampled expert.

[[def-natural-logarithm]]: defines the natural logarithm used in the negative entropy.

[[thm-natural-logarithm-laws]]: supplies logarithm quotient and product laws.

[[thm-logarithm-derivative-and-integral]]: supplies the derivative of $\log$ used to differentiate entropy.

[[def-real-exponential-function-and-e]]: defines the positive exponential factors in both updates.

[[def-euclidean-inner-product]]: gradients in the independent coordinates use the standard Euclidean pairing.

[[thm-algebra-of-derivatives]]: supplies the product and chain rules used to differentiate $p_i\log p_i$.

## Facts & Assumptions

**Given:** The simplex, negative entropy, uniform initialization, positive step size, and finite loss vectors in the Example.

[F1] [[alg-online-mirror-descent]]: the unconstrained point satisfies $\nabla R(y_{t+1})=\nabla R(x_t)-\eta g_t$, followed by Bregman projection onto the simplex.

[F2] [[lem-negative-entropy-geometry-of-simplex]]: the negative entropy on the closed simplex is continuous and strongly convex, and its minimum is attained at the uniform distribution.

[F3] [[lem-mirror-descent-bregman-projection-exists]]: a Bregman projection minimizer exists uniquely, and minimizes $B_R(\cdot\|y)$ over the simplex.

[F4] [[lem-bregman-divergence-nonnegative]]: if the dual update point is in the simplex interior, $B_R(p\|y)\ge\frac12\|p-y\|_2^2$ for every $p$ in the simplex.

[F5] [[alg-hedge]]: Hedge starts from $W_1(i)=1$, normalizes $W_t$ to a distribution, and updates $W_{t+1}(i)=W_t(i)\exp(-\epsilon\ell_{t,i})$ after the full loss vector is revealed.

[F6] [[thm-algebra-of-derivatives]]: the product and chain rules differentiate $s\log s$.

[F7] [[thm-natural-logarithm-laws]]: $\log(a/b)=\log a-\log b$ for positive $a,b$.

[F8] [[def-real-exponential-function-and-e]]: $\exp$ is positive and inverse to $\log$ on positive reals.

[F9] [[thm-logarithm-derivative-and-integral]]: $(\log s)'=1/s$ for $s>0$.

## Verification

1.1 At an interior distribution, differentiating $R(q)=\sum_{i<n}q_i\log q_i+p_n\log p_n$ using [F6, F9] gives $\partial_iR=\log q_i+1-(\log p_n+1)=\log(q_i/p_n)$. [given, F6, F9, algebra]

1.2 In independent coordinates the linear loss is $f_t(q)=\ell_{t,n}+\sum_{i<n}q_i(\ell_{t,i}-\ell_{t,n})$, so its gradient has coordinates $g_{t,i}=\ell_{t,i}-\ell_{t,n}$. The dual equation [F1] therefore reads $\log(p_{t+1,i}/p_{t+1,n})=\log(p_{t,i}/p_{t,n})-\eta(\ell_{t,i}-\ell_{t,n})$ by the quotient law [F7]. [given, F1, F7, algebra]

2.1 Exponentiating the equality in step 1.2 and using [F8] gives $p_{t+1,i}/p_{t+1,n}=(p_{t,i}/p_{t,n})\exp(-\eta(\ell_{t,i}-\ell_{t,n}))$. Set $c_t=p_{t+1,n}\exp(\eta\ell_{t,n})/p_{t,n}>0$; the ratio identity then gives $p_{t+1,i}=c_t p_{t,i}\exp(-\eta\ell_{t,i})$ for $i<n$, and the definition of $c_t$ gives it for $i=n$. Normalization $\sum_i p_{t+1,i}=1$ forces $c_t=(\sum_jp_{t,j}\exp(-\eta\ell_{t,j}))^{-1}$. [step 1.2, F8, algebra, construct]

3.1 The denominator in step 2.1 is a finite sum of positive finite terms, so each updated coordinate is positive and the update lies in the simplex interior. By [F4], the Bregman objective is nonnegative on the simplex and equals zero at this update point itself; hence the Bregman projection returns this same point. [step 2.1, F3, F4, algebra]

4.1 At initialization, [F2] makes the uniform distribution a minimizer of $R$, so it is a valid OMD initial point. If $p_t(i)=W_t(i)/\sum_jW_t(j)$ and $\epsilon=\eta$, then [F5] gives $W_{t+1}(i)=W_t(i)\exp(-\eta\ell_{t,i})$, whose normalization is exactly the update in step 2.1. Induction from $W_1(i)=1$ proves equality of the OMD and Hedge distributions at every round. [given, F2, F5, step 2.1, induction, algebra] ∎

