---
id: lem-gaussian-square-is-the-plane-gaussian-integral
kind: lemma
title: "The square of the one-dimensional Gaussian integral is the plane Gaussian integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-gaussian-integral-is-finite-and-positive, thm-nonnegative-improper-multiple-integral-by-exhaustion, cor-riemann-integral-of-a-product-function, thm-exponential-addition-formula]
justified_by: []
aliases: []
landmark: true
short: "Gaussian square is the plane integral"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, formulas (3.1.71)–(3.1.75)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

Let $I=\int_{-\infty}^{\infty}e^{-x^2}\,dx$. Then

$$I^2=\int_{\mathbb R^2}e^{-(x^2+y^2)}\,d(x,y).$$

The plane integral is the nonnegative improper multiple integral.

## Facts & Assumptions

**Given:** The finite positive number $I$ and the nonnegative plane Gaussian.

[L1] For continuous $a$ and $b$ on rectangles, $\int_{A\times B}a(x)b(y)=\left(\int_Aa\right)\left(\int_Bb\right)$ ([[cor-riemann-integral-of-a-product-function]]).

[L2] Every compact Jordan exhaustion computes the nonnegative improper integral, independently of the exhaustion ([[thm-nonnegative-improper-multiple-integral-by-exhaustion]]).

[L3] The integral $I=\int_{-\infty}^{\infty}e^{-x^2}\,dx$ exists as a finite positive real number ([[lem-gaussian-integral-is-finite-and-positive]]).

[L4] The exponential satisfies $\exp(u+v)=\exp(u)\exp(v)$ ([[thm-exponential-addition-formula]]).

## Proof

**Proof technique:** direct.

1.1 For $R>0$, [L4] gives $e^{-(x^2+y^2)}=e^{-x^2}e^{-y^2}$, so [L1] yields $\int_{[-R,R]^2}e^{-(x^2+y^2)}\,d(x,y)=\left(\int_{-R}^Re^{-x^2}\,dx\right)^2$. [L1, L4]

2.1 Put $R=j+1$. The squares form a compact Jordan exhaustion of $\mathbb R^2$, so [L2] makes their plane integrals tend to the nonnegative improper plane integral; [L3] makes each one-dimensional factor tend to $I$. [step 1.1, L2, L3]

3.1 Passing to the limit in the product identity of step 1.1 gives the plane integral equal to $I^2$. [step 2.1, algebra] ∎
