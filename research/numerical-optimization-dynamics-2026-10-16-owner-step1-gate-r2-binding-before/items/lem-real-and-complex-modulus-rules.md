---
id: lem-real-and-complex-modulus-rules
kind: lemma
title: Real and complex modulus product and triangle inequalities
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field, def-intervals-rectangles-and-complex-balls, lem-nonnegative-square-root-exists-and-unique]
sources:
  references:
    - title: "Steven G. Krantz, Foundations of Analysis, §1.2"
      url: "https://api.pageplace.de/preview/DT0400.9781482220759_A37871115/preview-9781482220759_A37871115.pdf"
---

## Statement

For real $x,y$, $|xy|=|x||y|$ and $|x+y|\le|x|+|y|$. For complex
$z,w$, $|zw|=|z||w|$, $|z+w|\le|z|+|w|$, and if $w\ne0$ then
$|z/w|=|z|/|w|$.

## Facts & Assumptions

**Given:** The ordered field and modulus definitions in
[[def-complete-ordered-real-field]] and
[[def-intervals-rectangles-and-complex-balls]].

[L1] [[def-complete-ordered-real-field]]: real absolute value is $|x|=x$ for
$x\ge0$ and $|x|=-x$ for $x<0$.

[L2] [[def-intervals-rectangles-and-complex-balls]]: for $z=x+iy$,
$|z|=\sqrt{x^2+y^2}$; for $z\ne0$, $1/z=(x-iy)/(x^2+y^2)$.

[L3] [[lem-nonnegative-square-root-exists-and-unique]]: the square root is
nonnegative and increasing on nonnegative inputs.

## Proof

1.1 By [L1], $-|x|\le x\le|x|$ and $-|y|\le y\le|y|$. Adding gives
$-(|x|+|y|)\le x+y\le|x|+|y|$, hence $|x+y|\le|x|+|y|$. The product
identity follows by considering the four sign choices for $x$ and $y$ in the
piecewise definition [L1]. [given, L1, algebra]

1.2 For $z=x+iy$ and $w=u+iv$, expansion gives
$$
|zw|^2=(xu-yv)^2+(xv+yu)^2=(x^2+y^2)(u^2+v^2)=|z|^2|w|^2.
$$
Both moduli are nonnegative by [L2], so uniqueness of nonnegative square
roots [L3] gives $|zw|=|z||w|$. [given, L2, L3, algebra]

1.3 The identity
$$
(x^2+y^2)(u^2+v^2)-(xu+yv)^2=(xv-yu)^2\ge0.
$$
Thus $(xu+yv)^2\le|z|^2|w|^2$. Taking nonnegative square roots gives
$|xu+yv|\le|z||w|$, hence $xu+yv\le|z||w|$.
Thus $|z+w|^2=|z|^2+|w|^2+2(xu+yv)\le(|z|+|w|)^2$; nonnegative square roots give
$|z+w|\le|z|+|w|$. By the reciprocal formula in [L2],
$w(1/w)=(u+iv)(u-iv)/(u^2+v^2)=1$. Step 1.2 gives
$|w||1/w|=|1|=1$. Here $|w|>0$: otherwise $x^2+y^2=0$ forces $x=y=0$
because each square is nonnegative, contrary to $w\ne0$. Hence
$|1/w|=1/|w|$, and another application of step 1.2 yields
$|z/w|=|z|/|w|$. [step 1.2, L2, L3, algebra] ∎
