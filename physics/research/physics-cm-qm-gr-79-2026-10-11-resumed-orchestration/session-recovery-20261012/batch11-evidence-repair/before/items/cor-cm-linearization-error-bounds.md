---
id: cor-cm-linearization-error-bounds
kind: corollary
title: "Mean and mean-square bounds for the second-order linearization error"
status: draft
origin: pipeline
domain: mathematics
deps: [cor-expectation-linearity-monotonicity-and-modulus-bound, def-ck-euclidean-maps-and-diffeomorphisms, def-convex-subset-of-euclidean-space, def-euclidean-inner-product, def-integrable-real-and-complex-functions-and-their-integrals, def-jacobian-matrix-and-gradient, def-measurable-function-between-measurable-spaces, def-random-element-and-real-random-variable, lem-cm-uniform-second-order-remainder-bound, prop-closure-properties-of-measurable-functions-used-by-the-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-continuous-preimages-of-borel-sets-are-borel]
dependency_roles:
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
  lem-cm-uniform-second-order-remainder-bound: mathematical-premise
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clause 5.1.2, note to equation (10), and clause H.1 on higher-order terms in the presence of significant nonlinearity"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical Inference (Springer, 2004), Section 5.5 (the delta method as a linear approximation); full text copy at the cited URL"
      url: "https://egrcc.github.io/docs/math/all-of-statistics.pdf"
verification:
  precheck: pass
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb R^m$ be open and convex, let $h:U\to\mathbb R$
be of class $C^2$, and let $B\in[0,+\infty)$ satisfy
$\lVert H_h(x)\rVert\le B$ for every $x\in U$
([[lem-cm-uniform-second-order-remainder-bound]]). Let
$X:\Omega\to\mathbb R^m$ be a random element with $X(\omega)\in U$ for every
$\omega$, with $E[X]=\mu\in U$ and $E\lvert X-\mu\rvert^2<+\infty$, and put
$$R:=h(X)-h(\mu)-\nabla h(\mu)\cdot(X-\mu).$$
Then $R$ is integrable and
$$\lvert E[R]\rvert\le E\lvert R\rvert \le\frac{B}{2}\,E\lvert X-\mu\rvert^2 .$$
If moreover $E\lvert X-\mu\rvert^4<+\infty$, then $R^2$ is integrable and
$$E\bigl[R^2\bigr]\le\frac{B^2}{4}\,E\lvert X-\mu\rvert^4 .$$

## Facts & Assumptions

**Given:** Objects and hypotheses as in the Statement.

[L1] Under the stated convexity and Hessian bound, every $y\in U$ satisfies $\lvert h(y)-h(\mu)-\nabla h(\mu)\cdot(y-\mu)\rvert\le\frac{B}{2}\lvert y-\mu\rvert^2$. ([[lem-cm-uniform-second-order-remainder-bound]])

[L2] A continuous real-valued map on an open subset of $\mathbb R^m$ is Borel measurable, composition of a Borel map with a random element is a random variable, and sums, differences and real multiples of measurable real-valued functions are measurable. ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-measurable-function-between-measurable-spaces]], [[def-random-element-and-real-random-variable]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[L3] A measurable real-valued function $g$ with $\lvert g\rvert\le cf$ pointwise, where $c\ge0$ and $f$ is integrable with $f\ge0$, is integrable: monotonicity and homogeneity of the nonnegative integral give $\int\lvert g\rvert\le c\int f<+\infty$. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[L4] For integrable random variables, $\lvert E[G]\rvert\le E[\lvert G\rvert]$, and $0\le G\le H$ almost surely with $G,H$ integrable gives $E[G]\le E[H]$. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]])

## Proof

**Proof technique:** direct.

1.1 The function $h$ is continuous because it is $C^2$, hence Borel measurable, so $h\circ X$ is a random variable; the function $x\mapsto\nabla h(\mu)\cdot(x-\mu)$ is a real-linear map, hence Borel measurable, so its composition with $X$ is a random variable too. Therefore $R$, their difference, is a random variable. [given, L2]

2.1 Applying [L1] at $y=X(\omega)$ for every $\omega$ gives the pointwise bound $\lvert R\rvert\le\frac{B}{2}\lvert X-\mu\rvert^2$, and squaring gives $R^2\le\frac{B^2}{4}\lvert X-\mu\rvert^4$. [given, step 1.1, L1, algebra]

3.1 The function $\lvert X-\mu\rvert^2$ is integrable by hypothesis, so step 2.1 with $g=R$, $c=B/2$ and $f=\lvert X-\mu\rvert^2$ makes $R$ integrable by [L3], and [L4] applied to $R$ and to the pair $(0,\lvert R\rvert)$ gives $\lvert E[R]\rvert\le E\lvert R\rvert\le\frac{B}{2}E\lvert X-\mu\rvert^2$. [step 1.1, step 2.1, L3, L4, algebra]

3.2 If $E\lvert X-\mu\rvert^4<+\infty$, then step 2.1 with $g=R^2$, $c=B^2/4$ and $f=\lvert X-\mu\rvert^4$ makes $R^2$ integrable by [L3], and [L4] gives $E[R^2]\le\frac{B^2}{4}E\lvert X-\mu\rvert^4$. [step 1.1, step 2.1, given, L3, L4, algebra]

4.1 Steps 3.1 and 3.2 prove the two displayed conclusions, the second under its stated fourth-moment hypothesis. [step 3.1, step 3.2] ∎

The bound is a domination statement: it controls the linearization error by the second moment of the input deviation. It yields no bound on $E[R]$ in terms of $E\lvert X-\mu\rvert^4$ alone and no conclusion beyond the stated moment order.
