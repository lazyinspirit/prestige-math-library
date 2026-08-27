---
id: ex-golden-ratio-as-a-periodic-continued-fraction
kind: example
title: "The continued fraction [1; overline 1] for the golden ratio"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-regular-continued-fraction, def-quadratic-irrational, lem-periodic-continued-fraction-is-quadratic, thm-convergence-of-infinite-regular-continued-fractions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Bruce Ikenaga, Periodic Continued Fractions"
      url: "https://sites.millersville.edu/bikenaga/number-theory/periodic-continued-fractions/periodic-continued-fractions.html"
pipeline_run: null
---

## Example

If
$$x=[1;\overline1],$$
then
$$x=1+\frac1x,$$
so $x$ is the positive root of $x^2-x-1=0$, namely the golden ratio
$$\varphi=\frac{1+\sqrt5}{2}.$$

## Facts & Assumptions

**Given:** The purely periodic continued fraction $x=[1;\overline1]$.

[F1] Every eventually periodic regular continued fraction has quadratic-
irrational value ([[lem-periodic-continued-fraction-is-quadratic]]).

[F2] The value of an infinite regular continued fraction is the common limit
of its convergents; for $[1;1,1,\ldots]$ the increasing even subsequence starts
at $1$ ([[thm-convergence-of-infinite-regular-continued-fractions]]).

[F3] Finite regular continued fractions are evaluated by the recursion
$[a_0;a_1,\ldots,a_n]=a_0+1/[a_1;\ldots,a_n]$
([[def-regular-continued-fraction]]).

## Verification

**Proof technique:** direct.

1.1 Let $x_m=[1;\underbrace{1,\ldots,1}_{m\text{ further digits}}]$. By [F2], $x_m\to x$ and $x\ge1$, while [F3] gives $x_{m+1}=1+1/x_m$ and $x_m\ge1$. Hence $$\left|\frac1{x_m}-\frac1x\right|=\frac{|x_m-x|}{x_mx}\le |x_m-x|\longrightarrow0,$$ so taking limits in the recursion gives $$x=1+\frac1x.$$ Multiplication by $x$ now gives $$x^2-x-1=0,$$ whose positive solution is $$x=\frac{1+\sqrt5}{2}.$$ [F2, F3, given, algebra]

2.1 The continued fraction is purely periodic, so [F1] says its value is a quadratic irrational. Step 1.1 exhibits the quadratic equation explicitly, and its positive root is the golden ratio $\varphi$. [F1, step 1.1] ∎
