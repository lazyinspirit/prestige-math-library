---
id: cex-two-l-two-functions-can-have-convolution-outside-l-two
kind: counterexample
title: "Two $L^2$ functions can have convolution outside $L^2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-young-convolution-inequality]
landmark: false
proof_strategy: "Take the one-dimensional functions $f=g=(1+|x|)^{-3/4}$. They lie in $L^2$, but their convolution has an $x^{-1/2}$ tail and therefore does not lie in $L^2$."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement refuted

Every convolution of two $L^2(\mathbb{R})$ functions again belongs to
$L^2(\mathbb{R})$.

## Facts & Assumptions

**Given:** The one-dimensional function
$$ f(x)=g(x):=(1+|x|)^{-3/4}. $$

[L1] Young's inequality controls only the exponents satisfying
$1/r = 1/p + 1/q - 1$ ([[thm-young-convolution-inequality]]).

## Counterexample

**Proof technique:** direct.

1.1 Since [L1, given, algebra]
$$ \int_{\mathbb{R}} (1+|x|)^{-3/2}\,dx < \infty, $$
the functions $f$ and $g$ lie in $L^2(\mathbb{R})$. [L1, given, algebra]

2.1 For $x > 2$, [step 1.1, algebra]
$$ (f*g)(x) = \int_{\mathbb{R}} (1+|x-y|)^{-3/4}(1+|y|)^{-3/4}\,dy \ge \int_1^{x-1} x^{-3/4}x^{-3/4}\,dy = \frac{x-2}{x^{3/2}}. $$
So for large $x$,
$$ (f*g)(x) \ge c\,x^{-1/2} $$
for some $c>0$. [step 1.1, algebra]

3.1 But [L1, step 2.1]
$$ \int_2^\infty x^{-1}\,dx = \infty, $$
so the lower bound from step 2.1 shows $f*g \notin L^2(\mathbb{R})$. Hence the
statement refuted above is false. [L1, step 2.1] ∎