---
id: cor-cm-linearization-error-bounds
kind: corollary
title: "Mean, mean-square and covariance bounds for second-order linearization error"
status: draft
origin: pipeline
domain: mathematics
deps:
  [
    cor-expectation-linearity-monotonicity-and-modulus-bound,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-cm-covariance-matrix-of-a-random-vector,
    def-convex-subset-of-euclidean-space,
    def-euclidean-inner-product,
    def-integrable-real-and-complex-functions-and-their-integrals,
    def-jacobian-matrix-and-gradient,
    def-measurable-function-between-measurable-spaces,
    def-random-element-and-real-random-variable,
    lem-cm-linearized-propagation-of-covariance,
    lem-cm-uniform-second-order-remainder-bound,
    lem-variance-and-covariance-identities-for-random-variables,
    prop-closure-properties-of-measurable-functions-used-by-the-integral,
    prop-order-and-scalar-rules-for-the-nonnegative-integral,
    thm-continuous-preimages-of-borel-sets-are-borel,
    thm-coordinatewise-measurability-into-r-n
  ]
dependency_roles:
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm-covariance-matrix-of-a-random-vector: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
  lem-cm-linearized-propagation-of-covariance: mathematical-premise
  lem-cm-uniform-second-order-remainder-bound: mathematical-premise
  lem-variance-and-covariance-identities-for-random-variables: mathematical-premise
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-coordinatewise-measurability-into-r-n: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression
        of uncertainty in measurement (BIPM), clause 5.1.2, note to equation
        (10), and clause H.1 on higher-order terms in the presence of
        significant nonlinearity"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical
        Inference (Springer, 2004), Section 5.5 (the delta method as a linear
        approximation); full text copy at the cited URL"
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


**Vector covariance error.** Let $f=(f_1,\ldots,f_d):U\to\mathbb R^d$, $d\ge1$, have $C^2$ components satisfying $\|H_{f_i}(x)\|\le B_i$ on $U$, $B_i\ge0$. Keep the same input hypotheses and assume $M_4:=E|X-\mu|^4<\infty$. Put $A=Df(\mu)$, $L=f(\mu)+A(X-\mu)$, $S=A\operatorname{Cov}(X)A^{\mathsf T}$ and $q_i=B_i^2 M_4/4$. Then $f(X)$ is square-integrable and for every $1\le i,j\le d$,
$$|\operatorname{Cov}(f(X))_{ij}-S_{ij}|\le\sqrt{S_{ii}q_j}+\sqrt{S_{jj}q_i}+\sqrt{q_iq_j}.$$
In particular, for the scalar function $h$ above, writing $s^2=\operatorname{Var}(h(\mu)+\nabla h(\mu)\cdot(X-\mu))$ and $q=B^2 M_4/4$ gives
$$|\operatorname{Var}(h(X))-s^2|\le2\sqrt{s^2q}+q=B\sqrt{s^2M_4}+\frac{B^2}{4}M_4.$$
No independence of input coordinates or remainders is assumed. These covariance bounds require the fourth moment; the second-moment mean bound alone does not control a covariance difference.

## Facts & Assumptions

**Given:** Objects and hypotheses as in the Statement.

[L1] Under the stated convexity and Hessian bound, every $y\in U$ satisfies $\lvert h(y)-h(\mu)-\nabla h(\mu)\cdot(y-\mu)\rvert\le\frac{B}{2}\lvert y-\mu\rvert^2$. ([[lem-cm-uniform-second-order-remainder-bound]])

[L2] A continuous real-valued map on an open subset of $\mathbb R^m$ is Borel measurable, composition of a Borel map with a random element is a random variable, and sums, differences and real multiples of measurable real-valued functions are measurable. ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-measurable-function-between-measurable-spaces]], [[def-random-element-and-real-random-variable]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[L3] A measurable real-valued function $g$ with $\lvert g\rvert\le cf$ pointwise, where $c\ge0$ and $f$ is integrable with $f\ge0$, is integrable: monotonicity and homogeneity of the nonnegative integral give $\int\lvert g\rvert\le c\int f<+\infty$. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[L4] For integrable random variables, $\lvert E[G]\rvert\le E[\lvert G\rvert]$, and $0\le G\le H$ almost surely with $G,H$ integrable gives $E[G]\le E[H]$. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]])

[L5] Square-integrable covariance is symmetric and bilinear, with $\operatorname{Var}(Z)=E[Z^2]-E[Z]^2\le E[Z^2]$. The affine linearization has covariance $A\operatorname{Cov}(X)A^{\mathsf T}$. ([[lem-variance-and-covariance-identities-for-random-variables]], [[lem-cm-linearized-propagation-of-covariance]], [[def-cm-covariance-matrix-of-a-random-vector]])

[L6] Coordinatewise measurability is equivalent to measurability into $\mathbb R^d$. ([[thm-coordinatewise-measurability-into-r-n]])

## Proof

**Proof technique:** direct.

1.1 The function $h$ is continuous because it is $C^2$, hence Borel measurable, so $h\circ X$ is a random variable; the function $x\mapsto\nabla h(\mu)\cdot(x-\mu)$ is an affine map, hence Borel measurable, so its composition with $X$ is a random variable too. Therefore $R$, their difference, is a random variable. [given, L2]

1.2 For any square-integrable real variables $V,W$, center them as $V_0=V-E[V]$, $W_0=W-E[W]$, and write $a=E[V_0^2]$, $b=E[W_0^2]$, $c=E[V_0W_0]$. Products are integrable by $2|V_0W_0|\le V_0^2+W_0^2$. Monotonicity and linearity give $0\le E[(V_0+tW_0)^2]=a+2tc+t^2b$ for every real $t$. If $b>0$, take $t=-c/b$ to obtain $c^2\le ab$; if $b=0$, the affine expression $a+2tc$ is nonnegative for all $t$, forcing $c=0$. Consequently $|\operatorname{Cov}(V,W)|\le\sqrt{\operatorname{Var}(V)\operatorname{Var}(W)}$, including zero variances. [L4, L5, algebra]

2.1 Applying [L1] at $y=X(\omega)$ for every $\omega$ gives the pointwise bound $\lvert R\rvert\le\frac{B}{2}\lvert X-\mu\rvert^2$, and squaring gives $R^2\le\frac{B^2}{4}\lvert X-\mu\rvert^4$. [given, step 1.1, L1, algebra]

3.1 The function $\lvert X-\mu\rvert^2$ is integrable by hypothesis, so step 2.1 with $g=R$, $c=B/2$ and $f=\lvert X-\mu\rvert^2$ makes $R$ integrable by [L3], and [L4] applied to $R$ and to the pair $(0,\lvert R\rvert)$ gives $\lvert E[R]\rvert\le E\lvert R\rvert\le\frac{B}{2}E\lvert X-\mu\rvert^2$. [step 1.1, step 2.1, L3, L4, algebra]

3.2 If $E\lvert X-\mu\rvert^4<+\infty$, then step 2.1 with $g=R^2$, $c=B^2/4$ and $f=\lvert X-\mu\rvert^4$ makes $R^2$ integrable by [L3], and [L4] gives $E[R^2]\le\frac{B^2}{4}E\lvert X-\mu\rvert^4$. [step 1.1, step 2.1, given, L3, L4, algebra]

4.1 In the vector case apply steps 1.1–3.2 componentwise to $f_i$ and put $R_i=f_i(X)-L_i$. Each $R_i$ is measurable and $E[R_i^2]\le q_i$. Each $L_i$ is square-integrable as a finite linear combination of the square-integrable coordinates of $X$: $(\sum_{k=1}^m a_kv_k)^2\le(\sum_{k=1}^m a_k^2)|v|^2$. Thus $f_i(X)=L_i+R_i$ is square-integrable by $(u+v)^2\le2u^2+2v^2$. Coordinatewise measurability gives a random vector $f(X)$, and [L5] gives $\operatorname{Cov}(L)=S$ and $\operatorname{Var}(R_i)\le q_i$. [given, step 1.1, step 3.2, L5, L6, algebra]

5.1 By covariance bilinearity, $\operatorname{Cov}(f_i(X),f_j(X))-S_{ij}=\operatorname{Cov}(L_i,R_j)+\operatorname{Cov}(R_i,L_j)+\operatorname{Cov}(R_i,R_j)$. Apply step 1.2 to these three terms and use $\operatorname{Var}(L_i)=S_{ii}$ and $\operatorname{Var}(R_i)\le q_i$ from step 4.1. The triangle inequality yields $|\operatorname{Cov}(f(X))_{ij}-S_{ij}|\le\sqrt{S_{ii}q_j}+\sqrt{S_{jj}q_i}+\sqrt{q_iq_j}$. [step 4.1, step 1.2, L5, algebra]

6.1 Steps 3.1 and 3.2 establish the scalar mean and mean-square conclusions; step 5.1 proves the full vector covariance conclusion, and setting $d=1$ with $B_1=B$ gives $2\sqrt{s^2q}+q=B\sqrt{s^2M_4}+B^2M_4/4$. [step 3.1, step 3.2, step 5.1, algebra] ∎
