---
title: Gaussian entry moments and triangular independence
status: published
research_item: prop-expander-prereq-gaussian-entry-moments
dependency_level: 0
---

## Prerequisites

- [math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws)
- [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)
- [math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation)
- [math:thm-integration-against-a-density](https://alphabetamath.cc/item/thm-integration-against-a-density)
- [math:thm-integration-by-parts](https://alphabetamath.cc/item/thm-integration-by-parts)
- [math:thm-derivative-of-exponential](https://alphabetamath.cc/item/thm-derivative-of-exponential)
- [math:thm-exponential-beats-every-polynomial](https://alphabetamath.cc/item/thm-exponential-beats-every-polynomial)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)
- [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula)
- [math:thm-geometric-series](https://alphabetamath.cc/item/thm-geometric-series)
- [math:thm-monotone-convergence-for-the-integral](https://alphabetamath.cc/item/thm-monotone-convergence-for-the-integral)
- [math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral](https://alphabetamath.cc/item/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral)
- [math:thm-factorization-of-expectations-for-independent-variables](https://alphabetamath.cc/item/thm-factorization-of-expectations-for-independent-variables)
- [math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring)
- [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)
- [math:thm-chain-rule](https://alphabetamath.cc/item/thm-chain-rule)
- [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power)
- [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives)
- [math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions)
- [math:thm-composition-of-continuous-functions](https://alphabetamath.cc/item/thm-composition-of-continuous-functions)
- [math:cor-continuous-functions-are-borel-measurable](https://alphabetamath.cc/item/cor-continuous-functions-are-borel-measurable)
- [math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable)
- [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)
- [math:thm-monotone-change-of-variable-for-riemann-integrals](https://alphabetamath.cc/item/thm-monotone-change-of-variable-for-riemann-integrals)


## Statement

Assume the Axiom of Choice, as in the adopted normal-law construction. Let $Z$ have standard real Gaussian law $N(0,1)$, with density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$. Its moments exist absolutely, $\mathbb E Z^0=1$, $\mathbb E Z^{2j+1}=0$ for $j\geq0$, and $\mathbb E Z^{2j}=(2j-1)!!$ for $j\geq1$, where $(2j-1)!!=1\cdot3\cdots(2j-1)$. In particular every positive even moment is at least $1$.

Let $n\geq0$ be an integer and put $I=\{1,\ldots,n\}$, with $I=\varnothing$ when $n=0$. On a common probability space take mutually independent standard Gaussian variables $G_{ij}$ for $1\leq i\leq j\leq n$ and set $G_{ji}=G_{ij}$ for $i<j$. The real random matrix $G$ is interpreted pointwise: for each outcome $\omega$, its realization is the function $G(\omega):I\times I\to\mathbb R$ with entries $G_{ij}(\omega)$. Its realizations are finite square symmetric matrices. Thus the independent coordinates are those in the chosen triangular half; the two mirrored entries are the same nonconstant variable and are not independent. For any finite list of matrix entries, let $m_{ij}$ be the number of occurrences of the unordered pair $\{i,j\}$. The expectation of their product is $\prod_{i\leq j}\mathbb E Z^{m_{ij}}$, with unused coordinates contributing $1$ and empty products equal to $1$. In particular, the actual multiplicity of each unordered pair must be retained in a trace-moment calculation.

## Facts & Assumptions

[F1] A real random variable is a measurable map from a probability space to $\mathbb R$ with its Borel sigma-algebra ([math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)). Under Choice, $N(0,1)$ is the probability law with density $\phi$ above; its total mass is one ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-standard-normal-and-normal-laws](https://alphabetamath.cc/item/def-standard-normal-and-normal-laws)).

[F2] Expectation is integration against the probability measure; change of variables to a random variable's law and integration against a density give the corresponding density integrals for nonnegative functions and, by positive and negative parts, for integrable functions ([math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable), [math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation), [math:thm-integration-against-a-density](https://alphabetamath.cc/item/thm-integration-against-a-density)).

[F3] Finite-interval integration by parts applies to continuously differentiable functions. The derivative of $e^t$ is $e^t$. The power rule and termwise differentiation of polynomials, the algebra of derivatives, and the chain rule apply on $\mathbb R$; all real points of the inner and outer domains are limit points ([math:thm-integration-by-parts](https://alphabetamath.cc/item/thm-integration-by-parts), [math:thm-derivative-of-exponential](https://alphabetamath.cc/item/thm-derivative-of-exponential), [math:lem-derivative-of-a-power](https://alphabetamath.cc/item/lem-derivative-of-a-power), [math:thm-algebra-of-derivatives](https://alphabetamath.cc/item/thm-algebra-of-derivatives), [math:thm-chain-rule](https://alphabetamath.cc/item/thm-chain-rule)).

[F4] Exponential decay dominates every fixed polynomial; the exponential is increasing and obeys its addition law. A geometric series with ratio strictly between zero and one converges ([math:thm-exponential-beats-every-polynomial](https://alphabetamath.cc/item/thm-exponential-beats-every-polynomial), [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing), [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula), [math:thm-geometric-series](https://alphabetamath.cc/item/thm-geometric-series)).

[F5] Monotone convergence applies to nonnegative integrands, and a bounded Riemann-integrable function on a compact interval has the same Lebesgue integral there; the countable-choice hypothesis of the latter supplier follows from the assumed Axiom of Choice ([math:thm-monotone-convergence-for-the-integral](https://alphabetamath.cc/item/thm-monotone-convergence-for-the-integral), [math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral](https://alphabetamath.cc/item/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral)).

[F6] Independence means independence of the coordinate-generated sigma-algebras. For a finite independent family, integrable Borel functions of the individual coordinates have an integrable product whose expectation factors ([math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements), [math:thm-factorization-of-expectations-for-independent-variables](https://alphabetamath.cc/item/thm-factorization-of-expectations-for-independent-variables)).

[F7] A finite matrix over $\mathbb R$ is a function on a finite rectangular index set; relabeling the supplier's indices $0,\ldots,n-1$ as $1,\ldots,n$ gives the pointwise matrix convention in the Statement. For the empty index set there is exactly one such function ([math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring)).

[F8] A property of natural numbers holds for every natural number if it holds at zero and passes from each natural number to its successor ([math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)).

[F9] Polynomial functions and their absolute values are continuous, as are sums, scalar multiples, products and compositions of continuous real functions. Continuous real functions on $\mathbb R$ are Borel measurable, under countable choice, which follows from the assumed Axiom of Choice. On a compact interval a continuous real function is bounded and Riemann integrable ([math:thm-algebra-of-continuous-functions](https://alphabetamath.cc/item/thm-algebra-of-continuous-functions), [math:thm-composition-of-continuous-functions](https://alphabetamath.cc/item/thm-composition-of-continuous-functions), [math:cor-continuous-functions-are-borel-measurable](https://alphabetamath.cc/item/cor-continuous-functions-are-borel-measurable), [math:thm-continuous-implies-integrable](https://alphabetamath.cc/item/thm-continuous-implies-integrable)).

[F10] If $\psi:[c,d]\to[a,b]$ is a monotone surjection, differentiable with one-sided derivatives at the endpoints and with Riemann-integrable derivative, then for every bounded Riemann-integrable $f:[a,b]\to\mathbb R$, $\int_a^b f(x)\,dx=\int_c^d f(\psi(t))|\psi\prime(t)|\,dt$ ([math:thm-monotone-change-of-variable-for-riemann-integrals](https://alphabetamath.cc/item/thm-monotone-change-of-variable-for-riemann-integrals)).

## Proof

**Given:** Choice, a standard Gaussian $Z$, and a finite symmetric matrix constructed from independent triangular standard Gaussian entries as in the statement.

**Goal:** Prove the moment formulas, absolute integrability, and the multiplicity-preserving factorization.

1.1 Fix an integer $k\geq0$. By [F4], $t^k e^{-t/2}$ is bounded for $t\geq1$. Since $t^2\geq2t$ for $t\geq2$, $t^k e^{-t^2/2}\leq(t^k e^{-t/2})e^{-t/2}\leq C_k e^{-t/2}$ there for some finite $C_k$. The same bound holds with $t=|x|$. On each interval $[n,n+1]$, $n\geq2$, monotonicity and the addition law bound $e^{-x/2}$ by $e^{-n/2}$; the resulting geometric series converges. The integrand is continuous, hence bounded and Riemann integrable on every compact interval, including $[-2,2]$, by [F3] and [F9]. Applying [F5] to the successive compact intervals shows that $\int_{\mathbb R}|x|^k\phi(x)\,dx<\infty$. The nonnegative case of [F2] therefore makes $Z^k$ integrable. The same tail estimate also gives $R^k\phi(R)\to0$ as $R\to\infty$. [F2, F3, F4, F5, F9]

2.1 Put $I_k=\int_{\mathbb R}x^k\phi(x)\,dx$. By [F2] and step 1.1, $I_k=\mathbb E Z^k$. For odd $k$ and $R>0$, $f(x)=x^k\phi(x)$ is continuous, hence bounded and Riemann integrable on $[-R,0]$, by [F3] and [F9]. The reflection $r:[0,R]\to[-R,0]$, $r(t)=-t$, is a decreasing surjection. Its difference quotient is $-1$, including in the one-sided endpoint limits, so its derivative is the Riemann-integrable constant $-1$ and $|r'(t)|=1$. Applying [F10] and using $\phi(-t)=\phi(t)$ gives $\int_{-R}^0 x^k\phi(x)\,dx=\int_0^R(-t)^k\phi(-t)\,dt=-\int_0^R t^k\phi(t)\,dt$. Thus the two half-interval integrals cancel. By [F5] the compact-interval Riemann and Lebesgue integrals agree; monotone convergence for the positive and negative parts, together with absolute integrability from step 1.1, gives $I_k=0$. Also $I_0=1$ by [F1]. [F1, F2, F3, F5, F9, F10, step 1.1]

3.1 For $k\geq2$ and $R>0$, the polynomial rule in [F3] gives $h'(x)=-x$ for $h(x)=-x^2/2$ and $u'(x)=(k-1)x^{k-2}$ for $u(x)=x^{k-1}$. The chain and scalar-multiple rules in [F3], on the full real inner and outer domains, give $\phi'(x)=-x\phi(x)$. Thus $v(x)=-\phi(x)$ has $v'(x)=x\phi(x)$. These derivatives are continuous by [F3] and [F9], so [F3] applies on $[-R,R]$. This gives $\int_{-R}^R x^k\phi(x)\,dx=[-x^{k-1}\phi(x)]_{-R}^R+(k-1)\int_{-R}^R x^{k-2}\phi(x)\,dx$. Both boundary terms vanish as $R\to\infty$ by step 1.1. The compact-interval integrals equal their Lebesgue counterparts by [F5], and absolute integrability permits passage to the whole line, separately for positive and negative parts. Hence $I_k=(k-1)I_{k-2}$. The base case is $I_2=I_0=1$. For $j\geq1$, the recurrence gives $I_{2j+2}=(2j+1)I_{2j}$, so [F8], applied to the property at $j=m+1$ for $m\geq0$, gives $I_{2j}=(2j-1)!!$ for every $j\geq1$. Each factor is a positive integer, so this moment is at least $1$. [F3, F5, F8, F9, step 1.1, step 2.1]

4.1 Using the pointwise finite matrix convention [F7], group a finite product of entries by its unordered index pairs. The result is $\prod_{i\leq j}G_{ij}^{m_{ij}}$. Each power is integrable by step 1.1. The functions $x\mapsto x^{m_{ij}}$ are continuous polynomials, hence Borel measurable by [F9]; applying [F6] to them gives the stated factorization, including exponent zero. If $n=0$, the only list of entries is empty and the identity reads $\mathbb E1=1$; an empty list for any $n$ gives the same identity. For $i<j$, $G_{ij}=G_{ji}$ and this variable has mean zero and second moment one by steps 2.1 and 3.1. If the two copies were independent, [F6] would give their product expectation as zero, contradicting the second moment. This proves the statement. [F6, F7, F9, step 1.1, step 2.1, step 3.1, algebra] ∎
