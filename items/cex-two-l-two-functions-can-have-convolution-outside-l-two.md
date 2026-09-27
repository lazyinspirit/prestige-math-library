---
id: cex-two-l-two-functions-can-have-convolution-outside-l-two
kind: counterexample
title: "Two $L^2$ functions can have convolution outside $L^2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: []
landmark: false
proof_strategy: "Take the one-dimensional functions $f=g=(1+|x|)^{-3/4}$. They lie in $L^2$, but their convolution has an $x^{-1/2}$ tail and therefore does not lie in $L^2$."
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (cex-two-l-two-functions-can-have-convolution-outside-l-two). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement refuted

Every convolution of two $L^2(\mathbb{R})$ functions again belongs to
$L^2(\mathbb{R})$.

## Facts & Assumptions

**Given:** The one-dimensional function $$ f(x)=g(x):=(1+|x|)^{-3/4}. $$

## Counterexample

**Proof technique:** direct.

1.1 Since [given, algebra]
$$ \int_{\mathbb{R}} (1+|x|)^{-3/2}\,dx < \infty, $$ the functions $f$ and $g$ lie in $L^2(\mathbb{R})$. [given, algebra]

2.1 For each fixed $x$, the convolution integral is finite: on a bounded $y$-interval its continuous integrand is bounded, while for $|y|>2|x|+2$ one has $1+|x-y|\ge(1+|y|)/2$, so the integrand is at most $2^{3/4}(1+|y|)^{-3/2}$, an integrable tail. For $x>2$, [step 1.1, algebra]
$$ (f*g)(x) = \int_{\mathbb{R}} (1+|x-y|)^{-3/4}(1+|y|)^{-3/4}\,dy \ge \int_1^{x-1} x^{-3/4}x^{-3/4}\,dy = \frac{x-2}{x^{3/2}}. $$ So for large $x$, $$ (f*g)(x) \ge c\,x^{-1/2} $$ for some $c>0$. [step 1.1, algebra]

3.1 But [step 2.1, algebra]
$$ \int_2^\infty x^{-1}\,dx = \infty, $$ so the lower bound from step 2.1 shows $f*g \notin L^2(\mathbb{R})$. Hence the statement refuted above is false. [step 2.1, algebra] ∎