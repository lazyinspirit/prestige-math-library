---
id: ex-negative-entropy-mirror-descent-on-simplex
kind: example
title: Negative entropy gives normalized multiplicative weights
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - lem-bregman-divergence-nonnegative
  - alg-online-mirror-descent
  - lem-mirror-descent-bregman-projection-exists
  - lem-negative-entropy-geometry-of-simplex
  - def-mirror-map-and-bregman-divergence
  - def-metric-interior-closure-boundary
  - alg-hedge
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-real-exponential-function-and-e
  - def-euclidean-inner-product
  - thm-algebra-of-derivatives
  - thm-chain-rule
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.4.2, derivation of exponentiated-gradient/Hedge from negative entropy, PDF pp. 103–105 (printed pp. 81–83)."
    - title: "Peter Bartlett, Stat 260/CS 294-102: Learning in Sequential Decision Problems, mirror-descent lecture notes"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
      locator: "Slide 27, exponential weights as mirror descent."
    - title: "Francesco Orabona, Online Mirror Descent III: Examples and Learning with Expert Advice"
      url: "https://parameterfree.com/2019/10/03/online-mirror-descent-iii-examples-and-learning-with-expert-advice/"
      locator: "Negative-entropy mirror map and normalized expert weights, full post."
verification:
  precheck: n/a
---

## Example

Let $n\ge2$, let $K_n$ be the probability simplex represented by independent coordinates $q_1,\ldots,q_{n-1}$ with $p_i=q_i$ for $1\le i<n$ and $p_n=1-\sum_{i=1}^{n-1}q_i$. Probability labels are one-based; for any independent-coordinate vector $v\in\mathbb R^{n-1}$, write $v_i:=v(i-1)$ for $1\le i<n$ in the library's function-space convention. Set

$$U_n:=\{q\in\mathbb R^{n-1}:q_i>0\text{ for all }1\le i<n,\ \sum_{i=1}^{n-1}q_i<1\}.$$

Use $U_n$ as the mirror domain and define $R(q)=\sum_{i=1}^np_i\log p_i$ on $K_n$, with $0\log0:=0$. Initialize at the uniform distribution. At each round use the linear loss $f_t(p)=\sum_{i=1}^np_i\ell_{t,i}$ for a full-information vector $\ell_t\in[0,1]^n$ and a fixed step size $\eta>0$. In full probability coordinates, agile mirror descent updates

$$p_{t+1,i}=\frac{p_{t,i}\exp(-\eta\ell_{t,i})}{\sum_{j=1}^np_{t,j}\exp(-\eta\ell_{t,j})},\qquad i=1,\ldots,n.$$

Consequently its distribution sequence equals the normalized weight distributions of Hedge initialized at unit weights and using learning rate $\epsilon=\eta$. Hedge then samples an expert from each shared distribution; mirror descent outputs the distributions themselves.

## Example references

[[alg-online-mirror-descent]]: defines the agile gradient update and Bregman projection.

[[lem-mirror-descent-bregman-projection-exists]]: establishes existence, uniqueness, and the Pythagorean property of the Bregman projection.

[[lem-negative-entropy-geometry-of-simplex]]: proves continuity, strong convexity, and the entropy range for this regularizer.

[[def-mirror-map-and-bregman-divergence]]: defines the Hessian geometry and Bregman divergence.

[[def-metric-interior-closure-boundary]]: defines the interior and closure used for the simplex mirror domain.

[[alg-hedge]]: defines Hedge's unit initial weights, normalization, full-information loss update, and sampled expert.

[[def-natural-logarithm]]: defines the natural logarithm and supplies the positive range of $\exp$ and its inverse relation with $\log$.

[[thm-natural-logarithm-laws]]: supplies logarithm quotient and product laws.

[[thm-logarithm-derivative-and-integral]]: supplies the derivative of $\log$ used to differentiate entropy.

[[def-real-exponential-function-and-e]]: defines the real exponential function used in both updates.

[[def-euclidean-inner-product]]: gradients in the independent coordinates use the standard Euclidean pairing.

[[thm-algebra-of-derivatives]]: supplies the product rule used to differentiate $p_i\log p_i$.

[[thm-chain-rule]]: differentiates the affine coordinate substitutions in the entropy summands.

## Facts & Assumptions

**Given:** The simplex, negative entropy, uniform initialization, positive step size, and finite loss vectors in the Example.

[F1] [[alg-online-mirror-descent]]: the unconstrained point satisfies $\nabla R(y_{t+1})=\nabla R(x_t)-\eta g_t$, followed by Bregman projection onto the simplex.

[F2] [[lem-negative-entropy-geometry-of-simplex]]: the negative entropy on the closed simplex is continuous and strongly convex, and its minimum is attained at the uniform distribution.

[F3] [[lem-mirror-descent-bregman-projection-exists]]: a Bregman projection minimizer exists uniquely, and minimizes $B_R(\cdot\|y)$ over the simplex.

[F4] [[lem-bregman-divergence-nonnegative]]: for $q\in K_n$ and $y\in U_n$, $B_R(q\|y)\ge\frac12\|q-y\|_2^2$, with the norm taken in the independent coordinates.

[F5] [[alg-hedge]]: Hedge starts from $W_1(i)=1$, normalizes $W_t$ to a distribution, and updates $W_{t+1}(i)=W_t(i)\exp(-\epsilon\ell_{t,i})$ after the full loss vector is revealed.

[F6] [[thm-algebra-of-derivatives]] supplies the product rule, and [[thm-chain-rule]] supplies the chain rule for the affine coordinate substitutions in $s\log s$.

[F7] [[thm-natural-logarithm-laws]]: $\log(ab)=\log a+\log b$ and $\log(a/b)=\log a-\log b$ for positive $a,b$, and $\log1=0$.

[F8] [[def-natural-logarithm]]: $\exp:\mathbb R\to(0,\infty)$ is a bijection and $\log$ is its inverse, so exponentials are positive and exponentiating a logarithmic identity is valid.

[F9] [[thm-logarithm-derivative-and-integral]]: $(\log s)'=1/s$ for $s>0$.

[F10] The coordinate inequalities make $K_n$ nonempty, bounded, closed, and convex, and make $U_n$ open and convex; the strict inequalities show $U_n=\operatorname{int}(K_n)$. The uniform point $e=(1/n,\ldots,1/n)$ lies in $U_n$. For every $q\in K_n$ and $0<\epsilon<1$, $(1-\epsilon)q+\epsilon e\in U_n$ and converges to $q$ as $\epsilon\downarrow0$, so $K_n\subseteq\overline{U_n}$.

## Verification

1.1 On $U_n$, differentiating $R(q)=\sum_{i<n}q_i\log q_i+p_n\log p_n$ using [F6, F7, F9] gives $\partial_iR=\log q_i+1-(\log p_n+1)=\log(q_i/p_n)$ and $\nabla^2R(q)=\operatorname{diag}(1/q_1,\ldots,1/q_{n-1})+\frac1{p_n}\mathbf1\mathbf1^\top$. For every nonzero $v$, $v^\top\nabla^2R(q)v=\sum_{i<n}v_i^2/q_i+(\sum_{i<n}v_i)^2/p_n>0$. Thus the Hessian is positive definite on $U_n$; together with [F2] and [F10], this verifies the mirror-regularizer conditions for $(K_n,U_n)$ and the validity of the uniform initialization. [given, F2, F6, F7, F9, F10, algebra]

2.1 Fix an interior iterate $p_t$ and write $r_{t+1}$ for the full probability coordinates of a prospective dual point $y_{t+1}\in U_n$. In independent coordinates the linear loss is $f_t(q)=\ell_{t,n}+\sum_{i<n}q_i(\ell_{t,i}-\ell_{t,n})$, a differentiable convex function on all of $\mathbb R^{n-1}$ with gradient $g_{t,i}=\ell_{t,i}-\ell_{t,n}$. By step 1.1, the dual equation [F1] becomes $\log(r_{t+1,i}/r_{t+1,n})=\log(p_{t,i}/p_{t,n})-\eta(\ell_{t,i}-\ell_{t,n})$ for $i<n$. [given, F1, step 1.1, algebra]

3.1 By [F7, F8], $\exp$ is multiplicative: for real $a,b$, $\log(\exp(a)\exp(b))=a+b=\log(\exp(a+b))$, so injectivity of $\log$ gives $\exp(a+b)=\exp(a)\exp(b)$. Also $\exp(0)=1$ by $\log1=0$ and [F8], hence $\exp(-b)=1/\exp(b)$. Any positive normalized solution of step 2.1 therefore satisfies $r_{t+1,i}/r_{t+1,n}=(p_{t,i}/p_{t,n})\exp(-\eta\ell_{t,i})/\exp(-\eta\ell_{t,n})$. Its coordinates must have the form $c_t p_{t,i}\exp(-\eta\ell_{t,i})$ for a common $c_t>0$, and normalization forces $c_t=(\sum_jp_{t,j}\exp(-\eta\ell_{t,j}))^{-1}$. Conversely, define $r_{t+1,i}=c_t p_{t,i}\exp(-\eta\ell_{t,i})$ by this formula. The denominator is a finite sum of positive finite terms by [F8], so $r_{t+1}$ is positive and normalized. Its first $n-1$ coordinates define $y_{t+1}\in U_n$, and [F7, F8] verify the dual equation in step 2.1. Thus this dual point exists uniquely. [step 2.1, F7, F8, algebra, construct]

4.1 For the interior dual point $y_{t+1}$ constructed in step 3.1, [F4] gives $B_R(q\|y_{t+1})\ge\frac12\|q-y_{t+1}\|_2^2$ for every $q\in K_n$, and the defining Bregman formula gives zero at $q=y_{t+1}$. Hence its unique projection [F3] is $x_{t+1}=y_{t+1}$. In full probability coordinates this says $p_{t+1}=r_{t+1}$, proving the displayed update. Starting from the interior uniform point in step 1.1, this construction applies inductively at every round and keeps all iterates in $U_n$. [step 1.1, step 3.1, F3, F4, induction, algebra]

5.1 At initialization, [F2] and [F10] make the uniform distribution a minimizer of $R$ in $U_n$, so it is a valid OMD initial point. If $p_t(i)=W_t(i)/\sum_jW_t(j)$ and $\epsilon=\eta$, then [F5] gives $W_{t+1}(i)=W_t(i)\exp(-\eta\ell_{t,i})$, whose normalization is exactly the update proved in step 4.1. Induction from $W_1(i)=1$ proves equality of the OMD and Hedge distributions at every round. [given, F2, F5, F10, step 4.1, induction, algebra] ∎

