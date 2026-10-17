---
id: ex-regularized-logistic-finite-sum
kind: example
title: A regularized logistic finite sum with an exact minimizer
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-svrg-finite-sum-method
  - thm-svrg-epoch-expected-linear-contraction
  - lem-finite-sum-gradient-is-average
  - def-finite-sum
  - lem-finite-sum-laws
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-strong-convex-composite-objective
  - def-lipschitz-holder-contraction
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - cor-exponential-reciprocal-and-positivity
  - thm-natural-logarithm-laws
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-total-derivatives
  - cor-mean-value-theorem
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - def-euclidean-inner-product
  - def-axiom-of-choice
  - lem-of-square-positive
  - lem-of-zero-mult
  - lem-of-sign-rules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rie Johnson and Tong Zhang, Accelerating Stochastic Gradient Descent using Predictive Variance Reduction, NeurIPS 2013"
      url: https://proceedings.neurips.cc/paper_files/paper/2013/file/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Paper.pdf
      locator: Sections 2–3, finite-sum objective and SVRG Theorem 1.
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Sections 3.1–3.4 and 6.3, smooth convex objectives and SVRG.
    - title: "John Lebl, Basic Analysis I, Section 8.3"
      url: https://www.jirka.org/ra/html/sec_svtheder.html
      locator: Sum, scalar multiple, and chain rules used in the local finite-dimensional gradient calculations.
---

## Statement

Consider $n=14$ one-dimensional examples, seven with feature $a_i=1$ and label $y_i=1$, and seven with $a_i=1$ and $y_i=-1$. With unit $\ell_2$ regularization, define

$f_i(w)=\log(1+\exp(-y_iw))+\frac12w^2,\qquad F(w)=\frac1{14}\sum_{i=1}^{14}f_i(w).$
Here $\log$ denotes the natural logarithm.

Then each component is convex with $5/4$-Lipschitz gradient, $F$ is $1$-strongly convex, and its unique minimizer is $w^*=0$. An SVRG epoch from snapshot $\widetilde w=1$ with $\eta=2/25$ and $m=28$ therefore satisfies

$$\mathbb E[F(w_J)-F(0)]\le\frac{181}{224}\,[F(1)-F(0)],\qquad F(1)-F(0)=\frac12\log(2+e+e^{-1})+\frac12-\log 2.$$

## Facts & Assumptions

**Given:** The finite data set and objective in the Statement.

[F1] [[alg-svrg-finite-sum-method]]: SVRG returns an independent uniform inner iterate and uses a full gradient plus two component gradients per inner update.

[F2] [[thm-svrg-epoch-expected-linear-contraction]]: if all components are convex, continuously differentiable and $L$-smooth, the average is $\mu$-strongly convex with a stationary point $x^*$, $n\ge10L/\mu$, $\eta=1/(10L)$, and $m=2n$, then from a deterministic snapshot with the theorem's independent uniform component draws and output index the expected gap relative to $x^*$ contracts by its stated $q$.

[F3] [[lem-finite-sum-gradient-is-average]]: the gradient of the finite average is the average of component gradients.

[F4] [[def-strong-convex-composite-objective]]: $\mu$-strong convexity is the strong-Jensen inequality with decrement $(\mu/2)\theta(1-\theta)|x-y|^2$.

[F5] [[def-lipschitz-holder-contraction]]: an $L$-Lipschitz gradient obeys $|f_i'(u)-f_i'(v)|\le L|u-v|$ in one dimension.

[F6] [[thm-derivative-of-exponential]]: $(e^w)'=e^w$.

[F7] [[thm-logarithm-derivative-and-integral]]: $(\log u)'=1/u$ for $u>0$.

[F8] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the derivative of the outer function applied to the derivative of the inner function.

[F9] [[thm-algebra-of-total-derivatives]]: sums and scalar multiples differentiate termwise.

[F10] [[cor-mean-value-theorem]]: a differentiable scalar function's difference over an interval equals its derivative at an intermediate point times the interval length.

[F11] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a $C^2$ scalar function on a segment has a second-order Taylor formula with Hessian remainder at an intermediate point.

[F12] [[def-euclidean-inner-product]]: in one dimension the Euclidean norm is absolute value.

[F13] [[def-real-exponential-function-and-e]]: $\exp(w)$ is the real exponential and $e=\exp(1)$.

[F14] [[def-finite-sum]]: $F$ is the finite average of its fourteen component losses.

[F15] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$.

[F16] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing on $(0,\infty)$ and $\log(ab)=\log a+\log b$ for $a,b>0$.

[F17] [[cor-exponential-reciprocal-and-positivity]]: $\exp(w)>0$ and $\exp(-w)=1/\exp(w)$.

[F18] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity is the segment inequality for function values.

[F19] [[lem-of-sign-rules]]: multiplication by a positive denominator preserves order. [[lem-of-square-positive]] makes a nonzero real square positive, and [[lem-of-zero-mult]] gives square zero in the zero case; thus every real square is nonnegative.

[F20] [[lem-finite-sum-laws]]: finite sums are additive and obey scaling.

[A1] [[def-axiom-of-choice]]: assume AC for the conditional-expectation interfaces inherited from the SVRG theorem [F2].

## Proof

**Given:** The data, loss, and regularizer in the Statement.

1.1 Write $r=\exp(w)>0$ by [F13] and [F17]. By [F6]–[F9], $f_+'(w)=-1/(1+r)+w$, $f_-'(w)=r/(1+r)+w$, and $f_+''(w)=f_-''(w)=1+r/(1+r)^2$. Since $(1+r)^2-4r=(r-1)^2\ge0$ by [F19], $1\le f_i''(w)\le5/4$ for every component and $w$. [F6, F7, F8, F9, F13, F17, F19, given, algebra]

2.1 Apply [F10] to $f_i'$ and [F12]; step 1.1 gives $|f_i'(u)-f_i'(v)|\le(5/4)|u-v|$, so every component is $5/4$-smooth. For any $u,v$, [F11] gives $f_i(v)\ge f_i(u)+f_i'(u)(v-u)+(v-u)^2/2$. For $0\le\theta\le1$, put $z=(1-\theta)u+\theta v$, apply this inequality from $z$ to $u,v$, weight by $1-\theta,\theta$, and add; the gradient terms cancel and $(1-\theta)(u-z)^2+\theta(v-z)^2=\theta(1-\theta)(v-u)^2$. Hence $(1-\theta)f_i(u)+\theta f_i(v)\ge f_i(z)+\frac12\theta(1-\theta)(v-u)^2$. Since the subtracted term is nonnegative, this gives ordinary convexity by [F18] and verifies the strong Jensen inequality in [F4]. Averaging these inequalities with [F20] proves that F is convex and 1-strongly convex. [F4, F5, F10, F11, F12, F14, F18, F20, step 1.1, given, algebra]

3.1 At $w=0$, the two component derivatives in step 1.1 are $-1/2$ and $1/2$, so [F3], [F14] and [F20] give $F'(0)=0$. Averaging the lower Taylor inequality from step 2.1 gives $F(w)\ge F(0)+F'(0)w+w^2/2=F(0)+w^2/2$, so $0$ is the unique minimizer. Substitution gives $F(0)=\log2$. The product law [F16] and $e=\exp(1)$ from [F13], with $e^{-1}=1/e$ from [F17], give $F(1)-F(0)=\tfrac12\log(2+e+e^{-1})+\tfrac12-\log2$. Since $n=14\ge10(5/4)/1$, $\eta=2/25=1/(10L)$, and $m=28=2n$, [F1] and [F2] give the claimed SVRG guarantee with $q=\frac{25L}{4\mu n}+\frac14=\frac{125}{224}+\frac{56}{224}=\frac{181}{224}$. [A1, F1, F2, F3, F13, F14, F15, F16, F17, F20, step 1.1, step 2.1, given, algebra] ∎
