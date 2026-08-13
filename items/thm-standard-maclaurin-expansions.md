---
id: thm-standard-maclaurin-expansions
kind: theorem
title: "Standard Maclaurin expansions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-taylor-and-maclaurin-series, thm-geometric-series, def-real-exponential-function-and-e, def-sine-and-cosine-by-power-series, thm-log-one-plus-x-power-series, thm-principal-inverse-tangent-calculus, thm-real-power-continuity-and-derivatives, def-factorial-and-falling-factorial, thm-binomial-theorem, thm-binomial-closed-formula, thm-ratio-test, thm-termwise-differentiation-of-a-real-power-series, thm-algebra-of-derivatives, lem-derivative-of-a-power, thm-chain-rule, cor-differentiable-implies-continuous, def-real-power, def-natural-logarithm, thm-real-power-laws, cor-zero-derivative-implies-constant]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §4.5, pp. 265–267"
      url: "https://digitalcommons.trinity.edu/mono/7/"
    - title: "MIT OpenCourseWare 18.100C Real Analysis, Lecture 23"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/381efa3847b9801fc7a7bfe520018bd7_MIT18_100CF12_l23sum.pdf"
pipeline_run: null
---

## Statement

The standard Maclaurin expansions are

$$\frac1{1-x}=\sum_{n=0}^{\infty}x^n\qquad(|x|<1),$$

$$e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!},\qquad \sin x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!},\qquad \cos x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!}\qquad(x\in\mathbb R),$$

$$\log(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^n}{n}\qquad(-1<x\le1),$$

and

$$\arctan x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{2n+1}\qquad(|x|<1),$$

with value $\pi/4$ at $x=1$. For every real $\alpha$,

$$(1+x)^\alpha=\sum_{n=0}^{\infty}\binom{\alpha}{n}x^n\qquad(|x|<1),$$

where

$$\binom{\alpha}{0}=1,\qquad \binom{\alpha}{n+1}=\binom{\alpha}{n}\frac{\alpha-n}{n+1}.$$

## Facts & Assumptions

**Given:** The functions and power series displayed in the statement, and an arbitrary real parameter $\alpha$ for the generalized-binomial family.

[L1] The Maclaurin series of a smooth function $f$ is
$\sum_{n\ge0}f^{(n)}(0)x^n/n!$
([[def-taylor-and-maclaurin-series]]).

[L2] For $|x|<1$, the geometric series satisfies
$\sum_{n\ge0}x^n=1/(1-x)$ ([[thm-geometric-series]]).

[L3] For every real $x$, the exponential, sine, and cosine functions are
defined by the three displayed power series in the statement
([[def-real-exponential-function-and-e]],
[[def-sine-and-cosine-by-power-series]]).

[L4] For $-1<x\le1$,
$\log(1+x)=\sum_{n\ge1}(-1)^{n+1}x^n/n$; at $x=1$ the sum is $\log2$,
and at $x=-1$ the series diverges ([[thm-log-one-plus-x-power-series]]).

[L5] For $|x|<1$,
$\arctan x=\sum_{n\ge0}(-1)^nx^{2n+1}/(2n+1)$, and the series at $x=1$
converges to $\pi/4$ ([[thm-principal-inverse-tangent-calculus]]).

[L6] For every real $\beta$, $x\mapsto x^\beta$ is continuous on
$(0,\infty)$ and has derivative $\beta x^{\beta-1}$ there
([[thm-real-power-continuity-and-derivatives]]).

[L7] Factorials satisfy $(n+1)!=(n+1)n!$, and for a natural number $m$ the
finite binomial theorem is
$(a+b)^m=\sum_{n=0}^m\binom mn a^{m-n}b^n$
([[def-factorial-and-falling-factorial]], [[thm-binomial-theorem]]).

[L8] If a sequence has no zero terms and
$\limsup_{n\to\infty}|a_{n+1}/a_n|<1$, then $\sum a_n$ converges absolutely
([[thm-ratio-test]]).

[L9] A real power series may be differentiated term by term at every point
inside its radius of convergence, and the differentiated series has the same
radius ([[thm-termwise-differentiation-of-a-real-power-series]]).

[L10] Sums and products of differentiable functions satisfy the sum and
product rules ([[thm-algebra-of-derivatives]]).

[L11] If a real-valued function is continuous on an order-convex interval and
has derivative zero at every interior point, then it is constant
([[cor-zero-derivative-implies-constant]]).

[L12] For naturals $k\le n$, $\binom nk\,k!\,(n-k)!=n!$; consequently, as a
real number, $\binom nk=n!/\bigl(k!\,(n-k)!\bigr)$
([[thm-binomial-closed-formula]]).

[L13] If $g$ is differentiable at a limit point $c$ of its domain and $h$ is
differentiable at $g(c)$, itself a limit point of the domain of $h$, then
$h\circ g$ is differentiable at $c$ and
$(h\circ g)'(c)=h'\bigl(g(c)\bigr)g'(c)$ ([[thm-chain-rule]]).

[L14] For a natural $n\ge1$ the function $x\mapsto x^n$ is differentiable at
every real with derivative $nx^{n-1}$, and for $n=0$ it is the constant $1$,
with derivative $0$; consequently every polynomial function is differentiable
at every real, with the derivative computed term by term
([[lem-derivative-of-a-power]]).

[L15] A function differentiable at a limit point $c$ of its domain is
continuous at $c$ ([[cor-differentiable-implies-continuous]]).

[L16] For $a>0$ and $x\in\mathbb R$, $a^x=\exp(x\log a)$ ([[def-real-power]]);
$\log$ is the inverse of $\exp$, so $\log(\exp y)=y$ for every real $y$
([[def-natural-logarithm]]); and for $a,b>0$ and $r,s\in\mathbb R$,
$a^{r+s}=a^ra^s$ ([[thm-real-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 The geometric, exponential, sine, cosine, logarithmic, and inverse-tangent identities, with exactly the displayed domains and endpoint assertions, are [L2]–[L5]. [L2, L3, L4, L5]

1.2 If a function is represented near $0$ by a power series $\sum_{n\ge0}a_nx^n$, repeated termwise differentiation gives $f^{(k)}(0)=k!a_k$ for every $k\ge0$; hence that representing series is the Maclaurin series specified in [L1]. [L1, L7, L9, algebra]

1.3 Fix $\alpha\in\mathbb R$ and define $c_0=1$ and $c_{n+1}=c_n(\alpha-n)/(n+1)$ for $n\ge0$. [L7, choose]

1.4 If $\alpha=m$ is a nonnegative integer, the recurrence gives $c_n=\binom mn$ for $0\le n\le m$ and $c_n=0$ for $n>m$. Indeed $c_0=1=\binom m0$; and if $n<m$ and $c_n=\binom mn=m!/(n!\,(m-n)!)$, then, since $(n+1)!=(n+1)n!$ and $(m-n)!=(m-n)(m-n-1)!$ with $m-n\ge1$, $$c_{n+1}=\frac{m!}{n!\,(m-n)!}\cdot\frac{m-n}{n+1}=\frac{m!}{(n+1)!\,\bigl(m-(n+1)\bigr)!}=\binom m{n+1};$$ while $c_{m+1}=c_m(m-m)/(m+1)=0$, after which the recurrence keeps every term $0$. Taking $a=1$ and $b=x$ in the finite binomial theorem then gives $\sum_{n\ge0}c_nx^n=\sum_{n=0}^m\binom mn x^n=(1+x)^m$. [L7, L12, algebra]

1.5 If $\alpha$ is not a nonnegative integer and $0<|x|<1$, then every $c_nx^n$ is nonzero and $|c_{n+1}x^{n+1}/(c_nx^n)|=|x||\alpha-n|/(n+1)\to|x|<1$; hence $\sum_{n\ge0}c_nx^n$ converges absolutely. [L8, algebra]

1.6 On $(-1,1)$, the function $x\mapsto(1+x)^{-\alpha}$ is differentiable and has derivative $-\alpha(1+x)^{-\alpha-1}$. The inner map $x\mapsto1+x$ is a polynomial, so by [L14] it is differentiable with derivative $1$ at every point of $(-1,1)$, each of which is a limit point of $(-1,1)$; its value $1+x$ lies in $(0,\infty)$ and is a limit point of $(0,\infty)$, where by [L6] the outer map $u\mapsto u^{-\alpha}$ is differentiable with derivative $-\alpha u^{-\alpha-1}$. The chain rule [L13] therefore gives the composite derivative $-\alpha(1+x)^{-\alpha-1}\cdot1$. [L6, L13, L14, algebra]

2.1 Thus the six series in step 1.1 are precisely the asserted Maclaurin expansions; the logarithmic and inverse-tangent endpoint values are values of the same series, not claims of an open interval beyond its radius. [step 1.1, step 1.2]

2.2 Therefore, for every real $\alpha$, the power series $B(x):=\sum_{n\ge0}c_nx^n$ converges for $|x|<1$ and has radius of convergence at least $1$: the nonnegative-integer case is finite, the case $x=0$ is immediate, and all remaining cases follow from the ratio test. [step 1.4, step 1.5, algebra]

3.1 Termwise differentiation and the coefficient recurrence give $B'(x)=\sum_{n\ge0}(n+1)c_{n+1}x^n=\sum_{n\ge0}(\alpha-n)c_nx^n=\alpha B(x)-xB'(x)$ for $|x|<1$, and hence $(1+x)B'(x)=\alpha B(x)$. [L9, step 1.3, step 2.2, algebra]

4.1 For $G(x):=(1+x)^{-\alpha}B(x)$, the product rule and step 3.1 give $G'(x)=0$ throughout $(-1,1)$. [L10, step 1.6, step 3.1, algebra]

5.1 Step 4.1 makes $G$ differentiable at every point of $(-1,1)$, and every such point is a limit point of $(-1,1)$, so [L15] makes $G$ continuous on $(-1,1)$. [L15, step 4.1]

6.1 The interval $(-1,1)$ is order-convex, so [L11] and step 5.1 make $G$ constant there. Now $\exp0=1$ by [L3], hence $\log1=\log(\exp0)=0$ and $1^{-\alpha}=\exp(-\alpha\log1)=1$ by [L16]; so the constant value is $G(0)=1^{-\alpha}B(0)=c_0=1$, that is $(1+x)^{-\alpha}B(x)=1$ for every $|x|<1$. Multiplying by $(1+x)^{\alpha}$ and using $(1+x)^{\alpha}(1+x)^{-\alpha}=(1+x)^0=\exp\bigl(0\cdot\log(1+x)\bigr)=1$, again by [L16], gives $B(x)=(1+x)^\alpha$ for every $|x|<1$. [L3, L11, L16, step 1.3, step 5.1, algebra]

7.1 By step 1.2, this is the Maclaurin expansion of $(1+x)^\alpha$; its coefficients are the recursively defined numbers $\binom{\alpha}{n}=c_n$. The argument makes no assertion at $x=1$ or $x=-1$. [L1, step 1.2, step 2.2, step 6.1]

8.1 Combining steps 2.1 and 7.1 proves all the displayed expansions with no additional endpoint claims. [step 2.1, step 7.1] ∎
