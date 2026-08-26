---
id: prop-positive-definite-binary-form-criterion
kind: proposition
title: "An integral binary quadratic form is positive definite exactly when its leading coefficient is positive and its discriminant is negative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-positive-definite-binary-quadratic-form, def-discriminant-of-binary-quadratic-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Section 9.2.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

Let $f(x,y)=ax^2+bxy+cy^2$ be an integral binary quadratic form, and let
$\Delta=b^2-4ac$ be its discriminant. Then $f$ is positive definite if and only
if

$$a>0\qquad\text{and}\qquad \Delta<0.$$

## Facts & Assumptions

**Given:** The integral binary quadratic form $f(x,y)=ax^2+bxy+cy^2$ and its discriminant $\Delta=b^2-4ac$.

[F1] A form is positive definite when $f(x,y)>0$ for every real pair $(x,y)\ne(0,0)$ ([[def-positive-definite-binary-quadratic-form]]).

[F2] The discriminant is $\Delta=b^2-4ac$ ([[def-discriminant-of-binary-quadratic-form]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is positive definite. Then $a=f(1,0)>0$ by [F1]. [F1]

1.2 Conversely, suppose $a>0$ and $\Delta<0$. For every real $(x,y)$ one has $4af(x,y)=(2ax+by)^2-\Delta y^2$ by direct expansion. [F2, given, algebra]

1.3 If $(x,y)\ne(0,0)$ and $y=0$, then $x\ne0$ and $f(x,0)=ax^2>0$ because $a>0$. [given, algebra]

2.1 Also $\left(-\frac{b}{2a},1\right)\ne(0,0)$, so [F1] gives $f\left(-\frac{b}{2a},1\right)>0$. Multiplying by $4a>0$ from step 1.1 yields $-\,\Delta=(2a(-b/(2a))+b)^2-\Delta>0$, hence $\Delta<0$. [F1, F2, step 1.1, algebra]

2.2 If $(x,y)\ne(0,0)$ and $y\ne0$, then step 1.2 gives $4af(x,y)=(2ax+by)^2+(-\Delta)y^2>0$ because both summands are nonnegative and the second is positive. [step 1.2, given, algebra]

3.1 Steps 2.2 and 1.3 cover every nonzero real pair, so $f$ is positive definite by [F1]. Together with steps 1.1 and 2.1, this proves the criterion. [F1, step 1.1, step 2.1, step 2.2, step 1.3] ∎
