---
id: ex-negative-balanced-anova-moment-estimate
kind: example
title: "A negative balanced-ANOVA moment estimate"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-independent-random-elements
  - lem-normal-location-scale-density
  - thm-balanced-one-way-random-effects-expected-mean-squares
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the library's normal-law and normal-density suppliers; no additional choice is used."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §5.4, printed pp. 117–118: the raw between-minus-within mean-square estimate can be negative and truncating it to zero overstates evidence for identical groups."
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §7.4.4"
      url: "https://itl.nist.gov/div898/handbook/prc/section4/prc44.htm"
      locator: "Full page inspected, lines 43–46: the method-of-moments variance-component estimate can be negative; NIST then discusses alternative estimates."
---

## Example

In the balanced one-way model take $k=r=2$, fix $\mu=0$, and observe
$Y_{11}=-1$, $Y_{12}=1$, $Y_{21}=-1$, and $Y_{22}=1$.
The raw method-of-moments estimate of the between-group variance is negative.
This observed estimate does not establish that the true between-group
variance is zero.

## Facts & Assumptions

**Given:** The balanced one-way model with $\tau^2>0$, $\sigma^2>0$, $\mu=0$,
and the displayed observations.

[A1] AC is assumed for the normal-law convention used here.
[[def-axiom-of-choice]]

[F1] For $k,r\ge2$, the raw method-of-moments estimate is
$(MSB-MSW)/r$ under the balanced one-way normal random-effects model.
[[thm-balanced-one-way-random-effects-expected-mean-squares]]

[F2] For $m\in\mathbb R$ and $s>0$, $N(m,s^2)$ has the strictly positive
Lebesgue density $(2\pi s^2)^{-1/2}\exp(-(x-m)^2/(2s^2))$.
[[lem-normal-location-scale-density]]

[F3] Independent random elements have independent generated sigma-algebras,
so probabilities of finite coordinate rectangles factor.
[[def-independent-random-elements]]

## Verification

**Given:** The model and observations in the Example.

1.1 Both group means and the grand mean are zero, so $MSB=2(0^2+0^2)=0$. Each of the four within-group residuals is either $-1$ or $1$, hence $MSW=(1+1+1+1)/2=2$. By [F1], the raw estimate is $(0-2)/2=-1$. [F1, given, algebra]

2.1 The map from the four observations to $(MSB-MSW)/2$ is a polynomial divided by the fixed positive integer $2$, hence continuous. At the displayed table its value is $-1$ by step 1.1, so some open neighborhood of the table still has negative estimates. The latent vector $(a_1,a_2,\epsilon_{11},\epsilon_{12},\epsilon_{21},\epsilon_{22})=(0,0,-1,1,-1,1)$ maps to that table. Since every coordinate has a strictly positive normal density by [F2], an open rectangle around this latent vector has positive probability by independence [F3]; it can be chosen inside the preimage of the negative-estimate neighborhood. Thus negative estimates occur with positive probability even when $\tau^2>0$, so replacing them by zero changes the estimator and does not prove a structural zero. [A1, F2, F3, step 1.1, construct] ∎
