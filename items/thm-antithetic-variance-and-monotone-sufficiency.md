---
id: thm-antithetic-variance-and-monotone-sufficiency
kind: theorem
title: Antithetic variance and a monotone sufficient condition
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps: [def-antithetic-randomized-sampling, lem-oppositely-monotone-functions-of-independent-coordinates-have-nonpositive-covariance, def-identically-distributed-and-iid-random-variables, def-moments-variance-and-covariance, cor-expectation-linearity-monotonicity-and-modulus-bound, lem-measurable-functions-preserve-independence, thm-independent-random-elements-have-product-joint-law, thm-factorization-of-expectations-for-independent-variables, thm-covariance-bilinearity-and-symmetry, thm-change-of-variables-for-expectation]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 8, §8.2, pp. 5–8
      url: https://artowen.su.domains/mc/Ch-var-basic.pdf
    - title: Paul Glasserman, Monte Carlo Methods in Financial Engineering, Chapter 4, §4.2, pp. 205–207
      url: https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf
---

## Statement

Use the setup of [[def-antithetic-randomized-sampling]], assume $E_P[f^2]<\infty$, and put $Y=f(T(U_1))$, $\widetilde Y=f(T(1-U_1))$, $\mu=E_Pf$, and $\sigma^2=\operatorname{Var}_P(f)$. Then $Y$ and $\widetilde Y$ have the same law and mean, and the antithetic estimator from $n$ independent input pairs is unbiased with

$$\operatorname{Var}(\widehat\mu_{\rm anti})=\frac{\sigma^2+\operatorname{Cov}(Y,\widetilde Y)}{2n}.$$

Compared with the ordinary mean of $2n$ independent draws from $P$, whose variance is $\sigma^2/(2n)$, antithetic sampling has no larger variance exactly when $\operatorname{Cov}(Y,\widetilde Y)\le0$, and has strictly smaller variance exactly when this covariance is negative. A sufficient condition is that $g=f\circ T$ is coordinatewise monotone on $[0,1]^d$ (each coordinate may have either monotonicity direction). In particular, when $\mathsf X$ is a subset of $\mathbb R^m$ with the order $x\le y$ defined by $x_j\le y_j$ for every coordinate, if $T$ is coordinatewise nondecreasing as a map into $\mathsf X$ and $f$ is nondecreasing for that order, then $g$ is coordinatewise nondecreasing.

## Facts & Assumptions

**Given:** The sampler, product-uniform inputs, IID input pairs, measurability, and finite second moment in the Statement.

[F1] [[def-antithetic-randomized-sampling]]: The input coordinates are independent uniform $[0,1]$ variables, $T(U_1)\sim P$, and the estimator averages $[f(T(U_i))+f(T(1-U_i))]/2$ over independent pairs.

[F2] [[def-identically-distributed-and-iid-random-variables]]: IID means identical laws and mutual independence.

[F3] [[lem-measurable-functions-preserve-independence]]: Measurable coordinatewise functions of an independent family remain independent.

[F4] [[thm-independent-random-elements-have-product-joint-law]]: The joint law of a finite independent family is the product of its marginal laws.

[F5] [[def-moments-variance-and-covariance]]: Variance and covariance are the centered second moment and centered product expectation.

[F6] [[thm-covariance-bilinearity-and-symmetry]]: Covariance is symmetric and bilinear on finite square-integrable linear combinations.

[F7] [[thm-factorization-of-expectations-for-independent-variables]]: Products of independent integrable variables have factored expectations.

[F8] [[lem-oppositely-monotone-functions-of-independent-coordinates-have-nonpositive-covariance]]: Square-integrable oppositely monotone functions of independent coordinates have nonpositive covariance.

[F9] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: Expectation is linear for integrable finite sums.

[F10] [[thm-change-of-variables-for-expectation]]: If $T(U)$ has law $P$, then $E[f(T(U))]=E_Pf$ and, when integrable, $E[f(T(U))^2]=E_P[f^2]$.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 For a uniform coordinate, $\mathbb P(U_{1j}=s)=0$ for every $s\in[0,1]$, since $\mathbb P(U_{1j}\le s)=s$ and the left limit of this cdf at $s$ is also $s$. Thus for $0\le t\le1$, $\mathbb P(1-U_{1j}\le t)=\mathbb P(U_{1j}\ge1-t)=1-\mathbb P(U_{1j}<1-t)=t$. By [F3], the reflected coordinates remain independent; [F4] then shows $1-U_1$ has the same product-uniform law as $U_1$. Therefore both $T(U_1)$ and $T(1-U_1)$ have law $P$. Applying [F10] to $f$ and $f^2$ identifies their means and variances as $\mu$ and $\sigma^2$, so $Y$ and $\widetilde Y$ have the same law, mean $\mu$, and variance $\sigma^2$. [F1, F3, F4, F10]

1.2 The pair value $Z_i=[f(T(U_i))+f(T(1-U_i))]/2$ is a measurable function of $U_i$. Thus the $Z_i$ are IID by [F2]–[F3], each has mean $\mu$ by [F9], and their average is unbiased. [F1, F2, F3, F9]

2.1 By [F5]–[F6], $\operatorname{Var}(Z_i)=[\operatorname{Var}(Y)+\operatorname{Var}(\widetilde Y)+2\operatorname{Cov}(Y,\widetilde Y)]/4=[\sigma^2+\operatorname{Cov}(Y,\widetilde Y)]/2$. For distinct $i,j$, the centered $Z_i,Z_j$ are independent, so [F7] gives zero covariance; expanding the centered square of their average therefore gives the stated variance divided by $n$. [F5, F6, F7, step 1.2, algebra]

3.1 The mean of $2n$ independent $P$-draws has variance $\sigma^2/(2n)$ by the same centered-square expansion and [F7]. Comparing this with step 2.1 gives the iff conditions for weak and strict variance reduction. [F5, F7, step 2.1, algebra]

4.1 For each coordinate choose a monotonicity direction for $g$: define $S_j(v)=v_j$ in a nondecreasing coordinate and $S_j(v)=1-v_j$ in a nonincreasing coordinate; a constant coordinate may be assigned either direction. Then $S$ is a coordinatewise reflection map with $S(S(v))=v$ and $S(1-v)=1-S(v)$. By [F3] and [F4], $V=S(U_1)$ again has independent uniform coordinates, and $\phi=g\circ S$ is coordinatewise nondecreasing on $[0,1]^d$. Define the coordinatewise clamp $C:\mathbb R^d\to[0,1]^d$ by $C_j(x)=\min\{1,\max\{0,x_j\}\}$. It is continuous and nondecreasing in every coordinate, and $C(1-v)=1-C(v)$. Hence $\bar\phi:=\phi\circ C$ is a Borel coordinatewise nondecreasing function on $\mathbb R^d$, while $v\mapsto\bar\phi(1-v)$ is Borel and coordinatewise nonincreasing. On the cube these extensions equal $\phi(v)$ and $\phi(1-v)$, respectively; the identities for $S$ give $g(U_1)=\phi(V)$ and $g(1-U_1)=\phi(1-V)$. By step 1.1, these functions are square-integrable, so [F8] applies to $\bar\phi(V)$ and $\bar\phi(1-V)$ and gives $\operatorname{Cov}(Y,\widetilde Y)\le0$. In the stated ordered-subset case, $u\le v$ coordinatewise implies $T(u)\le T(v)$ and then $f(T(u))\le f(T(v))$, which makes $g$ nondecreasing and is the special case $S(v)=v$. [F1, F3, F4, F8, step 1.1, given] ∎
