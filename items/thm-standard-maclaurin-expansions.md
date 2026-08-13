---
id: thm-standard-maclaurin-expansions
kind: theorem
title: "Standard Maclaurin expansions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-taylor-and-maclaurin-series, thm-geometric-series, def-real-exponential-function-and-e, def-sine-and-cosine-by-power-series, thm-log-one-plus-x-power-series, thm-principal-inverse-tangent-calculus, thm-real-power-continuity-and-derivatives, def-factorial-and-falling-factorial, thm-binomial-theorem, thm-ratio-test, thm-termwise-differentiation-of-a-real-power-series, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant]
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

$$e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!},\qquad
\sin x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!},\qquad
\cos x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!}
\qquad(x\in\mathbb R),$$

$$\log(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^n}{n}
\qquad(-1<x\le1),$$

and

$$\arctan x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{2n+1}
\qquad(|x|<1),$$

with value $\pi/4$ at $x=1$. For every real $\alpha$,

$$
(1+x)^\alpha=\sum_{n=0}^{\infty}\binom{\alpha}{n}x^n
\qquad(|x|<1),
$$

where

$$\binom{\alpha}{0}=1,
\qquad
\binom{\alpha}{n+1}=\binom{\alpha}{n}\frac{\alpha-n}{n+1}.
$$

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

## Proof

**Proof technique:** direct.

1.1 The geometric, exponential, sine, cosine, logarithmic, and inverse-tangent identities, with exactly the displayed domains and endpoint assertions, are [L2]–[L5]. [L2, L3, L4, L5]

1.2 If a function is represented near $0$ by a power series $\sum_{n\ge0}a_nx^n$, repeated termwise differentiation gives $f^{(k)}(0)=k!a_k$ for every $k\ge0$; hence that representing series is the Maclaurin series specified in [L1]. [L1, L7, L9, algebra]

1.3 Fix $\alpha\in\mathbb R$ and define $c_0=1$ and $c_{n+1}=c_n(\alpha-n)/(n+1)$ for $n\ge0$. [L7, choose]

1.4 If $\alpha=m$ is a nonnegative integer, the recurrence gives $c_n=\binom mn$ for $0\le n\le m$ and $c_n=0$ for $n>m$; consequently $\sum_{n\ge0}c_nx^n=(1+x)^m$. [L7, algebra]

1.5 If $\alpha$ is not a nonnegative integer and $0<|x|<1$, then every $c_nx^n$ is nonzero and $|c_{n+1}x^{n+1}/(c_nx^n)|=|x||\alpha-n|/(n+1)\to|x|<1$; hence $\sum_{n\ge0}c_nx^n$ converges absolutely. [L8, algebra]

1.6 On $(-1,1)$, the function $x\mapsto(1+x)^{-\alpha}$ is differentiable and has derivative $-\alpha(1+x)^{-\alpha-1}$. [L6, L10, algebra]

2.1 Thus the six series in step 1.1 are precisely the asserted Maclaurin expansions; the logarithmic and inverse-tangent endpoint values are values of the same series, not claims of an open interval beyond its radius. [step 1.1, step 1.2]

2.2 Therefore, for every real $\alpha$, the power series $B(x):=\sum_{n\ge0}c_nx^n$ converges for $|x|<1$ and has radius of convergence at least $1$: the nonnegative-integer case is finite, the case $x=0$ is immediate, and all remaining cases follow from the ratio test. [step 1.4, step 1.5, algebra]

3.1 Termwise differentiation and the coefficient recurrence give $B'(x)=\sum_{n\ge0}(n+1)c_{n+1}x^n=\sum_{n\ge0}(\alpha-n)c_nx^n=\alpha B(x)-xB'(x)$ for $|x|<1$, and hence $(1+x)B'(x)=\alpha B(x)$. [L9, step 1.3, step 2.2, algebra]

4.1 For $G(x):=(1+x)^{-\alpha}B(x)$, the product rule and step 3.1 give $G'(x)=0$ throughout $(-1,1)$. [L10, step 1.6, step 3.1, algebra]

5.1 Fix $x_0\in(-1,1)$. Since $G'(x_0)=0$, the definition of this derivative gives a $\delta>0$ such that $0<|x-x_0|<\delta$ implies $|(G(x)-G(x_0))/(x-x_0)|<1$; after decreasing $\delta$ below an arbitrary $\varepsilon>0$, this gives $|G(x)-G(x_0)|<\varepsilon$. Thus $G$ is continuous on $(-1,1)$. [step 4.1, algebra]

6.1 The interval $(-1,1)$ is order-convex, so [L11] and step 5.1 make $G$ constant there. Since $G(0)=B(0)=c_0=1$, it follows that $B(x)=(1+x)^\alpha$ for every $|x|<1$. [L11, step 1.3, step 5.1, algebra]

7.1 By step 1.2, this is the Maclaurin expansion of $(1+x)^\alpha$; its coefficients are the recursively defined numbers $\binom{\alpha}{n}=c_n$. The argument makes no assertion at $x=1$ or $x=-1$. [L1, step 1.2, step 2.2, step 6.1]

8.1 Combining steps 2.1 and 7.1 proves all the displayed expansions with no additional endpoint claims. [step 2.1, step 7.1] ∎
