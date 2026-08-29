---
id: ex-joukowski-sends-circles-to-ellipses
kind: example
title: "The Joukowski map sends circles centered at the origin to ellipses"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-joukowski-biholomorphism-outside-unit-disc]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

For $r>1$, the Joukowski map

$$J(z):=\frac12\left(z+\frac1z\right)$$

sends the circle $|z|=r$ to the ellipse

$$\frac{x^2}{\left(\frac{r+r^{-1}}2\right)^2}+\frac{y^2}{\left(\frac{r-r^{-1}}2\right)^2}=1.$$

## Facts & Assumptions

**Given:** A real $r>1$ and the Joukowski map of
[[thm-joukowski-biholomorphism-outside-unit-disc]].

[F1] The Joukowski map is
$$J(z)=\frac12\left(z+\frac1z\right)$$
([[thm-joukowski-biholomorphism-outside-unit-disc]]).

## Verification

1.1 Parameterizing the circle by $z=re^{it}$, $0\le t<2\pi$, [F1] gives $J(re^{it})=\frac12\left(re^{it}+r^{-1}e^{-it}\right)=\frac{r+r^{-1}}2\cos t+i\frac{r-r^{-1}}2\sin t$. [F1, given, algebra]

2.1 Writing $x=\frac{r+r^{-1}}2\cos t$ and $y=\frac{r-r^{-1}}2\sin t$, one gets $\frac{x^2}{\left(\frac{r+r^{-1}}2\right)^2}+\frac{y^2}{\left(\frac{r-r^{-1}}2\right)^2}=\cos^2 t+\sin^2 t=1$, so the image is the stated ellipse. [step 1.1, algebra] ∎
