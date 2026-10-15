---
id: lem-iid-bounded-variance-bernstein-tail
kind: lemma
title: "Bernstein tail bound for independent bounded sums"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-independent-random-elements
  - def-real-exponential-function-and-e
  - cor-markov-inequality-for-random-variables
  - thm-exponential-addition-formula
  - thm-factorization-of-expectations-for-independent-variables
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-exponential-is-strictly-increasing
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Joel A. Tropp, Probability in High Dimensions, Caltech ACM 217 lecture notes, Lecture 4, §§4.4.1–4.4.2"
      url: "https://tropp.caltech.edu/notes/Tro21-Probability-High-LN-corr.pdf"
    - title: "Subhashis Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §2.5"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
---

## Statement

Let $Z_1,\ldots,Z_m$ be independent, integrable, centered real random variables on a probability space, with $|Z_i|\le b$ almost surely for a finite $b>0$. Put $S_m=\sum_{i=1}^mZ_i$ and $V=\sum_{i=1}^m\mathbb E[Z_i^2]$. For every $t>0$, if $V>0$ then
$$\mathbb P(S_m\ge t)\le\exp\!\left(-\frac{t^2}{2(V+bt/3)}\right),\qquad \mathbb P(S_m\le-t)\le\exp\!\left(-\frac{t^2}{2(V+bt/3)}\right).$$
If $V=0$, then $S_m=0$ almost surely.

## Facts & Assumptions

**Given:** A probability space and a finite independent family $Z_1,\ldots,Z_m$ of integrable real random variables with $\mathbb E Z_i=0$ and $|Z_i|\le b$ almost surely, where $b>0$.

[F1] [[def-probability-measure]] and [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: a probability space has total mass one, and expectation of an integrable random variable is its integral against that probability measure.

[F2] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on finite sums of integrable functions.

[F3] [[def-real-exponential-function-and-e]]: $\exp(x)=\sum_{k\ge0}x^k/k!$ for every real $x$.

[F4] [[thm-exponential-addition-formula]]: $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$.

[F5] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of finite products of nonnegative measurable functions of independent variables factor.

[F6] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Y$ and $a>0$, $\mathbb P(Y\ge a)\le\mathbb E[Y]/a$.

[F7] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative random variable with expectation zero vanishes almost surely.

[F8] [[def-independent-random-elements]]: independence means factorization of probabilities of finite measurable-coordinate events.

[F9] [[thm-exponential-is-strictly-increasing]]: the exponential is continuous and strictly increasing.

[F10] [[thm-arithmetic-and-lattice-operations-preserve-measurability]] and [[thm-composition-with-borel-functions-preserves-measurability]]: scalar arithmetic preserves measurability, and composing a measurable real-valued map with a Borel map preserves measurability.

## Proof

1.1 If $m=0$, then $S_m=V=0$, so the zero-variance clause holds. Suppose $m\ge1$, fix one centered variable $Z$ with $|Z|\le b$, and let $\sigma^2=\mathbb E[Z^2]$. For every integer $k\ge2$, the power functions are Borel and $x\mapsto e^{\lambda x}$ is continuous by [F9], so their compositions with $Z$ are measurable by [F10]; the almost-sure bound gives integrability of each power. Thus $|\mathbb E[Z^k]|\le\mathbb E[|Z|^k]\le b^{k-2}\sigma^2$. For fixed real $\lambda$, the exponential series converges uniformly on $[-b,b]$: its tail is bounded by $\sum_{k>N}(|\lambda|b)^k/k!\to0$. Since $|Z|\le b$ almost surely, this uniform convergence and finite linearity [F2] permit termwise expectation in [F3], and the centered first-order term vanishes. [F1, F2, F3, F9, F10, given]

2.1 For $k\ge2$, $k!\ge2\cdot3^{k-2}$, by induction from $2!=2$ and the fact that each next factor is at least $3$. If $|\lambda|b<3$, [F3] and step 1.1 therefore give $\mathbb E e^{\lambda Z}\le1+\sigma^2\sum_{k\ge2}\frac{|\lambda|^k b^{k-2}}{k!}\le1+\frac{\lambda^2\sigma^2}{2(1-|\lambda|b/3)}\le\exp\!\left(\frac{\lambda^2\sigma^2}{2(1-|\lambda|b/3)}\right),$ where the last inequality follows from $1+x\le e^x$ for $x\ge0$, which follows termwise from [F3]. [F3, F9, F10, step 1.1, algebra]

3.1 For $0<\lambda<3/b$, repeated use of [F4] gives $e^{\lambda S_m}=\prod_{i=1}^m e^{\lambda Z_i}$. Each $Z_i$ is measurable, scalar multiplication preserves measurability by [F10], and $x\mapsto e^x$ is Borel by [F9], so the factors are measurable by composition. They are nonnegative functions of the independent variables, so [F5] and step 2.1 yield $\mathbb E e^{\lambda S_m}=\prod_{i=1}^m\mathbb E e^{\lambda Z_i}\le\exp\!\left(\frac{\lambda^2V}{2(1-\lambda b/3)}\right).$ [F4, F5, F8, F9, F10, step 2.1]

4.1 If $V>0$, take $\lambda=t/(V+bt/3)$; then $0<\lambda b/3=bt/(3V+bt)<1$. The finite sum $S_m$ and its threshold event are measurable by [F10]. Since [F9] makes $e^x$ increasing, on $\{S_m\ge t\}$ one has $e^{\lambda S_m}\ge e^{\lambda t}$. Markov [F6] and step 3.1 give $\mathbb P(S_m\ge t)\le\exp\!\left(\frac{\lambda^2V}{2(1-\lambda b/3)}-\lambda t\right)=\exp\!\left(-\frac{t^2}{2(V+bt/3)}\right).$ [F3, F6, F9, F10, step 3.1, algebra]

5.1 Applying step 4.1 to $-Z_1,\ldots,-Z_m$ gives the lower-tail bound, since this family remains independent, centered, bounded by $b$, and has the same total second moment $V$. If $V=0$, each nonnegative $Z_i^2$ has expectation zero, so [F7] makes every $Z_i=0$ almost surely; their finite sum is then zero almost surely. [F7, given, step 4.1] ∎
